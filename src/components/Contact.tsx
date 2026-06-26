import { useState, type FormEvent } from 'react';
import { SOCIAL_LINKS } from '../data';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [bot, setBot] = useState(''); // honeypot — users don't see it

  const sanitizeInput = (val: string): string =>
    val.trim().replace(/<[^>]*>/g, '').slice(0, 2000);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // ── Honeypot check ──
    if (bot) return; // bot filled hidden field, silently reject

    // ── Client-side validation ──
    const clean = {
      name: sanitizeInput(name),
      email: email.trim().toLowerCase(),
      message: sanitizeInput(message),
    };

    if (!clean.name || clean.name.length < 2) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) return;
    if (!clean.message || clean.message.length < 10) return;

    setStatus('sending');

    const formData = new FormData();
    formData.set('name', clean.name);
    formData.set('email', clean.email);
    formData.set('message', clean.message);
    formData.set('_subject', 'Portfolio Contact — slimane-abaziz.vercel.app');
    formData.set('_captcha', 'false'); // invisible spam protection

    try {
      const res = await fetch('https://formsubmit.co/ajax/slimaneabaziz76@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('sent');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-portfolio">
        <div className="text-center mb-16 reveal">
          <p className="mono text-xs tracking-[0.2em] mb-3" style={{ color: 'var(--accent-cyan)' }}>
            CONTACT
          </p>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-tertiary)' }}>
            Have a project in mind? Let's build something great together
          </p>
        </div>

        <div className="max-w-2xl mx-auto reveal reveal-delay-2">
          <div className="glow-card p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left - Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-1">Let's talk</h3>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    I'm always open to new opportunities and interesting projects.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:slimaneabaziz76@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-white/5 group"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                      style={{ background: 'rgba(34, 211, 238, 0.1)' }}
                    >
                      ✉️
                    </div>
                    <div>
                      <p className="text-sm font-medium group-hover:text-cyan-400 transition-colors">
                        slimaneabaziz76@gmail.com
                      </p>
                      <p className="mono text-[11px]" style={{ color: 'var(--text-tertiary)' }}>
                        Email me directly
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-lg">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                      style={{ background: 'rgba(167, 139, 250, 0.1)' }}
                    >
                      🌍
                    </div>
                    <div>
                      <p className="text-sm font-medium">Algeria</p>
                      <p className="mono text-[11px]" style={{ color: 'var(--text-tertiary)' }}>
                        Available for remote work worldwide
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mono text-[11px] uppercase tracking-[0.15em] mb-3" style={{ color: 'var(--text-tertiary)' }}>
                    Find me on
                  </p>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-secondary)',
                        }}
                        title={link.label}
                      >
                        {link.icon === 'github' && (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        )}
                        {link.icon === 'linkedin' && (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        )}
                        {link.icon === 'email' && '✉️'}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div>
                {status === 'sent' ? (
                  <div className="text-center py-10">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p style={{ color: 'var(--text-tertiary)' }}>
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* ── Honeypot: hidden from users, bots fill this ── */}
                    <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                      <input
                        type="text"
                        name="_gotcha"
                        tabIndex={-1}
                        autoComplete="off"
                        value={bot}
                        onChange={(e) => setBot(e.target.value)}
                      />
                    </div>

                    <input type="hidden" name="_subject" value="Portfolio Contact — slimane-abaziz.vercel.app" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div>
                      <label className="mono text-[11px] uppercase tracking-[0.1em] mb-1.5 block"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        minLength={2}
                        maxLength={100}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-field"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="mono text-[11px] uppercase tracking-[0.1em] mb-1.5 block"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        maxLength={254}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="mono text-[11px] uppercase tracking-[0.1em] mb-1.5 block"
                        style={{ color: 'var(--text-tertiary)' }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        minLength={10}
                        maxLength={5000}
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input-field resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
                            <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" />
                          </svg>
                          Sending...
                        </>
                      ) : status === 'error' ? (
                        '⚠️ Try Again'
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>

                    {status === 'error' && (
                      <p className="text-red-400 text-xs text-center">
                        Something went wrong. Please email me directly at{' '}
                        <a href="mailto:slimaneabaziz76@gmail.com" className="underline">slimaneabaziz76@gmail.com</a>
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
            <p className="mono text-xs" style={{ color: 'var(--text-tertiary)' }}>
              Designed & Built by{' '}
              <span className="text-cyan-400">Slimane Abaziz</span>
            </p>
            <p className="mono text-[10px] mt-2" style={{ color: 'var(--text-tertiary)' }}>
              {'</>'} with React + Three.js + TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
