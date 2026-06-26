import { PROJECTS } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-portfolio">
        <div className="text-center mb-16 reveal">
          <p className="mono text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--accent-pink)' }}>
            MY WORK
          </p>
          <h2 className="section-heading">Projects</h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-tertiary)' }}>
            Real applications I've built — not tutorials or demos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <div key={project.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="glow-card h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                    <span className={`tag ${i % 3 === 0 ? '' : i % 3 === 1 ? 'tag-purple' : 'tag-pink'}`}>
                      {project.tag}
                    </span>
                  </div>
                  <span className="mono text-sm" style={{ color: 'var(--accent-cyan)' }}>
                    {String(project.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((h) => (
                    <span key={h} className="mono text-[11px] px-2 py-0.5 rounded-md"
                      style={{
                        background: 'rgba(34, 211, 238, 0.06)',
                        border: '1px solid rgba(34, 211, 238, 0.1)',
                        color: 'var(--accent-cyan)',
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  {project.technologies.map((tech) => (
                    <span key={tech} className="mono text-[10px] px-2 py-0.5 rounded"
                      style={{
                        background: 'var(--bg-elevated)',
                        color: 'var(--text-tertiary)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
