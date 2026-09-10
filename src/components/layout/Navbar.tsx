import React, { useState, useEffect } from 'react';
import { Phone, Shield, Menu, X, ArrowRight, Database, ChevronDown } from 'lucide-react';
import { Page } from '../../types';
import { COMPANY_INFO } from '../../data/roofingData';
import { Button } from '../ui/Button';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenQuoteModal: () => void;
  onOpenSubmissionsModal: () => void;
  submissionsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
  onOpenSubmissionsModal,
  submissionsCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Service Details', page: 'service-details' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact / Quote', page: 'contact' }
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-[#07101C] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <Shield className="w-3.5 h-3.5" />
              <span>GAF Master Elite Contractor</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:inline-block text-slate-400">
              License {COMPANY_INFO.license.split(' ')[2]} • Fully Insured ($2M)
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenSubmissionsModal}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700 text-[11px] cursor-pointer"
              title="View quote submissions saved to Firestore/local storage"
            >
              <Database className="w-3 h-3 text-[#E8681A]" />
              <span>Leads Database</span>
              <span className="w-4 h-4 rounded-full bg-[#E8681A] text-white font-bold flex items-center justify-center text-[10px]">
                {submissionsCount}
              </span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#E8681A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8681A]" />
              <span className="hidden sm:inline">Dispatch:</span>
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0B192C] flex items-center justify-center text-white shadow-sm group-hover:bg-[#162844] transition-colors relative overflow-hidden">
              {/* Modern geometric roof apex logo mark */}
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m2 18 10-12 10 12" />
                <path d="M12 6v14" className="text-[#E8681A] stroke-[#E8681A]" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-extrabold tracking-tight text-[#0B192C]">APEX</span>
                <span className="text-xl font-semibold tracking-tight text-[#E8681A]">ROOFING</span>
              </div>
              <div className="text-[10px] font-semibold text-[#64748B] tracking-widest uppercase">
                Contractor Group
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#E8681A] bg-[#E8681A]/10 font-bold'
                      : 'text-[#1E293B] hover:text-[#0B192C] hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              size="md"
              variant="primary"
              onClick={onOpenQuoteModal}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              size="sm"
              variant="primary"
              onClick={onOpenQuoteModal}
              className="sm:hidden text-xs"
            >
              Free Quote
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0B192C] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0B192C]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[96px] bg-white border-b border-slate-200 shadow-xl p-5 flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
            {navLinks.map(link => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold text-left transition-colors ${
                    isActive
                      ? 'bg-[#E8681A]/10 text-[#E8681A] font-bold'
                      : 'text-[#1E293B] hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#E8681A]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <Button
              size="lg"
              variant="primary"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get a Free Quote
            </Button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubmissionsModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg flex items-center justify-center gap-2"
            >
              <Database className="w-4 h-4 text-[#E8681A]" />
              <span>Review Lead Submissions ({submissionsCount})</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-[#0B192C] bg-slate-100 hover:bg-slate-200 rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#E8681A]" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
