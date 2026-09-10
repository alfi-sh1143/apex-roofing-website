import React from 'react';
import { Page } from '../types';
import { BRAND_CONFIG, TEAM_MEMBERS } from '../data/flowDeskData';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/ui/CTASection';
import {
  Sparkles,
  Shield,
  Palette,
  Heart,
  Target,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  Compass
} from 'lucide-react';

interface AboutProps {
  onNavigate: (page: Page) => void;
  onOpenTrial: () => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate, onOpenTrial }) => {
  return (
    <div className="w-full bg-[#FAFAFA] text-[#0F172A]">
      {/* Hero Header */}
      <section className="bg-white border-b border-[#E2E8F0] pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Mission & Design Thesis</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight mb-5">
            Restoring deep focus to modern software creation.
          </h1>

          <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed mb-8">
            Modern product teams don’t suffer from a shortage of talent. They suffer from catastrophic coordination fragmentation. FlowDesk AI exists to fix that.
          </p>

          {/* Portfolio Disclosure Box */}
          <div className="max-w-2xl mx-auto p-4 bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl text-xs text-[#1E3A8A] text-left flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Portfolio Showcase Note:</strong> FlowDesk AI is a fictional SaaS concept designed and engineered to demonstrate high-level product design, design systems architecture, and responsive front-end craftsmanship for a professional UI/UX and web design role.
            </div>
          </div>
        </div>
      </section>

      {/* The Problem & The Solution */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-md mb-3 inline-block">
              The Genesis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
              Why we re-imagined the modern workflow.
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4">
              Over the last decade, our tools multiplied. Code moved to GitHub, discussions to Slack, task tracking to Jira, specifications to Notion, and scheduling to Google Calendar.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
              Instead of helping teams build, this sprawl turned engineers and product managers into human routers—manually copying updates, resolving stale tickets, and sitting in meetings just to explain what they were already doing.
            </p>
            <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl space-y-2 text-xs text-[#334155]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                <span>38% of developer time was lost to context-switching between tools</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                <span>Average engineer had only 1.8 hours of uninterrupted deep focus per day</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                <span>FlowDesk was built to invert this ratio autonomously</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">
              Our Core Operating Principles
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
                <div className="font-bold text-[#0F172A] mb-1">
                  1. Autonomous by Default, Human in Full Control
                </div>
                <p className="text-[#64748B]">
                  FlowDesk synthesizes work and proposes actions, but critical deployments and releases remain transparently auditable.
                </p>
              </div>

              <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
                <div className="font-bold text-[#0F172A] mb-1">
                  2. Defend Deep Work at All Costs
                </div>
                <p className="text-[#64748B]">
                  Great software requires unbroken stretches of concentrated thought. We treat 3-hour focus blocks as sacred territory.
                </p>
              </div>

              <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
                <div className="font-bold text-[#0F172A] mb-1">
                  3. Grounded Context Over Empty AI Buzzwords
                </div>
                <p className="text-[#64748B]">
                  No hallucinated chat bots. Our AI queries deterministic data graphs of real pull requests, commits, and user stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Design System Case Study Breakdown */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB] mb-3">
              <Palette className="w-3.5 h-3.5" />
              <span>Design System Case Study</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Intentional craftsmanship behind FlowDesk AI.
            </h2>
            <p className="text-base text-[#64748B]">
              A closer look at the typographic, spatial, and visual decisions that define this website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                Single Strong Accent (#2563EB)
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed mb-4">
                Rather than muddying the interface with rainbow gradients or generic neon AI glows, we utilize a single, authoritative cobalt accent paired with warm neutral slates.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#2563EB]" title="#2563EB Primary" />
                <div className="w-6 h-6 rounded bg-[#0F172A]" title="#0F172A Dark Slate" />
                <div className="w-6 h-6 rounded bg-[#F8FAFC] border" title="#F8FAFC Canvas" />
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                Mathematical Spacing & Hierarchy
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed mb-4">
                Structured with low-contrast micro-borders (1px #E2E8F0) and strict nested corner radii (outer R24, inner R12) to create depth through white space rather than heavy drop-shadows.
              </p>
              <span className="text-[11px] font-mono text-[#2563EB]">
                WCAG AA Compliant (7.8:1 contrast)
              </span>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">
                Conversion-First Architecture
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed mb-4">
                Clear value proposition visible above the fold, live interactive dashboard preview, verified social proof metrics, and frictionless 14-day free trial lead capture.
              </p>
              <span className="text-[11px] font-mono text-[#059669]">
                Zero Fake Infrastructure &middot; Firestore Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2">
            The Concept Team
          </h2>
          <p className="text-sm text-[#64748B]">
            Persona profiles created for the FlowDesk AI narrative.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map(member => (
            <div
              key={member.name}
              className="bg-white border border-[#E2E8F0] rounded-xl p-5 text-center shadow-xs"
            >
              <img
                src={member.avatar}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-[#E2E8F0]"
                loading="lazy"
              />
              <h3 className="text-base font-bold text-[#0F172A]">{member.name}</h3>
              <div className="text-xs font-semibold text-[#2563EB] mb-2">{member.role}</div>
              <p className="text-xs text-[#64748B] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection onOpenTrial={onOpenTrial} />
    </div>
  );
};
