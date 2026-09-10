import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Home, 
  Wrench, 
  Building2, 
  FileCheck, 
  ArrowRight, 
  Sparkles,
  Check,
  X as CloseIcon,
  Clock,
  Layers
} from 'lucide-react';
import { ServiceType } from '../types';
import { SERVICES_DATA } from '../data/roofingData';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/ui/CTASection';

interface ServicesProps {
  onSelectService: (serviceId: ServiceType) => void;
  onOpenQuote: (serviceId?: ServiceType) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectService,
  onOpenQuote
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'inspection'>('all');

  const filteredServices = SERVICES_DATA.filter(s => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'residential') return s.id === 'roof-replacement' || s.id === 'roof-repair';
    if (activeFilter === 'commercial') return s.id === 'commercial-roofing';
    if (activeFilter === 'inspection') return s.id === 'roof-inspection';
    return true;
  });

  const materialsMatrix = [
    {
      material: 'GAF Timberline HDZ (Architectural Shingles)',
      windRating: '130 MPH Unlimited Wind',
      lifespan: '30 – 50 Years',
      impactClass: 'Class 3 / Class 4 available',
      avgCost: '$$ (Budget Friendly)',
      bestFor: 'Residential estates, maximum resale appeal'
    },
    {
      material: '24-Gauge Standing Seam Metal (Kynar 500)',
      windRating: '160+ MPH Hurricane Rated',
      lifespan: '50 – 70+ Years',
      impactClass: 'Class 4 (Highest Hail Rating)',
      avgCost: '$$$$ (Premium Investment)',
      bestFor: 'Modern architecture, mountain hail zones, lifetime homes'
    },
    {
      material: 'Carlisle 60-Mil TPO Single-Ply Membrane',
      windRating: 'Engineered FM 1-90',
      lifespan: '25 – 35 Years',
      impactClass: 'Puncture Resistant Reinforcement',
      avgCost: '$$$ (Commercial Value)',
      bestFor: 'Low-slope flat roofs, retail centers, warehouses'
    },
    {
      material: 'Boral Concrete & Spanish Clay Tile',
      windRating: '140 MPH Rated',
      lifespan: '60 – 100 Years',
      impactClass: 'Class 4 Impact',
      avgCost: '$$$$$ (Luxury Artisan)',
      bestFor: 'Mediterranean, Tuscan, and historic properties'
    }
  ];

  return (
    <div className="w-full bg-[#FBFBFA]">
      {/* Services Header Banner */}
      <section className="bg-[#0B192C] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#E8681A] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Master Elite Certified Standards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Roofing & Exterior Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every project is engineered with code-exceeding structural fasteners, synthetic vapor barriers, and backed by a 25-year Golden Pledge workmanship guarantee.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'residential', label: 'Residential Roofing' },
              { id: 'commercial', label: 'Commercial Systems' },
              { id: 'inspection', label: 'Drone Inspections' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#E8681A] text-white shadow-sm'
                    : 'bg-white/10 hover:bg-white/15 text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Service Visual Image */}
              <div className={`lg:col-span-5 relative min-h-[280px] lg:min-h-full ${
                index % 2 === 1 ? 'lg:order-last' : ''
              }`}>
                <img
                  src={service.heroImage}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 bg-[#0B192C]/90 backdrop-blur-xs text-white px-3 py-1 rounded-lg text-xs font-semibold">
                  {service.duration}
                </div>
              </div>

              {/* Service Information */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E8681A]">
                      {service.startingPrice}
                    </span>
                    <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold border border-emerald-200">
                      {service.warranty.split('&')[0]}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#0B192C]">{service.title}</h2>
                  <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-100">
                    {service.keyBenefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-[#1E293B]">
                        <Check className="w-4 h-4 text-[#E8681A] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="text-xs font-bold text-[#0B192C] hover:text-[#E8681A] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Full Technical Specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Button
                    size="md"
                    variant="primary"
                    onClick={() => onOpenQuote(service.id)}
                  >
                    Request Free Quote for this Service
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Materials Comparison Matrix */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Material Engineering"
            title="Roofing Materials Comparison Guide"
            subtitle="Understand the durability, wind tolerances, and investment levels of the four primary roofing systems we install."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden shadow-xs border border-slate-200">
              <thead className="bg-[#0B192C] text-white text-xs uppercase tracking-wider font-bold">
                <tr>
                  <th className="p-4">Material System</th>
                  <th className="p-4">Wind Warranty</th>
                  <th className="p-4">Expected Lifespan</th>
                  <th className="p-4">Impact Rating</th>
                  <th className="p-4">Investment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {materialsMatrix.map((mat, mIdx) => (
                  <tr key={mIdx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-[#0B192C]">
                      <div>{mat.material}</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">{mat.bestFor}</div>
                    </td>
                    <td className="p-4 font-semibold text-slate-700">{mat.windRating}</td>
                    <td className="p-4 font-semibold text-slate-700">{mat.lifespan}</td>
                    <td className="p-4 font-semibold text-emerald-700">{mat.impactClass}</td>
                    <td className="p-4 font-bold text-[#E8681A]">{mat.avgCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection onOpenQuote={() => onOpenQuote('roof-replacement')} />
    </div>
  );
};
