import React from 'react';
import { FeatureItem } from '../../types';
import { Sparkles, Workflow, Users, BarChart3, FileText, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FeatureCardProps {
  feature: FeatureItem;
  onExplore?: (featureId: string) => void;
  index?: number;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Workflow,
  Users,
  BarChart3,
  FileText,
  Calendar
};

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onExplore, index = 0 }) => {
  const IconComponent = ICON_MAP[feature.iconName] || Sparkles;

  return (
    <div
      id={`feature-card-${feature.id}`}
      className="group relative flex flex-col justify-between bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-xl p-6 sm:p-7 transition-all duration-200 hover:shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]"
    >
      <div>
        {/* Header with Icon and Category */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="w-11 h-11 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#475569] bg-[#F1F5F9] px-2.5 py-1 rounded-md">
            {feature.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mb-2 group-hover:text-[#2563EB] transition-colors duration-150">
          {feature.title}
        </h3>
        <p className="text-xs font-medium text-[#2563EB] mb-3">
          {feature.tagline}
        </p>
        <p className="text-sm text-[#475569] leading-relaxed mb-6">
          {feature.description}
        </p>

        {/* Capability Checklist */}
        <div className="space-y-2.5 pt-2 border-t border-[#F1F5F9] mb-6">
          {feature.capabilities.map((cap, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
              <span className="leading-tight">{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Metric and Interaction */}
      <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
        <div>
          <div className="text-base font-bold text-[#0F172A]">
            {feature.metric.value}
          </div>
          <div className="text-[11px] text-[#64748B]">
            {feature.metric.label}
          </div>
        </div>

        {onExplore && (
          <button
            onClick={() => onExplore(feature.id)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] group-hover:translate-x-0.5 transition-all cursor-pointer"
          >
            <span>Learn more</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
