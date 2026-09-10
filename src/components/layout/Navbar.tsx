import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, Database, ExternalLink, Code2 } from 'lucide-react';
import { Page } from '../../types';
import { BRAND_CONFIG } from '../../data/flowDeskData';
import { Button } from '../ui/Button';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenTrialModal: (planId?: string) => void;
  onOpenSubmissionsModal: () => void;
  submissionsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenTrialModal,
  onOpenSubmissionsModal,
  submissionsCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Features', page: 'features' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Portfolio Disclaimer Top Banner */}
      <div className="bg-[#0F172A] text-slate-300 text-[11px] py-1.5 px-4 border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-semibold text-[#60A5FA] bg-[#1E293B] px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
              Portfolio Showcase
            </span>
            <span className="text-slate-300 hidden sm:inline">
              FlowDesk AI is a fictional SaaS concept designed for a UI/UX & Web Design job portfolio.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSubmissionsModal}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer bg-[#1E293B] px-2.5 py-0.5 rounded-full border border-slate-700 text-[11px]"
              title="Inspect lead capture records stored in Firestore / Local Engine"
            >
              <Database className="w-3 h-3 text-[#2563EB]" />
              <span className="hidden md:inline">Submissions Log</span>
              <span className="w-4 h-4 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center text-[10px]">
                {submissionsCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E2E8F0]'
            : 'bg-white py-4 border-b border-[#E2E8F0]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            aria-label="FlowDesk AI Home"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0F172A] flex items-center justify-center text-white shadow-xs group-hover:bg-[#1E293B] transition-colors relative overflow-hidden">
              {/* Minimalist Flow Logo Mark */}
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M4 7h10a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H4" strokeLinecap="round" />
                <circle cx="4" cy="7" r="2" fill="#2563EB" stroke="none" />
                <circle cx="4" cy="17" r="2" fill="#2563EB" stroke="none" />
                <circle cx="14" cy="12" r="2" fill="#FFFFFF" stroke="none" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-lg font-extrabold tracking-tight text-[#0F172A]">FlowDesk</span>
                <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                  AI
                </span>
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
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#2563EB] bg-[#EFF6FF] font-bold'
                      : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('features')}
              className="text-xs font-semibold text-[#475569] hover:text-[#0F172A] px-3 py-2 cursor-pointer transition-colors"
            >
              How It Works
            </button>
            <Button
              size="sm"
              variant="primary"
              onClick={() => onOpenTrialModal()}
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              size="sm"
              variant="primary"
              onClick={() => onOpenTrialModal()}
              className="text-xs px-3"
            >
              Free Trial
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0F172A] hover:bg-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[92px] bg-white border-b border-[#E2E8F0] shadow-xl p-5 flex flex-col gap-2 z-50">
          <div className="flex flex-col gap-1 pb-4 border-b border-[#F1F5F9]">
            {navLinks.map(link => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-left transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#EFF6FF] text-[#2563EB] font-bold'
                      : 'text-[#334155] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#2563EB]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <Button
              size="md"
              variant="primary"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Start 14-Day Free Trial
            </Button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSubmissionsModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Database className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Review Lead Submissions ({submissionsCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
