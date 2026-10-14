"use client";

import { motion } from "motion/react";
import {
  Target,
  LayoutGrid,
  Code2,
  Zap,
  Rocket,
  Sparkles,
} from "lucide-react";
import { PROCESS_STEPS } from "@/data/portfolioData";

export default function Process() {
  const getStepIcon = (icon: string) => {
    switch (icon) {
      case "Target":
        return <Target className="w-4 h-4 text-cyan-400" />;
      case "LayoutGrid":
        return <LayoutGrid className="w-4 h-4 text-blue-400" />;
      case "Code2":
        return <Code2 className="w-4 h-4 text-indigo-400" />;
      case "Zap":
        return <Zap className="w-4 h-4 text-emerald-400" />;
      case "Rocket":
        return <Rocket className="w-4 h-4 text-cyan-300" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="process" className="relative py-16 sm:py-24 bg-[#07090e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-xs text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>5-Stage Methodology</span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            Disciplined Delivery Process
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            A clear roadmap designed to deliver high-performance websites with zero surprises.
          </p>
        </div>

        {/* Modern 5-Step Horizontal Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-4 rounded-2xl glass-card border border-white/5 flex flex-col justify-between group hover:border-cyan-500/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="font-mono text-sm font-bold text-cyan-400/50 group-hover:text-cyan-400 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-sm text-white mb-1.5">
                  {step.title}
                </h3>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  Phase 0{idx + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
