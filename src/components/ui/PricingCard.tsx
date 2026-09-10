import React from 'react';
import { PricingTier } from '../../types';
import { Button } from './Button';
import { Check, Sparkles } from 'lucide-react';

interface PricingCardProps {
  tier: PricingTier;
  isAnnual: boolean;
  onSelectPlan: (tierId: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ tier, isAnnual, onSelectPlan }) => {
  const isFree = tier.id === 'free';
  const isEnterprise = tier.id === 'enterprise';

  const price = isFree
    ? 0
    : isEnterprise
    ? isAnnual
      ? tier.annualPrice
      : tier.monthlyPrice
    : isAnnual
    ? tier.annualPrice
    : tier.monthlyPrice;

  return (
    <div
      id={`pricing-card-${tier.id}`}
      className={`relative flex flex-col justify-between rounded-xl p-7 transition-all duration-200 ${
        tier.popular
          ? 'bg-white border-2 border-[#2563EB] shadow-[0_8px_30px_rgb(37,99,235,0.08)]'
          : 'bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] shadow-xs hover:shadow-sm'
      }`}
    >
      {/* Popular Badge */}
      {tier.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full ${
              tier.popular
                ? 'bg-[#2563EB] text-white shadow-xs'
                : 'bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]'
            }`}
          >
            {tier.popular && <Sparkles className="w-3 h-3" />}
            {tier.badge}
          </span>
        </div>
      )}

      <div>
        {/* Tier Header */}
        <div className="mb-5">
          <h3 className="text-xl font-bold text-[#0F172A] mb-1.5">{tier.name}</h3>
          <p className="text-xs text-[#64748B] min-h-[32px]">{tier.tagline}</p>
        </div>

        {/* Pricing Block */}
        <div className="mb-6 pb-6 border-b border-[#F1F5F9]">
          <div className="flex items-baseline gap-1.5">
            <span className="text-4xl font-extrabold text-[#0F172A] tracking-tight">
              ${price}
            </span>
            <span className="text-xs font-medium text-[#64748B]">
              {isFree ? '/forever' : '/user/month'}
            </span>
          </div>

          <div className="mt-1.5 text-xs text-[#64748B]">
            {!isFree && isAnnual && (
              <span className="text-[#059669] font-semibold">
                Billed annually (save ~20%)
              </span>
            )}
            {!isFree && !isAnnual && <span>Billed monthly</span>}
            {isFree && <span>No credit card required</span>}
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-6 bg-[#F8FAFC] border border-[#F1F5F9] rounded-lg p-3">
          <p className="text-[11px] font-medium text-[#475569] leading-relaxed">
            <strong className="text-[#0F172A]">Best for:</strong> {tier.targetAudience}
          </p>
        </div>

        {/* Key Features List */}
        <div className="space-y-3 mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
            Included capabilities:
          </p>
          {tier.keyFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#334155]">
              <div className="w-4 h-4 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="leading-tight">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div>
        <Button
          id={`pricing-btn-${tier.id}`}
          variant={tier.popular ? 'primary' : tier.ctaVariant === 'outline' ? 'outline' : 'secondary'}
          size="md"
          className="w-full"
          onClick={() => onSelectPlan(tier.id)}
        >
          {tier.ctaText}
        </Button>
      </div>
    </div>
  );
};
