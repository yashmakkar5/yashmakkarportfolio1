"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Leadership", href: "#leadership" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Mindset", href: "#mindset" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section intersection detection
      const sections = ["hero", "about", "projects", "skills", "leadership", "education", "achievements", "certifications", "mindset", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-obsidian-950/85 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="#hero" className="group flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-crimson-600/15 border border-crimson-600/30 text-crimson-500 font-mono text-xs font-bold transition-all duration-300 group-hover:bg-crimson-600 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(229,9,20,0.6)]">
              YM
            </span>
            <div className="flex flex-col">
              <span className="font-editorial text-sm tracking-wider font-semibold text-zinc-100 group-hover:text-white transition">
                YASH MAKKAR
              </span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 group-hover:text-crimson-400 transition">
                AI/ML & FULL-STACK
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-obsidian-900/60 border border-zinc-800/60 rounded-full px-3 py-1 backdrop-blur-md">
            {navItems.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeSection === targetId;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-1.5 text-xs font-mono transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-white font-medium bg-crimson-600/20 text-crimson-400 border border-crimson-600/30 shadow-[0_0_10px_rgba(229,9,20,0.25)]"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Connect Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-crimson-600/50 bg-crimson-600/10 px-4 py-1.5 text-xs font-mono font-medium text-crimson-300 backdrop-blur-sm transition-all duration-300 hover:bg-crimson-600 hover:text-white hover:shadow-[0_0_20px_rgba(229,9,20,0.5)] active:scale-95"
            >
              <span>Initialize Contact</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-obsidian-900/80 text-zinc-300 hover:text-white hover:border-zinc-700 transition"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-800 bg-obsidian-950/95 px-6 py-6 backdrop-blur-2xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-mono text-zinc-300 hover:bg-crimson-600/15 hover:text-white transition"
              >
                <span>{item.name}</span>
                <span className="text-[10px] text-zinc-600 font-mono">0{navItems.indexOf(item) + 1}</span>
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-zinc-800/80">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-crimson-600 px-4 py-3 text-xs font-mono font-semibold text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
