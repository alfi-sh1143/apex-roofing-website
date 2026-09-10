import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { ServiceType, QuoteSubmission } from '../../types';
import { QuoteForm } from '../forms/QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServiceType;
  onViewSubmissions: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedService = 'roof-replacement',
  onViewSubmissions
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 my-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <QuoteForm
            initialService={selectedService}
            onViewSubmissions={() => {
              onClose();
              onViewSubmissions();
            }}
            isModal={true}
          />
        </div>
      </div>
    </div>
  );
};
