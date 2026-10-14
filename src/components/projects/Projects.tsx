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
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-[#07090e] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

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
              <span>Selected Projects</span>
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
                Real Code &amp; Practical Architecture.
              </span>
            </motion.h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Four focused projects demonstrating WordPress &amp; WooCommerce development, custom frontend engineering, Supabase backend integration, and responsive web design.
          </p>
        </div>

        {/* 4 Projects in a Balanced 2x2 Grid with Consistent Card Sizes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl glass-card border border-white/10 hover:border-cyan-500/35 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between shadow-xl bg-gradient-to-b from-slate-900/80 to-slate-950"
            >
              <div>
                {/* Screenshot Frame with Browser Bar */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 shadow-lg mb-6">
                  {/* Browser Bar */}
                  <div className="px-3.5 py-2 bg-slate-900/95 border-b border-white/5 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <div className="font-mono text-slate-400 bg-slate-950/70 px-2.5 py-0.5 rounded-full border border-white/5 text-[10px] truncate max-w-[200px]">
                      {project.demoUrl ? "live demo ready" : project.id}
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
                      aria-label={`Enlarge ${project.name} preview`}
                      title="Enlarge preview"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Screenshot Container with Subtle Zoom */}
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden cursor-pointer"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-[11px] font-semibold text-cyan-300 inline-flex items-center gap-1.5 bg-slate-900/90 px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md">
                        <Maximize2 className="w-3 h-3" />
                        <span>Enlarge preview</span>
                      </span>
                    </div>
                  </div>

                  {/* Secondary Image Ribbon (for Velora Clothing WooCommerce Shop) */}
                  {project.secondaryImage && (
                    <div className="px-3.5 py-1.5 bg-slate-900/90 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5 text-cyan-400 font-medium text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        WooCommerce Catalog Verified
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="text-cyan-400 hover:text-cyan-300 font-medium text-[10px]"
                      >
                        Inspect Shop View &rarr;
                      </button>
                    </div>
                  )}
                </div>

                {/* Meta Row: Number, Category, Badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-cyan-400">
                      #{project.number}
                    </span>
                    <span className="text-slate-600">&bull;</span>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <span
                    className={`text-[9px] uppercase font-mono px-2 py-0.5 rounded-full ${
                      project.isPrimarySpecialty
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "bg-white/5 text-slate-300 border border-white/10"
                    }`}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs font-medium text-cyan-400/90 mt-0.5 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Verified Features */}
                <div className="space-y-1.5 mb-5">
                  {project.verifiedFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Verified Technologies Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-500/30 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-cyan-500/20 focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500">
                    Source on GitHub
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
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
                <span>Source code available on GitHub @Hkmadusanka</span>
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

