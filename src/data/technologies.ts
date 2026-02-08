import type { TechCategory } from '../types';

export const techCategories: TechCategory[] = [
  {
    name: 'Languages & Runtimes',
    items: ['Java 21+', 'TypeScript', 'GraalVM Truffle', 'Aster Lang'],
  },
  {
    name: 'Backend Frameworks',
    items: ['Spring Boot', 'Quarkus', 'Vaadin Flow', 'Next.js'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Lit', 'Astro', 'Tailwind CSS'],
  },
  {
    name: 'Cloud & Infrastructure',
    items: ['K3s', 'Cloudflare', 'ArgoCD', 'Terraform'],
  },
  {
    name: 'DevOps & Platform',
    items: ['Docker', 'Kubernetes', 'Vault', 'Authentik'],
  },
  {
    name: 'Data & Messaging',
    items: ['PostgreSQL', 'Redis', 'Oracle ATP', 'Drizzle ORM'],
  },
];
