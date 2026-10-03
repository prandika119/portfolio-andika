"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Menu,
  MessageCircle,
  MoveUpRight,
  Sparkles,
  X,
} from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { SocialLinks } from "./components/SocialLinks";
import { projects } from "./data/projects";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const experience = [
  {
    date: "Feb — Jun 2026",
    company: "PT Parama Data Unit",
    role: "Full Stack Developer & AI Engineer Intern",
    description:
      "Developed an AI-powered document management system based on Retrieval-Augmented Generation (RAG) to support intelligent and automated document querying, while building a responsive Next.js interface and FastAPI-powered backend pipeline with Ollama integration.",
  },
  {
    date: "Oct — Nov 2025",
    company: "PT Jaya Perkasa Mandalika",
    role: "Web Developer Intern",
    description:
      "Handled a multi-tenant SaaS platform using Laravel, supported centralized data management for multiple clients, and worked with the team to resolve frontend-backend integration issues and dynamic rendering problems through GitHub-based collaboration.",
  },
  {
    date: "Jul 2022 — Dec 2023",
    company: "Digital Hero Indonesia",
    role: "Web Developer Intern",
    description:
      "Built a rental management web system using Laravel and contributed to Agile Scrum delivery, including sprint planning, daily standups, source control, and project coordination with Git and GitHub.",
  },
];

const skillGroups = [
  { label: "Languages", items: ["PHP", "Python", "Golang", "JavaScript", "TypeScript"] },
  { label: "Frontend", items: ["React", "HTML", "CSS", "Tailwind", "Bootstrap"] },
  { label: "Backend", items: ["Laravel", "NestJS", "FastAPI", "Express", "REST API"] },
  { label: "Tools", items: ["Git", "GitHub", "Docker", "Linux", "n8n", "Postman"] },
];

const organizationExperience = [
  {
    title: "Media & IT Support Staff",
    org: "Ramadhan Di Kampus (RDK) UGM 1445H",
    date: "Mar 2024",
    description:
      "Managed live streaming setup using OBS Studio and handled technical troubleshooting for camera, audio, and lighting during daily Ramadan webinar sessions.",
  },
  {
    title: "Creative Media Staff",
    org: "Jamaah Shalahudin UGM",
    date: "Oct 2023 — Mar 2024",
    description:
      "Produced and edited educational video content for organizational branding, while documenting activities and preserving visual archives.",
  },
  {
    title: "Head of Media Division",
    org: "SMANA Masuk Kampus 7.0 (Edu Fair)",
    date: "Dec 2023",
    description:
      "Led the media team, coordinated design and social media production, and acted as the main liaison between divisions to keep event communication aligned.",
  },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const revealNodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14 }
    );

    revealNodes.forEach((node) => observer.observe(node));

    const handleScroll = () => setShowTop(window.scrollY > 520);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="page-shell">
      <nav className="nav-shell">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          ADP<span>.</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="mailto:andika.dwiprasetya119@gmail.com" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>

      <header className="hero section-wrap" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span className="status-dot" /> Available for collaboration
          </p>
          <h1>
            Building digital <em>experiences</em> with purpose.
          </h1>
          <p className="hero-intro">
            I&apos;m Andika Dwi Prasetya, a Software Engineering Technology student passionate about building reliable web products,
            efficient backend systems, and user-focused experiences from idea to implementation.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#portfolio">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a className="text-link" href="mailto:andika.dwiprasetya119@gmail.com">
              Get in touch <MoveUpRight size={16} />
            </a>
          </div>
          <SocialLinks />
        </div>

        <div className="hero-visual reveal delay-2">
          <div className="hero-image-frame rounded-3xl">
            <Image src="/my_photo/foto%20ku.jpg" alt="Andika Dwi Prasetya portrait" fill sizes="(max-width: 820px) 100vw, 470px" priority />
            <div className="image-caption">01 / Profile study</div>
          </div>
          <div className="hero-stamp">
            <Sparkles size={18} />
            <span>
              CURIOUS
              <br />
              BY DEFAULT
            </span>
          </div>
        </div>
      </header>

      <div className="marquee-band" aria-label="Key expertise">
        <div>
          FULL STACK DEVELOPMENT <span>✦</span> AI ENGINEERING <span>✦</span> BACKEND SYSTEMS <span>✦</span> CREATIVE MEDIA
          <span>✦</span>
        </div>
      </div>

      <section className="content-section section-wrap" id="about">
        <div className="section-label reveal">
          <span>01</span>
          <span>About me</span>
        </div>

        <div className="about-grid">
          <div className="about-heading reveal">
            <h2>
              Good software <em>starts with</em> sharp thinking.
            </h2>
          </div>

          <div className="about-copy reveal delay-1">
            <p>
              My interest in software began with understanding how digital systems work behind the scenes and how thoughtful design can
              solve practical problems. That curiosity has grown into a focus on web development, backend engineering, and AI-assisted
              product building.
            </p>
            <p>
              As a Software Engineering Technology student at Universitas Gadjah Mada, I enjoy working across the stack: designing data
              flows, building APIs, developing interfaces, and collaborating with teams to turn ideas into dependable products.
            </p>
            <div className="signature">
              ADP<span>—</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section section-wrap" id="experience">
        <div className="section-label reveal">
          <span>02</span>
          <span>Experience</span>
        </div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item reveal" style={{ transitionDelay: `${index * 0.12}s` }} key={item.company}>
              <div className="experience-date">{item.date}</div>
              <div className="experience-copy">
                <p className="company-name">{item.company}</p>
                <h3>{item.role}</h3>
                <p className="muted-copy">{item.description}</p>
              </div>
              <ArrowUpRight className="item-arrow" size={19} />
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="section-wrap">
          <div className="section-label reveal">
            <span>03</span>
            <span>Portfolio</span>
          </div>

          <div className="projects-intro reveal">
            <h2>
              A few things <em>I&apos;ve built.</em>
            </h2>
            <p>Solutions shaped by usability, maintainability, and a strong sense of product purpose.</p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-wrap" id="skills">
        <div className="section-label reveal">
          <span>04</span>
          <span>Toolkit</span>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-group reveal" style={{ transitionDelay: `${index * 0.08}s` }} key={group.label}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.label}</h3>
              <div>
                {group.items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section section-wrap" id="community">
        <div className="section-label reveal">
          <span>05</span>
          <span>Leadership</span>
        </div>

        <div className="org-list">
          {organizationExperience.map((item, index) => (
            <article className="org-item reveal" style={{ transitionDelay: `${index * 0.1}s` }} key={item.title}>
              <div className="org-meta">
                <BriefcaseBusiness size={16} />
                <span>{item.date}</span>
              </div>
              <div className="org-copy">
                <p className="org-role">{item.title}</p>
                <h3>{item.org}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section-wrap reveal" id="contact">
        <div className="contact-kicker">
          <MessageCircle size={17} /> Have a project in mind?
        </div>
        <h2>
          Let&apos;s make something <em>worth remembering.</em>
        </h2>
        <a className="contact-email" href="mailto:andika.dwiprasetya119@gmail.com">
          andika.dwiprasetya119@gmail.com <ArrowUpRight size={22} />
        </a>
      </section>

      <footer className="footer section-wrap">
        <span>© 2026 Andika Dwi Prasetya</span>
        <span>Designed & built with care</span>
        <SocialLinks compact />
      </footer>

      {showTop && (
        <button className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
          <ChevronDown size={18} />
        </button>
      )}

    </main>
  );
}
