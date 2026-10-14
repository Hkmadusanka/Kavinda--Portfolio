import Image from "next/image";
import Link from "next/link";
import { Sparkles, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#05070c] border-t border-white/5 py-12 sm:py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand Identity with Photo Logo */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-cyan-400/50 shadow-[0_0_10px_rgba(0,242,254,0.3)]">
                <Image
                  src="/kavinda-profile.jpg"
                  alt="Kavinda Madusanka"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="font-heading font-bold text-base text-white">
                Kavinda Madusanka
              </span>
            </div>
            <p className="text-slate-400 max-w-md">
              WordPress Developer | Custom Web Development | SEO &amp; Website Optimization
            </p>
            <p className="font-mono text-cyan-400 text-[11px]">
              hkmadusanka2002@gmail.com
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-5 text-slate-300">
            <Link href="#home" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="#about" className="hover:text-cyan-400 transition-colors">About &amp; Skills</Link>
            <Link href="#services" className="hover:text-cyan-400 transition-colors">Services</Link>
            <Link href="#projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
            <Link href="#cv" className="hover:text-cyan-400 transition-colors">CV</Link>
            <Link href="#process" className="hover:text-cyan-400 transition-colors">Process</Link>
            <Link href="#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>

          {/* Verified Social Channels & CV Action */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://drive.google.com/file/d/1hU8A4F06ssmBs3jV4XWsJMwZf0GX4Ji0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 font-semibold transition-all inline-flex items-center gap-1.5"
              aria-label="Download CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            <a
              href="https://github.com/Hkmadusanka"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/kavinda-madusanka-547258321"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-300 hover:text-blue-400 hover:border-blue-500/30 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {currentYear} Kavinda Madusanka. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Built with Next.js, TypeScript, Tailwind CSS &amp; Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
