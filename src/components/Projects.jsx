import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Brain, BookOpen, UserCheck } from 'lucide-react';

const FILTERS = ['All', 'Full Stack', 'AI'];

const projects = [
  {
    icon: <UserCheck size={26} />,
    title: 'IntelliMatch AI',
    domain: 'Full Stack',
    tagline: 'End-to-end AI recruitment platform matching candidates to internships with sub-5s latency.',
    problem:
      'Eliminates manual application screening by parsing PDF resumes, evaluating candidate fit against job requirements, and highlighting actionable skill gaps.',
    capabilities: [
      '0–100% deterministic fit scoring',
      'Blind recruiter screening',
      'Automated cover letters',
      'Dual-role RBAC dashboards',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Gemini API', 'PDF Parser', 'RBAC'],
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.15)',
  },
  {
    icon: <BookOpen size={26} />,
    title: 'LearnMate',
    domain: 'AI',
    tagline: 'Interactive, document-grounded AI companion tailored for personalized study workflows.',
    problem:
      'Solves fragmented studying by turning raw lecture notes and PDFs into structured learning paths with interactive testing tools.',
    capabilities: [
      'Context-aware document Q&A',
      'Automatic quiz and flashcard synthesis',
      'Performance diagnostics',
      'Daily retention tracking',
    ],
    tags: ['React', 'Node.js', 'Express', 'Supabase', 'Gemini API', 'OpenRouter', 'Tailwind CSS'],
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: <Brain size={26} />,
    title: 'AI Knowledge Graph Builder',
    domain: 'AI',
    tagline: 'Enterprise intelligence platform combining graph databases and RAG for contextual insight discovery.',
    problem:
      'Unlocks fragmented organizational data by extracting complex business entities and mapping them into an interconnected, queryable knowledge network.',
    capabilities: [
      'Automated entity-relation extraction',
      'Hybrid Vector + Graph retrieval (Graph-RAG)',
      'Low-latency local inference',
    ],
    tags: ['Python', 'Neo4j', 'FAISS', 'Ollama', 'Chainlit', 'LangChain', 'RAG Pipelines'],
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.15)',
  },
];

function Block({ title, color, children }) {
  return (
    <div style={{ marginBottom: '1.6rem' }}>
      <h4 style={{
        fontFamily: 'Space Grotesk', fontSize: '1rem', fontWeight: 700,
        color, marginBottom: '0.7rem',
      }}>
        {title}
      </h4>
      {children}
    </div>
  );
}

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

        {/* One project per row */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="glass-card p-6 sm:p-10 rounded-[18px]"
                whileHover={{ boxShadow: `0 20px 60px ${p.glow}` }}
                style={{
                  borderColor: `${p.color}20`,
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Background glow */}
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: '280px', height: '280px',
                  borderRadius: '50%', background: `radial-gradient(circle, ${p.glow} 0%, transparent 70%)`,
                  transform: 'translate(50%, -50%)', pointerEvents: 'none',
                }} />

                {/* Card header */}
                <div style={{
                  position: 'relative', display: 'flex', alignItems: 'center',
                  gap: '1.1rem', flexWrap: 'wrap', marginBottom: '1.75rem',
                  paddingBottom: '1.5rem', borderBottom: `1px solid ${p.color}20`,
                }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '14px', flexShrink: 0,
                    background: `linear-gradient(135deg, ${p.color}25, ${p.color}10)`,
                    border: `1px solid ${p.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: p.color,
                  }}>
                    {p.icon}
                  </div>

                  <div style={{ flex: 1, minWidth: '220px' }}>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      {p.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '720px' }}>
                      {p.tagline}
                    </p>
                  </div>

                  <span style={{
                    padding: '0.3rem 0.85rem', borderRadius: '14px', fontSize: '0.78rem', fontWeight: 600,
                    fontFamily: 'Space Grotesk', color: p.color,
                    background: `${p.color}12`, border: `1px solid ${p.color}25`,
                  }}>
                    {p.domain}
                  </span>
                </div>

                <div style={{ position: 'relative' }}>
                  <Block title="Problem & solution" color={p.color}>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem', maxWidth: '820px' }}>
                      {p.problem}
                    </p>
                  </Block>

                  <Block title="Key capabilities" color={p.color}>
                    <ul style={{
                      listStyle: 'none', padding: 0, margin: 0,
                      display: 'grid', gap: '0.6rem', maxWidth: '820px',
                    }}>
                      {p.capabilities.map(c => (
                        <li key={c} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.93rem', lineHeight: 1.7 }}>
                          <span style={{
                            width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                            background: p.color, marginTop: '0.68rem',
                          }} />
                          <span style={{ color: 'var(--text-muted)' }}>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>

                  <Block title="Tech stack" color={p.color}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {p.tags.map(tag => (
                        <span key={tag} style={{
                          padding: '0.35rem 0.8rem', borderRadius: '16px', fontSize: '0.78rem',
                          background: `${p.color}10`, border: `1px solid ${p.color}20`,
                          color: 'var(--text-muted)', fontFamily: 'Space Grotesk', fontWeight: 500,
                        }}>{tag}</span>
                      ))}
                    </div>
                  </Block>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
