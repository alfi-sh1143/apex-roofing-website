import React from 'react';
import { 
  ArrowRight, 
  Shield, 
  PhoneCall, 
  CheckCircle2, 
  Camera, 
  Award, 
  Sparkles, 
  MapPin, 
  Clock, 
  FileText, 
  Wrench,
  ChevronRight
} from 'lucide-react';
import { Page, ServiceType } from '../types';
import { 
  COMPANY_INFO, 
  TRUST_INDICATORS, 
  SERVICES_DATA, 
  TESTIMONIALS_DATA, 
  PROJECT_CASES,
  SERVICE_AREAS 
} from '../data/roofingData';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceCard } from '../components/ui/ServiceCard';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { TrustBadge } from '../components/ui/TrustBadge';
import { CTASection } from '../components/ui/CTASection';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onSelectService: (serviceId: ServiceType) => void;
  onOpenQuote: (serviceId?: ServiceType) => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigate,
  onSelectService,
  onOpenQuote
}) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0B192C] text-white pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-800">
        {/* Background ambient lighting effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8681A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Trust Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-slate-200 mb-6 backdrop-blur-xs">
                <Shield className="w-4 h-4 text-[#E8681A]" />
                <span>GAF Master Elite • Top 2% US Roofing Contractor</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Architectural Precision. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-[#E8681A] to-amber-200">
                  Lifetime Roof Protection.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Apex Roofing delivers code-exceeding residential replacements, rapid leak restorations, and commercial membrane systems. Backed by our 25-year Golden Pledge workmanship warranty and 500+ verified completed projects.
              </p>

              {/* Value check pills */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E8681A] shrink-0" />
                  <span>Free Drone Inspection</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E8681A] shrink-0" />
                  <span>25-Yr Workmanship Warranty</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E8681A] shrink-0" />
                  <span>$2M Fully Insured</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => onOpenQuote('roof-replacement')}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="shadow-lg shadow-orange-900/30"
                >
                  Get a Free Quote
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('services')}
                  className="text-white border-slate-700 hover:bg-white/10 hover:border-slate-500"
                >
                  View Our Services
                </Button>
              </div>

              {/* Quick direct phone callout */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div>
                  <span className="text-slate-300 font-semibold">Immediate Storm Emergency Hotline: </span>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-amber-400 font-bold hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="text-slate-400 ml-1">(24/7 Dispatch)</span>
                </div>
              </div>

            </div>

            {/* Right Visual Image & Lead Card Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Apex Roofing residential replacement project"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[440px] object-cover opacity-90 hover:scale-102 transition-transform duration-700"
                />
                
                {/* Visual Glass Overlay Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-black/20" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B192C]/90 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#E8681A] flex items-center justify-center text-white">
                        <Camera className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Austin, TX Hill Country Estate</div>
                        <div className="text-[11px] text-slate-300">Class-4 Impact Architectural Shingles</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#E8681A] bg-white/10 px-2 py-1 rounded">
                      Completed 2 Days
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating review card */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-white text-[#0B192C] p-3.5 rounded-xl shadow-xl border border-slate-200 items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B192C]">4.9 / 5.0 Star Rating</div>
                  <div className="text-[10px] text-[#64748B]">380+ Verified Homeowners</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST INDICATORS BAR */}
      <section className="py-10 bg-[#F3F4F1] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TRUST_INDICATORS.map((item, idx) => (
              <TrustBadge key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineered Roofing Solutions"
            title="Comprehensive Services Built for Longevity"
            subtitle="From emergency storm repairs to full architectural replacements and commercial membranes, our GAF Master Elite certified team delivers unmatched craftsmanship."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={onSelectService}
                onRequestQuote={onOpenQuote}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('services')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Full Service Specifications & Materials Matrix
            </Button>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE APEX ROOFING */}
      <section className="py-16 sm:py-24 bg-[#FBFBFA] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <SectionHeading
                align="left"
                badge="The Apex Difference"
                title="Why Property Owners Choose Us Over Storm Chasers"
                subtitle="Most roofing issues originate from negligent installation shortcuts, not defective materials. Here is how Apex eliminates failure points."
              />

              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E8681A]/10 text-[#E8681A] flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B192C]">GAF Master Elite Certification</h4>
                      <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                        Only the top 2% of roofing contractors qualify. It allows us to back installations with non-prorated 50-year material and 25-year workmanship warranties.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E8681A]/10 text-[#E8681A] flex items-center justify-center shrink-0 mt-0.5">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B192C]">High-Res Aerial Drone Diagnostics</h4>
                      <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                        We capture 4K photogrammetry of every slope, valley, and penetration without damaging weathered shingles through foot traffic.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E8681A]/10 text-[#E8681A] flex items-center justify-center shrink-0 mt-0.5">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B192C]">Zero Nail Property Protection</h4>
                      <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                        We deploy Catch-All net shielding over flowerbeds and run three independent magnetic roller sweeps over your driveways and yard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80"
                    alt="Precision roofing craftsmanship"
                    referrerPolicy="no-referrer"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <div className="text-xs font-bold text-[#0B192C]">Certified Flashing & Valley Waterproofing</div>
                    <p className="text-[11px] text-slate-500 mt-1">Ice & water shielding deployed at all high-stress seams.</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md sm:mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=700&q=80"
                    alt="Thermal moisture diagnostic"
                    referrerPolicy="no-referrer"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <div className="text-xs font-bold text-[#0B192C]">Thermal Moisture Leak Tracing</div>
                    <p className="text-[11px] text-slate-500 mt-1">Pinpoint leaks without invasive destruction.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. 4-STEP PRECISION PROCESS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Streamlined Client Experience"
            title="Our 4-Step Precision Project Workflow"
            subtitle="No surprises, no hidden line items, and no high-pressure sales tactics. Here is how we take you from inspection to a lifetime guaranteed roof."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Free Drone Inspection',
                desc: 'We perform a 4K aerial scan and interior attic inspection to evaluate ventilation and decking integrity.',
                icon: <Camera className="w-5 h-5 text-white" />
              },
              {
                step: '02',
                title: 'Fixed-Price Estimate',
                desc: 'You receive an itemized, transparent proposal with photos, material choices, and 0% APR financing options.',
                icon: <FileText className="w-5 h-5 text-white" />
              },
              {
                step: '03',
                title: '1-to-2 Day Precision Build',
                desc: 'Our certified crews protect your landscaping, tear off old decking, and install your new roofing envelope.',
                icon: <Wrench className="w-5 h-5 text-white" />
              },
              {
                step: '04',
                title: '21-Point Audit & Warranty',
                desc: 'Supervisor sign-off, magnetic nail sweep, and delivery of your 25-year non-prorated warranty certificate.',
                icon: <Award className="w-5 h-5 text-white" />
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FBFBFA] border border-slate-200/90 flex flex-col justify-between hover:border-[#E8681A]/40 transition-colors shadow-2xs relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B192C] flex items-center justify-center">
                      {step.icon}
                    </div>
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0B192C]">{step.title}</h3>
                  <p className="mt-2 text-xs text-[#64748B] leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-[#E8681A]">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="primary"
              onClick={() => onOpenQuote('roof-inspection')}
            >
              Book Your Free Drone Inspection (Step 1)
            </Button>
          </div>
        </div>
      </section>

      {/* 6. PROJECT SHOWCASE SECTION */}
      <section className="py-16 sm:py-24 bg-[#07101C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            badge="Craftsmanship Portfolio"
            title="Recent Completed Projects"
            subtitle="A selection of high-performance architectural shingle, standing seam metal, and commercial installations delivered by our crews."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECT_CASES.map(project => (
              <div
                key={project.id}
                className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col group shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B192C]/90 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-semibold text-amber-400 border border-amber-400/30">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded text-slate-200 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E8681A]" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1 text-[#E8681A] font-bold">
                      <Clock className="w-3 h-3" />
                      {project.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#E8681A] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">{project.statHighlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="py-16 sm:py-24 bg-[#FBFBFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Client Experiences"
            title="Real Reviews From Real Homeowners"
            subtitle="Over 380+ 5-star ratings across Google and the Better Business Bureau. See what local property owners say about our reliability and cleanliness."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. SERVICE AREAS SECTION */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0B192C] text-white">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8681A]">
                Regional Coverage
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Serving Greater Texas & Colorado Metro Communities
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Our rapid-response emergency roofing fleet is positioned across five major regional hubs, providing same-day drone damage assessments and leak mitigation.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {SERVICE_AREAS.map((area, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-left">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{area.city}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">{area.counties}</div>
                  <div className="mt-2 text-[10px] text-emerald-400 font-semibold inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {area.eta}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
              <span>Do not see your county? We frequently travel up to 100 miles for full roof replacements.</span>
              <button
                onClick={() => onOpenQuote('roof-inspection')}
                className="text-[#E8681A] hover:underline font-bold flex items-center gap-1"
              >
                Check Your Address with Estimator →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. STRONG FINAL CTA SECTION */}
      <CTASection onOpenQuote={() => onOpenQuote('roof-replacement')} />
    </div>
  );
};
