import { ServiceDetail, Testimonial, ProjectCase, TrustIndicator, FAQItem } from '../types';

export const COMPANY_INFO = {
  name: 'Apex Roofing',
  tagline: 'Precision Roofing & Exterior Craftsmanship',
  phone: '+1 (800) 555-APEX',
  phoneRaw: '18005552739',
  emergencyPhone: '+1 (888) 555-ROOF',
  email: 'estimates@apexroofing-portfolio.dev',
  officeAddress: '1420 Congress Ave, Suite 800, Austin, TX 78701',
  serviceRadius: '100+ miles across Metro & Greater Texas/Colorado hubs',
  hours: 'Mon – Fri: 7:00 AM – 6:00 PM | Sat: 8:00 AM – 2:00 PM | 24/7 Emergency Storm Dispatch',
  license: 'State Contractor License #ROC-338291',
  insurance: '$2,000,000 Comprehensive General Liability & Workers’ Comp',
  certifications: ['GAF Master Elite Contractor (Top 2% in US)', 'CertainTeed SELECT ShingleMaster', 'Owens Corning Platinum Preferred', 'NRCA Member'],
  warrantyWorkmanship: '25-Year Golden Pledge Workmanship Guarantee',
  isFictionalDisclaimer: 'Apex Roofing is a fictional home-services brand built as an agency-standard portfolio project demonstrating modern UX architecture, full-stack lead capture, and responsive design systems.'
};

export const TRUST_INDICATORS: TrustIndicator[] = [
  {
    label: 'State Licensed',
    value: '#ROC-338291',
    subtext: 'Fully verified & bonded contractor',
    icon: 'ShieldCheck'
  },
  {
    label: 'Full Coverage',
    value: '$2,000,000',
    subtext: 'Liability & workers compensation',
    icon: 'Lock'
  },
  {
    label: 'Proven Experience',
    value: '10+ Years',
    subtext: 'In residential & commercial roofing',
    icon: 'Calendar'
  },
  {
    label: 'Delivered Projects',
    value: '500+',
    subtext: 'Flawlessly completed roofs',
    icon: 'CheckCircle2'
  },
  {
    label: 'Customer Rating',
    value: '4.9 / 5.0',
    subtext: 'Over 380+ verified Google reviews',
    icon: 'Star'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'roof-replacement',
    title: 'Precision Roof Replacement',
    tagline: 'Engineered for extreme weather, architectural beauty, and lifetime durability.',
    shortDesc: 'Full tear-off and installation with premium synthetic underlayment, architectural shingles, standing-seam metal, or tile systems with up to 50-year manufacturer warranties.',
    fullDesc: 'When your roof nears the end of its useful lifespan or sustains widespread storm deterioration, a complete replacement provides total peace of mind. At Apex Roofing, our factory-certified crews strip down to the structural decking, repair any compromised plywood, install heavy-duty ice & water barriers, and install certified ventilation systems.',
    duration: '1 – 3 Days Typical Turnaround',
    startingPrice: 'From $8,500 (Financing from $129/mo)',
    warranty: '25-Year Workmanship & 50-Year Non-Prorated Material Warranty',
    iconName: 'Home',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    idealFor: [
      'Roofs 18–25+ years old showing granule loss, curling, or chronic leaks',
      'Homeowners seeking maximum curb appeal and resale value before selling',
      'Properties recovering from catastrophic wind, hail, or microburst damage',
      'Upgrading from builder-grade 3-tab shingles to Class-4 impact-resistant architectural shingles'
    ],
    keyBenefits: [
      'GAF Master Elite certified installation protecting your warranty',
      'Dual-layer synthetic underlayment for 100% moisture barrier',
      'Ridge vent ventilation engineering to slash summer attic cooling costs by up to 18%',
      'Complete magnetic site sweep leaving zero stray nails on your driveway or lawn'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Deck Inspection & Tear-Off',
        description: 'Careful removal of old roofing layers down to bare decking; rotten or degraded sheathing is replaced.'
      },
      {
        step: 2,
        title: 'Waterproof Shield & Flashing',
        description: 'Installation of ice/water leak barriers along valleys, chimneys, drip edges, and vulnerable penetrations.'
      },
      {
        step: 3,
        title: 'Precision Shingle / Panel Mounting',
        description: 'Nailing patterns calibrated to 130 MPH wind-resistance standards using hot-dipped galvanized fasteners.'
      },
      {
        step: 4,
        title: 'Ridge Cap & Final Quality Audit',
        description: '21-point supervisor inspection, attic ventilation balance verification, and spotless yard clean-up.'
      }
    ],
    materialsUsed: [
      'GAF Timberline HDZ Architectural Shingles',
      'CertainTeed Landmark Pro Designer Series',
      '24-Gauge Standing Seam Kynar-500 Coated Metal',
      'Boral Lightweight Concrete Tile'
    ],
    faqs: [
      {
        question: 'How long does a full roof replacement take?',
        answer: 'Most residential replacements (up to 3,500 sq.ft.) are completed in 1 to 2 business days. Large custom estates or standing seam metal roofs may take 3 to 4 days.'
      },
      {
        question: 'Do you offer financing?',
        answer: 'Yes. We partner with top-tier lending partners providing 0% APR for 12 months, or low fixed-rate monthly payments starting at $129/month with zero prepayment penalties.'
      }
    ]
  },
  {
    id: 'roof-repair',
    title: 'Targeted Roof & Leak Repair',
    tagline: 'Rapid diagnosis and long-lasting structural restoration before leaks ruin your home.',
    shortDesc: 'Stop active leaks, replace blown-off shingles, repair flashing around chimneys and skylights, and seal compromised pipe boots with same-day emergency dispatch.',
    fullDesc: 'Small roof leaks often fester unseen inside attic insulation, rotting roof rafters and encouraging toxic mold growth long before ceiling stains appear. Our specialized repair technicians use moisture meters and thermal imaging to isolate the true entry point and execute permanent, code-compliant structural repairs.',
    duration: '2 – 5 Hours on average',
    startingPrice: 'From $450',
    warranty: '5-Year Leak-Free Guarantee on all repaired sections',
    iconName: 'Wrench',
    heroImage: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1400&q=80',
    idealFor: [
      'Active water spots or dripping ceilings during or after heavy rainstorms',
      'Missing, creased, or wind-lifted shingles following high-wind events',
      'Deteriorated rubber pipe flashing boots and rusted chimney step flashing',
      'Animals, fallen tree branches, or satellite dish anchor penetration damage'
    ],
    keyBenefits: [
      '24/7 emergency response with immediate tarping services available',
      'Exact shingle color-matching technology using manufacturer pigment libraries',
      'Thermal imaging leak tracing to pinpoint concealed water avenues',
      'Transparent upfront flat pricing with zero surprise charges'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Thermal Moisture Mapping',
        description: 'Non-invasive infrared scan to locate hidden wet insulation pockets and pin-hole water pathways.'
      },
      {
        step: 2,
        title: 'Defect Removal & Decking Check',
        description: 'Damaged shingles, corroded step flashing, or compromised nails are cleanly excised without damaging adjacent areas.'
      },
      {
        step: 3,
        title: 'Permanent Sealed Integration',
        description: 'New waterproof membrane, custom-bent aluminum flashing, and color-matched shingles locked into place.'
      },
      {
        step: 4,
        title: 'Water Hose Stress Test',
        description: 'Simulated high-volume rain test to verify 100% leak seal before we pack up our ladders.'
      }
    ],
    materialsUsed: [
      'Heavy-duty lead & silicone pipe boot collars',
      'Custom fabricated 0.032 aluminum and copper flashing',
      'Class-A polymer modified asphalt mastic',
      'OEM replacement shingles from leading manufacturers'
    ],
    faqs: [
      {
        question: 'Can you match the color of my weathered shingles?',
        answer: 'Yes! We carry color swatches from all major manufacturers and factor in UV exposure weathering to ensure a visually cohesive repair.'
      },
      {
        question: 'Is it better to repair or replace my roof?',
        answer: 'If the roof is under 15 years old and damage is isolated to under 20% of the surface, a targeted repair is usually the most cost-effective decision. We provide honest recommendations backed by photos.'
      }
    ]
  },
  {
    id: 'commercial-roofing',
    title: 'Commercial Roofing Systems',
    tagline: 'High-performance flat & low-slope systems engineered for retail, industrial, and offices.',
    shortDesc: 'Energy-saving TPO, PVC, EPDM single-ply membranes, metal retrofits, and liquid silicone coatings designed to minimize downtime and maximize commercial property ROI.',
    fullDesc: 'Commercial building envelopes require rigorous engineering, compliance with local fire codes, and minimal disruption to daily business operations. Apex Roofing specializes in low-slope flat roofs for warehouses, retail plazas, apartment complexes, and institutional facilities.',
    duration: 'Scheduled around your business operating hours',
    startingPrice: 'Custom Bid based on square footage & system',
    warranty: 'Up to 30-Year NDL (No Dollar Limit) Manufacturer Warranties',
    iconName: 'Building2',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1400&q=80',
    idealFor: [
      'Commercial warehouses, logistics hubs, and manufacturing facilities',
      'Multi-family apartment complexes, condominiums, and HOA communities',
      'Retail strip centers, restaurants, and medical office buildings',
      'Aging flat roofs seeking energy-star reflective cool-roof certifications'
    ],
    keyBenefits: [
      'Cool Roof rating reflects 86% of solar heat, lowering commercial HVAC loads',
      'Minimal operational disruption with specialized night/weekend scheduling',
      'Certified applicators for Carlisle, Firestone (Elevate), and Johns Manville',
      'Comprehensive annual preventative maintenance & drain cleaning contracts'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Core Cut & Moisture Probe',
        description: 'Core sampling to evaluate underlying insulation layers, slope-to-drain efficiency, and substrate deck integrity.'
      },
      {
        step: 2,
        title: 'Tapered Polyiso Insulation',
        description: 'Engineered positive drainage layout preventing ponding water around rooftop HVAC units and scuppers.'
      },
      {
        step: 3,
        title: 'Robotic Heat-Welded Seams',
        description: 'Continuous thermoplastically fused seams tested to be 4x stronger than traditional adhesive joints.'
      },
      {
        step: 4,
        title: 'Manufacturer NDL Inspection',
        description: 'Third-party factory technician sign-off for full No Dollar Limit coverage issuance.'
      }
    ],
    materialsUsed: [
      '60-mil & 80-mil Reinforced TPO (Thermoplastic Polyolefin)',
      'Chemical-resistant KEE & PVC Membranes',
      'High-solids elastomeric silicone roof coatings',
      'Commercial standing seam metal systems'
    ],
    faqs: [
      {
        question: 'Will our business need to shut down during commercial re-roofing?',
        answer: 'No. Over 95% of our commercial installations are executed without disrupting business operations, tenant access, or customer parking.'
      },
      {
        question: 'What is an NDL warranty?',
        answer: 'An NDL (No Dollar Limit) warranty is backed directly by the materials manufacturer and covers 100% of material and labor costs for the entire warranty term without financial cap.'
      }
    ]
  },
  {
    id: 'roof-inspection',
    title: 'Certified 21-Point Drone Inspection',
    tagline: 'High-resolution aerial imaging and engineering assessments for buying, selling, or claims.',
    shortDesc: 'Comprehensive drone photography, thermal moisture analysis, and certified PDF inspection reports for real estate transactions, insurance claims, and preventative peace of mind.',
    fullDesc: 'Before filing an insurance claim, purchasing a property, or budgeting for future capital improvements, you need an objective, forensic assessment of your roofing envelope. Apex Roofing pairs FAA-certified drone pilots with Master Elite roofing inspectors to evaluate every square foot without causing accidental foot-traffic damage.',
    duration: '45 – 75 Minute On-Site Scan; Same-Day Digital Report',
    startingPrice: 'FREE for Homeowners / $295 for Real Estate Closing Certifications',
    warranty: 'Certified Document Accepted by All Major Insurance Carriers',
    iconName: 'FileCheck',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
    idealFor: [
      'Homeowners after hail or severe windstorms to check for hidden bruising',
      'Buyers and real estate agents during home inspection contingency periods',
      'HOA boards preparing 5-year capital reserve studies',
      'Annual preventative upkeep to preserve manufacturer warranty terms'
    ],
    keyBenefits: [
      '4K ultra-HD drone photography capturing inaccessible steep-pitch peaks',
      'Objective forensic analysis of granule displacement and shingle delamination',
      'Itemized repair-versus-replace cost breakdown in clear consumer English',
      'Comprehensive insurance-ready Xactimate estimate formatting'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Aerial Drone Grid Flight',
        description: 'Automated 4K photogrammetry flight capturing 360-degree aerial views of all roof facets and pitches.'
      },
      {
        step: 2,
        title: 'Hands-On Penetration Check',
        description: 'Physical audit of chimney counter-flashing, valley metal, sewer vents, and attic intake baffles.'
      },
      {
        step: 3,
        title: 'Attic Envelope Verification',
        description: 'Interior check for daylight intrusion, attic moisture buildup, mildew, and insulation R-values.'
      },
      {
        step: 4,
        title: 'Interactive Cloud Report Delivery',
        description: 'Same-day PDF report with annotated high-res photos, expected remaining lifespan, and priority ratings.'
      }
    ],
    materialsUsed: [
      'DJI Mavic Enterprise 4K Thermal Drone Fleet',
      'FLIR infrared non-destructive moisture scanners',
      'Xactimate 28 industry-standard estimation software',
      'Digital pitch gauges and shingle thickness micrometers'
    ],
    faqs: [
      {
        question: 'Is the residential roof inspection really 100% free?',
        answer: 'Yes! For local homeowners considering repair or replacement, our comprehensive 21-point drone inspection is completely free with zero sales obligation.'
      },
      {
        question: 'Can you help us with our insurance claim?',
        answer: 'Yes. While we are contractors and not public adjusters, we provide the documented photo evidence, hail sizing measurements, and line-item estimates your adjuster requires to approve fair coverage.'
      }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    author: 'Marcus & Elena Vance',
    role: 'Homeowners',
    location: 'Westlake Hills, Austin, TX',
    rating: 5,
    projectType: 'Full Roof Replacement (GAF Timberline HDZ)',
    quote: 'Apex Roofing is in a completely different tier than the standard door-to-door roofers. From the initial drone inspection with clear photos to the final magnetic nail sweep, they were punctual, respectful of our landscaping, and finished our 4,200 sq.ft. roof in just two days.',
    verified: true,
    completionDate: 'October 2025',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    author: 'David Chen',
    role: 'Director of Property Operations',
    location: 'Apex Commercial Plaza, Dallas, TX',
    rating: 5,
    projectType: 'Commercial TPO Membrane (48,000 Sq.Ft.)',
    quote: 'Managing six retail tenants during a commercial roof replacement was my biggest nightmare. Apex handled the entire project with zero interruption to customer parking or tenant retail hours. Their heat-welded seams are flawless, and their 25-year NDL warranty gave our board total confidence.',
    verified: true,
    completionDate: 'December 2025',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    author: 'Sarah Jenkins, CPA',
    role: 'Historic Homeowner',
    location: 'Lakewood District, Denver, CO',
    rating: 5,
    projectType: 'Storm Hail Damage & Skylight Flashing',
    quote: 'After a severe golf-ball hail storm, three different roofers told me I needed a complete rebuild. Apex sent out a certified inspector who showed me that only the north slope and two skylight seals were damaged. They saved me over $14,000 with an honest, permanent repair. Integrity is rare today—Apex has it.',
    verified: true,
    completionDate: 'January 2026',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-4',
    author: 'Robert Sterling',
    role: 'Custom Home Builder',
    location: 'Hill Country Reserve, San Antonio, TX',
    rating: 5,
    projectType: 'Standing Seam Metal Roofing (Matte Charcoal)',
    quote: 'As a luxury home builder, I hold my subcontractors to impossible standards. Apex Roofing delivered crisp 24-gauge standing seam metal panels with hidden fasteners and seamless valley transitions. Their craftsmanship elevated the entire architectural profile of our showcase home.',
    verified: true,
    completionDate: 'February 2026',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const PROJECT_CASES: ProjectCase[] = [
  {
    id: 'p-1',
    title: 'Modern Farmhouse Architectural Shingle',
    category: 'Residential Replacement',
    location: 'Barton Creek, Austin, TX',
    duration: '2 Days',
    materials: 'GAF Timberline HDZ in Charcoal Black + Cobra Attic Ridge Ventilation',
    description: 'Replaced an aging 22-year-old cedar shake roof with Class-4 impact-resistant architectural shingles, custom bronze drip edging, and upgraded ice & water shielding in all valleys.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    statHighlight: '100% Leak Free • 130 MPH Wind Warranty'
  },
  {
    id: 'p-2',
    title: 'Custom Standing Seam Metal Roof',
    category: 'Architectural Metal',
    location: 'Cherry Creek, Denver, CO',
    duration: '4 Days',
    materials: '24-Gauge Kynar 500 Matte Slate Standing Seam with Concealed Fasteners',
    description: 'Precision installation on a modern mountain contemporary estate with steep 10/12 pitch roofs, integrated snow retention brackets, and concealed perimeter guttering.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    statHighlight: 'Class-4 Hail Resistant • 50-Year Lifespan'
  },
  {
    id: 'p-3',
    title: 'Apex Logistics Distribution Facility',
    category: 'Commercial Low-Slope',
    location: 'Fort Worth Industrial Hub, TX',
    duration: '6 Days',
    materials: 'Carlisle 60-Mil White TPO Single-Ply Membrane + R-30 Tapered Polyiso',
    description: 'Engineered a high-reflectance cool roof system over a 35,000 sq.ft. logistics depot, eliminating chronic ponding water issues and cutting interior warehouse temperatures by 11°F.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    statHighlight: '86% Solar Reflectance • 25-Year NDL Warranty'
  }
];

export const SERVICE_AREAS = [
  { city: 'Austin Metro', counties: 'Travis, Williamson, Hays', eta: 'Same-Day Dispatch' },
  { city: 'Dallas – Fort Worth', counties: 'Dallas, Tarrant, Collin, Denton', eta: 'Same-Day Dispatch' },
  { city: 'Houston Greater Area', counties: 'Harris, Fort Bend, Montgomery', eta: '24-Hour Dispatch' },
  { city: 'San Antonio & Hill Country', counties: 'Bexar, Comal, Kendall', eta: 'Same-Day Dispatch' },
  { city: 'Denver Front Range', counties: 'Denver, Arapahoe, Jefferson, Boulder', eta: '24-Hour Dispatch' }
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'pricing',
    question: 'How much does a new roof cost in 2026?',
    answer: 'Residential roof replacements typically range between $7,500 and $18,000 depending on home square footage, pitch steepness, accessibility, and choice of materials (Architectural shingles vs. Standing Seam Metal vs. Designer Tile). We provide a detailed line-item quote with zero hidden fees during your free inspection.'
  },
  {
    category: 'process',
    question: 'How do you protect my landscaping, driveway, and swimming pool during installation?',
    answer: 'We treat your property like our own. Our crews erect specialized "Catch-All" reinforced tarp netting around your home’s perimeter to catch falling debris. We use plywood track boards to protect your driveway from dump trailers, and conduct three separate magnetic sweeps around your lawn and flowerbeds to capture every loose nail.'
  },
  {
    category: 'insurance',
    question: 'Can you assist with our storm damage insurance claim?',
    answer: 'Absolutely. We regularly meet adjusters on your roof with our drone documentation, hail impact chalkings, and local building code requirements to ensure your insurance carrier approves a complete and fair settlement.'
  },
  {
    category: 'general',
    question: 'What is the difference between manufacturer warranties and workmanship warranties?',
    answer: 'Manufacturer warranties cover defects in the roofing material itself (like granule loss or shingle cracking). A workmanship warranty covers the installation labor and waterproofing execution. Apex Roofing provides a 25-Year Golden Pledge Workmanship Guarantee, backed by our GAF Master Elite status.'
  }
];
