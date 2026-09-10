import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured, handleFirestoreError, OperationType } from './firebase';
import { QuoteFormData, QuoteSubmission } from '../types';

const LOCAL_STORAGE_KEY = 'apex_roofing_quote_submissions_v1';

const SEED_SUBMISSIONS: QuoteSubmission[] = [
  {
    id: 'seed-quote-101',
    referenceNumber: 'APX-78241',
    fullName: 'Jonathan Miller',
    email: 'j.miller@austinproperties.example',
    phone: '(512) 555-0194',
    propertyType: 'residential',
    serviceRequired: 'roof-replacement',
    estimatedSqFt: '3,200 sq ft',
    roofAge: '20+ years old',
    urgency: 'immediate',
    address: '4928 Lost Creek Blvd, Austin, TX',
    message: 'Noticeable shingle granule loss in gutters and two active ceiling stains above the master bedroom after last week’s storm. Need a full drone inspection and replacement estimate.',
    status: 'scheduled',
    createdAt: new Date(Date.now() - 24 * 3600 * 1000 * 2).toISOString()
  },
  {
    id: 'seed-quote-102',
    referenceNumber: 'APX-63912',
    fullName: 'Highland Ridge Commercial HOA',
    email: 'facilities@highlandridge.example',
    phone: '(214) 555-8321',
    propertyType: 'commercial',
    serviceRequired: 'commercial-roofing',
    estimatedSqFt: '24,000 sq ft',
    roofAge: '15 years old',
    urgency: 'within-month',
    address: '8800 Technology Forest Dr, Dallas, TX',
    message: 'Looking to replace aged ballasted EPDM with energy-reflective 60-mil TPO membrane. Board meeting on the 15th to review top 3 certified contractor bids.',
    status: 'quoted',
    createdAt: new Date(Date.now() - 24 * 3600 * 1000 * 5).toISOString()
  }
];

function getStoredLocalQuotes(): QuoteSubmission[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(SEED_SUBMISSIONS));
      return SEED_SUBMISSIONS;
    }
    return JSON.parse(raw);
  } catch {
    return SEED_SUBMISSIONS;
  }
}

function saveLocalQuotes(quotes: QuoteSubmission[]): void {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
  } catch (err) {
    console.error('Failed to persist quotes locally:', err);
  }
}

export function generateReferenceNumber(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let randomStr = '';
  for (let i = 0; i < 5; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `APX-${randomStr}`;
}

export async function submitQuoteRequest(data: QuoteFormData): Promise<QuoteSubmission> {
  const referenceNumber = generateReferenceNumber();
  const timestamp = new Date().toISOString();

  const submissionPayload: Omit<QuoteSubmission, 'id'> = {
    ...data,
    referenceNumber,
    createdAt: timestamp,
    status: 'new'
  };

  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, 'quotes'), submissionPayload);
      const newSubmission: QuoteSubmission = {
        id: docRef.id,
        ...submissionPayload
      };
      // Mirror to local storage for instant reactive UI updates
      const current = getStoredLocalQuotes();
      saveLocalQuotes([newSubmission, ...current]);
      return newSubmission;
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'quotes');
    }
  }

  // Resilient Local Storage Engine (for instant out-of-the-box demo & preview)
  await new Promise(resolve => setTimeout(resolve, 600)); // realistic network feel
  const newSubmission: QuoteSubmission = {
    id: `local-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    ...submissionPayload
  };

  const current = getStoredLocalQuotes();
  saveLocalQuotes([newSubmission, ...current]);
  return newSubmission;
}

export async function fetchAllQuoteSubmissions(): Promise<QuoteSubmission[]> {
  if (isFirebaseConfigured && db) {
    try {
      const snap = await getDocs(collection(db, 'quotes'));
      const remoteQuotes: QuoteSubmission[] = [];
      snap.forEach(d => {
        remoteQuotes.push({ id: d.id, ...d.data() } as QuoteSubmission);
      });
      if (remoteQuotes.length > 0) {
        return remoteQuotes.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      }
    } catch (error) {
      console.warn('Could not fetch remote Firestore quotes (likely security rules or unauthenticated admin), falling back to local store:', error);
    }
  }

  return getStoredLocalQuotes().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function updateQuoteStatus(id: string, newStatus: QuoteSubmission['status']): Promise<void> {
  if (isFirebaseConfigured && db && !id.startsWith('local-') && !id.startsWith('seed-')) {
    try {
      const docRef = doc(db, 'quotes', id);
      await updateDoc(docRef, { status: newStatus });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `quotes/${id}`);
    }
  }

  const current = getStoredLocalQuotes();
  const updated = current.map(item => item.id === id ? { ...item, status: newStatus } : item);
  saveLocalQuotes(updated);
}

export async function removeQuoteSubmission(id: string): Promise<void> {
  if (isFirebaseConfigured && db && !id.startsWith('local-') && !id.startsWith('seed-')) {
    try {
      const docRef = doc(db, 'quotes', id);
      await deleteDoc(docRef);
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `quotes/${id}`);
    }
  }

  const current = getStoredLocalQuotes();
  const filtered = current.filter(item => item.id !== id);
  saveLocalQuotes(filtered);
}
