"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Award, Copy, Check, Send, ArrowUpRight, MessageSquare, Terminal, ExternalLink, MessageCircle, PhoneCall } from "lucide-react";
import { profileData } from "@/data/profile";
import { configuredSocials } from "@/data/socials";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Award,
  Mail,
  PhoneCall,
  MessageCircle,
  MessageSquare,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare mailto fallback or simulated transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      const mailtoUrl = `mailto:${profileData.contactEmail}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 bg-obsidian-950 border-t border-zinc-900 overflow-hidden">
      {/* Cinematic ambient spotlight */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-crimson-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-crimson-400 uppercase tracking-widest mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
              <span>10 // Open Communications</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Initialize <span className="text-crimson-500">Contact</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-zinc-500 max-w-sm">
            Open for technical discourse, AI research, and high-impact engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct verified connections */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Copy Email Card */}
            <div className="rounded-3xl border border-zinc-800 bg-obsidian-900/60 p-6 sm:p-8 backdrop-blur-xl">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
                Primary Direct Transmission
              </span>
              <p className="font-editorial text-xl sm:text-2xl font-bold text-white mb-4">
                {profileData.contactEmail}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-xl bg-crimson-600 px-4 py-2 text-xs font-mono font-semibold uppercase text-white shadow-[0_0_15px_rgba(229,9,20,0.35)] hover:bg-crimson-500 transition active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>Copied Address</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profileData.contactEmail}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-obsidian-950 px-4 py-2 text-xs font-mono text-zinc-300 hover:border-crimson-600 hover:text-white transition"
                >
                  <Mail className="h-3.5 w-3.5 text-crimson-400" />
                  <span>Launch Mail Client</span>
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Chat Card */}
            <div className="rounded-3xl border border-emerald-900/60 bg-emerald-950/20 p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  Instant Messaging // Fast Response
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-950 border border-emerald-800/80 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE
                </span>
              </div>
              <p className="font-editorial text-xl sm:text-2xl font-bold text-white mb-2">
                WhatsApp Direct Chat
              </p>
              <p className="text-xs text-zinc-400 font-sans mb-5 leading-relaxed">
                Connect directly for rapid technical consultations, project inquiries, or real-time communication.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={profileData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:bg-emerald-500 transition active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Open WhatsApp Chat</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Verified Social Networks Cards (Only displays configured links) */}
            <div className="space-y-3">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 px-1">
                Verified Social Profiles
              </span>

              {configuredSocials.map((social) => {
                const Icon = iconMap[social.icon] || ExternalLink;

                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-zinc-850 bg-obsidian-900/30 p-4 transition-all duration-200 hover:border-crimson-600/50 hover:bg-obsidian-900/70"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:border-crimson-600 group-hover:text-crimson-400 group-hover:bg-crimson-950/40 transition">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-editorial text-sm font-bold text-white group-hover:text-crimson-400 transition">
                            {social.name}
                          </span>
                          {social.displayHandle && (
                            <span className="font-mono text-[10px] text-zinc-500">
                              {social.displayHandle}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-400 font-sans mt-0.5">
                          {social.description}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-crimson-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-zinc-800 bg-obsidian-900/40 p-6 sm:p-10 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-850 mb-8">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-crimson-500" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-200">
                    Direct Inquiry Terminal
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">
                  UTC+5:30 (IST)
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Sender Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full rounded-xl border border-zinc-800 bg-obsidian-950 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-crimson-600 focus:outline-none focus:ring-1 focus:ring-crimson-600 font-sans transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. elena@domain.com"
                      className="w-full rounded-xl border border-zinc-800 bg-obsidian-950 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-crimson-600 focus:outline-none focus:ring-1 focus:ring-crimson-600 font-sans transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Collaboration on Multi-Agent Pipeline"
                    className="w-full rounded-xl border border-zinc-800 bg-obsidian-950 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-crimson-600 focus:outline-none focus:ring-1 focus:ring-crimson-600 font-sans transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Message Payload *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Outline your thoughts, opportunity, or technical question..."
                    className="w-full rounded-xl border border-zinc-800 bg-obsidian-950 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-crimson-600 focus:outline-none focus:ring-1 focus:ring-crimson-600 font-sans transition resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-850">
                  <p className="text-[11px] font-mono text-zinc-500">
                    Direct transmission to {profileData.contactEmail}
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-crimson-600 px-7 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(229,9,20,0.4)] transition hover:bg-crimson-500 active:scale-95 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? "Dispatching..." : "Transmit Message"}</span>
                  </button>
                </div>

                {submitStatus === "success" && (
                  <div className="rounded-xl border border-emerald-900 bg-emerald-950/40 p-3 text-xs font-mono text-emerald-400 flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0" />
                    <span>Payload prepared. Mail client invoked for direct routing.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
