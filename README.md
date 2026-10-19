# InspireUI – UI Inspiration & Code Library
**Third Year Information Technology (TY IT) Academic Project**

InspireUI is a modern, student-friendly developer platform built exclusively with **pure HTML, CSS, and Vanilla JavaScript** (Zero Frameworks, No React, No TypeScript, No Tailwind). It allows developers and students to discover curated responsive web components, inspect clean source code in HTML/CSS/JS, test live interactive sandboxes, and export production-ready code.

---

## 📁 Project Structure

```
InspireUI/
│
├── index.html          # Main component catalog & exploration page
├── login.html          # User authentication & demo profile sign-in
├── register.html       # Account registration & role assignment
├── dashboard.html      # Student developer dashboard (favorites & project sandbox)
├── admin.html          # Platform admin console (user & component management)
│
├── css/
│   └── style.css       # Clean, structured pure CSS stylesheet (11 sections)
│
├── js/
│   └── script.js       # Pure Vanilla JavaScript (DOM manipulation, localStorage)
│
├── images/             # Static icons & project assets
│
└── README.md           # Project documentation and viva guide
```

---

## 🌟 Core Features & Functionality

### 1. Pure HTML Architecture
- **Semantic Tags**: Utilizes `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<form>`, and `<footer>`.
- **Zero Framework Complexity**: Every page is standard HTML that can be opened directly in any web browser without compilation.

### 2. Pure CSS Design (`css/style.css`)
- **Organized into 11 Logical Sections**:
  1. Global styles & CSS theme variables (Dark theme by default, Light theme overrides)
  2. Responsive sticky navbar with blur backdrop
  3. Hero section with gradient text and quick statistics
  4. Category filter pills and sort dropdown
  5. Responsive UI inspiration cards with live iframe preview
  6. Buttons and form input states
  7. Student dashboard layout and project cards
  8. Code preview modal with tab navigation
  9. Login and register dual-column card design
  10. Admin console tables and metric cards
  11. Footer and mobile media queries (`@media (max-width: 900px)` and `600px`)
- **Zero CSS Frameworks**: Built using pure Flexbox, CSS Grid, and CSS custom properties (`var(--...)`).

### 3. Pure JavaScript Engine (`js/script.js`)
- **Search & Filtering**: Instant client-side search across component titles, descriptions, categories, and tags.
- **Category Filter**: One-click category filtering for Login, Dashboard, Pricing, Landing Page, Forms, and Tables.
- **Favorites System**: Add/remove favorites with local storage persistence (`localStorage.getItem('inspireui_favourites')`).
- **Live Code Preview Modal**: Tabbed view displaying HTML, CSS, JavaScript, and a live rendered iframe sandbox.
- **Copy to Clipboard**: One-click code copying with visual feedback.
- **Dark / Light Mode**: Instant theme switching saved to `localStorage`.
- **Authentication**: Local storage user authentication with pre-configured 1-click demo profiles (Suraj - Admin, Sarah Connor - Developer).
- **CRUD Operations**: Create and delete custom web projects on the dashboard; delete users and components in the Admin Console.

---

## 🎓 TY IT Viva Examination Guide

| Component | Technical Implementation in InspireUI |
|---|---|
| **HTML** | Structured semantic documents, accessible form elements, iframes for sandboxed previews, and clear element IDs for JS hooks. |
| **CSS** | CSS variables for dark/light themes, CSS Grid (`repeat(auto-fill, minmax(380px, 1fr))`), Flexbox alignment, CSS keyframe animations, and media queries. |
| **JavaScript** | DOM selection (`document.getElementById`, `document.querySelectorAll`), Event listeners (`addEventListener`), array methods (`filter`, `sort`, `find`), dynamic element generation, and Web Storage API (`localStorage`). |

---

## 🚀 How to Run the Project Locally

### Method 1: Direct Browser Opening (No Server Required)
Because this project uses standard HTML, CSS, and JavaScript:
1. Double-click `index.html` in your file explorer.
2. The website will open and run in any modern web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Python Simple HTTP Server
Open your terminal in the `InspireUI` project folder and run:
```bash
python3 -m http.server 3000
```
Then visit: `http://localhost:3000`

### Method 3: Node.js / Vite Static Server
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.
