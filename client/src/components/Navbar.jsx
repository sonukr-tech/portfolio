import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <span className={styles.logo}>SK.</span>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={e => handleNav(e, l)}>{l}</a>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.burger} ${open ? styles.open : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${open ? styles.active : ''}`}>
        {links.map((l, i) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={e => handleNav(e, l)}
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            {l}
          </a>
        ))}
      </div>
    </>
  )
}
