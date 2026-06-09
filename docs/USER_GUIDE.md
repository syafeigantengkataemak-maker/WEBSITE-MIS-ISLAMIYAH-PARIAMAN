# User Guide - Dashboard MIS ISLAMIYAH PARIAMAN

Panduan lengkap untuk menggunakan dashboard sistem manajemen sekolah.

## 📖 Daftar Isi

1. [Memulai](#memulai)
2. [Navigasi Dasar](#navigasi-dasar)
3. [Fitur Dashboard](#fitur-dashboard)
4. [Pengelolaan Pendaftaran](#pengelolaan-pendaftaran)
5. [Pengelolaan Nilai](#pengelolaan-nilai)
6. [Laporan & Cetak](#laporan--cetak)
7. [Tips & Trik](#tips--trik)
8. [Troubleshooting](#troubleshooting)

---

## 🚀 Memulai

### Akses Dashboard

1. Buka browser web Anda (Chrome, Firefox, Safari, atau Edge)
2. Masukkan alamat: `http://localhost:8000` atau sesuai domain Anda
3. Dashboard akan terbuka di halaman utama

### Antarmuka Utama

```
┌─────────────────────────────────────────────┐
│  [≡] Dashboard              [👤 Admin ▼]   │  ← Top Header
├──────────────┬──────────────────────────────┤
│              │                              │
│   Sidebar    │    Main Content Area        │
│  Navigation  │    - Statistics             │
│              │    - Forms                  │
│              │    - Reports                │
│              │    - Tables                 │
│              ├──────────────────────────────┤
│              │ © 2024 Sistem Sekolah       │  ← Footer
└──────────────┴──────────────────────────────┘
```

---

## 🧭 Navigasi Dasar

### Menu Sidebar

#### Desktop
- Sidebar selalu terlihat di sebelah kiri
- Klik menu untuk membuka halaman yang diinginkan
- Menu aktif ditandai dengan highlight biru terang

#### Mobile
- Klik tombol ☰ (hamburger) untuk membuka menu
- Klik lagi untuk menutup menu
- Tap menu item untuk berpindah halaman

### Menu Items

**DASHBOARD**
- Tampilan ringkasan statistik sekolah

**PENERIMAAN SISWA**
- Pendaftaran Siswa: Form input untuk siswa baru
- Data Pendaftar: Daftar semua pendaftar

**NILAI**
- Input Nilai: Form memasukkan nilai siswa
- Data Nilai: Database nilai siswa

**LAPORAN**
- Laporan Penerimaan: Export data pendaftar
- Laporan Nilai: Export nilai siswa
- Laporan Siswa: Export profil siswa

**MASTER**
- Data Siswa: Manajemen profil siswa
- Data Kelas: Manajemen kelas
- Mata Pelajaran: Daftar mata pelajaran

**PENGATURAN**
- Konfigurasi sistem dan preferensi

---

## 📊 Fitur Dashboard

### Statistik Kartu

Menampilkan 4 metrik penting:

1. **Total Siswa Aktif** (Biru)
   - Jumlah siswa yang terdaftar aktif
   - Ikon: Tiga orang

2. **Pendaftar Baru** (Hijau)
   - Jumlah pendaftar untuk tahun ajaran baru
   - Ikon: Orang dengan tanda tambah

3. **Mata Pelajaran Aktif** (Oranye)
   - Total jumlah mata pelajaran
   - Ikon: Buku terbuka

4. **Rata-rata Nilai** (Ungu)
   - Rata-rata nilai siswa semester ini
   - Ikon: Grafik batang

---

## 📝 Pengelolaan Pendaftaran

### Form Pendaftaran Siswa Baru

#### Langkah-Langkah:

1. **Isi Data Personal**
   - **Nama Lengkap**: Masukkan nama lengkap siswa
   - **Tempat Lahir**: Kota/kabupaten tempat lahir
   - **Tanggal Lahir**: Pilih dari date picker
   - **Jenis Kelamin**: Pilih Laki-laki atau Perempuan

2. **Isi Data Sekolah**
   - **Asal Sekolah**: Nama sekolah asal siswa
   - **Kelas Tujuan**: Pilih kelas yang dituju (1-6)

3. **Verifikasi Berkas**
   - Checklist akan menunjukkan berkas yang diperlukan
   - Setiap berkas ditandai dengan ✓ jika lengkap

4. **Simpan Data**
   - Klik tombol "Simpan Pendaftaran" (biru)
   - Akan muncul notifikasi sukses
   - Data tersimpan di sistem

#### Tips Pendaftaran:
- Pastikan semua field terisi lengkap
- Gunakan nama lengkap sesuai akta lahir
- Periksa kembali data sebelum menyimpan

---

## 📈 Pengelolaan Nilai

### Form Input Nilai Siswa

#### Langkah-Langkah:

1. **Pilih Siswa**
   - Klik dropdown "Siswa"
   - Pilih nama siswa dari daftar

2. **Pilih Mata Pelajaran**
   - Klik dropdown "Mata Pelajaran"
   - Pilih dari daftar mata pelajaran yang tersedia

3. **Pilih Kelas**
   - Klik dropdown "Kelas"
   - Pilih kelas siswa

4. **Input Nilai**
   - Masukkan angka nilai (0-100)
   - Nilai akan otomatis divalidasi
   - Sistem akan menampilkan kategori nilai

5. **Pilih Semester**
   - Klik dropdown "Semester"
   - Pilih Ganjil atau Genap

6. **Simpan Nilai**
   - Klik tombol "Simpan Nilai" (hijau)
   - Data tersimpan dalam sistem

### Keterangan Nilai

Panduan kategori nilai:

| Rentang Nilai | Kategori | Warna |
|---|---|---|
| 0 - 59 | Kurang | Merah |
| 60 - 74 | Cukup | Oranye |
| 75 - 89 | Baik | Biru |
| 90 - 100 | Sangat Baik | Hijau |

#### Tips Input Nilai:
- Nilai harus angka 0-100
- Double-check nilai sebelum simpan
- Gunakan nilai yang objektif dan terukur

---

## 📑 Laporan & Cetak

### Laporan Penerimaan Siswa

Menampilkan:
- Nomor urut
- Nama siswa
- Asal sekolah
- Tanggal pendaftaran
- Kelas tujuan
- Status penerimaan (Diterima/Proses)

#### Fitur:
- Lihat data pendaftar terbaru
- Klik "Cetak" untuk print laporan
- Klik "Lihat semua pendaftar →" untuk detail lengkap

### Laporan Nilai Siswa

Menampilkan:
- Nomor urut
- Nama siswa
- Mata pelajaran
- Kelas
- Nilai
- Semester

#### Fitur:
- Lihat nilai terbaru siswa
- Klik "Cetak" untuk print laporan
- Filter per semester (Ganjil/Genap)

### Cara Cetak Laporan

1. Buka laporan yang ingin dicetak
2. Klik tombol "Cetak" biru
3. Dialog print browser akan muncul
4. Pilih printer atau "Save as PDF"
5. Klik "Print" atau "Save"

#### Tips Cetak:
- Sesuaikan orientasi halaman (Portrait/Landscape)
- Centang "Background graphics" untuk warna
- Gunakan margin normal untuk hasil terbaik

---

## 💡 Tips & Trik

### Navigasi Cepat
- Gunakan Tab key untuk berpindah antar field form
- Tekan Enter untuk submit form
- Gunakan Esc untuk menutup menu mobile

### Validasi Form
- Pesan error akan muncul jika ada field kosong
- Nilai harus numeric dan dalam range yang valid
- Periksa tanggal input dengan hati-hati

### Performa
- Dashboard loading cepat (<2 detik)
- Semua operasi instant tanpa delay
- Cache browser untuk akses lebih cepat

### Data Backup
- Selalu backup data penting secara berkala
- Export laporan ke PDF untuk arsip
- Gunakan cloud storage untuk keamanan

### Shortcut Keyboard
| Shortcut | Fungsi |
|---|---|
| Tab | Pindah field |
| Shift+Tab | Pindah field kebelakang |
| Enter | Submit form |
| Esc | Tutup menu mobile |
| Ctrl+P | Print halaman |

---

## 🔧 Troubleshooting

### Dashboard Tidak Terbuka

**Masalah**: Page tidak load atau error
**Solusi**:
1. Refresh browser (Ctrl+F5)
2. Bersihkan cache browser
3. Coba browser lain
4. Periksa internet connection
5. Hubungi admin jika masalah berlanjut

### Form Tidak Bisa Disubmit

**Masalah**: Tombol "Simpan" tidak responsif
**Solusi**:
1. Pastikan semua field terisi
2. Periksa pesan error di form
3. Validasi data yang diisi
4. Coba refresh halaman
5. Hubungi support jika error berlanjut

### Data Tidak Tersimpan

**Masalah**: Data hilang setelah menyimpan
**Solusi**:
1. Tunggu notifikasi "Sukses" sebelum keluar
2. Jangan refresh halaman saat proses simpan
3. Periksa koneksi internet stabil
4. Hubungi admin untuk recovery data

### Alert Tidak Muncul

**Masalah**: Notifikasi tidak terlihat
**Solusi**:
1. Periksa volume suara browser
2. Bersihkan browser extension yang mengganggu
3. Coba browser lain
4. Update browser ke versi terbaru

### Laporan Cetak Tidak Rapi

**Masalah**: Print result jelek atau terpotong
**Solusi**:
1. Ubah orientasi ke Landscape jika kolom banyak
2. Kurangi zoom printing (70-80%)
3. Centang "Background graphics"
4. Test print ke PDF dulu sebelum printer fisik

### Mobile Menu Stuck

**Masalah**: Sidebar tidak bisa ditutup
**Solusi**:
1. Refresh halaman
2. Rotate device untuk reset
3. Clear browser cache
4. Coba browser lain

### Performa Lambat

**Masalah**: Dashboard loading lambat
**Solusi**:
1. Periksa koneksi internet
2. Bersihkan browser cache
3. Close tab lain yang tidak dipakai
4. Update browser
5. Hubungi admin untuk server check

---

## ❓ FAQ

**Q: Berapa kapasitas maksimal pendaftar?**
A: Sistem dapat menampung ribuan data tanpa masalah

**Q: Apakah data aman?**
A: Data disimpan lokal dan aman dari akses tidak sah

**Q: Bisakah export ke Excel?**
A: Fitur ini akan ditambahkan dalam versi mendatang

**Q: Apakah ada mobile app?**
A: Dashboard sudah responsive untuk mobile

**Q: Siapa yang bisa akses?**
A: Hanya admin terotorisasi

---

## 📞 Hubungi Support

- **Email**: admin@misislmiyahpariaman.sch.id
- **Telepon**: +62-754-xxxxxx
- **Jam Kerja**: Senin-Jumat, 07:00-17:00 WIB

---

**Versi**: 1.0.0  
**Last Updated**: June 9, 2026
