import type { NavItem, FooterColumn } from '../types';

export const mainNav: NavItem[] = [
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Products',
    links: [
      { label: 'Aster Lang', href: 'https://aster-lang.dev/' },
      { label: 'Aster Cloud', href: 'https://aster-lang.cloud/' },
      { label: 'VaadinCKEditor', href: 'https://vaadin.com/directory/component/ckeditorvaadin' },
      { label: 'CKEditor Builder', href: '/ckeditor-builder' },
      { label: 'MotionVaadin', href: 'https://vaadin.com/directory/component/motionvaadin' },
      { label: 'ZXingVaadin', href: 'https://vaadin.com/directory/component/zxingvaadin' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Language Design', href: '#services' },
      { label: 'Cloud Infrastructure', href: '#services' },
      { label: 'Full-Stack Development', href: '#services' },
      { label: 'Open Source Consulting', href: '#services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'GitHub', href: 'https://github.com/wontlost-ltd' },
      { label: 'Maven Central', href: 'https://mvnrepository.com/artifact/com.wontlost/ckeditor-vaadin' },
      { label: 'Vaadin Directory', href: 'https://vaadin.com/directory/component/ckeditorvaadin' },
      { label: 'npm Registry', href: 'https://www.npmjs.com/package/@aster-cloud/aster-lang-ts' },
    ],
  },
];
