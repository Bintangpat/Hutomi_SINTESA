# Husein & Tomi — BEM UAP 2026

Website kampanye satu halaman ("Paradigma Baru, Praksis Pergerakan") dibangun dengan
**Vite + React**, animasi **GSAP**, background **Three.js**, dan scroll-reveal **Framer Motion**.

## Menjalankan proyek

```bash
npm install
npm run dev       # mode pengembangan, http://localhost:5173
npm run build      # build produksi ke folder dist/
npm run preview    # preview hasil build produksi
```

## Struktur

```
src/
  components/
    Navbar.jsx           marquee bar + navigasi
    Hero.jsx              hero + ParadigmField (Three.js)
    ParadigmField.jsx      partikel: grid kaku -> menyebar (paradigma baru)
    CandidateProfiles.jsx  Section 2 — profil Husein & Tomi
    Philosophy.jsx         Section 3 — landasan filosofis
    Vision.jsx             Section 4 — visi & 3 pilar
    Manifesto.jsx          Section 5 — 5 manifesto (accordion, GSAP)
    CoreValues.jsx         Section 6 — 4 nilai dasar
    Gallery.jsx            Section 7 — galeri pergerakan
    ClosingCTA.jsx         Section 8 — penutup & CTA
    Footer.jsx
  styles/global.css        design tokens (warna, tipografi, spacing)
```

## Palet & tipografi (token, lihat `src/styles/global.css`)

- **Merah** `#e2241b` — aksen utama, gerakan/urgensi
- **Navy** `#10161d` — otoritas, bagian gelap
- **Paper** `#f5f3ee` — latar terang, terasa seperti kertas manifesto
- Display: **Anton** (judul besar, huruf kapital)
- Body: **Plus Jakarta Sans**
- Utility/label: **IBM Plex Mono** (eyebrow, nomor, caption)

## Yang perlu Anda lengkapi sebelum publish

1. **Foto asli** — semua ilustrasi kandidat & galeri saat ini masih placeholder
   duotone (SVG), ditandai dengan label kecil "Ganti dengan foto...". Ganti
   dengan foto resmi di `CandidateProfiles.jsx` (tag `<img>` menggantikan svg)
   dan `Gallery.jsx`.
2. **Data biografi kandidat** — teks berisi `[Fakultas/Jurusan]` dan
   `[Angkatan]` di `CandidateProfiles.jsx`, serta daftar riwayat organisasi
   yang masih placeholder ("Lengkapi riwayat organisasi...").
3. **Kutipan Tomi** — draf awal sudah disiapkan di `CandidateProfiles.jsx`,
   silakan sesuaikan dengan kutipan asli jika ada.
4. **Link sosial media & PDF manifesto** — di `Footer.jsx` dan `ClosingCTA.jsx`
   (tombol "Unduh Manifesto").

## Catatan animasi

- **Three.js** (`ParadigmField.jsx`): satu momen sinyatur di hero — partikel
  dimulai sebagai grid kaku lalu menyebar menjadi formasi organik saat halaman
  dimuat, merepresentasikan tagline "paradigma baru".
- **GSAP**: reveal teks hero (stagger per baris) dan animasi tinggi panel
  accordion 5 Manifesto.
- **Framer Motion**: scroll-reveal terkoordinasi di seluruh section setelah
  hero (`Reveal.jsx`), plus hover pada kartu galeri.
- Semua animasi menghormati `prefers-reduced-motion`.
