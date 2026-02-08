export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface CaseStudyData {
  client: string;
  industry: string;
  challenge: string;
  solution: string[];
  metrics: Stat[];
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: string;
  badges: string[];
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}
