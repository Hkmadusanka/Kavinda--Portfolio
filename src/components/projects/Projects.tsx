"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { FEATURED_PROJECTS, Project } from "@/data/projects";

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    FEATURED_PROJECTS[0].id
  );
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const activeProject =
    FEATURED_PROJECTS.find((p) => p.id === selectedProjectId) || FEATURED_PROJECTS[0];

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-[#07090e] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

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
              <span>Strict 4-Project Showcase</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-3xl sm:text-4xl lg:text-4xl tracking-tight text-white"
            >
              Featured Projects.{" "}
              <span className="text-gradient-cyan block mt-1">
                Verified Code &amp; Genuine Architecture.
              </span>
            </motion.h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Click any project card below to inspect its verified technical architecture, features, and source repository.
          </p>
        </div>

        {/* Modern 4-Tab Project Switcher Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {FEATURED_PROJECTS.map((proj) => {
            const isCurrent = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setSelectedProjectId(proj.id)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 relative border ${
                  isCurrent
                    ? "bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                    : "bg-slate-900/40 border-white/5 hover:border-white/15 hover:bg-slate-900/70"
                }`}
              >
                {isCurrent && (
                  <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500" />
                )}
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`font-mono text-xs font-semibold ${
                      isCurrent ? "text-cyan-400" : "text-slate-500"
                    }`}
                  >
                    #{proj.number}
                  </span>
                  <span
                    className={`text-[9px] uppercase font-mono px-2 py-0.5 rounded-full ${
                      isCurrent
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    {proj.badge}
                  </span>
                </div>
                <div className="font-heading font-semibold text-sm text-white truncate">
                  {proj.name}
                </div>
                <div className="text-[11px] text-slate-400 truncate mt-0.5">
                  {proj.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Project Main Interactive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.article
            key={activeProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Visual Column (7 cols) */}
            <div className="lg:col-span-7 relative">
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
                {/* Browser Mockup Top Header */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 bg-slate-950/60 px-3 py-0.5 rounded-full border border-white/5 truncate max-w-[220px]">
                    {activeProject.demoUrl
                      ? "hkmadusanka.github.io/luxury-villa-srilanka"
                      : "github.com/Hkmadusanka/" + activeProject.id}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(activeProject)}
                    className="text-slate-400 hover:text-white p-1 rounded transition-colors"
                    aria-label="Enlarge Screenshot Preview"
                    title="Enlarge Screenshot"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Screenshot Frame */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden cursor-pointer"
                  onClick={() => setActiveModalProject(activeProject)}
                >
                  <Image
                    src={activeProject.image}
                    alt={`${activeProject.name} Screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-xs font-semibold text-cyan-300 inline-flex items-center gap-1.5 bg-slate-900/90 px-3 py-1.5 rounded-full border border-cyan-500/30 backdrop-blur-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to view full preview</span>
                    </span>
                  </div>
                </div>

                {/* Secondary Image Ribbon (for Velora Clothing) */}
                {activeProject.secondaryImage && (
                  <div className="px-4 py-2 bg-slate-900/90 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      WooCommerce Catalog Verified
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(activeProject)}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      Inspect Shop View &rarr;
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Details Column (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-semibold text-cyan-400">
                  PROJECT {activeProject.number}
                </span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  {activeProject.category}
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {activeProject.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-cyan-400 mt-1 mb-4">
                {activeProject.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                {activeProject.description}
              </p>

              {/* Verified Features */}
              <div className="space-y-2 mb-5 w-full">
                {activeProject.verifiedFeatures.slice(0, 4).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap items-center gap-1.5 mb-6">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-500/40 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {activeProject.demoUrl && (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-cyan-500/20"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 p-4 sm:p-6 lg:p-10 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-mono text-cyan-400">
                    PROJECT {activeModalProject.number} &bull; {activeModalProject.badge}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white mt-0.5">
                    {activeModalProject.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-slate-950 mb-4">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.name}
                  fill
                  sizes="900px"
                  className="object-cover object-top"
                />
              </div>

              {activeModalProject.secondaryImage && (
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Shop Catalog Preview
                  </h4>
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                    <Image
                      src={activeModalProject.secondaryImage}
                      alt={`${activeModalProject.name} Catalog`}
                      fill
                      sizes="900px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10 text-xs text-slate-400">
                <span>Verified codebase from GitHub @Hkmadusanka</span>
                <div className="flex items-center gap-3">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>View Repository</span>
                  </a>
                  {activeModalProject.demoUrl && (
                    <a
                      href={activeModalProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
