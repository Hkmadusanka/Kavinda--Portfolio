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

export const metadata: Metadata = {
  title: "Kavinda Madusanka | WordPress Developer & Custom Web Specialist",
  description:
    "Building Better Websites. Making Them Faster, Smarter & Search-Ready. WordPress Developer specializing in custom web development, WooCommerce, Core Web Vitals optimization, and technical SEO.",
  keywords: [
    "WordPress Developer",
    "WooCommerce Specialist",
    "Custom Web Development",
    "Technical SEO",
    "Core Web Vitals Optimization",
    "Website Speed Optimization",
    "Elementor Developer",
    "React Next.js Developer",
    "Sri Lanka Web Developer",
    "Kavinda Madusanka",
  ],
  authors: [{ name: "Kavinda Madusanka", url: "https://github.com/Hkmadusanka" }],
  creator: "Kavinda Madusanka",
  publisher: "Kavinda Madusanka",
  metadataBase: new URL("https://kavindamadhusanka.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/kavinda-profile.jpg",
    shortcut: "/kavinda-profile.jpg",
    apple: "/kavinda-profile.jpg",
  },
  openGraph: {
    title: "Kavinda Madusanka | WordPress Developer & Custom Web Specialist",
    description:
      "WordPress Developer focused on building high-performance websites, e-commerce stores, and custom web applications with speed and search optimization.",
    url: "https://kavindamadhusanka.dev",
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
    title: "Kavinda Madusanka | WordPress Developer & Custom Web Specialist",
    description:
      "WordPress Developer focused on building high-performance websites, e-commerce stores, and custom web applications with speed and search optimization.",
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
      "https://www.linkedin.com/in/kavinda-madusanka-464a97330/",
    ],
    knowsAbout: [
      "WordPress Website Development",
      "WooCommerce",
      "Elementor",
      "Spectra Gutenberg Blocks",
      "React",
      "Next.js",
      "Technical SEO",
      "Core Web Vitals Optimization",
      "Website Security & Maintenance",
    ],
    description:
      "WordPress-focused Web Developer specializing in custom frontend development, speed optimization, and technical SEO.",
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
