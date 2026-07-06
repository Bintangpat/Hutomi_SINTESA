import Reveal from "./Reveal.jsx";
import "./CandidateProfiles.css";

const CANDIDATES = [
  {
    role: "Calon Presiden BEM",
    name: "Husein Fadhilah",
    tone: "navy",
    imgsrc: "/WhatsApp Image 2026-07-05 at 19.05.12.jpeg",
    desc: "S1 Akuntansi · Angkatan 2023. Dikenal dengan gaya kepemimpinan yang reflektif namun tegas — lebih senang mendengarkan akar rumput dahulu sebelum mengambil sikap, dan konsisten menolak kompromi pada nilai.",
    quote:
      "Kita tidak sedang membangun organisasi untuk merawat rutinitas, kita sedang mewariskan peradaban pergerakan yang menolak tunduk pada keadaan.",
    tracks: [
      "Ketua Satgas Anti-Narkoba UAP (2023-2024)",
      "Mahasiswa Berprestasi Utama UAP & Finalis PILMAPRES 2025",
      "Verified Writer IDN Times (500+ Artikel Terpublikasi)",
      "Mahasiswa Berprestasi Utama (Mawapres Utama) Universitas Aisyah Pringsewu",
    ],
  },
  {
    role: "Calon Wakil Presiden BEM",
    name: "Tomi Syahirza",
    tone: "red",
    imgsrc: "/WhatsApp Image 2026-07-05 at 19.05.35.jpeg",
    desc: "S1 Farmasi · Universitas Aisyah Pringsewu. Sosok eksekutor yang tegas — Ketua Umum Himpunan Mahasiswa Farmasi, Koordinator FKPMB, dan pengawal proses demokrasi kampus yang berpengalaman.",
    quote:
      "Gagasan sebesar apa pun akan berhenti jadi wacana kalau tata kelolanya rapuh — tugas kami adalah memastikan setiap janji punya jalan untuk ditepati.",
    tracks: [
      "Ketua Umum Himpunan Mahasiswa Farmasi (Himafa)",
      "Ketua Divisi Edukasi UKM Satgas Narkoba UAP",
      "Sekretaris Bawaslu Mahasiswa Pemilu BEM UAP",
    ],
  },
];

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
            Dua karakter yang saling melengkapi — satu menyalakan arah, satu
            memastikan arah itu berjalan.
          </p>
        </Reveal>

        <div className="profile-grid">
          {CANDIDATES.map((c, idx) => (
            <Reveal
              as="article"
              key={c.name}
              variant={idx === 0 ? "left" : "right"}
              delay={0.1}
              className={`profile-card tone-${c.tone}`}
            >
              <div className="profile-visual">
                <img src={c.imgsrc}></img>
              </div>

              <span className="tag profile-role">{c.role}</span>
              <h3 className="profile-name">{c.name}</h3>
              <p className="profile-desc">{c.desc}</p>

              <ul className="profile-tracks">
                {c.tracks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <blockquote className="profile-quote">“{c.quote}”</blockquote>

              {c.num === "01" ? (
                <button
                  className="btn btn-outline on-dark profile-btn"
                  onClick={() => onViewProfile && onViewProfile("husein")}
                >
                  Lihat Profil Lengkap <span className="btn-icon">→</span>
                </button>
              ) : (
                <button
                  className="btn btn-outline on-dark profile-btn"
                  onClick={() => onViewProfile && onViewProfile("tomi")}
                >
                  Lihat Profil Lengkap <span className="btn-icon">→</span>
                </button>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
