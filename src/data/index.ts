export const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'contact'];

export interface Project {
  id: number;
  title: string;
  tag: string;
  description: string;
  image?: string;
  url?: string;
  technologies: string[];
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Wasl Directory',
    tag: 'Full-Stack Web App',
    description:
      'A comprehensive B2B supplier directory platform for the Algerian market, featuring real-time chat, Supabase Edge Functions, admin dashboard, CRM, coupon system, and OTP authentication. Built with React + TypeScript + Zustand + Supabase.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Zustand', 'Vite', 'Edge Functions'],
    highlights: ['50+ suppliers', 'Real-time chat', 'Admin CRM', 'DZD payments'],
  },
  {
    id: 2,
    title: 'Odysseus UI',
    tag: 'AI Platform',
    description:
      'An autonomous AI research platform with RAG capabilities, multi-LLM support, email integration, vector search, and a modern web interface. Docker-based deployment with AI agent orchestration.',
    technologies: ['Python', 'FastAPI', 'Docker', 'AI/LLM', 'SQLite', 'ChromaDB'],
    highlights: ['Multi-LLM support', 'RAG pipeline', 'Email automation', 'Docker Compose'],
  },
  {
    id: 3,
    title: 'AI CRM System',
    tag: 'Backend + AI Service',
    description:
      'Customer relationship management system with integrated AI service layer. Features automated customer insights, predictive analytics, and intelligent lead scoring using FastAPI and Python.',
    technologies: ['Python', 'FastAPI', 'AI/ML', 'PostgreSQL', 'REST API'],
    highlights: ['AI lead scoring', 'Customer insights', 'FastAPI backend'],
  },
  {
    id: 4,
    title: 'Erp CRM App',
    tag: 'Flutter Mobile App',
    description:
      'Cross-platform ERP/CRM mobile application built with Flutter and Dart. Features inventory management, customer tracking, sales analytics, and offline-first architecture.',
    technologies: ['Flutter', 'Dart', 'Mobile', 'Cross-Platform', 'Offline-First'],
    highlights: ['Cross-platform', 'Offline mode', 'Sales analytics'],
  },
  {
    id: 5,
    title: 'French Learning App',
    tag: 'React + 3D Interactive',
    description:
      'An immersive French language learning app with 3D interactive scenes built with React Three Fiber. Features vocabulary drills, pronunciation guides, and gamified lessons.',
    technologies: ['React', 'Three.js', 'R3F', 'Framer Motion', 'Vite'],
    highlights: ['3D interactive scenes', 'Gamified learning', 'Vocabulary system'],
  },
  {
    id: 6,
    title: 'Arabic CLI Tool',
    tag: 'Python CLI',
    description:
      'A command-line tool built with Python for Arabic language processing. Includes text analysis, transliteration, and learning utilities for the Arabic language.',
    technologies: ['Python', 'CLI', 'NLP', 'Text Processing'],
    highlights: ['Arabic NLP', 'CLI interface', 'Text analysis'],
  },
];

export type Skill = {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'ai' | 'tools';
  icon: string;
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', icon: 'react' },
  { name: 'TypeScript', category: 'frontend', icon: 'typescript' },
  { name: 'Next.js', category: 'frontend', icon: 'nextjs' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'tailwind' },
  { name: 'Zustand', category: 'frontend', icon: 'zustand' },
  { name: 'Framer Motion', category: 'frontend', icon: 'framer' },
  { name: 'Three.js / R3F', category: 'frontend', icon: 'threejs' },
  { name: 'Vite', category: 'frontend', icon: 'vite' },

  // Backend
  { name: 'Supabase', category: 'backend', icon: 'supabase' },
  { name: 'Node.js', category: 'backend', icon: 'nodejs' },
  { name: 'Python', category: 'backend', icon: 'python' },
  { name: 'FastAPI', category: 'backend', icon: 'fastapi' },
  { name: 'REST APIs', category: 'backend', icon: 'restapi' },
  { name: 'PostgreSQL', category: 'backend', icon: 'postgresql' },

  // Mobile
  { name: 'Flutter', category: 'mobile', icon: 'flutter' },
  { name: 'Dart', category: 'mobile', icon: 'dart' },

  // DevOps
  { name: 'Docker', category: 'devops', icon: 'docker' },
  { name: 'Git', category: 'devops', icon: 'git' },
  { name: 'Vercel', category: 'devops', icon: 'vercel' },
  { name: 'Linux', category: 'devops', icon: 'linux' },

  // AI
  { name: 'LLM APIs', category: 'ai', icon: 'llm' },
  { name: 'AI Agents', category: 'ai', icon: 'agents' },

  // Tools
  { name: 'VS Code', category: 'tools', icon: 'vscode' },
  { name: 'Figma', category: 'tools', icon: 'figma' },
];

export const SOCIAL_LINKS = [
  { label: 'GitHub', url: 'https://github.com/Moddy-Night', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/slimaneabaziz', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:slimaneabaziz76@gmail.com', icon: 'email' },
];

export const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];
