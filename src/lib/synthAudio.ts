/**
 * Cinematic Ambient Audio Engine for Yash Makkar Portfolio
 * Provides:
 * 1. Playback of custom audio file if provided (e.g. /audio/ambient.mp3)
 * 2. Royalty-free procedural ambient drone generator using Web Audio API as a built-in fallback
 */

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isSynthesizing: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private filter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;
  private audioEl: HTMLAudioElement | null = null;
  private isAudioFileActive: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public async start(volume = 0.5): Promise<{ mode: "file" | "synth"; track: string }> {
    this.initContext();

    // Check if a local audio file exists and is accessible
    try {
      const testRes = await fetch("/audio/ambient.mp3", { method: "HEAD" });
      if (testRes.ok && testRes.headers.get("content-type")?.includes("audio")) {
        if (!this.audioEl) {
          this.audioEl = new Audio("/audio/ambient.mp3");
          this.audioEl.loop = true;
        }
        this.audioEl.volume = volume;
        await this.audioEl.play();
        this.isAudioFileActive = true;
        return { mode: "file", track: "Ambient Soundscape (Local File)" };
      }
    } catch {
      // Fall through to procedural synth
    }

    // Procedural Ambient Synth Engine
    if (!this.ctx) throw new Error("AudioContext not supported");

    this.stop(); // Clear any existing

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(Math.max(0.01, volume * 0.4), this.ctx.currentTime + 2.5);
    this.masterGain.connect(this.ctx.destination);

    // Warm Low-pass Filter
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = "lowpass";
    this.filter.frequency.setValueAtTime(320, this.ctx.currentTime);
    this.filter.connect(this.masterGain);

    // Subtle LFO for filter breath
    this.lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    this.lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime); // slow cycle
    lfoGain.gain.setValueAtTime(140, this.ctx.currentTime);
    this.lfo.connect(lfoGain);
    lfoGain.connect(this.filter.frequency);
    this.lfo.start();

    // Cinematic chord roots: Dm9 (D2, A2, F3, C4, E4)
    const chordFrequencies = [73.42, 110.0, 174.61, 261.63, 329.63];

    this.oscillators = chordFrequencies.map((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const oscGain = this.ctx!.createGain();

      osc.type = i === 0 ? "triangle" : "sine";
      // Slight detuning for analog warmth
      osc.frequency.setValueAtTime(freq + (i * 0.35 - 0.7), this.ctx!.currentTime);

      const level = i === 0 ? 0.35 : 0.18 / (i + 1);
      oscGain.gain.setValueAtTime(level, this.ctx!.currentTime);

      osc.connect(oscGain);
      oscGain.connect(this.filter!);
      osc.start();
      return osc;
    });

    this.isSynthesizing = true;
    return { mode: "synth", track: "Cinematic Neural Drift (Atmospheric Synth)" };
  }

  public setVolume(volume: number) {
    if (this.isAudioFileActive && this.audioEl) {
      this.audioEl.volume = Math.max(0, Math.min(1, volume));
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setTargetAtTime(Math.max(0.0001, volume * 0.4), this.ctx.currentTime, 0.1);
    }
  }

  public stop() {
    if (this.audioEl && this.isAudioFileActive) {
      this.audioEl.pause();
      this.audioEl.currentTime = 0;
      this.isAudioFileActive = false;
    }

    if (this.masterGain && this.ctx) {
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.4);
    }

    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch {}
      });
      this.oscillators = [];

      if (this.lfo) {
        try { this.lfo.stop(); this.lfo.disconnect(); } catch {}
        this.lfo = null;
      }
      this.isSynthesizing = false;
    }, 500);
  }

  public isPlaying(): boolean {
    return this.isAudioFileActive || this.isSynthesizing;
  }
}

export const ambientAudio = new AmbientAudioEngine();
