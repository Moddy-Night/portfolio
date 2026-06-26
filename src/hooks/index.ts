import { useState, useEffect } from 'react';

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'contact'];

export function useActiveSection() {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-80px 0px -40% 0px' }
    );

    const els = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);
    els.forEach(el => observer.observe(el!));
    return () => els.forEach(el => observer.unobserve(el!));
  }, []);

  return activeId;
}

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe existing .reveal elements
    const observeAll = () =>
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    observeAll();

    // Watch for new .reveal elements (e.g. lazy-loaded Contact)
    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
