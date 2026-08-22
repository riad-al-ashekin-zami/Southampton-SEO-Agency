export interface AuditFormData {
  name: string;
  businessName: string;
  website: string;
  email: string;
  phone: string;
  goals: string;
  monthlyBudget?: string;
}

export interface StrategyCallFormData {
  name: string;
  businessName: string;
  website: string;
  email: string;
  phone: string;
  notes: string;
  timeSlot?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  searchIntentNote?: string;
  details: {
    overview: string;
    deliverables: string[];
    outcome: string;
  };
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  symptom: string;
}

export interface DifferentiatorItem {
  id: string;
  title: string;
  summary: string;
  detail: string;
}

export interface CaseStudyPlaceholder {
  id: string;
  clientType: string;
  tag: string;
  challenge: string;
  strategy: string[];
  metrics: {
    label: string;
    placeholder: string;
  }[];
  businessOutcome: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  actions: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  idealFor: string;
  features: string[];
  deliverables: string[];
  ctaText: string;
}

export interface PricingComparisonRow {
  feature: string;
  category: string;
  starter: string | boolean;
  growth: string | boolean;
  authority: string | boolean;
  tooltip?: string;
}

export interface IndustryCategory {
  id: string;
  name: string;
  description: string;
  commonKeywords: string[];
}

export interface LocalArea {
  name: string;
  type: 'Primary Hub' | 'Key Surrounding Area' | 'Regional Hampshire Corridor';
  distanceFromSouthampton: string;
  commercialContext: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
