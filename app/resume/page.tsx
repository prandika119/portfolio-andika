import type { Metadata } from "next";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Users,
  Wrench,
} from "lucide-react";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Curriculum Vitae and professional track record of Andika Dwi Prasetya, Software Engineer.",
};

const education = [
  {
    institution: "Universitas Gadjah Mada",
    degree: "Bachelor of Applied Science in Software Engineering Technology",
    period: "Jul 2023 — Present",
    location: "Yogyakarta, Indonesia",
    details: "Current GPA: 3.81 of 4.00 (5th Semester). Focused on backend architecture, systems, and healthcare informatics.",
  },
  {
    institution: "SMA Negeri 1 Ajibarang",
    degree: "Mathematics and Natural Sciences",
    period: "Jul 2020 — Jul 2023",
    location: "Banyumas, Central Java",
    details: "Graduated with honors in science stream.",
  },
];

const selectedProjects = [
  {
    title: "AI-Powered Telegram Chatbot for Hotel Reviews",
    period: "Aug — Nov 2025",
    stack: ["n8n", "Telegram API", "OpenAI / LLM API", "SQL"],
    description:
      "Automated hotel review workflow that processes guest inquiries, connects with internal database records, and generates contextual answers via Telegram bot.",
  },
  {
    title: "NutriTrack x HealthMap (Interoperable Nutrition Monitoring System)",
    period: "Jun 2025",
    stack: ["REST API", "PostgreSQL", "FHIR Concept", "State Management"],
    description:
      "Engineered an interoperable data-sharing bridge connecting regional malnutrition tracking with spatial health mapping using standardized API contracts.",
  },
  {
    title: "Sports Field Rental Management System",
    period: "Dec 2024",
    stack: ["Laravel", "MySQL", "PHP", "Tailwind CSS", "Alpine JS"],
    description:
      "Architected relational schema and booking conflict-resolution algorithms to manage multi-court venue reservations and schedule availability.",
  },
];

const skills = [
  {
    category: "Languages",
    items: "Python, TypeScript, JavaScript, PHP, Go, SQL, HTML, CSS",
  },
  {
    category: "Backend & Frameworks",
    items: "FastAPI, Next.js, Express.js, Laravel, RESTful API Design, Node.js",
  },
  {
    category: "AI & Databases",
    items: "RAG Pipeline, Ollama (Local LLM), Vector Databases, PostgreSQL, MySQL",
  },
  {
    category: "Tools & Infrastructure",
    items: "Linux, Docker, Git, GitHub, Tailscale, Postman, Nginx, Caddy, OBS Studio",
  },
];

const organizations = [
  {
    role: "Media & IT Support Staff",
    org: "Ramadhan Di Kampus (RDK) UGM 1445H",
    period: "Mar 2024",
    description:
      "Managed live-streaming broadcasts via OBS Studio and resolved technical audio/camera latency during daily national Ramadan webinar series.",
  },
  {
    role: "Creative Media Staff",
    org: "Jamaah Shalahudin UGM",
    period: "Oct 2023 — Mar 2024",
    description:
      "Produced educational video assets for digital university branding and maintained media documentation archives.",
  },
  {
    role: "Head of Media Division",
    org: "SMANA Masuk Kampus 7.0 (Edu Fair)",
    period: "Dec 2023",
    description:
      "Supervised the creative publication team and coordinated marketing material across regional university admission channels.",
  },
];

export default function ResumePage() {
  return (
    <div className="space-y-12 py-4">
      {/* 1. Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-zinc-200">
        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            {"// Curriculum Vitae"}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
            Andika Dwi Prasetya
          </h1>
          <p className="text-sm text-zinc-600 font-medium">
            Software Engineer · Healthcare IT & AI Systems Explorer
          </p>

          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 pt-1 text-xs text-zinc-500">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-zinc-400" /> Sleman, Yogyakarta
            </span>
            <span className="flex items-center gap-1">
              <Phone size={13} className="text-zinc-400" /> +62 895-3849-86610
            </span>
            <a
              href="mailto:andika.dwiprasetya119@gmail.com"
              className="flex items-center gap-1 text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              <Mail size={13} className="text-zinc-400" /> andika.dwiprasetya119@gmail.com
            </a>
          </div>
        </div>

        {/* PDF Download Button */}
        <div className="sm:shrink-0 pt-2 sm:pt-0">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="CV_Andika_Dwi_Prasetya.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg shadow-sm transition-colors"
          >
            <ArrowDownToLine size={15} />
            Download PDF Resume
          </a>
        </div>
      </div>

      {/* 2. Executive Summary */}
      <section className="space-y-3">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          Executive Summary
        </h2>
        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed max-w-3xl">
          Software Engineering Technology student at Universitas Gadjah Mada (GPA 3.81/4.00)
          with production internship experience building scalable web applications, local
          Retrieval-Augmented Generation (RAG) pipelines, and multi-tenant architectures.
          Passionate about backend systems engineering, Linux environments, and developing
          interoperable healthcare data systems aligned with HL7 FHIR and SATUSEHAT standards.
        </p>
      </section>

      {/* 3. Professional Experience */}
      <section className="space-y-6 pt-4 border-t border-zinc-200">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-zinc-400" />
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <article key={exp.company + exp.role} className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-sm font-bold text-zinc-900">{exp.role}</h3>
                  <div className="text-xs font-medium text-zinc-700">
                    {exp.company} · <span className="text-zinc-500 font-normal">{exp.location}</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-zinc-400 shrink-0">
                  {exp.duration}
                </div>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <ul className="space-y-1.5 text-xs text-zinc-700 pl-4 list-disc marker:text-zinc-400">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {resp}
                  </li>
                ))}
              </ul>

              {/* Key Contributions */}
              {exp.keyContributions.length > 0 && (
                <div className="p-3 rounded-lg bg-zinc-100/80 border border-zinc-200/60 space-y-1 text-xs">
                  <div className="font-semibold text-zinc-800 text-[11px] font-mono">
                    Key Achievements:
                  </div>
                  <ul className="space-y-1 text-zinc-600 pl-3 list-disc marker:text-zinc-400">
                    {exp.keyContributions.map((contrib, idx) => (
                      <li key={idx}>{contrib}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1 pt-1">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-mono text-zinc-600 bg-zinc-50 rounded border border-zinc-200/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Education */}
      <section className="space-y-4 pt-4 border-t border-zinc-200">
        <div className="flex items-center gap-2">
          <GraduationCap size={16} className="text-zinc-400" />
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Education
          </h2>
        </div>

        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.institution} className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-sm font-bold text-zinc-900">{edu.institution}</h3>
                  <div className="text-xs text-zinc-700">{edu.degree}</div>
                </div>
                <div className="text-xs font-mono text-zinc-400 shrink-0">
                  {edu.period}
                </div>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Selected Projects */}
      <section className="space-y-4 pt-4 border-t border-zinc-200">
        <div className="flex items-center gap-2">
          <FolderGit2 size={16} className="text-zinc-400" />
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Selected Projects
          </h2>
        </div>

        <div className="space-y-4">
          {selectedProjects.map((proj) => (
            <div key={proj.title} className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm font-bold text-zinc-900">{proj.title}</h3>
                <div className="text-xs font-mono text-zinc-400 shrink-0">
                  {proj.period}
                </div>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {proj.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-mono text-zinc-600 bg-zinc-50 rounded border border-zinc-200/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Technical Skills */}
      <section className="space-y-4 pt-4 border-t border-zinc-200">
        <div className="flex items-center gap-2">
          <Wrench size={16} className="text-zinc-400" />
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {skills.map((s) => (
            <div key={s.category} className="p-3.5 rounded-xl border border-zinc-200 bg-white space-y-1">
              <div className="text-xs font-bold text-zinc-900">{s.category}</div>
              <div className="text-xs font-mono text-zinc-600 leading-relaxed">
                {s.items}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Organizational & Leadership */}
      <section className="space-y-4 pt-4 border-t border-zinc-200">
        <div className="flex items-center gap-2">
          <Users size={16} className="text-zinc-400" />
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Leadership & Campus Involvement
          </h2>
        </div>

        <div className="space-y-3">
          {organizations.map((org) => (
            <div key={org.role + org.org} className="space-y-0.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="text-xs font-bold text-zinc-900">
                  {org.role} · <span className="font-normal text-zinc-600">{org.org}</span>
                </div>
                <div className="text-xs font-mono text-zinc-400 shrink-0">
                  {org.period}
                </div>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {org.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-100/60 flex items-center justify-between gap-4">
        <div className="text-xs text-zinc-600">
          Looking for a full copy for your hiring records?
        </div>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors shrink-0"
        >
          Download PDF CV <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
