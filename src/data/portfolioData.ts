export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  isPrimary?: boolean;
  skills: {
    name: string;
    levelDescription: string;
    tag?: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "wordpress-cms",
    title: "WordPress & CMS",
    description: "My primary specialization: engineering bespoke, conversion-optimized, and maintainable WordPress solutions.",
    isPrimary: true,
    skills: [
      { name: "WordPress Website Development", levelDescription: "Custom themes, child themes, block themes, hooks & filters", tag: "Primary" },
      { name: "Elementor Website Development", levelDescription: "Pixel-perfect visual design, custom widgets, responsive styling", tag: "Core" },
      { name: "WooCommerce & E-Commerce", levelDescription: "Store setup, product catalogs, cart optimization, local payments (LKR/COD)", tag: "Core" },
      { name: "Spectra & Gutenberg Blocks", levelDescription: "Modular block architecture, lightweight layouts, high performance" },
      { name: "Business Websites & Landing Pages", levelDescription: "Conversion-oriented layout structures, clear CTAs, lead capture" },
      { name: "Responsive & User-Friendly Design", levelDescription: "Cross-device responsiveness, mobile-first layouts, accessible UI" },
    ],
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description: "Building responsive, modern user interfaces that bridge WordPress with modern frontend technologies.",
    skills: [
      { name: "HTML5 & Semantic Markup", levelDescription: "Accessible structure, SEO-friendly DOM, semantic headings" },
      { name: "CSS3 & Modern Styling", levelDescription: "Flexbox, CSS Grid, custom properties, responsive breakpoints" },
      { name: "JavaScript (ES6+)", levelDescription: "DOM manipulation, asynchronous operations, event handling, APIs" },
      { name: "React & Next.js", levelDescription: "Component-driven architecture, App Router, SSR, and dynamic web apps" },
      { name: "Tailwind CSS", levelDescription: "Design systems, utility-first styling, and clean maintenance" },
    ],
  },
  {
    id: "seo-optimization",
    title: "SEO & Website Optimization",
    description: "Ensuring websites load fast, pass Core Web Vitals, and are easily indexed by search engines.",
    isPrimary: true,
    skills: [
      { name: "Technical SEO", levelDescription: "Sitemaps, robots.txt, canonicalization, Schema.org structured data", tag: "Core" },
      { name: "On-Page SEO", levelDescription: "Heading hierarchy, meta titles & descriptions, content readability" },
      { name: "Website Speed Optimization", levelDescription: "Asset minification, caching layers, server response time tuning" },
      { name: "Core Web Vitals Improvement", levelDescription: "Optimizing LCP (loading), minimizing CLS (layout shifts), tuning INP" },
      { name: "Image & Media Optimization", levelDescription: "Modern WebP/AVIF formats, responsive image srcsets, lazy loading" },
    ],
  },
  {
    id: "security-maintenance",
    title: "Website Security & Maintenance",
    description: "Keeping websites protected, updated, monitored, and running reliably without downtime.",
    skills: [
      { name: "Website Security Hardening", levelDescription: "Login protection, SSL enforcement, vulnerability prevention, file permissions" },
      { name: "Bug Fixing & Troubleshooting", levelDescription: "Resolving PHP fatal errors, plugin conflicts, JavaScript breakages" },
      { name: "Website Maintenance & Updates", levelDescription: "Safe core/plugin/theme update workflows with backups" },
      { name: "Hosting & Migration Support", levelDescription: "DNS configuration, domain pointing, server migrations without data loss" },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Supporting website traffic and business growth with actionable tracking and visibility practices.",
    skills: [
      { name: "Conversion Rate Optimization (CRO)", levelDescription: "Strategic CTA placement, intuitive form flow, reduced friction" },
      { name: "Analytics & Search Console Setup", levelDescription: "Google Analytics 4 event tracking, Search Console indexing verification" },
      { name: "Landing Page Lead Generation", levelDescription: "High-intent landing pages structured for marketing campaigns" },
      { name: "Local SEO & Business Visibility", levelDescription: "Local business schema, location landing pages, search readiness" },
    ],
  },
];

export interface Service {
  id: string;
  number: string;
  title: string;
  category: "WordPress" | "Custom Development" | "Optimization" | "Maintenance";
  description: string;
  highlights: string[];
  isPrimary?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "wordpress-woocommerce",
    number: "01",
    title: "WordPress & WooCommerce Development",
    category: "WordPress",
    isPrimary: true,
    description:
      "Bespoke WordPress websites, Elementor landing pages, and full-featured WooCommerce stores engineered for reliability, intuitive client management, and real business results.",
    highlights: [
      "Custom WordPress & Elementor builds",
      "Full WooCommerce e-commerce setup",
      "Localized currencies & checkout flows",
      "Clean, mobile-first responsive design",
    ],
  },
  {
    id: "custom-web-dev",
    number: "02",
    title: "Custom Web Development",
    category: "Custom Development",
    description:
      "Modern frontend interfaces and responsive web applications built with semantic HTML5, CSS3, JavaScript, React, and Next.js when custom architecture is needed.",
    highlights: [
      "React & Next.js frontend projects",
      "Tailwind CSS custom design systems",
      "Interactive UI components & state flows",
      "RESTful API & cloud backend integration",
    ],
  },
  {
    id: "seo-performance-opt",
    number: "03",
    title: "SEO & Website Performance",
    category: "Optimization",
    isPrimary: true,
    description:
      "Technical SEO and speed optimization to accelerate load times, improve Core Web Vitals, and ensure your site is easy for search engines to crawl and index.",
    highlights: [
      "Core Web Vitals tuning (LCP, CLS, INP)",
      "Technical SEO & Schema.org markup",
      "Asset minification, caching & compression",
      "Search-engine-ready site structure",
    ],
  },
  {
    id: "security-maintenance-care",
    number: "04",
    title: "Website Security & Maintenance",
    category: "Maintenance",
    description:
      "Proactive website care, security hardening, plugin conflict resolution, and scheduled maintenance to ensure zero downtime and smooth, worry-free operations.",
    highlights: [
      "Security hardening & vulnerability audits",
      "PHP error & plugin conflict troubleshooting",
      "Safe core, theme & plugin update routines",
      "Reliable backup & migration procedures",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Understand Requirements",
    description: "Deep-dive into business objectives, target audience, brand style, functional needs, and project scope before writing code.",
    icon: "Target",
  },
  {
    step: "02",
    title: "Plan Design & Architecture",
    description: "Establish information hierarchy, wireframe responsive layouts, select optimal tech stack (WordPress, Next.js, or custom), and plan schemas.",
    icon: "LayoutGrid",
  },
  {
    step: "03",
    title: "Develop the Website",
    description: "Code clean, modular, accessible templates and components with attention to typography, micro-interactions, and visual harmony.",
    icon: "Code2",
  },
  {
    step: "04",
    title: "Optimize SEO, Speed & Responsiveness",
    description: "Fine-tune Core Web Vitals, implement semantic Schema markup, minify assets, verify cross-browser rendering, and test on actual devices.",
    icon: "Zap",
  },
  {
    step: "05",
    title: "Test, Refine & Prepare for Launch",
    description: "Conduct rigorous end-to-end testing across forms, checkout flows, links, and security headers, followed by seamless deployment and handoff.",
    icon: "Rocket",
  },
];

