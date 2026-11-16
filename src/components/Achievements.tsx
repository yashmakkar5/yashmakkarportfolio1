"use client";

import React from "react";
import { Trophy, Award, CheckCircle2, Star, Target, Compass } from "lucide-react";
import { achievementsData } from "@/data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 bg-obsidian-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 uppercase tracking-widest mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
              <span>06 // Validated Milestones</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Honors &amp; <span className="text-crimson-500">Achievements</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-zinc-500 max-w-sm">
            Strictly factual competitive milestones and academic recognitions.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievementsData.map((item, idx) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800/80 bg-obsidian-900/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-crimson-600/50 hover:bg-obsidian-900/70"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-crimson-950/80 border border-crimson-700/60 px-3 py-1 font-mono text-xs text-crimson-300">
                      {item.tag}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      {item.year}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-zinc-500">
                    ACHIEVEMENT // 0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase text-white mb-2 group-hover:text-crimson-400 transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-crimson-400/90 font-medium mb-1">
                  {item.context}
                </p>
                <p className="font-mono text-[11px] text-zinc-400 mb-6">
                  Scope: <span className="text-zinc-200">{item.scope}</span>
                </p>

                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Details */}
                <div className="space-y-2.5 mb-8">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <CheckCircle2 className="h-4 w-4 text-crimson-500 mt-0.5 shrink-0" />
                      <span className="leading-relaxed font-sans">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="pt-4 border-t border-zinc-850 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>VERIFICATION: OFFICIAL_RESULT</span>
                <span className="text-crimson-400">NO FAKE METRICS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
