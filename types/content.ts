export type NoteCategory =
  | "healthcare"
  | "ai"
  | "backend"
  | "systems"
  | "networking"
  | "iot"
  | "general";

export interface NoteFrontmatter {
  title: string;
  description: string;
  date: string;
  category: NoteCategory;
  tags: string[];
  featured?: boolean;
  status?: "published" | "draft";
}

export interface NoteItem {
  slug: string;
  category: NoteCategory;
  frontmatter: NoteFrontmatter;
  readingTime: string;
}

export interface NoteDetail extends NoteItem {
  content: string;
}

export interface ProjectFrontmatter {
  title: string;
  tagline: string;
  date: string;
  role: string;
  techStack: string[];
  featured?: boolean;
  status: string; // e.g. "Completed", "Active Prototype", "In Progress"
  repoUrl?: string;
  demoUrl?: string;
}

export interface ProjectItem {
  slug: string;
  frontmatter: ProjectFrontmatter;
}

export interface ProjectDetail extends ProjectItem {
  content: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  keyContributions: string[];
  lessonsLearned: string[];
}

export interface CategoryMeta {
  slug: NoteCategory;
  name: string;
  count: number;
}
