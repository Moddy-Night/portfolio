export default function About() {
  const stats = [
    { value: '2+', label: 'Years Coding', color: 'var(--accent-cyan)' },
    { value: '6+', label: 'Projects Shipped', color: 'var(--accent-purple)' },
    { value: '4', label: 'Tech Stacks', color: 'var(--accent-pink)' },
    { value: '∞', label: 'Learning', color: 'var(--accent-blue)' },
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-portfolio">
        <div className="text-center mb-16 reveal">
          <p className="mono text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--accent-cyan)' }}>
            ABOUT ME
          </p>
          <h2 className="section-heading">Who I Am</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image / card */}
          <div className="reveal reveal-delay-1">
            <div className="glow-card !p-0 overflow-hidden">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src="/slimane.jpg"
                  alt="Slimane Abaziz"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Decorative corner */}
                <div className="absolute bottom-4 right-4 w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))' }}
                >
                  <span className="text-white font-bold text-lg">22</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-2">
            <div className="space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I'm a <strong style={{ color: 'var(--text-primary)' }}>self-taught full-stack developer</strong> from Algeria, passionate about building production-ready applications with modern technologies.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                With strong skills in <strong style={{ color: 'var(--accent-cyan)' }}>React</strong>,{' '}
                <strong style={{ color: 'var(--accent-purple)' }}>TypeScript</strong>,{' '}
                <strong style={{ color: 'var(--accent-pink)' }}>Flutter</strong>, and{' '}
                <strong style={{ color: 'var(--accent-orange)' }}>Supabase</strong>, I build everything from{' '}
                real-time chat platforms to AI-powered backends and cross-platform mobile apps.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I believe in <strong style={{ color: 'var(--text-primary)' }}>clean code</strong>,{' '}
                <strong style={{ color: 'var(--text-primary)' }}>proper architecture</strong>, and{' '}
                <strong style={{ color: 'var(--text-primary)' }}>building things that actually work</strong> — not just demo apps.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <span className="mono text-xs" style={{ color: 'var(--text-tertiary)' }}>CURRENTLY:</span>
                <span className="tag flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  OPEN FOR WORK
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div className="text-2xl font-bold" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-[11px] mt-0.5 leading-tight" style={{ color: 'var(--text-tertiary)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
