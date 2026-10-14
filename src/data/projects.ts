export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  category: "WordPress & E-Commerce" | "Custom Web App" | "POS & Cloud System" | "Hospitality Web Platform";
  description: string;
  verifiedFeatures: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
  secondaryImage?: string;
  badge: string;
  isPrimarySpecialty?: boolean;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "velora-clothing",
    number: "01",
    name: "Velora Clothing",
    tagline: "High-End E-Commerce Fashion Store in Sri Lanka",
    category: "WordPress & E-Commerce",
    isPrimarySpecialty: true,
    badge: "WordPress Flagship",
    description:
      "A modern, high-end, minimalist e-commerce store engineered for contemporary fashion in Sri Lanka. Architected on WordPress with WooCommerce, styled with Spectra Gutenberg Blocks and Astra theme, localized with Sri Lankan Rupee (LKR) currency and Cash on Delivery (COD) payment flow.",
    verifiedFeatures: [
      "Custom WooCommerce store architecture & responsive product catalog",
      "Spectra Gutenberg modular block layouts with Astra theme integration",
      "Localized Sri Lankan Rupee (LKR) pricing & Cash on Delivery (COD) workflow",
      "Targeted August promotional campaign banner with seasonal discount sections",
      "Mobile-optimized shopping cart, quick checkout, and fast page response",
    ],
    technologies: [
      "WordPress",
      "WooCommerce",
      "Spectra Blocks",
      "Gutenberg",
      "Astra Theme",
      "LocalWP",
      "PHP/CSS",
    ],
    githubUrl: "https://github.com/Hkmadusanka/Velora-Clothing--Wordpress",
    image: "/projects/velora-home.png",
    secondaryImage: "/projects/velora-shop.png",
  },
  {
    id: "cv-builder",
    number: "02",
    name: "CV Builder",
    tagline: "Interactive Resume Builder with Live A4 Preview & PDF Export",
    category: "Custom Web App",
    badge: "React 19 Application",
    description:
      "A client-side resume builder web application built with React 19, Vite, and Tailwind CSS. Enables job seekers to draft, customize, and export professional resumes in real time with interactive form validation, 3 tailored layout templates, undo/redo history, and client-side vector PDF generation.",
    verifiedFeatures: [
      "Dynamic multi-step form for personal details, work history, education & skills",
      "3 professionally crafted resume templates with instant layout switching",
      "Real-time synchronized A4 page canvas with zoom & responsive preview",
      "High-fidelity client-side PDF export powered by jsPDF & html2canvas-pro",
      "Robust state management with Zustand featuring undo/redo history (Ctrl+Z / Ctrl+Y)",
    ],
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Zustand",
      "jsPDF",
      "html2canvas-pro",
      "Lucide Icons",
    ],
    githubUrl: "https://github.com/Hkmadusanka/cv-builder",
    image: "/projects/cv-builder-preview.svg",
  },
  {
    id: "smartpos-pro",
    number: "03",
    name: "SmartPOS Pro",
    tagline: "Retail Point of Sale & Cloud Inventory Management System",
    category: "POS & Cloud System",
    badge: "Supabase + React",
    description:
      "A modern, responsive Point of Sale (POS) and inventory management dashboard designed for retail operations. Combines an agile billing terminal for rapid barcode/item checkout with real-time revenue analytics charts and automated low-stock inventory tracking backed by Supabase cloud database.",
    verifiedFeatures: [
      "Fast-paced billing terminal interface for rapid item selection & invoice creation",
      "Real-time analytics dashboard with revenue visualization and operational metrics",
      "Comprehensive inventory control system with real-time stock levels & low-stock alerts",
      "Secure cloud database integration and item syncing via Supabase JS client",
      "Minimalist dark-mode dashboard UI designed for keyboard & touch-friendly POS use",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Supabase",
      "Lucide React",
      "JavaScript",
    ],
    githubUrl: "https://github.com/Hkmadusanka/SmartPOS-Pro",
    image: "/projects/smartpos-preview.svg",
  },
  {
    id: "luxury-villa-srilanka",
    number: "04",
    name: "Luxury Villa Sri Lanka",
    tagline: "Serene Bliss Villa — High-End Hospitality Web Platform",
    category: "Hospitality Web Platform",
    badge: "Live Deployment",
    description:
      "A luxury beachfront hospitality platform created for Serene Bliss Villa in Sri Lanka. Crafted with semantic HTML5, modern Tailwind CSS, and vanilla JavaScript, delivering a clean dark-mode aesthetic with warm gold accents, responsive room galleries, and an intuitive guest booking interface.",
    verifiedFeatures: [
      "Dark-mode luxury aesthetic with gold accents and cinematic architectural imagery",
      "Responsive navigation with mobile drawer and quick reservation CTA",
      "Curated multi-tier villa suites presentation with amenities showcase",
      "Interactive booking inquiry flow with real-time guest selector & date fields",
      "Verified production deployment on GitHub Pages with zero external dependencies",
    ],
    technologies: [
      "HTML5",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
      "GitHub Pages",
    ],
    githubUrl: "https://github.com/Hkmadusanka/luxury-villa-srilanka",
    demoUrl: "https://hkmadusanka.github.io/luxury-villa-srilanka/",
    image: "/projects/luxury-villa.jpg",
  },
];
