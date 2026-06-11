import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Brain, BookOpen, UserCheck, Database } from 'lucide-react';

const projects = [
  {
    icon: <Brain size={28} />,
    title: 'AI-Based Knowledge Graph Builder',
    subtitle: 'Enterprise Intelligence Platform',
    desc: 'Intelligent knowledge graph platform that transforms enterprise data into interconnected relationships using Neo4j and AI-powered processing. Enables advanced data discovery, relationship analysis, and enterprise intelligence.',
    tags: ['Neo4j', 'Python', 'AI', 'Knowledge Graphs', 'Ollama'],
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.15)',
  },
  {
    icon: <BookOpen size={28} />,
    title: 'LearnMate',
    subtitle: 'Personalized Study Companion',
    desc: 'AI-powered educational platform that provides personalized learning support, study recommendations, and adaptive assistance to improve student learning outcomes.',
    tags: ['React.js', 'Gemini API', 'OpenRouter', 'Supabase', 'AI'],
    color: '#06b6d4',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: <UserCheck size={28} />,
    title: 'IntelliMatch AI',
    subtitle: 'Intelligent Career Assistance',
    desc: 'Career assistance platform that analyzes resumes and internship requirements to generate compatibility scores, identify skill gaps, and create personalized cover letters within seconds.',
    tags: ['Python', 'NLP', 'Machine Learning', 'AI', 'React.js'],
    color: '#a78bfa',
    glow: 'rgba(167,139,250,0.15)',
  },
  {
    icon: <Database size={28} />,
    title: 'Enterprise Resource Planning',
    subtitle: 'ERP System',
    desc: 'Comprehensive ERP solution designed to streamline organizational operations, manage resources efficiently, and improve workflow automation across enterprise functions.',
    tags: ['Node.js', 'MongoDB', 'React.js', 'Express.js', 'REST API'],
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.15)',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} style={{
      padding: '4rem 1.5rem',
      background: 'linear-gradient(180deg, transparent, rgba(6,182,212,0.02) 50%, transparent)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="section-label" style={{ marginBottom: '0.75rem', display: 'block' }}>What I've Built</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-[18px]"
              whileHover={{ y: -6, boxShadow: `0 20px 60px ${p.glow}` }}
              style={{
                borderColor: `${p.color}20`,
                transition: 'transform 0.25s, box-shadow 0.25s',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Background gradient accent */}
              <div style={{
                position: 'absolute', top: 0, right: 0, width: '200px', height: '200px',
                borderRadius: '50%', background: `radial-gradient(circle, ${p.glow} 0%, transparent 70%)`,
                transform: 'translate(50%, -50%)', pointerEvents: 'none',
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px', flexShrink: 0,
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
                  <p style={{ color: p.color, fontSize: '0.82rem', fontWeight: 600 }}>{p.subtitle}</p>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                {p.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
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
        </div>
      </div>
    </section>
  );
}
