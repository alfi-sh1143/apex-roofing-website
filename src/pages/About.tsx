import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  HardHat, 
  CheckCircle2, 
  Building2, 
  Clock, 
  HeartHandshake,
  ArrowRight,
  Info
} from 'lucide-react';
import { COMPANY_INFO, TRUST_INDICATORS } from '../data/roofingData';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { TrustBadge } from '../components/ui/TrustBadge';
import { CTASection } from '../components/ui/CTASection';

interface AboutProps {
  onOpenQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuote }) => {
  return (
    <div className="w-full bg-[#FBFBFA]">
      {/* About Header */}
      <section className="bg-[#0B192C] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#E8681A] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Built on Uncompromising Standards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About Apex Roofing
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Founded with a singular mission: to eliminate the corner-cutting, aggressive sales tactics, and hidden costs rampant in the roofing industry through engineering rigor.
          </p>
        </div>
      </section>

      {/* Fictional Portfolio Showcase Notice */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 shadow-sm flex items-start gap-3 text-xs text-amber-950">
          <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Portfolio Project Presentation: </span>
            {COMPANY_INFO.isFictionalDisclaimer} All forms submit to a live Firestore database or durable persistent client simulation.
          </div>
        </div>
      </div>

      {/* Story & Philosophy Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <SectionHeading
              align="left"
              badge="Our Story"
              title="A Roofing Contractor You Can Actually Trust"
              subtitle="Over 80% of premature roof failures occur because installers skipped basic code requirements—like using four nails per shingle instead of six, omitting starter strips, or reusing rusted valley metal."
            />

            <p className="text-sm text-[#64748B] leading-relaxed">
              At Apex Roofing, we set out to build a professional home-services company that operates with the discipline of commercial architectural contractors. We don’t employ high-pressure salesmen. Our inspectors are trained drone pilots and field technicians who present photographic evidence so you can make informed decisions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="font-bold text-[#0B192C] text-sm">GAF Master Elite</div>
                <div className="text-xs text-slate-500 mt-1">
                  Ranked in the top 2% of North American roofing contractors for insurance standing and installation excellence.
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="font-bold text-[#0B192C] text-sm">Golden Pledge Guarantee</div>
                <div className="text-xs text-slate-500 mt-1">
                  25-year non-prorated workmanship warranty backed directly by GAF manufacturer factory inspections.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=900&q=80"
                alt="Apex Roofing field supervisors and crew"
                referrerPolicy="no-referrer"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E8681A]">
                  Field Rigor
                </div>
                <div className="text-lg font-bold">Factory Certified Master Installers</div>
                <div className="text-xs text-slate-300 mt-1">
                  Every crew leader has a minimum of 8 years hands-on roofing experience and OSHA-30 safety certification.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Operating Code"
            title="The 4 Apex Craftsmanship Pillars"
            subtitle="How we maintain a 4.9-star average across hundreds of completed projects."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'No-Surprise Fixed Bids',
                desc: 'Once we sign a contract, our price is locked. If we discover rotted decking during tear-off, your first two sheets of plywood are replaced free of charge.',
                icon: <CheckCircle2 className="w-6 h-6 text-[#E8681A]" />
              },
              {
                title: 'OSHA Safety First',
                desc: '100% tie-off harness policy for every team member on steep pitch slopes. Full $2M liability and workers compensation protection for your peace of mind.',
                icon: <HardHat className="w-6 h-6 text-[#E8681A]" />
              },
              {
                title: 'Zero Nail Yard Guarantee',
                desc: 'We treat your property like our own. Triple magnetic perimeter sweeps ensure no loose nails puncture your tires or endanger your family pets.',
                icon: <ShieldCheck className="w-6 h-6 text-[#E8681A]" />
              },
              {
                title: 'No High Pressure Sales',
                desc: 'We present clear drone photos and honest recommendations. We will never push for a full replacement when a targeted repair is appropriate.',
                icon: <HeartHandshake className="w-6 h-6 text-[#E8681A]" />
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FBFBFA] border border-slate-200 shadow-2xs hover:border-[#E8681A]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E8681A]/10 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-[#0B192C]">{pillar.title}</h3>
                <p className="mt-2 text-xs text-[#64748B] leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Credentials Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white p-8 sm:p-12 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-extrabold text-[#E8681A]">#ROC-338291</div>
              <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                State Licensed Contractor
              </div>
              <p className="text-xs text-slate-400 mt-1">Verified with Texas & Colorado Licensing Boards</p>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-extrabold text-white">$2,000,000</div>
              <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                Liability & Workers' Comp
              </div>
              <p className="text-xs text-slate-400 mt-1">Certificates of insurance provided prior to job start</p>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-extrabold text-amber-400">25 Years</div>
              <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                Golden Pledge Warranty
              </div>
              <p className="text-xs text-slate-400 mt-1">100% Non-prorated labor & material coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection onOpenQuote={onOpenQuote} />
    </div>
  );
};
