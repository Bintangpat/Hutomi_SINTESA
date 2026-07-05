import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import './Gallery.css'

const PHOTOS = [
  {
    caption: 'Memimpin diskusi arah gerakan',
    note: 'Menunjukkan kepemimpinan',
    size: 'tall',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M8 34V14a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H20l-8 6v-4Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" /></svg>
    ),
  },
  {
    caption: 'Ngobrol lintas jurusan, tanpa sekat',
    note: 'Inklusivitas & merangkul',
    size: 'wide',
    icon: (
      <svg viewBox="0 0 48 48"><circle cx="17" cy="18" r="6" fill="none" stroke="currentColor" strokeWidth="2.2" /><circle cx="31" cy="18" r="6" fill="none" stroke="currentColor" strokeWidth="2.2" /><path d="M6 38c1-7 6-11 11-11s10 4 11 11M20 38c1-7 6-11 11-11s10 4 11 11" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
    ),
  },
  {
    caption: 'Turun langsung ke akar rumput',
    note: 'Praksis pergerakan',
    size: 'tall',
    icon: (
      <svg viewBox="0 0 48 48"><path d="M24 6v10M24 32v10M6 24h10M32 24h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /><circle cx="24" cy="24" r="7" fill="none" stroke="currentColor" strokeWidth="2.2" /></svg>
    ),
  },
  {
    caption: 'Koordinasi setara dengan Himpunan',
    note: 'Kolaborasi, bukan komando',
    size: 'wide',
    icon: (
      <svg viewBox="0 0 48 48"><rect x="7" y="10" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" /><rect x="27" y="24" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" /><path d="M21 17h6M27 34h-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
    ),
  },
]

export default function Gallery() {
  return (
    <section id="galeri" className="section gallery">
      <div className="container">
        <Reveal variant="up">
          <span className="eyebrow">Bukti Lapangan</span>
          <h2 className="section-title">
            Galeri <span className="accent">Pergerakan</span>
          </h2>
          <p className="section-sub">
            Bukan sekadar ahli teori — dokumentasi ini menunjukkan gerakan yang sudah turun ke lapangan.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {PHOTOS.map((p, idx) => (
            <motion.figure
              key={p.caption}
              className={`gallery-item size-${p.size}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="gallery-icon">{p.icon}</span>
              <figcaption>
                <strong>{p.caption}</strong>
                <span>{p.note}</span>
              </figcaption>
              <span className="gallery-placeholder-note">Ganti dengan foto dokumentasi</span>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
