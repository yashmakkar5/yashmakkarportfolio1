"use client";

import React, { useEffect } from "react";
import { X, Github, ExternalLink, Cpu, Layers, CheckCircle2, ShieldAlert, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-zinc-800 bg-obsidian-950 p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.95)] z-10 text-zinc-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-obsidian-900 text-zinc-400 hover:text-white hover:border-crimson-600 transition"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="rounded-full bg-crimson-950/80 border border-crimson-700/60 px-3 py-1 text-xs font-mono text-crimson-300">
            {project.badge}
          </span>
          <span className="text-xs font-mono text-zinc-500">
            {project.period} • {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-editorial text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-2">
          {project.title}
        </h3>
        <p className="font-mono text-sm text-crimson-400 mb-6">
          {project.subtitle}
        </p>

        {/* Quick Actions */}
        <div className="flex flex-wrap items-center gap-3 pb-8 mb-8 border-b border-zinc-850">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-crimson-600 px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:bg-crimson-500 transition"
          >
            <Github className="h-4 w-4" />
            <span>View Source on GitHub</span>
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-obsidian-900 px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200 hover:border-crimson-600 transition"
            >
              <ExternalLink className="h-4 w-4 text-crimson-400" />
              <span>Launch Live System</span>
            </a>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <span className="block text-[11px] font-mono uppercase text-zinc-500 mb-2">
            Engineered Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-zinc-800 bg-obsidian-900/80 px-3 py-1 font-mono text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architectural Highlights */}
        <div className="mb-10 rounded-2xl border border-zinc-850 bg-obsidian-900/40 p-6">
          <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 uppercase tracking-wider mb-4">
            <Cpu className="h-4 w-4 text-crimson-500" />
            <span>Core Implementation Highlights</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architectureHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-crimson-500 mt-0.5 shrink-0" />
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Body */}
        <div className="space-y-8">
          {/* Problem Statement */}
          <div>
            <h4 className="font-editorial text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-crimson-500 font-mono text-sm">// 01</span> Problem Formulation
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.deepDive.problemStatement}
            </p>
          </div>

          {/* Architecture Overview */}
          <div>
            <h4 className="font-editorial text-xl font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-crimson-500 font-mono text-sm">// 02</span> Architectural Blueprint
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.deepDive.architectureOverview}
            </p>
          </div>

          {/* Key Engineering Decisions */}
          <div>
            <h4 className="font-editorial text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-crimson-500 font-mono text-sm">// 03</span> Key Engineering Decisions
            </h4>
            <div className="space-y-4">
              {project.deepDive.keyEngineeringDecisions.map((decision, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-850 bg-obsidian-900/70 p-4 transition hover:border-zinc-700"
                >
                  <h5 className="font-mono text-xs font-bold text-crimson-400 uppercase tracking-wide mb-1">
                    {decision.title}
                  </h5>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {decision.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <h4 className="font-editorial text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-crimson-500 font-mono text-sm">// 04</span> Verified Outcomes
            </h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              {project.deepDive.impactAndOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ArrowRight className="h-3.5 w-3.5 text-crimson-500 mt-0.5 shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-10 pt-6 border-t border-zinc-850 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span>CENTRAL_DATA_SOURCE: src/data/projects.ts</span>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition"
          >
            Close Case Study [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
