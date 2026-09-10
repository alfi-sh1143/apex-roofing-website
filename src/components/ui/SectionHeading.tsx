import React from 'react';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = ''
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 bg-[#E8681A]/10 text-[#E8681A] border border-[#E8681A]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8681A]"></span>
          {badge}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-[#0B192C]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3.5 text-base sm:text-lg leading-relaxed max-w-[68ch] ${
            light ? 'text-slate-300' : 'text-[#64748B]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
