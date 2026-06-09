# Sistem Manajemen Sekolah Digital - MIS ISLAMIYAH PARIAMAN

Dashboard profesional sistem manajemen sekolah dengan antarmuka pengguna yang modern, responsif, dan intuitif. Didesain khusus untuk memudahkan administrasi sekolah dalam mengelola data siswa, pendaftaran, nilai, dan laporan.

![Dashboard](https://img.shields.io/badge/Status-Active-green.svg)
![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi](#teknologi)
- [Struktur Folder](#struktur-folder)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Komponen UI](#komponen-ui)
- [Responsivitas](#responsivitas)
- [Dokumentasi](#dokumentasi)

## ✨ Fitur Utama

### 📊 Dashboard
- **Statistik Real-time**: Menampilkan 4 kartu statistik penting
  - Total Siswa Aktif
  - Pendaftar Baru
  - Mata Pelajaran Aktif
  - Rata-rata Nilai Siswa
- **Desain Modern**: Tema warna biru, putih, hijau dengan aksen warna yang eye-catching
- **Responsive**: Menyesuaikan dengan ukuran layar desktop, tablet, dan mobile

### 👥 Manajemen Penerimaan Siswa
- **Pendaftaran Online**: Form lengkap untuk pendaftaran siswa baru
  - Informasi Personal
  - Data Keluarga
  - Asal Sekolah
  - Pemilihan Kelas Tujuan
- **Checklist Berkas**: Daftar dokumen yang diperlukan dengan status validasi
- **Data Pendaftar**: Laporan dan monitoring pendaftar baru

### 📝 Manajemen Nilai
- **Input Nilai**: Form untuk memasukkan nilai siswa per mata pelajaran
- **Validasi Otomatis**: Memastikan nilai hanya 0-100
- **Keterangan Nilai**: Panduan rentang nilai dan kategori (Kurang, Cukup, Baik, Sangat Baik)
- **Data Nilai**: Database nilai siswa dengan filter per mata pelajaran dan semester

### 📑 Sistem Laporan
- **Laporan Penerimaan**: Data calon siswa dengan status penerimaan
- **Laporan Nilai**: Rekapitulasi nilai siswa per semester
- **Laporan Siswa**: Profil lengkap siswa aktif
- **Fungsi Cetak**: Export laporan ke printer atau PDF

### ⚙️ Master Data
- **Data Siswa**: Manajemen profil semua siswa
- **Data Kelas**: Pengelolaan kelas dan struktur organisasi
- **Mata Pelajaran**: Daftar mata pelajaran yang diajarkan

### 🔧 Pengaturan Sistem
- **Konfigurasi Sekolah**: Informasi dasar sekolah
- **Manajemen Pengguna**: Akses kontrol dan permission
- **Preferensi Sistem**: Customization dashboard

## 🛠 Teknologi

### Frontend Stack
- **HTML5**: Markup semantik modern
- **CSS3**: Styling dengan Flexbox dan Grid
- **JavaScript (Vanilla)**: Interaktivitas tanpa dependencies eksternal
- **Font Awesome 6.4**: Library ikon profesional

### Fitur Teknis
- **Responsive Design**: Mobile-first approach
- **No Framework Dependencies**: Pure vanilla JavaScript
- **Accessible**: WCAG compliance considerations
- **Performance Optimized**: Minimal load time

## 📁 Struktur Folder

```
WEBSITE-MIS-ISLAMIYAH-PARIAMAN/
├── index.html              # File HTML utama
├── README.md              # Dokumentasi proyek
├── assets/
│   ├── css/
│   │   └── style.css      # Stylesheet utama
│   ├── js/
│   │   └── script.js      # JavaScript utama
│   └── images/            # Folder untuk gambar/assets
└── .git/                  # Git repository
```

## 📦 Instalasi

### Persyaratan
- Browser modern (Chrome, Firefox, Safari, Edge)
- Text editor atau IDE (VS Code, Sublime, dll)
- Git untuk version control (opsional)

### Langkah Instalasi

1. **Clone Repository**
```bash
git clone https://github.com/syafeigantengkataemak-maker/WEBSITE-MIS-ISLAMIYAH-PARIAMAN.git
cd WEBSITE-MIS-ISLAMIYAH-PARIAMAN
```

2. **Buka di Browser**
```bash
# Gunakan Live Server (VS Code)
# Atau buka langsung: open index.html

# Atau gunakan Python server
python -m http.server 8000
# Kemudian buka: http://localhost:8000
```

3. **Akses Dashboard**
- Buka browser dan navigasi ke `http://localhost:8000` (atau sesuai port)
- Dashboard siap digunakan

## 🚀 Penggunaan

### Navigasi Menu
1. Klik item di sidebar untuk navigasi
2. Menu aktif akan ditandai dengan highlight biru terang
3. Pada mobile, gunakan tombol hamburger untuk membuka/menutup sidebar

### Input Data
1. **Pendaftaran Siswa**: Isi form lengkap dan klik "Simpan Pendaftaran"
2. **Input Nilai**: Pilih siswa, mata pelajaran, kelas, input nilai, klik "Simpan Nilai"
3. Pesan sukses akan muncul setelah data berhasil disimpan

### Mencetak Laporan
1. Buka laporan yang diinginkan
2. Klik tombol "Cetak" di bagian kanan atas tabel
3. Pilih printer atau simpan sebagai PDF

### Validasi Data
- Semua field required harus diisi
- Nilai harus antara 0-100
- Format tanggal mengikuti standar HTML date input

## 🎨 Komponen UI

### Palet Warna
| Warna | Hex Code | Penggunaan |
|-------|----------|-----------|
| Biru Tua | #003d7a | Sidebar utama |
| Biru Cerah | #3b82f6 | Button, accent |
| Hijau | #10b981 | Status accepted, success |
| Oranye | #f59e0b | Status pending, warning |
| Ungu | #a855f7 | Accent, legend |
| Abu-abu | #f3f4f6 | Background |

### Komponen Utama
- **Sidebar**: Navigasi tetap dengan collapse menu kategori
- **Header**: Judul halaman + profil pengguna
- **Kartu Statistik**: Menampilkan metrik penting
- **Form**: Input tervalidasi dengan error handling
- **Tabel**: Data display dengan sorting capability
- **Modal/Alert**: Notifikasi user action

## 📱 Responsivitas

### Breakpoints
```css
Desktop: > 1200px
Tablet: 768px - 1200px
Mobile: < 768px
```

### Adaptasi Mobile
- Sidebar menjadi drawer yang bisa dibuka/tutup
- Layout form berubah menjadi single column
- Tabel menjadi lebih compact
- Hamburger menu untuk navigasi

## 📖 Dokumentasi

### File Utama

#### `index.html`
- Struktur DOM lengkap
- Semantic HTML5 markup
- Integration dengan Font Awesome icons

#### `assets/css/style.css`
- 1000+ baris CSS terstruktur
- Responsive grid dan flexbox layout
- Custom scrollbar styling
- Animation dan transitions

#### `assets/js/script.js`
- Event handling
- Form validation
- Print functionality
- Navigation logic
- Alert system

### Fitur JavaScript

1. **Navigation Handler**: Menangani navigasi antar menu
2. **Form Validation**: Validasi input pengguna
3. **Print Function**: Export tabel ke printer
4. **Alert System**: Notifikasi user-friendly
5. **Responsive Handler**: Mengelola responsive behavior

## 🔐 Keamanan & Best Practices

- Input validation pada client-side
- CSRF protection ready (untuk backend integration)
- XSS prevention dengan text content
- Secure form handling

## 🚧 Roadmap Fitur Tambahan

- [ ] Backend API integration (Node.js/PHP)
- [ ] Database connectivity (MySQL/PostgreSQL)
- [ ] User authentication & authorization
- [ ] Advanced analytics & charts
- [ ] Export ke Excel
- [ ] Email notifications
- [ ] Mobile app version
- [ ] Dark mode theme
- [ ] Multi-language support
- [ ] Advanced search & filter

## 💡 Tips Pengembangan

### Menambah Menu Baru
1. Tambahkan item di sidebar HTML
2. Tambahkan CSS styling
3. Update JavaScript navigation handler

### Customize Warna
Edit file `style.css` dan ubah variabel warna:
```css
--color-primary: #003d7a;
--color-success: #10b981;
--color-warning: #f59e0b;
```

### Integrasi Backend
Silakan connect ke backend API dengan memodifikasi form submission di `script.js`

## 📝 Lisensi

Project ini dilisensikan di bawah MIT License - lihat file LICENSE untuk detail.

## 👨‍💻 Author

**MIS ISLAMIYAH PARIAMAN**
- Website: [MIS ISLAMIYAH PARIAMAN](https://www.misislmiyahpariaman.sch.id)
- Email: admin@misislmiyahpariaman.sch.id

## 🤝 Kontribusi

Kontribusi sangat welcome! Silakan buat pull request dengan perubahan yang Anda inginkan.

1. Fork project
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 🐛 Bug Report

Jika menemukan bug, silakan buat issue di GitHub dengan detail:
- Deskripsi bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshot/video jika memungkinkan

## 💬 Support

Untuk pertanyaan atau bantuan teknis:
- Buka issue di GitHub
- Email ke tim development
- Hubungi admin sekolah

## 📌 Changelog

### Version 1.0.0 (Released)
- ✅ Dashboard layout dan styling
- ✅ Sidebar navigation system
- ✅ Statistics cards
- ✅ Pendaftaran siswa form
- ✅ Input nilai form
- ✅ Report tables
- ✅ Print functionality
- ✅ Responsive design
- ✅ Form validation
- ✅ Alert system

---

**Last Updated**: June 9, 2026
**Status**: Production Ready ✅