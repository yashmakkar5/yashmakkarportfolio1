export interface ProfileData {
  name: string;
  tagline: string;
  headline: string;
  bio: string[];
  status: {
    text: string;
    subtext: string;
    isAvailableForFreelance: boolean; // configurable: user stated do not claim freelance unless configured
    isOpenForOpportunities: boolean;
  };
  portrait: string;
  portraitPlaceholder: boolean;
  contactEmail: string;
  whatsappNumber: string;
  whatsappUrl: string;
  location: string;
  currentRole: string;
  institution: string;
}

export const profileData: ProfileData = {
  name: "Yash Makkar",
  headline: "AI/ML Engineer & Full-Stack Developer",
  tagline: "Building intelligent systems, useful products, and ideas that move beyond the screen.",
  currentRole: "Undergraduate Student — B.E. CSE (AI & ML)",
  institution: "CUIET, Chitkara University",
  location: "Punjab, India",
  portrait: "/images/yash-portrait.jpg",
  portraitPlaceholder: false,
  contactEmail: "yyaasshh555@gmail.com",
  whatsappNumber: "+91 98888 88888", // Easily customized in src/data/profile.ts
  whatsappUrl: "https://wa.me/919888888888?text=Hi%20Yash,%20saw%20your%20portfolio!",
  status: {
    text: "Building & Researching Multi-Agent Architectures",
    subtext: "B.E. CSE (AI & ML) Undergrad • CUIET",
    isAvailableForFreelance: false, // Honoring user prompt: do not claim freelance unless explicitly configured
    isOpenForOpportunities: true,
  },
  bio: [
    "I am an undergraduate student pursuing my Bachelor of Engineering in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at CUIET, Chitkara University (2024–2028).",
    "My focus centers on the intersection of deep intelligence and production software engineering: designing autonomous multi-agent systems, engineering robust full-stack applications, and building tools that ground theoretical machine learning into dependable, human-usable products.",
    "Rather than treating AI as an isolated prompt experiment or a static dashboard demo, I engineer complete pipelines—from structured LLM output routing and stateful agent coordination to resilient relational data stores and high-performance interfaces."
  ]
};
