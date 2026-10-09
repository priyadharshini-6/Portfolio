import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    color: '#7c3aed',
    skills: ['Python', 'SQL'],
  },
  {
    title: 'CS Fundamentals',
    color: '#06b6d4',
    skills: ['Data Structures & Algorithms', 'DBMS', 'Computer Networks', 'Operating Systems'],
  },
 
  {
    title: 'Databases',
    color: '#22d3ee',
    skills: ['Neo4j', 'MongoDB', 'MySQL'],
  },
  {
    title: 'AI & Tools',
    color: '#8b5cf6',
    skills: ['Machine Learning', 'Knowledge Graphs', 'Ollama', 'AI Model Integration', 'Prompt Engineering'],
  },
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card"
              whileHover={{ y: -5 }}
              style={{
                borderRadius: '16px', padding: '1.75rem',
                borderColor: `${cat.color}20`,
                transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem',
              }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: cat.color, boxShadow: `0 0 12px ${cat.color}`,
                }} />
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', color: cat.color }}>
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.05 }}
                    style={{
                      padding: '0.4rem 0.85rem', borderRadius: '20px',
                      background: `${cat.color}12`,
                      border: `1px solid ${cat.color}25`,
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
