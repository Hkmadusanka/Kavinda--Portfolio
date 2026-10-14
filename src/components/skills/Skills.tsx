"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Code,
  Layers,
  Database,
  Search,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const displayedCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "wordpress":
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case "custom-dev":
        return <Code className="w-5 h-5 text-blue-400" />;
      case "databases":
        return <Database className="w-5 h-5 text-indigo-400" />;
      case "seo-performance":
        return <Search className="w-5 h-5 text-emerald-400" />;
      case "security-maintenance":
        return <ShieldAlert className="w-5 h-5 text-amber-400" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#090d16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-xs text-cyan-400 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white"
          >
            Skills &amp; Technology Stack.{" "}
            <span className="text-gradient-cyan block mt-1">
              Grounded in Real Development Work.
            </span>
          </motion.h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl">
            WordPress development backed by custom frontend engineering, database integration, technical SEO, and rigorous maintenance standards. No arbitrary percentage bars—just transparent competency.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                : "bg-slate-900/80 text-slate-300 hover:text-white border border-white/5"
            }`}
          >
            All Capabilities
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/80 text-slate-300 hover:text-white border border-white/5"
              }`}
            >
              <span>{cat.title}</span>
              {cat.isPrimary && (
                <span className="text-[10px] bg-cyan-400/20 text-cyan-300 px-1.5 py-0.2 rounded-full font-mono">
                  ★ Core
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl glass-card border flex flex-col justify-between ${
                category.isPrimary
                  ? "border-cyan-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950"
                  : "border-white/5 bg-slate-900/60"
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {getCategoryIcon(category.id)}
                  </div>
                  {category.isPrimary && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                      Primary Focus
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">
                          {skill.name}
                        </span>
                        {skill.tag && (
                          <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-md font-mono">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                        {skill.levelDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified in Work</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
