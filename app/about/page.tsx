import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  FileText,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Network,
  Sparkles,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description:
    "Latar belakang, fokus teknis, dan perjalanan rekayasa perangkat lunak Andika Dwi Prasetya, mahasiswa TRPL Universitas Gadjah Mada.",
};

const techArsenal = [
  {
    category: "Bahasa Pemrograman",
    icon: Code2,
    items: ["Python", "TypeScript", "JavaScript", "PHP", "Go", "SQL"],
  },
  {
    category: "Backend & Framework",
    icon: Terminal,
    items: ["FastAPI", "Next.js", "Express.js", "Laravel", "REST API", "Node.js"],
  },
  {
    category: "AI & Rekayasa Data",
    icon: Sparkles,
    items: ["Pipeline RAG", "Ollama (LLM Lokal)", "Vector DB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Alat & Infrastruktur",
    icon: Cpu,
    items: ["Linux (Ubuntu)", "Docker", "Git / GitHub", "Tailscale VPN", "Nginx", "Postman"],
  },
];

const currentExploration = [
  {
    domain: "Healthcare IT",
    icon: Network,
    topics: [
      "Standar HL7 FHIR (Patient, Observation, Encounter)",
      "Integrasi Sandbox API SATUSEHAT & Autentikasi OAuth2",
      "Pemetaan Data Klinis RME / SIMRS & Interoperabilitas",
    ],
  },
  {
    domain: "Sistem AI & RAG",
    icon: Sparkles,
    topics: [
      "Semantic Document Chunking & Hybrid Retrieval",
      "Optimasi Inferensi LLM Lokal dengan Ollama",
      "Mitigasi Halusinasi & Pelacakan Sitasi Sumber Dokumen",
    ],
  },
  {
    domain: "Sistem & Infrastruktur",
    icon: Cpu,
    topics: [
      "Administrasi Server Headless Linux Ubuntu",
      "Jaringan Mesh Aman Menggunakan Tailscale VPN",
      "Layanan Pengembangan Self-Hosted & Reverse Proxy",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 py-4">
      {/* 1. Page Header */}
      <section className="space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          {"// Profil & Perjalanan Rekayasa"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          Tentang Saya
        </h1>
        <p className="text-base text-zinc-600 leading-relaxed max-w-2xl">
          Mahasiswa teknologi rekayasa perangkat lunak yang berfokus membangun backend web yang tangguh, sistem AI lokal, dan mengeksplorasi interoperabilitas data kesehatan.
        </p>
      </section>

      {/* 2. Bio & Photo Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Photo & Quick Meta */}
        <div className="md:col-span-4 space-y-4">
          <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 shadow-xs">
            <Image
              src="/images/andika-profile.jpg"
              alt="Andika Dwi Prasetya"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top hover:scale-102 transition-transform duration-300"
              priority
            />
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 bg-white space-y-2 text-xs">
            <div className="flex items-center gap-2 text-zinc-700">
              <MapPin size={14} className="text-zinc-400" />
              <span>Sleman, D.I. Yogyakarta, Indonesia</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-700">
              <GraduationCap size={14} className="text-zinc-400" />
              <span>Universitas Gadjah Mada</span>
            </div>
            <div className="pt-2 border-t border-zinc-100 text-[11px] font-mono text-zinc-500">
              IPK: 3.81 / 4.00 · Semester 5
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="md:col-span-8 space-y-5 text-sm text-zinc-700 leading-relaxed">
          <p>
            Halo! Saya <strong>Andika Dwi Prasetya</strong>, saat ini sedang menempuh studi
            Sarjana Terapan di Departemen Teknik Elektro dan Informatika, Program Studi
            Teknologi Rekayasa Perangkat Lunak (TRPL), Sekolah Vokasi, <strong>Universitas Gadjah Mada (UGM)</strong>.
          </p>

          <p>
            Perjalanan rekayasa saya dimulai dari pengembangan aplikasi web dengan Laravel
            dan ekosistem JavaScript. Seiring waktu, rasa ingin tahu saya berkembang ke
            sistem di balik layar yang menopang antarmuka: normalisasi skema database,
            antrean proses asinkron, serta performa dan keandalan kontrak API.
          </p>

          <p>
            Selama magang di <strong>PT Parama Data Unit</strong> sebagai Full Stack Developer &
            AI Engineer Intern, saya merancang dan membangun Document Management System
            berbasis AI dengan pipeline Retrieval-Augmented Generation (RAG) lokal menggunakan
            FastAPI, Next.js, dan Ollama. Pengalaman langsung ini membuktikan bahwa
            efektivitas rekayasa AI bertumpu pada ketelitian pemrosesan dokumen dan desain
            pipeline yang kokoh, bukan hanya bergantung pada ukuran model bahasa.
          </p>

          <p>
            Saat ini, saya memfokuskan energi riset dan eksplorasi teknis pada bidang{" "}
            <strong>Teknologi Informasi Kesehatan dan Interoperabilitas Data</strong>.
            Seiring akselerasi ekosistem data kesehatan nasional <strong>SATUSEHAT</strong>{" "}
            oleh Kementerian Kesehatan RI, kemampuan membangun jembatan data klinis yang
            terstandarisasi dengan spesifikasi global <strong>HL7 FHIR</strong> menjadi
            fondasi krusial bagi sistem kesehatan modern.
          </p>

          <blockquote className="p-4 rounded-lg border-l-2 border-zinc-900 bg-zinc-100/70 text-zinc-800 italic text-xs leading-relaxed">
            &ldquo;Tunjukkan hasilnya, jelaskan cara berpikir di baliknya, dan dokumentasikan
            prosesnya secara terbuka. Teknologi seharusnya menjawab masalah riil manusia
            dengan transparan, aman, dan andal.&rdquo;
          </blockquote>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <FileText size={14} />
              Lihat Resume Lengkap
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg border border-zinc-200 transition-colors"
            >
              Unduh CV PDF <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* 3. What I Work With (Tech Arsenal) */}
      <section className="space-y-6 pt-4 border-t border-zinc-200">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">
            Alat & Teknologi Utama
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Bahasa pemrograman, framework, dan peralatan infrastruktur yang saya gunakan secara rutin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techArsenal.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="p-5 rounded-xl border border-zinc-200 bg-white space-y-3"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-zinc-900">
                  <Icon size={16} className="text-zinc-500" />
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-zinc-700 bg-zinc-50 rounded border border-zinc-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Currently Exploring */}
      <section className="space-y-6 pt-4 border-t border-zinc-200">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">
            Fokus Eksplorasi Saat Ini
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Area studi mandiri terarah dan eksperimen hands-on di laboratorium komputasi saya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentExploration.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.domain}
                className="p-5 rounded-xl border border-zinc-200 bg-white space-y-3"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-zinc-900">
                  <Icon size={16} className="text-zinc-600" />
                  {item.domain}
                </div>
                <ul className="space-y-2 text-xs text-zinc-600">
                  {item.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-1.5 leading-relaxed">
                      <span className="text-zinc-400 mt-1">›</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Outside Engineering */}
      <section className="space-y-4 pt-4 border-t border-zinc-200">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-900">
          <HeartHandshake size={20} className="text-zinc-500" />
          <h2>Aktivitas & Kepemimpinan Kampus</h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-2xl">
          Selain menulis kode dan mengonfigurasi server, saya aktif berkontribusi dan memimpin divisi media serta operasional teknis kegiatan mahasiswa di UGM:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-zinc-200 bg-white space-y-1">
            <div className="text-xs font-bold text-zinc-900">
              Staf Media & IT Support
            </div>
            <div className="text-[11px] text-zinc-500 font-mono">
              RDK UGM 1445H · Mar 2024
            </div>
            <p className="text-xs text-zinc-600 pt-1 leading-relaxed">
              Mengelola alur siaran langsung (live streaming) dengan OBS Studio dan menyelesaikan kendala teknis audio/video selama siaran harian.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 bg-white space-y-1">
            <div className="text-xs font-bold text-zinc-900">
              Staf Media Kreatif
            </div>
            <div className="text-[11px] text-zinc-500 font-mono">
              Jamaah Shalahudin UGM · 2023–2024
            </div>
            <p className="text-xs text-zinc-600 pt-1 leading-relaxed">
              Memproduksi konten edukasi digital untuk publikasi kelembagaan serta memelihara dokumentasi dan arsip kegiatan.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 bg-white space-y-1">
            <div className="text-xs font-bold text-zinc-900">
              Ketua Divisi Media
            </div>
            <div className="text-[11px] text-zinc-500 font-mono">
              SMANA Masuk Kampus 7.0 · Des 2023
            </div>
            <p className="text-xs text-zinc-600 pt-1 leading-relaxed">
              Memimpin tim kreatif dalam merancang materi promosi dan mengoordinasikan komunikasi publikasi dengan berbagai pihak kampus.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Connect Footer */}
      <section className="p-6 rounded-2xl border border-zinc-200 bg-zinc-100/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold text-zinc-900">
            Tertarik berdiskusi atau berkolaborasi?
          </div>
          <p className="text-xs text-zinc-600">
            Terbuka untuk diskusi teknis, eksplorasi sistem kesehatan, maupun peluang proyek bersama.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="mailto:andika.dwiprasetya119@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <Mail size={13} />
            Kirim Email
          </a>
          <a
            href="https://linkedin.com/in/andika-dwi-prasetya-3a529b299"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-50 rounded-lg border border-zinc-200 transition-colors"
          >
            LinkedIn <ArrowUpRight size={12} />
          </a>
        </div>
      </section>
    </div>
  );
}
