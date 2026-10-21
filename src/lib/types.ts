export interface ServiceLead {
  id?: string;
  full_name: string;
  business_name?: string;
  email: string;
  phone?: string;
  service_interest: string;
  budget_range?: string;
  project_description: string;
  preferred_contact_method?: 'email' | 'phone' | 'whatsapp';
  status?: 'new' | 'contacted' | 'in_progress' | 'completed' | 'archived';
  created_at?: string;
}

export interface NewsletterSubscriber {
  id?: string;
  email: string;
  status?: 'subscribed' | 'unsubscribed';
  subscribed_at?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  badge?: string;
  targetAudience: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'e-commerce' | 'saas' | 'local' | 'automation';
  categoryLabel: string;
  metric: string;
  metricLabel: string;
  summary: string;
  results: string[];
  deliverables: string[];
  imagePlaceholderGradient: string;
  isDemo?: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  priceDisplay: string;
  isPopular?: boolean;
  timeline: string;
  features: string[];
  idealFor: string;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
  isDemo?: boolean;
}
