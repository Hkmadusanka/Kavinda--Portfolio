"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Globe,
  Palette,
  FileCode2,
  ShoppingCart,
  Code2,
  Search,
  Zap,
  ShieldCheck,
  Wrench,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";
import { SERVICES } from "@/data/portfolioData";

export default function Services() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "WordPress", "Custom Development", "Optimization & Care"];

  const filteredServices =
    filter === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === filter);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "wordpress-dev":
        return <Globe className="w-4 h-4 text-cyan-400" />;
      case "elementor-dev":
        return <Palette className="w-4 h-4 text-blue-400" />;
      case "business-landing":
        return <FileCode2 className="w-4 h-4 text-indigo-400" />;
      case "ecommerce-dev":
        return <ShoppingCart className="w-4 h-4 text-emerald-400" />;
      case "custom-frontend":
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case "technical-seo":
        return <Search className="w-4 h-4 text-amber-400" />;
      case "speed-optimization":
        return <Zap className="w-4 h-4 text-yellow-400" />;
      case "security-bug-fixing":
        return <ShieldCheck className="w-4 h-4 text-rose-400" />;
      case "website-maintenance":
        return <Wrench className="w-4 h-4 text-teal-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#090d16]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-xs text-cyan-400 mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Services</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-4xl tracking-tight text-white"
            >
              What I Build &amp; Optimize.{" "}
              <span className="text-gradient-cyan block mt-1">
                Precision Services for Modern Businesses.
              </span>
            </motion.h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  filter === cat
                    ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/60 text-slate-300 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-5 rounded-2xl glass-card border flex flex-col justify-between group transition-all duration-300 hover:border-cyan-500/30 ${
                service.isPrimary
                  ? "border-cyan-500/25 bg-gradient-to-b from-slate-900/80 to-slate-950"
                  : "border-white/5 bg-slate-900/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {service.isPrimary && (
                      <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                        Primary Focus
                      </span>
                    )}
                    <span className="font-mono text-[11px] text-slate-500">
                      #{service.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-base text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  {service.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <Check className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[10px] uppercase font-mono text-slate-500">
                  {service.category}
                </span>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold text-xs group-hover:translate-x-1 transition-transform"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
