import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Cpu,
  FileText,
  FolderGit2,
  Mail,
  Network,
  Sparkles,
} from "lucide-react";
import { getAllNotes, getAllProjects } from "@/lib/content";
import { experiences } from "@/data/experience";

export default function HomePage() {
  const notes = getAllNotes().slice(0, 3);
  const projects = getAllProjects().slice(0, 3);
  const recentExperience = experiences.slice(0, 2);

  return (
    <div className="space-y-20 py-4">
      {/* 1. Hero Section */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-zinc-600 bg-zinc-100 rounded-full border border-zinc-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle"></span>
          <span>Available for engineering roles & collaboration</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15]">
          Software Engineer exploring{" "}
          <span className="text-zinc-500 font-normal">
            healthcare interoperability, AI systems, and infrastructure.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
          I&apos;m Andika Dwi Prasetya, a Software Engineering Technology student at
          Universitas Gadjah Mada. I document what I build, what I break, and what
          I learn—from HL7 FHIR and SATUSEHAT APIs to local RAG pipelines and home
          server infrastructure.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors shadow-sm"
          >
            <FolderGit2 size={16} />
            Explore Work
          </Link>
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 hover:text-zinc-900 rounded-lg border border-zinc-200 transition-colors"
          >
            <BookOpen size={16} />
            Read Notes
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 hover:text-zinc-900 rounded-lg border border-zinc-200 transition-colors"
          >
            <FileText size={16} />
            Resume
          </Link>
        </div>
      </section>

      {/* 2. Current Focus Grid */}
      <section className="space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          Current Focus & Exploration
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Healthcare */}
          <div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-zinc-900 font-semibold text-sm">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <Network size={16} />
              </div>
              Healthcare IT
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              HL7 FHIR standards, SATUSEHAT sandbox integrations, clinical data
              pipelines, and healthcare interoperability.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["HL7 FHIR", "SATUSEHAT", "REST API", "PostgreSQL"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-mono text-zinc-600 bg-zinc-50 rounded border border-zinc-200/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* AI / RAG */}
          <div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-zinc-900 font-semibold text-sm">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200/60">
                <Sparkles size={16} />
              </div>
              AI & RAG Systems
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Retrieval-Augmented Generation, local LLM orchestration via Ollama,
              FastAPI pipelines, and retrieval evaluation.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["RAG", "FastAPI", "Ollama", "Vector DB"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-mono text-zinc-600 bg-zinc-50 rounded border border-zinc-200/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Systems & Linux */}
          <div className="p-5 rounded-xl border border-zinc-200 bg-white shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-zinc-900 font-semibold text-sm">
              <div className="p-2 rounded-lg bg-purple-50 text-purple-700 border border-purple-200/60">
                <Cpu size={16} />
              </div>
              Systems & Infra
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Linux administration, Docker containerization, home lab self-hosting,
              reverse proxies, and networking.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Linux", "Docker", "Tailscale", "HomeLab"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-mono text-zinc-600 bg-zinc-50 rounded border border-zinc-200/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Engineering Projects */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900">
              Featured Work
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Flagship engineering implementations and case studies.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-xs font-mono text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            All projects <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group p-5 sm:p-6 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-semibold text-zinc-700 bg-zinc-100 rounded border border-zinc-200">
                      {project.frontmatter.status}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {project.frontmatter.role}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.frontmatter.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {project.frontmatter.tagline}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.frontmatter.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono text-zinc-600 bg-zinc-50 rounded border border-zinc-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="sm:shrink-0 pt-2 sm:pt-0">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-zinc-900 group-hover:translate-x-0.5 transition-transform"
                  >
                    View case study <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Latest Technical Notes */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900">
              Latest Notes
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Reflections, debugging logs, and deep-dives written from experience.
            </p>
          </div>
          <Link
            href="/notes"
            className="inline-flex items-center gap-1 text-xs font-mono text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            All notes <ArrowRight size={13} />
          </Link>
        </div>

        <div className="divide-y divide-zinc-200/80 border-y border-zinc-200/80">
          {notes.map((note) => (
            <article
              key={note.slug}
              className="py-5 group flex flex-col sm:flex-row sm:items-baseline justify-between gap-3"
            >
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="uppercase text-[11px] font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">
                    {note.category}
                  </span>
                  <span>·</span>
                  <span>{note.frontmatter.date}</span>
                  <span>·</span>
                  <span>{note.readingTime}</span>
                </div>

                <h3 className="text-base font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                  <Link href={`/notes/${note.category}/${note.slug}`}>
                    {note.frontmatter.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                  {note.frontmatter.description}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <Link
                  href={`/notes/${note.category}/${note.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors"
                >
                  Read note <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Experience Snapshot */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-zinc-900">
              Professional Experience
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              Roles and technical contributions in production teams.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-xs font-mono text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Full timeline <ArrowRight size={13} />
          </Link>
        </div>

        <div className="space-y-4">
          {recentExperience.map((exp) => (
            <div
              key={exp.company + exp.role}
              className="p-5 rounded-xl border border-zinc-200 bg-white space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-sm font-bold text-zinc-900">{exp.role}</h3>
                  <div className="text-xs font-medium text-zinc-700">
                    {exp.company}
                  </div>
                </div>
                <div className="text-xs font-mono text-zinc-400">
                  {exp.duration}
                </div>
              </div>

              <p className="text-xs text-zinc-600 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1 pt-1">
                {exp.technologies.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-mono text-zinc-600 bg-zinc-50 rounded border border-zinc-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact & Collaboration */}
      <section className="p-8 rounded-2xl border border-zinc-200 bg-zinc-100/60 space-y-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-lg">
            <h2 className="text-lg sm:text-xl font-bold text-zinc-900">
              Let&apos;s build something meaningful together.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Open to conversations about healthcare technology, backend systems,
              local RAG pipelines, or full-time / internship opportunities.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:andika.dwiprasetya119@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors shadow-xs"
            >
              <Mail size={14} />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/andika-dwi-prasetya-3a529b299"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-50 rounded-lg border border-zinc-200 transition-colors"
            >
              LinkedIn <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
