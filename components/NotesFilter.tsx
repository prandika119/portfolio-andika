"use client";

import { useState } from "react";
import { CategoryMeta, NoteItem } from "@/types/content";
import { NoteCard } from "./NoteCard";
import { BookOpen } from "lucide-react";

interface NotesFilterProps {
  initialNotes: NoteItem[];
  categories: CategoryMeta[];
}

export function NotesFilter({ initialNotes, categories }: NotesFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredNotes =
    selectedCategory === "all"
      ? initialNotes
      : initialNotes.filter((note) => note.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Pills Filter */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
            selectedCategory === "all"
              ? "bg-zinc-900 text-white font-semibold shadow-xs"
              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
          }`}
        >
          Semua ({initialNotes.length})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setSelectedCategory(cat.slug)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              selectedCategory === cat.slug
                ? "bg-zinc-900 text-white font-semibold shadow-xs"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
            }`}
          >
            {cat.name} ({cat.count})
          </button>
        ))}
      </div>

      {/* Notes List or Empty State */}
      {filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 gap-5">
          {filteredNotes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/50 space-y-3">
          <div className="inline-flex p-3 rounded-full bg-zinc-100 text-zinc-400">
            <BookOpen size={24} />
          </div>
          <div className="text-sm font-semibold text-zinc-800">
            Belum ada catatan pada kategori ini
          </div>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto">
            Artikel pada topik ini sedang dalam tahap riset eksperimen atau
            penulisan draf. Kunjungi kembali dalam beberapa waktu!
          </p>
          <button
            onClick={() => setSelectedCategory("all")}
            className="text-xs font-mono text-zinc-700 underline hover:text-zinc-900 pt-1"
          >
            ← Lihat semua catatan
          </button>
        </div>
      )}
    </div>
  );
}
