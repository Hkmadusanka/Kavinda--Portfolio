"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Sparkles,
  Check,
  Copy,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const contactEmail = "hkmadusanka2002@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#07090e] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-cyan-500/20 text-xs text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect Directly</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-4xl tracking-tight text-white">
            Let&apos;s Build Something{" "}
            <span className="text-gradient-cyan block mt-1">
              Fast, Scalable &amp; Exceptional.
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            I am available for developer roles and custom WordPress / web development projects. Reach out directly via email, GitHub, or LinkedIn.
          </p>
        </div>

        {/* 3 Focused Direct Contact Cards (Email, GitHub, LinkedIn) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl glass-card border border-cyan-500/30 flex flex-col justify-between group hover:border-cyan-400/60 transition-all bg-gradient-to-b from-slate-900/90 to-slate-950"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  Primary Contact
                </span>
              </div>

              <h3 className="font-heading font-semibold text-base text-white mb-1">
                Direct Email
              </h3>
              <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                Send inquiries, job opportunities, or project briefs straight to my inbox.
              </p>

              <a
                href={`mailto:${contactEmail}`}
                className="font-mono text-xs text-cyan-300 hover:text-white transition-colors block truncate font-medium mb-3"
              >
                {contactEmail}
              </a>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-white/5">
              <a
                href={`mailto:${contactEmail}`}
                className="flex-1 py-2 text-center rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors"
              >
                Send Email
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
                aria-label="Copy email address"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="p-6 rounded-2xl glass-card border border-white/10 flex flex-col justify-between group hover:border-cyan-500/30 transition-all bg-slate-900/60"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 text-cyan-400 border border-white/10 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                  Code Repos
                </span>
              </div>

              <h3 className="font-heading font-semibold text-base text-white mb-1">
                GitHub Profile
              </h3>
              <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                Explore source code, repositories, commit history, and technical architectures.
              </p>

              <div className="font-mono text-xs text-slate-300 block truncate font-medium mb-3">
                @Hkmadusanka
              </div>
            </div>

            <div className="pt-3 border-t border-white/5">
              <a
                href="https://github.com/Hkmadusanka"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 flex items-center justify-center gap-1.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 hover:border-cyan-500/40 transition-colors"
              >
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="p-6 rounded-2xl glass-card border border-white/10 flex flex-col justify-between group hover:border-blue-500/30 transition-all bg-slate-900/60"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 text-blue-400 border border-white/10 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                  Network
                </span>
              </div>

              <h3 className="font-heading font-semibold text-base text-white mb-1">
                LinkedIn Profile
              </h3>
              <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
                Connect professionally, review career background, and discuss developer opportunities.
              </p>

              <div className="font-mono text-xs text-slate-300 block truncate font-medium mb-3">
                Kavinda Madusanka
              </div>
            </div>

            <div className="pt-3 border-t border-white/5">
              <a
                href="https://www.linkedin.com/in/kavinda-madusanka-464a97330/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 flex items-center justify-center gap-1.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:bg-white/10 hover:border-blue-500/40 transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
