// ============================================
// SIDEBAR & NAVIGATION
// ============================================

const hamburgerMenu = document.getElementById('hamburgerMenu');
const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('.nav-item');
const pageTitle = document.querySelector('.page-title');

// Toggle sidebar on hamburger click
hamburgerMenu?.addEventListener('click', function() {
    sidebar.classList.toggle('open');
});

// Close sidebar when clicking on nav items
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Get menu name and update title
        const menuName = this.getAttribute('data-menu');
        updatePageTitle(menuName);
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    });
});

// Update page title based on menu
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
// USER PROFILE DROPDOWN
// ============================================

const userProfile = document.querySelector('.user-profile');
let isDropdownOpen = false;

userProfile?.addEventListener('click', function(e) {
    e.stopPropagation();
    isDropdownOpen = !isDropdownOpen;
    // You can add dropdown menu logic here
});

document.addEventListener('click', function() {
    if (isDropdownOpen) {
        isDropdownOpen = false;
    }
});

// ============================================
// REGISTRATION FORM
// ============================================

const registrationForm = document.querySelector('.registration-form');

if (registrationForm) {
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            namaLengkap: document.getElementById('nama-lengkap').value,
            tempatLahir: document.getElementById('tempat-lahir').value,
            tanggalLahir: document.getElementById('tanggal-lahir').value,
            jenisKelamin: document.getElementById('jenis-kelamin').value,
            asalSekolah: document.getElementById('asal-sekolah').value,
            kelasTujuan: document.getElementById('kelas-tujuan').value
        };
        
        // Validate form
        if (!validateRegistrationForm(formData)) {
            showAlert('Mohon isi semua field yang diperlukan', 'error');
            return;
        }
        
        // Show success message
        showAlert('Pendaftaran siswa berhasil disimpan!', 'success');
        
        // Reset form
        registrationForm.reset();
        
        // Log data (in real app, this would be sent to server)
        console.log('Registration Data:', formData);
    });
}

// Validate registration form
function validateRegistrationForm(data) {
    return data.namaLengkap && 
           data.tempatLahir && 
           data.tanggalLahir && 
           data.jenisKelamin && 
           data.asalSekolah && 
           data.kelasTujuan;
}

// ============================================
// GRADE FORM
// ============================================

const gradeForm = document.querySelector('.grade-form');

if (gradeForm) {
    gradeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            siswa: document.getElementById('siswa').value,
            mataPelajaran: document.getElementById('mata-pelajaran-input').value,
            kelas: document.getElementById('kelas-input').value,
            nilai: document.getElementById('nilai').value,
            semester: document.getElementById('semester').value
        };
        
        // Validate form
        if (!validateGradeForm(formData)) {
            showAlert('Mohon isi semua field yang diperlukan', 'error');
            return;
        }
        
        // Validate grade value
        const nilaiValue = parseInt(formData.nilai);
        if (nilaiValue < 0 || nilaiValue > 100) {
            showAlert('Nilai harus berada di antara 0-100', 'error');
            return;
        }
        
        // Show success message
        showAlert('Nilai siswa berhasil disimpan!', 'success');
        
        // Reset form
        gradeForm.reset();
        
        // Log data
        console.log('Grade Data:', formData);
    });
}

// Validate grade form
function validateGradeForm(data) {
    return data.siswa && 
           data.mataPelajaran && 
           data.kelas && 
           data.nilai && 
           data.semester;
}

// ============================================
// PRINT FUNCTIONALITY
// ============================================

const printButtons = document.querySelectorAll('.btn-print');

printButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the closest report box
        const reportBox = this.closest('.report-box');
        
        if (reportBox) {
            printReport(reportBox);
        }
    });
});

// Print report function
function printReport(reportBox) {
    const printWindow = window.open('', '_blank');
    const htmlContent = reportBox.innerHTML;
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <title>Laporan</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    padding: 20px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 12px;
                    text-align: left;
                }
                th {
                    background-color: #f3f4f6;
                    font-weight: bold;
                }
                .report-title {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .btn {
                    display: none;
                }
                .report-header {
                    display: none;
                }
                .view-all-link {
                    display: none;
                }
            </style>
        </head>
        <body>
            ${htmlContent}
            <script>
                window.print();
                window.onafterprint = function() {
                    window.close();
                }
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// ============================================
// ALERT/NOTIFICATION SYSTEM
// ============================================

function showAlert(message, type = 'info') {
    // Create alert container if doesn't exist
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
    
    // Create alert element
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
    
    // Auto remove alert after 4 seconds
    setTimeout(() => {
        alertBox.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => alertBox.remove(), 300);
    }, 4000);
}

// Add animation styles
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
// VIEW ALL LINKS
// ============================================

const viewAllLinks = document.querySelectorAll('.view-all-link');

viewAllLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        showAlert('Fitur ini akan segera diaktifkan', 'info');
    });
});

// ============================================
// RESPONSIVE BEHAVIOR
// ============================================

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
    }
});

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Set first nav item as active
    if (navItems.length > 0) {
        navItems[0].classList.add('active');
    }
    
    // Log initial load
    console.log('Dashboard MIS ISLAMIYAH PARIAMAN berhasil dimuat');
});

// ============================================
// DATE INPUT FORMATTING
// ============================================

const dateInputs = document.querySelectorAll('input[type="date"]');

dateInputs.forEach(input => {
    input.addEventListener('change', function() {
        if (this.value) {
            const date = new Date(this.value);
            console.log('Date selected:', date.toLocaleDateString('id-ID'));
        }
    });
});

// ============================================
// FORM INPUT HELPERS
// ============================================

// Add placeholder text color styling
const inputs = document.querySelectorAll('input, select, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#3b82f6';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = '#d1d5db';
    });
});

// ============================================
// TABLE SORTING (OPTIONAL ENHANCEMENT)
// ============================================

const tableHeaders = document.querySelectorAll('.report-table th');

tableHeaders.forEach((header, index) => {
    header.style.cursor = 'pointer';
    header.addEventListener('click', function() {
        sortTable(index, this.closest('table'));
    });
});

function sortTable(columnIndex, table) {
    let rows = Array.from(table.querySelectorAll('tbody tr'));
    
    rows.sort((a, b) => {
        let aValue = a.cells[columnIndex].textContent.trim();
        let bValue = b.cells[columnIndex].textContent.trim();
        
        // Try to parse as number
        if (!isNaN(aValue) && !isNaN(bValue)) {
            return parseFloat(aValue) - parseFloat(bValue);
        }
        
        return aValue.localeCompare(bValue);
    });
    
    // Re-insert sorted rows
    const tbody = table.querySelector('tbody');
    rows.forEach(row => tbody.appendChild(row));
}

// ============================================
// EXPORT TO CSV (OPTIONAL ENHANCEMENT)
// ============================================

function exportTableToCSV(table, filename = 'laporan.csv') {
    let csv = [];
    let rows = table.querySelectorAll('tr');
    
    rows.forEach(row => {
        let csvRow = [];
        let cells = row.querySelectorAll('td, th');
        
        cells.forEach(cell => {
            csvRow.push('"' + cell.textContent.trim() + '"');
        });
        
        csv.push(csvRow.join(','));
    });
    
    downloadCSV(csv.join('\n'), filename);
}

function downloadCSV(csv, filename) {
    let csvFile = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    let link = document.createElement('a');
    let url = URL.createObjectURL(csvFile);
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

console.log('✓ Dashboard JavaScript loaded successfully');
