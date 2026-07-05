import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Reveal from './Reveal.jsx'
import './Manifesto.css'

const ITEMS = [
  {
    title: 'Praksis Akhlakul Karimah',
    subtitle: 'Kesadaran Etis-Kritis',
    misi: 'Membangun paradigma baru terhadap nilai Akhlakul Karimah menjadi dasar gerak organisasi.',
    cara: 'Transformasi budaya BEM dari rutinitas seremonial menjadi gerakan advokasi yang nyata — berani menyuarakan ketimpangan yang terjadi di kampus maupun masyarakat.',
  },
  {
    title: 'Good Organization Governance',
    subtitle: 'Tata Kelola Inklusif',
    misi: 'Membangun tata kelola yang independen dan akuntabel.',
    cara: 'Merombak struktur BEM yang selama ini top-down (atasan–bawahan) menjadi bottom-up yang egaliter. Menghilangkan sekat elitisme pengurus inti dengan anggota maupun himpunan, memastikan transparansi dalam setiap pengambilan keputusan.',
  },
  {
    title: 'Advokasi Internal & Sinergi Himpunan',
    subtitle: 'Koordinasi yang Setara',
    misi: 'Memperkuat fungsi BEM sebagai wadah advokasi dengan koordinasi solid dan setara.',
    cara: 'Memaksimalkan fungsi Kemendagri BEM untuk merangkul dan mensinkronisasi program dengan seluruh Himpunan Mahasiswa (HIMA). BEM hadir sebagai wadah perlindungan dan advokasi nyata untuk mahasiswa dari fakultas manapun, tanpa diskriminasi.',
  },
  {
    title: 'Reformasi Kaderisasi Berjenjang',
    subtitle: 'Regenerasi Berkelanjutan',
    misi: 'Regenerasi berkualitas yang terstruktur dan berkelanjutan.',
    cara: 'Mengubah sistem lama di mana staf muda "dilepas begitu saja". Menerapkan sistem kaderisasi berjenjang — mulai dari pelatihan dasar, pendampingan (mentoring), hingga evaluasi terukur — untuk mencetak pemimpin yang siap pakai.',
  },
  {
    title: 'Eksternalitas Akar Rumput',
    subtitle: 'Berdampak Luas',
    misi: 'Meningkatkan peran strategis BEM dalam advokasi lintas lembaga dan masyarakat.',
    cara: 'Menggeser fokus advokasi yang elitis (hanya ke DPR/KPU) menjadi advokasi yang hadir di tengah masyarakat sekitar kampus. Menyerap masalah riil di akar rumput untuk dikaji dan diadvokasikan kepada pemangku kebijakan (Pemda/DPR).',
  },
]

export default function Manifesto() {
  const [openIndex, setOpenIndex] = useState(0)
  const panelRefs = useRef([])

  useEffect(() => {
    panelRefs.current.forEach((el, idx) => {
      if (!el) return
      if (idx === openIndex) {
        gsap.set(el, { height: 'auto' })
        const h = el.offsetHeight
        gsap.fromTo(el, { height: 0 }, { height: h, duration: 0.5, ease: 'power2.out', onComplete: () => gsap.set(el, { height: 'auto' }) })
      } else {
        gsap.to(el, { height: 0, duration: 0.4, ease: 'power2.inOut' })
      }
    })
  }, [openIndex])

  return (
    <section id="manifesto" className="section manifesto">
      <div className="container">
        <Reveal variant="up">
          <span className="eyebrow on-dark">Misi &amp; Strategi</span>
          <h2 className="section-title on-dark">
            5 Manifesto <span className="accent">Perubahan</span>
          </h2>
          <p className="section-sub on-dark">
            Menjabarkan visi menjadi program kerja yang taktis dan bisa ditagih — ini caranya.
          </p>
        </Reveal>

        <div className="manifesto-list">
          {ITEMS.map((item, idx) => {
            const isOpen = idx === openIndex
            return (
              <Reveal as="div" variant="up" delay={idx * 0.05} key={item.title} className={`manifesto-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="manifesto-head"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="manifesto-index">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="manifesto-heading">
                    <span className="manifesto-title">{item.title}</span>
                    <span className="manifesto-subtitle">{item.subtitle}</span>
                  </span>
                  <span className="manifesto-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>

                <div className="manifesto-panel" ref={(el) => (panelRefs.current[idx] = el)}>
                  <div className="manifesto-panel-inner">
                    <div>
                      <span className="manifesto-label">Misi</span>
                      <p>{item.misi}</p>
                    </div>
                    <div>
                      <span className="manifesto-label">Cara Mencapai</span>
                      <p>{item.cara}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
