# TERL Web Studio — Official Website

> **Growth Your Branding.**  
> TERL Web Studio membuat identitas personal & bisnis Anda bisa diakses online dari satu Link.

Website resmi TERL Web Studio yang dibangun dengan arsitektur modern Vanilla Web Technologies (Semantic HTML5, Modular CSS3 Design System, dan Interactive JavaScript ES6+), dirancang khusus untuk kemudahan hosting gratis berkecepatan tinggi via **GitHub Pages**.

---

## 📁 Struktur Direktori Proyek

```
code/
├── index.html              # Dokumen utama halaman website (SEO-ready & OpenGraph)
├── css/
│   └── style.css           # Seluruh sistem styling, variabel warna, responsivitas
├── js/
│   └── main.js             # Logika interaktif: navigasi mobile, filter portfolio/pricing, integrasi WhatsApp
├── assets/
│   ├── images/
│   │   ├── logo.png             # Logo asli TERL (dark version / latar terang)
│   │   ├── logo-white.png       # Logo asli TERL (white version / latar gelap)
│   │   ├── logo-compact.png     # Logo versi ringkas
│   │   ├── logo-icon.png        # Icon mark TERL
│   │   └── og-banner.png        # Banner preview sosial media (WhatsApp/Twitter/LinkedIn)
│   └── icons/
│       ├── favicon.png          # Ikon tab browser (192x192)
│       └── apple-touch-icon.png # Ikon homescreen iOS
├── .nojekyll               # File krusial GitHub Pages (menonaktifkan proses Jekyll)
├── robots.txt              # Konfigurasi crawler Google / search engines
├── sitemap.xml             # Peta situs resmi untuk SEO indexing
└── .gitignore              # Mengabaikan file temporary / cache OS
```

---

## 🚀 Panduan Deploy ke GitHub Pages (Langkah demi Langkah)

### Opsi A: Menggunakan GitHub Desktop (Paling Mudah)
1. Buka aplikasi **GitHub Desktop**.
2. Pilih menu **File** → **Add Local Repository...**.
3. Pilih folder: `/Users/Apple/Documents/TERL WEB STUDIO/code`.
4. Jika muncul notifikasi *"This directory does not appear to be a Git repository"*, klik **create a repository**.
5. Beri nama repository, misalnya: `terl-web-studio`.
6. Klik **Publish repository** ke akun GitHub Anda.
7. Buka repository tersebut di browser pada **GitHub.com**.
8. Buka tab **Settings** → menu samping **Pages**.
9. Pada bagian **Build and deployment**:
   - Source: pilih **Deploy from a branch**.
   - Branch: pilih **main** dan folder `/(root)`.
   - Klik **Save**.
10. Tunggu 1–2 menit, website Anda sudah aktif online di URL:
    `https://<username-github>.github.io/terl-web-studio/`

---

### Opsi B: Upload Langsung via Web GitHub (Tanpa Install Git)
1. Login ke akun [GitHub.com](https://github.com).
2. Klik tombol **New** untuk membuat repository baru bernama `terl-web-studio` (pilih Public).
3. Di halaman repository baru, klik link **"uploading an existing file"**.
4. Drag & drop seluruh isi folder `code/` (file `index.html`, folder `css`, folder `js`, folder `assets`, `.nojekyll`, dll).
5. Klik tombol hijau **Commit changes**.
6. Masuk ke **Settings** → **Pages** → pilih branch **main** → klik **Save**.
7. Website langsung aktif!

---

### Opsi C: Menghubungkan Custom Domain (misal: `terlwebstudio.com`)
1. Di repository GitHub Anda, buka **Settings** → **Pages**.
2. Pada kolom **Custom domain**, masukkan domain Anda (contoh: `terlwebstudio.com` atau `www.terlwebstudio.com`).
3. Centang opsi **Enforce HTTPS** (sertifikat SSL gratis otomatis aktif).
4. Di panel DNS penyedia domain Anda (Cloudflare, Niagahoster, Domainesia, dsb):
   - Tambahkan CNAME Record: `www` mengarah ke `<username>.github.io`.
   - Tambahkan A Record untuk domain apex mengarah ke IP GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

---

## 🛠️ Fitur & Spesifikasi Teknis
- **Mobile-First & Ultra Responsive**: Diuji sempurna dari ponsel 360px hingga layar 4K.
- **WhatsApp Direct Funneling**: Semua CTA paket mengarahkan pelanggan langsung ke WhatsApp resmi (`+6285194732008`) dengan template brief otomatis.
- **Zero Third-party Dependencies**: Ringan, tidak perlu build tools / npm compile, langsung jalan di browser apapun.
- **SEO & Social Share Ready**: Sudah dilengkapi OpenGraph card, meta tags, sitemap, dan robots.txt.
