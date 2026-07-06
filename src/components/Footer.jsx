import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">02</span>
          <div>
            <strong>Husein &amp; Tomi</strong>
            <span>BEM UAP · 2026</span>
          </div>
        </div>

        <nav className="footer-links" aria-label="Tautan cepat">
          <a href="#profil">Profil</a>
          <a href="#filosofi">Filosofi</a>
          <a href="#visi">Visi</a>
          <a href="#manifesto">Manifesto</a>
          <a href="#galeri">Galeri</a>
        </nav>

        <div className="footer-social">
          <span className="footer-label">Ikuti Gerakan</span>
          <div className="footer-social-links">
            <a
              href="https://www.instagram.com/hutomi_sintesa"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a href="#" aria-label="TikTok">
              TikTok
            </a>
            <a href="#" aria-label="Kontak tim sukses">
              Kontak Tim Sukses
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© 2026 Tim Pemenangan Husein &amp; Tomi — BEM UAP.</span>
        <span>Paradigma Baru, Praksis Pergerakan.</span>
      </div>
    </section>
  );
}
