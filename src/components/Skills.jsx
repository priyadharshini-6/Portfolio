import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  { title: 'Languages', skills: ['Python', 'SQL'] },
  { title: 'AI Technologies', skills: ['RAG Systems', 'LLM Integration', 'Knowledge Graphs'] },
  { title: 'Databases', skills: ['MongoDB', 'Neo4j', 'SQL', 'PL/SQL'] },
  { title: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code'] },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} style={{ padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="section-label" style={{ marginBottom: '0.75rem', display: 'block' }}>What I Work With</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div style={{ width: '60px', height: '4px', borderRadius: '4px', marginTop: '0.75rem', background: 'var(--accent)' }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card"
              whileHover={{ y: -4 }}
              style={{ borderRadius: '14px', padding: '1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.05 }}
                    style={{
                      padding: '0.4rem 0.85rem', borderRadius: '8px',
                      background: 'var(--bg)', border: '1px solid var(--line)',
                      color: 'var(--text)', fontSize: '0.82rem',
                      fontFamily: 'Space Grotesk', fontWeight: 500,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
