import React from 'react';
import { Testimonial } from '../../types';
import { Quote, CheckCircle2 } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div
      id={`testimonial-card-${testimonial.id}`}
      className="relative flex flex-col justify-between bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-xl p-7 transition-all duration-200 hover:shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]"
    >
      <div>
        {/* Metric Impact Eyebrow */}
        <div className="flex items-center justify-between mb-5">
          <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-2.5 py-1 rounded-md">
            <span>{testimonial.impactMetric.value}</span>
            <span className="text-[#64748B] font-normal">| {testimonial.impactMetric.label}</span>
          </div>
          <Quote className="w-5 h-5 text-[#CBD5E1]" />
        </div>

        {/* Quote Content */}
        <blockquote className="text-sm text-[#334155] leading-relaxed mb-6 font-normal">
          "{testimonial.quote}"
        </blockquote>
      </div>

      {/* Author & Company */}
      <div className="pt-4 border-t border-[#F1F5F9] flex items-center gap-3">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.author}
          referrerPolicy="no-referrer"
          className="w-10 h-10 rounded-full object-cover border border-[#E2E8F0]"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold text-[#0F172A] truncate">
              {testimonial.author}
            </span>
            {testimonial.verified && (
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" title="Verified Customer" />
            )}
          </div>
          <div className="text-xs text-[#64748B] truncate">
            {testimonial.role} &middot; <span className="text-[#334155]">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
