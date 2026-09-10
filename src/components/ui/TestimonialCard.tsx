import React from 'react';
import { Star, CheckCircle, MapPin, Quote } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative">
      <Quote className="w-8 h-8 text-slate-200 absolute top-5 right-5 -z-0" />

      <div>
        {/* Rating Stars & Verified Pill */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                }`}
              />
            ))}
          </div>
          {testimonial.verified && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
              <CheckCircle className="w-3 h-3" />
              Verified Client
            </span>
          )}
        </div>

        {/* Project Type */}
        <div className="text-xs font-semibold text-[#E8681A] uppercase tracking-wider mb-2">
          {testimonial.projectType}
        </div>

        {/* Quote Body */}
        <p className="text-sm text-[#1E293B] leading-relaxed relative z-10 italic">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author & Location info */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
        {testimonial.avatarUrl ? (
          <img
            src={testimonial.avatarUrl}
            alt={testimonial.author}
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
            loading="lazy"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#0B192C] text-white flex items-center justify-center font-bold text-xs shrink-0">
            {testimonial.author.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div className="overflow-hidden">
          <div className="text-sm font-bold text-[#0B192C] truncate">{testimonial.author}</div>
          <div className="flex items-center gap-1 text-xs text-[#64748B] truncate">
            <MapPin className="w-3 h-3 shrink-0 text-slate-400" />
            <span className="truncate">{testimonial.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
