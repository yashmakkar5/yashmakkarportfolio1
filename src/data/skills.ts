export interface SkillCategory {
  category: string;
  tagline: string;
  iconName: string;
  skills: {
    name: string;
    description?: string;
    isPrimary?: boolean;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "AI/ML & Generative AI",
    tagline: "Autonomous multi-agent architectures, model orchestration, and cognitive workflows",
    iconName: "BrainCircuit",
    skills: [
      { name: "Multi-Agent Systems", isPrimary: true, description: "Agent orchestration & collaborative workflows" },
      { name: "Agentic Workflows", isPrimary: true, description: "Goal-directed tool-use & reflection loops" },
      { name: "LangChain", isPrimary: true, description: "Chains, retrieval, and runtime tools" },
      { name: "LangGraph", isPrimary: true, description: "Cyclic state machines for multi-agent graphs" },
      { name: "OpenAI API", isPrimary: true, description: "GPT models, structured outputs, function calling" },
      { name: "Prompt Engineering", description: "Few-shot prompting, schema anchoring, context minimization" },
      { name: "PyTorch", description: "Deep learning model development & training" },
      { name: "TensorFlow", description: "Neural networks & computational graphs" },
      { name: "Scikit-learn", description: "Supervised & unsupervised statistical modeling" }
    ]
  },
  {
    category: "Cloud & AI Infrastructure",
    tagline: "Enterprise cloud primitives and modern AI platform integration",
    iconName: "Cloud",
    skills: [
      { name: "Microsoft Azure", isPrimary: true, description: "Core compute, identity, storage, and networking" },
      { name: "Azure AI Foundry", isPrimary: true, description: "Model deployment, evaluation, and router endpoints" },
      { name: "Azure OpenAI", isPrimary: true, description: "Enterprise-grade LLM instance management" },
      { name: "Azure Machine Learning", description: "Model training jobs, registry, and workspaces" }
    ]
  },
  {
    category: "Programming Languages",
    tagline: "Strong foundations across typed systems, systems programming, and high-level scripting",
    iconName: "Code2",
    skills: [
      { name: "Python", isPrimary: true, description: "AI/ML pipelines, backend services, script automation" },
      { name: "TypeScript", isPrimary: true, description: "Strict static typing, full-stack schemas, Next.js" },
      { name: "JavaScript", isPrimary: true, description: "Modern ES6+, asynchronous event loops, Node.js" },
      { name: "C++", description: "Object-oriented programming, performance-critical algorithms" },
      { name: "Java", description: "OOP design principles, robust enterprise foundations" }
    ]
  },
  {
    category: "Frameworks & Development",
    tagline: "High-throughput servers, server-rendered apps, and robust API contracts",
    iconName: "Layers",
    skills: [
      { name: "Next.js", isPrimary: true, description: "App router, server components, edge optimization" },
      { name: "React.js", isPrimary: true, description: "Component lifecycles, hooks, responsive interfaces" },
      { name: "Node.js", isPrimary: true, description: "Asynchronous I/O, server runtimes, event drivers" },
      { name: "Express.js", isPrimary: true, description: "RESTful routing, middleware pipelines, security" },
      { name: "REST APIs", isPrimary: true, description: "Contract design, status handling, stateless protocols" },
      { name: "Flask", description: "Lightweight Python microservices and API gateways" },
      { name: "Django", description: "Batteries-included web framework and ORM pipelines" }
    ]
  },
  {
    category: "Databases & Data Storage",
    tagline: "Relational integrity, multi-tenant partitioning, and document flexibility",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", isPrimary: true, description: "Complex joins, indexing strategies, ACID compliance" },
      { name: "MongoDB", isPrimary: true, description: "Aggregation pipelines, flexible document schemas" },
      { name: "MySQL", description: "Relational database design and query optimization" }
    ]
  },
  {
    category: "Core CS & Engineering Tools",
    tagline: "Engineering fundamentals, software architecture, and developer workflows",
    iconName: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", isPrimary: true, description: "Time/space complexity, graphs, dynamic programming" },
      { name: "System Design", isPrimary: true, description: "Scalability, caching, modularity, reliability" },
      { name: "Software Architecture", isPrimary: true, description: "Clean architecture, separation of concerns, DRY" },
      { name: "Linux", description: "Bash scripting, server environments, file permissions" },
      { name: "Git", description: "Version control, branching workflows, pull requests" },
      { name: "GitHub", description: "CI/CD actions, repo collaboration, open source" }
    ]
  }
];
