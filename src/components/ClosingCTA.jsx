import Reveal from './Reveal.jsx'
import './ClosingCTA.css'

export default function ClosingCTA() {
  return (
    <section className="section closing">
      <div className="container closing-inner">
        <Reveal variant="up" className="closing-copy">
          <span className="eyebrow on-dark">Penutup</span>
          <p className="closing-statement">
            Gagasan kami adalah garis demarkasi perjuangan. Mari kembalikan muruah
            BEM UAP pada porsinya yang sejati — ini bukan sekadar tentang memenangkan
            kursi, ini tentang memenangkan masa depan kampus kita.
          </p>
        </Reveal>

        <Reveal variant="up" delay={0.12} className="closing-actions">
          <a href="#top" className="btn btn-primary">
            <span className="btn-icon">✓</span>
            Dukung Husein &amp; Tomi
          </a>
          <a
            href="/Visi Misi.pdf"
            download="Visi Misi SINTESA 02 - BEM UAP 2026.pdf"
            className="btn btn-outline on-dark"
          >
            <span className="btn-icon">↓</span>
            Unduh Visi &amp; Misi (PDF)
          </a>
        </Reveal>

        <Reveal variant="up" delay={0.2} className="closing-download-card">
          <div className="download-card-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
              <path d="M24 6v24M14 20l10 12 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 38h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="download-card-info">
            <span className="download-card-label">Dokumen Resmi</span>
            <h3 className="download-card-title">Visi &amp; Misi SINTESA 02</h3>
            <p className="download-card-meta">BEM UAP 2026 · Husein Fadhilah &amp; Tomi Syahirza · PDF</p>
          </div>
          <a
            href="/Visi Misi.pdf"
            download="Visi Misi SINTESA 02 - BEM UAP 2026.pdf"
            className="btn btn-primary download-card-btn"
            aria-label="Unduh dokumen Visi dan Misi SINTESA 02"
          >
            <span className="btn-icon">↓</span>
            Unduh Sekarang
          </a>
        </Reveal>
      </div>
    </section>
  )
}
