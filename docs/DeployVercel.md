# Panduan Deployment & Update Fitur - Website KURMA

Dokumen ini menjelaskan alur kerja profesional untuk menjaga website tetap online dan terbaru di platform **Vercel**.

## 1. Persiapan Awal (Hanya Sekali)
Jika website belum terhubung ke Vercel, lakukan langkah ini di browser:
1. Login ke [Vercel](https://vercel.com) menggunakan akun **GitHub**.
2. Klik **Add New** > **Project**.
3. Pilih repositori **KurmaWeb**.
4. **PENTING: Konfigurasi Proyek:**
   - **Root Directory:** `client`
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Klik **Deploy**.

## 2. Alur Update Fitur Baru (Coding)
Setiap kali Bos ingin menambah fitur baru (misal: Halaman Artikel, Galeri, dll), ikuti alur ini:

### Langkah A: Kerjakan di Lokal
1. Edit kodingan di folder `client/`.
2. Tes hasil perubahan dengan menjalankan `npm run dev` di terminal folder client.
3. Pastikan tidak ada error di browser.

### Langkah B: Simpan & Kirim ke GitHub
Gunakan terminal untuk mengirim kode terbaru ke "Cloud":
```bash
git add .
git commit -m "Deskripsi perubahan: Misal Tambah Fitur Blog"
git push origin main
```

### Langkah C: Monitoring Otomatis
1. Begitu Bos melakukan `git push`, Vercel akan mendeteksi perubahan tersebut secara otomatis.
2. Vercel akan mulai proses **Building** (memasak kode menjadi file website siap pakai).
3. Dalam hitungan detik/menit, website Bos di `kurma-web.vercel.app` akan otomatis diperbarui ke versi terbaru.
4. **Selesai!** Bos tidak perlu mengutak-atik dashboard Vercel lagi.

## 3. Alur Update Konten (Tanpa Coding)
Jika Bos hanya ingin mengubah isi tulisan, jadwal kegiatan, atau foto poster:
1. Buka **Google Sheets** (CMS Kurma Web).
2. Ubah data di baris yang diinginkan atau tambah baris baru.
3. **Selesai!** Website akan otomatis menampilkan data terbaru saat di-refresh (Catatan: Ada jeda cache sekitar 1-5 menit dari sistem backend atau browser).

---
menggunakan trigerdeploy