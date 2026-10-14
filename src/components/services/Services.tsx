"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Globe,
  Code2,
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";
import { SERVICES } from "@/data/portfolioData";

export default function Services() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "WordPress", "Custom Development", "Optimization", "Maintenance"];

  const filteredServices =
    filter === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === filter);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "wordpress-woocommerce":
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case "custom-web-dev":
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case "seo-performance-opt":
        return <Zap className="w-5 h-5 text-emerald-400" />;
      case "security-maintenance-care":
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#090d16]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-xs text-cyan-400 mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Services</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-4xl tracking-tight text-white"
            >
              What I Deliver.{" "}
              <span className="text-gradient-cyan block mt-1">
                Engineered for Performance, Search &amp; Reliability.
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

        {/* 4 Focused Consolidated Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`p-6 rounded-2xl glass-card border flex flex-col justify-between group transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 ${
                service.isPrimary
                  ? "border-cyan-500/25 bg-gradient-to-b from-slate-900/85 to-slate-950 shadow-lg shadow-cyan-950/20"
                  : "border-white/5 bg-slate-900/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {service.isPrimary && (
                      <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        Primary Specialty
                      </span>
                    )}
                    <span className="font-mono text-xs text-slate-500">
                      #{service.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading font-semibold text-lg text-white group-hover:text-cyan-300 transition-colors mb-2.5 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[10px] uppercase font-mono text-slate-400">
                  {service.category}
                </span>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-semibold text-xs group-hover:translate-x-1 transition-transform"
                >
                  <span>Discuss Need</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

