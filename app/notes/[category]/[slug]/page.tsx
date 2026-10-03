import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Github,
  Linkedin,
  Mail,
  Tag,
} from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllNotes, getNoteBySlug } from "@/lib/content";
import { mdxComponents } from "@/components/MDXComponents";
import { NoteCategory } from "@/types/content";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

const categoryBadgeStyles: Record<NoteCategory, string> = {
  healthcare: "bg-emerald-50 text-emerald-700 border-emerald-200",
  ai: "bg-blue-50 text-blue-700 border-blue-200",
  systems: "bg-purple-50 text-purple-700 border-purple-200",
  backend: "bg-amber-50 text-amber-700 border-amber-200",
  networking: "bg-indigo-50 text-indigo-700 border-indigo-200",
  iot: "bg-teal-50 text-teal-700 border-teal-200",
  general: "bg-zinc-100 text-zinc-700 border-zinc-200",
};

export async function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({
    category: note.category,
    slug: note.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const note = getNoteBySlug(category, slug);

  if (!note) {
    return {
      title: "Note Not Found",
    };
  }

  return {
    title: note.frontmatter.title,
    description: note.frontmatter.description,
    openGraph: {
      title: `${note.frontmatter.title} | Andika Dwi Prasetya`,
      description: note.frontmatter.description,
      type: "article",
      publishedTime: note.frontmatter.date,
      tags: note.frontmatter.tags,
    },
  };
}

export default async function NoteDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const note = getNoteBySlug(category, slug);

  if (!note) {
    notFound();
  }

  const badgeStyle =
    categoryBadgeStyles[note.category] || categoryBadgeStyles.general;

  return (
    <div className="space-y-10 py-4 max-w-3xl mx-auto">
      {/* 1. Breadcrumbs & Back Link */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
        <Link
          href="/notes"
          className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-950 transition-colors"
        >
          <ArrowLeft size={13} />
          <span>All notes</span>
        </Link>

        <div className="hidden sm:flex items-center gap-1.5">
          <Link href="/" className="hover:text-zinc-900 transition-colors">
            home
          </Link>
          <span>/</span>
          <Link href="/notes" className="hover:text-zinc-900 transition-colors">
            notes
          </Link>
          <span>/</span>
          <span className="text-zinc-700 font-medium">{note.category}</span>
        </div>
      </div>

      {/* 2. Article Header */}
      <header className="space-y-4 pb-8 border-b border-zinc-200">
        {/* Metadata Badges */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span
            className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold border uppercase tracking-wider ${badgeStyle}`}
          >
            {note.category}
          </span>

          <div className="flex items-center gap-1 text-zinc-500 font-mono text-xs">
            <Calendar size={13} className="text-zinc-400" />
            <span>{note.frontmatter.date}</span>
          </div>

          <div className="flex items-center gap-1 text-zinc-500 font-mono text-xs">
            <Clock size={13} className="text-zinc-400" />
            <span>{note.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 leading-[1.2]">
          {note.frontmatter.title}
        </h1>

        {/* Subtitle / Context description */}
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
          {note.frontmatter.description}
        </p>

        {/* Tags row */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          {note.frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-mono text-zinc-600 bg-zinc-100 rounded border border-zinc-200"
            >
              <Tag size={10} className="text-zinc-400" />
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* 3. MDX Body Content */}
      <main className="prose prose-zinc max-w-none text-zinc-800">
        <MDXRemote
          source={note.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </main>

      {/* 4. Article Footer & Author Card */}
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
                Software Engineering student at Universitas Gadjah Mada. Writing
                about practical backend systems, healthcare data interoperability,
                and local AI implementations.
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
            href="/notes"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
          >
            <ArrowLeft size={13} /> Back to all notes
          </Link>

          <Link
            href="/work"
            className="text-xs font-mono text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Explore related projects →
          </Link>
        </div>
      </footer>
    </div>
  );
}
