# Panduan Pengembangan - Dashboard MIS ISLAMIYAH PARIAMAN

## 📚 Daftar Dokumentasi

1. [Arsitektur Sistem](#arsitektur-sistem)
2. [Panduan HTML](#panduan-html)
3. [Panduan CSS](#panduan-css)
4. [Panduan JavaScript](#panduan-javascript)
5. [Konvensi Kode](#konvensi-kode)
6. [Testing Guide](#testing-guide)
7. [Deployment Guide](#deployment-guide)

---

## 🏗 Arsitektur Sistem

### Komponen Utama

```
Dashboard
├── Sidebar Navigation
│   ├── Header (Logo & Branding)
│   └── Menu Items (Navigation)
├── Main Content Area
│   ├── Top Header (Page Title & User Profile)
│   ├── Content Pages
│   │   ├── Dashboard (Statistics & Forms)
│   │   ├── Reception (Pendaftaran)
│   │   ├── Grades (Nilai)
│   │   ├── Reports (Laporan)
│   │   └── Master Data
│   └── Footer
└── Supporting Systems
    ├── Form Validation
    ├── Alert System
    ├── Print Handler
    └── Navigation Handler
```

### Data Flow

```
User Input → Validation → Processing → Storage/Display → User Feedback
```

---

## 📝 Panduan HTML

### Struktur Dasar
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <!-- Meta tags, stylesheets, scripts -->
</head>
<body>
    <!-- Layout wrapper -->
    <div class="container-wrapper">
        <!-- Sidebar -->
        <aside class="sidebar">...</aside>
        
        <!-- Main content -->
        <main class="main-content">
            <!-- Header -->
            <header class="top-header">...</header>
            
            <!-- Content -->
            <div class="content">...</div>
            
            <!-- Footer -->
            <footer class="footer">...</footer>
        </main>
    </div>
</body>
</html>
```

### Class Naming Convention
```html
<!-- Navigation -->
.sidebar
.nav-item
.nav-category

<!-- Layout -->
.container-wrapper
.main-content
.content
.header-left
.header-right

<!-- Cards & Boxes -->
.stat-card
.form-box
.report-box

<!-- UI Components -->
.btn
.badge
.alert
```

### Semantic HTML
- Gunakan `<header>`, `<main>`, `<aside>`, `<footer>` untuk structure
- Gunakan `<nav>` untuk navigation
- Gunakan `<section>` untuk logical grouping
- Gunakan `<table>` dengan proper `<thead>`, `<tbody>`
- Selalu gunakan `<label>` untuk form inputs

---

## 🎨 Panduan CSS

### File Organization
```css
/* 1. Global Styles & Reset */
/* 2. Layout Structure */
/* 3. Sidebar */
/* 4. Top Header */
/* 5. Content Area */
/* 6. Cards & Components */
/* 7. Forms */
/* 8. Tables */
/* 9. Buttons & Links */
/* 10. Responsive Design */
```

### CSS Naming Patterns

```css
/* BEM-like naming */
.component-name { }
.component-name__element { }
.component-name--modifier { }

/* Examples */
.stat-card { }
.stat-card__icon { }
.stat-card--active { }

.form-box { }
.form-group { }
.form-title { }
```

### Color System

```css
/* Primary Colors */
--primary-dark: #003d7a;
--primary-blue: #3b82f6;
--primary-light: #dbeafe;

/* Status Colors */
--success: #10b981;
--warning: #f59e0b;
--danger: #ef4444;
--info: #3b82f6;

/* Neutrals */
--text-dark: #1f2937;
--text-medium: #6b7280;
--text-light: #9ca3af;
--bg-light: #f9fafb;
--bg-lighter: #f3f4f6;
--border: #e5e7eb;
```

### Responsive Approach
```css
/* Mobile First */
.element { /* Mobile styles */ }

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1200px) { }
```

### Common Patterns

#### Flexbox
```css
.flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}
```

#### Grid
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}
```

#### Transitions
```css
.interactive-element {
    transition: all 0.3s ease;
}

.interactive-element:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

---

## 🔧 Panduan JavaScript

### Module Structure

```javascript
// ============================================
// MODULE NAME
// ============================================

// State & Configuration
const config = { }
let state = { }

// DOM Elements
const elements = { }

// Event Listeners
elements.item.addEventListener('click', handler)

// Functions
function init() { }
function handler() { }
function cleanup() { }

// Exports
export { init, handler }
```

### Event Handling Best Practices

```javascript
// Proper event delegation
document.addEventListener('click', (event) => {
    const target = event.target.closest('.interactive-element')
    if (!target) return
    handleClick(target)
})

// Proper cleanup
function cleanup() {
    element.removeEventListener('click', handler)
}
```

### Form Validation

```javascript
function validateForm(formData) {
    const errors = {}
    
    if (!formData.name) {
        errors.name = 'Nama harus diisi'
    }
    
    if (formData.age < 0 || formData.age > 120) {
        errors.age = 'Umur tidak valid'
    }
    
    return Object.keys(errors).length === 0 ? true : errors
}
```

### API Integration Pattern

```javascript
// Data Fetching
async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint)
        if (!response.ok) throw new Error('API Error')
        return await response.json()
    } catch (error) {
        console.error('Fetch error:', error)
        showAlert('Terjadi kesalahan', 'error')
    }
}

// Data Posting
async function postData(endpoint, data) {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if (!response.ok) throw new Error('API Error')
        return await response.json()
    } catch (error) {
        console.error('Post error:', error)
        showAlert('Gagal menyimpan data', 'error')
    }
}
```

### Console Best Practices

```javascript
// Clear logging
console.log('✓ Feature initialized')
console.warn('⚠ Warning message')
console.error('✗ Error occurred')

// Avoid console errors in production
if (process.env.NODE_ENV === 'development') {
    console.log('Debug info')
}
```

---

## 📋 Konvensi Kode

### JavaScript

```javascript
// ✓ Good
const getUserName = (user) => user.name

// ✗ Bad
const gUN = (u) => u.n

// ✓ Good - Clear variable names
let isLoading = false
let errorMessage = ''

// ✗ Bad - Ambiguous
let loading = false
let err = ''
```

### HTML

```html
<!-- ✓ Good - Semantic & clear -->
<form class="registration-form" id="registrationForm">
    <label for="fullName">Nama Lengkap</label>
    <input type="text" id="fullName" name="fullName">
</form>

<!-- ✗ Bad - Not semantic -->
<div class="form">
    <span>Name:</span>
    <input type="text">
</div>
```

### CSS

```css
/* ✓ Good - Organized & readable */
.button {
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: 600;
    transition: all 0.3s ease;
}

/* ✗ Bad - Too many properties at once */
.btn{padding:10px 20px;border-radius:6px;font-weight:600;transition:all 0.3s ease;}
```

---

## 🧪 Testing Guide

### Browser Compatibility
- [x] Chrome (Latest)
- [x] Firefox (Latest)
- [x] Safari (Latest)
- [x] Edge (Latest)

### Device Testing
```
Desktop:     1920x1080, 1366x768
Tablet:      768x1024, 1024x768
Mobile:      375x667, 412x915
```

### Functional Testing Checklist

```
[ ] Navigation works correctly
[ ] Forms submit successfully
[ ] Form validation works
[ ] Print function works
[ ] Responsive layout adapts
[ ] No console errors
[ ] All buttons are clickable
[ ] All links work
[ ] Mobile menu opens/closes
[ ] Tables display correctly
```

### Performance Testing

```javascript
// Measure page load
console.time('pageLoad')
// ... operations
console.timeEnd('pageLoad')

// Measure function execution
console.time('functionName')
functionName()
console.timeEnd('functionName')
```

---

## 📦 Deployment Guide

### Pre-Deployment Checklist

```
[ ] Code reviewed and tested
[ ] No console errors/warnings
[ ] All links working
[ ] Responsive design verified
[ ] Browser compatibility tested
[ ] Security review done
[ ] Performance optimized
[ ] Documentation updated
```

### Hosting Options

#### Option 1: GitHub Pages
```bash
git push origin main
# Enable GitHub Pages in repository settings
```

#### Option 2: Static Server
```bash
python -m http.server 8000
# or
npx http-server
```

#### Option 3: Web Hosting
1. Upload files via FTP
2. Set document root to project folder
3. Access via domain name

#### Option 4: Docker
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

```bash
docker build -t mis-dashboard .
docker run -p 80:80 mis-dashboard
```

### Environment Setup

```bash
# Development
python -m http.server 8000

# Production
# Use proper web server (Nginx, Apache)
```

---

## 🚀 Future Enhancements

### Planned Features
- [ ] Backend API integration
- [ ] Database connectivity
- [ ] User authentication
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] Dark mode
- [ ] Multi-language support
- [ ] API documentation

### Technology Upgrade Path
1. **Phase 1**: Add Node.js backend
2. **Phase 2**: Database integration (MongoDB/MySQL)
3. **Phase 3**: User authentication
4. **Phase 4**: Mobile app (React Native)
5. **Phase 5**: Advanced features & analytics

---

## 📞 Support & Contact

- **Email**: admin@misislmiyahpariaman.sch.id
- **GitHub**: https://github.com/syafeigantengkataemak-maker
- **Issues**: GitHub Issues

---

**Last Updated**: June 9, 2026
