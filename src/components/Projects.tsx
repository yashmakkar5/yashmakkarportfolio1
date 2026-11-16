"use client";

import React, { useState } from "react";
import { Github, ExternalLink, ArrowUpRight, BookOpen, Layers, Bot, Database, Server, Cpu, ShieldCheck } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 bg-obsidian-950 border-t border-zinc-900 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-crimson-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 uppercase tracking-widest mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
              <span>02 // Featured Engineering</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Selected <span className="text-crimson-500">Systems</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-zinc-400">
            <span>2 Flagship Implementations • Extensible Data Source</span>
          </div>
        </div>

        {/* Projects Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, index) => {
            const isAgentic = project.id === "placey-macos";

            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-zinc-800/80 bg-obsidian-900/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:border-crimson-600/50 hover:bg-obsidian-900/80 hover:shadow-[0_15px_50px_rgba(229,9,20,0.15)]"
              >
                {/* Top Metadata */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="rounded-full bg-crimson-950/80 border border-crimson-700/50 px-3 py-1 font-mono text-[11px] text-crimson-300">
                      {project.badge}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      PROJECT // 0{index + 1}
                    </span>
                  </div>

                  {/* Project Title & Subtitle */}
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-crimson-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 mt-1 mb-5">
                    {project.subtitle}
                  </p>

                  {/* Visual Architecture Representation / Schematic Frame */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-obsidian-950 p-5 mb-6 flex flex-col justify-between">
                    {/* Decorative Matrix Grid */}
                    <div
                      className="absolute inset-0 opacity-[0.04] pointer-events-none"
                      style={{
                        backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                      }}
                    />

                    {isAgentic ? (
                      /* Schematic: Multi-Agent AI Pipeline */
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                          <span className="flex items-center gap-1.5 text-crimson-400">
                            <Bot className="h-3.5 w-3.5" />
                            AGENT_COGNITIVE_MESH
                          </span>
                          <span>AZURE AI FOUNDRY // GPT-4o</span>
                        </div>

                        {/* Node Flow Visualizer */}
                        <div className="grid grid-cols-4 gap-2 my-auto py-2">
                          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-center">
                            <span className="text-[9px] font-mono text-zinc-400">INPUT</span>
                            <span className="text-[10px] font-semibold text-zinc-200">Profile Ingest</span>
                          </div>
                          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-crimson-950/40 border border-crimson-800/60 text-center">
                            <span className="text-[9px] font-mono text-crimson-400">ROUTER</span>
                            <span className="text-[10px] font-semibold text-white">ModelRouter</span>
                          </div>
                          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-center">
                            <span className="text-[9px] font-mono text-zinc-400">SCHEMA</span>
                            <span className="text-[10px] font-semibold text-zinc-200">TS Validator</span>
                          </div>
                          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-900/90 border border-zinc-800 text-center">
                            <span className="text-[9px] font-mono text-zinc-400">STORE</span>
                            <span className="text-[10px] font-semibold text-zinc-200">Supabase DB</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                          <span>SEQUENTIAL_AGENT_HANDOFF: NORMALIZED</span>
                          <span className="text-emerald-400">STRICT_SCHEMAS</span>
                        </div>
                      </div>
                    ) : (
                      /* Schematic: Multi-Tenant Distributed Architecture */
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                          <span className="flex items-center gap-1.5 text-crimson-400">
                            <Server className="h-3.5 w-3.5" />
                            MULTI_TENANT_ISOLATION
                          </span>
                          <span>EXPRESS.JS // MONGODB</span>
                        </div>

                        {/* Tenant Flow Visualizer */}
                        <div className="grid grid-cols-3 gap-3 my-auto py-2">
                          <div className="flex flex-col p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
                            <span className="text-[9px] font-mono text-zinc-500">AUTH &amp; RBAC</span>
                            <span className="text-[11px] font-medium text-zinc-200">JWT + bcryptjs</span>
                          </div>
                          <div className="flex flex-col p-2.5 rounded-lg bg-crimson-950/40 border border-crimson-800/60">
                            <span className="text-[9px] font-mono text-crimson-400">TENANT ROUTER</span>
                            <span className="text-[11px] font-medium text-white">Query Scoping</span>
                          </div>
                          <div className="flex flex-col p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800">
                            <span className="text-[9px] font-mono text-zinc-500">ANALYTICS</span>
                            <span className="text-[11px] font-medium text-zinc-200">Mongo Pipeline</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                          <span>GST_INVOICING: AUTOMATED</span>
                          <span className="text-emerald-400">ISOLATION: SECURE</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>

                  {/* Highlights Bulleted */}
                  <div className="space-y-2 mb-6">
                    {project.architectureHighlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-crimson-500 mt-1.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-zinc-800 bg-obsidian-950/60 px-2.5 py-1 font-mono text-[11px] text-zinc-400 transition group-hover:border-zinc-700 group-hover:text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-zinc-850">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-xl bg-crimson-600/15 border border-crimson-600/30 px-4 py-2 text-xs font-mono font-medium text-crimson-400 transition hover:bg-crimson-600 hover:text-white"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Deep Architectural Study</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition"
                    >
                      <Github className="h-4 w-4" />
                      <span>Source Code</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expandable Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
