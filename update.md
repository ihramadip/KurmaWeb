# Update Log - Proyek Website KURMA

Daftar perubahan dan fitur yang telah diimplementasikan oleh Gemini CLI untuk Bos Ihramadip.

## 1. Integrasi CMS Google Sheets (Serverless Ready)
- **Fitur:** Seluruh konten utama website kini dikelola melalui Google Sheets.
- **Kategori CMS:**
  - `Stats`: Anggota aktif, divisi, tahun berdiri.
  - `Programs`: Daftar program unggulan dengan ikon dinamis.
  - `Events`: Jadwal kegiatan mendatang.
  - `Team`: Daftar pengurus organisasi.
  - `Contacts`: Informasi alamat, WhatsApp, dan Email.
  - `Values`: Nilai-nilai/Visi misi organisasi.
- **Teknis:** Menggunakan `axios` dan parser CSV custom di sisi frontend agar website bisa dihosting secara gratis tanpa butuh server backend Node.js.

## 2. Fitur Detail Kegiatan & Poster Otomatis
- **Fitur:** Klik pada item kegiatan akan membuka pop-up **Detail Kegiatan**.
- **Poster Dinamis:** Menambahkan kolom `img` di Google Sheets untuk menampilkan poster kegiatan langsung dari Google Drive.
- **Sistem Cerdas:**
  - Implementasi rumus otomatis untuk mengubah link GDrive biasa menjadi link gambar yang bisa dibaca web (`lh3.googleusercontent.com`).
  - Menambahkan `referrerPolicy="no-referrer"` untuk menembus blokir privasi Google Drive 2026.
  - Menambahkan status **Loading (Spinner)** dan **Error Handling** jika gambar gagal dimuat.

## 3. Pembaruan UI & Konsistensi Visual
- **Tipografi:** Mempertebal judul pada pop-up detail agar lebih kontras dan mudah dibaca di latar belakang putih.
- **Ikon Lucide:** Mengganti seluruh emoji (📅, 📍, 🔔, 🕌, 📱, 📧) dengan ikon profesional dari library `lucide-react`.
- **Warna:** Menyelaraskan seluruh warna ikon menjadi warna **Gold** khas KURMA.
- **Animasi:** Memperbaiki sistem animasi *fade-in* menggunakan `MutationObserver` agar elemen CMS yang baru muncul tetap mendapatkan efek animasi.

## 4. Manajemen Repositori & Hosting
- **Git:** Inisialisasi repositori, pembuatan `.gitignore` yang tepat, dan push kode ke GitHub (`ihramadip/KurmaWeb`).
- **Hosting:** Refaktor kode menjadi "Frontend-Only" agar kompatibel dengan hosting gratis seperti **Vercel** atau **Netlify**.
- **Konfigurasi:** Menyiapkan struktur `Base directory: client`, `Build command: npm run build`, dan `Publish directory: dist`.

---
*Update terakhir: Rabu, 6 Mei 2026*
