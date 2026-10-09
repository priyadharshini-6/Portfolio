import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Brain, BookOpen, UserCheck } from 'lucide-react';

const FILTERS = ['All', 'Full Stack', 'AI'];

const projects = [
  {
    icon: <UserCheck size={26} />,
    title: 'IntelliMatch AI',
    subtitle: 'Full-Stack Developer & AI Integrator',
    domain: 'Full Stack',
    desc: 'An AI-driven internship matching platform that removes guesswork from early-career hiring. Candidates see how their skills measure up against a listing, and recruiters get applicants ranked automatically.',
    highlights: [
      'Parses PDF resumes and computes 0–100% compatibility scores with clear skill-gap insights.',
      'Gemini AI with structured JSON output keeps match evaluation under 5 seconds with a consistent schema.',
      'Role-based dashboards for students and recruiters, with blind screening to reduce hiring bias.',
      'AI cover letter generator, cached score lookups and optimistic UI for fast, smooth interactions.',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Gemini API', 'RBAC'],
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.15)',
  },
  {
    icon: <BookOpen size={26} />,
    title: 'LearnMate',
    subtitle: 'Personalized Study Companion',
    domain: 'AI',
    desc: 'An AI-powered learning assistant that helps users study more effectively, track progress and stay consistent. It combines document understanding with quizzes, flashcards and progress tracking.',
    highlights: [
      'Upload PDFs, notes or text and get context-aware explanations from your own material.',
      'Auto-generated quizzes and flashcards for quick revision and self-assessment.',
      'AI chat assistant that answers questions directly from your study materials.',
      'Daily streaks and progress tracking that highlight weak areas to improve.',
    ],
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Gemini API', 'OpenRouter', 'Supabase'],
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: <Brain size={26} />,
    title: 'AI-Based Knowledge Graph Builder',
    subtitle: 'AI Enterprise Intelligence Platform',
    domain: 'AI',
    desc: 'An enterprise intelligence system that uses data analytics and generative AI workflows to turn complex organizational data into interconnected knowledge for faster decisions.',
    highlights: [
      'Data ingestion pipelines and intelligent retrieval that surface actionable insights.',
      'Full-stack interfaces and backend services to manage queries and orchestrate AI model inference.',
      'Optimized response latency and data formatting for reliable structured outputs.',
    ],
    tags: ['Python', 'Neo4j', 'Knowledge Graphs', 'Ollama', 'AI'],
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.15)',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState('All');

  const visible = active === 'All' ? projects : projects.filter(p => p.domain === active);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: '4rem 1.5rem',
        background: 'linear-gradient(180deg, transparent, rgba(6,182,212,0.02) 50%, transparent)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header + filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2.5rem',
          }}
        >
          <div>
            <span className="section-label" style={{ marginBottom: '0.75rem', display: 'block' }}>
              What I've Built
            </span>
            <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div style={{
              width: '60px', height: '4px', borderRadius: '4px', marginTop: '0.75rem',
              background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
            }} />
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by domain"
            style={{
              display: 'flex', gap: '0.25rem', padding: '0.35rem',
              borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            {FILTERS.map(f => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f)}
                  style={{
                    position: 'relative', border: 'none', cursor: 'pointer',
                    padding: '0.55rem 1.1rem', borderRadius: '10px',
                    background: 'transparent', fontFamily: 'Space Grotesk',
                    fontSize: '0.88rem', fontWeight: 600,
                    color: isActive ? '#fff' : 'var(--text-muted)',
                    transition: 'color 0.2s',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      style={{
                        position: 'absolute', inset: 0, borderRadius: '10px',
                        background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                        boxShadow: '0 4px 14px rgba(124,58,237,0.35)',
                      }}
                    />
                  )}
                  <span style={{ position: 'relative' }}>{f}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="glass-card p-6 rounded-[18px]"
                whileHover={{ y: -6, boxShadow: `0 20px 60px ${p.glow}` }}
                style={{
                  borderColor: `${p.color}20`,
                  position: 'relative', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column',
                }}
              >
                {/* Background glow */}
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: '200px', height: '200px',
                  borderRadius: '50%', background: `radial-gradient(circle, ${p.glow} 0%, transparent 70%)`,
                  transform: 'translate(50%, -50%)', pointerEvents: 'none',
                }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem', position: 'relative' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
                    background: `linear-gradient(135deg, ${p.color}25, ${p.color}10)`,
                    border: `1px solid ${p.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: p.color,
                  }}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                      {p.title}
                    </h3>
                    <p style={{ color: p.color, fontSize: '0.8rem', fontWeight: 600 }}>{p.subtitle}</p>
                  </div>
                </div>

                <span style={{
                  alignSelf: 'flex-start', marginBottom: '0.9rem',
                  padding: '0.2rem 0.65rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 600,
                  fontFamily: 'Space Grotesk', color: p.color,
                  background: `${p.color}12`, border: `1px solid ${p.color}25`,
                }}>
                  {p.domain}
                </span>

                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.88rem', marginBottom: '1rem' }}>
                  {p.desc}
                </p>

                <ul style={{
                  listStyle: 'none', padding: 0, margin: '0 0 1.25rem',
                  display: 'grid', gap: '0.5rem',
                }}>
                  {p.highlights.map(h => (
                    <li key={h} style={{
                      display: 'flex', gap: '0.6rem',
                      color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6,
                    }}>
                      <span style={{
                        width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                        background: p.color, marginTop: '0.55rem',
                      }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: 'auto' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '0.3rem 0.7rem', borderRadius: '16px', fontSize: '0.75rem',
                      background: `${p.color}10`, border: `1px solid ${p.color}20`,
                      color: 'var(--text-muted)', fontFamily: 'Space Grotesk', fontWeight: 500,
                    }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
