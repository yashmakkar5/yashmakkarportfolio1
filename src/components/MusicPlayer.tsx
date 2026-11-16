"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Minimize2, Maximize2, Music, Radio } from "lucide-react";
import { ambientAudio } from "@/lib/synthAudio";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [isMuted, setIsMuted] = useState(false);
  const [trackName, setTrackName] = useState<string>("Neural Drift (Atmospheric Synth)");
  const [playbackProgress, setPlaybackProgress] = useState(0);

  // Toggle playback
  const togglePlay = async () => {
    if (isPlaying) {
      ambientAudio.stop();
      setIsPlaying(false);
    } else {
      try {
        const res = await ambientAudio.start(isMuted ? 0 : volume);
        setTrackName(res.track);
        setIsPlaying(true);
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    }
  };

  // Progress simulation for procedural synth / audio loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 600);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Volume handler
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (isMuted && newVol > 0) setIsMuted(false);
    ambientAudio.setVolume(isMuted ? 0 : newVol);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      ambientAudio.setVolume(volume);
    } else {
      setIsMuted(true);
      ambientAudio.setVolume(0);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 font-mono text-xs">
      {!isExpanded ? (
        /* Minimized floating pill */
        <div className="flex items-center gap-2.5 rounded-full border border-zinc-800/80 bg-obsidian-950/90 px-3 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-300 hover:border-crimson-600/60">
          <button
            onClick={togglePlay}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-crimson-600/90 text-white shadow-[0_0_12px_rgba(229,9,20,0.5)] transition hover:scale-105 active:scale-95"
            title={isPlaying ? "Pause Ambient Audio" : "Play Ambient Audio"}
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
          </button>

          {/* Animated visualizer bars */}
          <div className="flex items-end gap-0.5 h-3.5 px-1">
            <span
              className={`w-0.5 bg-crimson-500 rounded-full transition-all duration-200 ${
                isPlaying ? "h-3.5 animate-pulse" : "h-1 bg-zinc-600"
              }`}
            />
            <span
              className={`w-0.5 bg-crimson-500 rounded-full transition-all duration-300 delay-75 ${
                isPlaying ? "h-2.5 animate-pulse" : "h-1 bg-zinc-600"
              }`}
            />
            <span
              className={`w-0.5 bg-crimson-500 rounded-full transition-all duration-150 delay-150 ${
                isPlaying ? "h-4 animate-pulse" : "h-1 bg-zinc-600"
              }`}
            />
            <span
              className={`w-0.5 bg-crimson-500 rounded-full transition-all duration-200 delay-100 ${
                isPlaying ? "h-2 animate-pulse" : "h-1 bg-zinc-600"
              }`}
            />
          </div>

          <div
            onClick={() => setIsExpanded(true)}
            className="hidden sm:flex flex-col cursor-pointer text-left pr-1"
          >
            <span className="text-[10px] font-semibold text-zinc-300 truncate max-w-[140px]">
              {isPlaying ? trackName : "Ambient Soundscape"}
            </span>
            <span className="text-[8px] text-zinc-500 uppercase tracking-widest">
              {isPlaying ? "Live Audio Generator" : "Click to Play"}
            </span>
          </div>

          <button
            onClick={() => setIsExpanded(true)}
            className="text-zinc-500 hover:text-zinc-300 transition pl-1"
            title="Expand Music Player"
          >
            <Maximize2 className="h-3.5 w-3.5" />
          </button>
        </div>
      ) : (
        /* Expanded Deck */
        <div className="w-72 rounded-2xl border border-zinc-800 bg-obsidian-950/95 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <Radio className="h-4 w-4 text-crimson-500 animate-pulse" />
              <span className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Sound System
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-zinc-500 hover:text-zinc-300 transition"
              title="Minimize"
            >
              <Minimize2 className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Track metadata */}
          <div className="py-3">
            <p className="text-[10px] text-crimson-400 uppercase tracking-widest font-mono">
              {isPlaying ? "Now Generating" : "Standby Mode"}
            </p>
            <p className="text-xs font-medium text-zinc-200 truncate mt-0.5">
              {trackName}
            </p>
            <p className="text-[10px] text-zinc-500 mt-0.5">
              Royalty-free procedural ambient synth & local asset loader
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden mb-3">
            <div
              className="bg-gradient-to-r from-crimson-600 to-red-500 h-full transition-all duration-300"
              style={{ width: `${isPlaying ? playbackProgress : 0}%` }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-crimson-600 text-white shadow-[0_0_15px_rgba(229,9,20,0.6)] transition hover:bg-crimson-500 active:scale-95"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                className="text-zinc-400 hover:text-white transition p-1"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-4 w-4 text-crimson-400" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 w-28">
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="h-1 w-full cursor-pointer accent-crimson-500 bg-zinc-800 rounded-lg appearance-none"
                title="Master Volume"
              />
            </div>
          </div>

          {/* Note about asset */}
          <div className="mt-3.5 pt-2 border-t border-zinc-900 text-[9px] text-zinc-500 leading-tight">
            <span>Drop your custom audio file at </span>
            <code className="text-zinc-400 bg-black/40 px-1 py-0.5 rounded">public/audio/ambient.mp3</code>
          </div>
        </div>
      )}
    </div>
  );
}
