import { useState, useEffect, useCallback } from 'react';
import { NAV_ITEMS } from '../data';

interface NavBarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function NavBar({ activeSection, onNavClick }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
