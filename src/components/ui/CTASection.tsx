import React, { useState } from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface CTASectionProps {
  onOpenTrial: (email?: string) => void;
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenTrial,
  title = 'Ready to turn scattered work into intelligent workflows?',
  subtitle = 'Join engineering and product teams worldwide reclaiming over 4 hours of deep focus time every single week.'
}) => {
  const [emailInput, setEmailInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenTrial(emailInput);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-[#0F172A] text-white p-8 sm:p-12 lg:p-16 overflow-hidden border border-[#1E293B] shadow-2xl">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/15 border border-[#2563EB]/40 text-[#93C5FD] text-xs font-semibold px-3 py-1 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Start Your 14-Day Free Trial Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Instant Email Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8"
          >
            <input
              type="email"
              value={emailInput}
              onChange={e => setEmailInput(e.target.value)}
              placeholder="Enter your work email..."
              className="w-full sm:flex-1 px-4 py-3 bg-[#1E293B] border border-[#334155] rounded-lg text-sm text-white placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started
            </Button>
          </form>

          {/* Guarantees Checklist */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#94A3B8]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>3-minute onboarding</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>SOC2 Type II & GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
