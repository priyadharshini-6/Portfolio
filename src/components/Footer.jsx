import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--line, #232327)',
      padding: '2.5rem 1.5rem',
      textAlign: 'center',
      background: 'var(--bg, #0a0a0b)',
      color: 'var(--text, #f4f4f5)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.25rem' }}>
          {[
            { href: 'https://www.linkedin.com/in/priyadharshini-reguram/', icon: <LinkedinIcon size={18} />, label: 'LinkedIn' },
            { href: 'https://github.com/priyadharshini-6', icon: <GithubIcon size={18} />, label: 'GitHub' },
            { href: 'mailto:priyadharshinireguram@gmail.com', icon: <Mail size={18} />, label: 'Email' },
          ].map(s => (
            <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
              aria-label={s.label}
              style={{
                width: '38px', height: '38px', borderRadius: '8px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                background: 'var(--surface, #111113)',
                border: '1px solid var(--line, #232327)',
                color: 'var(--text-muted, #9a9aa3)',
                textDecoration: 'none',
                transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                boxShadow: 'none',
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
        </div>
        <p style={{ color: 'var(--text-muted, #9a9aa3)', fontSize: '0.82rem' }}>
          © {new Date().getFullYear()} Priyadharshini R.
        </p>
      </div>
    </footer>
  );
}
