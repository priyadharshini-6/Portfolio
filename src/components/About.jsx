import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Users, Lightbulb } from 'lucide-react';

const highlights = [
  { icon: <Brain size={20} />, label: 'AI & ML', desc: 'Knowledge Graphs, Intelligent Systems' },
  { icon: <Code2 size={20} />, label: 'Full Stack', desc: 'React, Node.js, MongoDB' },
  { icon: <Lightbulb size={20} />, label: 'Problem Solver', desc: 'DSA, System Design' },
  { icon: <Users size={20} />, label: 'Leader', desc: 'CSI Joint Secretary' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} style={{ padding: '4rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label" style={{ marginBottom: '0.75rem', display: 'block' }}>About Me</span>
        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>
          Bridging AI and <span className="gradient-text">Engineering</span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.25rem' }}>
            I am an enthusiastic <span style={{ color: 'var(--violet-light)' }}>AI & Software Developer</span> with a strong foundation in Computer Science, Full Stack Development, and Artificial Intelligence. I enjoy designing intelligent systems, developing scalable web applications, and solving complex problems through technology.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.25rem' }}>
            My interests span across <span style={{ color: 'var(--cyan)' }}>Artificial Intelligence, Machine Learning, Knowledge Graphs</span>, Data Structures & Algorithms, and Enterprise Software Development. I continuously explore emerging technologies and strive to build impactful solutions that create real-world value.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
            Alongside technical development, I actively contribute to student leadership initiatives and technical communities, fostering innovation, collaboration, and continuous learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="glass-card"
              style={{
                padding: '1.5rem', borderRadius: '14px',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              whileHover={{ y: -4 }}
            >
              <div style={{
                width: '42px', height: '42px', borderRadius: '10px', marginBottom: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))',
                color: 'var(--cyan)',
              }}>
                {h.icon}
              </div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, marginBottom: '0.3rem', fontSize: '0.95rem' }}>{h.label}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{h.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
