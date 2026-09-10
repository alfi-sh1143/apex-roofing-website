import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db, isFirebaseConfigured, handleFirestoreError, OperationType } from './firebase';
import { TrialLeadSubmission, ContactInquirySubmission } from '../types';

const LOCAL_STORAGE_TRIALS_KEY = 'flowdesk_ai_trial_submissions_v1';
const LOCAL_STORAGE_INQUIRIES_KEY = 'flowdesk_ai_contact_inquiries_v1';

const SEED_TRIALS: TrialLeadSubmission[] = [
  {
    id: 'seed-trial-1',
    fullName: 'Alexandra Ward',
    email: 'alex.ward@stratosystems.example',
    companyName: 'Strato Systems',
    teamSize: '11-50',
    primaryUseCase: 'Cross-functional sprint triage & automated release notes',
    planInterest: 'Pro',
    createdAt: new Date(Date.now() - 24 * 3600 * 1000 * 2).toISOString(),
    status: 'trial-active'
  },
  {
    id: 'seed-trial-2',
    fullName: 'David Lin',
    email: 'david.lin@vertexinfra.example',
    companyName: 'Vertex Cloud',
    teamSize: '51-200',
    primaryUseCase: 'Autonomous calendar focus defense & Monte Carlo velocity forecasting',
    planInterest: 'Business',
    createdAt: new Date(Date.now() - 24 * 3600 * 1000 * 4).toISOString(),
    status: 'trial-active'
  }
];

const SEED_INQUIRIES: ContactInquirySubmission[] = [
  {
    id: 'seed-inq-1',
    referenceNumber: 'FLD-7821',
    fullName: 'Miriam Vance',
    email: 'miriam@kineticbio.example',
    company: 'Kinetic Bio',
    subject: 'Enterprise SLA & Private VPC Hosting questions',
    message: 'We are looking to roll out FlowDesk across 340 research engineers and need confirmation of SOC2 Type II compliance and zero-model-training guarantees.',
    inquiryType: 'sales',
    createdAt: new Date(Date.now() - 24 * 3600 * 1000 * 1).toISOString(),
    status: 'in-review'
  }
];

function getStoredLocalTrials(): TrialLeadSubmission[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_TRIALS_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_TRIALS_KEY, JSON.stringify(SEED_TRIALS));
      return SEED_TRIALS;
    }
    return JSON.parse(raw);
  } catch {
    return SEED_TRIALS;
  }
}

function saveLocalTrials(items: TrialLeadSubmission[]): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_TRIALS_KEY, JSON.stringify(items));
  } catch (err) {
    console.error('Failed to persist trial submissions locally:', err);
  }
}

function getStoredLocalInquiries(): ContactInquirySubmission[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_INQUIRIES_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_INQUIRIES_KEY, JSON.stringify(SEED_INQUIRIES));
      return SEED_INQUIRIES;
    }
    return JSON.parse(raw);
  } catch {
    return SEED_INQUIRIES;
  }
}

function saveLocalInquiries(items: ContactInquirySubmission[]): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_INQUIRIES_KEY, JSON.stringify(items));
  } catch (err) {
    console.error('Failed to persist contact inquiries locally:', err);
  }
}

export function generateReferenceNumber(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let randomStr = '';
  for (let i = 0; i < 4; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `FLD-${randomStr}`;
}

export async function submitTrialLead(
  data: Omit<TrialLeadSubmission, 'id' | 'createdAt' | 'status'>
): Promise<TrialLeadSubmission> {
  const timestamp = new Date().toISOString();
  const submissionPayload: Omit<TrialLeadSubmission, 'id'> = {
    ...data,
    createdAt: timestamp,
    status: 'trial-active'
  };

  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'trial_leads'), submissionPayload);
      const newLead: TrialLeadSubmission = {
        id: docRef.id,
        ...submissionPayload
      };
      const current = getStoredLocalTrials();
      saveLocalTrials([newLead, ...current]);
      return newLead;
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'trial_leads');
    }
  }

  // Resilient Local Storage Engine
  await new Promise(resolve => setTimeout(resolve, 500));
  const newLead: TrialLeadSubmission = {
    id: `local-lead-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    ...submissionPayload
  };
  const current = getStoredLocalTrials();
  saveLocalTrials([newLead, ...current]);
  return newLead;
}

export async function submitContactInquiry(
  data: Omit<ContactInquirySubmission, 'id' | 'createdAt' | 'status' | 'referenceNumber'>
): Promise<ContactInquirySubmission> {
  const referenceNumber = generateReferenceNumber();
  const timestamp = new Date().toISOString();
  const submissionPayload: Omit<ContactInquirySubmission, 'id'> = {
    ...data,
    referenceNumber,
    createdAt: timestamp,
    status: 'new'
  };

  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'contact_inquiries'), submissionPayload);
      const newInquiry: ContactInquirySubmission = {
        id: docRef.id,
        ...submissionPayload
      };
      const current = getStoredLocalInquiries();
      saveLocalInquiries([newInquiry, ...current]);
      return newInquiry;
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'contact_inquiries');
    }
  }

  // Resilient Local Storage Engine
  await new Promise(resolve => setTimeout(resolve, 500));
  const newInquiry: ContactInquirySubmission = {
    id: `local-inq-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    ...submissionPayload
  };
  const current = getStoredLocalInquiries();
  saveLocalInquiries([newInquiry, ...current]);
  return newInquiry;
}

export async function fetchAllSubmissions(): Promise<{
  trials: TrialLeadSubmission[];
  inquiries: ContactInquirySubmission[];
}> {
  let trials = getStoredLocalTrials();
  let inquiries = getStoredLocalInquiries();

  if (isFirebaseConfigured && db) {
    try {
      const trialsSnap = await getDocs(collection(db, 'trial_leads'));
      const remoteTrials: TrialLeadSubmission[] = [];
      trialsSnap.forEach(d => remoteTrials.push({ id: d.id, ...d.data() } as TrialLeadSubmission));
      if (remoteTrials.length > 0) trials = remoteTrials;

      const inqSnap = await getDocs(collection(db, 'contact_inquiries'));
      const remoteInq: ContactInquirySubmission[] = [];
      inqSnap.forEach(d => remoteInq.push({ id: d.id, ...d.data() } as ContactInquirySubmission));
      if (remoteInq.length > 0) inquiries = remoteInq;
    } catch (error) {
      console.warn('Could not read remote Firestore collections, using local store:', error);
    }
  }

  return {
    trials: trials.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    inquiries: inquiries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  };
}
