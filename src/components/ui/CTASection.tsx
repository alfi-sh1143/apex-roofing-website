import React from 'react';
import { PhoneCall, ShieldCheck, Clock, ArrowRight, Award } from 'lucide-react';
import { Button } from './Button';
import { COMPANY_INFO } from '../../data/roofingData';

interface CTASectionProps {
  onOpenQuote: () => void;
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenQuote,
  title = 'Ready to Protect Your Home With a Flawless Roof?',
  subtitle = 'Schedule your 100% free, 21-point drone inspection today. Receive a comprehensive photo report, honest recommendations, and transparent pricing in 24 hours.'
}) => {
  return (
    <section className="relative overflow-hidden bg-[#0B192C] text-white py-16 sm:py-20 my-8 sm:my-12 rounded-3xl mx-4 sm:mx-8 max-w-7xl lg:mx-auto shadow-2xl">
      {/* Architectural subtle background accent grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 rounded-full bg-[#E8681A]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 text-center">
        {/* Trust pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold tracking-wider uppercase text-[#E8681A] mb-6 backdrop-blur-xs">
          <Award className="w-4 h-4 text-[#E8681A]" />
          <span>GAF Master Elite • 25-Year Workmanship Warranty</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-3xl mx-auto">
          {title}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Button Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="primary"
            onClick={onOpenQuote}
            rightIcon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto shadow-lg shadow-orange-950/40"
          >
            Claim Your Free Roof Inspection
          </Button>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#E8681A]" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>
        </div>

        {/* 3 Value Pillars */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-300 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E8681A] shrink-0" />
            <span>Zero Sales Pressure or Obligation</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#E8681A] shrink-0" />
            <span>Rapid 24-Hour Estimate Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-[#E8681A] shrink-0" />
            <span>100% Licensed & $2M Insured</span>
          </div>
        </div>
      </div>
    </section>
  );
};
