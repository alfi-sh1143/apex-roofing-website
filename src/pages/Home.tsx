import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Play,
  Layers,
  Cpu,
  Clock,
  Zap,
  Lock,
  Workflow,
  TrendingUp,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Page } from '../types';
import {
  BRAND_CONFIG,
  TRUST_STATS,
  FEATURES_DATA,
  TESTIMONIALS_DATA,
  PRICING_TIERS,
  FAQ_ITEMS,
  INTEGRATIONS_DATA
} from '../data/flowDeskData';
import { Button } from '../components/ui/Button';
import { FeatureCard } from '../components/ui/FeatureCard';
import { PricingCard } from '../components/ui/PricingCard';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { FAQ } from '../components/ui/FAQ';
import { DashboardPreview } from '../components/ui/DashboardPreview';
import { WorkflowPlayground } from '../components/ui/WorkflowPlayground';
import { CTASection } from '../components/ui/CTASection';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onOpenTrial: (planId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenTrial }) => {
  const [pricingIsAnnual, setPricingIsAnnual] = useState(true);

  return (
    <div className="w-full bg-[#FAFAFA] text-[#0F172A]">
      {/* =========================================================================
          2. HERO SECTION
         ========================================================================= */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-[#E2E8F0] bg-white">
        {/* Subtle geometric dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Portfolio Project Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Generation Work Intelligence Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.08] mb-6">
              Turn scattered work into{' '}
              <span className="text-[#2563EB]">intelligent workflows.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#475569] max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              FlowDesk AI unifies your backlog, calendar, pull requests, and Slack conversations into an autonomous context graph—eliminating triage thrash and defending your team’s deep focus.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenTrial('Pro')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Start 14-Day Free Trial
              </Button>

              <button
                onClick={() => {
                  const el = document.getElementById('interactive-preview');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-xs sm:text-sm font-semibold text-[#0F172A] transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#2563EB]" />
                <span>Explore Interactive Workspace</span>
              </button>
            </div>

            {/* Hero Trust Micro-Badges */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                <span>2-minute setup via OAuth</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>SOC2 Type II & Zero Model Training</span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              3. PRODUCT / DASHBOARD VISUAL
             ========================================================================= */}
          <div id="interactive-preview" className="mt-14 sm:mt-16 max-w-6xl mx-auto">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SOCIAL PROOF & METRICS STRIP
         ========================================================================= */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Partner Brands */}
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
              Trusted by engineering and product teams across high-velocity technology companies
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
            {BRAND_CONFIG.socialProofLogos.map((brand, i) => (
              <span
                key={i}
                className="text-base sm:text-lg font-extrabold text-[#334155] tracking-tight hover:text-[#0F172A] transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>

          {/* Concrete Numbers Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-10 border-t border-[#F1F5F9]">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="text-center p-3">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-[#2563EB] mb-1">
                  {stat.label}
                </div>
                <p className="text-[11px] text-[#64748B]">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CORE FEATURES SECTION
         ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Autonomous Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-4">
            Architected to eliminate cognitive fragmentation.
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Stop switching between 14 open tabs. FlowDesk AI autonomously connects tools, synthesizes tasks, resolves blockers, and guards your schedule.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_DATA.map((feat, idx) => (
            <FeatureCard
              key={feat.id}
              feature={feat}
              index={idx}
              onExplore={() => onNavigate('features')}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="md"
            onClick={() => onNavigate('features')}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Full Architecture & Technical Deep Dive
          </Button>
        </div>
      </section>

      {/* =========================================================================
          6. HOW IT WORKS (3-STEP PROGRESSION)
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>Effortless Onboarding</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              From chaos to clarity in 3 steps.
            </h2>
            <p className="text-base text-[#64748B]">
              No heavy migration or manual ticket re-tagging required. FlowDesk sits seamlessly atop your existing tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                step: '01',
                title: 'Connect Existing Tools',
                tag: '1-Click OAuth',
                desc: 'Authorize read-write access to GitHub, Slack, Jira, Linear, and Google Calendar. Zero manual data entry.',
                highlight: '2-minute setup'
              },
              {
                step: '02',
                title: 'AI Synthesizes Context Graph',
                tag: 'Autonomous RAG',
                desc: 'Our semantic agent links PRs to backlog items, detects hidden cross-team dependencies, and prioritizes sprints.',
                highlight: 'Real-time sync'
              },
              {
                step: '03',
                title: 'Defend Focus & Ship Velocity',
                tag: 'Automated Shield',
                desc: 'FlowDesk rebalances conflicting meetings, generates executive digests, and triggers actions without human friction.',
                highlight: '+4.2 hrs deep work'
              }
            ].map((st, i) => (
              <div
                key={i}
                className="relative bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7 flex flex-col justify-between hover:border-[#2563EB]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-extrabold text-[#CBD5E1]">
                      {st.step}
                    </span>
                    <span className="text-[11px] font-semibold bg-white border border-[#E2E8F0] px-2.5 py-1 rounded-md text-[#2563EB]">
                      {st.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                  <span className="text-[#059669] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {st.highlight}
                  </span>
                  <span className="text-[#64748B]">Step {i + 1} of 3</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. AI WORKFLOW DEMONSTRATION
         ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Live Interactive Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Watch an autonomous workflow in motion.
          </h2>
          <p className="text-base text-[#64748B] max-w-2xl mx-auto">
            Test how FlowDesk AI receives incoming incidents, reasons over dependencies, and coordinates downstream systems.
          </p>
        </div>

        <WorkflowPlayground />
      </section>

      {/* =========================================================================
          8. INTEGRATIONS ECOSYSTEM
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Native Stack Integrations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Plugs directly into the tools your team uses daily.
            </h2>
            <p className="text-base text-[#64748B]">
              Bi-directional, low-latency sync with industry-standard engineering, design, and product platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INTEGRATIONS_DATA.map(tool => (
              <div
                key={tool.name}
                className="bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-xl p-5 transition-all text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-bold text-[#0F172A]">{tool.name}</span>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-white text-[#2563EB] border border-[#E2E8F0]">
                    {tool.category}
                  </span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                  {tool.description}
                </p>
                <div className="text-[11px] text-[#059669] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{tool.syncStatus || 'Two-way real-time sync'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. TESTIMONIALS SECTION
         ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Proven Customer Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Loved by engineering leads and product directors.
          </h2>
          <p className="text-base text-[#64748B]">
            See how teams use FlowDesk AI to cut sprint planning churn and ship faster with less anxiety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          10. PRICING PREVIEW
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Simple, predictable tiers for every team size.
            </h2>
            <p className="text-base text-[#64748B] mb-6">
              Start free forever with your core pod. Upgrade as your automated pipeline requirements grow.
            </p>

            {/* Annual vs Monthly Toggle */}
            <div className="inline-flex items-center bg-[#F1F5F9] p-1 rounded-xl border border-[#E2E8F0]">
              <button
                onClick={() => setPricingIsAnnual(false)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  !pricingIsAnnual
                    ? 'bg-white text-[#0F172A] shadow-xs'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                Monthly billing
              </button>
              <button
                onClick={() => setPricingIsAnnual(true)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                  pricingIsAnnual
                    ? 'bg-white text-[#0F172A] shadow-xs'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                <span>Annual billing</span>
                <span className="text-[10px] font-bold bg-[#ECFDF5] text-[#059669] px-1.5 py-0.5 rounded">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING_TIERS.map(tier => (
              <PricingCard
                key={tier.id}
                tier={tier}
                isAnnual={pricingIsAnnual}
                onSelectPlan={(id) => onOpenTrial(tier.name)}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('pricing')}
              className="text-xs font-semibold text-[#2563EB] hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              <span>View full 24-feature comparison matrix & enterprise SLAs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. FAQ ACCORDION SECTION
         ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQ items={FAQ_ITEMS} />
      </section>

      {/* =========================================================================
          12. FINAL CONVERSION CTA SECTION
         ========================================================================= */}
      <CTASection onOpenTrial={onOpenTrial} />
    </div>
  );
};
