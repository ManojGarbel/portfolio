export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  repoUrl: string;
  imageUrl: string;
  featured: boolean;
  category: 'web' | 'ai' | 'mobile' | 'tool';
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'ai' | 'languages' | 'soft';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badgeUrl?: string;
  credentialUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'confesscode',
    title: 'ConfessCode',
    description: 'Anonymous confession platform ensuring privacy',
    longDescription: 'A secure platform where users can share anonymous confessions while maintaining complete privacy. Built with modern web technologies and privacy-first design principles.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    features: [
      'Anonymous posting system',
      'Real-time updates',
      'Privacy protection',
      'Responsive design',
      'User authentication',
    ],
    repoUrl: 'https://github.com/HakkanShah/ConfessCode',
    imageUrl: '/projects/placeholder.svg',
    featured: true,
    category: 'web',
  },
  {
    id: 'mememate',
    title: 'MemeMate',
    description: 'Meme-based social & dating app prototype',
    longDescription: 'A unique social platform that combines meme sharing with dating features. Users can connect through humor and shared interests in a fun, engaging environment.',
    technologies: ['React', 'Firebase', 'JavaScript', 'CSS3', 'Material-UI'],
    features: [
      'Meme sharing and creation',
      'Social networking features',
      'Dating functionality',
      'Real-time chat',
      'User profiles and matching',
    ],
    liveUrl: 'https://mememate-demo.vercel.app',
    repoUrl: 'https://github.com/HakkanShah/MemeMate',
    imageUrl: '/projects/placeholder.svg',
    featured: true,
    category: 'web',
  },
  {
    id: 'aluchat',
    title: 'AluChat',
    description: 'Dual Personality (Sweet & Savage) AI Chatbot',
    longDescription: 'An innovative AI chatbot with dual personalities - one sweet and helpful, the other sassy and witty. Built using advanced NLP and machine learning techniques.',
    technologies: ['Python', 'OpenAI API', 'Flask', 'NLTK', 'Machine Learning'],
    features: [
      'Dual personality system',
      'Natural language processing',
      'Context-aware responses',
      'Personality switching',
      'Conversation history',
    ],
    repoUrl: 'https://github.com/HakkanShah/AluChat',
    imageUrl: '/projects/placeholder.svg',
    featured: true,
    category: 'ai',
  },
  {
    id: 'verifyai',
    title: 'VerifyAI',
    description: 'Fake news, deepfake & AI-generated content detector',
    longDescription: 'A powerful tool that uses AI to detect fake news, deepfakes, and AI-generated content. Helps users identify misinformation and maintain media literacy.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'React', 'FastAPI'],
    features: [
      'Fake news detection',
      'Deepfake identification',
      'AI content analysis',
      'Real-time verification',
      'Confidence scoring',
    ],
    liveUrl: 'https://verifyai-demo.vercel.app',
    repoUrl: 'https://github.com/HakkanShah/VerifyAI',
    imageUrl: '/projects/placeholder.svg',
    featured: true,
    category: 'ai',
  },
  {
    id: 'buildmycv',
    title: 'BuildMyCV',
    description: 'AI-powered last-minute resume builder',
    longDescription: 'An intelligent resume builder that uses AI to help users create professional resumes quickly. Perfect for last-minute job applications and career changes.',
    technologies: ['React', 'Node.js', 'OpenAI API', 'PDF Generation', 'Tailwind CSS'],
    features: [
      'AI-powered content generation',
      'Multiple resume templates',
      'PDF export functionality',
      'Real-time preview',
      'Industry-specific optimization',
    ],
    liveUrl: 'https://buildmycv.vercel.app',
    repoUrl: 'https://github.com/HakkanShah/BuildMyCV',
    imageUrl: '/projects/placeholder.svg',
    featured: true,
    category: 'tool',
  },
  {
    id: 'placeholder-1',
    title: 'Project Alpha',
    description: 'Coming soon - Revolutionary web application',
    longDescription: 'An exciting new project currently in development. Stay tuned for updates!',
    technologies: ['React', 'TypeScript', 'Next.js'],
    features: [
      'Modern architecture',
      'Scalable design',
      'Performance optimized',
      'User-friendly interface',
    ],
    repoUrl: '#',
    imageUrl: '/projects/placeholder.svg',
    featured: false,
    category: 'web',
  },
  {
    id: 'placeholder-2',
    title: 'Project Beta',
    description: 'Coming soon - AI-powered solution',
    longDescription: 'An innovative AI project that will revolutionize how we interact with technology.',
    technologies: ['Python', 'Machine Learning', 'React'],
    features: [
      'Advanced AI algorithms',
      'Intuitive user interface',
      'Real-time processing',
      'Scalable infrastructure',
    ],
    repoUrl: '#',
    imageUrl: '/projects/placeholder.svg',
    featured: false,
    category: 'ai',
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { id: 'html5', name: 'HTML5', category: 'frontend', level: 'expert', icon: '🌐' },
  { id: 'css3', name: 'CSS3', category: 'frontend', level: 'expert', icon: '🎨' },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', level: 'advanced', icon: '⚡' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', level: 'advanced', icon: '📘' },
  { id: 'react', name: 'React.js', category: 'frontend', level: 'advanced', icon: '⚛️' },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', level: 'intermediate', icon: '▲' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', level: 'advanced', icon: '🎭' },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'backend', level: 'intermediate', icon: '🟢' },
  { id: 'express', name: 'Express.js', category: 'backend', level: 'intermediate', icon: '🚀' },
  { id: 'flask', name: 'Flask', category: 'backend', level: 'intermediate', icon: '🌶️' },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', level: 'beginner', icon: '⚡' },
  
  // Database
  { id: 'mongodb', name: 'MongoDB', category: 'database', level: 'intermediate', icon: '🍃' },
  { id: 'sql', name: 'SQL', category: 'database', level: 'intermediate', icon: '🗄️' },
  { id: 'redis', name: 'Redis', category: 'database', level: 'beginner', icon: '🔴' },
  
  // Tools
  { id: 'git', name: 'Git', category: 'tools', level: 'advanced', icon: '📚' },
  { id: 'github', name: 'GitHub', category: 'tools', level: 'advanced', icon: '🐙' },
  { id: 'vscode', name: 'VS Code', category: 'tools', level: 'expert', icon: '💻' },
  { id: 'firebase', name: 'Firebase', category: 'tools', level: 'intermediate', icon: '🔥' },
  { id: 'supabase', name: 'Supabase', category: 'tools', level: 'intermediate', icon: '⚡' },
  { id: 'vercel', name: 'Vercel', category: 'tools', level: 'intermediate', icon: '▲' },
  { id: 'netlify', name: 'Netlify', category: 'tools', level: 'intermediate', icon: '🌐' },
  { id: 'render', name: 'Render', category: 'tools', level: 'intermediate', icon: '🚀' },
  
  // AI Tools
  { id: 'chatgpt', name: 'ChatGPT', category: 'ai', level: 'advanced', icon: '🤖' },
  { id: 'claude', name: 'Claude', category: 'ai', level: 'advanced', icon: '🧠' },
  { id: 'gemini', name: 'Gemini', category: 'ai', level: 'intermediate', icon: '💎' },
  
  // Languages
  { id: 'java', name: 'Java', category: 'languages', level: 'intermediate', icon: '☕' },
  { id: 'c', name: 'C', category: 'languages', level: 'intermediate', icon: '🔧' },
  { id: 'python', name: 'Python', category: 'languages', level: 'advanced', icon: '🐍' },
  
  // Soft Skills
  { id: 'problem-solving', name: 'Problem Solving', category: 'soft', level: 'expert', icon: '🧩' },
  { id: 'teamwork', name: 'Teamwork', category: 'soft', level: 'expert', icon: '🤝' },
  { id: 'communication', name: 'Communication', category: 'soft', level: 'advanced', icon: '💬' },
  { id: 'leadership', name: 'Leadership', category: 'soft', level: 'advanced', icon: '👑' },
  { id: 'time-management', name: 'Time Management', category: 'soft', level: 'advanced', icon: '⏰' },
];

export const EDUCATION: Education[] = [
  {
    id: 'btech',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Greater Kolkata College of Engineering and Management',
    period: '2022 - 2026',
    grade: 'CGPA: 7.5/10',
    description: 'Pursuing Bachelor of Technology in Computer Science and Engineering with focus on software development, algorithms, and system design.',
  },
  {
    id: 'hsc',
    degree: 'Higher Secondary Education',
    institution: 'WBCHSE (West Bengal Council of Higher Secondary Education)',
    period: '2022',
    grade: '85%',
    description: 'Completed Higher Secondary Education with Science stream, focusing on Mathematics, Physics, and Chemistry.',
  },
  {
    id: 'ssc',
    degree: 'Secondary Education',
    institution: 'WBBSE (West Bengal Board of Secondary Education)',
    period: '2020',
    grade: '80%',
    description: 'Completed Secondary Education with strong foundation in core subjects and extracurricular activities.',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'fullstack-bct',
    title: 'Full-Stack BCT Training',
    issuer: 'BCT (Blockchain & Cryptocurrency Technology)',
    date: '2024',
    description: 'Comprehensive training in full-stack development covering modern web technologies, blockchain integration, and cryptocurrency applications.',
  },
  {
    id: 'aws-ai-ml',
    title: 'AWS AI-ML Virtual Internship',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Hands-on experience with AWS AI and Machine Learning services including SageMaker, Rekognition, and Comprehend.',
  },
  {
    id: 'palo-alto-cyber',
    title: 'Palo Alto Cybersecurity Virtual Internship',
    issuer: 'Palo Alto Networks',
    date: '2024',
    description: 'Advanced cybersecurity training covering network security, threat detection, and incident response using Palo Alto technologies.',
  },
  {
    id: 'blue-prism-rpa',
    title: 'Blue Prism Intelligent Automation Virtual Internship',
    issuer: 'Blue Prism',
    date: '2024',
    description: 'Training in Robotic Process Automation (RPA) and intelligent automation solutions for business process optimization.',
  },
  {
    id: 'zscaler-zero-trust',
    title: 'Zscaler Zero Trust Cloud Security Virtual Internship',
    issuer: 'Zscaler',
    date: '2024',
    description: 'Comprehensive training in Zero Trust security architecture and cloud security best practices using Zscaler solutions.',
  },
];

export const CONTACT_INFO = {
  email: 'hakkanparbej@gmail.com',
  phone: '+91-7810843038',
  github: 'https://github.com/HakkanShah',
  linkedin: 'https://www.linkedin.com/in/hakkan/',
  location: 'Kolkata, West Bengal, India',
};

export const PERSONAL_INFO = {
  name: 'Hakkan Parbej Shah',
  title: 'Full Stack Developer',
  tagline: 'Turning Ideas into Reality — One Line of Code at a Time',
  bio: 'Innovative and detail-oriented B.Tech CSE student passionate about building impactful web applications, blending creativity with technical expertise. Experienced in frontend & backend development, AI integration, and UI/UX design. Skilled at leading teams, solving complex problems, and delivering high-quality solutions under deadlines.',
  avatar: '/avatar.jpg',
};