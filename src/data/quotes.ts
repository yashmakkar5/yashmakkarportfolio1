export interface MindsetQuote {
  id: string;
  quote: string;
  author: string;
  context: string;
  theme: "Scientific Curiosity" | "Resilience" | "Discipline" | "Empirical Truth";
  reflection: string;
}

export const mindsetQuotes: MindsetQuote[] = [
  {
    id: "senku",
    quote: "It's not that there are things science can't explain. It's that science is the steady, painstaking process of figuring them out.",
    author: "Senku Ishigami",
    context: "Dr. STONE (Riichiro Inagaki)",
    theme: "Scientific Curiosity",
    reflection:
      "Engineering is not magic; it is the discipline of breaking down impossibly complex systems into testable hypotheses and steady, reproducible iterations."
  },
  {
    id: "ippo",
    quote: "Not everyone who works hard is rewarded. However, all those who succeed have worked hard without exception.",
    author: "Genji Kamogawa",
    context: "Hajime no Ippo (George Morikawa) — Mentor to Ippo Makunouchi",
    theme: "Discipline",
    reflection:
      "Motivation comes and goes; deliberate, disciplined repetition is what transforms raw curiosity into genuine technical mastery."
  },
  {
    id: "naruto",
    quote: "Failing doesn't give you a reason to give up, as long as you believe and keep moving forward.",
    author: "Naruto Uzumaki",
    context: "Naruto (Masashi Kishimoto)",
    theme: "Resilience",
    reflection:
      "When debugging deeply nested systems or training models that collapse, resilience means viewing edge-case failures as data points rather than defeats."
  },
  {
    id: "feynman",
    quote: "What I cannot create, I do not understand.",
    author: "Richard P. Feynman",
    context: "Theoretical Physicist & Nobel Laureate (Final Blackboard, 1988)",
    theme: "Empirical Truth",
    reflection:
      "True technical competence is proven not by memorizing abstractions, but by building working systems from first principles."
  }
];
