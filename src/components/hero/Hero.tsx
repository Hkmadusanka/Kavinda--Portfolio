"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import HeroScene from "@/components/3d/HeroScene";
import TypewriterEffect from "@/components/hero/TypewriterEffect";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-xs text-cyan-300 mb-6 shadow-sm shadow-cyan-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="font-medium tracking-wide">
                WordPress Developer &bull; Custom Web &bull; SEO
              </span>
            </motion.div>

            {/* Main Headline with Dynamic Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight leading-[1.18] text-white"
            >
              <h1>
                Building Better Websites.
                <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300 mt-2 sm:mt-3">
                  I craft <TypewriterEffect />
                </span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal"
            >
              WordPress-focused developer dedicated to building fast, clean, and conversion-optimized websites. Combining custom CMS setups with modern frontend engineering and Core Web Vitals performance.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-heading font-semibold text-sm bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-cyan-500/25"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-heading font-medium text-sm text-slate-200 glass-pill hover:bg-white/10 hover:text-white border border-white/10 transition-all"
              >
                <span>Get in Touch</span>
              </Link>

              {/* Verified Social Links */}
              <div className="flex items-center gap-2 ml-0 sm:ml-2 pt-2 sm:pt-0">
                <a
                  href="https://github.com/Hkmadusanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-pill text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kavinda-madusanka-464a97330/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-pill text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 pt-5 border-t border-white/5 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>WordPress &amp; WooCommerce</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Core Web Vitals Optimized</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Clean Semantic Code</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Portrait Composition + 3D Scene (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* 3D Canvas Background Behind Portrait */}
            <div className="absolute -inset-10 sm:-inset-14 z-0 flex items-center justify-center opacity-80 pointer-events-none">
              <HeroScene />
            </div>

            {/* Portrait Frame Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 w-full max-w-[340px] sm:max-w-[370px]"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-cyan-500/30 via-blue-600/20 to-transparent blur-xl opacity-70" />

              <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 p-3 shadow-2xl">
                {/* Genuine Photo Container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/kavinda-profile.jpg"
                    alt="Kavinda Madusanka - WordPress & Custom Web Developer"
                    fill
                    priority
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 370px"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle lighting vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e]/75 via-transparent to-transparent pointer-events-none" />

                  {/* Top Corner Floating Tech Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-[10px] font-medium text-cyan-300 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Real Identity &bull; Colombo, LK</span>
                  </div>

                  {/* Bottom Portrait Info Strip */}
                  <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-heading font-semibold text-white">
                        Kavinda Madusanka
                      </div>
                      <div className="text-[10px] text-cyan-400 font-medium">
                        WordPress Developer &bull; Custom Web
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                {/* Bottom Card Summary Badges */}
                <div className="mt-2.5 pt-2.5 border-t border-white/5 grid grid-cols-2 gap-2 text-center text-[10px]">
                  <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-heading font-bold text-white text-xs">4 Curated</div>
                    <div className="text-slate-400 text-[10px]">Featured Projects</div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="font-heading font-bold text-cyan-400 text-xs">Verified</div>
                    <div className="text-slate-400 text-[10px]">Open Source Repos</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-center text-slate-500"
        >
          <Link
            href="#about"
            className="p-2 rounded-full border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors animate-bounce"
            aria-label="Scroll to About Section"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
