"use client";

import React from "react";
import { Cpu, Terminal, Compass, Layers, Bot, Database, Sparkles, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";

const pillars = [
  {
    icon: Bot,
    title: "Agentic AI & Multi-Agent Systems",
    desc: "Architecting autonomous agent networks, cyclic graph orchestration (LangGraph), model routers, and structured output validators to automate high-complexity domain workflows."
  },
  {
    icon: Layers,
    title: "Full-Stack Software Engineering",
    desc: "Building resilient web applications with Next.js, Node.js, Express, and TypeScript. Designing scalable REST APIs, secure authentication systems, and multi-tenant architectures."
  },
  {
    icon: Database,
    title: "Data Systems & Infrastructure",
    desc: "Designing relational PostgreSQL schemas, optimizing MongoDB aggregation pipelines for business analytics, and leveraging cloud primitives on Microsoft Azure."
  },
  {
    icon: Cpu,
    title: "CS Fundamentals & System Design",
    desc: "Rigorous command of Data Structures & Algorithms, object-oriented paradigms in C++ & Java, time/space complexity optimization, and decoupled software patterns."
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-obsidian-950 border-t border-zinc-900 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-crimson-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 uppercase tracking-widest mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
              <span>01 // Technical Foundation</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Engineering with <span className="text-crimson-500">Intent</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-zinc-500 max-w-xs">
            B.E. CSE (AI &amp; ML) Undergrad at CUIET, Chitkara University (2024–2028).
          </p>
        </div>

        {/* Two-Column Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-editorial text-2xl sm:text-3xl text-zinc-100 font-bold leading-snug">
              Moving beyond ephemeral AI demos to build robust, practical systems that solve actual problems.
            </h3>

            {profileData.bio.map((paragraph, idx) => (
              <p key={idx} className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-obsidian-900/60 px-3.5 py-2">
                <CheckCircle2 className="h-4 w-4 text-crimson-500" />
                <span>Deterministic Tool Execution</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-obsidian-900/60 px-3.5 py-2">
                <CheckCircle2 className="h-4 w-4 text-crimson-500" />
                <span>Multi-Tenant Data Boundaries</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-obsidian-900/60 px-3.5 py-2">
                <CheckCircle2 className="h-4 w-4 text-crimson-500" />
                <span>Clean Architecture &amp; OOP</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-zinc-800 bg-obsidian-900/60 p-6 backdrop-blur-xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-6">
                <span className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider">
                  Academic &amp; Research Identity
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-crimson-950 border border-crimson-800 text-crimson-300">
                  Verified Factual
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between py-2 border-b border-zinc-850">
                  <span className="text-zinc-500">DEGREE PROGRAM</span>
                  <span className="text-zinc-200 text-right">B.E. in CSE (AI &amp; ML)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-850">
                  <span className="text-zinc-500">INSTITUTION</span>
                  <span className="text-zinc-200 text-right">CUIET, Chitkara University</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-850">
                  <span className="text-zinc-500">ACADEMIC STANDING</span>
                  <span className="text-crimson-400 font-bold text-right">8.61 / 10.0 CGPA</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-850">
                  <span className="text-zinc-500">GRADUATION HORIZON</span>
                  <span className="text-zinc-200 text-right">2024 — 2028</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-850">
                  <span className="text-zinc-500">LEADERSHIP POST</span>
                  <span className="text-zinc-200 text-right">Vice Chairperson, SCRS CUIET</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-500">SPECIALIZATION FOCUS</span>
                  <span className="text-zinc-200 text-right">Agentic AI &amp; Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative rounded-2xl border border-zinc-800/80 bg-obsidian-900/40 p-6 transition-all duration-300 hover:border-crimson-600/50 hover:bg-obsidian-900/80 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-crimson-950/60 border border-crimson-900/40 text-crimson-400 group-hover:bg-crimson-600 group-hover:text-white transition-all">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-[10px] font-mono text-zinc-500 mb-1">PILLAR // 0{i + 1}</div>
                <h4 className="font-editorial text-base font-bold text-zinc-100 mb-2 group-hover:text-white transition">
                  {pillar.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
