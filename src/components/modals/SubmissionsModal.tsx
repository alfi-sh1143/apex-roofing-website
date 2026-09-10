import React, { useState, useEffect } from 'react';
import { X, Database, CheckCircle2, Clock, Mail, Building, Users, RefreshCw } from 'lucide-react';
import { fetchAllSubmissions } from '../../lib/firestoreService';
import { TrialLeadSubmission, ContactInquirySubmission } from '../../types';

interface SubmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmissionsUpdated?: (count: number) => void;
}

export const SubmissionsModal: React.FC<SubmissionsModalProps> = ({
  isOpen,
  onClose,
  onSubmissionsUpdated
}) => {
  const [activeTab, setActiveTab] = useState<'trials' | 'inquiries'>('trials');
  const [trials, setTrials] = useState<TrialLeadSubmission[]>([]);
  const [inquiries, setInquiries] = useState<ContactInquirySubmission[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchAllSubmissions();
      setTrials(data.trials);
      setInquiries(data.inquiries);
      if (onSubmissionsUpdated) {
        onSubmissionsUpdated(data.trials.length + data.inquiries.length);
      }
    } catch (err) {
      console.error('Failed to load submissions:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0F172A]">
                Submissions & Lead Capture Log
              </h3>
              <p className="text-xs text-[#64748B]">
                Synced with Firestore / Persistent Storage Engine
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              disabled={isLoading}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors cursor-pointer"
              title="Refresh records"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-3 pb-2 border-b border-[#F1F5F9] flex gap-2">
          <button
            onClick={() => setActiveTab('trials')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'trials'
                ? 'bg-[#2563EB] text-white'
                : 'text-[#475569] hover:bg-[#F1F5F9]'
            }`}
          >
            <span>Free Trial Requests</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'trials' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {trials.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'inquiries'
                ? 'bg-[#2563EB] text-white'
                : 'text-[#475569] hover:bg-[#F1F5F9]'
            }`}
          >
            <span>Contact & Sales Inquiries</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              activeTab === 'inquiries' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {inquiries.length}
            </span>
          </button>
        </div>

        {/* Body content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {activeTab === 'trials' && (
            <>
              {trials.length === 0 ? (
                <div className="text-center py-12 text-sm text-[#64748B]">
                  No trial registrations recorded yet. Click "Start Free Trial" anywhere to test!
                </div>
              ) : (
                trials.map(lead => (
                  <div
                    key={lead.id}
                    className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#CBD5E1] bg-white transition-all shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#0F172A]">{lead.fullName}</span>
                        <span className="text-[11px] font-semibold bg-[#EFF6FF] text-[#2563EB] px-2 py-0.5 rounded">
                          {lead.planInterest} Plan
                        </span>
                        <span className="text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded">
                          {lead.status}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#64748B] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(lead.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#475569] bg-[#F8FAFC] p-2.5 rounded-lg border border-[#F1F5F9] mb-2">
                      <div className="flex items-center gap-1.5 truncate">
                        <Mail className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
                        <span className="truncate">{lead.email}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <Building className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
                        <span className="truncate">{lead.companyName}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
                        <span>{lead.teamSize} members</span>
                      </div>
                    </div>

                    {lead.primaryUseCase && (
                      <p className="text-xs text-[#64748B]">
                        <strong className="text-[#334155]">Focus:</strong> {lead.primaryUseCase}
                      </p>
                    )}
                  </div>
                ))
              )}
            </>
          )}

          {activeTab === 'inquiries' && (
            <>
              {inquiries.length === 0 ? (
                <div className="text-center py-12 text-sm text-[#64748B]">
                  No contact inquiries recorded yet. Submit a message from the Contact page to test!
                </div>
              ) : (
                inquiries.map(inq => (
                  <div
                    key={inq.id}
                    className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#CBD5E1] bg-white transition-all shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#0F172A]">{inq.fullName}</span>
                        <span className="text-[11px] font-mono bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-bold">
                          {inq.referenceNumber}
                        </span>
                        <span className="text-[10px] uppercase font-semibold bg-[#EFF6FF] text-[#2563EB] px-2 py-0.5 rounded">
                          {inq.inquiryType}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#64748B] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(inq.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-[#475569] mb-2">
                      <span>{inq.email}</span>
                      {inq.company && <span>&middot; {inq.company}</span>}
                    </div>

                    <div className="bg-[#F8FAFC] p-3 rounded-lg border border-[#F1F5F9] text-xs text-[#334155]">
                      <div className="font-semibold text-[#0F172A] mb-1">{inq.subject}</div>
                      <p className="whitespace-pre-wrap">{inq.message}</p>
                    </div>
                  </div>
                ))
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
          <span>Firestore Collection: <code>trial_leads</code> & <code>contact_inquiries</code></span>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#2563EB] hover:underline cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
