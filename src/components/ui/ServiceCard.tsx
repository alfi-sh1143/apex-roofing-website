import React from 'react';
import { Home, Wrench, Building2, FileCheck, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { ServiceDetail } from '../../types';
import { Button } from './Button';

export interface ServiceCardProps {
  service: ServiceDetail;
  onSelectService: (serviceId: ServiceDetail['id']) => void;
  onRequestQuote: (serviceId: ServiceDetail['id']) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onRequestQuote
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5 text-white" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-white" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-white" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-white" />;
      default:
        return <Home className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col h-full">
      {/* Visual Image Header */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
        <img
          src={service.heroImage}
          alt={service.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent opacity-80" />

        {/* Floating Icon badge */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#0B192C]/90 backdrop-blur-xs border border-white/20 flex items-center justify-center shadow-md">
          {getIcon(service.iconName)}
        </div>

        {/* Warranty pill */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
          <span className="inline-flex items-center gap-1 bg-[#E8681A] px-2.5 py-1 rounded-md font-semibold tracking-wide shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            {service.id === 'roof-replacement' ? '25-Yr Workmanship' : service.id === 'roof-repair' ? '5-Yr Leak-Free' : 'Certified Systems'}
          </span>
          <span className="inline-flex items-center gap-1 text-slate-200 text-xs bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
            <Clock className="w-3 h-3 text-[#E8681A]" />
            {service.duration.split(' ')[0]} {service.duration.split(' ')[1] || 'Day'}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-[#0B192C] group-hover:text-[#E8681A] transition-colors leading-snug">
          {service.title}
        </h3>
        <p className="mt-2.5 text-sm text-[#64748B] leading-relaxed line-clamp-3">
          {service.shortDesc}
        </p>

        {/* Key Features bullet points */}
        <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 flex-1">
          {service.keyBenefits.slice(0, 3).map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-[#1E293B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8681A] mt-1.5 shrink-0" />
              <span className="line-clamp-2">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Action Row */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => onSelectService(service.id)}
            className="text-xs font-semibold text-[#0B192C] hover:text-[#E8681A] flex items-center gap-1 group/btn transition-colors cursor-pointer"
          >
            <span>Learn Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>

          <Button
            size="sm"
            variant="primary"
            onClick={() => onRequestQuote(service.id)}
          >
            Quote Service
          </Button>
        </div>
      </div>
    </div>
  );
};
