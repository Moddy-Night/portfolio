import { useState, useEffect } from 'react';
import { SECTION_IDS } from '../data';

export function useActiveSection(): [string, (id: string) => void] {
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

    const observeSection = (id: string) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    };

    // Observe all currently existing sections
    SECTION_IDS.forEach(observeSection);

    // Watch for lazy-loaded sections (e.g. Contact)
    const mutationObserver = new MutationObserver(() => {
      SECTION_IDS.forEach(observeSection);
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return [activeId, setActiveId];
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
