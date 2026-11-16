"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Volume2, EyeOff } from "lucide-react";

interface MascotProps {
  onSoundTrigger?: () => void;
}

export default function Mascot({ onSoundTrigger }: MascotProps) {
  // Enabled state with localStorage memory
  const [isEnabled, setIsEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [bubbleText, setBubbleText] = useState<string | null>(
    "Hey! I'm Kuro, Yash's AI companion. Hover around or click me!"
  );
  const [isBlinking, setIsBlinking] = useState(false);
  const [eyeDirection, setEyeDirection] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isExitAlertTriggered, setIsExitAlertTriggered] = useState(false);

  // Position for smooth cursor trailing
  const pos = useRef({ x: 100, y: 200 });
  const target = useRef({ x: 100, y: 200 });
  const mascotRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();

  // Check mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const savedState = localStorage.getItem("yash_mascot_enabled");
    if (savedState !== null) {
      setIsEnabled(savedState === "true");
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Blinking cycle
  useEffect(() => {
    if (!isEnabled) return;
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 4200);
    return () => clearInterval(blinkInterval);
  }, [isEnabled]);

  // Smooth lerp trailing animation for desktop
  const animate = useCallback(() => {
    if (!isMobile && isEnabled) {
      // Offset so it never covers the cursor
      const offsetX = 55;
      const offsetY = 55;

      pos.current.x += (target.current.x + offsetX - pos.current.x) * 0.08;
      pos.current.y += (target.current.y + offsetY - pos.current.y) * 0.08;

      if (mascotRef.current) {
        mascotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  }, [isMobile, isEnabled]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  // Mouse tracking & contextual triggers
  useEffect(() => {
    if (isMobile || !isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };

      // Calculate eye tracking offset
      const dx = (e.clientX - pos.current.x) / 120;
      const dy = (e.clientY - pos.current.y) / 120;
      setEyeDirection({
        x: Math.max(-4, Math.min(4, dx)),
        y: Math.max(-3, Math.min(3, dy)),
      });

      // Exit-intent trigger near top window edge
      if (e.clientY < 28 && !isExitAlertTriggered) {
        setIsExitAlertTriggered(true);
        setBubbleText("Leaving already? Star Yash's repos on GitHub before you go!");
        setTimeout(() => setIsExitAlertTriggered(false), 12000);
      }
    };

    // Scroll contextual hints
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollY / (height || 1);

      if (ratio > 0.18 && ratio < 0.42 && Math.random() < 0.02) {
        setBubbleText("Placey MACOS uses multi-agent router isolation with Azure AI Foundry!");
      } else if (ratio > 0.45 && ratio < 0.65 && Math.random() < 0.02) {
        setBubbleText("Check the tech stack — TypeScript & PyTorch represent!");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, isEnabled, isExitAlertTriggered]);

  // Click responses
  const handleMascotClick = () => {
    const quotes = [
      "10 Billion Percent effort! Senku Ishigami would approve.",
      "Placey MACOS multi-agent graph handles inconsistent LLM schemas gracefully.",
      "GymFlow has strict tenant scoping middleware to protect isolated data.",
      "Check out Yash's Azure AI-900 & AZ-900 credentials!",
      "Tip: Click the soundwave in the audio player for ambient coding vibes.",
      "Persistence > temporary motivation. Every single time.",
      "Currently exploring Agentic AI systems at CUIET!",
    ];
    const picked = quotes[Math.floor(Math.random() * quotes.length)];
    setBubbleText(picked);
    if (onSoundTrigger) onSoundTrigger();
  };

  const toggleMascot = () => {
    const next = !isEnabled;
    setIsEnabled(next);
    localStorage.setItem("yash_mascot_enabled", String(next));
  };

  if (!isEnabled) {
    return (
      <button
        onClick={toggleMascot}
        className="fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-full border border-zinc-800 bg-obsidian-900/90 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur-md transition hover:border-crimson-600 hover:text-white shadow-lg"
        title="Summon Kuro (AI Companion)"
      >
        <Sparkles className="h-3.5 w-3.5 text-crimson-500 animate-pulse" />
        <span>Summon Kuro</span>
      </button>
    );
  }

  return (
    <>
      <div
        ref={mascotRef}
        className={`pointer-events-none fixed top-0 left-0 z-40 transition-opacity duration-300 ${
          isMobile ? "!translate-x-0 !translate-y-0 right-4 bottom-4 left-auto top-auto" : ""
        }`}
        style={isMobile ? { position: "fixed", bottom: "1.5rem", right: "1.5rem" } : undefined}
      >
        <div className="relative flex flex-col items-center">
          {/* Speech Bubble */}
          <AnimatePresence>
            {bubbleText && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto relative mb-3 max-w-[240px] rounded-xl border border-crimson-600/40 bg-obsidian-950/95 p-3 text-xs leading-relaxed text-zinc-200 shadow-2xl backdrop-blur-md"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-mono text-[11px] text-zinc-300">{bubbleText}</p>
                  <button
                    onClick={() => setBubbleText(null)}
                    className="text-zinc-500 hover:text-zinc-200"
                    title="Dismiss message"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
                {/* Arrow */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-obsidian-950" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mascot Character Avatar (Sleek Cyber-Ninja Familiar) */}
          <div
            onClick={handleMascotClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="pointer-events-auto group relative cursor-pointer select-none"
            title="Kuro — Click to interact"
          >
            {/* Ambient Crimson Aura */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-crimson-600 to-red-900 opacity-60 blur-sm group-hover:opacity-100 transition-opacity animate-pulse-slow" />

            {/* Main Cyber Orb */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-red-500/40 bg-gradient-to-b from-[#1c1c24] via-[#101017] to-[#08080c] shadow-[0_0_20px_rgba(229,9,20,0.35)] transition-transform duration-200 group-hover:scale-110">
              {/* Ninja Headband / Cyber Visor Stripe */}
              <div className="absolute top-3.5 h-2 w-full bg-crimson-600/80 shadow-[0_0_8px_rgba(229,9,20,0.8)] flex items-center justify-center">
                <div className="h-1 w-2 rounded-sm bg-white/90" />
              </div>

              {/* Ears / Cyber Horns */}
              <div className="absolute -top-1.5 left-2 h-2.5 w-2 -rotate-12 rounded-t-sm bg-zinc-800 border-t border-l border-crimson-500/70" />
              <div className="absolute -top-1.5 right-2 h-2.5 w-2 rotate-12 rounded-t-sm bg-zinc-800 border-t border-r border-crimson-500/70" />

              {/* Expressive Glowing Ruby Eyes */}
              <div className="relative z-10 mt-2 flex items-center gap-2.5">
                {/* Left Eye */}
                <div
                  className={`h-2.5 w-2.5 rounded-full bg-crimson-500 shadow-[0_0_6px_#ff1723] transition-all duration-75 flex items-center justify-center ${
                    isBlinking ? "!h-0.5 !bg-red-400" : ""
                  }`}
                  style={{
                    transform: `translate(${eyeDirection.x}px, ${eyeDirection.y}px)`,
                  }}
                >
                  {!isBlinking && <div className="h-1 w-1 rounded-full bg-white/90" />}
                </div>

                {/* Right Eye */}
                <div
                  className={`h-2.5 w-2.5 rounded-full bg-crimson-500 shadow-[0_0_6px_#ff1723] transition-all duration-75 flex items-center justify-center ${
                    isBlinking ? "!h-0.5 !bg-red-400" : ""
                  }`}
                  style={{
                    transform: `translate(${eyeDirection.x}px, ${eyeDirection.y}px)`,
                  }}
                >
                  {!isBlinking && <div className="h-1 w-1 rounded-full bg-white/90" />}
                </div>
              </div>

              {/* Tiny Floating Cyber Collar Dot */}
              <div className="absolute bottom-1.5 h-1 w-3 rounded-full bg-crimson-500/60" />
            </div>

            {/* Status Tooltip on hover */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="rounded bg-obsidian-900/90 px-1.5 py-0.5 text-[9px] font-mono tracking-wider text-crimson-400 uppercase border border-crimson-900/50">
                Kuro v2.4
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Minimize/Disable Toggle Button */}
      <button
        onClick={toggleMascot}
        className="fixed bottom-3 left-3 z-30 flex items-center gap-1.5 rounded-md border border-zinc-900/80 bg-obsidian-950/80 px-2 py-1 text-[10px] font-mono text-zinc-500 backdrop-blur transition hover:border-zinc-700 hover:text-zinc-300"
        title="Toggle Kuro Companion"
      >
        <EyeOff className="h-3 w-3 text-zinc-500" />
        <span>Hide Mascot</span>
      </button>
    </>
  );
}
