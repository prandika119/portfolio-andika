import Image from "next/image";
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
import { TechIcon } from "@/components/TechIcon";
import { OrgLogo } from "@/components/OrgLogo";

export default function HomePage() {
  const notes = getAllNotes().slice(0, 3);
  const projects = getAllProjects().slice(0, 3);
  const recentExperience = experiences.slice(0, 2);

  return (
    <div className="space-y-24 py-4 animate-fade-in">
      {/* 1. Hero Section (Asymmetrical 2-Column with Profile Hook) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-2">
        {/* Left Column (Text & CTAs) */}
        <div className="lg:col-span-7 space-y-6">

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.18]">
            Software Engineer yang mendalami{" "}
            <span className="text-zinc-500 font-normal">
              interoperabilitas data kesehatan, sistem AI lokal, dan arsitektur backend.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
            Halo! Saya <strong>Andika Dwi Prasetya</strong>, mahasiswa Teknologi
            Rekayasa Perangkat Lunak di Universitas Gadjah Mada (UGM). Saya fokus
            membangun sistem yang andal dan transparan—mulai dari integrasi standar
            HL7 FHIR & sandbox SATUSEHAT hingga pipeline RAG lokal dan server Linux mandiri.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all shadow-sm hover-lift"
            >
              <FolderGit2 size={16} />
              Eksplorasi Karya
            </Link>
            <Link
              href="/notes"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-700 bg-white hover:bg-zinc-50 hover:text-zinc-900 rounded-xl border border-zinc-200 transition-all shadow-2xs hover-lift"
            >
              <BookOpen size={16} />
              Baca Catatan
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-700 bg-white hover:bg-zinc-50 hover:text-zinc-900 rounded-xl border border-zinc-200 transition-all shadow-2xs hover-lift"
            >
              <FileText size={16} />
              Resume / CV
            </Link>
          </div>

          {/* Quick Tech Arsenal Strip */}
          <div className="pt-3 border-t border-zinc-200/70">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-400 mr-1">
                Teknologi Kunci:
              </span>
              <TechIcon name="FastAPI" size={15} showLabel />
              <TechIcon name="Next.js" size={15} showLabel />
              <TechIcon name="Python" size={15} showLabel />
              <TechIcon name="Docker" size={15} showLabel />
              <TechIcon name="PostgreSQL" size={15} showLabel />
              <TechIcon name="Ollama" size={15} showLabel />
            </div>
          </div>
        </div>

        {/* Right Column (Profile Photo Hook with Floating Badges) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
            {/* Ambient Subtle Glow Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-blue-500/15 to-amber-500/20 rounded-3xl blur-2xl glow-aura pointer-events-none" />

            {/* Photo Card Container */}
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden border border-zinc-200/90 bg-white shadow-md hover-lift">
              <Image
                src="/images/andika-profile.jpg"
                alt="Andika Dwi Prasetya - Software Engineer UGM"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover object-top hover:scale-102 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Micro-Card 1: UGM Badge (Top Left) */}
            <div className="absolute -top-3.5 -left-3.5 sm:-left-5 p-2 sm:p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-md flex items-center gap-2.5 animate-float z-10">
              <OrgLogo name="Universitas Gadjah Mada" size={32} />
              <div className="text-left">
                <div className="text-xs font-bold text-zinc-900 leading-tight">
                  TRPL SV UGM
                </div>
                <div className="text-[11px] font-mono text-zinc-500">
                  Rekayasa Perangkat Lunak
                </div>
              </div>
            </div>

            {/* Floating Micro-Card 2: Location Badge (Bottom Right) */}
            <div className="absolute -bottom-3.5 -right-3.5 sm:-right-4 p-2 sm:p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-zinc-200/90 shadow-md flex items-center gap-2 animate-float-reverse z-10">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono font-medium text-zinc-800">
                Sleman, D.I. Yogyakarta
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Current Focus Grid */}
      <section className="space-y-5">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Fokus & Eksplorasi Saat Ini
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 mt-1">
            Area Pendalaman Teknis
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Healthcare IT */}
          <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-2xs hover-lift space-y-3.5">
            <div className="flex items-center gap-3 text-zinc-900 font-bold text-sm">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <Network size={18} />
              </div>
              <span>Healthcare IT</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Standar HL7 FHIR, integrasi sandbox SATUSEHAT Kemenkes RI, pipeline
              data klinis RME, dan interoperabilitas sistem fasilitas kesehatan.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <TechIcon name="HL7 FHIR" size={14} showLabel />
              <TechIcon name="PostgreSQL" size={14} showLabel />
              <TechIcon name="FastAPI" size={14} showLabel />
            </div>
          </div>

          {/* AI / RAG */}
          <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-2xs hover-lift space-y-3.5">
            <div className="flex items-center gap-3 text-zinc-900 font-bold text-sm">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200/60">
                <Sparkles size={18} />
              </div>
              <span>AI & Sistem RAG</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Retrieval-Augmented Generation, inferensi model LLM lokal mandiri
              via Ollama, pipeline FastAPI, serta verifikasi kutipan sumber.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <TechIcon name="Python" size={14} showLabel />
              <TechIcon name="Ollama" size={14} showLabel />
              <TechIcon name="Next.js" size={14} showLabel />
            </div>
          </div>

          {/* Systems & Linux */}
          <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-2xs hover-lift space-y-3.5">
            <div className="flex items-center gap-3 text-zinc-900 font-bold text-sm">
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200/60">
                <Cpu size={18} />
              </div>
              <span>Sistem & Infrastruktur</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Administrasi Linux Ubuntu headless, kontainerisasi multi-layanan
              Docker Compose, reverse proxy, dan VPN mesh aman via Tailscale.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <TechIcon name="Linux" size={14} showLabel />
              <TechIcon name="Docker" size={14} showLabel />
              <TechIcon name="Git" size={14} showLabel />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Engineering Projects */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Karya & Proyek Unggulan
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Implementasi rekayasa perangkat lunak dan studi kasus nyata.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-xs font-mono font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Semua proyek <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group hover-lift p-6 sm:p-7 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-semibold text-zinc-700 bg-zinc-100 rounded-md border border-zinc-200">
                      {project.frontmatter.status}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {project.frontmatter.role} · {project.frontmatter.date}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.frontmatter.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {project.frontmatter.tagline}
                  </p>

                  {/* Tech stack pills with authentic brand icons */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.frontmatter.techStack.map((tech) => (
                      <TechIcon key={tech} name={tech} size={14} showLabel />
                    ))}
                  </div>
                </div>

                <div className="sm:shrink-0 pt-2 sm:pt-0">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors shadow-2xs"
                  >
                    Baca studi kasus <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Latest Technical Notes */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Catatan Teknis Terbaru
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Refleksi, log pemecahan masalah, dan deep-dive dari pengalaman langsung.
            </p>
          </div>
          <Link
            href="/notes"
            className="inline-flex items-center gap-1 text-xs font-mono font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Semua catatan <ArrowRight size={13} />
          </Link>
        </div>

        <div className="divide-y divide-zinc-200/80">
          {notes.map((note) => (
            <article
              key={note.slug}
              className="py-5 group flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 hover-lift"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="uppercase text-[11px] font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">
                    {note.category}
                  </span>
                  <span>·</span>
                  <span>{note.frontmatter.date}</span>
                  <span>·</span>
                  <span>{note.readingTime}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-zinc-600 transition-colors">
                  <Link href={`/notes/${note.category}/${note.slug}`}>
                    {note.frontmatter.title}
                  </Link>
                </h3>

                <p className="text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                  {note.frontmatter.description}
                </p>
              </div>

              <div className="shrink-0 text-right pt-1 sm:pt-0">
                <Link
                  href={`/notes/${note.category}/${note.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors"
                >
                  Baca artikel <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Experience Snapshot */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Pengalaman Profesional
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Peran dan kontribusi teknis pada tim produksi.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-xs font-mono font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Linimasa lengkap <ArrowRight size={13} />
          </Link>
        </div>

        <div className="space-y-4">
          {recentExperience.map((exp) => (
            <div
              key={exp.company + exp.role}
              className="p-6 rounded-2xl border border-zinc-200 bg-white hover-lift space-y-3"
            >
              <div className="flex items-start gap-3.5">
                <OrgLogo name={exp.company} size={38} />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-base font-bold text-zinc-900">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-medium text-zinc-700">
                        {exp.company} · <span className="text-zinc-400 font-normal">{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-zinc-400">
                      {exp.duration}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed pl-12 sm:pl-13">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1 pl-12 sm:pl-13">
                {exp.technologies.slice(0, 6).map((tech) => (
                  <TechIcon key={tech} name={tech} size={13} showLabel />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact & Collaboration */}
      <section className="p-8 sm:p-10 rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 via-zinc-100/70 to-zinc-50 space-y-4 text-center sm:text-left shadow-2xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <h2 className="text-lg sm:text-2xl font-bold text-zinc-900">
              Mari berdiskusi dan membangun sesuatu yang bermanfaat.
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Terbuka untuk diskusi seputar teknologi kesehatan, sistem backend,
              pipeline RAG lokal, maupun peluang kerja dan kolaborasi rekayasa.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:andika.dwiprasetya119@gmail.com"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-all shadow-2xs hover-lift"
            >
              <Mail size={14} />
              Kirim Email
            </a>
            <a
              href="https://linkedin.com/in/andika-dwi-prasetya-3a529b299"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-50 rounded-xl border border-zinc-200 transition-all shadow-2xs hover-lift"
            >
              LinkedIn <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
