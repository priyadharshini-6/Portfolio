import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [

   {
    title: 'AI Developer Intern',
    company: 'Infosys Springboard',
    location: 'Virtual',
    period: '2024',
    color: 'var(--accent, #3b82f6)',
    current: false,
    points: [
      'Built a graph-based system for enterprise applications using Neo4j.',
      'Processed structured, semi-structured, and unstructured data for intelligent analysis.',
      'Utilized Ollama for AI model integration and inference.',
      'Developed graph queries and relationship-based retrieval mechanisms.',
    ],
    tags: ['Neo4j', 'Python', 'Ollama', 'Knowledge Graphs'],
  },
  {
    title: 'AI Augmented Full Stack Developer Intern',
    company: 'Synnoviq Technologies Pvt. Ltd.',
    location: 'Kovilpatti',
    period: 'June 2025 – May 2026',
    color: 'var(--accent, #3b82f6)',
    current: true,
    points: [
      'Developed and maintained dynamic web applications using React.js, Node.js, Express.js, and MongoDB.',
      'Built backend services to handle client requests and integrated them with frontend interfaces.',
      'Implemented CRUD operations and managed database schemas for efficient data handling.',
      'Collaborated on application development and performance optimization initiatives.',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
  },

];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} style={{ padding: '4rem 1.5rem', background: 'var(--bg, #0a0a0b)', color: 'var(--text, #f4f4f5)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="section-label" style={{ marginBottom: '0.75rem', display: 'block', color: 'var(--accent, #3b82f6)' }}>Work History</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--text, #f4f4f5)' }}>
            Professional <span className="gradient-text" style={{ color: 'var(--accent, #3b82f6)', background: 'none', backgroundImage: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', WebkitTextFillColor: 'var(--accent, #3b82f6)' }}>Experience</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div
            className="absolute left-[19px] sm:left-[29px] top-[50px] bottom-[50px] w-[2px] opacity-25"
            style={{
              background: 'var(--accent, #3b82f6)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex gap-4 sm:gap-8 items-start"
              >
                <div
                  className="flex-shrink-0 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-[10px] sm:rounded-[14px] flex items-center justify-center relative z-10"
                  style={{
                    background: 'var(--accent-soft, rgba(59,130,246,0.10))',
                    border: '1px solid var(--accent-border, rgba(59,130,246,0.30))',
                    color: 'var(--accent, #3b82f6)',
                  }}
                >
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <motion.div
                  className="glass-card p-5 sm:p-7 rounded-[14px] sm:rounded-[18px] flex-1"
                  whileHover={{ y: -4, borderColor: 'var(--accent-border, rgba(59,130,246,0.30))' }}
                  style={{
                    backgroundColor: 'var(--surface, #111113)',
                    border: '1px solid var(--line, #232327)',
                    boxShadow: 'none',
                    transition: 'transform 0.2s, border-color 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text, #f4f4f5)' }}>
                        {exp.title}
                      </h3>
                      <p style={{ color: 'var(--accent, #3b82f6)', fontWeight: 600, fontSize: '0.9rem' }}>
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', sm: { alignItems: 'flex-end' }, gap: '0.4rem' }} className="items-start sm:items-end">
                      <span style={{
                        display: 'flex', alignItems: 'center', gap: '0.35rem',
                        color: 'var(--text-muted, #9a9aa3)', fontSize: '0.82rem',
                      }}>
                        <Calendar size={13} /> {exp.period}
                      </span>
                      {exp.current && (
                        <span style={{
                          padding: '0.25rem 0.7rem', borderRadius: '20px', fontSize: '0.72rem',
                          background: 'var(--accent-soft, rgba(59,130,246,0.10))',
                          color: 'var(--accent-hover, #60a5fa)',
                          border: '1px solid var(--accent-border, rgba(59,130,246,0.30))',
                          fontFamily: 'Space Grotesk', fontWeight: 600,
                        }}>Active</span>
                      )}
                    </div>
                  </div>

                  <ul style={{ marginTop: '1rem', marginBottom: '1.25rem', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-muted, #9a9aa3)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                        <span style={{ color: 'var(--accent, #3b82f6)', marginTop: '0.4rem', flexShrink: 0 }}>▹</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {exp.tags.map(t => (
                      <span key={t} style={{
                        padding: '0.3rem 0.7rem', borderRadius: '16px', fontSize: '0.75rem',
                        background: 'var(--accent-soft, rgba(59,130,246,0.10))',
                        border: '1px solid var(--accent-border, rgba(59,130,246,0.30))',
                        color: 'var(--text-muted, #9a9aa3)', fontFamily: 'Space Grotesk', fontWeight: 500,
                      }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
