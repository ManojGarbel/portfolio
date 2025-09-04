import { Chapter, CHAPTERS } from './chapters';

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonical: string;
}

export const DEFAULT_SEO: SEOData = {
  title: 'Hakkan Parbej Shah - Full Stack Developer | Retro Comic Portfolio',
  description: 'Innovative and detail-oriented B.Tech CSE student passionate about building impactful web applications. Explore my retro comic-style portfolio featuring projects, skills, and achievements.',
  keywords: [
    'Hakkan Parbej Shah',
    'Full Stack Developer',
    'Web Developer',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Portfolio',
    'B.Tech CSE',
    'Software Engineer',
    'Frontend Developer',
    'Backend Developer',
    'AI Integration',
    'UI/UX Design',
  ],
  ogImage: '/og-image-default.jpg',
  canonical: 'https://hakkan-portfolio.vercel.app',
};

export function getChapterSEO(chapterId: number): SEOData {
  const chapter = CHAPTERS.find(c => c.id === chapterId);
  if (!chapter) return DEFAULT_SEO;

  const baseTitle = 'Hakkan Parbej Shah - Full Stack Developer';
  const baseDescription = 'Innovative and detail-oriented B.Tech CSE student passionate about building impactful web applications.';

  switch (chapterId) {
    case Chapter.COVER:
      return {
        ...DEFAULT_SEO,
        title: `${baseTitle} | Retro Comic Portfolio`,
        description: `${baseDescription} Explore my retro comic-style portfolio featuring projects, skills, and achievements.`,
      };
    
    case Chapter.ABOUT:
      return {
        ...DEFAULT_SEO,
        title: `About - ${baseTitle}`,
        description: 'Learn about Hakkan Parbej Shah, a passionate B.Tech CSE student with expertise in full-stack development, AI integration, and UI/UX design.',
        keywords: [...DEFAULT_SEO.keywords, 'About', 'Biography', 'Developer Story'],
      };
    
    case Chapter.PROJECTS_A:
    case Chapter.PROJECTS_B:
      return {
        ...DEFAULT_SEO,
        title: `Projects - ${baseTitle}`,
        description: 'Explore innovative web applications including ConfessCode, MemeMate, AluChat, VerifyAI, and BuildMyCV. See how ideas become reality through code.',
        keywords: [...DEFAULT_SEO.keywords, 'Projects', 'ConfessCode', 'MemeMate', 'AluChat', 'VerifyAI', 'BuildMyCV', 'Web Applications'],
      };
    
    case Chapter.SKILLS:
      return {
        ...DEFAULT_SEO,
        title: `Skills - ${baseTitle}`,
        description: 'Technical skills in React.js, Next.js, TypeScript, Node.js, MongoDB, and more. Plus soft skills in problem-solving, teamwork, and communication.',
        keywords: [...DEFAULT_SEO.keywords, 'Skills', 'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Technical Skills'],
      };
    
    case Chapter.EDUCATION:
      return {
        ...DEFAULT_SEO,
        title: `Education - ${baseTitle}`,
        description: 'B.Tech in Computer Science and Engineering from Greater Kolkata College of Engineering and Management. Academic achievements and educational journey.',
        keywords: [...DEFAULT_SEO.keywords, 'Education', 'B.Tech CSE', 'Greater Kolkata College', 'Academic', 'CGPA'],
      };
    
    case Chapter.CERTIFICATIONS:
      return {
        ...DEFAULT_SEO,
        title: `Certifications - ${baseTitle}`,
        description: 'Professional certifications in Full-Stack Development, AWS AI-ML, Cybersecurity, and Cloud Security. Continuous learning and skill development.',
        keywords: [...DEFAULT_SEO.keywords, 'Certifications', 'AWS', 'Cybersecurity', 'Full-Stack', 'Professional Development'],
      };
    
    case Chapter.CONTACT:
      return {
        ...DEFAULT_SEO,
        title: `Contact - ${baseTitle}`,
        description: 'Get in touch with Hakkan Parbej Shah for collaboration opportunities, project discussions, or just to say hello. Available for freelance and full-time opportunities.',
        keywords: [...DEFAULT_SEO.keywords, 'Contact', 'Hire', 'Collaboration', 'Freelance', 'Opportunities'],
      };
    
    default:
      return DEFAULT_SEO;
  }
}

export function generateJSONLD(chapterId: number) {
  const basePerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hakkan Parbej Shah',
    jobTitle: 'Full Stack Developer',
    description: 'Innovative and detail-oriented B.Tech CSE student passionate about building impactful web applications',
    email: 'hakkanparbej@gmail.com',
    telephone: '+91-7810843038',
    url: 'https://hakkan-portfolio.vercel.app',
    sameAs: [
      'https://github.com/HakkanShah',
      'https://www.linkedin.com/in/hakkan/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Greater Kolkata College of Engineering and Management',
    },
    knowsAbout: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'MongoDB',
      'Full Stack Development',
      'AI Integration',
      'UI/UX Design',
    ],
  };

  const projects = [
    {
      '@type': 'SoftwareSourceCode',
      name: 'ConfessCode',
      description: 'Anonymous confession platform ensuring privacy',
      programmingLanguage: ['React', 'JavaScript', 'Node.js'],
      codeRepository: 'https://github.com/HakkanShah/ConfessCode',
    },
    {
      '@type': 'SoftwareSourceCode',
      name: 'MemeMate',
      description: 'Meme-based social & dating app prototype',
      programmingLanguage: ['React', 'JavaScript', 'Node.js'],
      codeRepository: 'https://github.com/HakkanShah/MemeMate',
    },
    {
      '@type': 'SoftwareSourceCode',
      name: 'AluChat',
      description: 'Dual Personality (Sweet & Savage) AI Chatbot',
      programmingLanguage: ['Python', 'AI/ML'],
      codeRepository: 'https://github.com/HakkanShah/AluChat',
    },
    {
      '@type': 'SoftwareSourceCode',
      name: 'VerifyAI',
      description: 'Fake news, deepfake & AI-generated content detector',
      programmingLanguage: ['Python', 'AI/ML', 'React'],
      codeRepository: 'https://github.com/HakkanShah/VerifyAI',
    },
    {
      '@type': 'SoftwareSourceCode',
      name: 'BuildMyCV',
      description: 'AI-powered last-minute resume builder',
      programmingLanguage: ['React', 'AI/ML', 'Node.js'],
      codeRepository: 'https://github.com/HakkanShah/BuildMyCV',
    },
  ];

  if (chapterId === Chapter.COVER || chapterId === Chapter.PROJECTS_A || chapterId === Chapter.PROJECTS_B) {
    return [basePerson, ...projects];
  }

  return [basePerson];
}

export function generateMetadata(chapterId: number) {
  const seo = getChapterSEO(chapterId);
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(', '),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${seo.canonical}/${CHAPTERS[chapterId]?.slug || ''}`,
      siteName: 'Hakkan Parbej Shah Portfolio',
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${seo.canonical}/${CHAPTERS[chapterId]?.slug || ''}`,
    },
  };
}