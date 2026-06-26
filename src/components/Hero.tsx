import { lazy, Suspense, useState, useEffect } from 'react';
const HeroScene = lazy(() => import('./three/HeroScene'));

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Full-Stack Developer';

  useEffect(() => {
    let i = 0;
    setText('');
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* 3D Scene */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(135deg, var(--bg-primary) 0%, transparent 45%, transparent 55%, var(--bg-primary) 100%)',
        }}
      />

      {/* Content */}
      <div className="container-portfolio relative z-10 pt-20 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-fade-in-delay inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{
              background: 'rgba(34, 211, 238, 0.08)',
              border: '1px solid rgba(34, 211, 238, 0.15)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_rgba(34,211,238,0.5)]" />
            <span className="mono text-xs font-medium" style={{ color: 'var(--accent-cyan)' }}>
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Title */}
          <h1 className="hero-fade-in text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.05]">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Slimane Abaziz
            </span>
          </h1>

          {/* Typing subtitle */}
          <p className="hero-fade-in-delay text-lg sm:text-xl font-medium mb-2 min-h-[2rem]"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span className="typing-cursor">{text}</span>
          </p>

          <p className="hero-fade-in-delay-2 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
            style={{ color: 'var(--text-tertiary)' }}
          >
            React &bull; TypeScript &bull; Flutter &bull; Supabase &bull; Turning ideas into production-ready apps
          </p>

          {/* CTA Buttons */}
          <div className="hero-fade-in-delay-2 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="btn-primary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="mono text-[10px] tracking-[0.2em]" style={{ color: 'var(--text-tertiary)' }}>
            SCROLL
          </span>
          <svg className="w-4 h-4 animate-bounce" style={{ color: 'var(--text-tertiary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
