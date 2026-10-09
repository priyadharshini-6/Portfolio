import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Brain, BookOpen, UserCheck } from 'lucide-react';

const FILTERS = ['All', 'Full Stack', 'AI'];

/*
  Section types:
  - text:   items = [paragraph, ...]
  - list:   items = [{ t: 'bold lead', d: 'description' } | 'plain line', ...]
  - steps:  items = ['step', ...]  (numbered, used only for real sequences)
*/
const projects = [
  {
    icon: <UserCheck size={26} />,
    title: 'IntelliMatch AI',
    subtitle: 'Full-Stack Developer & AI Integrator',
    domain: 'Full Stack',
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.15)',
    sections: [
      {
        heading: 'Overview',
        type: 'text',
        items: [
          'IntelliMatch AI is an AI-driven internship matching platform built to remove guesswork from early-career hiring. Candidates often struggle to judge how their skills measure up against a job listing, while recruiters have to sift through hundreds of unranked applications.',
          'The platform closes that gap with instant compatibility scoring, targeted skill-gap insights and management tools for recruiters, all in one end-to-end application.',
        ],
      },
      {
        heading: 'Key features',
        type: 'list',
        items: [
          { t: 'Automated resume parsing', d: 'Extracts text and technical competencies from uploaded PDF resumes and turns them into structured candidate profiles.' },
          { t: 'Deterministic AI scoring engine', d: 'Uses the Gemini API to compare a candidate with a job listing and returns a 0–100% compatibility score with clear missing-skill recommendations.' },
          { t: 'Candidate portal', d: 'Track applications, inspect the compatibility breakdown and generate a tailored, role-specific cover letter in one click.' },
          { t: 'Recruiter portal', d: 'Manage listings, rank applicants automatically by AI score and use blind-screening workflows to evaluate candidates objectively and reduce hiring bias.' },
        ],
      },
      {
        heading: 'Engineering highlights',
        type: 'list',
        items: [
          'Structured JSON output constraints on Gemini keep every response schema-compliant and bring match evaluation under 5 seconds.',
          'Role-Based Access Control (RBAC) separates the student and recruiter dashboards.',
          'Defensive schema validation and cached score lookups avoid redundant LLM calls.',
          'Responsive, accessible UI built with Next.js, React and Tailwind CSS, using optimistic updates and loading states during file extraction and inference.',
        ],
      },
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Gemini API', 'RBAC', 'PDF Parsing'],
  },
  {
    icon: <BookOpen size={26} />,
    title: 'LearnMate',
    subtitle: 'Personalized Study Companion',
    domain: 'AI',
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.15)',
    sections: [
      {
        heading: 'Overview',
        type: 'text',
        items: [
          'LearnMate is an AI-powered personalized learning assistant that helps users learn more effectively, track their progress and stay consistent in their studies.',
          'It combines intelligent understanding of study material with adaptive learning features such as quizzes, flashcards and progress tracking, so everything happens in one interactive experience.',
        ],
      },
      {
        heading: 'Key features',
        type: 'list',
        items: [
          { t: 'AI-powered learning', d: 'Uses advanced AI models to generate context-aware explanations from your own study materials.' },
          { t: 'Document-based learning', d: 'Upload PDFs, notes or text, and the system extracts and understands the key concepts automatically.' },
          { t: 'Quiz generation', d: 'Automatically creates quizzes from uploaded content so you can check how well you understand it.' },
          { t: 'Flashcards', d: 'Turns important concepts into quick revision cards for better memory retention.' },
          { t: 'AI chat assistant', d: 'Ask questions about your study material and get instant, accurate answers.' },
          { t: 'Daily streaks and progress tracking', d: 'Tracks daily activity and performance over time, and points out weak areas to work on.' },
        ],
      },
      {
        heading: 'How it works',
        type: 'steps',
        items: [
          'The user uploads study material as a PDF or text.',
          'The system extracts and processes the content.',
          'AI analyzes and organizes the information.',
          'The user learns through chat, quizzes or flashcards.',
          'Progress is tracked and the learning experience adapts accordingly.',
        ],
      },
      {
        heading: 'Planned improvements',
        type: 'list',
        items: [
          'Learner-level customization from beginner to expert.',
          'Faster real-time responses.',
          'Voice-based interaction.',
          'Better analytics and prediction.',
          'Mobile application support.',
        ],
      },
    ],
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Gemini API', 'OpenRouter API', 'Supabase'],
  },
  {
    icon: <Brain size={26} />,
    title: 'AI-Based Knowledge Graph Builder',
    subtitle: 'AI Enterprise Intelligence Platform',
    domain: 'AI',
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.15)',
    sections: [
      {
        heading: 'Overview',
        type: 'text',
        items: [
          'An enterprise intelligence system that uses data analytics and generative AI workflows to streamline decision-making and pull business insights out of complex organizational data.',
          'It processes structured, semi-structured and unstructured data from multiple sources, extracts entities and relationships with AI-driven pipelines, and builds a knowledge graph in Neo4j that can be queried through a RAG-based system.',
        ],
      },
      {
        heading: 'What I built',
        type: 'list',
        items: [
          { t: 'Data ingestion pipelines', d: 'Process and analyze organizational data from different sources and formats.' },
          { t: 'Automated knowledge graph generation', d: 'AI extracts entities and relationships and stores them as a connected graph.' },
          { t: 'Intelligent retrieval', d: 'Graph and RAG-based retrieval surfaces actionable insights from the data.' },
          { t: 'Full-stack interface and backend services', d: 'Manage user queries, orchestrate AI model inference and present results in a clean analytical view.' },
        ],
      },
      {
        heading: 'Optimization',
        type: 'list',
        items: [
          'Tuned the RAG retrieval pipeline for faster response times and more relevant answers.',
          'Optimized model response latency and data formatting to produce reliable structured outputs for enterprise deployment.',
        ],
      },
    ],
    tags: ['Python', 'Neo4j', 'RAG', 'FAISS', 'Chainlit', 'Ollama', 'LLM Integration', 'Knowledge Graphs'],
  },
];

function Section({ section, color }) {
  return (
    <div style={{ marginBottom: '1.6rem' }}>
      <h4 style={{
        fontFamily: 'Space Grotesk', fontSize: '1rem', fontWeight: 700,
        color, marginBottom: '0.75rem',
      }}>
        {section.heading}
      </h4>

      {section.type === 'text' && (
        <div style={{ display: 'grid', gap: '0.75rem', maxWidth: '820px' }}>
          {section.items.map(t => (
            <p key={t} style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              {t}
            </p>
          ))}
        </div>
      )}

      {section.type === 'list' && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.65rem', maxWidth: '820px' }}>
          {section.items.map(item => {
            const isObj = typeof item === 'object';
            const key = isObj ? item.t : item;
            return (
              <li key={key} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.92rem', lineHeight: 1.75 }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                  background: color, marginTop: '0.7rem',
                }} />
                <span style={{ color: 'var(--text-muted)' }}>
                  {isObj ? (
                    <>
                      <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{item.t}.</strong> {item.d}
                    </>
                  ) : item}
                </span>
              </li>
            );
          })}
        </ul>
      )}

      {section.type === 'steps' && (
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.65rem', maxWidth: '820px' }}>
          {section.items.map((step, i) => (
            <li key={step} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
              <span style={{
                width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', fontWeight: 700, fontFamily: 'Space Grotesk',
                color, background: `${color}15`, border: `1px solid ${color}30`,
              }}>
                {i + 1}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.75 }}>{step}</span>
            </li>
          ))}
        </ol>
      )}
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
                    <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                      {p.title}
                    </h3>
                    <p style={{ color: p.color, fontSize: '0.88rem', fontWeight: 600 }}>{p.subtitle}</p>
                  </div>

                  <span style={{
                    padding: '0.3rem 0.85rem', borderRadius: '14px', fontSize: '0.78rem', fontWeight: 600,
                    fontFamily: 'Space Grotesk', color: p.color,
                    background: `${p.color}12`, border: `1px solid ${p.color}25`,
                  }}>
                    {p.domain}
                  </span>
                </div>

                {/* Detailed content */}
                <div style={{ position: 'relative' }}>
                  {p.sections.map(s => (
                    <Section key={s.heading} section={s} color={p.color} />
                  ))}
                </div>

                {/* Tech stack at the bottom */}
                <div style={{ position: 'relative', marginTop: '0.5rem' }}>
                  <h4 style={{
                    fontFamily: 'Space Grotesk', fontSize: '1rem', fontWeight: 700,
                    color: p.color, marginBottom: '0.75rem',
                  }}>
                    Tech stack
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{
                        padding: '0.35rem 0.8rem', borderRadius: '16px', fontSize: '0.78rem',
                        background: `${p.color}10`, border: `1px solid ${p.color}20`,
                        color: 'var(--text-muted)', fontFamily: 'Space Grotesk', fontWeight: 500,
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
