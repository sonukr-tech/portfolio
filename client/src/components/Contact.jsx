import { useState } from 'react'
import api from '../api'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Contact.module.css'

const socials = [
  { icon: '📧', label: 'Email', value: 'sonugupta7203@gmail.com', href: 'mailto:sonugupta7203.com', color: '#00f5a0' },
  { icon: '💼', label: 'LinkedIn', value: 'Sonu Kumar', href: 'https://www.linkedin.com/in/sonu-kumar-497897292/', color: '#0077b5' },
  { icon: '📸', label: 'Instagram', value: '@sonugupta.ig', href: 'https://www.instagram.com/sonugupta.ig/', color: '#e1306c' },
  { icon: '🐙', label: 'GitHub', value: 'sonukumar', href: 'https://github.com/sonukr-tech', color: '#ffffff' },
]

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [errMsg, setErrMsg] = useState('')

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    try {
      await api.post('/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrMsg(err.response?.data?.error || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={`${styles.inner} reveal-block`} ref={ref}>
        <span className={styles.tag}>// let's talk</span>
        <h2 className={styles.title}>Connect With Me</h2>
        <div className={styles.divider} />
        <p className={styles.sub}>
          I'm always open to new opportunities, collaborations, or just a friendly chat.
          Feel free to reach out through any platform below or send a message directly!
        </p>

        <div className={styles.grid}>
          {/* Social cards */}
          <div className={styles.socials}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={styles.socialCard}>
                <div className={styles.socialIcon} style={{ '--c': s.color }}>{s.icon}</div>
                <div>
                  <div className={styles.socialLabel}>{s.label}</div>
                  <div className={styles.socialVal}>{s.value}</div>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <form className={styles.form} onSubmit={submit} noValidate>
            <h3 className={styles.formTitle}>Send a Message</h3>

            <div className={styles.field}>
              <label htmlFor="name">Your Name</label>
              <input
                id="name" name="name" type="text"
                placeholder="Sonu Kumar"
                value={form.name} onChange={handle}
                disabled={status === 'loading'}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email" name="email" type="email"
                placeholder="you@example.com"
                value={form.email} onChange={handle}
                disabled={status === 'loading'}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message"
                placeholder="Hi Sonu, I'd love to collaborate on..."
                rows={5}
                value={form.message} onChange={handle}
                disabled={status === 'loading'}
                required
              />
            </div>

            {status === 'success' && (
              <div className={styles.successMsg}>
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className={styles.errorMsg}>❌ {errMsg}</div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
