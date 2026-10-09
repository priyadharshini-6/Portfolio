import { motion } from 'framer-motion';
import { Mail, Download, ArrowDown } from "lucide-react";
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      background: 'var(--bg, #0a0a0b)',
      color: 'var(--text, #f4f4f5)',
      overflow: 'hidden',
    }}>

      {/* Gradient orbs */}
      <div style={{
        position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
        background: 'transparent',
        top: '-200px', left: '-200px', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: 'transparent',
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
            color: 'var(--text, #f4f4f5)',
          }}
        >
          Hi, I'm <span className="gradient-text" style={{
            color: 'var(--accent, #3b82f6)',
            background: 'none',
            backgroundImage: 'none',
            WebkitBackgroundClip: 'unset',
            backgroundClip: 'unset',
            WebkitTextFillColor: 'var(--accent, #3b82f6)',
            textShadow: 'none',
          }}>Priyadharshini</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 style={{
            fontFamily: 'Space Grotesk', fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
            fontWeight: 500, color: 'var(--text-muted, #9a9aa3)', marginBottom: '1.5rem',
          }}>
            AI & Software Developer
          </h2>
          <p style={{
            fontSize: '1.05rem', color: 'var(--text-muted, #9a9aa3)', lineHeight: 1.7,
            maxWidth: '640px', margin: '0 auto 2.5rem',
          }}>
            Passionate about building intelligent solutions that bridge
            <span style={{ color: 'var(--accent, #3b82f6)' }}> Artificial Intelligence</span> and
            <span style={{ color: 'var(--accent, #3b82f6)' }}> Software Engineering</span>.
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
              background: 'var(--accent, #3b82f6)',
              color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.95rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              border: '1px solid var(--accent, #3b82f6)',
              boxShadow: 'none',
              transition: 'transform 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.background = 'var(--accent-hover, #60a5fa)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'var(--accent, #3b82f6)';
            }}
          >
            <Mail size={16} /> Contact Me
          </a>
          <a href="#projects"
            style={{
              padding: '0.85rem 1.75rem', borderRadius: '10px', textDecoration: 'none',
              background: 'transparent',
              color: 'var(--text, #f4f4f5)',
              border: '1px solid var(--line, #232327)',
              fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.95rem',
              transition: 'background 0.2s, transform 0.2s, border-color 0.2s',
              boxShadow: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent-soft, rgba(59,130,246,0.10))';
              e.currentTarget.style.borderColor = 'var(--accent-border, rgba(59,130,246,0.30))';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'var(--line, #232327)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View Projects
          </a>
          <a href="https://drive.google.com/file/d/1piRaBRjM2j1v0PmT7w9S7Wqtx_y1aWoJ/view" target="_blank" rel="noreferrer"
            style={{
              padding: '0.85rem 1.75rem', borderRadius: '10px', textDecoration: 'none',
              background: 'var(--surface, #111113)',
              color: 'var(--text, #f4f4f5)',
              border: '1px solid var(--line, #232327)',
              fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.95rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              boxShadow: 'none',
              transition: 'background 0.2s, transform 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent-soft, rgba(59,130,246,0.10))';
              e.currentTarget.style.borderColor = 'var(--accent-border, rgba(59,130,246,0.30))';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--surface, #111113)';
              e.currentTarget.style.borderColor = 'var(--line, #232327)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
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
                background: 'var(--surface, #111113)',
                border: '1px solid var(--line, #232327)',
                color: 'var(--text-muted, #9a9aa3)',
                textDecoration: 'none',
                boxShadow: 'none',
                transition: 'color 0.2s, border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--accent-hover, #60a5fa)';
                e.currentTarget.style.borderColor = 'var(--accent-border, rgba(59,130,246,0.30))';
                e.currentTarget.style.background = 'var(--accent-soft, rgba(59,130,246,0.10))';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-muted, #9a9aa3)';
                e.currentTarget.style.borderColor = 'var(--line, #232327)';
                e.currentTarget.style.background = 'var(--surface, #111113)';
              }}
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
          <a href="#about" style={{
            color: 'var(--text-muted, #9a9aa3)',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
