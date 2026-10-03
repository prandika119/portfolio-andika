import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  FolderGit2,
  Github,
  Lightbulb,
} from "lucide-react";
import { experiences } from "@/data/experience";
import { getAllProjects } from "@/lib/content";
import { TechIcon } from "@/components/TechIcon";
import { OrgLogo } from "@/components/OrgLogo";

export const metadata: Metadata = {
  title: "Pengalaman & Proyek",
  description:
    "Rekam jejak rekayasa, linimasa pengalaman profesional, dan studi kasus proyek perangkat lunak Andika Dwi Prasetya.",
};

const organizations = [
  {
    title: "Staf Media & IT Support",
    org: "Ramadhan Di Kampus (RDK) UGM 1445H",
    date: "Mar 2024",
    description:
      "Mengonfigurasi OBS Studio untuk siaran multi-kamera dan memantau stabilitas bitrate audio/video live selama webinar hybrid Ramadhan harian.",
  },
  {
    title: "Staf Media Kreatif",
    org: "Jamaah Shalahudin UGM",
    date: "Okt 2023 — Mar 2024",
    description:
      "Memproduksi konten edukasi digital dan mengoordinasikan pengarsipan media kegiatan organisasi secara terpusat.",
  },
  {
    title: "Ketua Divisi Media",
    org: "SMANA Masuk Kampus 7.0",
    date: "Des 2023",
    description:
      "Mengarahkan strategi kampanye promosi dan mengoordinasikan kanal publikasi media ke calon mahasiswa baru.",
  },
];

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="space-y-16 py-4 animate-fade-in">
      {/* 1. Header */}
      <section className="space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          {"// Rekam Jejak Rekayasa"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          Pengalaman & Proyek
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
          Apa yang saya bangun, bagaimana saya menyelesaikan masalah nyata, dan
          pelajaran teknis yang dipetik dari pengalaman profesional di industri
          maupun riset mandiri.
        </p>
      </section>

      {/* 2. Professional Experience Timeline */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 pb-2 border-b border-zinc-200">
          <Briefcase size={16} className="text-zinc-500" />
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Linimasa Pengalaman Profesional
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <article
              key={exp.company + exp.role}
              className="relative pl-7 sm:pl-9 border-l border-zinc-200 space-y-4"
            >
              {/* Timeline dot */}
              <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-zinc-900 border-2 border-white ring-1 ring-zinc-300" />

              {/* Title & Metadata with Organization Logo */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <OrgLogo name={exp.company} size={42} />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-zinc-700">
                      {exp.company}{" "}
                      <span className="font-normal text-zinc-400">
                        · {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-xs font-mono text-zinc-400 shrink-0 sm:pt-1">
                  {exp.duration}
                </div>
              </div>

              {/* Context Description */}
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2 text-sm text-zinc-700">
                <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                  Tanggung Jawab:
                </div>
                <ul className="space-y-1.5 pl-4 list-disc marker:text-zinc-400">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Contributions Callout */}
              {exp.keyContributions.length > 0 && (
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2 text-sm">
                  <div className="flex items-center gap-1.5 font-bold text-zinc-900 text-xs">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    Kontribusi & Pencapaian Utama
                  </div>
                  <ul className="space-y-1 pl-4 list-disc marker:text-zinc-400 text-zinc-600">
                    {exp.keyContributions.map((contrib, i) => (
                      <li key={i} className="leading-relaxed">
                        {contrib}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Lessons Learned */}
              {exp.lessonsLearned.length > 0 && (
                <div className="p-4 rounded-xl bg-amber-50/40 border border-amber-200/60 space-y-2 text-sm">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900 text-xs">
                    <Lightbulb size={15} className="text-amber-600" />
                    Pelajaran Rekayasa Teknis (Lessons Learned)
                  </div>
                  <ul className="space-y-1 pl-4 list-disc marker:text-amber-400 text-amber-900/80">
                    {exp.lessonsLearned.map((lesson, i) => (
                      <li key={i} className="leading-relaxed">
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies with Brand Icons */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.technologies.map((tech) => (
                  <TechIcon key={tech} name={tech} size={14} showLabel />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Engineering Projects Showcase */}
      <section className="space-y-6 pt-6 border-t border-zinc-200">
        <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
          <div className="flex items-center gap-2">
            <FolderGit2 size={16} className="text-zinc-500" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Proyek Rekayasa & Lab Eksperimen
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            {projects.length} Proyek Terdokumentasi
          </span>
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
                    <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-semibold text-zinc-700 bg-zinc-100 rounded border border-zinc-200">
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

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.frontmatter.techStack.map((tech) => (
                      <TechIcon key={tech} name={tech} size={14} showLabel />
                    ))}
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0 pt-2 sm:pt-0">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors shadow-2xs"
                  >
                    Baca Studi Kasus <ArrowUpRight size={13} />
                  </Link>

                  {project.frontmatter.repoUrl && (
                    <a
                      href={project.frontmatter.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg border border-zinc-200 transition-colors"
                    >
                      <Github size={13} /> Repositori
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Campus IT & Leadership Experience */}
      <section className="space-y-5 pt-6 border-t border-zinc-200">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          Aktivitas Kampus & Operasional Teknis
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {organizations.map((org) => (
            <div
              key={org.title + org.org}
              className="p-5 rounded-2xl border border-zinc-200 bg-white shadow-2xs hover-lift space-y-2"
            >
              <div className="text-sm font-bold text-zinc-900">{org.title}</div>
              <div className="text-xs font-mono text-zinc-500">
                {org.org} · {org.date}
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed pt-1">
                {org.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
