"use client";

import React from "react";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { educationData } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="relative py-28 bg-obsidian-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 uppercase tracking-widest mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
              <span>05 // Academic Pedigree</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Education &amp; <span className="text-crimson-500">Degree</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-zinc-500 max-w-sm">
            Formal engineering foundations in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Hero Card for CUIET Degree */}
        <div className="rounded-3xl border border-zinc-800/80 bg-obsidian-900/40 p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden">
          {/* Subtle Watermark */}
          <div className="absolute top-6 right-6 font-editorial text-8xl font-black text-white/[0.02] select-none pointer-events-none">
            CUIET
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Degree Core Info */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-crimson-600/15 border border-crimson-600/30 text-crimson-500">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-crimson-400">
                    {educationData.status}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white uppercase">
                    {educationData.degree}
                  </h3>
                </div>
              </div>

              <p className="font-mono text-sm text-zinc-300 font-medium mb-3">
                {educationData.specialization}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-crimson-400" />
                  {educationData.duration}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-crimson-400" />
                  {educationData.location}
                </span>
                <span>•</span>
                <span className="text-zinc-300 font-semibold">
                  {educationData.institution}
                </span>
              </div>

              <div className="space-y-3 mb-8">
                {educationData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-crimson-500 mt-0.5 shrink-0" />
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Academic Metrics & Coursework */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-obsidian-950/60 border border-zinc-850 rounded-2xl p-6 sm:p-8">
              {/* CGPA Display */}
              <div className="mb-6 pb-6 border-b border-zinc-800">
                <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  Cumulative Grade Point Average
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-editorial text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-crimson-400">
                    8.61
                  </span>
                  <span className="font-mono text-sm text-zinc-500">/ 10.0</span>
                </div>
                <p className="text-[11px] font-mono text-emerald-400 mt-1">
                  &bull; Distinction Academic Standing
                </p>
              </div>

              {/* Core Coursework Badges */}
              <div>
                <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">
                  Core Curricular Competencies
                </span>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-md border border-zinc-800 bg-obsidian-900/90 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
