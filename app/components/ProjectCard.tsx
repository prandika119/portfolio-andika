import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article className="project-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
      <Link className="project-image" href={`/portfolio/${project.slug}`} aria-label={`View ${project.title} case study`}>
        <Image src={project.image} alt={project.title} fill sizes="(max-width: 820px) 100vw, 33vw" />
        <span className="zoom-label">
          View case study <ArrowUpRight size={14} />
        </span>
      </Link>

      <div className="project-info">
        <div className="project-topline">
          <span>
            {project.number} / {project.type}
          </span>
          <Link href={`/portfolio/${project.slug}`} aria-label={`Open project ${project.title}`}>
            <ArrowUpRight size={21} />
          </Link>
        </div>

        <Link href={`/portfolio/${project.slug}`}>
          <h3>{project.title}</h3>
        </Link>
        <p>{project.description}</p>
        <p className="project-detail">
          <Check size={15} /> {project.details}
        </p>

        <div className="tag-row">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
