import type { Metadata } from "next";
import { getAllCategories, getAllNotes } from "@/lib/content";
import { NotesFilter } from "@/components/NotesFilter";

export const metadata: Metadata = {
  title: "Technical Notes",
  description:
    "Engineering notebook, technical deep-dives, and learning logs by Andika Dwi Prasetya. Exploring healthcare IT, AI/RAG, and backend systems.",
};

export default function NotesPage() {
  const notes = getAllNotes();
  const categories = getAllCategories();

  return (
    <div className="space-y-12 py-4">
      {/* Page Header */}
      <section className="space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          {"// Technical Writing & Learning Journal"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          Technical Notes
        </h1>
        <p className="text-base text-zinc-600 leading-relaxed max-w-2xl">
          Documenting what I build, what I break, and what I learn. Engineering
          deep-dives, failure logs, and architectural reflections written from
          direct experience.
        </p>
      </section>

      {/* Interactive Filter & Notes Grid */}
      <section>
        <NotesFilter initialNotes={notes} categories={categories} />
      </section>
    </div>
  );
}
