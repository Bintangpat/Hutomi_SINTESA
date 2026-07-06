import Reveal from "./Reveal.jsx";
import "./TomiProfileDetail.css";

export default function TomiProfileDetail({ onBack }) {
  return (
    <div className="profile-detail-page tomi-detail-page">
      <div className="container">
        {/* Back Button */}
        <Reveal variant="fade" delay={0.1}>
          <button
            onClick={onBack}
            className="btn-back"
            aria-label="Kembali ke Beranda"
          >
            <span className="back-arrow">←</span> Kembali ke Beranda
          </button>
        </Reveal>

        {/* Profile Hero Section */}
        <div className="profile-detail-hero">
          <Reveal variant="left" className="profile-detail-visual-wrapper">
            <div className="profile-detail-visual tone-red">
              <img
                src="/WhatsApp Image 2026-07-05 at 19.05.35.jpeg"
                alt="Tomi Syahirza"
                className="profile-detail-img"
              />
            </div>
          </Reveal>

          <Reveal variant="right" className="profile-detail-intro">
            <span className="tag profile-detail-role tomi-role">
              Calon Wakil Presiden BEM UAP 2026
            </span>
            <h1 className="profile-detail-name">Tomi Syahirza</h1>
            <p className="profile-detail-bio">
              Individu yang menjunjung tinggi nilai integritas, kejujuran,
              kedisiplinan, dan komitmen. Memiliki jiwa kepemimpinan yang kuat,
              mampu bekerja sama dalam tim, berinisiatif, dan dapat mengambil
              keputusan secara bijaksana. Berkomitmen menyelesaikan setiap tugas
              dengan penuh tanggung jawab dan tepat waktu — sosok eksekutor yang
              memastikan setiap gagasan besar benar-benar berjalan di lapangan.
            </p>

            <div className="profile-contact-grid">
              <div className="contact-item">
                <span className="contact-label">Domisili</span>
                <span className="contact-value">
                  Sukamarga, Kec. Bangkunat, Kab. Pesisir Barat
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  <a href="mailto:thomysyahirza123@gmail.com">
                    thomysyahirza123@gmail.com
                  </a>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-label">No. HP</span>
                <span className="contact-value">085384892885</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Profile Content Grid */}
        <div className="profile-detail-grid">
          {/* Left Column: Education & Organizations */}
          <div className="profile-column">
            {/* Riwayat Pendidikan */}
            <Reveal variant="up" className="detail-section">
              <h2 className="detail-section-title tomi-title">
                Riwayat Pendidikan
              </h2>
              <div className="education-list">
                {[
                  {
                    level: "Sekolah Dasar",
                    name: "SD Negeri 12 Krui",
                    location: "Pesisir Barat, Lampung",
                  },
                  {
                    level: "Sekolah Menengah Pertama",
                    name: "SMP Negeri Satu Atap 2 Krui",
                    location: "Pesisir Barat, Lampung",
                  },
                  {
                    level: "Sekolah Menengah Atas",
                    name: "SMA Takhassus AL-Qur'an",
                    location: "Wonosobo, Jawa Tengah",
                  },
                ].map((edu, idx) => (
                  <div key={idx} className="edu-card-item">
                    <div className="edu-card-dot" />
                    <div className="edu-card-body">
                      <span className="edu-level">{edu.level}</span>
                      <h3 className="edu-name">{edu.name}</h3>
                      <p className="edu-location">{edu.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Keahlian */}
            <Reveal variant="up" className="detail-section">
              <h2 className="detail-section-title tomi-title">
                Keahlian & Kompetensi
              </h2>

              <div className="skills-group">
                <h4 className="skills-group-title">Soft Skills</h4>
                <div className="skills-tags">
                  {[
                    "Komunikasi Efektif",
                    "Kerja Sama Tim",
                    "Adaptabilitas Tinggi",
                    "Negosiasi",
                    "Kepemimpinan",
                    "Inisiatif",
                    "Pengambilan Keputusan",
                    "Integritas & Komitmen",
                    "Kedisiplinan",
                    "Rasa Ingin Tahu Tinggi",
                  ].map((s) => (
                    <span key={s} className="skill-tag skill-tag-tomi">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-group">
                <h4 className="skills-group-title">
                  Hard Skills & Perangkat Lunak
                </h4>
                <div className="skills-tags">
                  {[
                    "Microsoft Word",
                    "Microsoft Excel",
                    "Administrasi Organisasi",
                    "Manajemen Program",
                    "Tata Kelola Internal",
                  ].map((s) => (
                    <span key={s} className="skill-tag skill-tag-tomi accent">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Organizational Experience */}
          <div className="profile-column">
            {/* Pengalaman Organisasi */}
            <Reveal variant="up" className="detail-section">
              <h2 className="detail-section-title tomi-title">
                Pengalaman Organisasi
              </h2>
              <div className="timeline tomi-timeline">
                <div className="timeline-item">
                  <span className="timeline-date">Aktif</span>
                  <h3 className="timeline-title">Koordinator</h3>
                  <p className="timeline-subtitle tomi-subtitle">
                    Forum Komunikasi Pemuda dan Masyarakat Bangkunat (FKPMB)
                  </p>
                  <p className="timeline-desc">
                    Menjembatani komunikasi antara pemuda dan masyarakat di
                    wilayah Bangkunat, mendorong partisipasi aktif generasi muda
                    dalam pembangunan komunitas lokal dan memperkuat sinergi
                    antara lembaga kepemudaan dan warga setempat.
                  </p>
                </div>

                <div className="timeline-item">
                  <span className="timeline-date">Aktif</span>
                  <h3 className="timeline-title">Ketua Umum</h3>
                  <p className="timeline-subtitle tomi-subtitle">
                    Himpunan Mahasiswa Farmasi (Himafa) — Universitas Aisyah
                    Pringsewu
                  </p>
                  <p className="timeline-desc">
                    Memimpin seluruh kegiatan dan program kerja himpunan
                    mahasiswa tingkat program studi, mengkoordinasikan
                    divisi-divisi internal, dan membangun budaya organisasi yang
                    produktif, inklusif, dan berorientasi pada dampak nyata bagi
                    anggota dan masyarakat.
                  </p>
                </div>

                <div className="timeline-item">
                  <span className="timeline-date">Aktif</span>
                  <h3 className="timeline-title">Ketua Divisi Edukasi</h3>
                  <p className="timeline-subtitle tomi-subtitle">
                    UKM Satgas Narkoba — Universitas Aisyah Pringsewu
                  </p>
                  <p className="timeline-desc">
                    Merancang dan menjalankan program edukasi pencegahan
                    penyalahgunaan narkotika di lingkungan kampus, berkolaborasi
                    lintas unit kegiatan mahasiswa untuk membangun kesadaran
                    kolektif tentang bahaya narkoba.
                  </p>
                </div>

                <div className="timeline-item">
                  <span className="timeline-date">Aktif</span>
                  <h3 className="timeline-title">
                    Sekretaris Bawaslu Mahasiswa
                  </h3>
                  <p className="timeline-subtitle tomi-subtitle">
                    Pemilu BEM — Universitas Aisyah Pringsewu
                  </p>
                  <p className="timeline-desc">
                    Mengawal proses pemilihan umum mahasiswa agar berjalan
                    secara demokratis, transparan, dan berkeadilan. Bertanggung
                    jawab atas pencatatan, administrasi pengawasan, dan
                    pelaporan jalannya pemilu tingkat kampus.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Visi Kepemimpinan */}
            <Reveal variant="up" className="detail-section">
              <h2 className="detail-section-title tomi-title">
                Visi Kepemimpinan
              </h2>
              <div className="vision-card tomi-vision-card">
                <blockquote className="tomi-big-quote">
                  "Gagasan sebesar apa pun akan berhenti jadi wacana kalau tata
                  kelolanya rapuh — tugas kami adalah memastikan setiap janji
                  punya jalan untuk ditepati."
                </blockquote>
                <p className="vision-sub">
                  Sebagai Calon Wakil Presiden BEM, Tomi berkomitmen untuk
                  menjadi mesin eksekusi di belakang setiap visi besar —
                  memastikan tata kelola yang rapi, program yang terukur, dan
                  setiap mahasiswa dapat merasakan dampak nyata dari
                  kepemimpinan ini.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
