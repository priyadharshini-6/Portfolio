import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled backdrop
      setScrolled(window.scrollY > 50);

      // 2. Active section spy
      const scrollPosition = window.scrollY + 120; // offset for navbar height + buffer

      // Check if user is at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Check which section is in view
      const sectionElements = links.map(l => document.getElementById(l.href.replace('#', '')));
      const heroEl = document.getElementById('hero');

      let currentSection = '';

      if (heroEl && window.scrollY < heroEl.offsetHeight - 120) {
        currentSection = 'hero';
      } else {
        for (const el of sectionElements) {
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              currentSection = el.id;
              break;
            }
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 1.5rem',
        background: scrolled ? 'rgba(10,15,30,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        <a href="#hero" style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.2rem', textDecoration: 'none' }}>
          <span className="gradient-text">PR</span>
        </a>

        {/* Desktop */}
        <div style={{ gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
          {links.map(l => {
            const isActive = activeSection === l.href.replace('#', '');
            return (
              <a
                key={l.label}
                href={l.href}
                style={{
                  color: isActive ? 'var(--cyan)' : 'var(--text-muted)',
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  fontFamily: 'Space Grotesk',
                  fontWeight: isActive ? 600 : 500,
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  padding: '0.25rem 0',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.target.style.color = 'var(--text-muted)';
                  }
                }}
              >
                {l.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'var(--cyan)',
                      boxShadow: '0 0 8px var(--cyan)',
                      borderRadius: '2px',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <a href="https://drive.google.com/file/d/1piRaBRjM2j1v0PmT7w9S7Wqtx_y1aWoJ/view" target="_blank" rel="noreferrer"
            style={{
              padding: '0.5rem 1.25rem', borderRadius: '8px', fontSize: '0.875rem',
              background: 'linear-gradient(135deg, var(--violet), #5b21b6)',
              color: 'white', textDecoration: 'none', fontFamily: 'Space Grotesk', fontWeight: 600,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >Resume</a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer' }} className="md:hidden block">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: '68px', left: 0, right: 0,
              background: 'rgba(10,15,30,0.97)', borderBottom: '1px solid rgba(255,255,255,0.06)',
              padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}
          >
            {links.map(l => {
              const isActive = activeSection === l.href.replace('#', '');
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: isActive ? 'var(--cyan)' : 'var(--text)',
                    textDecoration: 'none',
                    fontFamily: 'Space Grotesk',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '1rem',
                    borderLeft: isActive ? '3px solid var(--cyan)' : 'none',
                    paddingLeft: isActive ? '0.75rem' : '0',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {l.label}
                </a>
              );
            })}
            <a href="https://drive.google.com/file/d/1piRaBRjM2j1v0PmT7w9S7Wqtx_y1aWoJ/view" target="_blank" rel="noreferrer"
              style={{ color: 'var(--cyan)', textDecoration: 'none', fontFamily: 'Space Grotesk', fontWeight: 600 }}>
              Download Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
