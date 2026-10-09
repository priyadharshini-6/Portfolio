import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `New Portfolio Message from ${form.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        console.error("Web3Forms Submission Error:", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Web3Forms Submission Connection Error:", error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  const contacts = [
    { icon: <Mail size={20} />, label: 'Email', value: 'priyadharshinireguram@gmail.com', href: 'mailto:priyadharshinireguram@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 8838708161', href: 'tel:+918838708161' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Tamil Nadu, India', href: null },
    { icon: <LinkedinIcon size={20} />, label: 'LinkedIn', value: 'priyadharshini-reguram', href: 'https://www.linkedin.com/in/priyadharshini-reguram/' },
    { icon: <GithubIcon size={20} />, label: 'GitHub', value: 'priyadharshini-6', href: 'https://github.com/priyadharshini-6' },
  ];

  return (
    <section id="contact" ref={ref} style={{ padding: '4rem 1.5rem', background: 'var(--bg, #0a0a0b)', color: 'var(--text, #f4f4f5)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '2rem', textAlign: 'center' }}
        >
          <span className="section-label" style={{ marginBottom: '0.75rem', display: 'block', color: 'var(--accent, #3b82f6)' }}>Get In Touch</span>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: 'var(--text, #f4f4f5)' }}>
            Let's <span className="gradient-text" style={{ color: 'var(--accent, #3b82f6)', background: 'none', backgroundImage: 'none', WebkitBackgroundClip: 'unset', backgroundClip: 'unset', WebkitTextFillColor: 'var(--accent, #3b82f6)' }}>Connect</span>
          </h2>
          <p style={{ color: 'var(--text-muted, #9a9aa3)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Open to internship opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text, #f4f4f5)' }}>
              Contact Details
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {contacts.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="glass-card"
                  style={{
                    borderRadius: '12px',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    backgroundColor: 'var(--surface, #111113)',
                    border: '1px solid var(--line, #232327)',
                    boxShadow: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  whileHover={{ borderColor: 'var(--accent-border, rgba(59,130,246,0.30))' }}
                >
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                    background: 'var(--accent-soft, rgba(59,130,246,0.10))',
                    border: '1px solid var(--accent-border, rgba(59,130,246,0.30))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent, #3b82f6)',
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted, #9a9aa3)', fontSize: '0.75rem', marginBottom: '0.15rem' }}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                        style={{ color: 'var(--text, #f4f4f5)', fontSize: '0.88rem', textDecoration: 'none', fontFamily: 'Space Grotesk', fontWeight: 500, transition: 'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color = 'var(--accent-hover, #60a5fa)'}
                        onMouseLeave={e => e.target.style.color = 'var(--text, #f4f4f5)'}
                      >{c.value}</a>
                    ) : (
                      <p style={{ color: 'var(--text, #f4f4f5)', fontSize: '0.88rem', fontFamily: 'Space Grotesk', fontWeight: 500 }}>{c.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card p-5 sm:p-8 rounded-[18px]"
            style={{
              backgroundColor: 'var(--surface, #111113)',
              border: '1px solid var(--line, #232327)',
              boxShadow: 'none',
            }}
          >
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text, #f4f4f5)' }}>
              Send a Message
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
              ].map(field => (
                <div key={field.name}>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted, #9a9aa3)', marginBottom: '0.4rem', fontFamily: 'Space Grotesk' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type} name={field.name} value={form[field.name]}
                    onChange={handleChange} placeholder={field.placeholder}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: '10px',
                      background: '#111113', border: '1px solid #232327',
                      color: 'var(--text, #f4f4f5)', fontSize: '0.9rem', fontFamily: 'Inter', outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-border, rgba(59,130,246,0.30))'}
                    onBlur={e => e.target.style.borderColor = 'var(--line, #232327)'}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted, #9a9aa3)', marginBottom: '0.4rem', fontFamily: 'Space Grotesk' }}>
                  Message
                </label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  rows={4} placeholder="Hi Priyadharshini, I'd love to connect about..."
                  style={{
                    width: '100%', padding: '0.75rem 1rem', borderRadius: '10px',
                    background: '#111113', border: '1px solid #232327',
                    color: 'var(--text, #f4f4f5)', fontSize: '0.9rem', fontFamily: 'Inter', outline: 'none',
                    resize: 'vertical', transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-border, rgba(59,130,246,0.30))'}
                  onBlur={e => e.target.style.borderColor = 'var(--line, #232327)'}
                />
              </div>
              <motion.button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                style={{
                  width: '100%', padding: '0.85rem', borderRadius: '10px', border: 'none',
                  background: status === 'success'
                    ? '#3b82f6'
                    : status === 'error'
                    ? '#3b82f6'
                    : 'var(--accent, #3b82f6)',
                  color: 'white', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.95rem',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  transition: 'background 0.3s', boxShadow: 'none',
                  opacity: status === 'sending' ? 0.8 : 1,
                }}
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      style={{ display: 'inline-flex' }}
                    >
                      <Loader2 size={18} />
                    </motion.div>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <><CheckCircle size={18} /> Message Sent!</>
                ) : status === 'error' ? (
                  <><AlertCircle size={18} /> Error Sending!</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
