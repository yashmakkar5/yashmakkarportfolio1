"use client";

import React, { useState } from "react";
import { BrainCircuit, Cloud, Code2, Layers, Database, Cpu, Terminal, CheckCircle2 } from "lucide-react";
import { skillsData, SkillCategory } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  BrainCircuit,
  Cloud,
  Code2,
  Layers,
  Database,
  Cpu,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredCategories =
    activeCategory === "ALL"
      ? skillsData
      : skillsData.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="relative py-28 bg-obsidian-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 uppercase tracking-widest mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
              <span>03 // Technical Repertoire</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Skills &amp; <span className="text-crimson-500">Stacks</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-zinc-500 max-w-sm">
            Categorized technical capabilities. Honest foundations, zero fabricated percentage bars.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("ALL")}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
              activeCategory === "ALL"
                ? "bg-crimson-600 text-white shadow-[0_0_15px_rgba(229,9,20,0.4)]"
                : "border border-zinc-800 bg-obsidian-900/60 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            All Categories ({skillsData.length})
          </button>
          {skillsData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
                activeCategory === cat.category
                  ? "bg-crimson-600 text-white shadow-[0_0_15px_rgba(229,9,20,0.4)]"
                  : "border border-zinc-800 bg-obsidian-900/60 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Terminal;

            return (
              <div
                key={category.category}
                className="group relative rounded-2xl border border-zinc-800/80 bg-obsidian-900/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-crimson-600/50 hover:bg-obsidian-900/70"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-crimson-950/60 border border-crimson-900/40 text-crimson-400 group-hover:bg-crimson-600 group-hover:text-white transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-base font-bold text-white">
                      {category.category}
                    </h3>
                    <p className="text-[10px] font-mono text-zinc-500">
                      {category.skills.length} Capabilities Verified
                    </p>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 mb-6 font-sans leading-relaxed">
                  {category.tagline}
                </p>

                {/* Skills Badges List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group/skill relative rounded-lg border px-3 py-1.5 font-mono text-xs transition-all ${
                        skill.isPrimary
                          ? "border-crimson-900/50 bg-crimson-950/30 text-zinc-200 hover:border-crimson-600 hover:text-white"
                          : "border-zinc-800 bg-obsidian-950/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        {skill.isPrimary && (
                          <span className="h-1 w-1 rounded-full bg-crimson-500" />
                        )}
                        <span>{skill.name}</span>
                      </div>

                      {/* Tooltip description */}
                      {skill.description && (
                        <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 rounded-lg border border-zinc-800 bg-obsidian-950 p-2 text-[10px] text-zinc-300 opacity-0 shadow-2xl transition-opacity group-hover/skill:opacity-100 z-20">
                          {skill.description}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-obsidian-950" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
