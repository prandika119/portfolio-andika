import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  User,
} from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { mdxComponents } from "@/components/MDXComponents";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.frontmatter.title} | Case Study`,
    description: project.frontmatter.tagline,
    openGraph: {
      title: `${project.frontmatter.title} | Engineering Case Study`,
      description: project.frontmatter.tagline,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-10 py-4 max-w-3xl mx-auto">
      {/* 1. Breadcrumbs & Back Link */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-950 transition-colors"
        >
          <ArrowLeft size={13} />
          <span>All projects</span>
        </Link>

        <div className="hidden sm:flex items-center gap-1.5">
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            home
          </Link>
          <span>/</span>
          <Link href="/work" className="hover:text-zinc-900 transition-colors">
            projects
          </Link>
          <span>/</span>
          <span className="text-zinc-700 font-medium truncate max-w-[200px]">
            {project.slug}
          </span>
        </div>
      </div>

      {/* 2. Project Case Study Header */}
      <header className="space-y-4 pb-8 border-b border-zinc-200">
        {/* Status & Role Badges */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs">
          <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wider bg-zinc-900 text-white shadow-xs">
            {project.frontmatter.status}
          </span>

          <div className="flex items-center gap-1 text-zinc-600 font-mono text-xs">
            <User size={12} className="text-zinc-400" />
            <span>{project.frontmatter.role}</span>
          </div>

          <span className="text-zinc-300">·</span>

          <div className="flex items-center gap-1 text-zinc-500 font-mono text-xs">
            <Calendar size={12} className="text-zinc-400" />
            <span>{project.frontmatter.date}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-[1.2]">
          {project.frontmatter.title}
        </h1>

        {/* Tagline / Subtitle */}
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
          {project.frontmatter.tagline}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {project.frontmatter.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono text-zinc-700 bg-zinc-100 rounded border border-zinc-200/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          {project.frontmatter.repoUrl && (
            <a
              href={project.frontmatter.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors shadow-xs"
            >
              <Github size={14} />
              View Source Repository
            </a>
          )}

          {project.frontmatter.demoUrl && (
            <a
              href={project.frontmatter.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg border border-zinc-200 transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo / Service
            </a>
          )}
        </div>
      </header>

      {/* 3. Case Study Body */}
      <main className="prose prose-zinc max-w-none text-zinc-800">
        <MDXRemote
          source={project.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </main>

      {/* 4. Case Study Footer & Author Card */}
      <footer className="pt-8 border-t border-zinc-200 space-y-6">
        <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/70 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Author & Engineering Context
              </div>
              <div className="text-sm font-bold text-zinc-900">
                Andika Dwi Prasetya
              </div>
              <p className="text-xs text-zinc-600 max-w-md leading-relaxed">
                Software Engineering student at Universitas Gadjah Mada. This case
                study captures problem framing, architecture, trade-offs, and
                debugging outcomes.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://github.com/prandika"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60 rounded-md transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/andika-dwi-prasetya-3a529b299"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60 rounded-md transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:andika.dwiprasetya119@gmail.com"
                className="p-2 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60 rounded-md transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft size={13} /> Back to all projects
          </Link>

          <Link
            href="/notes"
            className="text-xs font-mono text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Read technical notes →
          </Link>
        </div>
      </footer>
    </div>
  );
}
