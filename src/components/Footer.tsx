"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { profileData } from "@/data/profile";
import { CREDENTIALS_REPOSITORY_URL } from "@/data/certifications";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-850 bg-obsidian-950 py-16 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-zinc-850">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-crimson-600 text-white font-mono text-xs font-bold shadow-[0_0_15px_rgba(229,9,20,0.5)]">
                YM
              </span>
              <span className="font-editorial text-base font-bold text-white tracking-wider">
                YASH MAKKAR
              </span>
            </div>
            <p className="text-zinc-400 max-w-md font-sans text-xs leading-relaxed">
              AI/ML Engineer &amp; Full-Stack Developer. Undergraduate student at CUIET, Chitkara University (2024–2028). Engineering practical autonomous agent systems and resilient full-stack platforms.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/yashmakkar5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/yashmakkar5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profileData.contactEmail}`}
                className="text-zinc-400 hover:text-white transition"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Architecture Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
              Core Systems
            </span>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="#projects" className="hover:text-crimson-400 transition">
                  Placey MACOS (Multi-Agent)
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-crimson-400 transition">
                  GymFlow (Multi-Tenant)
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-crimson-400 transition">
                  Technical Repertoire
                </Link>
              </li>
              <li>
                <Link href="#certifications" className="hover:text-crimson-400 transition">
                  Azure &amp; IIT Roorkee Certs
                </Link>
              </li>
            </ul>
          </div>

          {/* Back to top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between h-full space-y-4">
            <span className="block text-[10px] uppercase tracking-widest text-zinc-500">
              Navigation
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-obsidian-900 px-4 py-2 text-xs text-zinc-300 hover:border-crimson-600 hover:text-white transition"
            >
              <span>Return to Top</span>
              <ArrowUp className="h-3.5 w-3.5 text-crimson-400" />
            </button>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Yash Makkar. Built with Next.js 14, TypeScript &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <span>SOURCE_TRUTH: github.com/yashmakkar5</span>
            <span>CINEMATIC_EDITORIAL_V1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
