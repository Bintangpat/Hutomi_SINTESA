import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const LINKS = [
  { href: '#profil', label: 'Profil' },
  { href: '#filosofi', label: 'Filosofi' },
  { href: '#visi', label: 'Visi' },
  { href: '#manifesto', label: 'Manifesto' },
  { href: '#nilai', label: 'Nilai' },
  { href: '#galeri', label: 'Galeri' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const trackRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const marqueeItem = 'PARADIGMA BARU  •  PRAKSIS PERGERAKAN  •  BEM UAP 2026  •  '

  return (
    <>
      <div className="marquee-bar" aria-hidden="true">
        <div className="marquee-track">
          <span>{marqueeItem.repeat(4)}</span>
          <span>{marqueeItem.repeat(4)}</span>
        </div>
      </div>

      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#top" className="brand">
            <span className="brand-mark">HT</span>
            <span className="brand-text">
              HUSEIN <em>&</em> TOMI
              <small>BEM UAP · 2026</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Navigasi utama">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <a href="#manifesto" className="btn btn-primary nav-cta">
            <span className="btn-icon">✓</span>
            Dukung Kami
          </a>

          <button
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            aria-label="Buka menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>

        {open && (
          <div className="nav-mobile">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="#manifesto" className="btn btn-primary" onClick={() => setOpen(false)}>
              <span className="btn-icon">✓</span> Dukung Kami
            </a>
          </div>
        )}
      </header>
    </>
  )
}
