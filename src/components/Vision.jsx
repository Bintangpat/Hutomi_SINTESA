import Reveal from './Reveal.jsx'
import './Vision.css'

const PILLARS = [
  {
    key: 'Independen',
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2.4" /><path d="M24 12v12l8 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
    ),
    desc: 'BEM bergerak murni atas kepentingan bersama seluruh sivitas akademika, bebas dari intervensi dan sandera politik pihak manapun — internal maupun eksternal.',
  },
  {
    key: 'Progresif',
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><path d="M8 34 L20 20 L28 28 L40 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M40 12h-9M40 12v9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    desc: 'Aktif, inovatif, dan tidak kaku dalam merespons dinamika zaman, untuk menjawab masalah riil di kampus dan masyarakat.',
  },
  {
    key: 'Berdampak',
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="4" fill="currentColor" /><circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="2" /><circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" opacity="0.5" /></svg>
    ),
    desc: 'Setiap program dinilai dari Return on Impact — seberapa nyata manfaat yang dirasakan oleh mahasiswa dan masyarakat luas.',
  },
]

export default function Vision() {
  return (
    <section id="visi" className="section vision">
      <div className="container">
        <Reveal variant="up">
          <span className="eyebrow">Visi Organisasi</span>
          <h2 className="section-title">
            Garis Finish yang <span className="accent">Kami Perjuangkan</span>
          </h2>
        </Reveal>

        <Reveal variant="up" delay={0.1}>
          <p className="vision-statement">
            "Mewujudkan BEM UAP yang <strong>Independen, Progresif, dan Berdampak</strong>
            {' '}melalui Tata Kelola yang Profesional, Sistem Kaderisasi yang Berkualitas,
            serta Sinergi Internal dan Eksternal Organisasi yang Berdampak Luas, dengan
            berlandaskan pada Nilai Universal Akhlakul Karimah."
          </p>
        </Reveal>

        <div className="pillar-grid">
          {PILLARS.map((p, idx) => (
            <Reveal as="article" key={p.key} variant="up" delay={0.1 + idx * 0.08} className="pillar-card card">
              <span className="pillar-icon">{p.icon}</span>
              <h3 className="pillar-title">{p.key}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
