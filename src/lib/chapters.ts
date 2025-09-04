export enum Chapter {
  COVER = 0,
  ABOUT = 1,
  PROJECTS_A = 2,
  PROJECTS_B = 3,
  SKILLS = 4,
  EDUCATION = 5,
  CERTIFICATIONS = 6,
  CONTACT = 7,
}

export interface ChapterMetadata {
  id: Chapter;
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export const CHAPTERS: ChapterMetadata[] = [
  {
    id: Chapter.COVER,
    title: 'Cover',
    slug: 'cover',
    description: 'Hakkan Parbej Shah - Full Stack Developer',
    icon: '🏠',
  },
  {
    id: Chapter.ABOUT,
    title: 'About',
    slug: 'about',
    description: 'Learn about the developer behind the code',
    icon: '👤',
  },
  {
    id: Chapter.PROJECTS_A,
    title: 'Projects A',
    slug: 'projects-a',
    description: 'Featured projects and applications',
    icon: '🚀',
  },
  {
    id: Chapter.PROJECTS_B,
    title: 'Projects B',
    slug: 'projects-b',
    description: 'More projects and future endeavors',
    icon: '💻',
  },
  {
    id: Chapter.SKILLS,
    title: 'Skills',
    slug: 'skills',
    description: 'Technical skills and power-ups',
    icon: '⚡',
  },
  {
    id: Chapter.EDUCATION,
    title: 'Education',
    slug: 'education',
    description: 'Academic journey and achievements',
    icon: '🎓',
  },
  {
    id: Chapter.CERTIFICATIONS,
    title: 'Certifications',
    slug: 'certifications',
    description: 'Professional certifications and badges',
    icon: '🏆',
  },
  {
    id: Chapter.CONTACT,
    title: 'Contact',
    slug: 'contact',
    description: 'Get in touch with the developer',
    icon: '📧',
  },
];

export const TOTAL_CHAPTERS = CHAPTERS.length;

export function getChapterById(id: number): ChapterMetadata | undefined {
  return CHAPTERS.find(chapter => chapter.id === id);
}

export function getChapterBySlug(slug: string): ChapterMetadata | undefined {
  return CHAPTERS.find(chapter => chapter.slug === slug);
}

export function getNextChapter(currentId: number): ChapterMetadata | null {
  const nextId = currentId + 1;
  return nextId < TOTAL_CHAPTERS ? getChapterById(nextId) || null : null;
}

export function getPreviousChapter(currentId: number): ChapterMetadata | null {
  const prevId = currentId - 1;
  return prevId >= 0 ? getChapterById(prevId) || null : null;
}