import React from 'react';
import { ShieldCheck, Lock, Calendar, CheckCircle2, Star } from 'lucide-react';
import { TrustIndicator } from '../../types';

interface TrustBadgeProps {
  item: TrustIndicator;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ item }) => {
  const renderIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#E8681A]" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-[#E8681A]" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-[#E8681A]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#E8681A]" />;
      case 'Star':
        return <Star className="w-6 h-6 text-[#E8681A] fill-[#E8681A]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#E8681A]" />;
    }
  };

  return (
    <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-[#E8681A]/40 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-[#E8681A]/10 flex items-center justify-center shrink-0">
        {renderIcon(item.icon)}
      </div>
      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-lg font-bold text-[#0B192C] tracking-tight">{item.value}</span>
        </div>
        <div className="text-xs font-semibold text-[#0B192C] uppercase tracking-wider">{item.label}</div>
        <p className="text-xs text-[#64748B] mt-0.5">{item.subtext}</p>
      </div>
    </div>
  );
};
