export interface SocialLink {
  id: string;
  name: string;
  url: string | null; // null if unconfigured
  displayHandle?: string;
  icon: string;
  description: string;
  primary?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/yashmakkar5",
    displayHandle: "@yashmakkar5",
    icon: "Github",
    description: "Open-source projects, agent architectures, and source code",
    primary: true
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yashmakkar5",
    displayHandle: "in/yashmakkar5",
    icon: "Linkedin",
    description: "Professional updates, engineering posts, and networking",
    primary: true
  },
  {
    id: "credentials",
    name: "Credentials Portfolio",
    url: "https://github.com/yashmakkar5/credentials-portfolio",
    displayHandle: "yashmakkar5/credentials-portfolio",
    icon: "Award",
    description: "Verified certificates, course completion records, and academic honors",
    primary: true
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:yyaasshh555@gmail.com",
    displayHandle: "yyaasshh555@gmail.com",
    icon: "Mail",
    description: "Direct inquiries, technical discussions, and collaborative opportunities",
    primary: true
  },
  // Configurable placeholders — keep url as null until user sets their specific username/handle
  {
    id: "leetcode",
    name: "LeetCode",
    url: null, // Set to "https://leetcode.com/u/<username>" when available
    displayHandle: "Configure in src/data/socials.ts",
    icon: "Code",
    description: "Algorithmic problem-solving and data structure practices"
  },
  {
    id: "kaggle",
    name: "Kaggle",
    url: null, // Set to "https://www.kaggle.com/<username>" when available
    displayHandle: "Configure in src/data/socials.ts",
    icon: "Database",
    description: "Machine learning competitions and datasets"
  },
  {
    id: "x",
    name: "X (Twitter)",
    url: null, // Set to "https://x.com/<username>" when available
    displayHandle: "Configure in src/data/socials.ts",
    icon: "Twitter",
    description: "Engineering thoughts, AI updates, and tech discourse"
  },
  {
    id: "discord",
    name: "Discord",
    url: null, // Set to "https://discord.com/users/<userId>" when available
    displayHandle: "Configure in src/data/socials.ts",
    icon: "MessageSquare",
    description: "Developer communities and real-time chat"
  }
];

// Helper to filter out unconfigured platforms
export const configuredSocials = socialLinks.filter((item): item is SocialLink & { url: string } => item.url !== null);
