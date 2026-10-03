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
  title: "Resume & CV",
  description:
    "Curriculum Vitae dan rekam jejak profesional Andika Dwi Prasetya, Software Engineer.",
};

const education = [
  {
    institution: "Universitas Gadjah Mada",
    degree: "Sarjana Terapan (D4) Teknologi Rekayasa Perangkat Lunak",
    period: "Jul 2023 — Sekarang",
    location: "Yogyakarta, Indonesia",
    details:
      "IPK Saat Ini: 3.81 dari 4.00 (Semester 5). Berfokus pada arsitektur sistem backend, lingkungan Linux, dan informatika kesehatan.",
  },
  {
    institution: "SMA Negeri 1 Ajibarang",
    degree: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
    period: "Jul 2020 — Jul 2023",
    location: "Banyumas, Jawa Tengah",
    details: "Lulus dengan predikat memuaskan pada peminatan sains dan matematika.",
  },
];

const selectedProjects = [
  {
    title: "Chatbot Telegram Berbasis AI untuk Ulasan Hotel",
    period: "Agu — Nov 2025",
    stack: ["n8n", "Telegram API", "API LLM / OpenAI", "SQL"],
    description:
      "Alur kerja otomatisasi ulasan hotel yang memproses pertanyaan tamu, menghubungkan ke database internal, dan menyajikan jawaban kontekstual via bot Telegram.",
  },
  {
    title: "NutriTrack x HealthMap (Sistem Pemantauan Gizi Terintegrasi)",
    period: "Jun 2025",
    stack: ["REST API", "PostgreSQL", "Konsep FHIR", "State Management"],
    description:
      "Merancang jembatan pertukaran data interoperabel yang menghubungkan pencatatan kasus gizi daerah dengan pemetaan spasial kesehatan melalui kontrak API terstandarisasi.",
  },
  {
    title: "Sistem Manajemen Penyewaan Lapangan Olahraga",
    period: "Des 2024",
    stack: ["Laravel", "MySQL", "PHP", "Tailwind CSS", "Alpine JS"],
    description:
      "Merancang skema database relasional dan algoritma resolusi konflik booking untuk mengelola reservasi multi-lapangan dan ketersediaan jadwal secara real-time.",
  },
];

const skills = [
  {
    category: "Bahasa Pemrograman",
    items: "Python, TypeScript, JavaScript, PHP, Go, SQL, HTML, CSS",
  },
  {
    category: "Backend & Framework",
    items: "FastAPI, Next.js, Express.js, Laravel, RESTful API Design, Node.js",
  },
  {
    category: "AI & Basis Data",
    items: "Pipeline RAG, Ollama (LLM Lokal), Vector Database, PostgreSQL, MySQL",
  },
  {
    category: "Alat & Infrastruktur",
    items: "Linux (Ubuntu), Docker, Git, GitHub, Tailscale, Postman, Nginx, Caddy, OBS Studio",
  },
];

const organizations = [
  {
    role: "Staf Media & IT Support",
    org: "Ramadhan Di Kampus (RDK) UGM 1445H",
    period: "Mar 2024",
    description:
      "Mengelola siaran langsung via OBS Studio dan memitigasi latensi teknis audio/kamera selama siaran hybrid rangkaian webinar Ramadhan tingkat nasional.",
  },
  {
    role: "Staf Media Kreatif",
    org: "Jamaah Shalahudin UGM",
    period: "Okt 2023 — Mar 2024",
    description:
      "Memproduksi aset video edukatif untuk publikasi digital lembaga dan memelihara arsip dokumentasi media.",
  },
  {
    role: "Ketua Divisi Media",
    org: "SMANA Masuk Kampus 7.0 (Edu Fair)",
    period: "Des 2023",
    description:
      "Memimpin tim publikasi kreatif dan mengoordinasikan materi promosi di berbagai kanal komunikasi penerimaan mahasiswa baru.",
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
              <MapPin size={13} className="text-zinc-400" /> Sleman, D.I. Yogyakarta
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
            Unduh Resume PDF
          </a>
        </div>
      </div>

      {/* 2. Executive Summary */}
      <section className="space-y-3">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          Ringkasan Eksekutif
        </h2>
        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed max-w-3xl">
          Mahasiswa Teknologi Rekayasa Perangkat Lunak di Universitas Gadjah Mada (IPK 3.81/4.00)
          dengan pengalaman magang produksi membangun aplikasi web terukur, pipeline
          Retrieval-Augmented Generation (RAG) lokal, dan arsitektur multi-tenant.
          Memiliki ketertarikan tinggi pada rekayasa sistem backend, administrasi server
          Linux, serta pengembangan sistem pertukaran data kesehatan yang interoperabel
          sesuai standar HL7 FHIR dan ekosistem SATUSEHAT.
        </p>
      </section>

      {/* 3. Professional Experience */}
      <section className="space-y-6 pt-4 border-t border-zinc-200">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-zinc-400" />
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Pengalaman Profesional
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
                    Pencapaian Utama:
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
            Riwayat Pendidikan
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
            Proyek Pilihan
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
            Keahlian Teknis
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
            Aktivitas & Kepemimpinan Kampus
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
          Membutuhkan salinan lengkap untuk arsip rekrutmen perusahaan Anda?
        </div>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors shrink-0"
        >
          Unduh PDF CV <ArrowUpRight size={13} />
        </a>
      </div>
    </div>
  );
}
