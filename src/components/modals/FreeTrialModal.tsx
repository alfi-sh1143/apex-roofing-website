import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Shield, Loader2 } from 'lucide-react';
import { submitTrialLead } from '../../lib/firestoreService';
import { Button } from '../ui/Button';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
  initialEmail?: string;
  onSuccess?: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'Pro',
  initialEmail = '',
  onSuccess
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState(initialEmail);
  const [companyName, setCompanyName] = useState('');
  const [teamSize, setTeamSize] = useState('6-20');
  const [primaryUseCase, setPrimaryUseCase] = useState('Workflow Automation & Focus Defense');
  const [planInterest, setPlanInterest] = useState(initialPlan);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      await submitTrialLead({
        fullName,
        email,
        companyName,
        teamSize,
        primaryUseCase,
        planInterest
      });

      setIsLoading(false);
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setErrorMessage('Could not record trial request. Please try again.');
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
              Workspace Initialized!
            </h3>
            <p className="text-sm text-[#475569] mb-6 max-w-sm mx-auto leading-relaxed">
              Your 14-day full-access trial for <strong>{companyName || 'your team'}</strong> has been registered in the database.
            </p>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-left text-xs text-[#334155] mb-6 space-y-2">
              <div className="flex justify-between">
                <span className="text-[#64748B]">Lead Contact:</span>
                <span className="font-semibold text-[#0F172A]">{fullName} ({email})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Selected Plan:</span>
                <span className="font-semibold text-[#2563EB]">{planInterest} Tier (14-Day Free)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Team Allocation:</span>
                <span className="font-semibold text-[#0F172A]">{teamSize} seats</span>
              </div>
            </div>

            <div className="p-3 bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg text-xs text-[#2563EB] mb-6">
              💡 <em>Portfolio Note:</em> This submission was securely persisted to the Firestore/local state engine. You can inspect it anytime from the top "Submissions Log" button.
            </div>

            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleReset}
            >
              Continue Exploring Platform
            </Button>
          </div>
        ) : (
          /* Form Screen */
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>14-Day Full-Access Free Trial</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
                Get started with FlowDesk AI
              </h3>
              <p className="text-xs text-[#64748B] mt-1">
                No credit card required &middot; 3-minute setup &middot; Cancel anytime
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 mb-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="Elena Rostova"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="elena@company.com"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Company or Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    placeholder="Acme Systems"
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Team Size *
                  </label>
                  <select
                    value={teamSize}
                    onChange={e => setTeamSize(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  >
                    <option value="1-5">1-5 members (Solo / Pod)</option>
                    <option value="6-20">6-20 members (Growing squad)</option>
                    <option value="21-50">21-50 members (Multi-team)</option>
                    <option value="51-200">51-200 members (Department)</option>
                    <option value="200+">200+ members (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Primary Priority
                </label>
                <select
                  value={primaryUseCase}
                  onChange={e => setPrimaryUseCase(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                >
                  <option value="Workflow Automation & Focus Defense">
                    Workflow Automation & Calendar Focus Defense
                  </option>
                  <option value="AI Task Planning & Backlog Triage">
                    AI Task Planning & Automatic Sprint Triage
                  </option>
                  <option value="Predictive Velocity & Project Analytics">
                    Predictive Velocity & Monte Carlo Forecasting
                  </option>
                  <option value="Executive Morning Summaries">
                    Executive Morning Summaries & Decision Synthesis
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Plan Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Free', 'Pro', 'Business'].map(plan => (
                    <button
                      type="button"
                      key={plan}
                      onClick={() => setPlanInterest(plan)}
                      className={`py-2 text-xs font-semibold rounded-lg border text-center transition-colors cursor-pointer ${
                        planInterest.toLowerCase() === plan.toLowerCase()
                          ? 'border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]'
                          : 'border-[#E2E8F0] bg-white text-[#475569] hover:bg-[#F8FAFC]'
                      }`}
                    >
                      {plan}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isLoading}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Create Trial Workspace
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-[#64748B]">
                <Shield className="w-3 h-3 text-[#2563EB]" />
                <span>Zero model training on customer data &middot; 256-bit AES encryption</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
