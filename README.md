# Yash Makkar — Personal Portfolio Website

> **Cinematic Editorial Portfolio & Digital Identity for Yash Makkar**  
> AI/ML Engineer & Full-Stack Developer • Undergraduate at CUIET, Chitkara University (2024–2028).

---

## ✦ System Architecture & Design Direction

- **Cinematic Editorial Design**: Deep obsidian backgrounds (`#070709`), restrained crimson/red accents (`#E50914`), high-contrast off-white typography, and asymmetrical editorial layouts.
- **Strict Factual Integrity**: Real public GitHub stats, authentic academic standing (CUIET CGPA: 8.61/10), verified hackathon achievements (SAP HackFest 26 Top 10 at Chitkara University), verified cloud & GenAI certifications, and zero fabricated progress bars or fake claims.
- **Signature Feature — Kuro (Interactive Virtual Companion)**: An original cyber-ninja companion that tracks the cursor with spring physics, reacts to contextual viewport events, detects exit-intent near the window top edge, blinks, talks when clicked, offers mobile touch interactions, and includes a persistent toggle.
- **Ambient Sound System**: Compact audio player with an interactive Web Audio procedural ambient synth drone engine out of the box, with instant plug-and-play support for local audio tracks (`public/audio/ambient.mp3`).
- **Deep Architectural Case Studies**: High-impact expandable modal case studies for **Placey MACOS** (Multi-Agent Career & Skill Intelligence Platform) and **GymFlow** (Multi-Tenant Management Platform).

---

## ✦ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing, runtime schema validators)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom cinematic obsidian/crimson theme)
- **Motion**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio Engine**: Web Audio API Procedural Synthesizer + HTML5 Audio Loader
- **API**: Server-side Next.js route caching GitHub REST API v3

---

## ✦ Project Structure

```
d:/yashmakkarportifoliomark1/
├── public/
│   ├── images/
│   │   └── yash-portrait.jpg     # Portrait image asset (configured & active)
│   ├── audio/
│   │   └── ambient.mp3           # Optional custom audio track location
│   ├── icon.svg                  # Vector brand icon
│   └── favicon.ico               # Browser tab favicon
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── github/
│   │   │       └── route.ts      # Server-side cached GitHub telemetry endpoint
│   │   ├── globals.css           # Custom scrollbar, noise grain, crimson glow
│   │   ├── layout.tsx            # Metadata, OpenGraph, viewport, layout shell
│   │   └── page.tsx              # Assembled single-page cinematic experience
│   ├── components/
│   │   ├── Navbar.tsx            # Floating glass nav with active scroll spy
│   │   ├── Hero.tsx              # Bold typography, portrait frame, CTAs
│   │   ├── About.tsx             # Academic pedigree, 4 engineering pillars
│   │   ├── Projects.tsx          # Flagship cards & schematics
│   │   ├── ProjectModal.tsx      # Deep architectural case study modal
│   │   ├── Skills.tsx            # Categorized verified skills with tooltips
│   │   ├── Experience.tsx        # SCRS & Bits 'N' Bytes leadership cards
│   │   ├── Education.tsx         # CUIET B.E. CSE (AI & ML) 8.61 CGPA
│   │   ├── Achievements.tsx      # SAP HackFest 26 & CU Scholars' Summit
│   │   ├── Certifications.tsx    # Azure AI-900, AZ-900, IIT Roorkee GenAI
│   │   ├── Mindset.tsx           # Senku, Naruto, Ippo & Feynman quotes
│   │   ├── CodingActivity.tsx    # Live public GitHub activity dashboard
│   │   ├── Contact.tsx           # 1-click email copy & transmission terminal
│   │   ├── Footer.tsx            # Colophon & architectural links
│   │   ├── Mascot.tsx            # Interactive Kuro cyber-ninja companion
│   │   ├── MusicPlayer.tsx       # Ambient synth / custom audio controller
│   │   └── ScrollProgress.tsx    # Top edge crimson reading progress bar
│   ├── data/
│   │   ├── profile.ts            # Personal brand, headline, bio, status
│   │   ├── projects.ts           # Central source for Placey MACOS & GymFlow
│   │   ├── skills.ts             # Exact verified skill categories
│   │   ├── leadership.ts         # Vice Chairperson (SCRS), Promotions Head
│   │   ├── education.ts          # CUIET academic records & coursework
│   │   ├── achievements.ts       # Validated competitive & merit honors
│   │   ├── certifications.ts     # Microsoft & IIT Roorkee credentials
│   │   ├── quotes.ts             # Verified quotes & engineering reflections
│   │   └── socials.ts            # Social profiles & configurable placeholders
│   └── lib/
│       ├── utils.ts              # ClassName merge helper
│       └── synthAudio.ts         # Procedural ambient synth & audio engine
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## ✦ Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18.17+ or v20+ (Tested on Node v24)
- **npm** or **pnpm**

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ✦ How to Customize & Maintain

### How to Replace Your Portrait
Place your high-resolution portrait photograph at:
```bash
public/images/yash-portrait.jpg
```
The hero component automatically displays it with cinematic editorial treatment (monochrome with high contrast, glowing crimson ambient aura, and full-color hover transition). If the file is ever missing, a tasteful fallback state activates automatically.

### How to Add Custom Music
Drop an audio file (`.mp3`) at:
```bash
public/audio/ambient.mp3
```
If no audio file is provided, the website automatically utilizes its built-in **Web Audio API procedural ambient synthesizer**, playing a warm, relaxing, royalty-free cinematic chord progression (`Dm9`) without relying on external streaming services!

### How to Add or Update Projects
All project data is stored in a single central data file:
```
src/data/projects.ts
```
To add a new project, append an object to `projectsData` conforming to the `Project` interface. It will automatically render a premium showcase card and generate an interactive architectural modal case study.

### How to Configure Social Links
Edit:
```
src/data/socials.ts
```
- GitHub, LinkedIn, Email, and Credentials Portfolio are pre-configured.
- Unconfigured placeholders (LeetCode, Kaggle, X, Discord) are kept hidden with `url: null`. Simply set your public URL to automatically display them.

---

## ✦ Deployment to Vercel

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Yash Makkar cinematic portfolio"
   git remote add origin https://github.com/yashmakkar5/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset: **Next.js** (auto-detected).
5. (Optional) Set `GITHUB_TOKEN` under **Environment Variables** to bypass GitHub API rate limits.
6. Click **Deploy**. Your site will be live globally on Vercel's Edge Network in under 60 seconds!

---

## ✦ Quality Assurance & Verification
- [x] TypeScript compilation (`npx tsc --noEmit` passed with 0 errors).
- [x] Next.js production build (`npm run build` completed successfully).
- [x] Tested live server probe on port 3005 (HTTP 200 on `/` and `/api/github`).
- [x] Checked responsive design down to mobile viewports.
- [x] Tested Kuro mascot cursor trailing, idle animations, and exit-intent simulation.
- [x] Tested procedural synth audio engine without requiring external media assets.
- [x] Factual accuracy verified: no fabricated achievements, no fake progress percentages.
