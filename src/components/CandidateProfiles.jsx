import Reveal from './Reveal.jsx'
import './CandidateProfiles.css'

const CANDIDATES = [
  {
    num: '01',
    role: 'Calon Presiden BEM',
    name: 'Husein Fadhilah',
    tone: 'navy',
    desc: 'S1 Akuntansi · Angkatan 2023. Dikenal dengan gaya kepemimpinan yang reflektif namun tegas — lebih senang mendengarkan akar rumput dahulu sebelum mengambil sikap, dan konsisten menolak kompromi pada nilai.',
    quote: 'Kita tidak sedang membangun organisasi untuk merawat rutinitas, kita sedang mewariskan peradaban pergerakan yang menolak tunduk pada keadaan.',
    tracks: [
      'Ketua Satgas Anti-Narkoba UAP (2023-2024)',
      'Mahasiswa Berprestasi Utama UAP & Finalis PILMAPRES 2025',
      'Verified Writer IDN Times (500+ Artikel Terpublikasi)'
    ],
  },
  {
    num: '02',
    role: 'Calon Wakil Presiden BEM',
    name: 'Tomi Syahirza',
    tone: 'red',
    desc: '[Fakultas / Jurusan] · Angkatan [____]. Melengkapi Husein dari sisi eksekusi — fokus pada tata kelola internal, manajemen program, dan memastikan setiap gagasan besar benar-benar berjalan di lapangan.',
    quote: 'Gagasan sebesar apa pun akan berhenti jadi wacana kalau tata kelolanya rapuh — tugas kami adalah memastikan setiap janji punya jalan untuk ditepati.',
    tracks: ['Lengkapi riwayat organisasi', 'Lengkapi pencapaian akademik/organisasi', 'Lengkapi pengalaman manajerial'],
  },
]

export default function CandidateProfiles({ onViewProfile }) {
  return (
    <section id="profil" className="section profiles">
      <div className="container">
        <Reveal variant="up">
          <span className="eyebrow on-dark">Kenali Kami Lebih Dekat</span>
          <h2 className="section-title on-dark">
            Profil <span className="accent">Kandidat</span>
          </h2>
          <p className="section-sub on-dark">
            Dua karakter yang saling melengkapi — satu menyalakan arah, satu memastikan arah itu berjalan.
          </p>
        </Reveal>

        <div className="profile-grid">
          {CANDIDATES.map((c, idx) => (
            <Reveal
              as="article"
              key={c.name}
              variant={idx === 0 ? 'left' : 'right'}
              delay={0.1}
              className={`profile-card tone-${c.tone}`}
            >
              <div className="profile-visual">
                <svg viewBox="0 0 200 200" className="profile-svg" role="img" aria-label={`Ilustrasi ${c.name}`}>
                  <circle cx="100" cy="100" r="92" fill="currentColor" opacity="0.14" />
                  <circle cx="100" cy="86" r="34" fill="currentColor" opacity="0.9" />
                  <path d="M40 172 Q100 108 160 172 Z" fill="currentColor" opacity="0.9" />
                </svg>
                <span className="profile-num">{c.num}</span>
              </div>

              <span className="tag profile-role">{c.role}</span>
              <h3 className="profile-name">{c.name}</h3>
              <p className="profile-desc">{c.desc}</p>

              <ul className="profile-tracks">
                {c.tracks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <blockquote className="profile-quote">
                “{c.quote}”
              </blockquote>

              {c.num === '01' ? (
                <button
                  className="btn btn-outline on-dark profile-btn"
                  onClick={() => onViewProfile && onViewProfile('husein')}
                >
                  Lihat Profil Lengkap <span className="btn-icon">→</span>
                </button>
              ) : (
                <button
                  className="btn btn-outline on-dark profile-btn"
                  disabled
                  title="Profil Wakil Presiden segera hadir"
                >
                  Profil Lengkap Segera Hadir
                </button>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

