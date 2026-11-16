"use client";

import React, { useState } from "react";
import { Quote, Sparkles, Compass, Flame, FlaskConical, Target } from "lucide-react";
import { mindsetQuotes, MindsetQuote } from "@/data/quotes";

const themeIcons: Record<string, React.ElementType> = {
  "Scientific Curiosity": FlaskConical,
  "Discipline": Target,
  "Resilience": Flame,
  "Empirical Truth": Compass,
};

export default function Mindset() {
  const [selectedQuote, setSelectedQuote] = useState<MindsetQuote>(mindsetQuotes[0]);

  return (
    <section id="mindset" className="relative py-28 bg-obsidian-950 border-t border-zinc-900 overflow-hidden">
      {/* Background ambient red glow */}
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-crimson-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 uppercase tracking-widest mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
              <span>08 // Core Philosophy</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              The <span className="text-crimson-500">Mindset</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-zinc-500 max-w-sm">
            Curiosity, discipline, and scientific resilience driving every line of code.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {mindsetQuotes.map((item) => {
            const isSelected = selectedQuote.id === item.id;
            const Icon = themeIcons[item.theme] || Sparkles;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedQuote(item)}
                className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-300 ${
                  isSelected
                    ? "border-crimson-600 bg-obsidian-900 shadow-[0_0_20px_rgba(229,9,20,0.25)]"
                    : "border-zinc-850 bg-obsidian-900/40 hover:border-zinc-700 hover:bg-obsidian-900/70"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    className={`h-4 w-4 ${
                      isSelected ? "text-crimson-500" : "text-zinc-500"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider ${
                      isSelected ? "text-crimson-400 font-semibold" : "text-zinc-500"
                    }`}
                  >
                    {item.theme}
                  </span>
                </div>
                <span className="font-editorial text-sm font-bold text-zinc-200">
                  {item.author}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 truncate max-w-full">
                  {item.context.split("—")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Editorial Quote Card */}
        <div className="rounded-3xl border border-zinc-800/80 bg-obsidian-900/40 p-8 sm:p-14 backdrop-blur-xl relative overflow-hidden">
          <Quote className="absolute top-8 right-8 h-24 w-24 text-white/[0.03] pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-crimson-950/80 border border-crimson-700/60 px-3 py-1 font-mono text-xs text-crimson-300 mb-6">
              <span>{selectedQuote.theme}</span>
              <span>•</span>
              <span className="text-zinc-400">{selectedQuote.context}</span>
            </div>

            {/* Quotation text */}
            <blockquote className="font-editorial text-2xl sm:text-4xl font-black text-white leading-snug tracking-tight mb-8">
              &ldquo;{selectedQuote.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 pb-8 mb-8 border-b border-zinc-850">
              <div className="h-px w-10 bg-crimson-500" />
              <div>
                <p className="font-editorial text-base font-bold text-zinc-200 uppercase">
                  {selectedQuote.author}
                </p>
                <p className="font-mono text-xs text-zinc-500">
                  {selectedQuote.context}
                </p>
              </div>
            </div>

            {/* Engineering Reflection */}
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-widest text-crimson-400 mb-2">
                Engineering Application &amp; Translation
              </span>
              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                {selectedQuote.reflection}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
