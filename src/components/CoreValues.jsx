import Reveal from './Reveal.jsx'
import './CoreValues.css'

const VALUES = [
  { key: 'Shiddiq', sub: 'Integritas', desc: 'Pergerakan berbasis data presisi dan fakta lapangan.' },
  { key: 'Amanah', sub: 'Tanggung Jawab', desc: 'Memikul mandat advokasi untuk seluruh mahasiswa.' },
  { key: 'Tabligh', sub: 'Komunikasi', desc: 'Menghancurkan batas elitisme melalui komunikasi dua arah yang merangkul.' },
  { key: 'Fathanah', sub: 'Kecerdasan', desc: 'Menciptakan solusi taktis atas kebuntuan kebijakan kampus dan masyarakat.' },
]

export default function CoreValues() {
  return (
    <section id="nilai" className="section core-values">
      <div className="container">
        <Reveal variant="up">
          <span className="eyebrow">Corporate Culture BEM</span>
          <h2 className="section-title">
            4 Nilai Dasar <span className="accent">Penggerak</span>
          </h2>
          <p className="section-sub">Integrasi sifat kenabian sebagai kerangka moral operasional.</p>
        </Reveal>

        <div className="values-ring">
          <div className="values-center">
            <span>AKHLAKUL<br />KARIMAH</span>
          </div>
          {VALUES.map((v, idx) => (
            <Reveal as="article" variant="scale" delay={idx * 0.08} key={v.key} className="value-card card">
              <span className="value-index">{String(idx + 1).padStart(2, '0')}</span>
              <h3 className="value-title">{v.key}</h3>
              <span className="value-sub">{v.sub}</span>
              <p className="value-desc">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
