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
          <a href="#manifesto" className="btn btn-outline on-dark">
            <span className="btn-icon">↓</span>
            Unduh Manifesto (PDF)
          </a>
        </Reveal>
      </div>
    </section>
  )
}
