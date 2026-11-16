export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: "AI & Multi-Agent Systems" | "Full-Stack & Distributed Systems";
  period: string;
  technologies: string[];
  description: string;
  github: string;
  liveDemo?: string;
  featured: boolean;
  architectureHighlights: string[];
  deepDive: {
    problemStatement: string;
    architectureOverview: string;
    keyEngineeringDecisions: {
      title: string;
      description: string;
    }[];
    impactAndOutcomes: string[];
  };
}

export const projectsData: Project[] = [
  {
    id: "placey-macos",
    title: "Placey MACOS",
    subtitle: "Multi-Agent Career & Skill Intelligence Platform",
    badge: "Multi-Agent AI Architecture",
    category: "AI & Multi-Agent Systems",
    period: "2024 — Present",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Azure AI Foundry",
      "GPT-4o",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    description:
      "A multi-agent AI platform designed to analyze candidate profiles, identify skill gaps, evaluate career requirements, and generate personalized career roadmaps through autonomous agent coordination.",
    github: "https://github.com/yashmakkar5/Placey-macos2",
    featured: true,
    architectureHighlights: [
      "Multi-agent AI pipeline for granular candidate profile analysis and deterministic roadmap generation",
      "Azure AI Foundry (GPT-4o) integration orchestrating a custom ModelRouter with context-isolated prompting",
      "Strict runtime TypeScript validation schemas enforcing normalization over non-deterministic LLM step emissions",
      "Comparative career-readiness matrix aligning real candidate artifacts with real-time market standards, persisted to Supabase"
    ],
    deepDive: {
      problemStatement:
        "Conventional career platforms rely either on brittle keyword parsing or generic single-prompt LLM wrappers that hallucinate progression tracks without measuring genuine candidate evidence against competitive industry benchmarks.",
      architectureOverview:
        "Placey MACOS decouples career intelligence into dedicated agent nodes: an Evidence Ingestion Agent, a Taxonomy Normalizer, a Market Benchmark Comparator, and a Sequential Trajectory Generator. Agents exchange strongly-typed JSON payloads routed via a custom ModelRouter built atop Azure AI Foundry.",
      keyEngineeringDecisions: [
        {
          title: "Custom ModelRouter & Context Isolation",
          description:
            "Implemented a custom ModelRouter that selectively queries Azure AI Foundry (GPT-4o) endpoints with task-scoped system prompts, minimizing token drift and preventing context pollution across multi-stage reasoning chains."
        },
        {
          title: "Schema Normalization on LLM Outputs",
          description:
            "Engineered rigorous TypeScript parsing layers to sanitize and validate LLM outputs at every inter-agent handover, guaranteeing zero catastrophic failures even when LLM output formats oscillate."
        },
        {
          title: "Relational Persistence & Telemetry via Supabase",
          description:
            "Structured career gaps, milestone dependencies, and validation states into relational PostgreSQL schemas on Supabase, enabling historical progression tracking and index-backed queries."
        }
      ],
      impactAndOutcomes: [
        "Eliminated generic hallucinated milestones by enforcing evidence-based gap analysis.",
        "Modularized agent handoffs so new specialized evaluators (e.g., Code Reviewer, System Design Assessor) can be plugged in without refactoring core routing.",
        "Demonstrated the viability of multi-agent cognitive architectures for high-consequence career planning."
      ]
    }
  },
  {
    id: "gymflow",
    title: "GymFlow",
    subtitle: "Multi-Tenant Gym Management Platform",
    badge: "Distributed Multi-Tenant System",
    category: "Full-Stack & Distributed Systems",
    period: "2024",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "JWT",
      "bcryptjs",
      "Multer",
      "REST APIs"
    ],
    description:
      "A production-grade multi-tenant gym management platform featuring strict tenant data isolation, role-based access control, automated attendance, subscription lifecycle management, and GST-compliant invoicing.",
    github: "https://github.com/yashmakkar5/gymflowmark2",
    featured: true,
    architectureHighlights: [
      "Tenant-specific data partitioning ensuring comprehensive isolation across gyms and franchises",
      "Hardened RESTful API endpoints secured by JWT session verification and bcryptjs password encryption",
      "Granular Role-Based Access Control (RBAC) governing owner, manager, trainer, and member tiers",
      "High-performance MongoDB aggregation pipelines computing real-time revenue analytics and retention trends",
      "Automated GST invoice generation and digital receipt rendering alongside Multer-backed media pipelines"
    ],
    deepDive: {
      problemStatement:
        "Independent fitness centres and regional franchise gyms routinely struggle with fragmented tooling: spreadsheets for attendance, offline books for GST receipts, and generic software that fails to maintain multi-branch data boundaries securely.",
      architectureOverview:
        "GymFlow is architected with a decoupled Node/Express REST backend enforcing tenant scoping at the database query layer. Every document model is scoped with an immutable tenant identifier validated by middleware, ensuring no cross-organization leakage.",
      keyEngineeringDecisions: [
        {
          title: "Strict Multi-Tenant Scoping Middleware",
          description:
            "Designed express middleware that extracts tenant context from verified JWT claims, automatically binding tenant constraints to every downstream MongoDB query and aggregation stage."
        },
        {
          title: "Aggregation Pipelines for Financial Telemetry",
          description:
            "Constructed multi-stage MongoDB aggregation pipelines to crunch monthly recurring revenue (MRR), attendance churn, and tax obligations without overloading application memory."
        },
        {
          title: "GST-Compliant Billing & Storage",
          description:
            "Automated calculated invoices featuring state/inter-state GST breakdowns, sequential numbering, and member ledger synchronization."
        }
      ],
      impactAndOutcomes: [
        "Streamlined daily check-in workflows and recurring subscription renewals under a unified dashboard.",
        "Provided instant financial clarity to gym owners through automated tax and revenue reporting.",
        "Proved robust architecture fundamentals in database partitioning, backend security, and role-based permissions."
      ]
    }
  }
];
