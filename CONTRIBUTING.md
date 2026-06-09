# Panduan Kontribusi - Dashboard MIS ISLAMIYAH PARIAMAN

Terima kasih atas minat Anda untuk berkontribusi! Panduan ini menjelaskan cara berkontribusi pada project ini.

## 📋 Daftar Isi

1. [Code of Conduct](#code-of-conduct)
2. [Cara Berkontribusi](#cara-berkontribusi)
3. [Process Pull Request](#process-pull-request)
4. [Style Guide](#style-guide)
5. [Commit Message](#commit-message)
6. [Reporting Bugs](#reporting-bugs)
7. [Suggesting Enhancements](#suggesting-enhancements)

---

## 📜 Code of Conduct

### Komitmen Kami

Dalam rangka menumbuhkan lingkungan yang terbuka dan mendukung, kami berkomitmen untuk:

- Bersikap ramah dan inklusif
- Menghormati perspektif berbeda
- Menerima kritik konstruktif dengan baik
- Fokus pada apa yang terbaik untuk komunitas
- Menunjukkan empati kepada anggota komunitas lain

### Perilaku yang Tidak Dapat Diterima

Perilaku berikut tidak dapat diterima:

- Penggunaan bahasa atau imagery seksual
- Trolling, komentar menghina, serangan personal
- Harassment publik atau privat
- Publikasi informasi pribadi tanpa izin
- Perilaku lain yang tidak etis atau tidak profesional

---

## 🤝 Cara Berkontribusi

### 1. Fork Repository

```bash
# Fork project di GitHub
# Kemudian clone local copy:
git clone https://github.com/YOUR-USERNAME/WEBSITE-MIS-ISLAMIYAH-PARIAMAN.git
cd WEBSITE-MIS-ISLAMIYAH-PARIAMAN
```

### 2. Create Feature Branch

```bash
# Update main branch
git checkout main
git pull origin main

# Create new feature branch
git checkout -b feature/your-feature-name

# Format nama branch:
# feature/     - untuk fitur baru
# bugfix/      - untuk bug fixes
# docs/        - untuk dokumentasi
# refactor/    - untuk refactoring
```

### 3. Make Changes

```bash
# Edit files sesuai kebutuhan
# Test changes secara lokal
# Update documentation jika diperlukan
```

### 4. Commit Changes

```bash
git add .
git commit -m "feat: short description of changes"

# Lihat bagian Commit Message untuk format lengkap
```

### 5. Push to Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create Pull Request

- Buka GitHub repository
- Klik "Compare & pull request"
- Isi PR title dan description
- Submit PR

---

## 🔄 Process Pull Request

### PR Title Format

```
[type]: brief description

Contoh:
feat: add dark mode theme
fix: resolve form validation issue
docs: update user guide
refactor: improve component structure
```

### PR Description Template

```markdown
## Description
Jelaskan perubahan yang Anda buat dan mengapa.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Item 1
- Item 2

## Testing Done
Jelaskan bagaimana Anda menguji perubahan ini.

## Screenshots (if applicable)
Tambahkan screenshot jika UI berubah.

## Checklist
- [ ] Code follows style guide
- [ ] Self-reviewed code
- [ ] Commented complex logic
- [ ] Updated documentation
- [ ] No new warnings generated
- [ ] Tested on multiple browsers
- [ ] Responsive design verified
```

### Review Process

1. **Automated Checks**
   - Code style validation
   - Link checking
   - Performance check

2. **Manual Review**
   - Code quality review
   - Functionality testing
   - Documentation review

3. **Approval & Merge**
   - Minimum 1 approval required
   - All checks must pass
   - Branch will be merged

---

## 📝 Style Guide

### JavaScript

#### Naming Conventions
```javascript
// Constants
const MAX_ITEMS = 10
const API_BASE_URL = 'https://api.example.com'

// Variables & functions
const userName = 'John'
const getUserData = (id) => { }

// Classes
class UserManager { }

// Private methods (prefix with _)
const _privateHelper = () => { }
```

#### Code Structure
```javascript
// Organize in logical sections
// ============================================
// MODULE NAME
// ============================================

// Config
const config = { }

// State
let state = { }

// DOM Elements
const elements = { }

// Event Listeners
elements.btn.addEventListener('click', handler)

// Functions
function handler() { }

// Exports
export { handler }
```

#### Comments
```javascript
// Good: Explains WHY
// Fetch user data when page loads to populate dropdown
function loadUsers() {
  // ...
}

// Bad: Explains WHAT (code already does that)
// Get users
function getUsers() {
  // ...
}
```

### CSS

#### Class Naming
```css
/* Use BEM-like naming */
.component-name { }
.component-name__element { }
.component-name--modifier { }

/* Examples */
.stat-card { }
.stat-card__icon { }
.stat-card--blue { }
```

#### Organization
```css
/* 1. Reset & Base Styles */
/* 2. Layout */
/* 3. Components */
/* 4. Utilities */
/* 5. Responsive */
```

#### Properties Order
```css
.element {
  /* Display & Box Model */
  display: flex;
  padding: 16px;
  margin: 8px;
  
  /* Sizing */
  width: 100%;
  height: auto;
  
  /* Colors & Typography */
  background: #fff;
  color: #333;
  font-size: 14px;
  
  /* Effects & Transforms */
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  /* Interactions */
  cursor: pointer;
  transition: all 0.3s ease;
}
```

### HTML

#### Semantic Markup
```html
<!-- Good: Semantic elements -->
<header class="top-header">
  <nav class="navigation"></nav>
</header>

<main class="content">
  <section class="stats">
    <article class="stat-card"></article>
  </section>
</main>

<footer class="footer"></footer>

<!-- Bad: Non-semantic -->
<div class="header">
  <div class="nav"></div>
</div>
```

#### Accessibility
```html
<!-- Use labels for inputs -->
<label for="username">Username</label>
<input id="username" type="text">

<!-- Use semantic buttons -->
<button type="submit">Submit</button>

<!-- Alt text for images -->
<img src="logo.png" alt="Company Logo">

<!-- Heading hierarchy -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
```

---

## 💬 Commit Message

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type
```
feat:      Fitur baru
fix:       Bug fix
docs:      Documentation
style:     Formatting, missing semicolons, etc
refactor:  Code change yang tidak fix bug atau add feature
perf:      Improve performance
test:      Add atau update tests
chore:     Change build process, dependencies, etc
```

### Scope
```
Bagian project yang diubah:
- ui
- form
- navigation
- api
- docs
```

### Subject
```
- Gunakan imperative mood ("add feature" bukan "added feature")
- Jangan capitalisasi awal huruf
- Jangan pakai period di akhir
- Maksimal 50 karakter
```

### Body
```
Jelaskan WHAT dan WHY, bukan HOW
- Wrap di 72 karakter
- Separate dari subject dengan blank line
- Gunakan bullet points untuk multiple changes
```

### Footer
```
Reference issues menggunakan keywords:
Fixes #123
Closes #456
Related to #789
```

### Examples

```
feat(form): add client-side validation

Add comprehensive validation for registration form:
- Validate email format
- Check required fields
- Show error messages to user

Closes #45

---

fix(navigation): resolve active menu highlighting

The active menu item wasn't persisting after page refresh
because state wasn't being saved properly.

Fixes #123

---

docs: update API reference guide

- Add new endpoints documentation
- Update request/response examples
- Fix typos in existing docs

Related to #456
```

---

## 🐛 Reporting Bugs

### Sebelum Submit Bug Report

1. Check documentation
2. Search existing issues
3. Update browser/software ke versi terbaru

### Bug Report Template

```markdown
## Description
Jelaskan bug dengan jelas dan ringkas.

## Steps to Reproduce
1. Langkah pertama
2. Langkah kedua
3. ...

## Expected Behavior
Apa yang seharusnya terjadi?

## Actual Behavior
Apa yang benar-benar terjadi?

## Environment
- Browser: [e.g. Chrome 90]
- OS: [e.g. Windows 10, macOS 11]
- Device: [e.g. Desktop, Mobile]

## Screenshots
Lampirkan screenshot atau video jika memungkinkan

## Additional Context
Informasi tambahan apa pun yang relevan
```

---

## 💡 Suggesting Enhancements

### Enhancement Request Template

```markdown
## Description
Jelaskan fitur yang Anda sarankan dan mengapa itu berguna.

## Use Case
Apa skenario penggunaan fitur ini?

## Current Behavior
Bagaimana sistem bekerja saat ini?

## Proposed Solution
Bagaimana Anda ingin fitur ini bekerja?

## Alternatives Considered
Apakah ada alternatif lain?

## Additional Context
Informasi tambahan apa pun
```

---

## 🧪 Testing Before Submit

### Manual Testing

```bash
# 1. Start development server
python -m http.server 8000

# 2. Test pada multiple browsers
# - Chrome
# - Firefox
# - Safari
# - Edge

# 3. Test pada multiple devices
# - Desktop
# - Tablet
# - Mobile

# 4. Check console untuk errors
# Open DevTools (F12)
# Check Console tab untuk any errors/warnings

# 5. Test form functionality
# Submit forms
# Check validation
# Verify data handling
```

### Code Quality

```bash
# Check untuk no console errors
# Run through code review mentally
# Ensure code follows style guide
# Verify documentation is updated
```

---

## ✅ Checklist Sebelum Submit PR

- [ ] Fork di-update dengan latest main
- [ ] Feature branch di-create dari main
- [ ] Code mengikuti style guide
- [ ] Self-review dilakukan
- [ ] Comments ditambahkan untuk complex logic
- [ ] Documentation di-update
- [ ] Tests dilakukan (manual)
- [ ] No console errors/warnings
- [ ] Responsive design diverifikasi
- [ ] Browser compatibility dicheck
- [ ] Commit messages mengikuti format
- [ ] PR description lengkap dan jelas

---

## 📞 Questions?

- Check GitHub Issues
- Email: admin@misislmiyahpariaman.sch.id
- Buat Discussion di GitHub

---

## 🎉 Terima Kasih!

Kontribusi Anda sangat dihargai. Bersama-sama kita membuat dashboard yang lebih baik untuk semua!

---

**Last Updated**: June 9, 2026
