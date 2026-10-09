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
    color: '#06b6d4',
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
    color: '#7c3aed',
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
    <section id="experience" ref={ref} style={{ padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="section-label" style={{ marginBottom: '0.75rem', display: 'block' }}>Work History</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div
            className="absolute left-[19px] sm:left-[29px] top-[50px] bottom-[50px] w-[2px] opacity-25"
            style={{
              background: 'linear-gradient(180deg, var(--violet), var(--cyan))',
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
                    background: `linear-gradient(135deg, ${exp.color}20, rgba(255,255,255,0.02))`,
                    border: `2px solid ${exp.color}35`,
                    color: exp.color,
                  }}
                >
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <motion.div
                  className="glass-card p-5 sm:p-7 rounded-[14px] sm:rounded-[18px] flex-1"
                  whileHover={{ y: -4 }}
                  style={{ borderColor: `${exp.color}15`, transition: 'transform 0.2s' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                        {exp.title}
                      </h3>
                      <p style={{ color: exp.color, fontWeight: 600, fontSize: '0.9rem' }}>
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', sm: { alignItems: 'flex-end' }, gap: '0.4rem' }} className="items-start sm:items-end">
                      <span style={{
                        display: 'flex', alignItems: 'center', gap: '0.35rem',
                        color: 'var(--text-muted)', fontSize: '0.82rem',
                      }}>
                        <Calendar size={13} /> {exp.period}
                      </span>
                      {exp.current && (
                        <span style={{
                          padding: '0.25rem 0.7rem', borderRadius: '20px', fontSize: '0.72rem',
                          background: 'rgba(124,58,237,0.12)', color: 'var(--violet-light)',
                          border: '1px solid rgba(124,58,237,0.25)', fontFamily: 'Space Grotesk', fontWeight: 600,
                        }}>Active</span>
                      )}
                    </div>
                  </div>

                  <ul style={{ marginTop: '1rem', marginBottom: '1.25rem', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                        <span style={{ color: exp.color, marginTop: '0.4rem', flexShrink: 0 }}>▹</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {exp.tags.map(t => (
                      <span key={t} style={{
                        padding: '0.3rem 0.7rem', borderRadius: '16px', fontSize: '0.75rem',
                        background: `${exp.color}10`, border: `1px solid ${exp.color}20`,
                        color: 'var(--text-muted)', fontFamily: 'Space Grotesk', fontWeight: 500,
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
