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
    id: "wordpress",
    title: "WordPress & CMS Architecture",
    description: "My core specialization: building bespoke, conversion-optimized, responsive websites on the WordPress ecosystem.",
    isPrimary: true,
    skills: [
      { name: "WordPress Core Development", levelDescription: "Custom themes, child themes, block themes, hooks & filters", tag: "Primary" },
      { name: "WooCommerce E-Commerce", levelDescription: "Store setup, product catalogs, cart optimization, local gateways (LKR/COD)", tag: "Primary" },
      { name: "Elementor & Visual Page Builders", levelDescription: "Pixel-perfect visual design, custom widgets, dynamic templates" },
      { name: "Spectra & Gutenberg Blocks", levelDescription: "Native block editor development, lightweight block assemblies" },
      { name: "Business Websites & Landing Pages", levelDescription: "High-converting corporate portals, portfolio sites, lead capture funnels" },
      { name: "Responsive & User-Friendly Design", levelDescription: "Cross-device responsiveness, fluid typography, mobile-first design" },
    ],
  },
  {
    id: "custom-dev",
    title: "Custom Frontend Development",
    description: "Versatile engineering skills allowing me to build reactive web apps and bridge WordPress with modern JavaScript tools.",
    skills: [
      { name: "HTML5, Modern CSS & JavaScript", levelDescription: "Semantic structure, modern ES6+, flexbox, grid, and DOM manipulation" },
      { name: "React & Next.js", levelDescription: "Component-driven architecture, App Router, SSR, dynamic routing" },
      { name: "Tailwind CSS", levelDescription: "Utility-first design systems, custom configuration, responsive styling" },
      { name: "Zustand & State Management", levelDescription: "Predictable client-side state, undo/redo flows, synchronized stores" },
      { name: "Client-side PDF & Canvas Generation", levelDescription: "Vector rendering, html2canvas, and jsPDF document export" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Cloud Backends",
    description: "Connecting frontend experiences with reliable database storage, authentication, and real-time streams.",
    skills: [
      { name: "Supabase", levelDescription: "PostgreSQL cloud backend, real-time subscriptions, auth, RESTful APIs" },
      { name: "MongoDB", levelDescription: "Document-oriented NoSQL database modeling, collections, CRUD operations" },
      { name: "REST APIs & JSON Integration", levelDescription: "Third-party endpoint consumption, webhook handling, data synchronization" },
      { name: "MySQL / MariaDB", levelDescription: "WordPress relational schema, queries, database optimization and backups" },
    ],
  },
  {
    id: "seo-performance",
    title: "SEO & Website Optimization",
    description: "Ensuring every website ranks high on search engines and delivers lightning-fast load times for visitors.",
    isPrimary: true,
    skills: [
      { name: "Technical SEO", levelDescription: "Crawlability, sitemaps, robots.txt, canonicalization, schema markup" },
      { name: "On-Page SEO", levelDescription: "Semantic heading hierarchies, meta optimization, internal linking strategy" },
      { name: "Website Speed Optimization", levelDescription: "Asset minification, caching layers, server response time tuning" },
      { name: "Core Web Vitals Optimization", levelDescription: "Minimizing LCP, zeroing CLS, and optimizing INP (Interaction to Next Paint)" },
      { name: "Image & Media Compression", levelDescription: "Next-gen WebP/AVIF delivery, responsive srcsets, lazy loading" },
    ],
  },
  {
    id: "security-maintenance",
    title: "Website Security & Maintenance",
    description: "Keeping websites fortified, monitored, and running smoothly without downtime or technical debt.",
    skills: [
      { name: "Website Security Improvements", levelDescription: "Malware prevention, login hardening, SSL enforcement, vulnerability patching" },
      { name: "Bug Fixing & Troubleshooting", levelDescription: "Resolving PHP fatal errors, plugin conflicts, JavaScript breakages" },
      { name: "Routine Maintenance & Updates", levelDescription: "Safe core/plugin/theme update workflows with staging backups" },
      { name: "Migration & Hosting Configuration", levelDescription: "Domain pointing, DNS management, server migrations without data loss" },
    ],
  },
];

export interface Service {
  id: string;
  number: string;
  title: string;
  category: "WordPress" | "Custom Development" | "Optimization & Care";
  description: string;
  highlights: string[];
  isPrimary?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "wordpress-dev",
    number: "01",
    title: "WordPress Website Development",
    category: "WordPress",
    isPrimary: true,
    description:
      "Bespoke WordPress websites built from the ground up to reflect your brand identity, communicate clearly with your audience, and scale smoothly as your business expands.",
    highlights: ["Custom Theme Integration", "Block-First Architecture", "Clean Code Standards", "Scalable Setup"],
  },
  {
    id: "elementor-dev",
    number: "02",
    title: "Elementor Website Development",
    category: "WordPress",
    isPrimary: true,
    description:
      "Dynamic, design-forward websites crafted with Elementor and visual builders, giving clients total visual control with clean responsive styling and no layout bloat.",
    highlights: ["Custom Elementor Templates", "Mobile Responsive Tuning", "Custom CSS Tweaks", "User-Friendly Handoff"],
  },
  {
    id: "business-landing",
    number: "03",
    title: "Business Websites & Landing Pages",
    category: "WordPress",
    description:
      "High-impact corporate web pages designed to turn visitors into leads and customers, built with intuitive navigation and clear calls-to-action.",
    highlights: ["Lead Capture Forms", "Conversion-Focused Hierarchy", "Brand Consistency", "Fast Loading Speed"],
  },
  {
    id: "ecommerce-dev",
    number: "04",
    title: "E-Commerce Website Development",
    category: "WordPress",
    isPrimary: true,
    description:
      "Full-featured WooCommerce online shops with intuitive product catalogs, seamless cart flows, localized currency configuration, and secure checkout methods.",
    highlights: ["WooCommerce Setup", "Payment Gateway Integration", "Inventory Management", "Mobile Cart Optimization"],
  },
  {
    id: "custom-frontend",
    number: "05",
    title: "Custom Frontend Development",
    category: "Custom Development",
    description:
      "Modern web experiences built with HTML5, CSS3, JavaScript, React, and Next.js for interactive applications requiring reactive interfaces and custom workflows.",
    highlights: ["React & Next.js", "Tailwind CSS Systems", "Interactive UI Components", "API Integrations"],
  },
  {
    id: "technical-seo",
    number: "06",
    title: "Technical SEO",
    category: "Optimization & Care",
    description:
      "Comprehensive search engine foundation ensuring search bots easily discover, crawl, and index your content with structured data and clean code.",
    highlights: ["Schema.org Structured Data", "XML Sitemaps & Robots.txt", "Canonical URLs", "Heading Structure"],
  },
  {
    id: "speed-optimization",
    number: "07",
    title: "Speed Optimization & Core Web Vitals",
    category: "Optimization & Care",
    isPrimary: true,
    description:
      "Performance tuning designed to cut bounce rates and boost Google rankings by optimizing Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and INP.",
    highlights: ["Asset Compression & Caching", "Critical CSS Inlining", "Database Optimization", "Server Response Tuning"],
  },
  {
    id: "security-bug-fixing",
    number: "08",
    title: "Website Security & Bug Fixing",
    category: "Optimization & Care",
    description:
      "Rapid diagnosing and resolution of broken layouts, plugin conflicts, PHP errors, and hardening of website defenses against spam and unauthorized intrusion.",
    highlights: ["Conflict Resolution", "PHP / JS Debugging", "Brute-Force Protection", "SSL & Header Hardening"],
  },
  {
    id: "website-maintenance",
    number: "09",
    title: "Website Maintenance & Ongoing Support",
    category: "Optimization & Care",
    description:
      "Proactive scheduled updates, regular database backups, uptime monitoring, and technical maintenance so your website runs without interruption.",
    highlights: ["Scheduled Core Updates", "Automated Cloud Backups", "Uptime & Health Checks", "Continuous Reliability"],
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
