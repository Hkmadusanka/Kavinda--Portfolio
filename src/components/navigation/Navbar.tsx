"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About & Skills", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "CV", href: "#cv" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#07090e]/85 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/40"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Real Profile Image */}
            <Link
              href="#home"
              className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_12px_rgba(0,242,254,0.3)] group-hover:border-cyan-300 group-hover:scale-105 transition-all">
                <Image
                  src="/kavinda-profile.jpg"
                  alt="Kavinda Madusanka"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  Kavinda Madusanka
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                  WordPress Developer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                      isActive
                        ? "text-cyan-400 font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Action CTA Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://drive.google.com/file/d/1hU8A4F06ssmBs3jV4XWsJMwZf0GX4Ji0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full glass-pill border border-white/10 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>CV</span>
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 p-4 md:hidden"
          >
            <div className="bg-[#0b0f19]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Navigation
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  Available for Hire
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400 transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-slate-500">&rarr;</span>
                  </Link>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://drive.google.com/file/d/1hU8A4F06ssmBs3jV4XWsJMwZf0GX4Ji0/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl border border-cyan-500/30 text-cyan-300 font-semibold text-center text-xs flex items-center justify-center gap-2 hover:bg-cyan-500/10 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>

                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-center text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
