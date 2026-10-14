"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Code2,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Database,
  Search,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function About() {
  const [activeSkillTab, setActiveSkillTab] = useState(SKILL_CATEGORIES[0].id);

  const activeCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeSkillTab) || SKILL_CATEGORIES[0];

  const getTabIcon = (id: string) => {
    switch (id) {
      case "wordpress":
        return <Layers className="w-4 h-4 text-cyan-400" />;
      case "custom-dev":
        return <Code2 className="w-4 h-4 text-blue-400" />;
      case "databases":
        return <Database className="w-4 h-4 text-indigo-400" />;
      case "seo-performance":
        return <Search className="w-4 h-4 text-emerald-400" />;
      case "security-maintenance":
        return <ShieldCheck className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden bg-[#07090e]/60">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-xs text-cyan-400 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-4xl tracking-tight text-white"
          >
            WordPress Core Foundation.{" "}
            <span className="text-gradient-cyan block mt-1">
              Custom Engineering &amp; Speed Optimization.
            </span>
          </motion.h2>
        </div>

        {/* Compact Two-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Workspace Visual & Story (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl glass-card border border-white/10"
          >
            {/* Distinct Generated Developer Workspace Image (NOT repeating portrait) */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-950 border border-white/10 mb-5 shadow-lg group">
              <Image
                src="/about-workspace.jpg"
                alt="Modern Developer Workspace & Development Rig"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Engineering Environment
                </span>
                <span className="text-cyan-400 font-mono text-[10px] bg-slate-900/80 px-2 py-0.5 rounded border border-white/10">
                  Code &bull; UI &bull; CMS
                </span>
              </div>
            </div>

            {/* Concise Editorial Summary */}
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                My primary focus is <strong className="text-white">WordPress development</strong>—engineering bespoke business sites, landing pages, and WooCommerce stores with localized checkout and clean responsive layouts.
              </p>
              <p>
                To avoid plugin bloat and slow load times, I bring <strong className="text-white">custom frontend capabilities</strong> (React, Next.js, Tailwind CSS) and strict <strong className="text-cyan-400">Core Web Vitals</strong> optimization to every project I build.
              </p>
            </div>

            {/* Quick Badges Strip */}
            <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>Sri Lanka &bull; Remote</span>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Speed Focused</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Skills Bento Panel (7 cols) */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-7 rounded-2xl glass-card border border-white/10"
          >
            <div>
              {/* Category Tab Switcher */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-5">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Select Competency Group
                </span>
                <span className="text-[11px] font-mono text-cyan-400">
                  Interactive Skills View
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {SKILL_CATEGORIES.map((cat) => {
                  const isActive = activeSkillTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveSkillTab(cat.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                        isActive
                          ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20 scale-[1.02]"
                          : "bg-slate-900/80 text-slate-300 hover:text-white border border-white/5"
                      }`}
                    >
                      {getTabIcon(cat.id)}
                      <span>{cat.title}</span>
                      {cat.isPrimary && (
                        <span
                          className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                            isActive
                              ? "bg-slate-950/20 text-slate-950"
                              : "bg-cyan-500/20 text-cyan-300"
                          }`}
                        >
                          Core
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Category Description */}
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5 mb-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeCategory.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCategory.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/25 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-white">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="text-[10px] font-mono bg-cyan-500/15 text-cyan-300 px-1.5 py-0.2 rounded border border-cyan-500/30">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {skill.levelDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Verification Note */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Verified across active projects &amp; client repositories
              </span>
              <span className="font-mono text-[10px] text-slate-500">
                No Fake Progress Bars
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
