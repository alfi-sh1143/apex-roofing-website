export type Page = 'home' | 'services' | 'service-details' | 'about' | 'contact';

export type PropertyType = 'residential' | 'commercial' | 'multi-family' | 'industrial';

export type ServiceType = 
  | 'roof-replacement' 
  | 'roof-repair' 
  | 'commercial-roofing' 
  | 'roof-inspection' 
  | 'emergency-repair';

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  propertyType: PropertyType;
  serviceRequired: ServiceType;
  estimatedSqFt?: string;
  roofAge?: string;
  urgency?: 'immediate' | 'within-month' | 'planning';
  address?: string;
  message?: string;
}

export interface QuoteSubmission extends QuoteFormData {
  id: string;
  referenceNumber: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'scheduled' | 'quoted' | 'archived';
}

export interface ServiceDetail {
  id: ServiceType;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  startingPrice: string;
  warranty: string;
  iconName: string;
  heroImage: string;
  idealFor: string[];
  keyBenefits: string[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  materialsUsed: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  projectType: string;
  quote: string;
  verified: boolean;
  completionDate: string;
  avatarUrl?: string;
}

export interface ProjectCase {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  materials: string;
  description: string;
  imageUrl: string;
  statHighlight: string;
}

export interface TrustIndicator {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'process' | 'insurance';
}
