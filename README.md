# TERL Web Studio - React Native App

Aplikasi ini merupakan peralihan dari sistem HTML statis menjadi arsitektur aplikasi multi-platform menggunakan React Native. Desain telah disesuaikan dengan cermat agar terbebas dari template generik ("AI slop") dan menggunakan struktur ikon yang proper.

## 🚀 Tech Stack

Project ini dibangun menggunakan teknologi modern berikut:
- **Framework Utama:** [React Native](https://reactnative.dev/) dipadukan dengan [Expo](https://expo.dev/) (SDK 57)
- **Styling & CSS:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS untuk React Native)
- **Rendering Engine:** `react-native-webview` (untuk me-render struktur HTML asli secara pixel-perfect)
- **Ikonografi:** [Lucide React Native](https://lucide.dev/) (Menggunakan format SVG, menggantikan emoticon)
- **Font Management:** `@expo-google-fonts` (Space Grotesk, Inter, IBM Plex Mono)

---

## 📦 Cara Setup (Instalasi)

Sebelum memulai, pastikan komputer Anda sudah terinstal **Node.js**.

1. **Buka Terminal** dan arahkan ke dalam folder project ini:
   ```bash
   cd /home/thariq12/Dokumen/ngoding/terl-web-studio
   ```
2. **Install semua dependencies** (library yang dibutuhkan):
   ```bash
   npm install
   ```
   *(Proses ini mungkin memakan waktu sekitar 1-2 menit tergantung koneksi internet).*

---

## 💻 Cara Menjalankan Project

Karena kita menggunakan Expo, project ini sangat fleksibel dan bisa langsung dijalankan sebagai Website, Aplikasi Android, maupun Aplikasi iOS.

### Pilihan 1: Dijalankan sebagai Website (Browser Laptop)
Gunakan opsi ini jika Anda ingin melihat hasil codingan sebagai web desktop:
1. Ketik perintah berikut di terminal:
   ```bash
   npm run web
   ```
2. Tunggu beberapa detik, dan tampilan aplikasi akan **otomatis terbuka di browser Anda** (Chrome/Firefox/dll).

### Pilihan 2: Dijalankan sebagai Aplikasi Mobile (di HP Anda)
Gunakan opsi ini untuk melihat tampilan *mobile-first* langsung dari layar HP Anda:
1. Ketik perintah berikut di terminal:
   ```bash
   npm run dev
   ```
2. Akan muncul sebuah **QR Code** di layar terminal Anda.
3. Download aplikasi **Expo Go** secara gratis di Play Store (Android) atau App Store (iOS).
4. Buka aplikasi Expo Go di HP Anda, pilih menu **Scan QR Code**, dan arahkan kamera ke QR Code di terminal.
5. Aplikasi TERL Web Studio akan memuat dan tampil secara live di HP Anda!

> **💡 Tips Hot-Reload:** Saat server sedang berjalan (baik web maupun mobile), Anda bisa langsung mengedit file seperti `App.js` atau `legacy_index.html`. Simpan file (`Ctrl + S`), dan tampilan akan otomatis ter-update tanpa perlu mengulang perintah dari awal!

---
*TERL Web Studio — Build Your Digital Presence.*