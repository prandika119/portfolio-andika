import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-50/40 text-zinc-600 py-12 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Identity & Focus */}
          <div className="max-w-sm space-y-2">
            <div className="text-sm font-semibold text-zinc-900 tracking-tight">
              Andika Dwi Prasetya
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Personal engineering notebook & living portfolio. Exploring AI,
              healthcare interoperability (HL7 FHIR / SATUSEHAT), and backend
              systems.
            </p>
            <div className="pt-1 text-[11px] font-mono text-zinc-400">
              Yogyakarta, Indonesia · UTC+7
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-8 text-xs">
            <div className="space-y-2.5">
              <div className="font-mono uppercase tracking-wider text-zinc-400 text-[10px]">
                Navigation
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/work" className="hover:text-zinc-900 transition-colors">
                    Work & Experience
                  </Link>
                </li>
                <li>
                  <Link href="/notes" className="hover:text-zinc-900 transition-colors">
                    Technical Notes
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-zinc-900 transition-colors">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="hover:text-zinc-900 transition-colors">
                    Resume / CV
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="font-mono uppercase tracking-wider text-zinc-400 text-[10px]">
                Connect
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/prandika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-zinc-900 transition-colors"
                  >
                    <Github size={13} />
                    GitHub
                    <ArrowUpRight size={10} className="text-zinc-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/andika-dwi-prasetya-3a529b299"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-zinc-900 transition-colors"
                  >
                    <Linkedin size={13} />
                    LinkedIn
                    <ArrowUpRight size={10} className="text-zinc-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:andika.dwiprasetya119@gmail.com"
                    className="inline-flex items-center gap-1 hover:text-zinc-900 transition-colors"
                  >
                    <Mail size={13} />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Colophon & Copyright */}
        <div className="mt-10 pt-6 border-t border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400 font-mono">
          <div>
            © {currentYear} Andika Dwi Prasetya. All rights reserved.
          </div>
          <div>
            Built with Next.js 16, MDX & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}

