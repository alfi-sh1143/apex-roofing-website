import React, { useState } from 'react';
import { Page } from '../types';
import { PRICING_TIERS, FAQ_ITEMS } from '../data/flowDeskData';
import { PricingCard } from '../components/ui/PricingCard';
import { FAQ } from '../components/ui/FAQ';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/ui/CTASection';
import {
  Sparkles,
  Check,
  Minus,
  Calculator,
  Shield,
  ArrowRight,
  HelpCircle,
  Clock,
  TrendingUp,
  Building
} from 'lucide-react';

interface PricingProps {
  onNavigate: (page: Page) => void;
  onOpenTrial: (planId?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onNavigate, onOpenTrial }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [teamSize, setTeamSize] = useState(15);
  const [avgHourlyCost, setAvgHourlyCost] = useState(85);

  // Calculations for ROI
  const hoursSavedPerPersonPerWeek = 4.2;
  const totalHoursSavedMonthly = Math.round(teamSize * hoursSavedPerPersonPerWeek * 4.33);
  const dollarSavingsMonthly = Math.round(totalHoursSavedMonthly * avgHourlyCost);
  const toolCostMonthly = isAnnual ? teamSize * 24 : teamSize * 30;
  const netRoi = Math.max(0, Math.round(((dollarSavingsMonthly - toolCostMonthly) / toolCostMonthly) * 100));

  const comparisonFeatures = [
    {
      category: 'Autonomous AI Intelligence',
      items: [
        { name: 'Semantic RAG Context Graph', free: 'Basic (100 items)', pro: 'Unlimited', ent: 'Dedicated Shard' },
        { name: 'Automated Sprint Triage', free: '5 runs/mo', pro: 'Unlimited', ent: 'Custom Models' },
        { name: 'Meeting Defense & Shielding', free: '1 calendar', pro: 'Unlimited calendars', ent: 'Cross-Org Defense' },
        { name: 'Executive Morning Briefs', free: 'Weekly digest', pro: 'Daily & On-Demand', ent: 'Custom Schedules' },
        { name: 'Monte Carlo Velocity Forecasts', free: false, pro: true, ent: true }
      ]
    },
    {
      category: 'Integrations & Ecosystem',
      items: [
        { name: 'GitHub & GitLab Bi-directional Sync', free: true, pro: true, ent: true },
        { name: 'Slack Webhook & Bot Automation', free: true, pro: true, ent: true },
        { name: 'Linear & Jira Two-Way Sync', free: '1 project', pro: 'Unlimited', ent: 'Unlimited' },
        { name: 'Google Calendar & Outlook Defense', free: 'Google only', pro: 'Google & Outlook', ent: 'Custom CalDAV' },
        { name: 'Figma Design Context Integration', free: false, pro: true, ent: true },
        { name: 'Custom REST & GraphQL Webhooks', free: false, pro: '10 active', ent: 'Unlimited' }
      ]
    },
    {
      category: 'Security, Privacy & Governance',
      items: [
        { name: 'Zero Model Training Guarantee', free: true, pro: true, ent: true },
        { name: 'AES-256 Data Encryption at Rest', free: true, pro: true, ent: true },
        { name: 'SOC2 Type II & GDPR Compliance', free: true, pro: true, ent: true },
        { name: 'SAML 2.0 / Okta / Azure SSO', free: false, pro: false, ent: true },
        { name: 'Custom Data Retention Policies', free: false, pro: false, ent: true },
        { name: 'Private VPC & On-Prem Deployment', free: false, pro: false, ent: true }
      ]
    },
    {
      category: 'Support & SLAs',
      items: [
        { name: 'Customer Support', free: 'Community', pro: 'Priority Email (<4h)', ent: 'Dedicated Slack (<15m)' },
        { name: 'Service Uptime SLA', free: '99.5%', pro: '99.9%', ent: '99.99% Financially Backed' },
        { name: 'Dedicated Customer Success Architect', free: false, pro: false, ent: true }
      ]
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] text-[#0F172A]">
      {/* Header */}
      <section className="bg-white border-b border-[#E2E8F0] pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-semibold text-[#2563EB] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent & Predictable Pricing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight mb-4">
            Invest in focus. Ship with velocity.
          </h1>

          <p className="text-lg text-[#475569] max-w-2xl mx-auto mb-8">
            Every plan includes a 14-day full access trial. No credit card required, instant cancellation anytime.
          </p>

          {/* Toggle Button */}
          <div className="inline-flex items-center bg-[#F1F5F9] p-1 rounded-xl border border-[#E2E8F0]">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                !isAnnual
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                isAnnual
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <span>Annual billing</span>
              <span className="text-[10px] font-bold bg-[#ECFDF5] text-[#059669] px-2 py-0.5 rounded">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map(tier => (
            <PricingCard
              key={tier.id}
              tier={tier}
              isAnnual={isAnnual}
              onSelectPlan={() => onOpenTrial(tier.name)}
            />
          ))}
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold px-3 py-1 rounded-full mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive ROI Modeler</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2">
              Calculate Your Team’s Reclaimed Capacity
            </h2>
            <p className="text-sm text-[#64748B]">
              Based on empirical client telemetry across 300+ engineering squads.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-[#E2E8F0]">
              {/* Slider 1: Team Size */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#0F172A] mb-2">
                  <span>Team Size (Engineers & Product Managers)</span>
                  <span className="text-base text-[#2563EB] font-mono">{teamSize} members</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="150"
                  value={teamSize}
                  onChange={e => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-[#CBD5E1] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[11px] text-[#64748B] mt-1">
                  <span>2 members</span>
                  <span>50 members</span>
                  <span>150+ members</span>
                </div>
              </div>

              {/* Slider 2: Average Hourly Rate */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#0F172A] mb-2">
                  <span>Blended Hourly Cost</span>
                  <span className="text-base text-[#2563EB] font-mono">${avgHourlyCost}/hour</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="180"
                  step="5"
                  value={avgHourlyCost}
                  onChange={e => setAvgHourlyCost(Number(e.target.value))}
                  className="w-full h-2 bg-[#CBD5E1] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[11px] text-[#64748B] mt-1">
                  <span>$40/hr (Startup)</span>
                  <span>$85/hr (Industry Avg)</span>
                  <span>$180/hr (Senior Silicon Valley)</span>
                </div>
              </div>
            </div>

            {/* Calculated Impact Results */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4">
                <div className="text-xs text-[#64748B] mb-1">Focus Time Reclaimed</div>
                <div className="text-2xl font-black text-[#0F172A]">
                  {totalHoursSavedMonthly.toLocaleString()} hrs
                </div>
                <div className="text-[11px] text-[#059669] font-medium">per month across team</div>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4">
                <div className="text-xs text-[#64748B] mb-1">Net Economic Value Reclaimed</div>
                <div className="text-2xl font-black text-[#059669]">
                  ${dollarSavingsMonthly.toLocaleString()}
                </div>
                <div className="text-[11px] text-[#64748B]">estimated monthly impact</div>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4">
                <div className="text-xs text-[#64748B] mb-1">Return on Investment (ROI)</div>
                <div className="text-2xl font-black text-[#2563EB]">
                  {netRoi}%
                </div>
                <div className="text-[11px] text-[#2563EB] font-medium">calculated net ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full 24-Feature Comparison Table */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-2">
            Detailed Plan Comparison
          </h2>
          <p className="text-sm text-[#64748B]">
            Examine exact line-item capabilities across all three service tiers.
          </p>
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  <th className="py-4 px-6 w-1/2">Capability</th>
                  <th className="py-4 px-4 text-center">Starter</th>
                  <th className="py-4 px-4 text-center bg-[#EFF6FF] text-[#2563EB]">Pro</th>
                  <th className="py-4 px-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-xs sm:text-sm">
                {comparisonFeatures.map((group, gIdx) => (
                  <React.Fragment key={gIdx}>
                    <tr className="bg-[#F8FAFC]/80 font-bold text-xs uppercase tracking-wider text-[#475569]">
                      <td colSpan={4} className="py-3 px-6">
                        {group.category}
                      </td>
                    </tr>
                    {group.items.map((item, iIdx) => (
                      <tr key={iIdx} className="hover:bg-[#FBFBFA]">
                        <td className="py-3.5 px-6 font-medium text-[#0F172A]">
                          {item.name}
                        </td>
                        <td className="py-3.5 px-4 text-center text-xs text-[#64748B]">
                          {typeof item.free === 'boolean' ? (
                            item.free ? (
                              <Check className="w-4 h-4 text-[#059669] mx-auto" />
                            ) : (
                              <Minus className="w-4 h-4 text-[#CBD5E1] mx-auto" />
                            )
                          ) : (
                            item.free
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center text-xs font-semibold bg-[#EFF6FF]/40 text-[#2563EB]">
                          {typeof item.pro === 'boolean' ? (
                            item.pro ? (
                              <Check className="w-4 h-4 text-[#2563EB] mx-auto" />
                            ) : (
                              <Minus className="w-4 h-4 text-[#CBD5E1] mx-auto" />
                            )
                          ) : (
                            item.pro
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center text-xs text-[#0F172A] font-semibold">
                          {typeof item.ent === 'boolean' ? (
                            item.ent ? (
                              <Check className="w-4 h-4 text-[#059669] mx-auto" />
                            ) : (
                              <Minus className="w-4 h-4 text-[#CBD5E1] mx-auto" />
                            )
                          ) : (
                            item.ent
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enterprise Contact Callout */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-[#0F172A] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#1E293B]">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1E293B] text-[#93C5FD] text-xs font-semibold px-2.5 py-1 rounded-md mb-3">
              <Building className="w-3.5 h-3.5" />
              <span>Custom Deployment & Security Audits</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Need custom terms or private VPC deployment?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg leading-relaxed">
              We partner with large engineering organizations to support custom SAML/SCIM workflows, air-gapped on-prem installations, and bespoke AI tuning.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => onNavigate('contact')}
            className="whitespace-nowrap shrink-0"
          >
            Talk to Solutions Architect
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQ
          items={FAQ_ITEMS}
          title="Pricing & Trial Questions"
          subtitle="Frequently asked questions about licensing, billing cycles, and upgrades."
          showSearch={false}
        />
      </section>

      {/* CTA */}
      <CTASection onOpenTrial={onOpenTrial} />
    </div>
  );
};
