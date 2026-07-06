import Reveal from "./Reveal.jsx";
import "./NomorUrut.css";

export default function NomorUrut() {
  return (
    <section id="nomor-urut" className="section nomor-urut">
      {/* Background decorative elements */}
      <div className="nomor-bg-num" aria-hidden="true">
        02
      </div>

      <div className="container nomor-inner">
        {/* Left: Big number display */}
        <Reveal variant="left" className="nomor-display-col">
          <span className="nomor-eyebrow eyebrow on-dark">
            Nomor Urut Paslon
          </span>
          <div className="nomor-box">
            <span className="nomor-label">No.</span>
            <span className="nomor-value">02</span>
          </div>
          <div className="nomor-divider" />
          <p className="nomor-caption">
            Pemilihan Raya Badan Eksekutif Mahasiswa
            <br />
            Universitas Aisyah Pringsewu · 2026
          </p>
        </Reveal>

        {/* Right: SINTESA branding */}
        <Reveal variant="right" className="nomor-brand-col">
          <div className="nomor-brand-badge">
            <span className="brand-badge-num">02</span>
          </div>
          <h2 className="nomor-brand-name">SINTESA</h2>
          <p className="nomor-brand-tagline">
            <em>Sinergi Nyata untuk Semua</em>
          </p>
          <p className="nomor-brand-desc">
            SINTESA bukan sekadar nama — ini adalah komitmen. Sebuah janji bahwa
            kepemimpinan Husein Fadhilah &amp; Tomi Syahirza akan membangun BEM
            UAP yang <strong>terhubung</strong>, <strong>terukur</strong>, dan{" "}
            <strong>berdampak nyata</strong> bagi setiap mahasiswa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
