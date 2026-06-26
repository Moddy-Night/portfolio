import { useState, useEffect, useCallback } from 'react';
import { NAV_ITEMS } from '../data';

interface NavBarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function NavBar({ activeSection, onNavClick }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      setDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setDark(prev => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = useCallback(() => setMobileOpen(false), []);

  const handle = (id: string) => {
    onNavClick(id);
    close();
  };

  return (
    <>
      <header className={`nav-bar${scrolled ? ' scrolled' : ''}`}>
        <div className="container-portfolio">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => handle('hero')}
              className="text-lg font-bold tracking-tight flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              <span style={{ color: 'var(--text-primary)' }}>
                Slimane<span className="text-cyan-400">.</span>
              </span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.filter((_, i) => i > 0).map((item) => (
                <button
                  key={item.id}
                  onClick={() => handle(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md transition-colors hover:bg-[var(--bg-elevated)]"
              style={{ color: 'var(--text-secondary)' }}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-md"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`mobile-overlay${mobileOpen ? ' open' : ''}`} onClick={close} />

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <button
          onClick={close}
          className="absolute top-5 right-5 p-2"
          style={{ color: 'var(--text-primary)' }}
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handle(item.id)}
              className="mobile-nav-item"
              style={{
                color: activeSection === item.id ? 'var(--accent-cyan)' : 'var(--text-primary)',
              }}
            >
              <span className="mono text-xs opacity-50 mr-2">
                {String(NAV_ITEMS.indexOf(item) + 1).padStart(2, '0')}
              </span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
