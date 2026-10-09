import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Brain, BookOpen, UserCheck } from 'lucide-react';

const FILTERS = ['All', 'Full Stack', 'AI'];

const projects = [
  {
    icon: <UserCheck size={24} />,
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
  },
  {
    icon: <BookOpen size={24} />,
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
  },
  {
    icon: <Brain size={24} />,
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
  },
];

function Block({ title, children }) {
  return (
    <div style={{ marginBottom: '1.6rem' }}>
      <h4 style={{
        fontFamily: 'Space Grotesk', fontSize: '0.98rem', fontWeight: 700,
        color: 'var(--accent)', marginBottom: '0.7rem',
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
    <section id="projects" ref={ref} style={{ padding: '4rem 1.5rem' }}>
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
            <div style={{ width: '60px', height: '4px', borderRadius: '4px', marginTop: '0.75rem', background: 'var(--accent)' }} />
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by domain"
            style={{
              display: 'flex', gap: '0.25rem', padding: '0.3rem',
              borderRadius: '12px', border: '1px solid var(--line)',
              background: 'var(--surface)',
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
                    padding: '0.5rem 1.1rem', borderRadius: '9px',
                    background: 'transparent', fontFamily: 'Space Grotesk',
                    fontSize: '0.88rem', fontWeight: 600,
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    transition: 'color 0.2s',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      style={{ position: 'absolute', inset: 0, borderRadius: '9px', background: 'var(--accent)' }}
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
                className="glass-card p-6 sm:p-10 rounded-[16px]"
              >
                {/* Card header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '1.1rem', flexWrap: 'wrap',
                  marginBottom: '1.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--line)',
                }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '12px', flexShrink: 0,
                    background: 'var(--accent-soft)', border: '1px solid var(--accent-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)',
                  }}>
                    {p.icon}
                  </div>

                  <div style={{ flex: 1, minWidth: '220px' }}>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                      {p.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '720px' }}>
                      {p.tagline}
                    </p>
                  </div>

                  <span style={{
                    padding: '0.3rem 0.85rem', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600,
                    fontFamily: 'Space Grotesk', color: 'var(--accent-hover)',
                    background: 'var(--accent-soft)', border: '1px solid var(--accent-border)',
                  }}>
                    {p.domain}
                  </span>
                </div>

                <Block title="Problem & solution">
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem', maxWidth: '820px' }}>
                    {p.problem}
                  </p>
                </Block>

                <Block title="Key capabilities">
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.6rem', maxWidth: '820px' }}>
                    {p.capabilities.map(c => (
                      <li key={c} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.93rem', lineHeight: 1.7 }}>
                        <span style={{
                          width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                          background: 'var(--accent)', marginTop: '0.68rem',
                        }} />
                        <span style={{ color: 'var(--text-muted)' }}>{c}</span>
                      </li>
                    ))}
                  </ul>
                </Block>

                <Block title="Tech stack">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{
                        padding: '0.35rem 0.8rem', borderRadius: '8px', fontSize: '0.78rem',
                        background: 'var(--bg)', border: '1px solid var(--line)',
                        color: 'var(--text)', fontFamily: 'Space Grotesk', fontWeight: 500,
                      }}>{tag}</span>
                    ))}
                  </div>
                </Block>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
