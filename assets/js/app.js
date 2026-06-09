// ============================================
// DASHBOARD MANAGEMENT SYSTEM - FULLY FUNCTIONAL
// ============================================

// ============================================
// LOCAL STORAGE MANAGEMENT
// ============================================

const StorageManager = {
    init: function() {
        if (!localStorage.getItem('registrations')) {
            localStorage.setItem('registrations', JSON.stringify([]));
        }
        if (!localStorage.getItem('grades')) {
            localStorage.setItem('grades', JSON.stringify([]));
        }
        if (!localStorage.getItem('students')) {
            localStorage.setItem('students', JSON.stringify(this.defaultStudents()));
        }
        if (!localStorage.getItem('subjects')) {
            localStorage.setItem('subjects', JSON.stringify(this.defaultSubjects()));
        }
    },
    
    defaultStudents: function() {
        return [
            { id: 'STU001', nama: 'Ahmad Reza Pratama', nisn: '1234567890', kelasId: '1A', jenisKelamin: 'laki-laki' },
            { id: 'STU002', nama: 'Siti Nurhaliza', nisn: '1234567891', kelasId: '1A', jenisKelamin: 'perempuan' },
            { id: 'STU003', nama: 'Muhammad Ridho', nisn: '1234567892', kelasId: '2A', jenisKelamin: 'laki-laki' },
            { id: 'STU004', nama: 'Ayu Puspita Sari', nisn: '1234567893', kelasId: '3A', jenisKelamin: 'perempuan' },
            { id: 'STU005', nama: 'Budi Santoso', nisn: '1234567894', kelasId: '2A', jenisKelamin: 'laki-laki' }
        ];
    },
    
    defaultSubjects: function() {
        return [
            { id: 'SUB001', name: 'Matematika' },
            { id: 'SUB002', name: 'Bahasa Indonesia' },
            { id: 'SUB003', name: 'IPA' },
            { id: 'SUB004', name: 'IPS' },
            { id: 'SUB005', name: 'Pendidikan Agama' }
        ];
    },
    
    // Registrations
    getRegistrations: function() {
        return JSON.parse(localStorage.getItem('registrations')) || [];
    },
    
    addRegistration: function(data) {
        const registrations = this.getRegistrations();
        const newReg = {
            id: 'REG' + Date.now(),
            ...data,
            status: 'pending',
            createdAt: new Date().toLocaleDateString('id-ID')
        };
        registrations.push(newReg);
        localStorage.setItem('registrations', JSON.stringify(registrations));
        return newReg;
    },
    
    updateRegistration: function(id, data) {
        let registrations = this.getRegistrations();
        registrations = registrations.map(reg => reg.id === id ? { ...reg, ...data } : reg);
        localStorage.setItem('registrations', JSON.stringify(registrations));
    },
    
    deleteRegistration: function(id) {
        let registrations = this.getRegistrations();
        registrations = registrations.filter(reg => reg.id !== id);
        localStorage.setItem('registrations', JSON.stringify(registrations));
    },
    
    // Grades
    getGrades: function() {
        return JSON.parse(localStorage.getItem('grades')) || [];
    },
    
    addGrade: function(data) {
        const grades = this.getGrades();
        const newGrade = {
            id: 'GRD' + Date.now(),
            ...data,
            createdAt: new Date().toLocaleDateString('id-ID')
        };
        grades.push(newGrade);
        localStorage.setItem('grades', JSON.stringify(grades));
        return newGrade;
    },
    
    deleteGrade: function(id) {
        let grades = this.getGrades();
        grades = grades.filter(grade => grade.id !== id);
        localStorage.setItem('grades', JSON.stringify(grades));
    },
    
    getStudents: function() {
        return JSON.parse(localStorage.getItem('students')) || [];
    },
    
    getSubjects: function() {
        return JSON.parse(localStorage.getItem('subjects')) || [];
    },
    
    getStudentName: function(id) {
        const student = this.getStudents().find(s => s.id === id);
        return student ? student.nama : 'Unknown';
    },
    
    getSubjectName: function(id) {
        const subject = this.getSubjects().find(s => s.id === id);
        return subject ? subject.name : 'Unknown';
    },
    
    clearAllData: function() {
        localStorage.removeItem('registrations');
        localStorage.removeItem('grades');
        localStorage.setItem('registrations', JSON.stringify([]));
        localStorage.setItem('grades', JSON.stringify([]));
    }
};

// ============================================
// SIDEBAR & NAVIGATION
// ============================================

const hamburgerMenu = document.getElementById('hamburgerMenu');
const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('.nav-item');
const pageTitle = document.querySelector('.page-title');
const dashboardPage = document.getElementById('dashboard-page');

// Toggle sidebar
hamburgerMenu?.addEventListener('click', function() {
    sidebar.classList.toggle('open');
});

// Navigation
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        const menuName = this.getAttribute('data-menu');
        updatePageTitle(menuName);
        
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });
});

function updatePageTitle(menuName) {
    const titles = {
        'dashboard': 'Dashboard',
        'pendaftaran': 'Pendaftaran Siswa',
        'data-pendaftar': 'Data Pendaftar',
        'input-nilai': 'Input Nilai',
        'data-nilai': 'Data Nilai',
        'laporan-penerimaan': 'Laporan Penerimaan',
        'laporan-nilai': 'Laporan Nilai',
        'laporan-siswa': 'Laporan Siswa',
        'data-siswa': 'Data Siswa',
        'data-kelas': 'Data Kelas',
        'mata-pelajaran': 'Mata Pelajaran',
        'pengaturan': 'Pengaturan'
    };
    
    pageTitle.textContent = titles[menuName] || 'Dashboard';
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnHamburger = hamburgerMenu?.contains(event.target);
    
    if (!isClickInsideSidebar && !isClickOnHamburger && window.innerWidth <= 768) {
        sidebar.classList.remove('open');
    }
});

// ============================================
// DASHBOARD STATISTICS
// ============================================

function updateDashboardStats() {
    const students = StorageManager.getStudents();
    const registrations = StorageManager.getRegistrations();
    const grades = StorageManager.getGrades();
    const subjects = StorageManager.getSubjects();
    
    // Update Siswa Aktif
    const siswaCard = document.querySelector('.stat-card-blue .stat-value');
    if (siswaCard) siswaCard.textContent = students.length;
    
    // Update Pendaftar Baru
    const pendaftarCard = document.querySelector('.stat-card-green .stat-value');
    if (pendaftarCard) pendaftarCard.textContent = registrations.filter(r => r.status === 'pending').length;
    
    // Update Mata Pelajaran
    const matapelajaranCard = document.querySelector('.stat-card-orange .stat-value');
    if (matapelajaranCard) matapelajaranCard.textContent = subjects.length;
    
    // Update Rata-rata Nilai
    if (grades.length > 0) {
        const rataRata = (grades.reduce((sum, g) => sum + parseInt(g.value), 0) / grades.length).toFixed(2);
        const nilaiCard = document.querySelector('.stat-card-purple .stat-value');
        if (nilaiCard) nilaiCard.textContent = rataRata;
    }
    
    // Update laporan tables
    updateReportTables();
}

// ============================================
// REGISTRATION FORM
// ============================================

const registrationForm = document.querySelector('.registration-form');

if (registrationForm) {
    // Populate dropdown dengan data dari storage
    function populateStudentDropdowns() {
        const students = StorageManager.getStudents();
        const siswaDropdown = document.getElementById('siswa');
        
        if (siswaDropdown) {
            siswaDropdown.innerHTML = '<option value="">-- Pilih Siswa --</option>';
            students.forEach(student => {
                const option = document.createElement('option');
                option.value = student.id;
                option.textContent = student.nama;
                siswaDropdown.appendChild(option);
            });
        }
    }
    
    // Populate mata pelajaran
    function populateSubjectDropdown() {
        const subjects = StorageManager.getSubjects();
        const subjectDropdown = document.getElementById('mata-pelajaran-input');
        
        if (subjectDropdown) {
            subjectDropdown.innerHTML = '<option value="">-- Pilih Mata Pelajaran --</option>';
            subjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject.id;
                option.textContent = subject.name;
                subjectDropdown.appendChild(option);
            });
        }
    }
    
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            namaLengkap: document.getElementById('nama-lengkap').value,
            tempatLahir: document.getElementById('tempat-lahir').value,
            tanggalLahir: document.getElementById('tanggal-lahir').value,
            jenisKelamin: document.getElementById('jenis-kelamin').value,
            asalSekolah: document.getElementById('asal-sekolah').value,
            kelasTujuan: document.getElementById('kelas-tujuan').value
        };
        
        if (!validateRegistrationForm(formData)) {
            showAlert('Mohon isi semua field yang diperlukan', 'error');
            return;
        }
        
        try {
            const newReg = StorageManager.addRegistration(formData);
            showAlert('✓ Pendaftaran berhasil! ID: ' + newReg.id, 'success');
            registrationForm.reset();
            updateDashboardStats();
        } catch (error) {
            showAlert('✗ Terjadi kesalahan: ' + error.message, 'error');
        }
    });
    
    populateStudentDropdowns();
    populateSubjectDropdown();
}

function validateRegistrationForm(data) {
    return data.namaLengkap && data.tempatLahir && data.tanggalLahir && 
           data.jenisKelamin && data.asalSekolah && data.kelasTujuan;
}

// ============================================
// GRADE FORM
// ============================================

const gradeForm = document.querySelector('.grade-form');

if (gradeForm) {
    gradeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            studentId: document.getElementById('siswa').value,
            subjectId: document.getElementById('mata-pelajaran-input').value,
            classId: document.getElementById('kelas-input').value,
            value: document.getElementById('nilai').value,
            semester: document.getElementById('semester').value
        };
        
        if (!validateGradeForm(formData)) {
            showAlert('Mohon isi semua field yang diperlukan', 'error');
            return;
        }
        
        const nilaiValue = parseInt(formData.value);
        if (nilaiValue < 0 || nilaiValue > 100) {
            showAlert('Nilai harus berada di antara 0-100', 'error');
            return;
        }
        
        try {
            const newGrade = StorageManager.addGrade(formData);
            showAlert('✓ Nilai berhasil disimpan! ID: ' + newGrade.id, 'success');
            gradeForm.reset();
            updateDashboardStats();
        } catch (error) {
            showAlert('✗ Terjadi kesalahan: ' + error.message, 'error');
        }
    });
}

function validateGradeForm(data) {
    return data.studentId && data.subjectId && data.classId && data.value && data.semester;
}

// ============================================
// REPORT TABLES
// ============================================

function updateReportTables() {
    updateRegistrationTable();
    updateGradeTable();
}

function updateRegistrationTable() {
    const registrations = StorageManager.getRegistrations();
    const tbody = document.querySelector('.report-table tbody');
    
    if (!tbody) return;
    
    if (registrations.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 20px;">Tidak ada data pendaftar</td></tr>';
        return;
    }
    
    tbody.innerHTML = registrations.map((reg, idx) => `
        <tr>
            <td>${idx + 1}</td>
            <td>${reg.namaLengkap}</td>
            <td>${reg.asalSekolah}</td>
            <td>${reg.createdAt}</td>
            <td>${reg.kelasTujuan}</td>
            <td>
                <span class="badge badge-${reg.status === 'approved' ? 'accepted' : 'pending'}">
                    ${reg.status === 'approved' ? 'Diterima' : 'Proses'}
                </span>
                <button class="btn-delete" onclick="deleteRegistration('${reg.id}')" style="margin-left:8px; padding:4px 8px; background:#ef4444; color:white; border:none; border-radius:4px; cursor:pointer; font-size:11px;">Hapus</button>
            </td>
        </tr>
    `).join('');
}

function updateGradeTable() {
    const grades = StorageManager.getGrades();
    const tables = document.querySelectorAll('.report-table');
    
    if (tables.length < 2) return;
    
    const gradeTableBody = tables[1].querySelector('tbody');
    
    if (!gradeTableBody) return;
    
    if (grades.length === 0) {
        gradeTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 20px;">Tidak ada data nilai</td></tr>';
        return;
    }
    
    gradeTableBody.innerHTML = grades.map((grade, idx) => `
        <tr>
            <td>${idx + 1}</td>
            <td>${StorageManager.getStudentName(grade.studentId)}</td>
            <td>${StorageManager.getSubjectName(grade.subjectId)}</td>
            <td>${grade.classId}</td>
            <td><strong>${grade.value}</strong></td>
            <td>
                ${grade.semester}
                <button class="btn-delete" onclick="deleteGrade('${grade.id}')" style="margin-left:8px; padding:4px 8px; background:#ef4444; color:white; border:none; border-radius:4px; cursor:pointer; font-size:11px;">Hapus</button>
            </td>
        </tr>
    `).join('');
}

// Delete functions
function deleteRegistration(id) {
    if (confirm('Yakin ingin menghapus pendaftaran ini?')) {
        StorageManager.deleteRegistration(id);
        updateDashboardStats();
        showAlert('✓ Data berhasil dihapus', 'success');
    }
}

function deleteGrade(id) {
    if (confirm('Yakin ingin menghapus nilai ini?')) {
        StorageManager.deleteGrade(id);
        updateDashboardStats();
        showAlert('✓ Data berhasil dihapus', 'success');
    }
}

// ============================================
// PRINT FUNCTIONALITY
// ============================================

const printButtons = document.querySelectorAll('.btn-print');

printButtons.forEach((button, idx) => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const reportBox = this.closest('.report-box');
        const reportTitle = reportBox.querySelector('.report-title').textContent;
        const table = reportBox.querySelector('.report-table');
        
        printReport(reportTitle, table);
    });
});

function printReport(title, table) {
    const printWindow = window.open('', '_blank');
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background: white;
                }
                h1 {
                    text-align: center;
                    color: #003d7a;
                    font-size: 18px;
                    margin-bottom: 20px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 10px;
                    text-align: left;
                }
                th {
                    background-color: #f3f4f6;
                    font-weight: bold;
                    color: #333;
                }
                tr:nth-child(even) {
                    background-color: #f9fafb;
                }
                .badge {
                    padding: 4px 8px;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: bold;
                }
                .badge-accepted {
                    background: #d1fae5;
                    color: #047857;
                }
                .badge-pending {
                    background: #fed7aa;
                    color: #b45309;
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    font-size: 12px;
                    color: #999;
                }
            </style>
        </head>
        <body>
            <h1>${title}</h1>
            <table>${table.innerHTML}</table>
            <div class="footer">
                <p>Dicetak pada: ${new Date().toLocaleString('id-ID')}</p>
                <p>© 2024 Sistem Sekolah MIS ISLAMIYAH PARIAMAN</p>
            </div>
        </body>
        </html>
    `;
    
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    
    setTimeout(() => {
        printWindow.print();
    }, 250);
}

// ============================================
// ALERT/NOTIFICATION SYSTEM
// ============================================

function showAlert(message, type = 'info') {
    let alertContainer = document.querySelector('.alert-container');
    
    if (!alertContainer) {
        alertContainer = document.createElement('div');
        alertContainer.className = 'alert-container';
        alertContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            max-width: 400px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        `;
        document.body.appendChild(alertContainer);
    }
    
    const alertBox = document.createElement('div');
    alertBox.className = `alert alert-${type}`;
    
    const bgColor = type === 'success' ? '#d1fae5' : 
                   type === 'error' ? '#fee2e2' : '#dbeafe';
    const textColor = type === 'success' ? '#065f46' : 
                     type === 'error' ? '#7f1d1d' : '#1e40af';
    const borderColor = type === 'success' ? '#6ee7b7' : 
                       type === 'error' ? '#fca5a5' : '#93c5fd';
    
    alertBox.style.cssText = `
        background: ${bgColor};
        color: ${textColor};
        border: 1px solid ${borderColor};
        border-radius: 8px;
        padding: 12px 16px;
        margin-bottom: 10px;
        animation: slideIn 0.3s ease-out;
    `;
    
    alertBox.textContent = message;
    alertContainer.appendChild(alertBox);
    
    setTimeout(() => {
        alertBox.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => alertBox.remove(), 300);
    }, 4000);
}

// ============================================
// ANIMATIONS
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(400px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(400px);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize storage
    StorageManager.init();
    
    // Update dashboard on load
    updateDashboardStats();
    
    console.log('✓ Dashboard MIS ISLAMIYAH PARIAMAN loaded successfully');
    console.log('✓ Storage Manager initialized');
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
    }
});

// ============================================
// EXPORT DATA (BONUS)
// ============================================

function exportToCSV(data, filename) {
    const csv = data.map(row => 
        Object.values(row).join(',')
    ).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Expose globally for use
window.deleteRegistration = deleteRegistration;
window.deleteGrade = deleteGrade;

console.log('✓ All features loaded and functional');
