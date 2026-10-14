"use client";

import { motion } from "motion/react";
import {
  FileText,
  Download,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";

const CV_VIEW_URL =
  "https://drive.google.com/file/d/1hU8A4F06ssmBs3jV4XWsJMwZf0GX4Ji0/view?usp=sharing";
const CV_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1hU8A4F06ssmBs3jV4XWsJMwZf0GX4Ji0";

export default function CVSection() {
  return (
    <section id="cv" className="relative py-20 sm:py-28 bg-[#090d16]/50 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Download Actions (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-xs text-cyan-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-4xl tracking-tight text-white">
              Professional Resume.{" "}
              <span className="text-gradient-cyan block mt-1">
                Technical Skillset &amp; Development Work.
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              Download or preview my complete curriculum vitae covering WordPress development, custom frontend engineering with React and Next.js, speed optimization, and web project delivery.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={CV_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-500/25"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href={CV_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-heading font-medium text-xs sm:text-sm text-slate-200 glass-pill hover:bg-white/10 hover:text-white border border-white/10 transition-all"
              >
                <span>View CV Online</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>

            {/* Quick Summary Highlights */}
            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-3 text-xs text-slate-300 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>WordPress Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>React &amp; Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>SEO &amp; Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Remote &amp; Contract</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Interactive Document Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl p-6 sm:p-7 glass-card border border-white/10 shadow-2xl bg-gradient-to-b from-slate-900/90 to-slate-950">
              {/* Document Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm text-white">
                      Curriculum Vitae — Kavinda Madusanka
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">
                      PDF Document &bull; Resume
                    </p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Ready to Download
                </span>
              </div>

              {/* Document Snapshot Content */}
              <div className="space-y-4 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Primary Role</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    WordPress Developer | Custom Web Development | Technical SEO &amp; Performance Optimization
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Technical Stack</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    WordPress, WooCommerce, Elementor, Spectra, HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS, Supabase, MongoDB, Core Web Vitals
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Availability &amp; Inquiries</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    Available for full-time developer roles, contracts, and custom WordPress / frontend freelance engagements.
                  </p>
                </div>
              </div>

              {/* Action Banner */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  hkmadusanka2002@gmail.com
                </span>
                <a
                  href={CV_VIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5"
                >
                  <span>View Full PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
