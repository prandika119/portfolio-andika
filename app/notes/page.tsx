import type { Metadata } from "next";
import { getAllCategories, getAllNotes } from "@/lib/content";
import { NotesFilter } from "@/components/NotesFilter";

export const metadata: Metadata = {
  title: "Catatan Teknis",
  description:
    "Buku catatan rekayasa perangkat lunak, eksplorasi teknis mendalam, dan jurnal pembelajaran oleh Andika Dwi Prasetya. Fokus pada teknologi kesehatan (SATUSEHAT & HL7 FHIR), AI/RAG, dan sistem backend.",
};

export default function NotesPage() {
  const notes = getAllNotes();
  const categories = getAllCategories();

  return (
    <div className="space-y-12 py-4">
      {/* Page Header */}
      <section className="space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          {"// Tulisan Teknis & Jurnal Pembelajaran"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          Catatan Teknis
        </h1>
        <p className="text-base text-zinc-600 leading-relaxed max-w-2xl">
          Mendokumentasikan apa yang saya bangun, kendala yang dihadapi, dan
          pembelajaran teknis yang dipetik. Eksplorasi mendalam, catatan
          kegagalan, dan refleksi arsitektur yang ditulis langsung dari pengalaman nyata.
        </p>
      </section>

      {/* Interactive Filter & Notes Grid */}
      <section>
        <NotesFilter initialNotes={notes} categories={categories} />
      </section>
    </div>
  );
}
