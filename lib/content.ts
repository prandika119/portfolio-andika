import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import {
  CategoryMeta,
  NoteCategory,
  NoteDetail,
  NoteFrontmatter,
  NoteItem,
  ProjectDetail,
  ProjectFrontmatter,
  ProjectItem,
} from "@/types/content";

const NOTES_PATH = path.join(process.cwd(), "content/notes");
const PROJECTS_PATH = path.join(process.cwd(), "content/projects");

const CATEGORY_NAMES: Record<NoteCategory, string> = {
  healthcare: "Healthcare IT",
  ai: "AI & ML",
  backend: "Sistem Backend",
  systems: "Sistem & Linux",
  networking: "Jaringan Komputer",
  iot: "IoT & Embedded",
  general: "Umum",
};

/**
 * Ensure directory exists without throwing
 */
function ensureDirectory(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Retrieve all notes sorted by date (descending)
 */
export function getAllNotes(): NoteItem[] {
  ensureDirectory(NOTES_PATH);

  const notes: NoteItem[] = [];

  const categoryDirs = fs.readdirSync(NOTES_PATH, { withFileTypes: true });

  for (const catDir of categoryDirs) {
    if (!catDir.isDirectory()) continue;

    const category = catDir.name as NoteCategory;
    const catPath = path.join(NOTES_PATH, category);
    const files = fs.readdirSync(catPath);

    for (const file of files) {
      if (!file.endsWith(".mdx") && !file.endsWith(".md")) continue;

      const slug = file.replace(/\.(mdx|md)$/, "");
      const fullPath = path.join(catPath, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      try {
        const { data, content } = matter(fileContents);
        const frontmatter = data as NoteFrontmatter;

        if (frontmatter.status === "draft") continue;

        const stats = readingTime(content);

        notes.push({
          slug,
          category,
          frontmatter: {
            ...frontmatter,
            category: frontmatter.category || category,
            tags: frontmatter.tags || [],
          },
          readingTime: stats.text,
        });
      } catch (err) {
        console.error(`Failed to parse note frontmatter in ${fullPath}:`, err);
      }
    }
  }

  return notes.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
}

/**
 * Retrieve a single note by category and slug with full MDX content
 */
export function getNoteBySlug(category: string, slug: string): NoteDetail | null {
  ensureDirectory(NOTES_PATH);

  const mdxPath = path.join(NOTES_PATH, category, `${slug}.mdx`);
  const mdPath = path.join(NOTES_PATH, category, `${slug}.md`);

  let filePath = "";
  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as NoteFrontmatter;
  const stats = readingTime(content);

  return {
    slug,
    category: (frontmatter.category || category) as NoteCategory,
    frontmatter: {
      ...frontmatter,
      category: (frontmatter.category || category) as NoteCategory,
      tags: frontmatter.tags || [],
    },
    readingTime: stats.text,
    content,
  };
}

/**
 * Retrieve all projects sorted by date (descending)
 */
export function getAllProjects(): ProjectItem[] {
  ensureDirectory(PROJECTS_PATH);

  const projects: ProjectItem[] = [];
  const files = fs.readdirSync(PROJECTS_PATH);

  for (const file of files) {
    if (!file.endsWith(".mdx") && !file.endsWith(".md")) continue;

    const slug = file.replace(/\.(mdx|md)$/, "");
    const fullPath = path.join(PROJECTS_PATH, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    try {
      const { data } = matter(fileContents);
      const frontmatter = data as ProjectFrontmatter;

      projects.push({
        slug,
        frontmatter: {
          ...frontmatter,
          techStack: frontmatter.techStack || [],
        },
      });
    } catch (err) {
      console.error(`Failed to parse project frontmatter in ${fullPath}:`, err);
    }
  }

  return projects.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
  });
}

/**
 * Retrieve a single project by slug with full MDX content
 */
export function getProjectBySlug(slug: string): ProjectDetail | null {
  ensureDirectory(PROJECTS_PATH);

  const mdxPath = path.join(PROJECTS_PATH, `${slug}.mdx`);
  const mdPath = path.join(PROJECTS_PATH, `${slug}.md`);

  let filePath = "";
  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as ProjectFrontmatter;

  return {
    slug,
    frontmatter: {
      ...frontmatter,
      techStack: frontmatter.techStack || [],
    },
    content,
  };
}

/**
 * Retrieve categories with note counts
 */
export function getAllCategories(): CategoryMeta[] {
  const notes = getAllNotes();
  const counts: Record<string, number> = {};

  for (const note of notes) {
    counts[note.category] = (counts[note.category] || 0) + 1;
  }

  return (Object.keys(CATEGORY_NAMES) as NoteCategory[]).map((cat) => ({
    slug: cat,
    name: CATEGORY_NAMES[cat],
    count: counts[cat] || 0,
  }));
}

/**
 * Retrieve all unique tags with count
 */
export function getAllTags(): { tag: string; count: number }[] {
  const notes = getAllNotes();
  const tagCounts: Record<string, number> = {};

  for (const note of notes) {
    for (const tag of note.frontmatter.tags) {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    }
  }

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
