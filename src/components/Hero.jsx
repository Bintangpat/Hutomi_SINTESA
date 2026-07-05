import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ParadigmField from './ParadigmField.jsx'
import './Hero.css'

export default function Hero() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero-eyebrow', { y: 16, opacity: 0, duration: 0.6 })
        .from('.hero-line', { yPercent: 120, opacity: 0, duration: 0.85, stagger: 0.09 }, '-=0.3')
        .from('.hero-sub', { y: 14, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-actions', { y: 14, opacity: 0, duration: 0.6 }, '-=0.45')
        .from('.hero-panel', { clipPath: 'inset(0 0 100% 0)', duration: 1 }, '-=0.9')
        .from('.hero-badge', { scale: 0, opacity: 0, duration: 0.5, ease: 'back.out(2)' }, '-=0.3')
        .from('.hero-stat', { y: 10, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.3')
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" className="hero" ref={rootRef}>
      <div className="hero-field">
        <ParadigmField className="hero-canvas" />
      </div>

      <div className="hero-inner container">
        <div className="hero-copy">
          <span className="hero-eyebrow eyebrow">Kampanye BEM UAP · 2026</span>

          <h1 className="hero-heading">
            <span className="hero-line">PARADIGMA BARU,</span>
            <span className="hero-line accent">PRAKSIS PERGERAKAN.</span>
          </h1>

          <p className="hero-sub">
            Mewujudkan BEM UAP 2026 yang <strong>independen</strong>,
            <strong> progresif</strong>, dan <strong> berdampak</strong> —
            bersama Husein Fadhilah &amp; Tomi Syahirza.
          </p>

          <div className="hero-actions">
            <a href="#profil" className="btn btn-primary">
              <span className="btn-icon">✓</span>
              Kenali Kami Lebih Dekat
            </a>
            <a href="#manifesto" className="btn btn-outline">
              <span className="btn-icon">↓</span>
              Baca Manifesto Kami
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-panel">
            <div className="hero-panel-shape shape-navy" />
            <div className="hero-panel-shape shape-red" />
            <div className="hero-portrait" role="img" aria-label="Ilustrasi Husein Fadhilah dan Tomi Syahirza">
              <svg viewBox="0 0 240 300" className="portrait-svg">
                <defs>
                  <clipPath id="p1"><circle cx="95" cy="118" r="52" /></clipPath>
                  <clipPath id="p2"><circle cx="165" cy="130" r="46" /></clipPath>
                </defs>
                <circle cx="95" cy="118" r="54" fill="#232d38" />
                <circle cx="165" cy="130" r="48" fill="#e2241b" opacity="0.9" />
                <path d="M40 250 Q95 175 150 250 Z" fill="#232d38" />
                <path d="M120 260 Q165 195 215 260 Z" fill="#e2241b" opacity="0.9" />
                <circle cx="95" cy="105" r="30" fill="#f5f3ee" />
                <circle cx="165" cy="118" r="27" fill="#f5f3ee" />
              </svg>
              <span className="portrait-note">Ganti dengan foto resmi kandidat</span>
            </div>
          </div>

          <div className="hero-badge card">
            <span className="badge-num">01</span>
            <span className="badge-label">Husein Fadhilah<br /><em>Calon Presiden</em></span>
          </div>
          <div className="hero-badge hero-badge-2 card">
            <span className="badge-num">02</span>
            <span className="badge-label">Tomi Syahirza<br /><em>Calon Wakil Presiden</em></span>
          </div>
        </div>
      </div>

      <div className="hero-stats container">
        <div className="hero-stat">
          <span className="stat-value">03</span>
          <span className="stat-label">Pilar Visi</span>
        </div>
        <div className="hero-stat">
          <span className="stat-value">05</span>
          <span className="stat-label">Manifesto Perubahan</span>
        </div>
        <div className="hero-stat">
          <span className="stat-value">04</span>
          <span className="stat-label">Nilai Dasar Penggerak</span>
        </div>
      </div>
    </section>
  )
}
