import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Trophy, Medal } from 'lucide-react';

const achievements = [
  {
    place: '1st',

    event: 'Extempore Event',
    venue: 'Kalasalingam University, Srivilliputhur',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.15)',
    border: 'rgba(245,158,11,0.25)',
  },
  {
    place: '2nd',
    
    event: 'Technical Debate Event',
    venue: 'Sri Krishna College of Technology, Coimbatore',
    color: '#94a3b8',
    glow: 'rgba(148,163,184,0.12)',
    border: 'rgba(148,163,184,0.2)',
  },
  {
    place: '3rd',
  
    event: 'Ideathon Event',
    venue: 'RV University, Bangalore',
    color: '#cd7f32',
    glow: 'rgba(205,127,50,0.12)',
    border: 'rgba(205,127,50,0.2)',
  },
];

const certifications = [
  { title: 'Elite + Silver – Technical English for Engineers', org: 'NPTEL' },
  { title: 'Elite + Silver – Introduction to Internet of Things', org: 'NPTEL' },
  { title: 'Elite + Silver – Industry 4.0 & Industrial IoT', org: 'NPTEL' },
  { title: 'Business Intelligence and Analytics', org: 'NPTEL' },
  { title: 'Cloud Computing', org: 'NPTEL' },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" ref={ref} style={{
      padding: '4rem 1.5rem',
      background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.03) 50%, transparent)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="section-label" style={{ marginBottom: '0.75rem', display: 'block' }}>Leadership</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>
            Community & <span className="gradient-text">Leadership</span>
          </h2>
          <motion.div
            className="glass-card p-6 sm:p-8 rounded-[18px] flex flex-col sm:flex-row gap-6 items-start"
            whileHover={{ y: -4 }}
            style={{
              borderColor: 'rgba(124,58,237,0.2)',
              boxShadow: '0 4px 30px rgba(124,58,237,0.08)',
              transition: 'transform 0.2s',
            }}
          >
            <div style={{
              width: '56px', height: '56px', borderRadius: '14px', flexShrink: 0,
              background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))',
              border: '1px solid rgba(124,58,237,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--violet-light)',
            }}>
              <Users size={26} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                Joint Secretary
              </h3>
              <p style={{ color: 'var(--violet-light)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                Computer Society of India (CSI)
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Actively contribute to organizing technical events, workshops, and knowledge-sharing initiatives while promoting innovation and professional development among students.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="section-label" style={{ marginBottom: '0.75rem', display: 'block' }}>Recognition</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>
            Awards & <span className="gradient-text">Achievements</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((a, i) => (
              <motion.div
                key={a.event}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -5, boxShadow: `0 16px 40px ${a.glow}` }}
                className="glass-card p-6 rounded-[16px]"
                style={{
                  borderColor: a.border,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{a.emoji}</div>
                <div style={{
                  display: 'inline-block', padding: '0.3rem 0.8rem', borderRadius: '20px', marginBottom: '0.75rem',
                  background: `${a.color}15`, border: `1px solid ${a.border}`,
                  color: a.color, fontSize: '0.78rem', fontFamily: 'Space Grotesk', fontWeight: 700,
                }}>
                  {a.place} Prize
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>
                  {a.event}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{a.venue}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="section-label" style={{ marginBottom: '0.75rem', display: 'block' }}>Credentials</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>
            <span className="gradient-text">Certifications</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className="glass-card p-5 rounded-[12px] flex items-center gap-4"
                style={{
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.15))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cyan)',
                }}>
                  <Award size={16} />
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', fontFamily: 'Space Grotesk', fontWeight: 600, marginBottom: '0.15rem', lineHeight: 1.4 }}>
                    {cert.title}
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{cert.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
