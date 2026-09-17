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

/** 商业授权套餐（按开发者席位计费的年订阅）。checkoutUrl 为空时购买按钮走邮件下单。 */
export interface Plan {
  name: string;
  seats: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  checkoutUrl?: string;
  highlighted?: boolean;
}
