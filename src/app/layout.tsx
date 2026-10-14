import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#07090e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://kavinda-portfolio.vercel.app");

export const metadata: Metadata = {
  title: "Kavinda Madusanka | WordPress Developer — Fast, SEO-Friendly Websites",
  description:
    "WordPress Developer building fast, SEO-friendly websites. Specializing in custom WordPress, Elementor, WooCommerce stores, speed optimization, technical SEO, and custom frontend development.",
  keywords: [
    "WordPress Developer",
    "WordPress Website Development",
    "Elementor Developer",
    "WooCommerce Specialist",
    "Technical SEO",
    "Website Speed Optimization",
    "Custom Web Development",
    "Frontend Developer",
    "React Next.js Developer",
    "Sri Lanka Web Developer",
    "Kavinda Madusanka",
  ],
  authors: [{ name: "Kavinda Madusanka", url: "https://github.com/Hkmadusanka" }],
  creator: "Kavinda Madusanka",
  publisher: "Kavinda Madusanka",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/kavinda-profile.jpg",
    shortcut: "/kavinda-profile.jpg",
    apple: "/kavinda-profile.jpg",
  },
  openGraph: {
    title: "Kavinda Madusanka | WordPress Developer — Fast, SEO-Friendly Websites",
    description:
      "WordPress Developer specializing in high-performance WordPress & WooCommerce websites, Elementor landing pages, technical SEO, and custom web development.",
    url: siteUrl,
    siteName: "Kavinda Madusanka Portfolio",
    images: [
      {
        url: "/kavinda-profile.jpg",
        width: 1024,
        height: 1024,
        alt: "Kavinda Madusanka - WordPress Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavinda Madusanka | WordPress Developer — Fast, SEO-Friendly Websites",
    description:
      "WordPress Developer specializing in high-performance WordPress & WooCommerce websites, Elementor landing pages, technical SEO, and custom web development.",
    images: ["/kavinda-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kavinda Madusanka",
    jobTitle: "WordPress Developer & Custom Web Specialist",
    url: "https://github.com/Hkmadusanka",
    sameAs: [
      "https://github.com/Hkmadusanka",
      "https://linkedin.com/in/kavinda-madusanka-547258321",
    ],
    knowsAbout: [
      "WordPress Website Development",
      "Elementor Website Development",
      "WooCommerce E-Commerce",
      "Spectra Gutenberg Blocks",
      "Core Web Vitals Optimization",
      "Website Speed Optimization",
      "Technical SEO",
      "Website Security & Maintenance",
      "HTML, CSS, and JavaScript",
      "React and Next.js",
      "Digital Marketing & Website Growth",
    ],
    description:
      "WordPress Developer building fast, SEO-friendly websites, WooCommerce stores, and responsive custom web applications.",
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#07090e] text-[#f8fafc] font-sans antialiased selection:bg-[#00f2fe] selection:text-[#07090e]">
        {children}
      </body>
    </html>
  );
}
