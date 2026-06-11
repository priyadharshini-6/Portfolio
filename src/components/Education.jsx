import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence & Data Science',
    school: 'National Engineering College',
    location: 'Kovilpatti, Tamil Nadu',
    period: '2023 – 2027',
    score: 'CGPA: 7.7 / 10',
    current: true,
    color: 'var(--violet)',
    glow: 'rgba(124,58,237,0.2)',
  },
  {
    degree: 'Higher Secondary Education',
    field: 'Science Stream',
    school: 'St. Joseph Girls Higher Secondary School',
    location: 'Tirunelveli, Tamil Nadu',
    period: '2017 – 2023',
    score: 'Percentage: 81.3%',
    current: false,
    color: 'var(--cyan)',
    glow: 'rgba(6,182,212,0.2)',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" ref={ref} style={{
      padding: '4rem 1.5rem',
      background: 'linear-gradient(180deg, transparent, rgba(124,58,237,0.03) 50%, transparent)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem' }}
        >
          <span className="section-label" style={{ marginBottom: '0.75rem', display: 'block' }}>Academic Background</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}>
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div
            className="absolute left-[19px] sm:left-[28px] top-[40px] bottom-[40px] w-[2px] opacity-30"
            style={{
              background: 'linear-gradient(180deg, var(--violet), var(--cyan))',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex gap-4 sm:gap-8 items-start"
              >
                {/* Icon dot */}
                <div
                  className="flex-shrink-0 w-[40px] h-[40px] sm:w-[58px] sm:h-[58px] rounded-[10px] sm:rounded-[14px] flex items-center justify-center relative z-10"
                  style={{
                    background: `linear-gradient(135deg, ${edu.glow}, rgba(255,255,255,0.03))`,
                    border: `2px solid ${edu.color}40`,
                    color: edu.color,
                  }}
                >
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Card */}
                <motion.div
                  className="glass-card p-5 sm:p-7 rounded-[14px] sm:rounded-[16px] flex-1"
                  whileHover={{ y: -4 }}
                  style={{
                    borderColor: `${edu.color}20`,
                    boxShadow: `0 4px 30px ${edu.glow}`,
                    transition: 'transform 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                        {edu.degree}
                      </h3>
                      <p style={{ color: edu.color, fontWeight: 600, fontSize: '0.9rem' }}>{edu.field}</p>
                    </div>
                    {edu.current && (
                      <span style={{
                        padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem',
                        background: 'rgba(124,58,237,0.15)', color: 'var(--violet-light)',
                        border: '1px solid rgba(124,58,237,0.3)', fontFamily: 'Space Grotesk', fontWeight: 600,
                      }}>Pursuing</span>
                    )}
                  </div>

                  <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text)' }}>
                    {edu.school}
                  </p>

                  <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <MapPin size={13} /> {edu.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <Calendar size={13} /> {edu.period}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: edu.color, fontSize: '0.85rem', fontWeight: 600 }}>
                      <Award size={13} /> {edu.score}
                    </span>
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
