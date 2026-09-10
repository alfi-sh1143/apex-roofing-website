import React, { useState } from 'react';
import { Page } from '../types';
import { FEATURES_DATA, BRAND_CONFIG } from '../data/flowDeskData';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/ui/CTASection';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Workflow,
  Shield,
  Layers,
  Clock,
  Zap,
  BarChart3,
  Calendar,
  Lock,
  GitPullRequest
} from 'lucide-react';

interface FeaturesProps {
  onNavigate: (page: Page) => void;
  onOpenTrial: (planId?: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onNavigate, onOpenTrial }) => {
  const [activeFeatureTab, setActiveFeatureTab] = useState<string>(FEATURES_DATA[0].id);

  const currentFeature = FEATURES_DATA.find(f => f.id === activeFeatureTab) || FEATURES_DATA[0];

  return (
    <div className="w-full bg-[#FAFAFA] text-[#0F172A]">
      {/* Header Hero */}
      <section className="bg-white border-b border-[#E2E8F0] pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Platform Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight mb-5">
            Engineered for high-output engineering & product teams.
          </h1>

          <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed mb-8">
            Every feature in FlowDesk AI is designed to do one thing: strip away the repetitive coordination overhead that slows down builders.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenTrial('Pro')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Start 14-Day Free Trial
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => onNavigate('pricing')}
            >
              Compare Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Feature Deep Dive Switcher */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2">
            Explore the Six Pillars
          </h2>
          <p className="text-sm text-[#64748B]">
            Click a capability below to inspect its technical architecture and team impact.
          </p>
        </div>

        {/* Pillar Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FEATURES_DATA.map(f => {
            const isSelected = f.id === activeFeatureTab;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFeatureTab(f.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F8FAFC]'
                }`}
              >
                {f.title}
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detail Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-md mb-4 inline-block">
                {currentFeature.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2">
                {currentFeature.title}
              </h3>

              <p className="text-sm font-semibold text-[#2563EB] mb-4">
                {currentFeature.tagline}
              </p>

              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                {currentFeature.description}
              </p>

              {/* Checklist */}
              <div className="space-y-3 mb-8">
                {currentFeature.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Metric Card */}
              <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xl font-black text-[#0F172A]">
                    {currentFeature.metric.value}
                  </div>
                  <div className="text-xs text-[#64748B]">
                    {currentFeature.metric.label}
                  </div>
                </div>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => onOpenTrial(currentFeature.title)}
                >
                  Test This Feature
                </Button>
              </div>
            </div>

            {/* Right Visual Representation */}
            <div className="lg:col-span-6 bg-[#0F172A] text-white rounded-xl p-6 border border-[#1E293B]">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1E293B]">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>flowdesk.engine/runtime</span>
                </div>
                <span className="text-[10px] font-mono bg-[#1E293B] text-[#93C5FD] px-2 py-0.5 rounded">
                  Latency: 18ms
                </span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="p-3 bg-[#1E293B] rounded-lg border border-slate-800">
                  <div className="text-slate-400 mb-1">// Ingesting signals from Slack & GitHub</div>
                  <div className="text-[#38BDF8]">event: "pull_request.opened" #492</div>
                  <div className="text-slate-300">target: "feat: vector embeddings RAG context"</div>
                </div>

                <div className="p-3 bg-[#1E293B] rounded-lg border border-[#2563EB]/40">
                  <div className="text-[#60A5FA] mb-1">// Autonomous Analysis</div>
                  <div className="text-white">Detected: 3 sprint backlog dependencies linked</div>
                  <div className="text-[#10B981]">Action: Auto-adjusted Sprint 34 burnup curve</div>
                </div>

                <div className="p-3 bg-[#1E293B] rounded-lg border border-slate-800">
                  <div className="text-slate-400 mb-1">// Calendar Shield Active</div>
                  <div className="text-slate-300">Reserved 3.5h Deep Work Block for PR author</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: FlowDesk AI vs Legacy PM Tools */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-md mb-2 inline-block">
              Architectural Paradigm
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
              Why FlowDesk AI outpaces legacy task trackers.
            </h2>
            <p className="text-base text-[#64748B]">
              Traditional tools demand manual status updates. FlowDesk AI works autonomously in the background.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  <th className="py-4 px-4">Capability</th>
                  <th className="py-4 px-4 bg-[#EFF6FF] text-[#2563EB] rounded-t-lg">
                    FlowDesk AI
                  </th>
                  <th className="py-4 px-4">Legacy Tools (Jira / Asana)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-xs sm:text-sm text-[#334155]">
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#0F172A]">Context Sync</td>
                  <td className="py-4 px-4 bg-[#EFF6FF]/60 font-semibold text-[#2563EB]">
                    Autonomous RAG Vector Graph (Real-time)
                  </td>
                  <td className="py-4 px-4 text-[#64748B]">
                    Manual ticket creation & manual tagging
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#0F172A]">Meeting Defense</td>
                  <td className="py-4 px-4 bg-[#EFF6FF]/60 font-semibold text-[#2563EB]">
                    Automated calendar shielding & deep work blocks
                  </td>
                  <td className="py-4 px-4 text-[#64748B]">
                    None (manual Google Calendar juggling)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#0F172A]">PR & Code Linking</td>
                  <td className="py-4 px-4 bg-[#EFF6FF]/60 font-semibold text-[#2563EB]">
                    Auto-synthesizes commits into backlog cards
                  </td>
                  <td className="py-4 px-4 text-[#64748B]">
                    Requires rigid commit message syntax
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#0F172A]">Sprint Forecasting</td>
                  <td className="py-4 px-4 bg-[#EFF6FF]/60 font-semibold text-[#2563EB]">
                    Monte Carlo probabilistic simulations
                  </td>
                  <td className="py-4 px-4 text-[#64748B]">
                    Static burn-down charts based on estimates
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-[#0F172A]">Executive Briefs</td>
                  <td className="py-4 px-4 bg-[#EFF6FF]/60 font-semibold text-[#2563EB]">
                    Synthesized morning briefs with blocker triage
                  </td>
                  <td className="py-4 px-4 text-[#64748B]">
                    Manual 30-min status meetings
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Security & Privacy Standards */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-14 border border-[#1E293B]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#60A5FA] text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>Enterprise-Grade Security Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Zero model training on your private intellectual property.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              We know your codebase and internal communications are confidential. FlowDesk operates with strict zero-data retention on LLM provider servers, customer-managed encryption keys (CMEK), and isolated vector tenant partitions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="p-4 bg-[#1E293B] rounded-xl border border-slate-800">
                <Lock className="w-4 h-4 text-[#60A5FA] mb-2" />
                <div className="font-bold text-white mb-1">SOC2 Type II Certified</div>
                <p className="text-[11px] text-slate-400">Audited annually by independent cybersecurity compliance auditors.</p>
              </div>
              <div className="p-4 bg-[#1E293B] rounded-xl border border-slate-800">
                <Shield className="w-4 h-4 text-[#60A5FA] mb-2" />
                <div className="font-bold text-white mb-1">End-to-End Encryption</div>
                <p className="text-[11px] text-slate-400">TLS 1.3 in transit and AES-256 at rest across all database shards.</p>
              </div>
              <div className="p-4 bg-[#1E293B] rounded-xl border border-slate-800">
                <Cpu className="w-4 h-4 text-[#60A5FA] mb-2" />
                <div className="font-bold text-white mb-1">Zero Training Clause</div>
                <p className="text-[11px] text-slate-400">Strict contract guarantees that customer data is never used to fine-tune base models.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection onOpenTrial={onOpenTrial} />
    </div>
  );
};
