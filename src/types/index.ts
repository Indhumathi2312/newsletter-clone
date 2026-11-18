export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
  children?: NavItem[];
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeatureTab {
  id: string;
  name: string;
  badge?: string;
  iconSrc: string;
  mockupSrc: string;
  mockupAlt: string;
  headline: string;
  description: string;
  features: FeatureItem[];
}

export interface CreatorItem {
  id: string;
  name: string;
  publication: string;
  imageSrc: string;
}

export interface StatCardItem {
  id: string;
  stat: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  caseStudyUrl: string;
}

export type TickerItem = 
  | { type: 'creator'; data: CreatorItem }
  | { type: 'stat'; data: StatCardItem };

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: string;
  priceYearly: string;
  billingNoteYearly: string;
  billingNoteMonthly: string;
  isPopular?: boolean;
  ctaText: string;
  ctaHref: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  storyUrl: string;
}

export interface MetricStat {
  id: string;
  value: string;
  label: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}
