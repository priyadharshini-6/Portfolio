import { motion } from 'framer-motion';
import { Mail, Download, ArrowDown } from "lucide-react";
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)',
      overflow: 'hidden',
    }}>

      {/* Gradient orbs */}
      <div style={{
        position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
        top: '-200px', left: '-200px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
        bottom: '-100px', right: '-100px', pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 2, textAlign: 'center',
        padding: '6rem 1.5rem 4rem', maxWidth: '900px', margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: 'Space Grotesk', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem',
          }}
        >
          Hi, I'm <span className="gradient-text">Priyadharshini</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 style={{
            fontFamily: 'Space Grotesk', fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
            fontWeight: 500, color: 'var(--text-muted)', marginBottom: '1.5rem',
          }}>
            AI & Software Developer
          </h2>
          <p style={{
            fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7,
            maxWidth: '640px', margin: '0 auto 2.5rem',
          }}>
            Passionate about building intelligent solutions that bridge
            <span style={{ color: 'var(--violet-light)' }}> Artificial Intelligence</span> and
            <span style={{ color: 'var(--cyan)' }}> Software Engineering</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          <a href="#contact"
            style={{
              padding: '0.85rem 1.75rem', borderRadius: '10px', textDecoration: 'none',
              background: 'linear-gradient(135deg, var(--violet), #5b21b6)',
              color: 'white', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.95rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              boxShadow: '0 0 25px rgba(124,58,237,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 35px rgba(124,58,237,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 25px rgba(124,58,237,0.35)'; }}
          >
            <Mail size={16} /> Contact Me
          </a>
          <a href="#projects"
            style={{
              padding: '0.85rem 1.75rem', borderRadius: '10px', textDecoration: 'none',
              background: 'transparent', color: 'var(--cyan)',
              border: '1px solid rgba(6,182,212,0.4)',
              fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.95rem',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(6,182,212,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            View Projects
          </a>
          <a href="https://drive.google.com/file/d/1piRaBRjM2j1v0PmT7w9S7Wqtx_y1aWoJ/view" target="_blank" rel="noreferrer"
            style={{
              padding: '0.85rem 1.75rem', borderRadius: '10px', textDecoration: 'none',
              background: 'rgba(255,255,255,0.05)', color: 'var(--text)',
              border: '1px solid rgba(255,255,255,0.1)',
              fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.95rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <Download size={16} /> Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'center' }}
        >
          {[
            { href: 'https://www.linkedin.com/in/priyadharshini-reguram/', icon: <LinkedinIcon size={22} />, label: 'LinkedIn' },
            { href: 'https://github.com/priyadharshini-6', icon: <GithubIcon size={22} />, label: 'GitHub' },
            { href: 'mailto:priyadharshinireguram@gmail.com', icon: <Mail size={22} />, label: 'Email' },
          ].map(s => (
            <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
              aria-label={s.label}
              style={{
                width: '44px', height: '44px', borderRadius: '10px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text-muted)', textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)'; e.currentTarget.style.background = 'rgba(6,182,212,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ marginTop: '4rem' }}
        >
          <a href="#about" style={{ color: 'var(--text-muted)', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
