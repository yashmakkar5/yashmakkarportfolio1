"use client";

import React from "react";
import { Users, Megaphone, CheckCircle2, Award, Calendar, Sparkles } from "lucide-react";
import { leadershipData } from "@/data/leadership";

export default function Experience() {
  return (
    <section id="leadership" className="relative py-28 bg-obsidian-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 uppercase tracking-widest mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
              <span>04 // Community &amp; Stewardship</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Leadership &amp; <span className="text-crimson-500">Initiative</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-zinc-500 max-w-sm">
            Institutional leadership, chapter operations, and promotional strategy at CUIET.
          </p>
        </div>

        {/* Structured Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadershipData.map((role, idx) => {
            const isSCRS = role.organization.includes("SCRS");
            const Icon = isSCRS ? Users : Megaphone;

            return (
              <div
                key={role.organization}
                className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800/80 bg-obsidian-900/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-crimson-600/50 hover:bg-obsidian-900/70"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-crimson-950/60 border border-crimson-900/40 text-crimson-400 group-hover:bg-crimson-600 group-hover:text-white transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="rounded-full bg-crimson-950 border border-crimson-800/60 px-2.5 py-0.5 font-mono text-[10px] text-crimson-300 uppercase">
                          {role.scope}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-zinc-500">
                      LEAD // 0{idx + 1}
                    </span>
                  </div>

                  {/* Role Title & Organization */}
                  <h3 className="font-editorial text-2xl font-bold uppercase text-white mb-1">
                    {role.role}
                  </h3>
                  <p className="font-mono text-xs text-crimson-400 font-medium mb-1">
                    {role.organization}
                  </p>
                  {role.previousRole && (
                    <p className="font-mono text-[11px] text-zinc-500 mb-6">
                      Progression: {role.previousRole} &rarr; {role.role}
                    </p>
                  )}

                  {/* Highlights */}
                  <div className="space-y-3 mb-8">
                    {role.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-crimson-500 mt-0.5 shrink-0" />
                        <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Applied Tags */}
                <div className="pt-6 border-t border-zinc-850">
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    Competencies Exercised
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {role.skillsApplied.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-zinc-800 bg-obsidian-950/80 px-2.5 py-1 font-mono text-[10px] text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
