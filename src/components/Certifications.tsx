"use client";

import React from "react";
import { Award, ExternalLink, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { certificationsData, CREDENTIALS_REPOSITORY_URL } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 bg-obsidian-950 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 uppercase tracking-widest mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
              <span>07 // Verified Competence</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Official <span className="text-crimson-500">Certifications</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-zinc-500 max-w-sm">
            Industry &amp; premier institute verified cloud and generative AI credentials.
          </p>
        </div>

        {/* 3 Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800/80 bg-obsidian-900/40 p-7 backdrop-blur-xl transition-all duration-300 hover:border-crimson-600/50 hover:bg-obsidian-900/70"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="rounded-full bg-crimson-950/80 border border-crimson-700/60 px-3 py-1 font-mono text-[11px] text-crimson-300">
                    {cert.badgeType}
                  </span>
                  {cert.credentialCode && (
                    <span className="font-mono text-xs text-zinc-400 font-semibold">
                      {cert.credentialCode}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-editorial text-xl font-bold uppercase text-white mb-2 group-hover:text-crimson-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="font-mono text-xs text-zinc-400 mb-4">
                  Issuer: <span className="text-zinc-200">{cert.issuer}</span>
                </p>

                <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Topics Covered */}
                <div className="space-y-1.5 mb-6">
                  <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    Verified Curricular Topics
                  </span>
                  {cert.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                      <span className="h-1 w-1 rounded-full bg-crimson-500" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="pt-4 border-t border-zinc-850 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  COMPLETED
                </span>
                <span>AUTHENTICATED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Credentials Repository Banner */}
        <div className="rounded-2xl border border-crimson-600/40 bg-gradient-to-r from-crimson-950/40 via-obsidian-900 to-obsidian-950 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(229,9,20,0.15)]">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-crimson-600/20 border border-crimson-600/40 text-crimson-400 shrink-0">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-editorial text-lg sm:text-xl font-bold text-white uppercase">
                Complete Credential &amp; Certificate Portfolio
              </h4>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">
                The GitHub credential repository acts as the authoritative source of truth for all verified course certificates, scores, and academic honors.
              </p>
            </div>
          </div>

          <a
            href={CREDENTIALS_REPOSITORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-crimson-600 px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(229,9,20,0.4)] transition hover:bg-crimson-500 active:scale-95 shrink-0"
          >
            <span>View Certificates &amp; Courses</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
