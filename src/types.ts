export type Page = 'home' | 'features' | 'pricing' | 'about' | 'contact';

export interface FeatureItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  iconName: string;
  capabilities: string[];
  metric: {
    value: string;
    label: string;
  };
  previewVisualType: 'task-planning' | 'workflow-automation' | 'team-collaboration' | 'project-analytics' | 'ai-summaries' | 'calendar-sync';
}

export interface PricingTier {
  id: 'free' | 'pro' | 'business' | 'enterprise';
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  badge?: string;
  ctaText: string;
  ctaVariant: 'primary' | 'secondary' | 'outline';
  targetAudience: string;
  keyFeatures: string[];
}

export interface PricingFeatureComparison {
  category: string;
  features: {
    name: string;
    description: string;
    free: boolean | string;
    pro: boolean | string;
    business: boolean | string;
    enterprise: boolean | string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  impactMetric: {
    value: string;
    label: string;
  };
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'features' | 'pricing' | 'security' | 'integrations';
}

export interface IntegrationItem {
  id: string;
  name: string;
  category: 'Communication' | 'Development' | 'Design' | 'Calendar' | 'Docs';
  description: string;
  iconName: string;
  popular: boolean;
  type?: string;
  syncStatus?: string;
}

export type ContactInquiryType = 'sales' | 'demo' | 'support' | 'partnership';

export interface WorkflowDemoPreset {
  id: string;
  title: string;
  trigger: string;
  description: string;
  steps: {
    id: number;
    actor: 'system' | 'ai' | 'integration';
    title: string;
    detail: string;
    timeMs: string;
    status: 'completed' | 'active' | 'queued';
  }[];
  outputSummary: string;
  impactSavedTime: string;
}

export interface TrialLeadSubmission {
  id: string;
  fullName: string;
  email: string;
  companyName: string;
  teamSize: string;
  primaryUseCase: string;
  planInterest: string;
  createdAt: string;
  status: 'trial-active' | 'demo-requested' | 'new';
}

export interface ContactInquirySubmission {
  id: string;
  fullName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  inquiryType: 'sales' | 'demo' | 'support' | 'partnership';
  referenceNumber: string;
  createdAt: string;
  status: 'new' | 'in-review' | 'responded';
}
