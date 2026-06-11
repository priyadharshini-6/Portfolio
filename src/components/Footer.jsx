import { Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2.5rem 1.5rem',
      textAlign: 'center',
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
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--text-muted)', textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'rgba(6,182,212,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              {s.icon}
            </a>
          ))}
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
          © {new Date().getFullYear()} Priyadharshini R.
        </p>
      </div>
    </footer>
  );
}
