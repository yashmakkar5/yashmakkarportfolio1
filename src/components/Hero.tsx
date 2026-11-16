"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, ShieldCheck, Compass } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian-950 pt-24 pb-16"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 bg-radial-crimson pointer-events-none opacity-40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-crimson-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Editorial Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Technical Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4 mb-8 text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-crimson-500 animate-ping" />
            <span className="text-zinc-300 tracking-wider">
              {profileData.status.subtext}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-zinc-500">
            <span>LOCATION: {profileData.location.toUpperCase()}</span>
            <span>SYSTEM: MULTI-AGENT_ARCHITECTURES</span>
            <span>SPEC: AI &amp; ML (2024–2028)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-emerald-400 font-medium">
              {profileData.status.isAvailableForFreelance
                ? "Available for Projects"
                : "Open for AI Research & Engineering Roles"}
            </span>
          </div>
        </div>

        {/* Hero Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Typography & Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Super Header / Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-crimson-400 uppercase mb-3">
              <span className="h-px w-6 bg-crimson-500" />
              <span>Architecting Next-Gen Intelligence</span>
            </div>

            {/* Oversized Name Typography */}
            <h1 className="font-editorial text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase leading-[0.9] mb-4">
              Yash
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-crimson-400">
                Makkar
              </span>
            </h1>

            {/* Professional Headline */}
            <h2 className="text-xl sm:text-2xl font-mono font-medium text-crimson-400 tracking-tight mb-5">
              {profileData.headline}
            </h2>

            {/* Tagline / Supporting Introduction */}
            <p className="text-base sm:text-lg text-zinc-300 font-sans font-light leading-relaxed max-w-2xl mb-8">
              &ldquo;{profileData.tagline}&rdquo;
            </p>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-xl mb-10 border-l-2 border-crimson-600/60 pl-4 py-1">
              Undergraduate engineer at CUIET, Chitkara University specializing in{" "}
              <span className="text-zinc-200 font-medium">Agentic AI</span>,{" "}
              <span className="text-zinc-200 font-medium">Multi-Agent Systems</span>, and{" "}
              <span className="text-zinc-200 font-medium">Full-Stack Distributed Applications</span>.
              Turning cognitive LLM workflows into reliable, scalable software.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-crimson-600 px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(229,9,20,0.4)] transition-all duration-300 hover:bg-crimson-500 hover:shadow-[0_0_40px_rgba(229,9,20,0.7)] active:scale-95"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-obsidian-900/80 px-6 py-3.5 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-crimson-600/60 hover:text-white hover:bg-obsidian-850 active:scale-95"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-4 w-4 text-crimson-400" />
              </Link>
            </div>

            {/* Micro Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-10 border-t border-zinc-850 max-w-md font-mono">
              <div>
                <span className="block text-2xl font-bold text-white">8.61</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">CUIET CGPA</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-crimson-400">Top 10</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">SAP HackFest</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">3+</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Cloud &amp; GenAI Certs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Cinematic Edge Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-crimson-600/30 via-red-950/20 to-transparent blur-xl opacity-75" />

              {/* Portrait Frame Card */}
              <div className="relative rounded-2xl border border-zinc-800 bg-obsidian-900/90 p-3 shadow-2xl backdrop-blur-xl">
                {/* Tech Frame Corner Accents */}
                <div className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-crimson-500" />
                <div className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-crimson-500" />
                <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-crimson-500" />
                <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-crimson-500" />

                {/* Inner Image Wrapper */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-obsidian-950">
                  {!imageError ? (
                    <Image
                      src={profileData.portrait}
                      alt={profileData.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-top filter grayscale contrast-125 transition-all duration-700 hover:grayscale-0 hover:scale-105"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Tasteful Placeholder if asset missing */
                    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-obsidian-900 to-obsidian-950">
                      <Terminal className="h-12 w-12 text-crimson-500 mb-3" />
                      <span className="font-editorial text-lg text-zinc-200 uppercase">
                        Yash Makkar
                      </span>
                      <span className="font-mono text-xs text-zinc-500 mt-1">
                        Portrait: public/images/yash-portrait.jpg
                      </span>
                    </div>
                  )}

                  {/* Cinematic Dramatic Red Shadow Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-80 pointer-events-none" />

                  {/* Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between rounded-lg border border-zinc-800/80 bg-obsidian-950/85 p-3 backdrop-blur-md">
                    <div>
                      <p className="text-xs font-mono font-semibold text-white">
                        Yash Makkar
                      </p>
                      <p className="text-[10px] font-mono text-zinc-400">
                        CUIET • AI &amp; ML Undergrad
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-crimson-950/60 border border-crimson-800/50 text-[10px] font-mono text-crimson-300">
                      <Sparkles className="h-3 w-3 text-crimson-400" />
                      <span>2024–2028</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Frame Details */}
                <div className="mt-3 flex items-center justify-between px-1 text-[10px] font-mono text-zinc-500">
                  <span>RAW_ASSET: yash-portrait.jpg</span>
                  <span className="text-crimson-400/80">AUTHENTICATED // STUDENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <Link
            href="#about"
            className="group flex flex-col items-center text-zinc-500 hover:text-crimson-400 transition"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest mb-2 group-hover:tracking-wider transition-all">
              Scroll To Discover
            </span>
            <div className="h-9 w-5 rounded-full border border-zinc-700 group-hover:border-crimson-500 p-1 flex justify-center transition">
              <div className="h-2 w-1 rounded-full bg-crimson-500 animate-bounce" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
