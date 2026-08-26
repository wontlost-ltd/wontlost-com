import type { Product } from '../types';

export const products: Product[] = [
  {
    name: 'Aster Lang',
    tagline: 'Human-readable policy language',
    description: 'A type-safe programming language with controlled natural language syntax. Write executable business policies in plain English, Chinese, or German. Powered by a TypeScript compiler and GraalVM Truffle runtime.',
    href: 'https://aster-lang.dev/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>`,
    badges: ['TypeScript', 'GraalVM', 'LSP', 'Multi-Language'],
  },
  {
    name: 'VaadinCKEditor',
    tagline: 'CKEditor 5 for Vaadin Flow',
    description: 'The top-rated CKEditor 5 integration for Vaadin. 70+ plugins, 4 editor types, premium features support, dark mode, i18n, and a builder-pattern Java API. Published on Maven Central.',
    href: 'https://vaadin.com/directory/component/ckeditorvaadin',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`,
    badges: ['Java 21+', 'Vaadin 25+', 'CKEditor 5', '4.92/5 Rating'],
  },
  {
    name: 'CKEditor Builder',
    tagline: 'Visual CKEditor configuration tool',
    description: 'An interactive 7-step wizard for configuring CKEditor 5 instances. Drag-and-drop toolbar builder, live preview, and multi-format code export in Java, TypeScript, or JSON.',
    href: '/ckeditor-builder',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17l-5.25 3.014a.75.75 0 01-1.08-.79l.965-5.86-4.254-4.147a.75.75 0 01.416-1.28l5.884-.855L10.73 0a.75.75 0 011.34 0l2.63 5.25 5.884.855a.75.75 0 01.416 1.28l-4.254 4.147.965 5.86a.75.75 0 01-1.08.79l-5.25-3.014z" /></svg>`,
    badges: ['Spring Boot', 'Vaadin', 'Live Preview', 'Code Export'],
  },
  {
    name: 'Aster Cloud',
    tagline: 'Policy management SaaS platform',
    description: 'Create, test, and deploy business policies with built-in PII protection, GDPR/HIPAA compliance monitoring, and team collaboration. REST API with multi-language SDKs.',
    href: 'https://aster-lang.cloud/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>`,
    badges: ['Next.js', 'PostgreSQL', 'Stripe', 'Compliance'],
  },
];
