import React, { useState } from 'react';
import { Page } from '../../types';
import { BRAND_CONFIG } from '../../data/flowDeskData';
import { ArrowRight, CheckCircle2, Shield, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTrial }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400 border-t border-[#1E293B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Brand Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#1E293B]">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M4 7h10a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H4" strokeLinecap="round" />
                  <circle cx="4" cy="7" r="2" fill="#FFFFFF" stroke="none" />
                  <circle cx="4" cy="17" r="2" fill="#FFFFFF" stroke="none" />
                  <circle cx="14" cy="12" r="2" fill="#FFFFFF" stroke="none" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">FlowDesk AI</span>
            </div>

            <p className="text-sm text-slate-400 mb-5 max-w-sm leading-relaxed">
              {BRAND_CONFIG.tagline} The unified operating intelligence for engineering and product pods.
            </p>

            {/* System Status Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1E293B] border border-slate-800 rounded-full px-3 py-1 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>All Systems Operational &middot; 99.98% SLA</span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 bg-[#1E293B]/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h4 className="text-base font-bold text-white mb-2">
              Subscribe to "The Autonomous Workflow" Dispatch
            </h4>
            <p className="text-xs text-slate-400 mb-4 max-w-lg leading-relaxed">
              Bi-weekly analysis on human-AI interaction patterns, focus defense benchmarks, and engineering velocity case studies.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 px-3.5 py-2 text-xs bg-[#0F172A] border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-[#1E293B] text-xs">
          {/* Column 1: Product */}
          <div>
            <h5 className="font-semibold text-white uppercase tracking-wider mb-4 text-[11px]">
              Platform Pillars
            </h5>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleLinkClick('features')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Task Planning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('features')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Smart Workflow Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('features')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Team Collaboration
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('features')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Project Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('features')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  AI Summaries
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('features')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Calendar Integration
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h5 className="font-semibold text-white uppercase tracking-wider mb-4 text-[11px]">
              Solutions
            </h5>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleLinkClick('features')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Engineering Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('features')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Product Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('features')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Design & UX Operations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('pricing')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Enterprise Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('pricing')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  ROI Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h5 className="font-semibold text-white uppercase tracking-wider mb-4 text-[11px]">
              Company
            </h5>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About FlowDesk AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Design Principles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('pricing')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pricing Tiers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & Support
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTrial}
                  className="hover:text-white transition-colors cursor-pointer text-left text-[#60A5FA]"
                >
                  Start 14-Day Free Trial
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Trust & Compliance */}
          <div>
            <h5 className="font-semibold text-white uppercase tracking-wider mb-4 text-[11px]">
              Trust & Privacy
            </h5>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-1.5 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Zero-Training Guarantee</span>
              </li>
              <li>
                <span>SOC2 Type II Certified</span>
              </li>
              <li>
                <span>GDPR & CCPA Compliant</span>
              </li>
              <li>
                <span>AES-256 Encryption at Rest</span>
              </li>
              <li>
                <span>SAML 2.0 / Okta Ready</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Fictional Portfolio Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left">
            <p className="font-medium text-slate-300">
              FlowDesk AI &middot; Fictional SaaS Portfolio Concept
            </p>
            <p className="text-[11px] text-slate-400 mt-1 max-w-xl">
              This website was designed and built as a showcase project for a professional UI/UX and web design portfolio. FlowDesk AI is not a commercial operational business and does not process billing.
            </p>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span>Crafted for UI/UX & Web Design Portfolio</span>
            <span>&copy; {new Date().getFullYear()} FlowDesk AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
