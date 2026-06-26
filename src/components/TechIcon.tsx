import type { SVGProps } from 'react';

// ── Real Brand Icons from Simple Icons (react-icons/si) ──
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiVite,
  SiSupabase,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiDocker,
  SiGit,
  SiVercel,
  SiLinux,
  SiFigma,
  SiOpenai,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

type IconMap = Record<string, IconType | ((props: SVGProps<SVGSVGElement>) => React.JSX.Element)>;

const icons: IconMap = {
  // ── Frontend - Real Brand SVGs ──
  react: SiReact,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  framer: SiFramer,
  threejs: SiThreedotjs,
  vite: SiVite,

  // ── Backend - Real Brand SVGs ──
  supabase: SiSupabase,
  nodejs: SiNodedotjs,
  python: SiPython,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,

  // ── Mobile - Real Brand SVGs ──
  flutter: SiFlutter,
  dart: SiDart,

  // ── DevOps - Real Brand SVGs ──
  docker: SiDocker,
  git: SiGit,
  vercel: SiVercel,
  linux: SiLinux,

  // ── AI - Real Brand SVGs ──
  llm: SiOpenai, // OpenAI logo for LLM

  // ── Tools - Real Brand SVGs ──
  figma: SiFigma,

  // ── Icons without official Simple Icon (custom SVGs) ──
  zustand: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="9" cy="9" r="2.5" fill="currentColor" />
      <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      <circle cx="16" cy="9" r="1.8" fill="currentColor" opacity="0.6" />
      <circle cx="9" cy="16" r="1.8" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  restapi: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="18" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="8.5" y1="8" x2="15.5" y2="11" stroke="currentColor" strokeWidth="1.2" />
      <line x1="8.5" y1="16" x2="15.5" y2="13" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  vscode: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M7.5 3L2 6.5v11l5.5 3.5L17 13v-3L7.5 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M7.5 3v18L17 13l-4.5-4 4.5-4L7.5 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M17 10l4.5 3-4.5 3" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  ),
  agents: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="5" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="19" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="9" y1="10.5" x2="7" y2="15.5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="15" y1="10.5" x2="17" y2="15.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
};

/* ── Component ── */

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name];
  if (!Icon) return <span className={className}>?</span>;
  return <Icon className={className} />;
}

export default TechIcon;
