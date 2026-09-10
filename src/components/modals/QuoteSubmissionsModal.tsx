import React, { useState } from 'react';
import { 
  X, 
  Database, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  Search, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  RefreshCw,
  Plus
} from 'lucide-react';
import { QuoteSubmission } from '../../types';
import { updateQuoteStatus, removeQuoteSubmission, submitQuoteRequest } from '../../lib/firestoreService';
import { isFirebaseConfigured } from '../../lib/firebase';
import { Button } from '../ui/Button';

interface QuoteSubmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  submissions: QuoteSubmission[];
  onRefresh: () => void;
}

export const QuoteSubmissionsModal: React.FC<QuoteSubmissionsModalProps> = ({
  isOpen,
  onClose,
  submissions,
  onRefresh
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [isAddingTest, setIsAddingTest] = useState(false);

  if (!isOpen) return null;

  const filtered = submissions.filter(item => {
    const matchesSearch = 
      item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm);

    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = async (id: string, newStatus: QuoteSubmission['status']) => {
    await updateQuoteStatus(id, newStatus);
    onRefresh();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this quote submission?')) {
      await removeQuoteSubmission(id);
      onRefresh();
    }
  };

  const handleCreateTestLead = async () => {
    setIsAddingTest(true);
    try {
      await submitQuoteRequest({
        fullName: 'Dr. Emily Patterson',
        email: 'e.patterson@austinhealth.example',
        phone: '(512) 555-4921',
        propertyType: 'residential',
        serviceRequired: 'roof-inspection',
        estimatedSqFt: '3,800 sq ft',
        roofAge: '18 years',
        urgency: 'within-month',
        address: '2204 Scenic Dr, Austin, TX 78703',
        message: 'Purchasing a 1990s hillside home. Need certified drone inspection and written estimate before closing contingency expires.'
      });
      onRefresh();
    } finally {
      setIsAddingTest(false);
    }
  };

  const getStatusBadge = (status: QuoteSubmission['status']) => {
    switch (status) {
      case 'new':
        return <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">New Lead</span>;
      case 'contacted':
        return <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">Contacted</span>;
      case 'scheduled':
        return <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-purple-100 text-purple-800 border border-purple-200">Inspection Scheduled</span>;
      case 'quoted':
        return <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">Quote Delivered</span>;
      case 'archived':
        return <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">Archived</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 bg-[#0B192C] text-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8681A] flex items-center justify-center text-white shadow-sm">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Quote Submissions & Leads Manager</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isFirebaseConfigured ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-700 text-slate-300'
                }`}>
                  {isFirebaseConfigured ? 'Firestore Live Sync' : 'Local Durable DB'}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Review captured quote requests, customer details, and update dispatch status.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onRefresh}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              title="Refresh"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, phone, ref #..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-[#E8681A]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-700 focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="new">New Leads</option>
              <option value="contacted">Contacted</option>
              <option value="scheduled">Scheduled</option>
              <option value="quoted">Quoted</option>
              <option value="archived">Archived</option>
            </select>

            <Button
              size="sm"
              variant="outline"
              onClick={handleCreateTestLead}
              isLoading={isAddingTest}
              leftIcon={<Plus className="w-3 h-3" />}
              className="text-xs"
            >
              Add Test Lead
            </Button>
          </div>
        </div>

        {/* Content list */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <Database className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="text-sm font-semibold text-slate-600">No quote requests found</p>
              <p className="text-xs mt-1">Submit a quote request using the website form or click "Add Test Lead".</p>
            </div>
          ) : (
            filtered.map(quote => (
              <div
                key={quote.id}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs transition-all space-y-3"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#E8681A] bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                      {quote.referenceNumber}
                    </span>
                    <h4 className="font-bold text-sm text-[#0B192C]">{quote.fullName}</h4>
                    <span className="text-[11px] text-slate-400">
                      • {new Date(quote.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {getStatusBadge(quote.status)}
                    <select
                      value={quote.status}
                      onChange={e => handleStatusChange(quote.id, e.target.value as any)}
                      className="text-[11px] font-semibold border border-slate-200 rounded px-2 py-0.5 bg-slate-50 text-slate-700"
                    >
                      <option value="new">Mark New</option>
                      <option value="contacted">Mark Contacted</option>
                      <option value="scheduled">Mark Scheduled</option>
                      <option value="quoted">Mark Quoted</option>
                      <option value="archived">Mark Archived</option>
                    </select>

                    <button
                      onClick={() => handleDelete(quote.id)}
                      className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors cursor-pointer"
                      title="Delete entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-600 truncate">
                    <Phone className="w-3.5 h-3.5 text-[#E8681A] shrink-0" />
                    <a href={`tel:${quote.phone}`} className="hover:underline truncate font-medium">
                      {quote.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-600 truncate">
                    <Mail className="w-3.5 h-3.5 text-[#E8681A] shrink-0" />
                    <a href={`mailto:${quote.email}`} className="hover:underline truncate">
                      {quote.email}
                    </a>
                  </div>

                  {quote.address && (
                    <div className="flex items-center gap-2 text-slate-600 truncate">
                      <MapPin className="w-3.5 h-3.5 text-[#E8681A] shrink-0" />
                      <span className="truncate">{quote.address}</span>
                    </div>
                  )}
                </div>

                {/* Parameters pills */}
                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                    Service: <strong className="capitalize text-[#0B192C]">{quote.serviceRequired.replace('-', ' ')}</strong>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                    Property: <strong className="capitalize text-[#0B192C]">{quote.propertyType}</strong>
                  </span>
                  {quote.estimatedSqFt && (
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                      Size: <strong className="text-[#0B192C]">{quote.estimatedSqFt}</strong>
                    </span>
                  )}
                  {quote.roofAge && (
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                      Roof Age: <strong className="text-[#0B192C]">{quote.roofAge}</strong>
                    </span>
                  )}
                </div>

                {/* Message if present */}
                {quote.message && (
                  <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 italic leading-relaxed">
                    "{quote.message}"
                  </p>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>Total Quotes: {submissions.length}</span>
          <Button size="sm" variant="secondary" onClick={onClose}>
            Close Manager
          </Button>
        </div>
      </div>
    </div>
  );
};
