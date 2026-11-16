import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#070709",
        foreground: "#F4F4F6",
        crimson: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
          950: "#4C0519",
          accent: "#E50914",
          neon: "#FF1723",
          deep: "#660000",
        },
        obsidian: {
          950: "#050507",
          900: "#0A0A0E",
          850: "#0F0F14",
          800: "#14141B",
          700: "#1F1F28",
          600: "#2B2B36",
        },
        surface: {
          dark: "#0C0C10",
          card: "rgba(16, 16, 22, 0.75)",
          border: "rgba(255, 255, 255, 0.08)",
          borderHighlight: "rgba(229, 9, 20, 0.35)",
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
        editorial: ["var(--font-syne)", "Cinzel", "Playfair Display", "Georgia", "serif"],
      },
      backgroundImage: {
        "radial-crimson": "radial-gradient(circle at 50% 30%, rgba(229, 9, 20, 0.15) 0%, rgba(7, 7, 9, 0) 70%)",
        "radial-spotlight": "radial-gradient(circle at top right, rgba(229, 9, 20, 0.12) 0%, transparent 60%)",
        "mesh-dark": "radial-gradient(at 0% 0%, rgba(229, 9, 20, 0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(120, 0, 0, 0.1) 0px, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 5s ease-in-out infinite",
        "glow": "glow 2.5s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "drop-shadow(0 0 10px rgba(229,9,20,0.3))" },
          "100%": { opacity: "0.85", filter: "drop-shadow(0 0 25px rgba(229,9,20,0.65))" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
