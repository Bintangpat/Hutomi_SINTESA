import Reveal from "./Reveal.jsx";
import "./HuseinProfileDetail.css";

export default function HuseinProfileDetail({ onBack }) {
  return (
    <div className="profile-detail-page">
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
            <div className="profile-detail-visual tone-navy">
              <img
                src="WhatsApp Image 2026-07-05 at 19.05.12.jpeg"
                className="husein-detail-img"
              ></img>
            </div>
          </Reveal>

          <Reveal variant="right" className="profile-detail-intro">
            <span className="tag profile-detail-role">
              Calon Presiden BEM UAP 2026
            </span>
            <h1 className="profile-detail-name">Husein Fadhilah</h1>
            <p className="profile-detail-bio">
              Seorang mahasiswa S1 Akuntansi yang bermotivasi tinggi dengan IPK
              3,95 di Universitas Aisyah Pringsewu. Memiliki keahlian analitis
              yang kuat dalam laporan keuangan, sistem akuntansi digital,
              pembuatan konten kreatif SEO, serta memiliki rekam jejak
              kepemimpinan organisasi kampus dan kepenulisan yang berprestasi.
            </p>

            <div className="profile-contact-grid">
              <div className="contact-item">
                <span className="contact-label">Domisili</span>
                <span className="contact-value">
                  Panjerejo, Gadingrejo, Pringsewu, Lampung
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  <a href="mailto:husenfadilah195@gmail.com">
                    husenfadilah195@gmail.com
                  </a>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">
                  <a
                    href="https://linkedin.com/in/husein-fadhilah-la1302256"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Husein Fadhilah
                  </a>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Profile Content Grid */}
        <div className="profile-detail-grid">
          {/* Left Column: Education, Leadership & Skills */}
          <div className="profile-column">
            {/* Pendidikan */}
            <Reveal variant="up" className="detail-section">
              <h2 className="detail-section-title">Pendidikan</h2>
              <div className="education-card">
                <div className="card-header">
                  <span className="edu-period">Sep 2023 - Sep 2027 (Est.)</span>
                  <h3 className="card-title">S1 Akuntansi</h3>
                </div>
                <p className="card-subtitle">Universitas Aisyah Pringsewu</p>
                <div className="gpa-badge">
                  <span className="gpa-label">IPK</span>
                  <span className="gpa-value">3,95 / 4,00</span>
                </div>
              </div>
            </Reveal>

            {/* Organisasi & Kepemimpinan */}
            <Reveal variant="up" className="detail-section">
              <h2 className="detail-section-title">
                Kepemimpinan & Organisasi
              </h2>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="timeline-date">2023 - 2024</span>
                  <h3 className="timeline-title">Ketua Satgas Anti-Narkoba</h3>
                  <p className="timeline-subtitle">
                    Universitas Aisyah Pringsewu
                  </p>
                  <p className="timeline-desc">
                    Memimpin 23 anggota aktif dan sukses mengoordinasikan
                    berbagai kegiatan edukasi serta pencegahan penyalahgunaan
                    narkotika di lingkungan civitas akademika.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-date">2024 - 2025</span>
                  <h3 className="timeline-title">
                    Anggota Himpunan Mahasiswa Akuntansi (HIMAKU)
                  </h3>
                  <p className="timeline-subtitle">
                    Universitas Aisyah Pringsewu
                  </p>
                  <p className="timeline-desc">
                    Mengabdi di Divisi Desain dan Publikasi. Bertanggung jawab
                    memproduksi lebih dari 20 poster, pamflet digital, serta
                    editing video dokumentasi kegiatan formal maupun informal.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Keahlian (Skills) */}
            <Reveal variant="up" className="detail-section">
              <h2 className="detail-section-title">Keahlian & Kompetensi</h2>

              <div className="skills-group">
                <h4 className="skills-group-title">Keahlian Teknis</h4>
                <div className="skills-tags">
                  {[
                    "Analisis Laporan Keuangan",
                    "Pencatatan Transaksi",
                    "Perpajakan & SPT",
                    "Rekonsiliasi Bank",
                    "Copywriting SEO",
                    "Strategi Konten",
                    "Penyuntingan Artikel",
                    "Manajemen Anggaran",
                    "Manajemen Data",
                    "Dasar Desain Grafis",
                  ].map((s) => (
                    <span key={s} className="skill-tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-group">
                <h4 className="skills-group-title">Perangkat Lunak</h4>
                <div className="skills-tags">
                  {[
                    "Microsoft Excel",
                    "Microsoft Word",
                    "Microsoft Powerpoint",
                    "Google Document & Spreadsheet",
                    "MYOB Accounting",
                    "Accurate",
                    "Canva",
                    "Pixellab",
                  ].map((s) => (
                    <span key={s} className="skill-tag accent">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills-group">
                <h4 className="skills-group-title">Keahlian Interpersonal</h4>
                <div className="skills-tags">
                  {[
                    "Detail-Oriented",
                    "Kemampuan Analitis",
                    "Manajemen Waktu",
                    "Problem Solving",
                    "Komunikasi Efektif",
                    "Berpikir Kreatif",
                    "Adaptabilitas Tinggi",
                  ].map((s) => (
                    <span key={s} className="skill-tag line">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Work Experience, Publications & Achievements */}
          <div className="profile-column">
            {/* Pengalaman Kerja */}
            <Reveal variant="up" className="detail-section">
              <h2 className="detail-section-title">Pengalaman Kerja</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="timeline-date">Apr 2022 - Sekarang</span>
                  <h3 className="timeline-title">
                    Verified Writer (Paruh Waktu)
                  </h3>
                  <p className="timeline-subtitle">IDN Times, Jakarta</p>
                  <p className="timeline-desc">
                    Menulis lebih dari 500 artikel gaya hidup, sains, dan
                    akuntansi yang dioptimalkan untuk SEO, berhasil menumbuhkan
                    tingkat pembaca aktif bulanan sebesar 25%.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-date">Des 2022 - Agu 2023</span>
                  <h3 className="timeline-title">
                    Staf Akuntan & Bendahara (Penuh Waktu)
                  </h3>
                  <p className="timeline-subtitle">
                    CV Pringsewu Ranch and Resto, Lampung
                  </p>
                  <p className="timeline-desc">
                    Mengelola laporan keuangan bulanan terperinci, memproses
                    arus kas keluar-masuk hingga Rp120 juta per bulan, serta
                    berhasil merancang sistem payroll online dan digitalisasi
                    buku kas.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-date">Jun 2022 - Nov 2022</span>
                  <h3 className="timeline-title">
                    Content Writer (Paruh Waktu)
                  </h3>
                  <p className="timeline-subtitle">
                    Arkadia Digital Media, Jakarta
                  </p>
                  <p className="timeline-desc">
                    Membuat konten gaya hidup yang menarik dan ramah pembaca
                    yang dibaca oleh lebih dari 200.000 pengguna aktif di situs
                    media grup.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="timeline-date">Jan 2022 - Apr 2022</span>
                  <h3 className="timeline-title">
                    Magang Akuntan & Front Desk
                  </h3>
                  <p className="timeline-subtitle">
                    PT Bank Rakyat Indonesia KC Pringsewu Tbk, Lampung
                  </p>
                  <p className="timeline-desc">
                    Mendukung pelayanan nasabah dan pendaftaran lebih dari 50
                    rekening baru tiap bulannya, serta melakukan input data
                    nasabah (CIF) dengan tingkat akurasi mencapai 99%.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Publikasi & Riset */}
            <Reveal variant="up" className="detail-section">
              <h2 className="detail-section-title">
                Publikasi & Riset Akademis
              </h2>
              <div className="publications-list">
                {[
                  {
                    title:
                      '"Carbon Emission Disclosure: Viewed from the Perspectives of Accounting, Market, and Environmental Performance in Highly Polluting Companies in Indonesia"',
                    desc: "Studi mendalam mengenai transparansi emisi karbon dilihat dari kinerja pasar, akuntansi, dan lingkungan.",
                  },
                  {
                    title:
                      '"Bibliometric Analysis of Sustainability Innovation and Research Trends"',
                    desc: "Analisis tren penelitian global mengenai inovasi keberlanjutan menggunakan pendekatan bibliometrik.",
                  },
                  {
                    title:
                      '"Emas di Usia Senja: Cara Cerdas Kelola Dana Pensiun"',
                    desc: "Jurnal Pengabdian Masyarakat yang memberikan tips praktis perencanaan dan pengelolaan keuangan masa tua.",
                  },
                  {
                    title:
                      '"Efektivitas Mekanisme Psikologis Dalam Komunikasi Bisnis Terhadap Iklan Media Massa CSR Sebagai Komitmen Perusahaan"',
                    desc: "Analisis psikologis efektivitas iklan CSR dalam membentuk reputasi positif korporasi.",
                  },
                ].map((pub, idx) => (
                  <div key={idx} className="publication-card">
                    <span className="pub-icon">📄</span>
                    <div className="pub-content">
                      <h4 className="pub-title">{pub.title}</h4>
                      <p className="pub-desc">{pub.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Penghargaan Utama */}
            <Reveal variant="up" className="detail-section">
              <h2 className="detail-section-title">Prestasi & Penghargaan</h2>
              <div className="awards-timeline">
                <div className="award-year-group">
                  <span className="award-year">2025</span>
                  <ul className="award-list">
                    <li>
                      Mahasiswa Berprestasi Utama (Mawapres Utama) Universitas
                      Aisyah Pringsewu
                    </li>
                    <li>Finalis PILMAPRES Tingkat S1 LLDIKTI Wilayah II</li>
                    <li>Juara 1 Business Plan Competition Pekan HIMAKOM UMJ</li>
                    <li>
                      Juara 1 National Essay HIMAMEN CHAMPIONSHIP Universitas
                      Muhammadiyah Metro
                    </li>
                  </ul>
                </div>
                <div className="award-year-group">
                  <span className="award-year">2024</span>
                  <ul className="award-list">
                    <li>
                      Mahasiswa Berprestasi ke-2 Universitas Aisyah Pringsewu
                    </li>
                    <li>Juara 2 International Essay Competition Milad UAP</li>
                    <li>
                      Juara 3 National Business Plan Competition EBEC FESTIVAL
                      Universitas Lampung
                    </li>
                  </ul>
                </div>
                <div className="award-year-group">
                  <span className="award-year">2023</span>
                  <ul className="award-list">
                    <li>
                      Juara 1 National Poem Competition PONSEL Universitas
                      Negeri Jakarta
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
