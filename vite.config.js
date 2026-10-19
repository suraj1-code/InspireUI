import { defineConfig } from 'vite';
import { resolve } from 'path';
import { GoogleGenAI } from '@google/genai';

function generateSmartFallbackUI(prompt, style, category) {
  const p = (prompt || '').toLowerCase().trim();
  
  // 1. LOGIN PAGE
  if (p.includes('login') || p.includes('sign in') || p.includes('signin') || p.includes('auth form') || p.includes('login form')) {
    return {
      name: 'Clean Professional Login Page UI',
      category: 'Login',
      description: 'Complete authentication page with InspireUI branding, email & password inputs, password show/hide, remember me, forgot password, and client-side validation.',
      tags: ['Login', 'Authentication', 'Forms', 'Clean', 'Zero Dependencies'],
      html: `<div class="login-wrapper">
  <div class="login-card">
    <div class="login-brand">
      <div class="brand-link">
        <div class="brand-icon">⚡</div>
        <span class="brand-name">Inspire<span>UI</span></span>
      </div>
      <p class="tagline">UI Inspiration & Code Library</p>
    </div>

    <div class="login-header">
      <h2 class="title">Welcome Back</h2>
      <p class="subtitle">Login to continue to your InspireUI account.</p>
    </div>

    <div id="loginAlertBox" class="alert-box" style="display: none;"></div>

    <form id="loginForm" onsubmit="event.preventDefault(); validateLoginForm();">
      <div class="form-group">
        <label for="loginEmail" class="form-label">Email Address</label>
        <input type="email" id="loginEmail" class="form-input" placeholder="Enter your email" />
      </div>

      <div class="form-group">
        <div class="pwd-header">
          <label for="loginPassword" class="form-label">Password</label>
          <a href="#" class="forgot-link" onclick="alert('Password reset link sent to your registered email address.'); return false;">Forgot Password?</a>
        </div>
        <div class="pwd-input-wrap">
          <input type="password" id="loginPassword" class="form-input" placeholder="Enter your password" />
          <button type="button" id="pwdToggleBtn" class="pwd-toggle-btn" onclick="togglePasswordVisibility()">👁️ Show</button>
        </div>
      </div>

      <div class="remember-row">
        <label class="remember-label" for="rememberMe">
          <input type="checkbox" id="rememberMe" checked />
          <span>Remember me</span>
        </label>
      </div>

      <button type="submit" class="login-btn">Login</button>
    </form>

    <div class="login-footer">
      Don't have an account? <a href="register.html" class="register-link">Register</a>
    </div>
  </div>
</div>`,
      css: `.login-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 16px;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
.login-card {
  width: 100%;
  max-width: 420px;
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 36px 30px;
  color: #f8fafc;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}
.login-brand {
  text-align: center;
  margin-bottom: 20px;
}
.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.brand-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
}
.brand-name {
  font-size: 20px;
  font-weight: 800;
  color: white;
}
.brand-name span { color: #3b82f6; }
.tagline {
  font-size: 12px;
  color: #94a3b8;
  margin-top: 4px;
}
.login-header {
  text-align: center;
  margin-bottom: 20px;
}
.title {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 4px;
}
.subtitle {
  font-size: 13px;
  color: #94a3b8;
}
.alert-box {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 16px;
}
.alert-box.error {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
}
.alert-box.success {
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #6ee7b7;
}
.form-group {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-label {
  font-size: 13px;
  font-weight: 600;
  color: #cbd5e1;
}
.pwd-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.forgot-link {
  font-size: 12px;
  color: #3b82f6;
  text-decoration: none;
}
.forgot-link:hover { text-decoration: underline; }
.form-input {
  width: 100%;
  background: #070c18;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 11px 14px;
  color: white;
  font-size: 14px;
  outline: none;
  transition: all 0.2s;
}
.form-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}
.pwd-input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}
.pwd-input-wrap .form-input { padding-right: 74px; }
.pwd-toggle-btn {
  position: absolute;
  right: 8px;
  background: #172238;
  border: 1px solid #233352;
  color: #cbd5e1;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}
.pwd-toggle-btn:hover { color: white; background: #1e293b; }
.remember-row {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.remember-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #94a3b8;
  cursor: pointer;
}
.remember-label input { accent-color: #3b82f6; width: 16px; height: 16px; }
.login-btn {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  color: white;
  font-size: 15px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);
  transition: transform 0.2s, box-shadow 0.2s;
}
.login-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
}
.login-footer {
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
  color: #94a3b8;
}
.register-link {
  color: #3b82f6;
  font-weight: 600;
  text-decoration: none;
  margin-left: 4px;
}
.register-link:hover { text-decoration: underline; }`,
      js: `function togglePasswordVisibility() {
  const p = document.getElementById("loginPassword");
  const b = document.getElementById("pwdToggleBtn");
  if (!p) return;
  if (p.type === "password") {
    p.type = "text";
    if (b) b.innerText = "🙈 Hide";
  } else {
    p.type = "password";
    if (b) b.innerText = "👁️ Show";
  }
}

function validateLoginForm() {
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPassword").value.trim();
  const box = document.getElementById("loginAlertBox");

  if (!email) {
    if (box) {
      box.className = "alert-box error";
      box.innerText = "⚠️ Email Address cannot be empty.";
      box.style.display = "block";
    }
    return;
  }
  if (!pass) {
    if (box) {
      box.className = "alert-box error";
      box.innerText = "⚠️ Password cannot be empty.";
      box.style.display = "block";
    }
    return;
  }
  if (box) {
    box.className = "alert-box success";
    box.innerText = "✅ Login valid! Welcome back to InspireUI.";
    box.style.display = "block";
  }
}`
    };
  }

  // 2. SIGNUP PAGE / REGISTRATION FORM
  if (p.includes('signup') || p.includes('sign up') || p.includes('register') || p.includes('registration') || p.includes('create account')) {
    return {
      name: 'Modern User Registration & Signup Page',
      category: 'Forms',
      description: 'Complete signup form with full name, email, password, confirm password, terms checkbox, client-side validation, and login link.',
      tags: ['Signup', 'Registration', 'Authentication', 'Forms'],
      html: `<div class="signup-wrapper">
  <div class="signup-card">
    <div class="brand-header">
      <div class="brand-badge">⚡</div>
      <h2>Create Your Account</h2>
      <p>Join thousands of developers building with InspireUI.</p>
    </div>

    <div id="signupMsg" class="alert-msg" style="display: none;"></div>

    <form id="signupForm" onsubmit="event.preventDefault(); validateSignup();">
      <div class="form-row">
        <div class="input-field">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Sarah Connor" required />
        </div>
        <div class="input-field">
          <label for="workEmail">Work Email</label>
          <input type="email" id="workEmail" placeholder="sarah@example.com" required />
        </div>
      </div>

      <div class="form-row">
        <div class="input-field">
          <label for="userPassword">Password</label>
          <input type="password" id="userPassword" placeholder="Min. 6 characters" required />
        </div>
        <div class="input-field">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Re-enter password" required />
        </div>
      </div>

      <div class="terms-row">
        <label class="terms-label" for="agreeTerms">
          <input type="checkbox" id="agreeTerms" required />
          <span>I agree to the Terms of Service & Privacy Policy</span>
        </label>
      </div>

      <button type="submit" class="signup-submit-btn">Create Free Account ➔</button>
    </form>

    <div class="signup-footer">
      Already have an account? <a href="login.html">Sign In</a>
    </div>
  </div>
</div>`,
      css: `.signup-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 16px;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
.signup-card {
  width: 100%;
  max-width: 500px;
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 36px 32px;
  color: #f8fafc;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}
.brand-header {
  text-align: center;
  margin-bottom: 24px;
}
.brand-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 8px;
}
.brand-header h2 { font-size: 22px; font-weight: 800; margin-bottom: 4px; }
.brand-header p { font-size: 13px; color: #94a3b8; }
.alert-msg {
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 18px;
}
.alert-msg.error { background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #fca5a5; }
.alert-msg.success { background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.35); color: #6ee7b7; }
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 16px;
}
@media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }
.input-field { display: flex; flex-direction: column; gap: 6px; }
.input-field label { font-size: 12px; font-weight: 600; color: #cbd5e1; }
.input-field input {
  background: #070c18;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 10px 12px;
  color: white;
  font-size: 13px;
  outline: none;
}
.input-field input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); }
.terms-row { margin: 18px 0; }
.terms-label { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #94a3b8; cursor: pointer; }
.terms-label input { accent-color: #3b82f6; }
.signup-submit-btn {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
  color: white;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);
}
.signup-submit-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5); }
.signup-footer { text-align: center; margin-top: 20px; font-size: 13px; color: #94a3b8; }
.signup-footer a { color: #3b82f6; font-weight: 600; text-decoration: none; }`,
      js: `function validateSignup() {
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("workEmail").value.trim();
  const pass = document.getElementById("userPassword").value;
  const confirm = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("agreeTerms").checked;
  const msg = document.getElementById("signupMsg");

  if (!name || !email) {
    msg.className = "alert-msg error";
    msg.innerText = "Please fill in your name and email.";
    msg.style.display = "block";
    return;
  }
  if (pass.length < 6) {
    msg.className = "alert-msg error";
    msg.innerText = "Password must be at least 6 characters long.";
    msg.style.display = "block";
    return;
  }
  if (pass !== confirm) {
    msg.className = "alert-msg error";
    msg.innerText = "Passwords do not match.";
    msg.style.display = "block";
    return;
  }
  if (!terms) {
    msg.className = "alert-msg error";
    msg.innerText = "You must agree to the Terms of Service.";
    msg.style.display = "block";
    return;
  }
  msg.className = "alert-msg success";
  msg.innerText = "Account created successfully! Welcome to InspireUI.";
  msg.style.display = "block";
}`
    };
  }

  // 3. DASHBOARD / ADMIN DASHBOARD
  if (p.includes('dashboard') || p.includes('admin panel') || p.includes('analytics dashboard') || p.includes('admin console')) {
    return {
      name: 'Full Admin & Analytics Dashboard',
      category: 'Dashboard',
      description: 'Comprehensive dark administrative dashboard with responsive sidebar navigation, KPI metric cards, and a filterable live deployments table.',
      tags: ['Dashboard', 'Admin', 'Analytics', 'Table', 'Sidebar'],
      html: `<div class="dash-layout">
  <!-- Sidebar -->
  <aside class="dash-sidebar">
    <div class="dash-logo">⚡ Inspire<span>UI</span></div>
    <nav class="dash-nav">
      <a href="#" class="nav-item active">📊 Overview</a>
      <a href="#" class="nav-item">🚀 Deployments</a>
      <a href="#" class="nav-item">👥 Users</a>
      <a href="#" class="nav-item">💳 Billing</a>
      <a href="#" class="nav-item">⚙️ Settings</a>
    </nav>
    <div class="dash-user">
      <div class="avatar">S</div>
      <div>
        <div class="user-title">Suraj (Admin)</div>
        <div class="user-sub">Administrator</div>
      </div>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="dash-main">
    <header class="dash-topbar">
      <div>
        <h2 class="dash-heading">Welcome Back, Suraj</h2>
        <p class="dash-sub">Here is your project activity, system statistics, and team overview.</p>
      </div>
      <div class="dash-actions">
        <button class="dash-btn" onclick="alert('Exporting project report...')">📥 Export Report</button>
        <button class="dash-btn primary" onclick="alert('Creating new project...')">+ New Project</button>
      </div>
    </header>

    <!-- Statistics Cards -->
    <div class="dash-metrics-grid">
      <div class="metric-card">
        <span class="m-label">Total Revenue</span>
        <div class="m-val">$128,450</div>
        <span class="m-delta positive">+18.4% this month</span>
      </div>
      <div class="metric-card">
        <span class="m-label">Active Users</span>
        <div class="m-val">14,290</div>
        <span class="m-delta positive">+1,240 new</span>
      </div>
      <div class="metric-card">
        <span class="m-label">Active Projects</span>
        <div class="m-val">24</div>
        <span class="m-delta positive">3 launching today</span>
      </div>
      <div class="metric-card">
        <span class="m-label">API Health</span>
        <div class="m-val">99.9%</div>
        <span class="m-delta positive">All systems normal</span>
      </div>
    </div>

    <!-- Recent Projects & Table -->
    <div class="dash-table-card">
      <div class="table-bar">
        <h3>Recent Projects</h3>
        <input type="text" id="dashFilterInput" placeholder="Filter projects..." oninput="filterDeployments()" />
      </div>
      <table class="dash-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Environment</th>
            <th>Status</th>
            <th>Duration</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody id="deploymentsTbody">
          <tr>
            <td><strong>inspire-ui-core</strong></td>
            <td>Production</td>
            <td><span class="badge success">Active</span></td>
            <td>1m 12s</td>
            <td>2 mins ago</td>
          </tr>
          <tr>
            <td><strong>auth-service-v2</strong></td>
            <td>Staging</td>
            <td><span class="badge success">Active</span></td>
            <td>42s</td>
            <td>15 mins ago</td>
          </tr>
          <tr>
            <td><strong>billing-gateway</strong></td>
            <td>Production</td>
            <td><span class="badge warning">Queued</span></td>
            <td>—</td>
            <td>Just now</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</div>`,
      css: `.dash-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  min-height: 480px;
  background: #090e1a;
  color: #f8fafc;
  font-family: 'Plus Jakarta Sans', sans-serif;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #1e293b;
}
@media (max-width: 768px) { .dash-layout { grid-template-columns: 1fr; } .dash-sidebar { display: none; } }
.dash-sidebar {
  background: #0d1527;
  border-right: 1px solid #1e293b;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dash-logo { font-size: 18px; font-weight: 800; margin-bottom: 24px; }
.dash-logo span { color: #3b82f6; }
.dash-nav { display: flex; flex-direction: column; gap: 6px; }
.nav-item {
  display: block;
  padding: 10px 12px;
  color: #94a3b8;
  text-decoration: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s;
}
.nav-item:hover, .nav-item.active { background: #1e293b; color: #fff; }
.dash-user { display: flex; align-items: center; gap: 10px; padding-top: 16px; border-top: 1px solid #1e293b; }
.avatar { width: 34px; height: 34px; border-radius: 50%; background: #3b82f6; display: flex; align-items: center; justify-content: center; font-weight: 700; }
.user-title { font-size: 13px; font-weight: 700; }
.user-sub { font-size: 11px; color: #64748b; }
.dash-main { padding: 24px; overflow-x: auto; }
.dash-topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
.dash-heading { font-size: 22px; font-weight: 800; margin-bottom: 4px; }
.dash-sub { font-size: 13px; color: #94a3b8; }
.dash-actions { display: flex; gap: 10px; }
.dash-btn {
  padding: 8px 14px;
  border-radius: 8px;
  background: #1e293b;
  border: 1px solid #334155;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
.dash-btn.primary { background: #3b82f6; border-color: #3b82f6; }
.dash-metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 14px;
  margin-bottom: 24px;
}
.metric-card { background: #0d1527; border: 1px solid #1e293b; border-radius: 12px; padding: 16px; }
.m-label { font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: 700; }
.m-val { font-size: 24px; font-weight: 800; margin: 4px 0; }
.m-delta { font-size: 11px; font-weight: 600; }
.m-delta.positive { color: #10b981; }
.m-delta.neutral { color: #94a3b8; }
.dash-table-card { background: #0d1527; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; }
.table-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px; }
.table-bar h3 { font-size: 16px; font-weight: 700; }
.table-bar input {
  background: #070c18;
  border: 1px solid #1e293b;
  border-radius: 6px;
  padding: 6px 12px;
  color: #fff;
  font-size: 12px;
  outline: none;
}
.dash-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 13px; }
.dash-table th { padding: 10px; color: #64748b; border-bottom: 1px solid #1e293b; font-size: 12px; }
.dash-table td { padding: 12px 10px; border-bottom: 1px solid #131b2e; }
.badge { padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; }
.badge.success { background: rgba(16, 185, 129, 0.15); color: #34d399; }
.badge.warning { background: rgba(245, 158, 11, 0.15); color: #fbbf24; }`,
      js: `function filterDeployments() {
  const query = document.getElementById("dashFilterInput").value.toLowerCase();
  const rows = document.querySelectorAll("#deploymentsTbody tr");
  rows.forEach(row => {
    row.style.display = row.innerText.toLowerCase().includes(query) ? "" : "none";
  });
}`
    };
  }

  // 4. NAVBAR
  if (p.includes('navbar') || p.includes('navigation') || p.includes('nav bar') || p.includes('header')) {
    return {
      name: 'Modern Responsive Navigation Bar',
      category: 'Navbar',
      description: 'Sticky responsive navigation bar with brand wordmark, clean desktop links, mobile hamburger drawer, and login button.',
      tags: ['Navbar', 'Navigation', 'Header', 'Responsive'],
      html: `<nav class="site-navbar">
  <div class="nav-brand">
    <div class="brand-logo">⚡</div>
    <span class="brand-text">Inspire<span>UI</span></span>
  </div>

  <div class="nav-menu" id="navMenu">
    <a href="#" class="nav-link active">Home</a>
    <a href="#" class="nav-link">Explore UI</a>
    <a href="#" class="nav-link">Components</a>
    <a href="#" class="nav-link">Pricing</a>
    <a href="#" class="nav-link">Documentation</a>
  </div>

  <div class="nav-actions">
    <a href="login.html" class="nav-btn-link">Sign In</a>
    <button class="nav-btn-primary" onclick="alert('Get Started clicked')">Get Started ➔</button>
    <button class="nav-hamburger" id="navToggle" onclick="toggleNavMenu()">☰</button>
  </div>
</nav>`,
      css: `.site-navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: rgba(13, 21, 39, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid #1e293b;
  border-radius: 12px;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  position: relative;
}
.nav-brand { display: flex; align-items: center; gap: 8px; text-decoration: none; }
.brand-logo {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
.brand-text { font-size: 18px; font-weight: 800; color: #fff; }
.brand-text span { color: #3b82f6; }
.nav-menu { display: flex; align-items: center; gap: 24px; }
.nav-link { color: #94a3b8; text-decoration: none; font-size: 14px; font-weight: 600; transition: color 0.2s; }
.nav-link:hover, .nav-link.active { color: #3b82f6; }
.nav-actions { display: flex; align-items: center; gap: 12px; }
.nav-btn-link { color: #cbd5e1; text-decoration: none; font-size: 13px; font-weight: 600; }
.nav-btn-primary {
  padding: 8px 16px;
  border-radius: 8px;
  background: #3b82f6;
  border: none;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}
.nav-btn-primary:hover { background: #2563eb; }
.nav-hamburger {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .nav-hamburger { display: block; }
  .nav-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #0d1527;
    border: 1px solid #1e293b;
    border-radius: 0 0 12px 12px;
    flex-direction: column;
    padding: 16px;
    gap: 12px;
  }
  .nav-menu.open { display: flex; }
}`,
      js: `function toggleNavMenu() {
  const menu = document.getElementById("navMenu");
  if (menu) menu.classList.toggle("open");
}`
    };
  }

  // 5. PRICING PAGE
  if (p.includes('pricing') || p.includes('pricing page') || p.includes('pricing table') || p.includes('subscription')) {
    return {
      name: 'Modern SaaS 3-Tier Pricing Page',
      category: 'Pricing',
      description: 'Conversion-optimized pricing table with Free, Pro, and Enterprise tiers, monthly/annual toggle, and checklist features.',
      tags: ['Pricing', 'SaaS', 'Plans', 'Monetization'],
      html: `<div class="pricing-container">
  <div class="pricing-header">
    <div class="pricing-pill">⚡ Transparent Pricing</div>
    <h2>Pick the Perfect Plan for Your Team</h2>
    <p>Zero hidden fees. Unlimited design exploration with instant HTML/CSS exports.</p>
  </div>

  <div class="pricing-grid">
    <!-- Free Tier -->
    <div class="plan-card">
      <div class="plan-name">Starter</div>
      <p class="plan-sub">For students and individual developers exploring UI components.</p>
      <div class="plan-price">$0 <span>/ month</span></div>
      <button class="plan-btn" onclick="alert('Selected Starter Plan')">Get Started Free</button>
      <ul class="plan-features">
        <li>✓ 15+ Core UI Components</li>
        <li>✓ Live HTML/CSS Inspection</li>
        <li>✓ Zero Framework Lock-In</li>
        <li>✓ Community Support</li>
      </ul>
    </div>

    <!-- Pro Tier (Featured) -->
    <div class="plan-card featured">
      <div class="popular-tag">MOST POPULAR</div>
      <div class="plan-name">Pro Developer</div>
      <p class="plan-sub">For engineers and freelance creators building production apps.</p>
      <div class="plan-price">$29 <span>/ month</span></div>
      <button class="plan-btn primary" onclick="alert('Starting 14-day free trial...')">Start 14-Day Free Trial</button>
      <ul class="plan-features">
        <li>✓ All 15+ Core UI Primitives</li>
        <li>✓ AI UI Generator Access</li>
        <li>✓ 1-Click Complete ZIP Export</li>
        <li>✓ Unlimited Projects & Favorites</li>
        <li>✓ Priority Discord Support</li>
      </ul>
    </div>

    <!-- Enterprise Tier -->
    <div class="plan-card">
      <div class="plan-name">Enterprise</div>
      <p class="plan-sub">For teams requiring custom design systems and dedicated support.</p>
      <div class="plan-price">$99 <span>/ month</span></div>
      <button class="plan-btn" onclick="alert('Contacting sales team...')">Contact Enterprise</button>
      <ul class="plan-features">
        <li>✓ Unlimited Team Seats</li>
        <li>✓ Custom Token Injections</li>
        <li>✓ Dedicated SLA & Account Lead</li>
        <li>✓ Custom Security Hardening</li>
      </ul>
    </div>
  </div>
</div>`,
      css: `.pricing-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 16px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #fff;
}
.pricing-header { text-align: center; margin-bottom: 32px; }
.pricing-pill {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 12px;
}
.pricing-header h2 { font-size: 26px; font-weight: 800; margin-bottom: 6px; }
.pricing-header p { font-size: 14px; color: #94a3b8; }
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  align-items: stretch;
}
.plan-card {
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
}
.plan-card.featured {
  border-color: #3b82f6;
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.25);
  transform: translateY(-4px);
}
.popular-tag {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 999px;
}
.plan-name { font-size: 18px; font-weight: 800; margin-bottom: 6px; }
.plan-sub { font-size: 12px; color: #94a3b8; min-height: 36px; margin-bottom: 16px; line-height: 1.4; }
.plan-price { font-size: 32px; font-weight: 800; margin-bottom: 20px; }
.plan-price span { font-size: 13px; font-weight: 500; color: #94a3b8; }
.plan-btn {
  width: 100%;
  padding: 11px;
  border-radius: 8px;
  background: #1e293b;
  border: 1px solid #334155;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.2s;
}
.plan-btn:hover { background: #334155; }
.plan-btn.primary {
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  border: none;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);
}
.plan-btn.primary:hover { transform: translateY(-1px); }
.plan-features { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 13px; color: #cbd5e1; }`,
      js: `console.log("Pricing component loaded");`
    };
  }

  // 6. PORTFOLIO WEBSITE / PROFILE
  if (p.includes('portfolio') || p.includes('developer profile') || p.includes('resume') || p.includes('cv')) {
    const isBlue = p.includes('blue');
    return {
      name: isBlue ? 'Modern Blue Developer Portfolio' : 'Developer Portfolio & Project Showcase',
      category: 'Portfolio',
      description: isBlue 
        ? 'High-impact developer portfolio featuring vibrant royal blue accents, tech stack tags, project showcase cards, and contact action.' 
        : 'Modern developer portfolio with personal intro, tech stack tags, project showcase cards with demo links, and contact trigger.',
      tags: ['Portfolio', 'Developer', 'Projects', isBlue ? 'Blue Theme' : 'Showcase'],
      html: `<div class="portfolio-card">
  <div class="portfolio-hero">
    <div class="profile-pic">👨‍💻</div>
    <div>
      <h2>Alex Rivera</h2>
      <p class="role-text">Senior Full-Stack Engineer & Open-Source Creator</p>
      <div class="status-indicator">🟢 Available for new project contracts</div>
    </div>
  </div>

  <div class="skills-section">
    <h4>Tech Stack & Skills</h4>
    <div class="tags-row">
      <span class="tag">JavaScript (ES6+)</span>
      <span class="tag">TypeScript</span>
      <span class="tag">HTML5 / CSS3</span>
      <span class="tag">Node.js</span>
      <span class="tag">REST APIs</span>
      <span class="tag">PostgreSQL</span>
      <span class="tag">UI/UX Architecture</span>
    </div>
  </div>

  <div class="projects-section">
    <h4>Featured Projects</h4>
    <div class="project-item">
      <div class="project-header">
        <strong>⚡ CloudScale Telemetry Dashboard</strong>
        <a href="#" class="demo-link" onclick="alert('Viewing live demo...'); return false;">Live Demo ➔</a>
      </div>
      <p>High-throughput real-time monitoring engine with sub-millisecond chart latency.</p>
    </div>
    <div class="project-item">
      <div class="project-header">
        <strong>🔒 AuthGate Zero-Trust Provider</strong>
        <a href="#" class="demo-link" onclick="alert('Viewing live demo...'); return false;">Live Demo ➔</a>
      </div>
      <p>Decentralized authentication module with biometric passkey and 2FA fallback.</p>
    </div>
  </div>

  <div class="portfolio-actions">
    <button class="contact-btn" onclick="alert('Opening email client to contact Alex...')">📬 Get In Touch</button>
    <button class="github-btn" onclick="alert('Navigating to GitHub profile...')">GitHub Profile ➔</button>
  </div>
</div>`,
      css: `.portfolio-card {
  width: 100%;
  max-width: 520px;
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 30px;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}
.portfolio-hero { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
.profile-pic {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #1e293b;
  border: 2px solid #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
}
.portfolio-hero h2 { font-size: 20px; font-weight: 800; margin-bottom: 2px; }
.role-text { font-size: 13px; color: #94a3b8; }
.status-indicator { font-size: 11px; color: #10b981; margin-top: 4px; font-weight: 600; }
.skills-section { margin-bottom: 24px; }
.skills-section h4, .projects-section h4 { font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: 700; margin-bottom: 10px; }
.tags-row { display: flex; flex-wrap: wrap; gap: 6px; }
.tag { background: #172238; border: 1px solid #233352; color: #93c5fd; font-size: 11px; padding: 4px 10px; border-radius: 6px; font-weight: 600; }
.projects-section { margin-bottom: 24px; }
.project-item { background: #070c18; border: 1px solid #1e293b; border-radius: 10px; padding: 12px 14px; margin-bottom: 10px; }
.project-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; font-size: 13px; }
.demo-link { font-size: 12px; color: #3b82f6; text-decoration: none; font-weight: 600; }
.project-item p { font-size: 12px; color: #94a3b8; margin: 0; line-height: 1.4; }
.portfolio-actions { display: flex; gap: 10px; }
.contact-btn {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  background: #3b82f6;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
}
.github-btn {
  padding: 10px 14px;
  border-radius: 8px;
  background: #1e293b;
  border: 1px solid #334155;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
}`,
      js: `console.log("Portfolio loaded");`
    };
  }

  // 7. CONTACT FORM
  if (p.includes('contact') || p.includes('message') || p.includes('inquiry')) {
    return {
      name: 'Interactive Contact & Support Form',
      category: 'Forms',
      description: 'Clean contact form with fields for Full Name, Email, Subject dropdown, Message textarea with live character counter, and submit confirmation.',
      tags: ['Contact', 'Forms', 'Support', 'Feedback'],
      html: `<div class="contact-box">
  <div class="contact-header">
    <div class="contact-badge">📬</div>
    <h2>Get In Touch</h2>
    <p>Have a question, feedback, or project proposal? Send us a message.</p>
  </div>

  <div id="contactMsg" class="contact-alert" style="display: none;"></div>

  <form id="contactForm" onsubmit="event.preventDefault(); submitContact();">
    <div class="contact-grid">
      <div class="field-box">
        <label for="cName">Your Name</label>
        <input type="text" id="cName" placeholder="Alex Rivera" required />
      </div>
      <div class="field-box">
        <label for="cEmail">Email Address</label>
        <input type="email" id="cEmail" placeholder="alex@company.com" required />
      </div>
    </div>

    <div class="field-box full">
      <label for="cSubject">Subject</label>
      <select id="cSubject">
        <option value="General Inquiry">General Inquiry</option>
        <option value="Project Collaboration">Project Collaboration</option>
        <option value="Technical Support">Technical Support</option>
        <option value="Bug Report">Bug Report</option>
      </select>
    </div>

    <div class="field-box full">
      <div class="label-split">
        <label for="cMessage">Message</label>
        <span id="cCount">0 / 400</span>
      </div>
      <textarea id="cMessage" rows="4" maxlength="400" placeholder="Write your message here..." oninput="updateCharCount()" required></textarea>
    </div>

    <button type="submit" class="contact-submit-btn">Send Message 🚀</button>
  </form>
</div>`,
      css: `.contact-box {
  width: 100%;
  max-width: 480px;
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 32px 28px;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}
.contact-header { text-align: center; margin-bottom: 22px; }
.contact-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(59, 130, 246, 0.2);
  border-radius: 10px;
  font-size: 18px;
  margin-bottom: 8px;
}
.contact-header h2 { font-size: 22px; font-weight: 800; margin-bottom: 4px; }
.contact-header p { font-size: 13px; color: #94a3b8; }
.contact-alert {
  padding: 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 16px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #6ee7b7;
}
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }
@media (max-width: 480px) { .contact-grid { grid-template-columns: 1fr; } }
.field-box { display: flex; flex-direction: column; gap: 6px; }
.field-box.full { margin-bottom: 14px; }
.field-box label { font-size: 12px; font-weight: 600; color: #cbd5e1; }
.label-split { display: flex; justify-content: space-between; align-items: center; }
.label-split span { font-size: 11px; color: #64748b; }
.field-box input, .field-box select, .field-box textarea {
  background: #070c18;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 10px 12px;
  color: #fff;
  font-size: 13px;
  outline: none;
  font-family: inherit;
}
.field-box input:focus, .field-box select:focus, .field-box textarea:focus { border-color: #3b82f6; }
.contact-submit-btn {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 6px;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);
}`,
      js: `function updateCharCount() {
  const txt = document.getElementById("cMessage");
  const count = document.getElementById("cCount");
  if (txt && count) count.innerText = txt.value.length + " / 400";
}

function submitContact() {
  const msg = document.getElementById("contactMsg");
  if (msg) {
    msg.innerText = "✅ Message transmitted successfully! We will reply within 24 hours.";
    msg.style.display = "block";
  }
}`
    };
  }

  // 8. E-COMMERCE PRODUCT CARD
  if (p.includes('product') || p.includes('ecommerce') || p.includes('shop') || p.includes('store')) {
    return {
      name: 'Modern E-commerce Product Card',
      category: 'E-commerce',
      description: 'Sleek product card with image thumbnail, category tag, rating stars, price, quantity selector, and animated Add to Cart button.',
      tags: ['E-commerce', 'Shopping', 'Product Card', 'Cards'],
      html: `<div class="product-card">
  <div class="product-badge">New Release</div>
  <div class="product-image-box">
    <div class="image-mock">⌨️</div>
  </div>

  <div class="product-body">
    <div class="meta-row">
      <span class="cat-pill">Developer Gear</span>
      <span class="rating-stars">★ 4.9 (128)</span>
    </div>

    <h3 class="product-title">Ergonomic Wireless Mechanical Keyboard</h3>
    <p class="product-desc">Hot-swappable tactile switches, precision CNC aluminum case, and low-latency wireless Bluetooth 5.2.</p>

    <div class="price-action-row">
      <div class="price-box">
        <span class="currency">$</span>
        <span class="amount">149.00</span>
        <span class="old-price">$189.00</span>
      </div>
      <button class="cart-btn" id="addToCartBtn" onclick="handleAddToCart()">
        Add to Cart 🛒
      </button>
    </div>
  </div>
</div>`,
      css: `.product-card {
  width: 100%;
  max-width: 360px;
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 16px;
  overflow: hidden;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  position: relative;
}
.product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #3b82f6;
  color: #fff;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 4px;
}
.product-image-box {
  height: 180px;
  background: #070c18;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #1e293b;
}
.image-mock { font-size: 54px; }
.product-body { padding: 20px; }
.meta-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.cat-pill { font-size: 11px; color: #94a3b8; font-weight: 600; text-transform: uppercase; }
.rating-stars { font-size: 12px; color: #fbbf24; font-weight: 700; }
.product-title { font-size: 16px; font-weight: 800; margin-bottom: 6px; line-height: 1.3; }
.product-desc { font-size: 12px; color: #94a3b8; line-height: 1.5; margin-bottom: 18px; }
.price-action-row { display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid #1e293b; }
.price-box { display: flex; align-items: baseline; gap: 4px; }
.currency { font-size: 13px; font-weight: 700; color: #3b82f6; }
.amount { font-size: 22px; font-weight: 800; }
.old-price { font-size: 12px; color: #64748b; text-decoration: line-through; margin-left: 4px; }
.cart-btn {
  padding: 9px 16px;
  border-radius: 8px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}`,
      js: `function handleAddToCart() {
  const btn = document.getElementById("addToCartBtn");
  if (!btn) return;
  btn.innerText = "Added to Cart ✓";
  btn.style.background = "#10b981";
  setTimeout(() => {
    btn.innerText = "Add to Cart 🛒";
    btn.style.background = "";
  }, 1500);
}`
    };
  }

  // 9. CRYPTO WALLET CARD
  if (p.includes('crypto') || p.includes('wallet') || p.includes('coin') || p.includes('bitcoin')) {
    return {
      name: 'Modern Web3 Crypto Asset Card',
      category: 'Cards',
      description: 'Sleek decentralized wallet card with live asset balances, token portfolio, and send/receive actions.',
      tags: ['Crypto', 'Web3', 'Finance', 'Dark Mode'],
      html: `<div class="crypto-card">
  <div class="crypto-header">
    <div class="wallet-badge"><span class="pulse-dot"></span> Ethereum Mainnet</div>
    <span class="wallet-id">0x8F3...9C21</span>
  </div>
  <div class="balance-display">
    <span class="balance-sub">Total Portfolio Balance</span>
    <h2 class="balance-val">$48,291.50</h2>
    <span class="balance-change positive">+8.42% (+$3,750.20 today)</span>
  </div>
  <div class="crypto-actions">
    <button class="action-btn send" onclick="alert('Send action triggered')">↑ Send</button>
    <button class="action-btn receive" onclick="alert('Receive address: 0x8F3a...9C21')">↓ Receive</button>
    <button class="action-btn swap" onclick="alert('Swap tokens triggered')">⇄ Swap</button>
  </div>
  <div class="token-list">
    <div class="token-row">
      <div class="token-icon eth">Ξ</div>
      <div class="token-info"><strong>Ethereum</strong><span>12.4 ETH</span></div>
      <div class="token-val"><strong>$31,248.00</strong><span class="positive">+5.2%</span></div>
    </div>
    <div class="token-row">
      <div class="token-icon btc">₿</div>
      <div class="token-info"><strong>Bitcoin</strong><span>0.24 BTC</span></div>
      <div class="token-val"><strong>$15,120.50</strong><span class="positive">+3.1%</span></div>
    </div>
  </div>
</div>`,
      css: `.crypto-card {
  width: 100%;
  max-width: 420px;
  background: #0d1322;
  border: 1px solid #23304a;
  border-radius: 18px;
  padding: 24px;
  color: #f8fafc;
  box-shadow: 0 16px 36px rgba(0,0,0,0.5);
  font-family: inherit;
}
.crypto-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.wallet-badge { display: flex; align-items: center; gap: 8px; font-size: 12px; background: #172033; border: 1px solid #23304a; padding: 4px 10px; border-radius: 9999px; color: #94a3b8; }
.pulse-dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; box-shadow: 0 0 8px #10b981; }
.wallet-id { font-size: 12px; color: #64748b; font-family: monospace; }
.balance-display { margin-bottom: 24px; }
.balance-sub { font-size: 13px; color: #94a3b8; }
.balance-val { font-size: 36px; font-weight: 800; margin: 4px 0; letter-spacing: -1px; }
.balance-change.positive { font-size: 13px; color: #10b981; font-weight: 600; }
.crypto-actions { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 24px; }
.action-btn { padding: 10px; border-radius: 10px; border: 1px solid #23304a; background: #172033; color: #f8fafc; font-weight: 600; font-size: 13px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #3b82f6; border-color: #3b82f6; transform: translateY(-2px); }
.token-list { display: flex; flex-direction: column; gap: 12px; }
.token-row { display: flex; align-items: center; justify-content: space-between; padding: 10px; border-radius: 10px; background: rgba(23, 32, 51, 0.5); border: 1px solid #23304a; }
.token-icon { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: bold; }
.token-icon.eth { background: rgba(99, 102, 241, 0.2); color: #818cf8; }
.token-icon.btc { background: rgba(245, 158, 11, 0.2); color: #fbbf24; }
.token-info, .token-val { display: flex; flex-direction: column; }
.token-info span, .token-val span { font-size: 11px; color: #64748b; }
.token-val { text-align: right; }`,
      js: `console.log("Crypto wallet initialized");`
    };
  }

  // 10. SIDEBAR NAVIGATION
  if (p.includes('sidebar') || p.includes('side nav') || p.includes('drawer navigation')) {
    return {
      name: 'Modern Responsive Sidebar Navigation',
      category: 'Navigation',
      description: 'Collapsible application sidebar featuring brand logo, categorised navigation groups, badge indicators, and user account status.',
      tags: ['Sidebar', 'Navigation', 'Admin', 'Responsive'],
      html: `<div class="sidebar-wrapper" id="appSidebar">
  <div class="sidebar-header">
    <div class="brand-box">
      <div class="brand-badge">⚡</div>
      <div class="brand-details">
        <h3 class="brand-name">Inspire<span>UI</span></h3>
        <span class="brand-role">Workspace Pro</span>
      </div>
    </div>
    <button class="collapse-btn" onclick="toggleSidebarCollapse()" title="Toggle Sidebar">‹</button>
  </div>

  <nav class="sidebar-nav">
    <div class="nav-section-title">Core</div>
    <a href="#" class="nav-item active"><span class="nav-icon">📊</span><span class="nav-text">Dashboard</span></a>
    <a href="#" class="nav-item"><span class="nav-icon">🚀</span><span class="nav-text">Projects</span><span class="badge">12</span></a>
    <a href="#" class="nav-item"><span class="nav-icon">🧭</span><span class="nav-text">Components</span></a>
    
    <div class="nav-section-title">Management</div>
    <a href="#" class="nav-item"><span class="nav-icon">👥</span><span class="nav-text">Team</span></a>
    <a href="#" class="nav-item"><span class="nav-icon">💳</span><span class="nav-text">Billing</span></a>
    <a href="#" class="nav-item"><span class="nav-icon">⚙️</span><span class="nav-text">Settings</span></a>
  </nav>

  <div class="sidebar-footer">
    <div class="user-pill">
      <div class="user-avatar">SR</div>
      <div class="user-info">
        <strong class="user-name">Suraj (Student)</strong>
        <span class="user-email">suraj@inspireui.dev</span>
      </div>
    </div>
  </div>
</div>`,
      css: `.sidebar-wrapper {
  width: 250px;
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 20px 14px;
  color: #f8fafc;
  display: flex;
  flex-direction: column;
  height: 480px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: width 0.25s ease;
}
.sidebar-wrapper.collapsed { width: 72px; }
.sidebar-wrapper.collapsed .brand-details,
.sidebar-wrapper.collapsed .nav-text,
.sidebar-wrapper.collapsed .badge,
.sidebar-wrapper.collapsed .nav-section-title,
.sidebar-wrapper.collapsed .user-info { display: none; }
.sidebar-wrapper.collapsed .collapse-btn { transform: rotate(180deg); }
.sidebar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding: 0 4px; }
.brand-box { display: flex; align-items: center; gap: 10px; }
.brand-badge { width: 34px; height: 34px; border-radius: 8px; background: linear-gradient(135deg, #3b82f6, #6366f1); display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
.brand-name { font-size: 16px; font-weight: 800; margin: 0; }
.brand-name span { color: #3b82f6; }
.brand-role { font-size: 11px; color: #64748b; }
.collapse-btn { background: #172033; border: 1px solid #23304a; color: #94a3b8; width: 26px; height: 26px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; transition: all 0.2s; }
.collapse-btn:hover { background: #3b82f6; color: white; }
.sidebar-nav { display: flex; flex-direction: column; gap: 4px; flex: 1; overflow-y: auto; }
.nav-section-title { font-size: 10px; font-weight: 700; text-transform: uppercase; color: #475569; letter-spacing: 0.05em; padding: 10px 10px 4px; }
.nav-item { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 8px; color: #94a3b8; text-decoration: none; font-size: 13px; font-weight: 600; transition: all 0.15s; }
.nav-item:hover { background: #172033; color: #f8fafc; }
.nav-item.active { background: #1e293b; color: #3b82f6; }
.nav-icon { font-size: 16px; flex-shrink: 0; width: 20px; text-align: center; }
.badge { margin-left: auto; background: #3b82f6; color: white; font-size: 10px; font-weight: 700; padding: 2px 7px; border-radius: 999px; }
.sidebar-footer { padding-top: 14px; border-top: 1px solid #1e293b; }
.user-pill { display: flex; align-items: center; gap: 10px; padding: 6px 4px; }
.user-avatar { width: 32px; height: 32px; border-radius: 50%; background: #3b82f6; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: white; flex-shrink: 0; }
.user-info { display: flex; flex-direction: column; overflow: hidden; }
.user-name { font-size: 12px; font-weight: 700; white-space: nowrap; }
.user-email { font-size: 10px; color: #64748b; white-space: nowrap; }`,
      js: `function toggleSidebarCollapse() {
  const sidebar = document.getElementById("appSidebar");
  if (sidebar) sidebar.classList.toggle("collapsed");
}`
    };
  }

  // 11. LANDING PAGE HERO
  if (p.includes('landing') || p.includes('landing page') || p.includes('hero section') || p.includes('home page')) {
    return {
      name: 'High-Converting SaaS Landing Page Hero',
      category: 'Landing Page',
      description: 'Modern developer tool hero section with command badge, high-converting headline, dual action buttons, and live tech stack indicators.',
      tags: ['Landing Page', 'Hero', 'Call to Action', 'Responsive'],
      html: `<div class="hero-container">
  <div class="announcement-badge">
    <span class="badge-dot"></span>
    <span class="badge-text">v2.4 Released with Live Code Synchronization</span>
    <span class="badge-arrow">→</span>
  </div>

  <h1 class="hero-title">
    Craft Production UI in Seconds, <span class="highlight">Not Days</span>
  </h1>

  <p class="hero-lead">
    Discover curated modern web components, customize theme tokens visually, and export pristine semantic HTML, CSS and JavaScript directly into your codebase.
  </p>

  <div class="hero-actions">
    <button class="primary-btn" onclick="alert('Exploring UI Library...')">Explore UI Library ➔</button>
    <button class="secondary-btn" onclick="alert('Opening Live Playground...')">Live Playground</button>
  </div>

  <div class="trust-indicators">
    <span class="trust-label">Zero dependencies</span>
    <span class="trust-sep">·</span>
    <span class="trust-label">W3C Semantic Standards</span>
    <span class="trust-sep">·</span>
    <span class="trust-label">Instant Code Downloads</span>
  </div>
</div>`,
      css: `.hero-container {
  width: 100%;
  max-width: 680px;
  padding: 44px 28px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  font-family: 'Plus Jakarta Sans', sans-serif;
}
.announcement-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 999px;
  background-color: #172033;
  border: 1px solid #23304a;
  font-size: 12px;
  color: #cbd5e1;
  margin-bottom: 22px;
  cursor: pointer;
}
.badge-dot { width: 6px; height: 6px; border-radius: 50%; background-color: #10b981; }
.badge-arrow { color: #3b82f6; }
.hero-title {
  color: #f8fafc;
  font-size: 32px;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
}
.highlight { color: #3b82f6; }
.hero-lead {
  color: #94a3b8;
  font-size: 14px;
  line-height: 1.6;
  max-width: 520px;
  margin-bottom: 26px;
}
.hero-actions { display: flex; gap: 12px; margin-bottom: 28px; flex-wrap: wrap; justify-content: center; }
.primary-btn {
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 22px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);
  transition: transform 0.2s;
}
.primary-btn:hover { transform: translateY(-1px); }
.secondary-btn {
  background-color: transparent;
  color: #f8fafc;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 22px;
  border-radius: 10px;
  border: 1px solid #334155;
  cursor: pointer;
  transition: all 0.2s;
}
.secondary-btn:hover { background-color: #1e293b; border-color: #475569; }
.trust-indicators { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #64748b; flex-wrap: wrap; justify-content: center; }
.trust-sep { opacity: 0.5; }`,
      js: `console.log("Landing page hero loaded");`
    };
  }

  // 12. BLOG PAGE / ARTICLE CARD
  if (p.includes('blog') || p.includes('article') || p.includes('post') || p.includes('news')) {
    return {
      name: 'Editorial Blog Post Card with Interactions',
      category: 'Blog',
      description: 'Modern developer publication card featuring reading time badge, author attribution, interactive clap/like counter, and bookmark toggle.',
      tags: ['Blog', 'Article', 'Content', 'Cards'],
      html: `<article class="blog-card">
  <div class="blog-cover">
    <div class="cover-badge">Architecture &bull; 6 min read</div>
    <div class="cover-mock">⚡ State Synchronization in Zero-Dependency Vanilla JS</div>
  </div>

  <div class="blog-body">
    <h3 class="blog-title">Building Scalable Web Applications Without Modern Framework Overhead</h3>
    <p class="blog-excerpt">
      How modern DOM APIs, semantic CSS custom properties, and modular vanilla JavaScript allow you to build blazing-fast tools without heavy bundlers.
    </p>

    <div class="blog-author-bar">
      <div class="author-pic">👨‍💻</div>
      <div class="author-details">
        <span class="author-name">Alex Rivera</span>
        <span class="publish-date">March 28, 2026</span>
      </div>
      <div class="blog-actions">
        <button class="clap-btn" id="clapBtn" onclick="handleClap()">👏 <span id="clapCount">142</span></button>
        <button class="bookmark-btn" id="bookmarkBtn" onclick="toggleBookmark()" title="Bookmark">🔖</button>
      </div>
    </div>
  </div>
</article>`,
      css: `.blog-card {
  width: 100%;
  max-width: 440px;
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 16px;
  overflow: hidden;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}
.blog-cover {
  height: 150px;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border-bottom: 1px solid #1e293b;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cover-badge { font-size: 11px; font-weight: 700; color: #3b82f6; text-transform: uppercase; background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); padding: 3px 8px; border-radius: 4px; align-self: flex-start; }
.cover-mock { font-size: 14px; font-weight: 700; color: #94a3b8; }
.blog-body { padding: 22px; }
.blog-title { font-size: 18px; font-weight: 800; line-height: 1.35; margin-bottom: 8px; }
.blog-excerpt { font-size: 13px; color: #94a3b8; line-height: 1.5; margin-bottom: 20px; }
.blog-author-bar { display: flex; align-items: center; gap: 10px; padding-top: 14px; border-top: 1px solid #1e293b; }
.author-pic { width: 34px; height: 34px; border-radius: 50%; background: #172033; border: 1px solid #23304a; display: flex; align-items: center; justify-content: center; font-size: 16px; }
.author-details { display: flex; flex-direction: column; flex: 1; }
.author-name { font-size: 12px; font-weight: 700; }
.publish-date { font-size: 11px; color: #64748b; }
.blog-actions { display: flex; align-items: center; gap: 6px; }
.clap-btn { background: #172033; border: 1px solid #23304a; color: #cbd5e1; padding: 5px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.15s; }
.clap-btn:hover { background: #1e293b; color: #3b82f6; }
.bookmark-btn { background: #172033; border: 1px solid #23304a; color: #cbd5e1; padding: 5px 8px; border-radius: 6px; font-size: 12px; cursor: pointer; transition: all 0.15s; }
.bookmark-btn.active { color: #fbbf24; border-color: #fbbf24; }`,
      js: `let claps = 142;
function handleClap() {
  claps++;
  const el = document.getElementById("clapCount");
  if (el) el.innerText = claps;
}
function toggleBookmark() {
  const b = document.getElementById("bookmarkBtn");
  if (b) b.classList.toggle("active");
}`
    };
  }

  // 13. DATA TABLE
  if (p.includes('table') || p.includes('data table') || p.includes('grid table') || p.includes('records list')) {
    return {
      name: 'Interactive Data Table with Search & Status Badges',
      category: 'Table',
      description: 'Responsive tabular data grid with real-time text search filtering, sortable columns, status pills, and row action triggers.',
      tags: ['Table', 'Data Grid', 'Search', 'Filter'],
      html: `<div class="table-container">
  <div class="table-header-bar">
    <div>
      <h3 class="table-title">Project Members & Access</h3>
      <p class="table-subtitle">Search and manage team access permissions</p>
    </div>
    <div class="table-search-box">
      <input type="text" id="memberSearchInput" placeholder="Filter members..." oninput="filterMemberTable()" />
    </div>
  </div>

  <div class="table-scroll-wrapper">
    <table class="custom-table" id="memberTable">
      <thead>
        <tr>
          <th>User</th>
          <th>Role</th>
          <th>Status</th>
          <th>Joined</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody id="memberTbody">
        <tr>
          <td><strong>Suraj Sharma</strong><br><small>suraj@example.com</small></td>
          <td>Developer</td>
          <td><span class="status-pill active">Active</span></td>
          <td>Mar 2026</td>
          <td><button class="row-btn" onclick="alert('Viewing Suraj...')">Edit</button></td>
        </tr>
        <tr>
          <td><strong>Alex Rivera</strong><br><small>alex@example.com</small></td>
          <td>Administrator</td>
          <td><span class="status-pill active">Active</span></td>
          <td>Jan 2026</td>
          <td><button class="row-btn" onclick="alert('Viewing Alex...')">Edit</button></td>
        </tr>
        <tr>
          <td><strong>Sarah Jenkins</strong><br><small>sarah@example.com</small></td>
          <td>UI Designer</td>
          <td><span class="status-pill pending">Invited</span></td>
          <td>Mar 2026</td>
          <td><button class="row-btn" onclick="alert('Viewing Sarah...')">Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
      css: `.table-container {
  width: 100%;
  max-width: 580px;
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 22px;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}
.table-header-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px; }
.table-title { font-size: 16px; font-weight: 800; margin-bottom: 2px; }
.table-subtitle { font-size: 12px; color: #94a3b8; }
.table-search-box input {
  background: #070c18;
  border: 1px solid #1e293b;
  border-radius: 8px;
  padding: 8px 12px;
  color: #fff;
  font-size: 12px;
  outline: none;
}
.table-search-box input:focus { border-color: #3b82f6; }
.table-scroll-wrapper { overflow-x: auto; }
.custom-table { width: 100%; border-collapse: collapse; font-size: 13px; text-align: left; }
.custom-table th { padding: 10px 8px; color: #64748b; font-size: 11px; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid #1e293b; }
.custom-table td { padding: 12px 8px; border-bottom: 1px solid #172033; }
.custom-table small { color: #64748b; font-size: 11px; }
.status-pill { padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; }
.status-pill.active { background: rgba(16, 185, 129, 0.15); color: #34d399; }
.status-pill.pending { background: rgba(245, 158, 11, 0.15); color: #fbbf24; }
.row-btn { background: #172033; border: 1px solid #23304a; color: #cbd5e1; padding: 4px 8px; border-radius: 6px; font-size: 11px; cursor: pointer; }
.row-btn:hover { background: #3b82f6; color: white; border-color: #3b82f6; }`,
      js: `function filterMemberTable() {
  const query = document.getElementById("memberSearchInput").value.toLowerCase();
  const rows = document.querySelectorAll("#memberTbody tr");
  rows.forEach(r => {
    r.style.display = r.innerText.toLowerCase().includes(query) ? "" : "none";
  });
}`
    };
  }

  // 10. DYNAMIC SMART DEFAULT (NO FAKE METRICS, NO "AI GENERATED COMPONENT")
  // Clean, real UI card styled to the exact prompt
  const title = prompt.length > 0 ? prompt.charAt(0).toUpperCase() + prompt.slice(1) : 'Modern Application Card';
  return {
    name: title,
    category: category || 'Cards',
    description: `A responsive ${style || 'modern'} ${title} component with interactive actions and clean styling.`,
    tags: ['UI Design', 'Responsive', 'Clean Code'],
    html: `<div class="custom-ui-card">
  <div class="card-top">
    <div class="icon-badge">✨</div>
    <div class="card-heading-box">
      <h3 class="card-title">${title}</h3>
      <p class="card-subtitle">Designed to fit your application layout.</p>
    </div>
  </div>

  <div class="card-content-area">
    <p>This is a dedicated UI implementation for <strong>"${prompt}"</strong> built with pure semantic HTML, responsive CSS, and interactive JavaScript.</p>
    <div class="features-pill-row">
      <span class="feature-tag">Responsive Layout</span>
      <span class="feature-tag">Theme Variables</span>
      <span class="feature-tag">Zero Dependencies</span>
    </div>
  </div>

  <div class="card-actions-row">
    <button class="btn-cancel" onclick="alert('Action cancelled')">Cancel</button>
    <button class="btn-primary-action" onclick="alert('Action confirmed for ${title}!')">Confirm Action ➔</button>
  </div>
</div>`,
    css: `.custom-ui-card {
  width: 100%;
  max-width: 440px;
  background: #0d1527;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 28px;
  color: #f8fafc;
  font-family: 'Plus Jakarta Sans', sans-serif;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}
.card-top { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
.icon-badge {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.card-title { font-size: 18px; font-weight: 800; margin-bottom: 2px; }
.card-subtitle { font-size: 12px; color: #94a3b8; }
.card-content-area { margin-bottom: 24px; }
.card-content-area p { font-size: 13px; color: #cbd5e1; line-height: 1.5; margin-bottom: 14px; }
.features-pill-row { display: flex; flex-wrap: wrap; gap: 6px; }
.feature-tag { font-size: 11px; background: #172238; border: 1px solid #233352; color: #93c5fd; padding: 4px 10px; border-radius: 6px; font-weight: 600; }
.card-actions-row { display: flex; justify-content: flex-end; gap: 10px; padding-top: 16px; border-top: 1px solid #1e293b; }
.btn-cancel {
  padding: 9px 16px;
  border-radius: 8px;
  background: transparent;
  border: 1px solid #334155;
  color: #cbd5e1;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.btn-primary-action {
  padding: 9px 18px;
  border-radius: 8px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  border: none;
  color: white;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);
}`,
    js: `console.log("Component ${title} initialized");`
  };
}

function aiPlugin() {
  return {
    name: 'ai-generate-ui-endpoint',
    configureServer(server) {
      server.middlewares.use('/api/generate-ui', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method Not Allowed' }));
          return;
        }

        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const prompt = (data.prompt || '').trim();
            const style = data.style || 'Modern Dark';
            const category = data.category || 'Components';

            if (!prompt) {
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Prompt is required' }));
              return;
            }

            let component = null;

            if (process.env.GEMINI_API_KEY) {
              try {
                const ai = new GoogleGenAI();
                const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Gemini request timeout')), 4500));
                const systemPrompt = `You are an expert UI/UX frontend engineer.
The user wants you to generate a REAL UI design and working code for: "${prompt}".
CRITICAL REQUIREMENTS:
- You must generate the ACTUAL requested UI design (e.g., if user asks for a login page, produce a real login page; if signup page, produce a real signup page; if dashboard, produce a real dashboard; if navbar, produce a real navbar; if pricing, produce real pricing cards; if portfolio, produce a real portfolio).
- DO NOT produce placeholder statistics, metrics cards, "AI Generated Component" badges, or fake numbers like 1,480 / 99.8%.
- HTML must be pure semantic HTML (no React, no Tailwind, no external libraries).
- CSS must be clean CSS, modern dark theme by default, flexbox/grid layout, fully responsive.
- JS must be vanilla JavaScript for interactivity (validation, toggles, button clicks).
You MUST respond with valid JSON matching this schema with NO commentary:
{
  "name": "Meaningful Name for the UI",
  "category": "${category}",
  "description": "Short description of the UI",
  "tags": ["Tag1", "Tag2"],
  "html": "<div class=\\"...\\">...</div>",
  "css": ".sample { ... }",
  "js": "console.log('loaded');"
}`;

                const responsePromise = ai.models.generateContent({
                  model: 'gemini-3.8-flash',
                  contents: `${systemPrompt}\n\nUser Request: ${prompt}\nVisual Style: ${style}`,
                });

                const response = await Promise.race([responsePromise, timeoutPromise]);

                let text = response.text || '';
                text = text.trim();
                if (text.startsWith('```json')) {
                  text = text.replace(/^```json\s*/, '').replace(/```\s*$/, '');
                } else if (text.startsWith('```')) {
                  text = text.replace(/^```\s*/, '').replace(/```\s*$/, '');
                }
                component = JSON.parse(text);
              } catch (aiErr) {
                console.warn('Gemini generateContent note:', aiErr.message);
              }
            }

            if (!component) {
              component = generateSmartFallbackUI(prompt, style, category);
            }

            component.id = 'gen-ui-' + Date.now();
            component.author = 'InspireUI Generator';
            component.createdAt = new Date().toISOString();
            component.favouritesCount = 1;
            component.downloadsCount = 1;

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, design: component }));
          } catch (err) {
            console.error('Error in /api/generate-ui:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });

      // AI Chat & Mentor Endpoint (Gemini-powered for students & developers)
      server.middlewares.use('/api/ai-chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method Not Allowed' }));
          return;
        }

        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const message = (data.message || '').trim();

            if (!message) {
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Message is required' }));
              return;
            }

            let result = null;

            if (process.env.GEMINI_API_KEY) {
              try {
                const ai = new GoogleGenAI();
                const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('AI chat timeout')), 5500));
                
                const systemPrompt = `You are the InspireUI AI Mentor & Senior Frontend Instructor.
Your audience consists of IT students (e.g. TY IT academic project students) and frontend web developers.
When a student asks any question or requests a UI:
1. Provide a friendly, comprehensive pedagogical explanation explaining:
   - What the UI does and its architectural layout.
   - How the HTML structure is organized semantically.
   - What CSS techniques are applied (Flexbox/Grid, variables, typography, dark theme).
   - How the JavaScript functions handle DOM events, state, and client validation.
   - "🎓 Viva Examination Tips" explaining what to tell the examiner if asked about this component!
2. If the user is asking to generate a UI or asking how to build a component (or any component-related request):
   - You MUST generate real, working, zero-framework code:
     - HTML: Pure semantic HTML.
     - CSS: Pure CSS matching modern dark InspireUI styling.
     - JS: Vanilla JavaScript.
3. Respond ONLY with a valid JSON object matching this schema (no markdown fences around JSON, or standard json markdown):
{
  "explanation": "Clear explanation of how the code works and viva examination tips...",
  "hasDesign": true,
  "design": {
    "name": "Component Title",
    "category": "Login | Forms | Dashboard | Navbar | Pricing | Portfolio | Cards | Quiz",
    "description": "Short 1-2 sentence description",
    "tags": ["Tag1", "Tag2"],
    "html": "<div class=\\"...\\">...</div>",
    "css": "/* CSS rules */",
    "js": "// JS functions"
  }
}
If the user's question is purely conceptual without needing a new UI, set hasDesign to false and design to null.`;

                const responsePromise = ai.models.generateContent({
                  model: 'gemini-3.8-flash',
                  contents: `${systemPrompt}\n\nStudent/User Question: "${message}"`
                });

                const response = await Promise.race([responsePromise, timeoutPromise]);
                let text = (response.text || '').trim();
                if (text.startsWith('```json')) {
                  text = text.replace(/^```json\s*/, '').replace(/```\s*$/, '');
                } else if (text.startsWith('```')) {
                  text = text.replace(/^```\s*/, '').replace(/```\s*$/, '');
                }
                result = JSON.parse(text);
              } catch (aiErr) {
                console.warn('Gemini chat note:', aiErr.message);
              }
            }

            if (!result || !result.explanation) {
              // Intelligent offline fallback mentor response
              const design = generateSmartFallbackUI(message, 'Modern Dark', 'AI Components');
              result = {
                explanation: `### 🎓 InspireUI AI Mentor Explanation

**Overview:**
Here is the complete solution for **"${message}"**. This component is built with pure, beginner-friendly **HTML, CSS, and Vanilla JavaScript** with zero third-party dependencies, making it ideal for academic evaluation and production use.

**How the Code Works:**
1. **HTML Architecture**: Uses semantic container elements with clear IDs and classes, making DOM selection straightforward in JavaScript.
2. **CSS Styling**: Implements modern dark mode tokens, Flexbox centering, subtle border highlights, and responsive viewport sizing.
3. **JavaScript Interactivity**: Clean DOM manipulation using \`document.getElementById\` and event listeners for real-time user feedback.

**💡 Viva Examination Tips for IT Students:**
- **Q: Why avoid external frameworks like React or Tailwind?**  
  *Answer:* Pure Vanilla JavaScript and standard CSS prove mastery of core browser APIs, load instantly with zero bundle overhead, and run natively in any web browser without build tooling.
- **Q: How does validation / interactivity execute?**  
  *Answer:* Event listeners intercept user inputs, validate data against required criteria, and dynamically update DOM elements without full page reloads.`,
                hasDesign: true,
                design: design
              };
            }

            if (result.design) {
              result.design.id = 'ai-' + Date.now();
              result.design.author = 'AI Mentor (Gemini)';
              result.design.createdAt = new Date().toISOString();
              result.design.favouritesCount = 2;
              result.design.downloadsCount = 1;
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, ...result }));
          } catch (err) {
            console.error('Error in /api/ai-chat:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });
    }
  };
}

export default defineConfig({
  plugins: [aiPlugin()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        register: resolve(__dirname, 'register.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
});
