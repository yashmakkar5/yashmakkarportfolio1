export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialCode?: string;
  badgeType: "Microsoft" | "IIT Roorkee";
  description: string;
  topics: string[];
}

export const certificationsData: Certification[] = [
  {
    id: "azure-ai-900",
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    credentialCode: "AI-900",
    badgeType: "Microsoft",
    description:
      "Validates foundational knowledge of machine learning, computer vision, natural language processing, conversational AI, and responsible AI principles on Microsoft Azure.",
    topics: [
      "Machine Learning Workloads",
      "Computer Vision on Azure",
      "Natural Language Processing",
      "Conversational AI",
      "Responsible AI Principles"
    ]
  },
  {
    id: "azure-az-900",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    credentialCode: "AZ-900",
    badgeType: "Microsoft",
    description:
      "Demonstrates foundational understanding of cloud concepts, core Azure architectural components, security, identity, governance, and cloud cost management.",
    topics: [
      "Cloud Computing Concepts",
      "Core Azure Architecture",
      "Azure Compute & Storage",
      "Security & Network Isolation",
      "Governance & Compliance"
    ]
  },
  {
    id: "iit-roorkee-genai",
    title: "Generative AI Certificate Course",
    issuer: "iHUB DivyaSampark, IIT Roorkee",
    badgeType: "IIT Roorkee",
    description:
      "Comprehensive certification covering modern Generative AI foundations, transformer architectures, latent diffusion models, prompt engineering, and LLM orchestration.",
    topics: [
      "Transformer Architectures",
      "Large Language Models (LLMs)",
      "Diffusion Models",
      "Prompt Optimization Strategies",
      "Generative AI Implementation"
    ]
  }
];

export const CREDENTIALS_REPOSITORY_URL = "https://github.com/yashmakkar5/credentials-portfolio";
