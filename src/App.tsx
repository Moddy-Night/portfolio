import { useCallback, useEffect, lazy, Suspense } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { SECTION_IDS } from './data';
import { useActiveSection, useScrollReveal } from './hooks';

/* Lazy load Contact (below fold) */
const Contact = lazy(() => import('./components/Contact'));

function App() {
  const activeSection = useActiveSection();
  useScrollReveal();

  const handleNavClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const idx = SECTION_IDS.indexOf(activeSection);
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        const next = SECTION_IDS[Math.min(idx + 1, SECTION_IDS.length - 1)];
        handleNavClick(next);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        const prev = SECTION_IDS[Math.max(idx - 1, 0)];
        handleNavClick(prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeSection, handleNavClick]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <NavBar activeSection={activeSection} onNavClick={handleNavClick} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Suspense fallback={
          <div className="section-padding text-center">
            <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin mx-auto" />
          </div>
        }>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
