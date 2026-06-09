# Panduan Setup Development Environment

Panduan lengkap untuk setup environment development.

## 📋 Persyaratan Sistem

### Software
- Node.js 16+ atau Python 3.8+ (untuk server)
- Git untuk version control
- Browser modern terbaru
- Text editor/IDE (Visual Studio Code disarankan)

### Browser
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)

## 🚀 Setup Awal

### 1. Clone Repository

```bash
git clone https://github.com/syafeigantengkataemak-maker/WEBSITE-MIS-ISLAMIYAH-PARIAMAN.git
cd WEBSITE-MIS-ISLAMIYAH-PARIAMAN
```

### 2. Install Dependencies (Optional)

Jika menggunakan Node.js:
```bash
npm install
```

### 3. Setup Local Server

#### Option A: Python HTTP Server (Recommended)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option B: Node.js HTTP Server
```bash
npm install -g http-server
http-server -p 8000
```

#### Option C: Live Server (VS Code)
1. Install extension "Live Server"
2. Right-click index.html
3. Select "Open with Live Server"

### 4. Akses Dashboard

Buka browser dan navigasi ke:
```
http://localhost:8000
```

## 📁 Struktur Project

```
WEBSITE-MIS-ISLAMIYAH-PARIAMAN/
├── index.html              # Main entry point
├── README.md              # Project documentation
├── CHANGELOG.md           # Version history
├── LICENSE                # MIT License
├── package.json           # Project metadata
├── .gitignore            # Git ignore rules
│
├── assets/                # Static assets
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── script.js      # Main JavaScript
│   └── images/            # Images & media
│
├── docs/                  # Documentation
│   ├── DEVELOPMENT.md     # Dev guide
│   ├── USER_GUIDE.md      # User guide
│   ├── API_REFERENCE.md   # API documentation
│   └── SETUP.md           # This file
│
└── .git/                  # Git repository
```

## 🛠 Development Workflow

### VS Code Setup

#### Recommended Extensions
1. **Live Server** - Local development server
2. **Prettier** - Code formatter
3. **ESLint** - JavaScript linter
4. **CSS Intellisense** - CSS autocomplete
5. **HTML CSS Class Completion** - Class completion

Install extensions:
```bash
code --install-extension ritwickdey.LiveServer
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension Zignd.html-css-class-completion
```

#### Recommended Settings
Create `.vscode/settings.json`:
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### Code Style Guidelines

#### JavaScript
```javascript
// Use const by default, let for variables that change
const config = {}
let counter = 0

// Use arrow functions
const greet = (name) => `Hello ${name}`

// Use template literals
const message = `Welcome, ${name}`

// Proper formatting
if (condition) {
  doSomething()
}

// Comment important logic
// Validate form before submission
if (validateForm(data)) {
  submitForm(data)
}
```

#### CSS
```css
/* Use consistent spacing */
.component {
  padding: 16px;
  margin-bottom: 8px;
}

/* Group related properties */
.button {
  /* Layout */
  display: inline-block;
  padding: 10px 20px;
  
  /* Style */
  background: #3b82f6;
  color: white;
  border-radius: 6px;
  
  /* Interaction */
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background: #2563eb;
}
```

#### HTML
```html
<!-- Use semantic elements -->
<section class="component">
  <h1>Title</h1>
  <p>Content</p>
</section>

<!-- Use meaningful class names -->
<div class="stat-card stat-card--blue">
  <div class="stat-icon">Icon</div>
  <div class="stat-content">Content</div>
</div>

<!-- Comment complex structures -->
<!-- Form with validation -->
<form class="registration-form" id="registrationForm">
  <!-- Form fields -->
</form>
```

## 🧪 Testing Locally

### Manual Testing Checklist

#### Desktop (1920x1080)
```
[ ] Sidebar displays correctly
[ ] Navigation works
[ ] All forms submit
[ ] Tables display properly
[ ] Print function works
[ ] No console errors
```

#### Tablet (768x1024)
```
[ ] Responsive layout works
[ ] Touch events work
[ ] Forms are usable
[ ] Text is readable
[ ] Navigation accessible
```

#### Mobile (375x667)
```
[ ] Hamburger menu works
[ ] Single column layout
[ ] Touch-friendly buttons
[ ] Forms are accessible
[ ] Images scale properly
```

### Browser Console Check
```javascript
// Open DevTools (F12)
// Check for errors and warnings
// All console.log should be informational
```

## 📦 Building for Production

### Optimize Assets

#### CSS
```bash
# Minify CSS (using csso-cli)
npm install -g csso-cli
csso assets/css/style.css -o assets/css/style.min.css
```

#### JavaScript
```bash
# Minify JS (using uglify-js)
npm install -g uglify-js
uglifyjs assets/js/script.js -o assets/js/script.min.js
```

#### HTML
```bash
# Minify HTML (using html-minifier)
npm install -g html-minifier
html-minifier index.html -o index.min.html
```

### Production Checklist
```
[ ] Code minified
[ ] Assets optimized
[ ] No console logs
[ ] All links work
[ ] Forms validated
[ ] Security checked
[ ] Performance tested
[ ] Browser tested
[ ] Mobile tested
[ ] Documentation updated
```

## 🚀 Deployment

### GitHub Pages
```bash
# Push to GitHub
git add .
git commit -m "Production ready"
git push origin main

# Enable GitHub Pages in repository settings
# https://github.com/syafeigantengkataemak-maker/WEBSITE-MIS-ISLAMIYAH-PARIAMAN
```

### Self-Hosted
```bash
# Upload files via FTP
# Or use:
scp -r . user@server:/var/www/mis-dashboard

# Set proper permissions
chmod 755 /var/www/mis-dashboard
```

### Docker Deployment
```bash
# Build image
docker build -t mis-dashboard:1.0 .

# Run container
docker run -p 80:80 mis-dashboard:1.0

# Push to registry
docker tag mis-dashboard:1.0 username/mis-dashboard:1.0
docker push username/mis-dashboard:1.0
```

## 🔧 Troubleshooting

### Port Sudah Terpakai
```bash
# Find process using port 8000
lsof -i :8000
# or
netstat -tulpn | grep 8000

# Kill process
kill -9 PID

# Atau gunakan port lain
python -m http.server 8001
```

### Cache Issues
```bash
# Hard refresh browser
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)

# Clear browser cache
DevTools > Application > Clear Storage
```

### File Permission Issues
```bash
# Linux/Mac
chmod +x setup.sh
./setup.sh

# Atau change directory permissions
chmod 755 /path/to/project
```

## 📝 Git Workflow

### Create Feature Branch
```bash
git checkout -b feature/new-feature
```

### Make Changes
```bash
git add .
git commit -m "feat: add new feature"
```

### Push Changes
```bash
git push origin feature/new-feature
```

### Create Pull Request
```bash
# Via GitHub web interface
# or using GitHub CLI
gh pr create --title "Add new feature" --body "Description"
```

### Merge to Main
```bash
git checkout main
git pull origin main
git merge feature/new-feature
git push origin main
```

## 📚 Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3C Standards](https://www.w3.org/)
- [Can I Use](https://caniuse.com/) - Browser compatibility

### Tools
- [VSCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

### Learning
- [JavaScript.info](https://javascript.info/)
- [CSS-Tricks](https://css-tricks.com/)
- [HTML5 Rocks](https://www.html5rocks.com/)

## 💡 Tips & Tricks

### Keyboard Shortcuts
```
VS Code
- Ctrl+Shift+D: Open Run & Debug
- Ctrl+J: Toggle terminal
- Ctrl+`: Terminal toggle
- Ctrl+,: Settings

Browser DevTools
- F12: Open DevTools
- Ctrl+Shift+C: Element inspector
- Ctrl+Shift+J: Console
- Ctrl+Shift+I: Inspector
```

### Debugging Tips
```javascript
// Console methods
console.log('Info message')
console.warn('Warning message')
console.error('Error message')
console.table(arrayOfObjects)

// Breakpoints
debugger; // Execution pauses here

// Performance
console.time('label')
// ... code to measure
console.timeEnd('label')
```

## 📞 Support

Jika ada masalah setup:
1. Check documentation di `/docs` folder
2. Search GitHub issues
3. Create new GitHub issue
4. Email ke admin@misislmiyahpariaman.sch.id

---

**Version**: 1.0.0  
**Last Updated**: June 9, 2026
