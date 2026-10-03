import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { NoteCategory, NoteItem } from "@/types/content";

const categoryStyles: Record<NoteCategory, string> = {
  healthcare: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
  ai: "bg-blue-50 text-blue-700 border-blue-200/80",
  systems: "bg-purple-50 text-purple-700 border-purple-200/80",
  backend: "bg-amber-50 text-amber-700 border-amber-200/80",
  networking: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
  iot: "bg-teal-50 text-teal-700 border-teal-200/80",
  general: "bg-zinc-100 text-zinc-700 border-zinc-200",
};

interface NoteCardProps {
  note: NoteItem;
}

export function NoteCard({ note }: NoteCardProps) {
  const badgeStyle =
    categoryStyles[note.category] || categoryStyles.general;

  return (
    <article className="group p-5 sm:p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-xs transition-all space-y-3">
      {/* Topline Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border uppercase tracking-wider ${badgeStyle}`}
          >
            {note.category}
          </span>
          <span className="text-zinc-400 font-mono text-[11px]">
            {note.frontmatter.date}
          </span>
        </div>

        <div className="flex items-center gap-1 text-zinc-400 font-mono text-[11px]">
          <Clock size={12} />
          <span>{note.readingTime}</span>
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-1.5">
        <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors">
          <Link href={`/notes/${note.category}/${note.slug}`}>
            {note.frontmatter.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-zinc-600 line-clamp-2 leading-relaxed">
          {note.frontmatter.description}
        </p>
      </div>

      {/* Tags & Action Link */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-zinc-100">
        <div className="flex flex-wrap gap-1.5">
          {note.frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono text-zinc-600 bg-zinc-50 rounded border border-zinc-200/60"
            >
              #{tag}
            </span>
          ))}
        </div>

        <Link
          href={`/notes/${note.category}/${note.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-zinc-700 group-hover:text-zinc-950 transition-colors shrink-0"
        >
          Read note <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
