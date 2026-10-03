import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail-page">
      <nav className="detail-nav section-wrap">
        <Link className="brand" href="/#top">
          ADP<span>.</span>
        </Link>
        <Link className="back-link" href="/#portfolio">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
      </nav>

      <article className="project-detail-layout section-wrap">
        <div className="project-detail-heading">
          <p className="eyebrow">{project.number} / {project.type}</p>
          <h1>{project.title}</h1>
          <p className="project-detail-lead">{project.description}</p>
          <div className="tag-row detail-tags">
            {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </div>

        <div className="project-detail-image">
          <Image src={project.image} alt={project.title} fill sizes="(max-width: 820px) 100vw, 55vw" priority />
        </div>

        <div className="project-detail-copy">
          <p className="section-kicker">The build</p>
          <h2>Designed to make the workflow <em>clearer.</em></h2>
          <p>{project.details}</p>
          <p className="project-detail-check"><Check size={16} /> Focused on usability, maintainability, and measurable value.</p>
          {project.link.startsWith("http") && (
            <a className="button button-primary" href={project.link} target="_blank" rel="noreferrer">
              Visit project <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      </article>
    </main>
  );
}
