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
  title: "About Me",
  description:
    "Background, technical focus, and engineering journey of Andika Dwi Prasetya, Software Engineering student at Universitas Gadjah Mada.",
};

const techArsenal = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "TypeScript", "JavaScript", "PHP", "Go", "SQL"],
  },
  {
    category: "Backend & Frameworks",
    icon: Terminal,
    items: ["FastAPI", "Next.js", "Express.js", "Laravel", "REST APIs", "Node.js"],
  },
  {
    category: "AI & Data Engineering",
    icon: Sparkles,
    items: ["RAG Pipelines", "Ollama (Local LLMs)", "Vector DB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools & Infrastructure",
    icon: Cpu,
    items: ["Linux", "Docker", "Git / GitHub", "Tailscale", "Nginx", "Postman"],
  },
];

const currentExploration = [
  {
    domain: "Healthcare IT",
    icon: Network,
    topics: [
      "HL7 FHIR Standards (Patient, Observation, Encounter)",
      "SATUSEHAT Sandbox API Integration & OAuth2",
      "SIMRS / RME Clinical Data Mapping & Interoperability",
    ],
  },
  {
    domain: "AI & RAG Systems",
    icon: Sparkles,
    topics: [
      "Semantic Document Chunking & Hybrid Retrieval",
      "Local LLM Inference Optimization via Ollama",
      "Hallucination Reduction & Source Citation Tracking",
    ],
  },
  {
    domain: "Systems & Infrastructure",
    icon: Cpu,
    topics: [
      "Headless Ubuntu Server Administration",
      "Secure Mesh Networking with Tailscale VPN",
      "Self-Hosted Development Services & Reverse Proxies",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 py-4">
      {/* 1. Page Header */}
      <section className="space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
          {"// Profile & Engineering Journey"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          About Me
        </h1>
        <p className="text-base text-zinc-600 leading-relaxed max-w-2xl">
          Software engineering student building resilient web backends, local AI
          systems, and exploring healthcare data interoperability.
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
              <span>Sleman, Yogyakarta, Indonesia</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-700">
              <GraduationCap size={14} className="text-zinc-400" />
              <span>Universitas Gadjah Mada</span>
            </div>
            <div className="pt-2 border-t border-zinc-100 text-[11px] font-mono text-zinc-500">
              GPA: 3.81 / 4.00 · Semester 5
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="md:col-span-8 space-y-5 text-sm text-zinc-700 leading-relaxed">
          <p>
            Hello! I&apos;m <strong>Andika Dwi Prasetya</strong>, currently pursuing a
            Bachelor of Applied Science in Software Engineering Technology at the
            Vocational College, <strong>Universitas Gadjah Mada (UGM)</strong>.
          </p>

          <p>
            My engineering journey began with web development using Laravel and modern
            JavaScript. Over time, I grew fascinated by the invisible systems beneath
            user interfaces: database normalization, distributed background queues,
            and API performance.
          </p>

          <p>
            During my internship at <strong>PT Parama Data Unit</strong> as a Full
            Stack & AI Engineer Intern, I built an enterprise Document Management
            System powered by a local Retrieval-Augmented Generation (RAG) pipeline
            using FastAPI, Next.js, and Ollama. This experience showed me that
            effective AI engineering is fundamentally about data precision and clean
            architectural pipelines.
          </p>

          <p>
            Currently, I am directing my technical depth toward{" "}
            <strong>Healthcare IT and Interoperability</strong>. With Indonesia&apos;s
            transition toward the <strong>SATUSEHAT</strong> national health data
            ecosystem, there is an urgent need for software systems that can translate
            heterogeneous clinical records into standardized{" "}
            <strong>HL7 FHIR</strong> resources reliably and securely.
          </p>

          <blockquote className="p-4 rounded-lg border-l-2 border-zinc-900 bg-zinc-100/70 text-zinc-800 italic text-xs leading-relaxed">
            &ldquo;Show the work, explain the thinking, and document the journey.
            Technology should serve concrete human needs with transparency and
            reliability.&rdquo;
          </blockquote>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <FileText size={14} />
              View Full Resume
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg border border-zinc-200 transition-colors"
            >
              Download PDF CV <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* 3. What I Work With (Tech Arsenal) */}
      <section className="space-y-6 pt-4 border-t border-zinc-200">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">
            What I Work With
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Languages, frameworks, and infrastructure tools I use regularly.
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
            Currently Exploring
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            Areas of deliberate technical study and hands-on laboratory experiments.
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
          <h2>Outside Engineering</h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-2xl">
          Beyond writing code and configuring servers, I have actively led and
          contributed to student media and technical operations teams at UGM:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-zinc-200 bg-white space-y-1">
            <div className="text-xs font-bold text-zinc-900">
              Media & IT Support Staff
            </div>
            <div className="text-[11px] text-zinc-500 font-mono">
              RDK UGM 1445H · Mar 2024
            </div>
            <p className="text-xs text-zinc-600 pt-1 leading-relaxed">
              Managed live-streaming workflows using OBS Studio and handled
              audio/visual troubleshooting for daily webinar broadcasts.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 bg-white space-y-1">
            <div className="text-xs font-bold text-zinc-900">
              Creative Media Staff
            </div>
            <div className="text-[11px] text-zinc-500 font-mono">
              Jamaah Shalahudin UGM · 2023–2024
            </div>
            <p className="text-xs text-zinc-600 pt-1 leading-relaxed">
              Produced and edited educational media content for organizational
              branding and preserved digital activity archives.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 bg-white space-y-1">
            <div className="text-xs font-bold text-zinc-900">
              Head of Media Division
            </div>
            <div className="text-[11px] text-zinc-500 font-mono">
              SMANA Masuk Kampus 7.0 · Dec 2023
            </div>
            <p className="text-xs text-zinc-600 pt-1 leading-relaxed">
              Led the creative team in designing promotional campaigns and
              coordinated communication between university admission divisions.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Connect Footer */}
      <section className="p-6 rounded-2xl border border-zinc-200 bg-zinc-100/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold text-zinc-900">
            Interested in connecting?
          </div>
          <p className="text-xs text-zinc-600">
            Feel free to reach out for project collaboration or technical discussions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="mailto:andika.dwiprasetya119@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <Mail size={13} />
            Email Me
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
