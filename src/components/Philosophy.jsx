import Reveal from './Reveal.jsx'
import './Philosophy.css'

export default function Philosophy() {
  return (
    <section id="filosofi" className="section philosophy">
      <div className="container">
        <Reveal variant="up">
          <span className="eyebrow">Landasan Filosofis</span>
          <h2 className="section-title">
            Memaknai Ulang <span className="accent">Akhlakul Karimah</span><br />
            dalam Praksis Pergerakan
          </h2>
        </Reveal>

        <div className="philosophy-grid">
          <Reveal as="div" variant="left" delay={0.08} className="philosophy-card is-problem">
            <span className="tag">Keresahan</span>
            <p>
              Selama ini, Akhlakul Karimah di kampus sering direduksi sebatas
              <em> "etiket kesopanan"</em> dan <em>"kepatuhan pasif"</em>, sementara
              ketimpangan dibiarkan berjalan. BEM sering terjebak menjadi menara gading
              yang elitis — sopan ke atas, tapi tak pernah benar-benar turun ke bawah.
            </p>
          </Reveal>

          <div className="philosophy-arrow" aria-hidden="true">
            <span>→</span>
          </div>

          <Reveal as="div" variant="right" delay={0.16} className="philosophy-card is-solution">
            <span className="tag tag-on-dark">Pemaknaan Baru</span>
            <p>
              Meneladani sifat kenabian, Akhlakul Karimah harus bermanifestasi menjadi
              kesadaran etis-kritis. Bukan sekadar ritual, tapi kerja nyata menghadirkan
              keadilan sosial, meruntuhkan sistem yang menindas, dan mengadvokasi kaum
              lemah — di dalam maupun di luar kampus.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
