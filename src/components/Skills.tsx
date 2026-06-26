import { SKILLS } from '../data';
import TechIcon from './TechIcon';

const CATEGORIES = [
  { key: 'frontend', label: 'Frontend', color: 'var(--accent-cyan)' },
  { key: 'backend', label: 'Backend', color: 'var(--accent-purple)' },
  { key: 'mobile', label: 'Mobile', color: 'var(--accent-pink)' },
  { key: 'devops', label: 'DevOps', color: 'var(--accent-blue)' },
  { key: 'ai', label: 'AI / ML', color: 'var(--accent-orange)' },
  { key: 'tools', label: 'Tools', color: 'var(--accent-cyan)' },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-portfolio">
        <div className="text-center mb-16 reveal">
          <p className="mono text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--accent-purple)' }}>
            SKILLS & TOOLS
          </p>
          <h2 className="section-heading">Tech Stack</h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-tertiary)' }}>
            Technologies I work with daily to build production-ready applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, ci) => {
            const items = SKILLS.filter(s => s.category === cat.key);
            return (
              <div key={cat.key} className={`reveal reveal-delay-${ci + 1}`}>
                <div className="glow-card">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                    />
                    <h3 className="font-semibold text-sm" style={{ color: cat.color }}>
                      {cat.label}
                    </h3>
                    <span className="mono text-xs ml-auto" style={{ color: 'var(--text-tertiary)' }}>
                      {items.length}
                    </span>
                  </div>

                  {/* Skills grid */}
                  <div className="grid grid-cols-4 gap-3">
                    {items.map((skill) => (
                      <div key={skill.name} className="group flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 hover:bg-[var(--bg-elevated)]">
                        <div className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                          <TechIcon name={skill.icon} className="w-8 h-8" />
                        </div>
                        <span className="mono text-[10px] text-center leading-tight" style={{ color: 'var(--text-tertiary)' }}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
