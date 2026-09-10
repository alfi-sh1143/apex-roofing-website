import React from 'react';
import { Phone, Mail, MapPin, Shield, CheckCircle2, Award, Clock } from 'lucide-react';
import { Page, ServiceType } from '../../types';
import { COMPANY_INFO, SERVICES_DATA } from '../../data/roofingData';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onSelectService: (serviceId: ServiceType) => void;
  onOpenQuote: () => void;
  onOpenSubmissionsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectService,
  onOpenQuote,
  onOpenSubmissionsModal
}) => {
  return (
    <footer className="bg-[#07101C] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Disclaimer Banner - Treating as Fictional Portfolio Project */}
        <div className="mb-12 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-2.5">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold shrink-0 mt-0.5">
              !
            </span>
            <p className="leading-relaxed">
              <strong className="text-slate-200">Portfolio Notice: </strong>
              {COMPANY_INFO.isFictionalDisclaimer} Submissions are stored securely in Firestore / persistent local engine for evaluation.
            </p>
          </div>
          <button
            onClick={onOpenSubmissionsModal}
            className="shrink-0 px-3 py-1.5 rounded-lg bg-[#E8681A] hover:bg-[#D0560F] text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Review Firestore Submissions
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0B192C] border border-white/10 flex items-center justify-center text-white">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m2 18 10-12 10 12" />
                  <path d="M12 6v14" className="text-[#E8681A] stroke-[#E8681A]" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xl font-black tracking-tight text-white">APEX</span>
                  <span className="text-xl font-bold tracking-tight text-[#E8681A]">ROOFING</span>
                </div>
                <div className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
                  Contractor Group
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Apex Roofing is an industry-leading residential and commercial roofing contractor. We deliver code-exceeding roof installations, certified drone inspections, and rapid storm restorations with our 25-Year Golden Pledge guarantee.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E8681A]" />
                <span>State Contractor License {COMPANY_INFO.license.split(' ')[2]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E8681A]" />
                <span>$2,000,000 Comprehensive Liability & Workers’ Comp</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E8681A]" />
                <span>GAF Master Elite Certified (Top 2% in North America)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map(s => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.id)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#E8681A] hover:underline font-semibold text-xs inline-flex items-center gap-1 pt-1"
                >
                  View All Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Information */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Apex Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About Our Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-details')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Service Deep Dives
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="text-[#E8681A] hover:underline font-semibold text-xs inline-flex items-center gap-1 pt-1"
                >
                  Request a Quote Form →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch & Office Hours */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E8681A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-200">Main Office Dispatch:</div>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-white">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E8681A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-200">Quote Inquiries:</div>
                  <span>{COMPANY_INFO.email}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8681A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-200">Headquarters:</div>
                  <span>{COMPANY_INFO.officeAddress}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E8681A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-200">Operational Hours:</div>
                  <span>{COMPANY_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Apex Roofing Contractor Group. Fictional Showcase Portfolio Project.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Privacy Policy</span>
            <span className="text-slate-400">Terms of Service</span>
            <span className="text-slate-400">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
