import { ExperienceItem } from "@/types/content";

export const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer & AI Engineer Intern",
    company: "PT Parama Data Unit",
    duration: "Feb — Jun 2026",
    location: "Yogyakarta, Indonesia (Hybrid)",
    description:
      "Developed an AI-powered Document Management System utilizing Retrieval-Augmented Generation (RAG) to facilitate intelligent and automated document querying across enterprise files.",
    responsibilities: [
      "Built a high-performance backend using FastAPI (Python) to drive the RAG pipeline and securely integrate local Large Language Models (LLMs) via Ollama.",
      "Engineered an intuitive, responsive user interface using Next.js to provide a seamless document management and querying experience.",
      "Utilized Express.js to orchestrate API request lifecycles and optimize the data exchange bridge between frontend interfaces and backend inference pipelines.",
      "Implemented document chunking, vector embedding generation, and retrieval-quality evaluation to minimize model hallucinations.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Ollama",
      "RAG",
      "Vector DB",
      "Express.js",
      "Docker",
    ],
    keyContributions: [
      "Decreased document retrieval latency significantly through optimized chunking and asynchronous vector search.",
      "Constructed citation tracking in the RAG pipeline so every AI response cites specific source document pages.",
    ],
    lessonsLearned: [
      "Realized that RAG answer quality depends 80% on document parsing and retrieval precision rather than LLM size alone.",
      "Gained deep experience in managing local LLM inference memory constraints and stream responses.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "PT Jaya Perkasa Mandalika",
    duration: "Oct — Nov 2025",
    location: "Remote, Indonesia",
    description:
      "Handled a multi-tenant Software-as-a-Service (SaaS) platform using Laravel, supporting centralized data management for diverse business clients.",
    responsibilities: [
      "Maintained multi-tenant database isolation and role-based access control (RBAC).",
      "Collaborated with cross-functional teams via Git and GitHub to resolve frontend-backend data integration bottlenecks.",
      "Diagnosed and resolved dynamic data rendering issues to ensure high availability and responsiveness.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS", "Git"],
    keyContributions: [
      "Streamlined client onboarding by automating tenant workspace provisioning.",
      "Fixed data leakage edge cases between tenant organizations within shared queries.",
    ],
    lessonsLearned: [
      "Mastered multi-tenant database architectures (shared database with tenant discriminator vs schema isolation).",
      "Strengthened asynchronous team collaboration with pull request reviews and Git branch workflows.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Digital Hero Indonesia",
    duration: "Jul 2022 — Dec 2023",
    location: "Remote, Indonesia",
    description:
      "Developed a web-based Rental Management System using Laravel, contributing within an Agile Scrum framework to deliver production-ready features.",
    responsibilities: [
      "Designed relational schemas and business logic for booking schedules, facility availability, and payment tracking.",
      "Participated actively in sprint planning, backlog refinement, daily standups, and retrospective meetings.",
      "Managed source code versioning and release branches using Git and GitHub.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "Git", "Scrum"],
    keyContributions: [
      "Shipped automated reservation conflict detection preventing double-booking of rental assets.",
      "Delivered features on schedule across multiple sprint cycles with zero critical production blockers.",
    ],
    lessonsLearned: [
      "Built a strong foundation in database normalization and SQL query optimization.",
      "Learned the value of writing clean, self-documenting code in long-term team maintenance.",
    ],
  },
];
