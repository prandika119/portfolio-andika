"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Karya", href: "/work" },
  { label: "Catatan", href: "/notes" },
  { label: "Tentang", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200/80 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand & Status */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            Andika Dwi Prasetya
          </Link>

          <span
            className="hidden sm:inline-flex items-center gap-1.5 ml-2 px-2 py-0.5 text-[11px] font-mono text-zinc-500 bg-zinc-100/80 rounded-full border border-zinc-200/60"
            title="Fokus eksplorasi rekayasa"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle"></span>
            healthcare & sistem
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-5 text-sm font-medium">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors py-1 border-b-2 text-xs tracking-wide uppercase font-mono ${
                    isActive
                      ? "text-zinc-900 font-semibold border-zinc-900"
                      : "text-zinc-500 hover:text-zinc-900 border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="h-4 w-px bg-zinc-200" />

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-zinc-400">
            <a
              href="https://github.com/prandika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 transition-colors"
              aria-label="Profil GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/andika-dwi-prasetya-3a529b299"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 transition-colors"
              aria-label="Profil LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
