import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle,
  Database
} from 'lucide-react';
import { COMPANY_INFO, FAQS_DATA } from '../data/roofingData';
import { SectionHeading } from '../components/ui/SectionHeading';
import { QuoteForm } from '../components/forms/QuoteForm';
import { Button } from '../components/ui/Button';

interface ContactProps {
  onViewSubmissions: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onViewSubmissions }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FBFBFA]">
      {/* Contact Header Banner */}
      <section className="bg-[#0B192C] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#E8681A] mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>2-Hour Rapid Response Window</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact & Request a Free Quote
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Schedule your free, comprehensive 21-point drone roof inspection. No sales pressure, no obligations, just transparent facts and honest estimates.
          </p>
        </div>
      </section>

      {/* Main Grid: Form on Left, Contact Details & Emergency on Right */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: The Interactive Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-2 sm:p-4 border border-slate-200 shadow-sm">
              <QuoteForm
                onViewSubmissions={onViewSubmissions}
                isModal={false}
              />
            </div>
          </div>

          {/* Right Column: Emergency Card, Office Details, Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 24/7 Emergency Storm Dispatch Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0B192C] to-[#162844] text-white border border-slate-800 shadow-lg">
              <div className="flex items-center gap-2 text-[#E8681A] text-xs font-bold uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>24/7 Emergency Storm Dispatch</span>
              </div>
              <h3 className="text-xl font-bold">Active Roof Leak or Storm Damage?</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Our emergency response team is on-call 24 hours a day, 7 days a week for immediate roof tarping, tree removal, and water intrusion mitigation.
              </p>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Emergency Call Line:</div>
                  <a
                    href={`tel:${COMPANY_INFO.emergencyPhone.replace(/\D/g, '')}`}
                    className="text-lg font-extrabold text-amber-400 hover:underline"
                  >
                    {COMPANY_INFO.emergencyPhone}
                  </a>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Office & Operations Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-[#0B192C] border-b border-slate-100 pb-3">
                Headquarters & Direct Dispatch
              </h3>

              <div className="space-y-3.5 text-xs text-[#1E293B]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8681A]/10 text-[#E8681A] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B192C]">Main Office Phone</div>
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-slate-600 hover:text-[#E8681A] text-sm font-semibold">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8681A]/10 text-[#E8681A] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B192C]">Quote & Inquiries Email</div>
                    <span className="text-slate-600 font-medium">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8681A]/10 text-[#E8681A] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B192C]">Central Operations Hub</div>
                    <span className="text-slate-600">
                      {COMPANY_INFO.officeAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8681A]/10 text-[#E8681A] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B192C]">Office Hours</div>
                    <span className="text-slate-600">
                      {COMPANY_INFO.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Lead Database Quick Trigger */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={onViewSubmissions}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B192C] font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Database className="w-4 h-4 text-[#E8681A]" />
                  <span>Review Submissions in Firestore Leads Manager</span>
                </button>
              </div>
            </div>

            {/* Licensing credentials pill */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="font-bold text-[#0B192C] flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#E8681A]" />
                <span>Verified Legal Credentials</span>
              </div>
              <p>{COMPANY_INFO.license} • Fully Bonded</p>
              <p>{COMPANY_INFO.insurance}</p>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Common Inquiries"
            title="Frequently Asked Roofing Questions"
            subtitle="Everything you need to know about our estimates, pricing, drone inspections, and warranties."
          />

          <div className="mt-10 space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-100/50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#0B192C]">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#E8681A] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 bg-white text-xs sm:text-sm text-[#64748B] leading-relaxed animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
