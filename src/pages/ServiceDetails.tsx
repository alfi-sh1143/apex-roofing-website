import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Wrench, 
  Building2, 
  FileCheck, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  DollarSign, 
  Layers, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { ServiceType } from '../types';
import { SERVICES_DATA, COMPANY_INFO } from '../data/roofingData';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { QuoteForm } from '../components/forms/QuoteForm';

interface ServiceDetailsProps {
  selectedServiceId: ServiceType;
  onSelectService: (serviceId: ServiceType) => void;
  onOpenQuote: (serviceId?: ServiceType) => void;
  onViewSubmissions: () => void;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  selectedServiceId,
  onSelectService,
  onOpenQuote,
  onViewSubmissions
}) => {
  const [currentId, setCurrentId] = useState<ServiceType>(selectedServiceId);

  useEffect(() => {
    setCurrentId(selectedServiceId);
  }, [selectedServiceId]);

  const service = SERVICES_DATA.find(s => s.id === currentId) || SERVICES_DATA[0];

  const serviceTabs: { id: ServiceType; label: string; icon: React.ReactNode }[] = [
    { id: 'roof-replacement', label: 'Roof Replacement', icon: <Home className="w-4 h-4" /> },
    { id: 'roof-repair', label: 'Roof & Leak Repair', icon: <Wrench className="w-4 h-4" /> },
    { id: 'commercial-roofing', label: 'Commercial Systems', icon: <Building2 className="w-4 h-4" /> },
    { id: 'roof-inspection', label: 'Drone Inspection', icon: <FileCheck className="w-4 h-4" /> }
  ];

  return (
    <div className="w-full bg-[#FBFBFA]">
      {/* Top Breadcrumb & Switcher Bar */}
      <section className="bg-[#0B192C] text-white pt-10 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E8681A]">
              Service In-Depth Specification
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
              {service.title}
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.tagline}
            </p>
          </div>

          {/* Service Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto bg-slate-900/80 p-2 rounded-2xl border border-slate-800">
            {serviceTabs.map(tab => {
              const isActive = tab.id === currentId;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setCurrentId(tab.id);
                    onSelectService(tab.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E8681A] text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Service Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Architectural Specs, Process, Materials, FAQs */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Visual Header Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md relative h-72 sm:h-96">
              <img
                src={service.heroImage}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                    Apex Engineering Standard
                  </div>
                  <div className="text-xl font-bold">{service.title}</div>
                </div>
                <span className="bg-[#E8681A] px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
                  {service.duration}
                </span>
              </div>
            </div>

            {/* Overview description */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-xl font-bold text-[#0B192C] mb-3">Service Scope & Engineering Overview</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {service.fullDesc}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500">Starting Investment:</div>
                  <div className="text-base font-bold text-[#0B192C] mt-0.5">{service.startingPrice}</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500">Warranty Coverage:</div>
                  <div className="text-base font-bold text-emerald-700 mt-0.5">{service.warranty.split('&')[0]}</div>
                </div>
              </div>
            </div>

            {/* Ideal For Checklist */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#0B192C] mb-4">When Is This Service Recommended?</h3>
              <div className="space-y-3">
                {service.idealFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#1E293B]">
                    <CheckCircle2 className="w-5 h-5 text-[#E8681A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Technical Process */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#0B192C] mb-6">Step-by-Step Installation Protocol</h3>
              <div className="space-y-6">
                {service.processSteps.map((p, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-[#0B192C] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                      {p.step}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0B192C]">{p.title}</h4>
                      <p className="text-xs text-[#64748B] mt-1 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials Used */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#0B192C] mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#E8681A]" />
                <span>Certified Materials & Hardware Specs</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.materialsUsed.map((mat, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0B192C]">
                    • {mat}
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#0B192C] mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#E8681A]" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-sm text-[#0B192C]">{faq.question}</div>
                    <div className="text-xs text-[#64748B] mt-1.5 leading-relaxed">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Embedded Quote Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="bg-[#0B192C] text-white p-6 rounded-2xl shadow-xl border border-slate-800">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8681A]/20 text-[#E8681A] text-xs font-bold uppercase tracking-wider mb-2">
                  <span>Fast Quote Request</span>
                </div>
                <h3 className="text-xl font-bold">Estimate This Service</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Fill out this brief request to schedule your 100% free drone inspection for {service.title}.
                </p>
              </div>

              <QuoteForm
                key={currentId}
                initialService={currentId}
                onViewSubmissions={onViewSubmissions}
                isModal={false}
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
