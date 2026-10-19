/* ==========================================================================
   InspireUI - UI Inspiration & Code Library
   Pure JavaScript Implementation (Student TY IT Project Standard)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. DATA STORE (Initial Components & Default Users)
// --------------------------------------------------------------------------
const INITIAL_COMPONENTS = [
  {
    "id": "design-login-clean",
    "name": "Clean Professional Login Page UI",
    "description": "Clean and professional centered login page with InspireUI branding, password show/hide button, remember me checkbox, and client-side validation.",
    "category": "Login",
    "tags": [
      "Login",
      "Authentication",
      "Forms",
      "Clean",
      "Zero Dependencies"
    ],
    "style": "Modern Dark",
    "colorTheme": "Blue",
    "responsiveInfo": "Fully responsive centered card (Mobile 360px to Desktop)",
    "author": "Suraj",
    "featured": true,
    "published": true,
    "downloadsCount": 2680,
    "favouritesCount": 1420,
    "createdAt": "2026-03-01T10:00:00.000Z",
    "updatedAt": "2026-03-19T14:00:00.000Z",
    "html": "<div class=\"login-box\">\n  <div class=\"brand-header\">\n    <div class=\"brand-badge\">⚡</div>\n    <h2>Inspire<span>UI</span></h2>\n    <p class=\"brand-tag\">UI Inspiration & Code Library</p>\n  </div>\n  <div class=\"welcome-box\">\n    <h3>Welcome Back</h3>\n    <p>Login to continue to your InspireUI account.</p>\n  </div>\n  <div id=\"loginMsg\" class=\"login-msg\" style=\"display: none;\"></div>\n  <form id=\"authForm\" onsubmit=\"event.preventDefault(); validateLogin();\">\n    <div class=\"input-group\">\n      <label for=\"compEmail\">Email Address</label>\n      <input type=\"email\" id=\"compEmail\" placeholder=\"Enter your email\" />\n    </div>\n    <div class=\"input-group\">\n      <div class=\"label-split\">\n        <label for=\"compPassword\">Password</label>\n        <a href=\"#\" class=\"forgot-txt\" onclick=\"alert('Password reset link sent to your email.'); return false;\">Forgot Password?</a>\n      </div>\n      <div class=\"pwd-field\">\n        <input type=\"password\" id=\"compPassword\" placeholder=\"Enter your password\" />\n        <button type=\"button\" class=\"pwd-toggle\" id=\"toggleCompPwd\" onclick=\"toggleCompPassword()\">👁️ Show</button>\n      </div>\n    </div>\n    <div class=\"check-group\">\n      <input type=\"checkbox\" id=\"compRemember\" checked />\n      <label for=\"compRemember\">Remember me</label>\n    </div>\n    <button type=\"submit\" class=\"submit-btn\">Login</button>\n  </form>\n  <div class=\"card-footer\">\n    Don't have an account? <a href=\"register.html\">Register</a>\n  </div>\n</div>",
    "css": ".login-box {\n  width: 100%;\n  max-width: 420px;\n  background: #0d1527;\n  border: 1px solid #1e293b;\n  border-radius: 16px;\n  padding: 36px 30px;\n  color: #f8fafc;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);\n  font-family: 'Plus Jakarta Sans', sans-serif;\n}\n.brand-header {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.brand-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: linear-gradient(135deg, #3b82f6, #6366f1);\n  border-radius: 10px;\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n.brand-header h2 {\n  font-size: 22px;\n  font-weight: 800;\n  margin: 0;\n  letter-spacing: -0.5px;\n}\n.brand-header h2 span { color: #60a5fa; }\n.brand-tag {\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.welcome-box {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.welcome-box h3 {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.welcome-box p {\n  font-size: 13px;\n  color: #94a3b8;\n}\n.login-msg {\n  padding: 10px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.login-msg.error {\n  background: rgba(239, 68, 68, 0.15);\n  border: 1px solid rgba(239, 68, 68, 0.3);\n  color: #fca5a5;\n}\n.login-msg.success {\n  background: rgba(16, 185, 129, 0.15);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n  color: #6ee7b7;\n}\n.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.input-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #cbd5e1;\n}\n.label-split {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forgot-txt {\n  font-size: 12px;\n  color: #60a5fa;\n  text-decoration: none;\n}\n.input-group input {\n  background: #070c18;\n  border: 1px solid #1e293b;\n  border-radius: 8px;\n  padding: 11px 14px;\n  color: #fff;\n  font-size: 14px;\n  outline: none;\n  width: 100%;\n}\n.input-group input:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);\n}\n.pwd-field {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.pwd-field input {\n  padding-right: 68px;\n}\n.pwd-toggle {\n  position: absolute;\n  right: 8px;\n  background: #1e293b;\n  border: 1px solid #334155;\n  border-radius: 4px;\n  color: #cbd5e1;\n  cursor: pointer;\n  font-size: 11px;\n  padding: 4px 8px;\n}\n.check-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #94a3b8;\n  margin-bottom: 22px;\n  cursor: pointer;\n}\n.submit-btn {\n  width: 100%;\n  padding: 12px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);\n  color: white;\n  font-weight: 700;\n  font-size: 15px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.submit-btn:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);\n}\n.card-footer {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.card-footer a {\n  color: #60a5fa;\n  font-weight: 600;\n  text-decoration: none;\n}",
    "js": "function toggleCompPassword() {\n  const p = document.getElementById(\"compPassword\");\n  const b = document.getElementById(\"toggleCompPwd\");\n  if (!p) return;\n  if (p.type === \"password\") {\n    p.type = \"text\";\n    if (b) b.innerText = \"🙈 Hide\";\n  } else {\n    p.type = \"password\";\n    if (b) b.innerText = \"👁️ Show\";\n  }\n}\n\nfunction validateLogin() {\n  const email = document.getElementById(\"compEmail\").value.trim();\n  const pwd = document.getElementById(\"compPassword\").value.trim();\n  const msg = document.getElementById(\"loginMsg\");\n  if (!email) {\n    msg.className = \"login-msg error\";\n    msg.innerText = \"⚠️ Email Address cannot be empty.\";\n    msg.style.display = \"block\";\n    return;\n  }\n  if (!pwd) {\n    msg.className = \"login-msg error\";\n    msg.innerText = \"⚠️ Password cannot be empty.\";\n    msg.style.display = \"block\";\n    return;\n  }\n  msg.className = \"login-msg success\";\n  msg.innerText = \"✅ Login valid! Welcome back to InspireUI.\";\n  msg.style.display = \"block\";\n}"
  },
  {
    "id": "design-saas-dashboard-card",
    "name": "SaaS Metric Grid & Analytics Card",
    "description": "Real-time performance metric panel with KPI badges, monthly growth trajectory, and activity breakdown for developer platforms.",
    "category": "Dashboard",
    "tags": [
      "Analytics",
      "KPI",
      "Charts",
      "Enterprise"
    ],
    "style": "Enterprise B2B",
    "colorTheme": "Cyan",
    "responsiveInfo": "Fully responsive with flex wrap grid",
    "author": "Elena Rostova",
    "featured": true,
    "published": true,
    "downloadsCount": 2180,
    "favouritesCount": 1140,
    "createdAt": "2026-03-02T12:00:00.000Z",
    "updatedAt": "2026-03-12T16:00:00.000Z",
    "html": "<div class=\"metric-card\">\n  <div class=\"card-header\">\n    <div>\n      <span class=\"eyebrow\">Production Telemetry</span>\n      <h3 class=\"card-title\">API Throughput & Latency</h3>\n    </div>\n    <div class=\"period-toggle\">\n      <button class=\"toggle-btn active\">7 Days</button>\n      <button class=\"toggle-btn\">30 Days</button>\n    </div>\n  </div>\n\n  <div class=\"stats-row\">\n    <div class=\"stat-item\">\n      <span class=\"stat-label\">Total Invocations</span>\n      <span class=\"stat-value tabular-nums\">482,910</span>\n      <span class=\"stat-change positive\">+18.4% vs last week</span>\n    </div>\n    <div class=\"stat-item\">\n      <span class=\"stat-label\">p99 Latency</span>\n      <span class=\"stat-value tabular-nums\">38.2 ms</span>\n      <span class=\"stat-change positive\">-4.1 ms faster</span>\n    </div>\n    <div class=\"stat-item\">\n      <span class=\"stat-label\">Error Rate</span>\n      <span class=\"stat-value tabular-nums\">0.012%</span>\n      <span class=\"stat-change neutral\">Nominal threshold</span>\n    </div>\n  </div>\n\n  <div class=\"progress-section\">\n    <div class=\"progress-header\">\n      <span class=\"progress-title\">Regional Traffic Allocation</span>\n      <span class=\"progress-meta\">Global CDN Active</span>\n    </div>\n    <div class=\"bar-container\">\n      <div class=\"bar-segment us\" style=\"width: 52%\"></div>\n      <div class=\"bar-segment eu\" style=\"width: 32%\"></div>\n      <div class=\"bar-segment apac\" style=\"width: 16%\"></div>\n    </div>\n    <div class=\"bar-legend\">\n      <span class=\"legend-item\"><span class=\"dot us\"></span> US-East (52%)</span>\n      <span class=\"legend-item\"><span class=\"dot eu\"></span> EU-Central (32%)</span>\n      <span class=\"legend-item\"><span class=\"dot apac\"></span> APAC-South (16%)</span>\n    </div>\n  </div>\n\n  <div class=\"card-footer\">\n    <button class=\"action-btn\">Export Raw Metrics</button>\n    <a href=\"#logs\" class=\"footer-link\">Live Log Stream →</a>\n  </div>\n</div>",
    "css": ":root {\n  --page-bg: #090d16;\n  --section-bg: #0f172a;\n  --card-bg: #111827;\n  --primary-color: #0284c7;\n  --secondary-color: #0ea5e9;\n  --accent-color: #38bdf8;\n  --heading-color: #f8fafc;\n  --text-color: #cbd5e1;\n  --muted-color: #64748b;\n  --border-color: #1f2937;\n  --btn-bg: #0284c7;\n  --btn-text: #ffffff;\n  --btn-hover: #0369a1;\n  --input-bg: #0f172a;\n  --input-border: #1f2937;\n  --font-family: 'Plus Jakarta Sans', sans-serif;\n  --heading-size: 20px;\n  --body-size: 14px;\n  --font-weight: 600;\n  --line-height: 1.5;\n  --letter-spacing: 0px;\n  --text-align: left;\n  --container-padding: 24px;\n  --container-margin: 16px;\n  --container-gap: 20px;\n  --border-radius: 12px;\n  --border-width: 1px;\n  --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);\n  --opacity: 1;\n  --btn-font-size: 13px;\n  --btn-font-weight: 500;\n  --btn-padding-x: 16px;\n  --btn-padding-y: 8px;\n  --btn-radius: 6px;\n  --btn-border-width: 1px;\n}\n\n.metric-card {\n  width: 100%;\n  max-width: 580px;\n  background-color: var(--card-bg);\n  border: var(--border-width) solid var(--border-color);\n  border-radius: var(--border-radius);\n  padding: var(--container-padding);\n  box-shadow: var(--box-shadow);\n  opacity: var(--opacity);\n  display: flex;\n  flex-direction: column;\n  gap: var(--container-gap);\n}\n\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.eyebrow {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--accent-color);\n  font-weight: 600;\n}\n\n.card-title {\n  color: var(--heading-color);\n  font-size: var(--heading-size);\n  font-weight: var(--font-weight);\n  margin-top: 2px;\n}\n\n.period-toggle {\n  display: flex;\n  background-color: var(--section-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n  padding: 2px;\n}\n\n.toggle-btn {\n  background: transparent;\n  border: none;\n  color: var(--muted-color);\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n\n.toggle-btn.active {\n  background-color: var(--card-bg);\n  color: var(--heading-color);\n  font-weight: 500;\n}\n\n.stats-row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 16px;\n  padding: 16px 0;\n  border-top: 1px solid var(--border-color);\n  border-bottom: 1px solid var(--border-color);\n}\n\n.stat-item {\n  display: flex;\n  flex-direction: column;\n}\n\n.stat-label {\n  font-size: 12px;\n  color: var(--muted-color);\n  margin-bottom: 4px;\n}\n\n.stat-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--heading-color);\n  font-family: 'JetBrains Mono', monospace;\n}\n\n.stat-change {\n  font-size: 11px;\n  margin-top: 4px;\n}\n.stat-change.positive { color: #10b981; }\n.stat-change.neutral { color: var(--muted-color); }\n\n.progress-section {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.progress-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: var(--text-color);\n}\n.progress-meta { color: var(--muted-color); }\n\n.bar-container {\n  height: 8px;\n  background-color: var(--section-bg);\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n}\n\n.bar-segment.us { background-color: var(--primary-color); }\n.bar-segment.eu { background-color: #38bdf8; }\n.bar-segment.apac { background-color: #6366f1; }\n\n.bar-legend {\n  display: flex;\n  gap: 16px;\n  font-size: 11px;\n  color: var(--muted-color);\n  margin-top: 4px;\n}\n\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.dot.us { background-color: var(--primary-color); }\n.dot.eu { background-color: #38bdf8; }\n.dot.apac { background-color: #6366f1; }\n\n.card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.action-btn {\n  background-color: var(--section-bg);\n  border: 1px solid var(--border-color);\n  color: var(--text-color);\n  font-size: var(--btn-font-size);\n  font-weight: var(--btn-font-weight);\n  padding: var(--btn-padding-y) var(--btn-padding-x);\n  border-radius: var(--btn-radius);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.action-btn:hover {\n  background-color: var(--border-color);\n  color: var(--heading-color);\n}\n\n.footer-link {\n  color: var(--accent-color);\n  font-size: 12px;\n  text-decoration: none;\n  font-weight: 500;\n}\n.footer-link:hover { text-decoration: underline; }",
    "js": "// Period switch handlers\nconst buttons = document.querySelectorAll('.toggle-btn');\nbuttons.forEach(btn => {\n  btn.addEventListener('click', () => {\n    buttons.forEach(b => b.classList.remove('active'));\n    btn.classList.add('active');\n  });\n});"
  },
  {
    "id": "design-pricing-tiers",
    "name": "Modern Dark SaaS Pricing Matrix",
    "description": "Clean high-converting pricing table with featured tier spotlight, annual billing discount switch, and feature checklist.",
    "category": "Pricing",
    "tags": [
      "Pricing",
      "SaaS",
      "Monetization",
      "Clean"
    ],
    "style": "Modern Minimalist",
    "colorTheme": "Blue",
    "responsiveInfo": "Desktop 3-column / Mobile stacked",
    "author": "Marcus Chen",
    "featured": true,
    "published": true,
    "downloadsCount": 1890,
    "favouritesCount": 970,
    "createdAt": "2026-03-03T09:00:00.000Z",
    "updatedAt": "2026-03-14T11:20:00.000Z",
    "html": "<div class=\"pricing-card featured\">\n  <div class=\"popular-ribbon\">Most Popular for Teams</div>\n  <div class=\"pricing-header\">\n    <h3 class=\"plan-name\">Pro Developer</h3>\n    <p class=\"plan-desc\">For growing engineering teams requiring code playground, unlimited exports, and team libraries.</p>\n  </div>\n\n  <div class=\"price-box\">\n    <span class=\"currency\">$</span>\n    <span class=\"amount\" id=\"priceDisplay\">29</span>\n    <span class=\"cycle\">/month</span>\n  </div>\n\n  <div class=\"billing-note\">Billed annually ($348/yr) · Save 20%</div>\n\n  <button class=\"cta-button\" id=\"pricingCta\">Start 14-Day Free Trial</button>\n\n  <ul class=\"features-list\">\n    <li class=\"feature-item\">\n      <svg class=\"check-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>\n      <span>Unlimited UI Playground exports</span>\n    </li>\n    <li class=\"feature-item\">\n      <svg class=\"check-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>\n      <span>Interactive live CSS variable engine</span>\n    </li>\n    <li class=\"feature-item\">\n      <svg class=\"check-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>\n      <span>Full project versioning & rollback</span>\n    </li>\n    <li class=\"feature-item\">\n      <svg class=\"check-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>\n      <span>Clean HTML, CSS, JS and ZIP downloads</span>\n    </li>\n    <li class=\"feature-item\">\n      <svg class=\"check-icon\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg>\n      <span>Priority Discord & GitHub support</span>\n    </li>\n  </ul>\n</div>",
    "css": ":root {\n  --page-bg: #090d16;\n  --section-bg: #0f172a;\n  --card-bg: #0f172a;\n  --primary-color: #3b82f6;\n  --secondary-color: #2563eb;\n  --accent-color: #60a5fa;\n  --heading-color: #f8fafc;\n  --text-color: #cbd5e1;\n  --muted-color: #64748b;\n  --border-color: #2563eb;\n  --btn-bg: #2563eb;\n  --btn-text: #ffffff;\n  --btn-hover: #1d4ed8;\n  --input-bg: #0f172a;\n  --input-border: #334155;\n  --font-family: 'Plus Jakarta Sans', sans-serif;\n  --heading-size: 24px;\n  --body-size: 14px;\n  --font-weight: 700;\n  --line-height: 1.5;\n  --letter-spacing: 0px;\n  --text-align: left;\n  --container-padding: 32px;\n  --container-margin: 16px;\n  --container-gap: 18px;\n  --border-radius: 16px;\n  --border-width: 2px;\n  --box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.4);\n  --opacity: 1;\n  --btn-font-size: 15px;\n  --btn-font-weight: 600;\n  --btn-padding-x: 24px;\n  --btn-padding-y: 12px;\n  --btn-radius: 8px;\n  --btn-border-width: 1px;\n}\n\n.pricing-card {\n  width: 100%;\n  max-width: 380px;\n  background-color: var(--card-bg);\n  border: var(--border-width) solid var(--border-color);\n  border-radius: var(--border-radius);\n  padding: var(--container-padding);\n  box-shadow: var(--box-shadow);\n  opacity: var(--opacity);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.popular-ribbon {\n  position: absolute;\n  top: -12px;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: var(--primary-color);\n  color: #ffffff;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 12px;\n  border-radius: 999px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n.pricing-header {\n  margin-bottom: 20px;\n}\n\n.plan-name {\n  color: var(--heading-color);\n  font-size: var(--heading-size);\n  font-weight: var(--font-weight);\n  margin-bottom: 6px;\n}\n\n.plan-desc {\n  color: var(--muted-color);\n  font-size: 13px;\n  line-height: 1.4;\n}\n\n.price-box {\n  display: flex;\n  align-items: baseline;\n  gap: 4px;\n  margin-bottom: 4px;\n}\n\n.currency {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--heading-color);\n}\n\n.amount {\n  font-size: 44px;\n  font-weight: 800;\n  color: var(--heading-color);\n  font-family: 'JetBrains Mono', monospace;\n}\n\n.cycle {\n  font-size: 14px;\n  color: var(--muted-color);\n}\n\n.billing-note {\n  font-size: 12px;\n  color: var(--accent-color);\n  margin-bottom: 24px;\n  font-weight: 500;\n}\n\n.cta-button {\n  background-color: var(--btn-bg);\n  color: var(--btn-text);\n  font-size: var(--btn-font-size);\n  font-weight: var(--btn-font-weight);\n  padding: var(--btn-padding-y) var(--btn-padding-x);\n  border-radius: var(--btn-radius);\n  border: var(--btn-border-width) solid transparent;\n  cursor: pointer;\n  transition: all 0.2s;\n  width: 100%;\n  margin-bottom: 24px;\n}\n\n.cta-button:hover {\n  background-color: var(--btn-hover);\n  transform: translateY(-1px);\n}\n\n.features-list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.feature-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 13px;\n  color: var(--text-color);\n}\n\n.check-icon {\n  color: #10b981;\n  flex-shrink: 0;\n}",
    "js": "const cta = document.getElementById('pricingCta');\nif (cta) {\n  cta.addEventListener('click', () => {\n    cta.textContent = 'Redirecting to Checkout...';\n    setTimeout(() => { cta.textContent = 'Trial Activated'; }, 1000);\n  });\n}"
  },
  {
    "id": "design-hero-landing",
    "name": "High-Conversion Landing Page Hero with CTA",
    "description": "Clean developer tool hero section with command badge, headline, dual action buttons, and live tech stack indicators.",
    "category": "Hero Section",
    "tags": [
      "Hero",
      "Landing Page",
      "Call to Action",
      "Minimal"
    ],
    "style": "Modern Minimalist",
    "colorTheme": "Dark",
    "responsiveInfo": "Fully responsive mobile-to-desktop",
    "author": "Sarah Jenkins",
    "featured": true,
    "published": true,
    "downloadsCount": 3100,
    "favouritesCount": 1650,
    "createdAt": "2026-03-04T08:00:00.000Z",
    "updatedAt": "2026-03-15T09:00:00.000Z",
    "html": "<div class=\"hero-container\">\n  <div class=\"announcement-badge\">\n    <span class=\"badge-dot\"></span>\n    <span class=\"badge-text\">v2.4 Released with Live Code Synchronization</span>\n    <span class=\"badge-arrow\">→</span>\n  </div>\n\n  <h1 class=\"hero-title\">\n    Craft Production UI in Seconds, <span class=\"highlight\">Not Days</span>\n  </h1>\n\n  <p class=\"hero-lead\">\n    Discover curated modern web components, customize theme tokens visually, and export pristine semantic HTML, CSS and JavaScript directly into your codebase.\n  </p>\n\n  <div class=\"hero-actions\">\n    <button class=\"primary-btn\" id=\"heroExploreBtn\">\n      Explore UI Library\n    </button>\n    <button class=\"secondary-btn\" id=\"heroPlaygroundBtn\">\n      Launch Playground\n    </button>\n  </div>\n\n  <div class=\"trust-indicators\">\n    <span class=\"trust-label\">Zero dependencies required</span>\n    <span class=\"trust-sep\">·</span>\n    <span class=\"trust-label\">W3C Semantic Standards</span>\n    <span class=\"trust-sep\">·</span>\n    <span class=\"trust-label\">Instant ZIP Export</span>\n  </div>\n</div>",
    "css": ":root {\n  --page-bg: #090d16;\n  --section-bg: #0f172a;\n  --card-bg: #0f172a;\n  --primary-color: #2563eb;\n  --secondary-color: #1e293b;\n  --accent-color: #38bdf8;\n  --heading-color: #f8fafc;\n  --text-color: #94a3b8;\n  --muted-color: #64748b;\n  --border-color: #1e293b;\n  --btn-bg: #2563eb;\n  --btn-text: #ffffff;\n  --btn-hover: #1d4ed8;\n  --input-bg: #0f172a;\n  --input-border: #334155;\n  --font-family: 'Plus Jakarta Sans', sans-serif;\n  --heading-size: 38px;\n  --body-size: 16px;\n  --font-weight: 700;\n  --line-height: 1.3;\n  --letter-spacing: -0.5px;\n  --text-align: center;\n  --container-padding: 48px;\n  --container-margin: 16px;\n  --container-gap: 20px;\n  --border-radius: 20px;\n  --border-width: 1px;\n  --box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);\n  --opacity: 1;\n  --btn-font-size: 15px;\n  --btn-font-weight: 600;\n  --btn-padding-x: 24px;\n  --btn-padding-y: 12px;\n  --btn-radius: 8px;\n  --btn-border-width: 1px;\n}\n\n.hero-container {\n  width: 100%;\n  max-width: 720px;\n  padding: var(--container-padding);\n  text-align: var(--text-align);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--card-bg);\n  border: var(--border-width) solid var(--border-color);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  opacity: var(--opacity);\n}\n\n.announcement-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 14px;\n  border-radius: 999px;\n  background-color: #1e293b;\n  border: 1px solid #334155;\n  font-size: 12px;\n  color: #e2e8f0;\n  margin-bottom: 24px;\n  cursor: pointer;\n}\n\n.badge-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: #10b981;\n}\n\n.badge-arrow {\n  color: var(--accent-color);\n}\n\n.hero-title {\n  color: var(--heading-color);\n  font-size: var(--heading-size);\n  font-weight: var(--font-weight);\n  line-height: var(--line-height);\n  letter-spacing: var(--letter-spacing);\n  margin-bottom: 16px;\n}\n\n.highlight {\n  color: var(--accent-color);\n}\n\n.hero-lead {\n  color: var(--text-color);\n  font-size: var(--body-size);\n  line-height: 1.6;\n  max-width: 580px;\n  margin-bottom: 28px;\n}\n\n.hero-actions {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 32px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.primary-btn {\n  background-color: var(--btn-bg);\n  color: var(--btn-text);\n  font-size: var(--btn-font-size);\n  font-weight: var(--btn-font-weight);\n  padding: var(--btn-padding-y) var(--btn-padding-x);\n  border-radius: var(--btn-radius);\n  border: var(--btn-border-width) solid transparent;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.primary-btn:hover {\n  background-color: var(--btn-hover);\n  transform: translateY(-1px);\n}\n\n.secondary-btn {\n  background-color: transparent;\n  color: var(--heading-color);\n  font-size: var(--btn-font-size);\n  font-weight: var(--btn-font-weight);\n  padding: var(--btn-padding-y) var(--btn-padding-x);\n  border-radius: var(--btn-radius);\n  border: 1px solid #334155;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.secondary-btn:hover {\n  background-color: #1e293b;\n  border-color: #475569;\n}\n\n.trust-indicators {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--muted-color);\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.trust-sep {\n  opacity: 0.5;\n}",
    "js": "// Button handlers\ndocument.getElementById('heroExploreBtn')?.addEventListener('click', () => {\n  window.parent?.postMessage({ type: 'NAVIGATE', page: 'library' }, '*');\n});"
  },
  {
    "id": "design-developer-navbar",
    "name": "Sticky Developer Navbar with Command Bar",
    "description": "Header navigation bar designed for dev tools with logo wordmark, quick search prompt, documentation links, and user menu.",
    "category": "Navbar",
    "tags": [
      "Navbar",
      "Navigation",
      "Header",
      "Sticky"
    ],
    "style": "Modern Minimalist",
    "colorTheme": "Dark",
    "responsiveInfo": "Responsive with mobile drawer",
    "author": "Suraj",
    "featured": false,
    "published": true,
    "downloadsCount": 1620,
    "favouritesCount": 780,
    "createdAt": "2026-03-05T14:00:00.000Z",
    "updatedAt": "2026-03-12T10:00:00.000Z",
    "html": "<header class=\"app-navbar\">\n  <div class=\"nav-left\">\n    <div class=\"nav-brand\">\n      <div class=\"brand-badge\">⚡</div>\n      <span class=\"brand-text\">InspireUI</span>\n    </div>\n    <nav class=\"nav-links\">\n      <a href=\"#components\" class=\"nav-link active\">Components</a>\n      <a href=\"#templates\" class=\"nav-link\">Templates</a>\n      <a href=\"#docs\" class=\"nav-link\">Docs</a>\n      <a href=\"#showcase\" class=\"nav-link\">Showcase</a>\n    </nav>\n  </div>\n\n  <div class=\"nav-right\">\n    <div class=\"search-trigger\">\n      <span class=\"search-placeholder\">Quick search...</span>\n      <kbd class=\"shortcut\">⌘K</kbd>\n    </div>\n    <button class=\"nav-action-btn\">Sign In</button>\n  </div>\n</header>",
    "css": ":root {\n  --page-bg: #090d16;\n  --section-bg: #0f172a;\n  --card-bg: #0f172a;\n  --primary-color: #2563eb;\n  --secondary-color: #1e293b;\n  --accent-color: #38bdf8;\n  --heading-color: #f8fafc;\n  --text-color: #cbd5e1;\n  --muted-color: #64748b;\n  --border-color: #1e293b;\n  --btn-bg: #2563eb;\n  --btn-text: #ffffff;\n  --btn-hover: #1d4ed8;\n  --input-bg: #1e293b;\n  --input-border: #334155;\n  --font-family: 'Plus Jakarta Sans', sans-serif;\n  --heading-size: 16px;\n  --body-size: 14px;\n  --font-weight: 600;\n  --line-height: 1.5;\n  --letter-spacing: 0px;\n  --text-align: left;\n  --container-padding: 12px 24px;\n  --container-margin: 0px;\n  --container-gap: 16px;\n  --border-radius: 12px;\n  --border-width: 1px;\n  --box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);\n  --opacity: 1;\n  --btn-font-size: 13px;\n  --btn-font-weight: 500;\n  --btn-padding-x: 16px;\n  --btn-padding-y: 6px;\n  --btn-radius: 6px;\n  --btn-border-width: 1px;\n}\n\n.app-navbar {\n  width: 100%;\n  max-width: 860px;\n  background-color: var(--card-bg);\n  border: var(--border-width) solid var(--border-color);\n  border-radius: var(--border-radius);\n  padding: var(--container-padding);\n  box-shadow: var(--box-shadow);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav-left {\n  display: flex;\n  align-items: center;\n  gap: 28px;\n}\n\n.nav-brand {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.brand-badge {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  background-color: var(--primary-color);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n\n.brand-text {\n  font-size: var(--heading-size);\n  font-weight: var(--font-weight);\n  color: var(--heading-color);\n}\n\n.nav-links {\n  display: flex;\n  gap: 16px;\n}\n\n.nav-link {\n  color: var(--muted-color);\n  font-size: 13px;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.15s;\n}\n\n.nav-link:hover, .nav-link.active {\n  color: var(--heading-color);\n}\n\n.nav-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.search-trigger {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background-color: var(--input-bg);\n  border: 1px solid var(--input-border);\n  padding: 6px 12px;\n  border-radius: 6px;\n  font-size: 12px;\n  color: var(--muted-color);\n  cursor: pointer;\n}\n\n.shortcut {\n  font-size: 10px;\n  background-color: var(--card-bg);\n  border: 1px solid var(--input-border);\n  border-radius: 4px;\n  padding: 1px 4px;\n  color: var(--text-color);\n}\n\n.nav-action-btn {\n  background-color: var(--btn-bg);\n  color: var(--btn-text);\n  font-size: var(--btn-font-size);\n  font-weight: var(--btn-font-weight);\n  padding: var(--btn-padding-y) var(--btn-padding-x);\n  border-radius: var(--btn-radius);\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.nav-action-btn:hover {\n  background-color: var(--btn-hover);\n}",
    "js": "// Tab highlight\ndocument.querySelectorAll('.nav-link').forEach(link => {\n  link.addEventListener('click', (e) => {\n    e.preventDefault();\n    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));\n    link.classList.add('active');\n  });\n});"
  },
  {
    "id": "design-data-table",
    "name": "Modern Data Table with Filtering & Status",
    "description": "Enterprise data table with search, status badges, sortable columns, and pagination controls for web admin dashboards.",
    "category": "Tables",
    "tags": [
      "Table",
      "Data Grid",
      "Pagination",
      "Admin"
    ],
    "style": "Enterprise B2B",
    "colorTheme": "Dark",
    "responsiveInfo": "Horizontal scroll on mobile with fixed first column",
    "author": "Elena Rostova",
    "featured": false,
    "published": true,
    "downloadsCount": 1750,
    "favouritesCount": 820,
    "createdAt": "2026-03-06T11:00:00.000Z",
    "updatedAt": "2026-03-13T15:00:00.000Z",
    "html": "<div class=\"table-wrapper\">\n  <div class=\"table-header\">\n    <div class=\"table-title-box\">\n      <h3 class=\"table-title\">Recent Deployment Runs</h3>\n      <span class=\"table-count\">12 Total Runs</span>\n    </div>\n    <div class=\"table-filters\">\n      <input type=\"text\" placeholder=\"Filter jobs...\" class=\"table-search\" />\n    </div>\n  </div>\n\n  <table class=\"data-table\">\n    <thead>\n      <tr>\n        <th>Repository</th>\n        <th>Environment</th>\n        <th>Status</th>\n        <th>Duration</th>\n        <th>Deployed</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"font-medium\">inspire-ui-core</td>\n        <td>Production</td>\n        <td><span class=\"badge success\">Active</span></td>\n        <td class=\"tabular-nums font-mono\">1m 14s</td>\n        <td class=\"text-muted\">4 mins ago</td>\n      </tr>\n      <tr>\n        <td class=\"font-medium\">auth-service-v2</td>\n        <td>Staging</td>\n        <td><span class=\"badge success\">Active</span></td>\n        <td class=\"tabular-nums font-mono\">42s</td>\n        <td class=\"text-muted\">22 mins ago</td>\n      </tr>\n      <tr>\n        <td class=\"font-medium\">billing-gateway</td>\n        <td>Production</td>\n        <td><span class=\"badge warning\">Queued</span></td>\n        <td class=\"tabular-nums font-mono\">—</td>\n        <td class=\"text-muted\">Just now</td>\n      </tr>\n      <tr>\n        <td class=\"font-medium\">search-indexer</td>\n        <td>Worker-Cluster</td>\n        <td><span class=\"badge success\">Active</span></td>\n        <td class=\"tabular-nums font-mono\">3m 02s</td>\n        <td class=\"text-muted\">1 hour ago</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <div class=\"table-footer\">\n    <span class=\"pagination-info\">Showing 1 to 4 of 12 entries</span>\n    <div class=\"pagination-controls\">\n      <button class=\"page-btn\" disabled>Previous</button>\n      <button class=\"page-btn\">Next</button>\n    </div>\n  </div>\n</div>",
    "css": ":root {\n  --page-bg: #090d16;\n  --section-bg: #0f172a;\n  --card-bg: #0f172a;\n  --primary-color: #2563eb;\n  --secondary-color: #1e293b;\n  --accent-color: #38bdf8;\n  --heading-color: #f8fafc;\n  --text-color: #cbd5e1;\n  --muted-color: #64748b;\n  --border-color: #1e293b;\n  --btn-bg: #2563eb;\n  --btn-text: #ffffff;\n  --btn-hover: #1d4ed8;\n  --input-bg: #1e293b;\n  --input-border: #334155;\n  --font-family: 'Plus Jakarta Sans', sans-serif;\n  --heading-size: 18px;\n  --body-size: 13px;\n  --font-weight: 600;\n  --line-height: 1.5;\n  --letter-spacing: 0px;\n  --text-align: left;\n  --container-padding: 20px;\n  --container-margin: 16px;\n  --container-gap: 16px;\n  --border-radius: 12px;\n  --border-width: 1px;\n  --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);\n  --opacity: 1;\n  --btn-font-size: 12px;\n  --btn-font-weight: 500;\n  --btn-padding-x: 12px;\n  --btn-padding-y: 6px;\n  --btn-radius: 6px;\n  --btn-border-width: 1px;\n}\n\n.table-wrapper {\n  width: 100%;\n  max-width: 680px;\n  background-color: var(--card-bg);\n  border: var(--border-width) solid var(--border-color);\n  border-radius: var(--border-radius);\n  padding: var(--container-padding);\n  box-shadow: var(--box-shadow);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.table-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.table-title {\n  color: var(--heading-color);\n  font-size: var(--heading-size);\n  font-weight: var(--font-weight);\n}\n\n.table-count {\n  font-size: 12px;\n  color: var(--muted-color);\n}\n\n.table-search {\n  background-color: var(--input-bg);\n  border: 1px solid var(--input-border);\n  border-radius: var(--btn-radius);\n  padding: 6px 12px;\n  font-size: 12px;\n  color: var(--heading-color);\n  outline: none;\n}\n\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: var(--body-size);\n}\n\n.data-table th {\n  padding: 10px 12px;\n  color: var(--muted-color);\n  font-weight: 500;\n  border-bottom: 1px solid var(--border-color);\n  font-size: 12px;\n}\n\n.data-table td {\n  padding: 12px;\n  border-bottom: 1px solid #1e293b;\n  color: var(--text-color);\n}\n\n.font-medium {\n  color: var(--heading-color);\n  font-weight: 500;\n}\n\n.font-mono {\n  font-family: 'JetBrains Mono', monospace;\n}\n\n.badge {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 500;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n\n.badge.success {\n  background-color: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n}\n\n.badge.warning {\n  background-color: rgba(245, 158, 11, 0.15);\n  color: #fbbf24;\n}\n\n.text-muted {\n  color: var(--muted-color);\n}\n\n.table-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  color: var(--muted-color);\n  padding-top: 4px;\n}\n\n.pagination-controls {\n  display: flex;\n  gap: 8px;\n}\n\n.page-btn {\n  background-color: var(--section-bg);\n  border: 1px solid var(--border-color);\n  color: var(--text-color);\n  font-size: 12px;\n  padding: 4px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.page-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}",
    "js": "// Filter rows\nconst search = document.querySelector('.table-search');\nif (search) {\n  search.addEventListener('input', (e) => {\n    const val = e.target.value.toLowerCase();\n    document.querySelectorAll('.data-table tbody tr').forEach(row => {\n      row.style.display = row.innerText.toLowerCase().includes(val) ? '' : 'none';\n    });\n  });\n}"
  },
  {
    "id": "design-ecommerce-product-card",
    "name": "Modern E-commerce Product Card with Quick Action",
    "description": "Minimalist product card with rating star indicators, price tag, variant color chips, and quick cart trigger.",
    "category": "E-commerce",
    "tags": [
      "E-commerce",
      "Shopping",
      "Product Card",
      "Minimalist"
    ],
    "style": "Modern Minimalist",
    "colorTheme": "Dark",
    "responsiveInfo": "Grid item / responsive",
    "author": "Sarah Jenkins",
    "featured": false,
    "published": true,
    "downloadsCount": 1390,
    "favouritesCount": 710,
    "createdAt": "2026-03-07T15:00:00.000Z",
    "updatedAt": "2026-03-16T14:00:00.000Z",
    "html": "<div class=\"product-card\">\n  <div class=\"product-badge\">New Release</div>\n  <div class=\"image-area\">\n    <div class=\"product-mockup\">\n      <svg width=\"64\" height=\"64\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\">\n        <path d=\"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5\"></path>\n      </svg>\n    </div>\n  </div>\n\n  <div class=\"product-info\">\n    <div class=\"category-row\">\n      <span class=\"category-name\">Developer Gear</span>\n      <span class=\"rating\">★ 4.9 (128)</span>\n    </div>\n\n    <h4 class=\"product-title\">Ergonomic Key Switch Modder Pro</h4>\n    <p class=\"product-desc\">Precision aluminum casing with lubing plate and magnetic base.</p>\n\n    <div class=\"price-action-row\">\n      <div class=\"price-block\">\n        <span class=\"currency\">$</span>\n        <span class=\"price-value tabular-nums\">89.00</span>\n      </div>\n      <button class=\"add-to-cart-btn\" id=\"addToCartBtn\">\n        Add to Cart\n      </button>\n    </div>\n  </div>\n</div>",
    "css": ":root {\n  --page-bg: #090d16;\n  --section-bg: #0f172a;\n  --card-bg: #0f172a;\n  --primary-color: #2563eb;\n  --secondary-color: #1e293b;\n  --accent-color: #38bdf8;\n  --heading-color: #f8fafc;\n  --text-color: #cbd5e1;\n  --muted-color: #64748b;\n  --border-color: #1e293b;\n  --btn-bg: #2563eb;\n  --btn-text: #ffffff;\n  --btn-hover: #1d4ed8;\n  --input-bg: #0f172a;\n  --input-border: #334155;\n  --font-family: 'Plus Jakarta Sans', sans-serif;\n  --heading-size: 18px;\n  --body-size: 13px;\n  --font-weight: 600;\n  --line-height: 1.4;\n  --letter-spacing: 0px;\n  --text-align: left;\n  --container-padding: 20px;\n  --container-margin: 16px;\n  --container-gap: 16px;\n  --border-radius: 14px;\n  --border-width: 1px;\n  --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);\n  --opacity: 1;\n  --btn-font-size: 13px;\n  --btn-font-weight: 600;\n  --btn-padding-x: 16px;\n  --btn-padding-y: 10px;\n  --btn-radius: 8px;\n  --btn-border-width: 1px;\n}\n\n.product-card {\n  width: 100%;\n  max-width: 320px;\n  background-color: var(--card-bg);\n  border: var(--border-width) solid var(--border-color);\n  border-radius: var(--border-radius);\n  padding: var(--container-padding);\n  box-shadow: var(--box-shadow);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.product-badge {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  background-color: var(--primary-color);\n  color: #fff;\n  padding: 3px 8px;\n  border-radius: 4px;\n}\n\n.image-area {\n  height: 160px;\n  background-color: var(--section-bg);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 16px;\n}\n\n.product-mockup {\n  color: var(--accent-color);\n  opacity: 0.8;\n}\n\n.product-info {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.category-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n}\n\n.category-name {\n  color: var(--muted-color);\n}\n\n.rating {\n  color: #fbbf24;\n  font-size: 12px;\n}\n\n.product-title {\n  color: var(--heading-color);\n  font-size: var(--heading-size);\n  font-weight: var(--font-weight);\n}\n\n.product-desc {\n  color: var(--text-color);\n  font-size: var(--body-size);\n  line-height: var(--line-height);\n}\n\n.price-action-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid #1e293b;\n}\n\n.price-block {\n  display: flex;\n  align-items: baseline;\n  color: var(--heading-color);\n}\n\n.currency {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.price-value {\n  font-size: 20px;\n  font-weight: 700;\n  font-family: 'JetBrains Mono', monospace;\n}\n\n.add-to-cart-btn {\n  background-color: var(--btn-bg);\n  color: var(--btn-text);\n  font-size: var(--btn-font-size);\n  font-weight: var(--btn-font-weight);\n  padding: var(--btn-padding-y) var(--btn-padding-x);\n  border-radius: var(--btn-radius);\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.add-to-cart-btn:hover {\n  background-color: var(--btn-hover);\n}",
    "js": "const cartBtn = document.getElementById('addToCartBtn');\nif (cartBtn) {\n  cartBtn.addEventListener('click', () => {\n    cartBtn.textContent = 'Added to Cart ✓';\n    setTimeout(() => { cartBtn.textContent = 'Add to Cart'; }, 1500);\n  });\n}"
  },
  {
    "id": "design-bento-grid-card",
    "name": "Feature Showcase Bento Grid Card",
    "description": "High-density modular bento feature card with code snippet preview, tag line, and interactive copy feedback.",
    "category": "Cards",
    "tags": [
      "Bento Grid",
      "Showcase",
      "Cards",
      "Developer"
    ],
    "style": "Modern Minimalist",
    "colorTheme": "Purple",
    "responsiveInfo": "Responsive card",
    "author": "Marcus Chen",
    "featured": false,
    "published": true,
    "downloadsCount": 1510,
    "favouritesCount": 840,
    "createdAt": "2026-03-08T10:00:00.000Z",
    "updatedAt": "2026-03-14T09:00:00.000Z",
    "html": "<div class=\"bento-card\">\n  <div class=\"bento-badge\">Zero-Config API</div>\n  <h3 class=\"bento-title\">Instant Token Injection</h3>\n  <p class=\"bento-text\">\n    Connect your CSS variables directly to production stylesheets with real-time DOM hydration.\n  </p>\n\n  <div class=\"code-box\">\n    <div class=\"code-bar\">\n      <div class=\"dots\">\n        <span class=\"dot red\"></span>\n        <span class=\"dot yellow\"></span>\n        <span class=\"dot green\"></span>\n      </div>\n      <span class=\"file-name\">tokens.css</span>\n    </div>\n    <pre class=\"code-content\"><code>:root {\n  --primary-color: #2563eb;\n  --border-radius: 12px;\n  --font-family: 'Plus Jakarta';\n}</code></pre>\n  </div>\n\n  <div class=\"bento-footer\">\n    <span class=\"status-indicator\">● Synchronized</span>\n    <button class=\"bento-action\" id=\"bentoCopy\">Copy Token Block</button>\n  </div>\n</div>",
    "css": ":root {\n  --page-bg: #090d16;\n  --section-bg: #0f172a;\n  --card-bg: #0f172a;\n  --primary-color: #7c3aed;\n  --secondary-color: #1e293b;\n  --accent-color: #a78bfa;\n  --heading-color: #f8fafc;\n  --text-color: #cbd5e1;\n  --muted-color: #64748b;\n  --border-color: #1e293b;\n  --btn-bg: #7c3aed;\n  --btn-text: #ffffff;\n  --btn-hover: #6d28d9;\n  --input-bg: #0b1120;\n  --input-border: #334155;\n  --font-family: 'Plus Jakarta Sans', sans-serif;\n  --heading-size: 20px;\n  --body-size: 13px;\n  --font-weight: 600;\n  --line-height: 1.5;\n  --letter-spacing: 0px;\n  --text-align: left;\n  --container-padding: 24px;\n  --container-margin: 16px;\n  --container-gap: 16px;\n  --border-radius: 16px;\n  --border-width: 1px;\n  --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);\n  --opacity: 1;\n  --btn-font-size: 12px;\n  --btn-font-weight: 600;\n  --btn-padding-x: 14px;\n  --btn-padding-y: 6px;\n  --btn-radius: 6px;\n  --btn-border-width: 1px;\n}\n\n.bento-card {\n  width: 100%;\n  max-width: 440px;\n  background-color: var(--card-bg);\n  border: var(--border-width) solid var(--border-color);\n  border-radius: var(--border-radius);\n  padding: var(--container-padding);\n  box-shadow: var(--box-shadow);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.bento-badge {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--accent-color);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n\n.bento-title {\n  color: var(--heading-color);\n  font-size: var(--heading-size);\n  font-weight: var(--font-weight);\n}\n\n.bento-text {\n  color: var(--text-color);\n  font-size: var(--body-size);\n  line-height: var(--line-height);\n}\n\n.code-box {\n  background-color: var(--input-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  overflow: hidden;\n  margin: 4px 0;\n}\n\n.code-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 12px;\n  background-color: #111827;\n  border-bottom: 1px solid #1f2937;\n}\n\n.dots {\n  display: flex;\n  gap: 6px;\n}\n\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.dot.red { background-color: #ef4444; }\n.dot.yellow { background-color: #f59e0b; }\n.dot.green { background-color: #10b981; }\n\n.file-name {\n  font-size: 11px;\n  color: var(--muted-color);\n  font-family: 'JetBrains Mono', monospace;\n}\n\n.code-content {\n  padding: 12px;\n  font-family: 'JetBrains Mono', monospace;\n  font-size: 12px;\n  color: #38bdf8;\n  margin: 0;\n}\n\n.bento-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 8px;\n}\n\n.status-indicator {\n  font-size: 11px;\n  color: #10b981;\n}\n\n.bento-action {\n  background-color: var(--btn-bg);\n  color: var(--btn-text);\n  font-size: var(--btn-font-size);\n  font-weight: var(--btn-font-weight);\n  padding: var(--btn-padding-y) var(--btn-padding-x);\n  border-radius: var(--btn-radius);\n  border: none;\n  cursor: pointer;\n}\n\n.bento-action:hover {\n  background-color: var(--btn-hover);\n}",
    "js": "const copyBtn = document.getElementById('bentoCopy');\nif (copyBtn) {\n  copyBtn.addEventListener('click', () => {\n    copyBtn.textContent = 'Copied!';\n    setTimeout(() => { copyBtn.textContent = 'Copy Token Block'; }, 1500);\n  });\n}"
  },
  {
    "id": "design-clean-footer",
    "name": "Minimalist Clean Footer with Newsletter Subscription",
    "description": "Modern developer tool footer with product navigation columns, newsletter input, and copyright notice.",
    "category": "Footer",
    "tags": [
      "Footer",
      "Newsletter",
      "Links",
      "Minimalist"
    ],
    "style": "Modern Minimalist",
    "colorTheme": "Dark",
    "responsiveInfo": "Multi-column desktop / stacked mobile",
    "author": "Suraj",
    "featured": false,
    "published": true,
    "downloadsCount": 1180,
    "favouritesCount": 560,
    "createdAt": "2026-03-09T16:00:00.000Z",
    "updatedAt": "2026-03-15T12:00:00.000Z",
    "html": "<footer class=\"app-footer\">\n  <div class=\"footer-top\">\n    <div class=\"footer-brand-col\">\n      <div class=\"brand-line\">\n        <span class=\"logo-sym\">✦</span>\n        <span class=\"logo-name\">InspireUI</span>\n      </div>\n      <p class=\"brand-tagline\">\n        The curated UI library and visual customizer built for software engineers.\n      </p>\n      <div class=\"newsletter-form\">\n        <input type=\"email\" placeholder=\"Enter your email\" class=\"news-input\" />\n        <button class=\"news-btn\">Subscribe</button>\n      </div>\n    </div>\n\n    <div class=\"footer-links-grid\">\n      <div class=\"link-col\">\n        <span class=\"col-title\">Product</span>\n        <a href=\"#library\">UI Library</a>\n        <a href=\"#playground\">Playground</a>\n        <a href=\"#templates\">Templates</a>\n      </div>\n      <div class=\"link-col\">\n        <span class=\"col-title\">Resources</span>\n        <a href=\"#docs\">Documentation</a>\n        <a href=\"#changelog\">Changelog</a>\n        <a href=\"#license\">MIT License</a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"footer-bottom\">\n    <span class=\"copy-text\">© 2026 InspireUI Platform. Crafted for developer excellence.</span>\n    <div class=\"legal-links\">\n      <a href=\"#privacy\">Privacy</a>\n      <a href=\"#terms\">Terms</a>\n    </div>\n  </div>\n</footer>",
    "css": ":root {\n  --page-bg: #090d16;\n  --section-bg: #0f172a;\n  --card-bg: #0f172a;\n  --primary-color: #2563eb;\n  --secondary-color: #1e293b;\n  --accent-color: #38bdf8;\n  --heading-color: #f8fafc;\n  --text-color: #94a3b8;\n  --muted-color: #64748b;\n  --border-color: #1e293b;\n  --btn-bg: #2563eb;\n  --btn-text: #ffffff;\n  --btn-hover: #1d4ed8;\n  --input-bg: #1e293b;\n  --input-border: #334155;\n  --font-family: 'Plus Jakarta Sans', sans-serif;\n  --heading-size: 16px;\n  --body-size: 13px;\n  --font-weight: 600;\n  --line-height: 1.5;\n  --letter-spacing: 0px;\n  --text-align: left;\n  --container-padding: 32px;\n  --container-margin: 16px;\n  --container-gap: 24px;\n  --border-radius: 16px;\n  --border-width: 1px;\n  --box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);\n  --opacity: 1;\n  --btn-font-size: 12px;\n  --btn-font-weight: 500;\n  --btn-padding-x: 14px;\n  --btn-padding-y: 8px;\n  --btn-radius: 6px;\n  --btn-border-width: 1px;\n}\n\n.app-footer {\n  width: 100%;\n  max-width: 780px;\n  background-color: var(--card-bg);\n  border: var(--border-width) solid var(--border-color);\n  border-radius: var(--border-radius);\n  padding: var(--container-padding);\n  box-shadow: var(--box-shadow);\n  display: flex;\n  flex-direction: column;\n  gap: var(--container-gap);\n}\n\n.footer-top {\n  display: flex;\n  justify-content: space-between;\n  gap: 32px;\n  flex-wrap: wrap;\n}\n\n.footer-brand-col {\n  max-width: 320px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.brand-line {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.logo-sym {\n  color: var(--accent-color);\n  font-size: 18px;\n}\n\n.logo-name {\n  font-size: var(--heading-size);\n  font-weight: var(--font-weight);\n  color: var(--heading-color);\n}\n\n.brand-tagline {\n  font-size: var(--body-size);\n  color: var(--text-color);\n  line-height: 1.4;\n}\n\n.newsletter-form {\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n}\n\n.news-input {\n  background-color: var(--input-bg);\n  border: 1px solid var(--input-border);\n  border-radius: var(--btn-radius);\n  padding: 8px 12px;\n  font-size: 12px;\n  color: var(--heading-color);\n  flex: 1;\n}\n\n.news-btn {\n  background-color: var(--btn-bg);\n  color: var(--btn-text);\n  font-size: var(--btn-font-size);\n  font-weight: var(--btn-font-weight);\n  padding: var(--btn-padding-y) var(--btn-padding-x);\n  border-radius: var(--btn-radius);\n  border: none;\n  cursor: pointer;\n}\n\n.footer-links-grid {\n  display: flex;\n  gap: 48px;\n}\n\n.link-col {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.col-title {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: var(--heading-color);\n  margin-bottom: 4px;\n}\n\n.link-col a {\n  font-size: 13px;\n  color: var(--text-color);\n  text-decoration: none;\n  transition: color 0.15s;\n}\n\n.link-col a:hover {\n  color: var(--accent-color);\n}\n\n.footer-bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 16px;\n  border-top: 1px solid #1e293b;\n  font-size: 12px;\n  color: var(--muted-color);\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.legal-links {\n  display: flex;\n  gap: 16px;\n}\n\n.legal-links a {\n  color: var(--muted-color);\n  text-decoration: none;\n}\n\n.legal-links a:hover {\n  color: var(--text-color);\n}",
    "js": "// Newsletter subscription handler\nconst newsBtn = document.querySelector('.news-btn');\nif (newsBtn) {\n  newsBtn.addEventListener('click', () => {\n    newsBtn.textContent = 'Subscribed!';\n    setTimeout(() => { newsBtn.textContent = 'Subscribe'; }, 1500);\n  });\n}"
  },
  {
    "id": "design-multistep-signup",
    "name": "Interactive Multi-Step Registration",
    "description": "Three-step onboarding signup card with role selector, interactive progress bar, live validation, and floating labels.",
    "category": "Registration",
    "tags": [
      "Registration",
      "Authentication",
      "Signup",
      "Form",
      "Onboarding",
      "Modern"
    ],
    "style": "Glassmorphism",
    "colorTheme": "Blue",
    "responsiveInfo": "Responsive (Mobile 380px, Tablet 640px, Desktop 1200px)",
    "author": "Suraj",
    "featured": true,
    "published": true,
    "downloadsCount": 1940,
    "favouritesCount": 1220,
    "createdAt": "2026-03-05T09:00:00.000Z",
    "updatedAt": "2026-03-14T11:20:00.000Z",
    "html": "<div class=\"signup-card\">\n  <div class=\"signup-header\">\n    <div class=\"step-progress\">\n      <div class=\"step-pill active\" id=\"sp1\">\n        <span class=\"step-num\">1</span>\n        <span class=\"step-text\">Account</span>\n      </div>\n      <div class=\"step-divider\" id=\"sd1\"></div>\n      <div class=\"step-pill\" id=\"sp2\">\n        <span class=\"step-num\">2</span>\n        <span class=\"step-text\">Role</span>\n      </div>\n      <div class=\"step-divider\" id=\"sd2\"></div>\n      <div class=\"step-pill\" id=\"sp3\">\n        <span class=\"step-num\">3</span>\n        <span class=\"step-text\">Launch</span>\n      </div>\n    </div>\n    <h2 class=\"title\" id=\"stepHeading\">Create Developer Account</h2>\n    <p class=\"subtitle\" id=\"stepSub\">Step 1 of 3: Enter your personal credentials</p>\n  </div>\n\n  <div class=\"step-pane active\" id=\"pane1\">\n    <div class=\"form-group\">\n      <label class=\"form-label\" for=\"regName\">Full Name</label>\n      <input type=\"text\" id=\"regName\" class=\"form-input\" placeholder=\"Sarah Connor\" value=\"Sarah Connor\" />\n    </div>\n    <div class=\"form-group\">\n      <label class=\"form-label\" for=\"regEmail\">Work Email</label>\n      <input type=\"email\" id=\"regEmail\" class=\"form-input\" placeholder=\"sarah@cloudscale.io\" value=\"sarah@cloudscale.io\" />\n    </div>\n    <div class=\"form-group\">\n      <label class=\"form-label\" for=\"regPassword\">Password</label>\n      <input type=\"password\" id=\"regPassword\" class=\"form-input\" value=\"SecureP@ss2026\" />\n      <div class=\"pwd-meter\">\n        <div class=\"pwd-fill strong\"></div>\n      </div>\n      <span class=\"pwd-label\">Password strength: Strong</span>\n    </div>\n    <div class=\"button-row\">\n      <div></div>\n      <button type=\"button\" class=\"btn-primary\" id=\"btnNext1\">Continue to Role →</button>\n    </div>\n  </div>\n\n  <div class=\"step-pane\" id=\"pane2\">\n    <label class=\"form-label\">Select Your Primary Engineering Focus</label>\n    <div class=\"role-grid\">\n      <div class=\"role-card active\" data-role=\"frontend\">\n        <div class=\"role-icon\">⚡</div>\n        <div class=\"role-title\">Frontend Engineer</div>\n        <div class=\"role-sub\">React, Vue, Tailwind, Design Systems</div>\n      </div>\n      <div class=\"role-card\" data-role=\"fullstack\">\n        <div class=\"role-icon\">🛠️</div>\n        <div class=\"role-title\">Full-Stack Dev</div>\n        <div class=\"role-sub\">Node.js, PostgreSQL, REST & GraphQL</div>\n      </div>\n      <div class=\"role-card\" data-role=\"devops\">\n        <div class=\"role-icon\">☁️</div>\n        <div class=\"role-title\">Cloud / DevOps</div>\n        <div class=\"role-sub\">Docker, Kubernetes, CI/CD Pipelines</div>\n      </div>\n    </div>\n    <div class=\"button-row\">\n      <button type=\"button\" class=\"btn-secondary\" id=\"btnBack2\">← Back</button>\n      <button type=\"button\" class=\"btn-primary\" id=\"btnNext2\">Review & Finish →</button>\n    </div>\n  </div>\n\n  <div class=\"step-pane\" id=\"pane3\">\n    <div class=\"confirm-box\">\n      <div class=\"confirm-badge\">✓</div>\n      <h3 class=\"confirm-title\">Ready to launch!</h3>\n      <p class=\"confirm-desc\">We will configure your workspace with selected templates and API keys.</p>\n      <div class=\"summary-chip\">\n        <span>Account: <strong id=\"summaryEmail\">sarah@cloudscale.io</strong></span>\n        <span>Focus: <strong id=\"summaryRole\">Frontend Engineer</strong></span>\n      </div>\n    </div>\n    <div class=\"button-row\">\n      <button type=\"button\" class=\"btn-secondary\" id=\"btnBack3\">← Back</button>\n      <button type=\"button\" class=\"btn-primary\" id=\"btnFinish\">Complete Registration 🚀</button>\n    </div>\n  </div>\n</div>",
    "css": ":root {\n  --page-bg: #0b1120;\n  --section-bg: #0f172a;\n  --card-bg: #1e293b;\n  --primary-color: #3b82f6;\n  --secondary-color: #2563eb;\n  --accent-color: #60a5fa;\n  --heading-color: #f8fafc;\n  --text-color: #cbd5e1;\n  --muted-color: #64748b;\n  --border-color: #334155;\n  --btn-bg: #2563eb;\n  --btn-text: #ffffff;\n  --btn-hover: #1d4ed8;\n  --input-bg: #0f172a;\n  --input-border: #334155;\n  --font-family: 'Plus Jakarta Sans', sans-serif;\n  --heading-size: 24px;\n  --body-size: 14px;\n  --font-weight: 600;\n  --border-radius: 16px;\n  --container-padding: 32px;\n}\n\n.signup-card {\n  width: 100%;\n  max-width: 480px;\n  background-color: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: var(--border-radius);\n  padding: var(--container-padding);\n  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5);\n  backdrop-filter: blur(12px);\n  color: var(--text-color);\n  font-family: var(--font-family);\n}\n\n.step-progress {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n\n.step-pill {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--muted-color);\n}\n\n.step-pill.active {\n  color: var(--heading-color);\n  font-weight: 600;\n}\n\n.step-num {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: var(--input-bg);\n  border: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n}\n\n.step-pill.active .step-num {\n  background: var(--primary-color);\n  color: #fff;\n  border-color: var(--primary-color);\n}\n\n.step-divider {\n  flex: 1;\n  height: 2px;\n  background: var(--border-color);\n  margin: 0 8px;\n}\n\n.step-divider.active {\n  background: var(--primary-color);\n}\n\n.title {\n  color: var(--heading-color);\n  font-size: var(--heading-size);\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n\n.subtitle {\n  color: var(--muted-color);\n  font-size: var(--body-size);\n  margin-bottom: 20px;\n}\n\n.step-pane {\n  display: none;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.step-pane.active {\n  display: flex;\n}\n\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.form-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-color);\n}\n\n.form-input {\n  background: var(--input-bg);\n  border: 1px solid var(--input-border);\n  border-radius: 8px;\n  padding: 10px 14px;\n  color: var(--heading-color);\n  font-size: 14px;\n  outline: none;\n  transition: all 0.2s;\n}\n\n.form-input:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);\n}\n\n.pwd-meter {\n  height: 4px;\n  background: var(--border-color);\n  border-radius: 2px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n\n.pwd-fill.strong {\n  width: 90%;\n  height: 100%;\n  background: #10b981;\n}\n\n.pwd-label {\n  font-size: 11px;\n  color: #10b981;\n}\n\n.role-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px;\n}\n\n.role-card {\n  padding: 12px 14px;\n  background: var(--input-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.role-card:hover {\n  border-color: var(--accent-color);\n}\n\n.role-card.active {\n  border-color: var(--primary-color);\n  background: rgba(37, 99, 235, 0.1);\n}\n\n.role-icon {\n  font-size: 18px;\n  margin-bottom: 4px;\n}\n\n.role-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--heading-color);\n}\n\n.role-sub {\n  font-size: 12px;\n  color: var(--muted-color);\n}\n\n.confirm-box {\n  text-align: center;\n  padding: 20px 12px;\n  background: var(--input-bg);\n  border-radius: 12px;\n  border: 1px solid var(--border-color);\n}\n\n.confirm-badge {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: rgba(16, 185, 129, 0.15);\n  color: #10b981;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  margin: 0 auto 12px auto;\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n\n.confirm-title {\n  color: var(--heading-color);\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n\n.confirm-desc {\n  font-size: 13px;\n  color: var(--muted-color);\n  margin-bottom: 14px;\n}\n\n.summary-chip {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-color);\n  background: var(--card-bg);\n  padding: 10px;\n  border-radius: 8px;\n  border: 1px solid var(--border-color);\n}\n\n.button-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 12px;\n}\n\n.btn-primary {\n  background: var(--btn-bg);\n  color: var(--btn-text);\n  padding: 10px 18px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.btn-primary:hover {\n  background: var(--btn-hover);\n  transform: translateY(-1px);\n}\n\n.btn-secondary {\n  background: transparent;\n  color: var(--muted-color);\n  border: 1px solid var(--border-color);\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.btn-secondary:hover {\n  color: var(--heading-color);\n  border-color: var(--text-color);\n}",
    "js": "// Multi-step tab navigation\nlet currentStep = 1;\nconst btnNext1 = document.getElementById('btnNext1');\nconst btnNext2 = document.getElementById('btnNext2');\nconst btnBack2 = document.getElementById('btnBack2');\nconst btnBack3 = document.getElementById('btnBack3');\nconst btnFinish = document.getElementById('btnFinish');\n\nfunction setStep(step) {\n  currentStep = step;\n  ['1', '2', '3'].forEach(s => {\n    const pane = document.getElementById('pane' + s);\n    const pill = document.getElementById('sp' + s);\n    if (pane) pane.classList.toggle('active', s === String(step));\n    if (pill) pill.classList.toggle('active', Number(s) <= step);\n  });\n  const sd1 = document.getElementById('sd1');\n  const sd2 = document.getElementById('sd2');\n  if (sd1) sd1.classList.toggle('active', step >= 2);\n  if (sd2) sd2.classList.toggle('active', step >= 3);\n\n  const head = document.getElementById('stepHeading');\n  const sub = document.getElementById('stepSub');\n  if (step === 1) {\n    if (head) head.textContent = 'Create Developer Account';\n    if (sub) sub.textContent = 'Step 1 of 3: Enter your personal credentials';\n  } else if (step === 2) {\n    if (head) head.textContent = 'Select Engineering Role';\n    if (sub) sub.textContent = 'Step 2 of 3: Tailor templates to your stack';\n  } else {\n    if (head) head.textContent = 'Confirm Workspace';\n    if (sub) sub.textContent = 'Step 3 of 3: Ready to initialize environment';\n  }\n}\n\nif (btnNext1) btnNext1.addEventListener('click', () => setStep(2));\nif (btnNext2) btnNext2.addEventListener('click', () => setStep(3));\nif (btnBack2) btnBack2.addEventListener('click', () => setStep(1));\nif (btnBack3) btnBack3.addEventListener('click', () => setStep(2));\n\n// Role card selection\nconst roleCards = document.querySelectorAll('.role-card');\nroleCards.forEach(c => {\n  c.addEventListener('click', () => {\n    roleCards.forEach(r => r.classList.remove('active'));\n    c.classList.add('active');\n    const title = c.querySelector('.role-title')?.textContent;\n    const sumRole = document.getElementById('summaryRole');\n    if (sumRole && title) sumRole.textContent = title;\n  });\n});\n\nif (btnFinish) {\n  btnFinish.addEventListener('click', () => {\n    btnFinish.textContent = 'Creating Workspace...';\n    setTimeout(() => {\n      btnFinish.textContent = 'Registration Complete! 🎉';\n    }, 1000);\n  });\n}"
  },
  {
    "id": "design-dev-profile-card",
    "name": "Developer Showcase & Stats Profile",
    "description": "Polished developer profile card with online status pill, activity streak metrics, tech stack tags, and social connect actions.",
    "category": "Profile",
    "tags": [
      "Profile",
      "Cards",
      "Portfolio",
      "Developer",
      "Stats",
      "Social"
    ],
    "style": "Modern Minimalist",
    "colorTheme": "Emerald",
    "responsiveInfo": "Responsive (Mobile 360px, Desktop 100%)",
    "author": "Suraj",
    "featured": true,
    "published": true,
    "downloadsCount": 1820,
    "favouritesCount": 960,
    "createdAt": "2026-03-06T10:00:00.000Z",
    "updatedAt": "2026-03-15T09:10:00.000Z",
    "html": "<div class=\"profile-card\">\n  <div class=\"profile-banner\">\n    <div class=\"status-badge\">\n      <span class=\"status-dot\"></span>\n      <span>Available for Hire</span>\n    </div>\n  </div>\n  <div class=\"profile-content\">\n    <div class=\"avatar-wrap\">\n      <img src=\"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80\" alt=\"Avatar\" class=\"avatar-img\" />\n      <span class=\"verified-icon\">✓</span>\n    </div>\n    <div class=\"name-section\">\n      <div class=\"name-row\">\n        <h2 class=\"profile-name\">Alex Rivera</h2>\n        <span class=\"handle\">@alexrivera</span>\n      </div>\n      <p class=\"profile-bio\">Staff Systems Engineer & Open-Source Creator. Building high-throughput cloud architectures and resilient reactive UI libraries.</p>\n    </div>\n\n    <div class=\"stats-row\">\n      <div class=\"stat-item\">\n        <span class=\"stat-val\">3.4k</span>\n        <span class=\"stat-lbl\">Stars</span>\n      </div>\n      <div class=\"stat-item\">\n        <span class=\"stat-val\">128</span>\n        <span class=\"stat-lbl\">Repos</span>\n      </div>\n      <div class=\"stat-item\">\n        <span class=\"stat-val\">99.9%</span>\n        <span class=\"stat-lbl\">Uptime</span>\n      </div>\n      <div class=\"stat-item\">\n        <span class=\"stat-val\">420</span>\n        <span class=\"stat-lbl\">Streak</span>\n      </div>\n    </div>\n\n    <div class=\"skills-section\">\n      <div class=\"section-title\">Core Stack</div>\n      <div class=\"tags-cloud\">\n        <span class=\"tech-tag highlight\">TypeScript</span>\n        <span class=\"tech-tag\">React 19</span>\n        <span class=\"tech-tag\">Rust</span>\n        <span class=\"tech-tag\">Next.js</span>\n        <span class=\"tech-tag\">PostgreSQL</span>\n        <span class=\"tech-tag\">Tailwind CSS</span>\n      </div>\n    </div>\n\n    <div class=\"profile-actions\">\n      <button type=\"button\" class=\"btn-follow\" id=\"followBtn\">Follow +</button>\n      <button type=\"button\" class=\"btn-message\" id=\"messageBtn\">\n        <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n          <path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>\n        </svg>\n        Message\n      </button>\n    </div>\n  </div>\n</div>",
    "css": ":root {\n  --page-bg: #090d16;\n  --card-bg: #0f172a;\n  --primary-color: #10b981;\n  --heading-color: #f8fafc;\n  --text-color: #94a3b8;\n  --border-color: #1e293b;\n  --btn-bg: #10b981;\n  --btn-text: #ffffff;\n}\n\n.profile-card {\n  width: 100%;\n  max-width: 440px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 20px 30px -10px rgba(0,0,0,0.6);\n  font-family: 'Plus Jakarta Sans', sans-serif;\n}\n\n.profile-banner {\n  height: 90px;\n  background: linear-gradient(135deg, #064e3b 0%, #022c22 100%);\n  position: relative;\n  padding: 12px 16px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(16, 185, 129, 0.4);\n  color: #34d399;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 999px;\n  height: 24px;\n}\n\n.status-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #10b981;\n  box-shadow: 0 0 8px #10b981;\n}\n\n.profile-content {\n  padding: 0 24px 24px 24px;\n  position: relative;\n}\n\n.avatar-wrap {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  border: 4px solid var(--card-bg);\n  margin-top: -36px;\n  position: relative;\n  background: #1e293b;\n}\n\n.avatar-img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.verified-icon {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: #10b981;\n  color: white;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  border: 2px solid var(--card-bg);\n}\n\n.name-section {\n  margin-top: 12px;\n}\n\n.name-row {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n\n.profile-name {\n  color: var(--heading-color);\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.handle {\n  color: #64748b;\n  font-size: 13px;\n}\n\n.profile-bio {\n  color: var(--text-color);\n  font-size: 13px;\n  line-height: 1.5;\n  margin-top: 6px;\n}\n\n.stats-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  background: #090d16;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 12px 8px;\n  margin: 16px 0;\n  text-align: center;\n}\n\n.stat-item {\n  display: flex;\n  flex-direction: column;\n}\n\n.stat-val {\n  color: var(--heading-color);\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.stat-lbl {\n  color: #64748b;\n  font-size: 10px;\n  text-transform: uppercase;\n  margin-top: 2px;\n}\n\n.skills-section {\n  margin-bottom: 20px;\n}\n\n.section-title {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n\n.tags-cloud {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.tech-tag {\n  background: #1e293b;\n  color: #94a3b8;\n  font-size: 11px;\n  padding: 4px 10px;\n  border-radius: 6px;\n  border: 1px solid #334155;\n}\n\n.tech-tag.highlight {\n  background: rgba(16, 185, 129, 0.15);\n  color: #34d399;\n  border-color: rgba(16, 185, 129, 0.3);\n}\n\n.profile-actions {\n  display: flex;\n  gap: 10px;\n}\n\n.btn-follow {\n  flex: 1;\n  background: var(--btn-bg);\n  color: var(--btn-text);\n  border: none;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.btn-follow:hover {\n  background: #059669;\n}\n\n.btn-message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  background: transparent;\n  color: var(--heading-color);\n  border: 1px solid var(--border-color);\n  padding: 10px 18px;\n  border-radius: 10px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.btn-message:hover {\n  background: #1e293b;\n}",
    "js": "// Follow button toggle\nconst followBtn = document.getElementById('followBtn');\nif (followBtn) {\n  let following = false;\n  followBtn.addEventListener('click', () => {\n    following = !following;\n    followBtn.textContent = following ? 'Following ✓' : 'Follow +';\n    followBtn.style.background = following ? '#065f46' : '#10b981';\n  });\n}"
  },
  {
    "id": "design-interactive-feedback-form",
    "name": "Interactive Feedback & Review Form",
    "description": "User feedback modal with dynamic 5-star rating, sentiment emoji selectors, category dropdown, character count, and submit animation.",
    "category": "Forms",
    "tags": [
      "Forms",
      "Cards",
      "Feedback",
      "Support",
      "Rating",
      "Input"
    ],
    "style": "Enterprise Clean",
    "colorTheme": "Violet",
    "responsiveInfo": "Responsive modal/card format",
    "author": "Suraj",
    "featured": true,
    "published": true,
    "downloadsCount": 1650,
    "favouritesCount": 880,
    "createdAt": "2026-03-07T11:00:00.000Z",
    "updatedAt": "2026-03-16T15:00:00.000Z",
    "html": "<div class=\"feedback-card\">\n  <div class=\"feedback-header\">\n    <div class=\"badge-icon\">💬</div>\n    <div>\n      <h3 class=\"title\">Share Your Experience</h3>\n      <p class=\"subtitle\">Help our engineering team improve the UI design ecosystem</p>\n    </div>\n  </div>\n\n  <div class=\"rating-section\">\n    <label class=\"form-label\">How would you rate this release?</label>\n    <div class=\"star-rating\" id=\"starContainer\">\n      <button type=\"button\" class=\"star-btn active\" data-rating=\"1\">★</button>\n      <button type=\"button\" class=\"star-btn active\" data-rating=\"2\">★</button>\n      <button type=\"button\" class=\"star-btn active\" data-rating=\"3\">★</button>\n      <button type=\"button\" class=\"star-btn active\" data-rating=\"4\">★</button>\n      <button type=\"button\" class=\"star-btn active\" data-rating=\"5\">★</button>\n      <span class=\"rating-label\" id=\"ratingText\">5.0 - Exceptional!</span>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"form-label\">Feedback Category</label>\n    <div class=\"chip-group\">\n      <button type=\"button\" class=\"topic-chip active\">✨ Feature Request</button>\n      <button type=\"button\" class=\"topic-chip\">🎨 UI/UX Design</button>\n      <button type=\"button\" class=\"topic-chip\">⚡ Performance</button>\n      <button type=\"button\" class=\"topic-chip\">🐞 Bug Report</button>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <div class=\"label-row\">\n      <label class=\"form-label\" for=\"feedComment\">Detailed Thoughts</label>\n      <span class=\"char-count\" id=\"charCount\">0/240</span>\n    </div>\n    <textarea id=\"feedComment\" class=\"form-textarea\" placeholder=\"What stood out to you? Any improvements or animations you'd like to see added?\" maxlength=\"240\"></textarea>\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"checkbox-label\">\n      <input type=\"checkbox\" checked />\n      <span>Allow our engineering team to follow up via email</span>\n    </label>\n  </div>\n\n  <button type=\"button\" class=\"btn-submit\" id=\"feedSubmitBtn\">\n    Send Feedback 🚀\n  </button>\n</div>",
    "css": ":root {\n  --card-bg: #131127;\n  --primary-color: #8b5cf6;\n  --heading-color: #f8fafc;\n  --text-color: #cbd5e1;\n  --border-color: #2e2852;\n  --btn-bg: #8b5cf6;\n  --btn-text: #ffffff;\n  --btn-hover: #7c3aed;\n  --input-bg: #0b091a;\n}\n\n.feedback-card {\n  width: 100%;\n  max-width: 460px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 18px;\n  padding: 28px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  color: var(--text-color);\n}\n\n.feedback-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 22px;\n}\n\n.badge-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: rgba(139, 92, 246, 0.15);\n  border: 1px solid rgba(139, 92, 246, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  shrink: 0;\n}\n\n.title {\n  color: var(--heading-color);\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.subtitle {\n  color: #8580a6;\n  font-size: 12px;\n  margin-top: 2px;\n}\n\n.form-group, .rating-section {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 18px;\n}\n\n.form-label {\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #a5a0c8;\n}\n\n.star-rating {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.star-btn {\n  background: transparent;\n  border: none;\n  font-size: 24px;\n  color: #3b3558;\n  cursor: pointer;\n  transition: color 0.15s, transform 0.15s;\n  padding: 0;\n}\n\n.star-btn.active {\n  color: #fbbf24;\n}\n\n.star-btn:hover {\n  transform: scale(1.15);\n}\n\n.rating-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #fbbf24;\n  margin-left: 8px;\n}\n\n.chip-group {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.topic-chip {\n  background: var(--input-bg);\n  border: 1px solid var(--border-color);\n  color: #a5a0c8;\n  font-size: 12px;\n  padding: 6px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.topic-chip.active {\n  background: rgba(139, 92, 246, 0.2);\n  border-color: var(--primary-color);\n  color: #fff;\n  font-weight: 600;\n}\n\n.label-row {\n  display: flex;\n  justify-content: space-between;\n}\n\n.char-count {\n  font-size: 11px;\n  color: #6d6692;\n}\n\n.form-textarea {\n  background: var(--input-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 10px;\n  padding: 12px;\n  color: var(--heading-color);\n  font-size: 13px;\n  resize: vertical;\n  min-height: 80px;\n  outline: none;\n  transition: border-color 0.2s;\n}\n\n.form-textarea:focus {\n  border-color: var(--primary-color);\n}\n\n.checkbox-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #a5a0c8;\n  cursor: pointer;\n}\n\n.btn-submit {\n  width: 100%;\n  background: var(--btn-bg);\n  color: var(--btn-text);\n  border: none;\n  padding: 12px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.btn-submit:hover {\n  background: var(--btn-hover);\n  transform: translateY(-1px);\n}",
    "js": "// Star rating interact\nconst stars = document.querySelectorAll('.star-btn');\nconst rateLabel = document.getElementById('ratingText');\nconst descriptions = ['1.0 - Poor', '2.0 - Fair', '3.0 - Good', '4.0 - Very Good', '5.0 - Exceptional!'];\n\nstars.forEach((s, idx) => {\n  s.addEventListener('click', () => {\n    stars.forEach((st, i) => st.classList.toggle('active', i <= idx));\n    if (rateLabel) rateLabel.textContent = descriptions[idx];\n  });\n});\n\n// Topic chips\nconst chips = document.querySelectorAll('.topic-chip');\nchips.forEach(c => {\n  c.addEventListener('click', () => {\n    chips.forEach(x => x.classList.remove('active'));\n    c.classList.add('active');\n  });\n});\n\n// Textarea counter\nconst area = document.getElementById('feedComment');\nconst countEl = document.getElementById('charCount');\nif (area && countEl) {\n  area.addEventListener('input', () => {\n    countEl.textContent = area.value.length + '/240';\n  });\n}\n\n// Submit button\nconst submit = document.getElementById('feedSubmitBtn');\nif (submit) {\n  submit.addEventListener('click', () => {\n    submit.textContent = 'Feedback Transmitted! Thank you ✨';\n    setTimeout(() => { submit.textContent = 'Send Feedback 🚀'; }, 2000);\n  });\n}"
  },
  {
    "id": "design-2fa-security-auth",
    "name": "Two-Factor (2FA) Security Verification",
    "description": "High-security 6-digit OTP verification card with auto-tabbing digits, live countdown timer, and biometric authenticator fallback.",
    "category": "Authentication",
    "tags": [
      "Authentication",
      "Security",
      "2FA",
      "Login",
      "Verification",
      "Modal"
    ],
    "style": "Developer Tech",
    "colorTheme": "Blue",
    "responsiveInfo": "Responsive (Mobile 360px, Desktop 100%)",
    "author": "Suraj",
    "featured": true,
    "published": true,
    "downloadsCount": 1510,
    "favouritesCount": 910,
    "createdAt": "2026-03-08T14:00:00.000Z",
    "updatedAt": "2026-03-17T12:00:00.000Z",
    "html": "<div class=\"otp-card\">\n  <div class=\"shield-badge\">\n    <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path>\n    </svg>\n  </div>\n  <h2 class=\"title\">Two-Factor Authentication</h2>\n  <p class=\"subtitle\">Enter the 6-digit security code generated by your Authenticator app for <strong>usr_admin_01</strong></p>\n\n  <div class=\"code-inputs\">\n    <input type=\"text\" maxlength=\"1\" class=\"digit-box\" value=\"4\" autofocus />\n    <input type=\"text\" maxlength=\"1\" class=\"digit-box\" value=\"8\" />\n    <input type=\"text\" maxlength=\"1\" class=\"digit-box\" value=\"2\" />\n    <input type=\"text\" maxlength=\"1\" class=\"digit-box\" placeholder=\"•\" />\n    <input type=\"text\" maxlength=\"1\" class=\"digit-box\" placeholder=\"•\" />\n    <input type=\"text\" maxlength=\"1\" class=\"digit-box\" placeholder=\"•\" />\n  </div>\n\n  <div class=\"timer-row\">\n    <span class=\"timer-text\">Code expires in <strong id=\"timerSec\">0:45</strong></span>\n    <button type=\"button\" class=\"resend-link\" id=\"resendBtn\">Resend Code</button>\n  </div>\n\n  <button type=\"button\" class=\"btn-verify\" id=\"btnVerifyOTP\">Verify Identity</button>\n\n  <div class=\"divider\"><span>OR ALTERNATE METHOD</span></div>\n\n  <button type=\"button\" class=\"btn-biometric\">\n    <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n      <path d=\"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11m0 0a8 8 0 00.99 3.868\"></path>\n    </svg>\n    Use Passkey or Biometric Key\n  </button>\n</div>",
    "css": ":root {\n  --card-bg: #0b1120;\n  --primary-color: #3b82f6;\n  --heading-color: #f8fafc;\n  --text-color: #cbd5e1;\n  --border-color: #1e293b;\n  --btn-bg: #3b82f6;\n  --btn-text: #ffffff;\n  --input-bg: #1e293b;\n}\n\n.otp-card {\n  width: 100%;\n  max-width: 440px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 18px;\n  padding: 32px 24px;\n  text-align: center;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  color: var(--text-color);\n}\n\n.shield-badge {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background: rgba(59, 130, 246, 0.15);\n  border: 1px solid rgba(59, 130, 246, 0.3);\n  color: #60a5fa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 16px auto;\n}\n\n.title {\n  color: var(--heading-color);\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n\n.subtitle {\n  color: #64748b;\n  font-size: 13px;\n  line-height: 1.5;\n  margin-bottom: 24px;\n}\n\n.subtitle strong {\n  color: #94a3b8;\n}\n\n.code-inputs {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  margin-bottom: 18px;\n}\n\n.digit-box {\n  width: 46px;\n  height: 54px;\n  border-radius: 10px;\n  background: var(--input-bg);\n  border: 1px solid var(--border-color);\n  color: #fff;\n  font-size: 22px;\n  font-weight: 700;\n  text-align: center;\n  outline: none;\n  transition: all 0.2s;\n  font-family: monospace;\n}\n\n.digit-box:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);\n  background: #0f172a;\n}\n\n.timer-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  color: #64748b;\n  margin-bottom: 20px;\n  padding: 0 4px;\n}\n\n.resend-link {\n  background: none;\n  border: none;\n  color: #60a5fa;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.resend-link:hover {\n  text-decoration: underline;\n}\n\n.btn-verify {\n  width: 100%;\n  background: var(--btn-bg);\n  color: var(--btn-text);\n  border: none;\n  padding: 12px;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.btn-verify:hover {\n  background: #2563eb;\n}\n\n.divider {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin: 20px 0 16px 0;\n}\n\n.divider::before, .divider::after {\n  content: '';\n  flex: 1;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.divider span {\n  padding: 0 10px;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  color: #475569;\n}\n\n.btn-biometric {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: transparent;\n  border: 1px solid var(--border-color);\n  color: #94a3b8;\n  padding: 10px;\n  border-radius: 10px;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.btn-biometric:hover {\n  background: #1e293b;\n  color: #fff;\n}",
    "js": "// Auto focus next digit\nconst inputs = document.querySelectorAll('.digit-box');\ninputs.forEach((input, index) => {\n  input.addEventListener('keyup', (e) => {\n    if (e.key >= '0' && e.key <= '9') {\n      if (index < inputs.length - 1) inputs[index + 1].focus();\n    } else if (e.key === 'Backspace') {\n      if (index > 0) inputs[index - 1].focus();\n    }\n  });\n});\n\nconst verifyBtn = document.getElementById('btnVerifyOTP');\nif (verifyBtn) {\n  verifyBtn.addEventListener('click', () => {\n    verifyBtn.textContent = 'Verifying Session...';\n    setTimeout(() => {\n      verifyBtn.textContent = 'Authorized! Redirecting... 🚀';\n    }, 700);\n  });\n}"
  },
  {
    "id": "design-kpi-analytics-dashboard",
    "name": "SaaS Metric & Real-time KPI Card",
    "description": "Real-time revenue & churn metric summary widget with sparkline SVG charts, percentage delta pills, and timeframe selector.",
    "category": "Dashboard",
    "tags": [
      "Dashboard",
      "Analytics",
      "KPI",
      "Metrics",
      "Cards",
      "Tables"
    ],
    "style": "Modern Minimalist",
    "colorTheme": "Cyan",
    "responsiveInfo": "Responsive (Mobile 360px, Desktop 100%)",
    "author": "Suraj",
    "featured": true,
    "published": true,
    "downloadsCount": 2420,
    "favouritesCount": 1380,
    "createdAt": "2026-03-09T08:00:00.000Z",
    "updatedAt": "2026-03-18T10:00:00.000Z",
    "html": "<div class=\"kpi-widget\">\n  <div class=\"kpi-header\">\n    <div>\n      <span class=\"kpi-tag\">Monthly Recurring Revenue</span>\n      <div class=\"val-row\">\n        <h2 class=\"kpi-value\">$84,320</h2>\n        <span class=\"delta-pill positive\">+18.4%</span>\n      </div>\n    </div>\n    <div class=\"period-toggle\">\n      <button type=\"button\" class=\"tab-btn active\">30D</button>\n      <button type=\"button\" class=\"tab-btn\">90D</button>\n      <button type=\"button\" class=\"tab-btn\">1Y</button>\n    </div>\n  </div>\n\n  <div class=\"chart-container\">\n    <svg viewBox=\"0 0 360 80\" class=\"sparkline-svg\">\n      <defs>\n        <linearGradient id=\"cyanGlow\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.4\"></stop>\n          <stop offset=\"100%\" stop-color=\"#06b6d4\" stop-opacity=\"0.0\"></stop>\n        </linearGradient>\n      </defs>\n      <path d=\"M0,65 Q40,60 80,45 T160,50 T240,25 T320,15 T360,5 L360,80 L0,80 Z\" fill=\"url(#cyanGlow)\"></path>\n      <path d=\"M0,65 Q40,60 80,45 T160,50 T240,25 T320,15 T360,5\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"3\" stroke-linecap=\"round\"></path>\n      <circle cx=\"360\" cy=\"5\" r=\"4\" fill=\"#06b6d4\"></circle>\n    </svg>\n  </div>\n\n  <div class=\"sub-metrics\">\n    <div class=\"metric-col\">\n      <span class=\"sub-lbl\">Active Subscribers</span>\n      <span class=\"sub-val\">3,892</span>\n      <span class=\"sub-delta text-emerald\">+240 this wk</span>\n    </div>\n    <div class=\"metric-divider\"></div>\n    <div class=\"metric-col\">\n      <span class=\"sub-lbl\">Gross Margin</span>\n      <span class=\"sub-val\">84.2%</span>\n      <span class=\"sub-delta text-slate\">Industry Top 5%</span>\n    </div>\n    <div class=\"metric-divider\"></div>\n    <div class=\"metric-col\">\n      <span class=\"sub-lbl\">Net Churn</span>\n      <span class=\"sub-val\">0.42%</span>\n      <span class=\"sub-delta text-emerald\">-0.1% vs avg</span>\n    </div>\n  </div>\n</div>",
    "css": ":root {\n  --card-bg: #0b1329;\n  --primary-color: #06b6d4;\n  --heading-color: #f8fafc;\n  --text-color: #94a3b8;\n  --border-color: #1e293b;\n}\n\n.kpi-widget {\n  width: 100%;\n  max-width: 480px;\n  background: var(--card-bg);\n  border: 1px solid var(--border-color);\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  color: var(--text-color);\n}\n\n.kpi-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n\n.kpi-tag {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n  font-weight: 600;\n}\n\n.val-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 4px;\n}\n\n.kpi-value {\n  color: var(--heading-color);\n  font-size: 28px;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n\n.delta-pill {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 999px;\n}\n\n.delta-pill.positive {\n  background: rgba(6, 182, 212, 0.15);\n  color: #22d3ee;\n  border: 1px solid rgba(6, 182, 212, 0.3);\n}\n\n.period-toggle {\n  display: flex;\n  background: #060a17;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 2px;\n}\n\n.tab-btn {\n  background: transparent;\n  border: none;\n  color: #64748b;\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.tab-btn.active {\n  background: #1e293b;\n  color: #fff;\n}\n\n.chart-container {\n  height: 90px;\n  margin-bottom: 20px;\n}\n\n.sparkline-svg {\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n}\n\n.sub-metrics {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #060a17;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 12px 16px;\n}\n\n.metric-col {\n  display: flex;\n  flex-direction: column;\n}\n\n.sub-lbl {\n  font-size: 11px;\n  color: #64748b;\n}\n\n.sub-val {\n  color: var(--heading-color);\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 2px;\n}\n\n.sub-delta {\n  font-size: 10px;\n  margin-top: 2px;\n}\n\n.text-emerald { color: #10b981; }\n.text-slate { color: #64748b; }\n\n.metric-divider {\n  width: 1px;\n  height: 28px;\n  background: var(--border-color);\n}",
    "js": "// Period switcher\nconst tabBtns = document.querySelectorAll('.tab-btn');\ntabBtns.forEach(btn => {\n  btn.addEventListener('click', () => {\n    tabBtns.forEach(b => b.classList.remove('active'));\n    btn.classList.add('active');\n  });\n});"
  },
  {
    "id": "design-bento-portfolio-showcase",
    "name": "Creative Bento Portfolio Grid",
    "description": "High-impact bento showcase card featuring featured work, live project status, stack pill badges, and direct launch buttons.",
    "category": "Portfolio",
    "tags": [
      "Portfolio",
      "Landing Page",
      "Cards",
      "Bento",
      "Cyberpunk Neon",
      "Showcase"
    ],
    "style": "Cyberpunk Neon",
    "colorTheme": "Cyan",
    "responsiveInfo": "Responsive (Mobile 360px, Desktop 100%)",
    "author": "Suraj",
    "featured": true,
    "published": true,
    "downloadsCount": 2210,
    "favouritesCount": 1490,
    "createdAt": "2026-03-10T12:00:00.000Z",
    "updatedAt": "2026-03-19T14:30:00.000Z",
    "html": "<div class=\"bento-portfolio\">\n  <div class=\"bento-cell main-project\">\n    <div class=\"cell-top\">\n      <span class=\"live-indicator\"><span class=\"pulse-dot\"></span> Production V2.4</span>\n      <span class=\"badge-neon\">Featured Case Study</span>\n    </div>\n    <div class=\"project-info\">\n      <h3 class=\"cell-title\">Hyperscale Cloud Console</h3>\n      <p class=\"cell-desc\">Zero-latency distributed infrastructure orchestration dashboard with automated auto-scaling triggers.</p>\n    </div>\n    <div class=\"tech-pills\">\n      <span class=\"pill\">Next.js 15</span>\n      <span class=\"pill\">WebSockets</span>\n      <span class=\"pill\">WebGL</span>\n      <span class=\"pill\">Tailwind</span>\n    </div>\n  </div>\n\n  <div class=\"bento-row\">\n    <div class=\"bento-cell stat-cell\">\n      <span class=\"stat-number\">99.99%</span>\n      <span class=\"stat-label\">SLA Architecture</span>\n    </div>\n    <div class=\"bento-cell action-cell\">\n      <span class=\"client-title\">Live Demo</span>\n      <button type=\"button\" class=\"btn-demo\" id=\"demoLaunchBtn\">Explore Case Study ↗</button>\n    </div>\n  </div>\n</div>",
    "css": ":root {\n  --bento-bg: #090e17;\n  --cell-bg: #0f172a;\n  --accent-neon: #22d3ee;\n  --border-neon: rgba(34, 211, 238, 0.25);\n}\n\n.bento-portfolio {\n  width: 100%;\n  max-width: 480px;\n  background: var(--bento-bg);\n  border: 1px solid #1e293b;\n  border-radius: 20px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  font-family: 'Plus Jakarta Sans', sans-serif;\n}\n\n.bento-cell {\n  background: var(--cell-bg);\n  border: 1px solid #1e293b;\n  border-radius: 14px;\n  padding: 20px;\n  position: relative;\n  transition: all 0.2s;\n}\n\n.bento-cell:hover {\n  border-color: var(--border-neon);\n}\n\n.cell-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.live-indicator {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n  color: #38bdf8;\n  font-weight: 600;\n}\n\n.pulse-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #38bdf8;\n  box-shadow: 0 0 8px #38bdf8;\n}\n\n.badge-neon {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: rgba(34, 211, 238, 0.1);\n  color: #22d3ee;\n  border: 1px solid rgba(34, 211, 238, 0.3);\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n\n.cell-title {\n  color: #f8fafc;\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 6px;\n}\n\n.cell-desc {\n  color: #94a3b8;\n  font-size: 12px;\n  line-height: 1.5;\n  margin-bottom: 16px;\n}\n\n.tech-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.pill {\n  font-size: 11px;\n  background: #090e17;\n  border: 1px solid #1e293b;\n  color: #cbd5e1;\n  padding: 3px 10px;\n  border-radius: 6px;\n}\n\n.bento-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.stat-cell {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.stat-number {\n  color: #22d3ee;\n  font-size: 24px;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n}\n\n.stat-label {\n  font-size: 11px;\n  color: #64748b;\n  margin-top: 2px;\n}\n\n.action-cell {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.client-title {\n  font-size: 11px;\n  color: #64748b;\n  text-transform: uppercase;\n}\n\n.btn-demo {\n  background: #22d3ee;\n  color: #042f2e;\n  border: none;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 8px 12px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  text-align: center;\n}\n\n.btn-demo:hover {\n  background: #67e8f9;\n  transform: translateY(-1px);\n}",
    "js": "// Demo button click\nconst demoBtn = document.getElementById('demoLaunchBtn');\nif (demoBtn) {\n  demoBtn.addEventListener('click', () => {\n    demoBtn.textContent = 'Launching Demo ⚡';\n    setTimeout(() => { demoBtn.textContent = 'Explore Case Study ↗'; }, 1500);\n  });\n}"
  }
];

const DEFAULT_USERS = [
  {
    id: "usr_admin_01",
    name: "Suraj",
    email: "sc639489@gmail.com",
    role: "Admin",
    joined: "2026-01-01"
  },
  {
    id: "usr_dev_02",
    name: "Sarah Connor",
    email: "sarah@cloudscale.io",
    role: "Developer",
    joined: "2026-02-15"
  }
];

// Initialize localStorage data if empty
function initializeStorage() {
  const existingComponents = localStorage.getItem("inspireui_components");
  if (!existingComponents) {
    localStorage.setItem("inspireui_components", JSON.stringify(INITIAL_COMPONENTS));
  } else {
    try {
      const parsed = JSON.parse(existingComponents);
      if (!parsed.some(c => c.id === "design-login-clean")) {
        parsed.unshift(INITIAL_COMPONENTS[0]);
        localStorage.setItem("inspireui_components", JSON.stringify(parsed));
      }
    } catch (e) {}
  }
  if (!localStorage.getItem("inspireui_users")) {
    localStorage.setItem("inspireui_users", JSON.stringify(DEFAULT_USERS));
  }
  if (!localStorage.getItem("inspireui_favourites")) {
    localStorage.setItem("inspireui_favourites", JSON.stringify(["design-login-clean", "design-pricing-tiers"]));
  }
  if (!localStorage.getItem("inspireui_projects")) {
    const sampleProjects = [
      {
        id: "proj_01",
        name: "SaaS Marketing Portal",
        category: "Landing Page",
        description: "Modern conversion-focused page with pricing and navbar components.",
        created: "2026-03-01"
      },
      {
        id: "proj_02",
        name: "Enterprise Admin Console",
        category: "Dashboard",
        description: "Internal KPI analytics dashboard with dark theme and filterable tables.",
        created: "2026-03-12"
      }
    ];
    localStorage.setItem("inspireui_projects", JSON.stringify(sampleProjects));
  }
}

// --------------------------------------------------------------------------
// 2. THEME CONTROLLER (Dark / Light Mode)
// --------------------------------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem("inspireui_theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
  }
  updateThemeIcon();
}

function toggleTheme() {
  const isLight = document.body.classList.toggle("light-theme");
  const newTheme = isLight ? "light" : "dark";
  localStorage.setItem("inspireui_theme", newTheme);
  updateThemeIcon();
  showToast("Switched to " + newTheme + " theme", "info");
}

function updateThemeIcon() {
  const btn = document.getElementById("themeToggleBtn");
  if (!btn) return;
  const isLight = document.body.classList.contains("light-theme");
  btn.innerHTML = isLight ? "🌙" : "☀️";
  btn.title = isLight ? "Switch to Dark Mode" : "Switch to Light Mode";
}

// --------------------------------------------------------------------------
// 3. AUTHENTICATION & SESSION MANAGEMENT
// --------------------------------------------------------------------------
function getCurrentUser() {
  const raw = localStorage.getItem("inspireui_current_user");
  if (raw) {
    try { return JSON.parse(raw); } catch (e) { return null; }
  }
  const defaultUser = {
    id: "usr_admin_01",
    name: "Suraj",
    email: "sc639489@gmail.com",
    role: "Admin"
  };
  localStorage.setItem("inspireui_current_user", JSON.stringify(defaultUser));
  return defaultUser;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem("inspireui_current_user", JSON.stringify(user));
  } else {
    localStorage.removeItem("inspireui_current_user");
  }
  updateNavbarUser();
}

function logoutUser() {
  localStorage.removeItem("inspireui_current_user");
  showToast("You have been signed out", "info");
  setTimeout(function() {
    window.location.href = "login.html";
  }, 400);
}

function updateNavbarUser() {
  const userWrap = document.getElementById("navUserArea");
  const user = getCurrentUser();

  // Hide admin link for regular users/students
  const isAdmin = user && user.role === 'Admin';
  const adminLinks = document.querySelectorAll(".admin-nav-link");
  adminLinks.forEach(function(link) {
    link.style.display = isAdmin ? "flex" : "none";
  });

  if (!userWrap) return;

  if (user) {
    userWrap.innerHTML = `
      <a href="dashboard.html" class="user-badge" title="Go to Student Dashboard">
        <div class="user-avatar">${user.name.charAt(0).toUpperCase()}</div>
        <span class="user-name">${user.name}</span>
        <span class="user-role-pill">${user.role}</span>
      </a>
      <button onclick="logoutUser()" class="btn btn-secondary btn-sm" style="padding: 5px 10px;" title="Sign Out">Logout</button>
    `;
  } else {
    userWrap.innerHTML = `
      <a href="login.html" class="btn btn-secondary btn-sm">Sign In</a>
      <a href="register.html" class="btn btn-primary btn-sm">Register</a>
    `;
  }
}

// --------------------------------------------------------------------------
// 4. TOAST NOTIFICATION HELPER
// --------------------------------------------------------------------------
function showToast(message, type) {
  type = type || "info";
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast toast-" + type;
  
  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "error") icon = "⚠️";

  toast.innerHTML = "<span>" + icon + "</span><span>" + message + "</span>";
  container.appendChild(toast);

  setTimeout(function() {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(function() {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 200);
  }, 2800);
}

// --------------------------------------------------------------------------
// 5. HELPER: BUILD FULL HTML DOCUMENT FOR PREVIEWS & DOWNLOADS
// --------------------------------------------------------------------------
function buildComponentHtml(item) {
  return '<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'  <meta charset="UTF-8">\n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'  <title>' + (item.name || 'Component') + ' - InspireUI</title>\n' +
'  <link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">\n' +
'  <style>\n' +
'    * { margin: 0; padding: 0; box-sizing: border-box; }\n' +
'    html, body {\n' +
'      min-height: 100%;\n' +
'      width: 100%;\n' +
'    }\n' +
'    body {\n' +
'      font-family: \'Plus Jakarta Sans\', sans-serif;\n' +
'      background: #020617;\n' +
'      color: #f8fafc;\n' +
'      display: flex;\n' +
'      flex-direction: column;\n' +
'      align-items: center;\n' +
'      justify-content: flex-start;\n' +
'      padding: 36px 20px;\n' +
'      overflow-x: hidden;\n' +
'      overflow-y: auto;\n' +
'    }\n' +
'    ' + (item.css || '') + '\n' +
'  </style>\n' +
'</head>\n' +
'<body>\n' +
'  ' + (item.html || '') + '\n' +
'  <script>\n' +
'    ' + (item.js || '') + '\n' +
'  <\/script>\n' +
'</body>\n' +
'</html>';
}

// --------------------------------------------------------------------------
// 6. COMPONENT LIBRARY & FILTERING (index.html)
// --------------------------------------------------------------------------
function getAllComponents() {
  if (!allComponents || allComponents.length === 0) {
    try {
      const raw = localStorage.getItem("inspireui_components");
      allComponents = raw ? JSON.parse(raw) : INITIAL_COMPONENTS;
    } catch (e) {
      allComponents = INITIAL_COMPONENTS;
    }
  }
  return allComponents;
}

let allComponents = (function() {
  try {
    const raw = localStorage.getItem("inspireui_components");
    return raw ? JSON.parse(raw) : INITIAL_COMPONENTS;
  } catch (e) {
    return INITIAL_COMPONENTS;
  }
})();

let currentCategory = "All";
let currentSearch = "";
let currentSort = "popular";

function loadComponents() {
  initializeStorage();
  allComponents = getAllComponents();
  renderComponentCards();
  updateFavouriteCounterBadge();
}

function renderComponentCards() {
  const grid = document.getElementById("cardsGrid");
  if (!grid) return;

  const countElem = document.getElementById("resultsCount");
  const favList = getFavouritesList();

  // Filter by category
  let filtered = allComponents.filter(function(item) {
    if (currentCategory === "All") return true;
    return item.category.toLowerCase() === currentCategory.toLowerCase();
  });

  // Filter by search query
  if (currentSearch.trim() !== "") {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(function(item) {
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchTags = (item.tags || []).some(t => t.toLowerCase().includes(q));
      return matchName || matchDesc || matchCat || matchTags;
    });
  }

  // Sort
  if (currentSort === "popular") {
    filtered.sort((a, b) => (b.favouritesCount || 0) - (a.favouritesCount || 0));
  } else if (currentSort === "downloads") {
    filtered.sort((a, b) => (b.downloadsCount || 0) - (a.downloadsCount || 0));
  } else if (currentSort === "newest") {
    filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  if (countElem) {
    countElem.innerHTML = "Showing <span>" + filtered.length + "</span> components";
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">No components found</h3>
        <p class="empty-desc">Try clearing your search query or selecting a different category.</p>
        <button onclick="resetFilters()" class="btn btn-secondary btn-sm">Clear All Filters</button>
      </div>
    `;
    return;
  }

  let htmlBuffer = "";
  for (let i = 0; i < filtered.length; i++) {
    const item = filtered[i];
    const isFav = favList.includes(item.id);
    const tagsHtml = (item.tags || []).slice(0, 3).map(function(t) {
      return '<span class="mini-tag">' + t + '</span>';
    }).join("");

    htmlBuffer += `
      <article class="inspiration-card" id="card-${item.id}">
        <div class="card-preview-container">
          <span class="card-category-tag">${item.category}</span>
          <button 
            type="button" 
            class="card-fav-btn ${isFav ? 'active' : ''}" 
            onclick="toggleFavourite('${item.id}')"
            title="${isFav ? 'Remove from Favourites' : 'Add to Favourites'}"
          >
            ${isFav ? '❤️' : '🤍'}
          </button>
          
          <iframe 
            class="card-preview-iframe" 
            srcdoc="${escapeHtmlForSrcdoc(buildComponentHtml(item))}"
            loading="lazy"
            title="${item.name} Preview"
          ></iframe>

          <div class="card-preview-overlay" onclick="openCodeModal('${item.id}')">
            <span class="overlay-action-btn">⚡ Inspect & Customize</span>
          </div>
        </div>

        <div class="card-body">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-description">${item.description}</p>
          <div class="card-tags">${tagsHtml}</div>
          
          <div class="card-footer">
            <div class="card-stats">
              <span class="stat-item" title="Favorites">❤️ <span id="favCount-${item.id}">${item.favouritesCount || 0}</span></span>
              <span class="stat-item" title="Downloads">📥 ${item.downloadsCount || 0}</span>
            </div>
            <button type="button" class="view-code-btn" onclick="openCodeModal('${item.id}')">
              <span>View Code</span> ➔
            </button>
          </div>
        </div>
      </article>
    `;
  }

  grid.innerHTML = htmlBuffer;
}

function escapeHtmlForSrcdoc(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function setCategory(category) {
  currentCategory = category;
  const pills = document.querySelectorAll(".category-pill");
  pills.forEach(function(pill) {
    if (pill.getAttribute("data-category") === category) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
  renderComponentCards();
}

function handleSearchInput(e) {
  currentSearch = e.target.value;
  const clearBtn = document.getElementById("searchClearBtn");
  if (clearBtn) {
    clearBtn.style.display = currentSearch.length > 0 ? "block" : "none";
  }
  renderComponentCards();
}

function clearSearch() {
  const input = document.getElementById("searchInput");
  if (input) {
    input.value = "";
    currentSearch = "";
  }
  const clearBtn = document.getElementById("searchClearBtn");
  if (clearBtn) clearBtn.style.display = "none";
  renderComponentCards();
}

function quickSearchTag(tag) {
  const input = document.getElementById("searchInput");
  if (input) {
    input.value = tag;
    currentSearch = tag;
  }
  const clearBtn = document.getElementById("searchClearBtn");
  if (clearBtn) clearBtn.style.display = "block";
  renderComponentCards();
  window.scrollTo({ top: 400, behavior: "smooth" });
}

function handleSortChange(e) {
  currentSort = e.target.value;
  renderComponentCards();
}

function resetFilters() {
  clearSearch();
  setCategory("All");
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "popular";
  currentSort = "popular";
  renderComponentCards();
}

// --------------------------------------------------------------------------
// 7. FAVOURITES SYSTEM (localStorage)
// --------------------------------------------------------------------------
function getFavouritesList() {
  const raw = localStorage.getItem("inspireui_favourites");
  return raw ? JSON.parse(raw) : [];
}

function toggleFavourite(designId) {
  let favs = getFavouritesList();
  const index = favs.indexOf(designId);
  const isAdding = index === -1;

  if (isAdding) {
    favs.push(designId);
  } else {
    favs.splice(index, 1);
  }
  localStorage.setItem("inspireui_favourites", JSON.stringify(favs));

  // Update in allComponents data
  const item = allComponents.find(d => d.id === designId);
  if (item) {
    item.favouritesCount = (item.favouritesCount || 0) + (isAdding ? 1 : -1);
    localStorage.setItem("inspireui_components", JSON.stringify(allComponents));
  }

  // Update card heart & counter if present on page
  const card = document.getElementById("card-" + designId);
  if (card) {
    const btn = card.querySelector(".card-fav-btn");
    if (btn) {
      if (isAdding) {
        btn.classList.add("active");
        btn.innerHTML = "❤️";
      } else {
        btn.classList.remove("active");
        btn.innerHTML = "🤍";
      }
    }
    const countElem = document.getElementById("favCount-" + designId);
    if (countElem && item) {
      countElem.innerText = item.favouritesCount;
    }
  }

  updateFavouriteCounterBadge();
  showToast(isAdding ? "Added to your Favourites" : "Removed from Favourites", isAdding ? "success" : "info");

  // If on dashboard, re-render favourites list
  if (window.location.pathname.includes("dashboard.html")) {
    renderDashboardFavourites();
  }
}

function updateFavouriteCounterBadge() {
  const badge = document.getElementById("navFavCount");
  if (!badge) return;
  const count = getFavouritesList().length;
  badge.innerText = count;
}

// --------------------------------------------------------------------------
// 8. CODE PREVIEW MODAL
// --------------------------------------------------------------------------
let activeModalDesign = null;
let activeModalTab = "preview";

function openCodeModal(designId) {
  const list = getAllComponents();
  let item = list.find(d => d.id === designId);
  if (!item) {
    item = INITIAL_COMPONENTS.find(d => d.id === designId);
  }
  if (!item) {
    console.error("Component not found:", designId);
    showToast("Component not found", "error");
    return;
  }

  activeModalDesign = item;
  activeModalTab = "preview";

  const modal = document.getElementById("codeModal");
  if (!modal) {
    console.error("Modal element #codeModal not found in DOM");
    return;
  }

  const titleEl = document.getElementById("modalTitle");
  if (titleEl) titleEl.innerText = item.name;

  const catEl = document.getElementById("modalCategory");
  if (catEl) catEl.innerText = item.category;

  const htmlPre = document.getElementById("codeHtmlPre");
  if (htmlPre) htmlPre.innerText = item.html || "<!-- No HTML available -->";

  const cssPre = document.getElementById("codeCssPre");
  if (cssPre) cssPre.innerText = item.css || "/* No CSS available */";

  const jsPre = document.getElementById("codeJsPre");
  if (jsPre) jsPre.innerText = item.js || "// No JavaScript available";

  // Setup Live sandbox preview
  const iframe = document.getElementById("modalSandboxIframe");
  if (iframe) {
    iframe.srcdoc = buildComponentHtml(item);
  }

  switchModalTab("preview");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCodeModal() {
  const modal = document.getElementById("codeModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

function switchModalTab(tabName) {
  activeModalTab = tabName;
  const tabBtns = document.querySelectorAll(".modal-tab-btn");
  tabBtns.forEach(btn => {
    if (btn.getAttribute("data-tab") === tabName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const panes = document.querySelectorAll(".modal-tab-pane");
  panes.forEach(pane => {
    if (pane.id === "pane-" + tabName) {
      pane.classList.add("active");
    } else {
      pane.classList.remove("active");
    }
  });
}

function copyCurrentCode() {
  if (!activeModalDesign) return;
  let textToCopy = "";
  if (activeModalTab === "html") {
    textToCopy = activeModalDesign.html;
  } else if (activeModalTab === "css") {
    textToCopy = activeModalDesign.css;
  } else if (activeModalTab === "js") {
    textToCopy = activeModalDesign.js;
  } else {
    // When on preview tab, copy the combined standalone HTML
    textToCopy = buildComponentHtml(activeModalDesign);
  }

  function handleCopied() {
    showToast("Code copied to clipboard!", "success");
    const copyBtn = document.getElementById("modalCopyBtn");
    if (copyBtn) {
      const orig = copyBtn.innerHTML;
      copyBtn.innerHTML = "✅ Copied!";
      setTimeout(() => { copyBtn.innerHTML = orig; }, 1500);
    }
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy).then(handleCopied).catch(function() {
      fallbackCopy(textToCopy, handleCopied);
    });
  } else {
    fallbackCopy(textToCopy, handleCopied);
  }
}

function fallbackCopy(text, onSuccess) {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    if (onSuccess) onSuccess();
    else showToast("Code copied to clipboard!", "success");
  } catch (err) {
    showToast("Could not copy automatically. Please copy manually.", "error");
  }
}

function downloadCurrentComponent() {
  if (!activeModalDesign) return;
  let code = "";
  let filename = "component.html";
  let mime = "text/html;charset=utf-8";

  if (activeModalTab === "html") {
    code = activeModalDesign.html || "";
    filename = "index.html";
    mime = "text/html;charset=utf-8";
  } else if (activeModalTab === "css") {
    code = activeModalDesign.css || "";
    filename = "style.css";
    mime = "text/css;charset=utf-8";
  } else if (activeModalTab === "js") {
    code = activeModalDesign.js || "";
    filename = "script.js";
    mime = "application/javascript;charset=utf-8";
  } else {
    code = buildComponentHtml(activeModalDesign);
    filename = (activeModalDesign.id || "component") + ".html";
    mime = "text/html;charset=utf-8";
  }

  const blob = new Blob([code], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("📥 Downloaded " + filename, "success");
}

function setPreviewDevice(device) {
  const iframe = document.getElementById("modalSandboxIframe");
  if (!iframe) return;
  const btnD = document.getElementById("devBtnDesktop");
  const btnT = document.getElementById("devBtnTablet");
  const btnM = document.getElementById("devBtnMobile");

  [btnD, btnT, btnM].forEach(b => { if (b) b.classList.remove("active"); });

  if (device === "mobile") {
    iframe.style.width = "390px";
    iframe.style.border = "1px solid var(--border-strong)";
    iframe.style.borderRadius = "12px";
    iframe.style.boxShadow = "0 8px 30px rgba(0,0,0,0.7)";
    if (btnM) btnM.classList.add("active");
  } else if (device === "tablet") {
    iframe.style.width = "768px";
    iframe.style.border = "1px solid var(--border-strong)";
    iframe.style.borderRadius = "10px";
    iframe.style.boxShadow = "0 8px 30px rgba(0,0,0,0.7)";
    if (btnT) btnT.classList.add("active");
  } else {
    iframe.style.width = "100%";
    iframe.style.border = "none";
    iframe.style.borderRadius = "0";
    iframe.style.boxShadow = "none";
    if (btnD) btnD.classList.add("active");
  }
}

function openComponentInNewTab() {
  if (!activeModalDesign) return;
  const fullHtml = buildComponentHtml(activeModalDesign);
  const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
}

// --------------------------------------------------------------------------
// 9. STUDENT DASHBOARD (dashboard.html)
// --------------------------------------------------------------------------
function initDashboard() {
  initializeStorage();
  const user = getCurrentUser();
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const nameElem = document.getElementById("dashUserName");
  const emailElem = document.getElementById("dashUserEmail");
  const avatarElem = document.getElementById("dashUserAvatar");
  const roleElem = document.getElementById("dashUserRole");

  if (nameElem) nameElem.innerText = user.name;
  if (emailElem) emailElem.innerText = user.email;
  if (roleElem) roleElem.innerText = user.role;
  if (avatarElem) avatarElem.innerText = user.name.charAt(0).toUpperCase();

  renderDashboardFavourites();
  renderDashboardProjects();
  updateDashboardStats();
}

function renderDashboardFavourites() {
  const grid = document.getElementById("dashFavGrid");
  if (!grid) return;

  const raw = localStorage.getItem("inspireui_components");
  const list = raw ? JSON.parse(raw) : INITIAL_COMPONENTS;
  const favIds = getFavouritesList();

  const favComponents = list.filter(d => favIds.includes(d.id));

  if (favComponents.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">💔</div>
        <h3 class="empty-title">No favorite components yet</h3>
        <p class="empty-desc">Explore the UI library and click the heart icon on any component to save it here.</p>
        <a href="index.html" class="btn btn-primary btn-sm">Browse Components</a>
      </div>
    `;
    return;
  }

  let html = "";
  favComponents.forEach(function(item) {
    html += `
      <div class="inspiration-card">
        <div class="card-preview-container" style="height: 180px;">
          <span class="card-category-tag">${item.category}</span>
          <iframe class="card-preview-iframe" srcdoc="${escapeHtmlForSrcdoc(buildComponentHtml(item))}"></iframe>
        </div>
        <div class="card-body">
          <h4 class="card-title">${item.name}</h4>
          <p class="card-description">${item.description}</p>
          <div class="card-footer">
            <button onclick="openCodeModal('${item.id}')" class="btn btn-secondary btn-sm">Inspect Code</button>
            <button onclick="toggleFavourite('${item.id}')" class="btn btn-danger btn-sm">Remove</button>
          </div>
        </div>
      </div>
    `;
  });
  grid.innerHTML = html;
}

function renderDashboardProjects() {
  const grid = document.getElementById("dashProjectsGrid");
  if (!grid) return;

  const raw = localStorage.getItem("inspireui_projects");
  const projects = raw ? JSON.parse(raw) : [];

  if (projects.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📁</div>
        <h3 class="empty-title">No projects created yet</h3>
        <p class="empty-desc">Create your first custom project to organize component collections.</p>
        <button onclick="openNewProjectModal()" class="btn btn-primary btn-sm">+ Create Project</button>
      </div>
    `;
    return;
  }

  let html = "";
  projects.forEach(function(p) {
    html += `
      <div class="project-card">
        <div class="project-header">
          <h4 class="project-title">${p.name}</h4>
          <span class="project-badge">${p.category || "Web App"}</span>
        </div>
        <p class="project-desc">${p.description}</p>
        <div class="project-footer">
          <span class="project-date">Created: ${p.created || "2026-03-01"}</span>
          <button onclick="deleteProject('${p.id}')" class="btn btn-danger btn-sm" style="padding: 4px 8px;">Delete</button>
        </div>
      </div>
    `;
  });
  grid.innerHTML = html;
}

function openNewProjectModal() {
  const modal = document.getElementById("projectModal");
  if (modal) modal.classList.add("open");
}

function closeNewProjectModal() {
  const modal = document.getElementById("projectModal");
  if (modal) modal.classList.remove("open");
}

function handleCreateProject(e) {
  e.preventDefault();
  const nameInput = document.getElementById("projectNameInput");
  const catInput = document.getElementById("projectCatInput");
  const descInput = document.getElementById("projectDescInput");

  if (!nameInput.value.trim()) {
    showToast("Project name is required", "error");
    return;
  }

  const raw = localStorage.getItem("inspireui_projects");
  const projects = raw ? JSON.parse(raw) : [];

  const newProj = {
    id: "proj_" + Date.now(),
    name: nameInput.value.trim(),
    category: catInput.value,
    description: descInput.value.trim() || "InspireUI Custom Component Sandbox",
    created: new Date().toISOString().split("T")[0]
  };

  projects.unshift(newProj);
  localStorage.setItem("inspireui_projects", JSON.stringify(projects));

  showToast("Project created successfully!", "success");
  closeNewProjectModal();
  renderDashboardProjects();
  updateDashboardStats();

  nameInput.value = "";
  descInput.value = "";
}

function deleteProject(id) {
  const raw = localStorage.getItem("inspireui_projects");
  let projects = raw ? JSON.parse(raw) : [];
  projects = projects.filter(p => p.id !== id);
  localStorage.setItem("inspireui_projects", JSON.stringify(projects));
  showToast("Project deleted", "info");
  renderDashboardProjects();
  updateDashboardStats();
}

function updateDashboardStats() {
  const favCountElem = document.getElementById("dashStatFavs");
  const projCountElem = document.getElementById("dashStatProjects");
  if (favCountElem) favCountElem.innerText = getFavouritesList().length;
  if (projCountElem) {
    const raw = localStorage.getItem("inspireui_projects");
    const count = raw ? JSON.parse(raw).length : 0;
    projCountElem.innerText = count;
  }
}

// --------------------------------------------------------------------------
// 10. ADMIN CONSOLE (admin.html)
// --------------------------------------------------------------------------
function initAdminConsole() {
  initializeStorage();
  const user = getCurrentUser();
  if (!user || user.role !== 'Admin') {
    const main = document.querySelector("main.container");
    if (main) {
      main.innerHTML = `
        <div class="restricted-card">
          <div style="font-size: 52px; margin-bottom: 16px;">🔒</div>
          <h2 style="font-size: 26px; font-weight: 800; margin-bottom: 12px; color: var(--text-main);">Administrator Access Required</h2>
          <p style="color: var(--text-muted); font-size: 14px; line-height: 1.6; margin-bottom: 28px;">
            The Platform Admin Console is restricted to administrators. Student and developer accounts do not have permission to view or manage user accounts and system catalogs.
          </p>
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <a href="dashboard.html" class="btn btn-primary">Go to Student Dashboard</a>
            <a href="index.html" class="btn btn-secondary">Browse UI Catalog</a>
          </div>
        </div>
      `;
    }
    return;
  }
  renderAdminComponents();
  renderAdminUsers();
  updateAdminStats();
}

function renderAdminComponents() {
  const tbody = document.getElementById("adminComponentsTableBody");
  if (!tbody) return;

  const raw = localStorage.getItem("inspireui_components");
  const list = raw ? JSON.parse(raw) : INITIAL_COMPONENTS;

  let html = "";
  list.forEach(function(item) {
    html += `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td><span class="table-badge badge-dev">${item.category}</span></td>
        <td>${item.author || "Suraj"}</td>
        <td>❤️ ${item.favouritesCount || 0}</td>
        <td>📥 ${item.downloadsCount || 0}</td>
        <td>
          <button onclick="openCodeModal('${item.id}')" class="btn btn-secondary btn-sm" style="padding: 4px 8px;">Preview</button>
          <button onclick="deleteAdminComponent('${item.id}')" class="btn btn-danger btn-sm" style="padding: 4px 8px; margin-left: 6px;">Delete</button>
        </td>
      </tr>
    `;
  });
  tbody.innerHTML = html;
}

function deleteAdminComponent(id) {
  const raw = localStorage.getItem("inspireui_components");
  let list = raw ? JSON.parse(raw) : INITIAL_COMPONENTS;
  list = list.filter(d => d.id !== id);
  localStorage.setItem("inspireui_components", JSON.stringify(list));
  allComponents = list;
  showToast("Component removed", "info");
  renderAdminComponents();
  updateAdminStats();
}

function renderAdminUsers() {
  const tbody = document.getElementById("adminUsersTableBody");
  if (!tbody) return;

  const raw = localStorage.getItem("inspireui_users");
  const users = raw ? JSON.parse(raw) : DEFAULT_USERS;

  let html = "";
  users.forEach(function(u) {
    const isPrimaryAdmin = u.email === "sc639489@gmail.com";
    html += `
      <tr>
        <td>
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="user-avatar" style="width: 32px; height: 32px;">${u.name.charAt(0).toUpperCase()}</div>
            <div>
              <div style="font-weight: 600;">${u.name}</div>
              <div style="font-size: 11px; color: var(--text-dim);">${u.email}</div>
            </div>
          </div>
        </td>
        <td>
          <span class="table-badge ${u.role === 'Admin' ? 'badge-admin' : 'badge-dev'}">${u.role}</span>
        </td>
        <td>${u.joined || "2026-02-15"}</td>
        <td>
          ${isPrimaryAdmin ? '<span style="font-size: 11px; color: var(--text-dim);">Protected Admin</span>' : `
            <button onclick="deleteAdminUser('${u.id}')" class="btn btn-danger btn-sm" style="padding: 4px 10px;" title="Delete User">
              🗑️ Delete
            </button>
          `}
        </td>
      </tr>
    `;
  });
  tbody.innerHTML = html;
}

function deleteAdminUser(id) {
  const raw = localStorage.getItem("inspireui_users");
  let users = raw ? JSON.parse(raw) : DEFAULT_USERS;
  const userToDelete = users.find(u => u.id === id);
  const name = userToDelete ? userToDelete.name : "User";
  
  users = users.filter(u => u.id !== id);
  localStorage.setItem("inspireui_users", JSON.stringify(users));
  showToast("Deleted user: " + name, "success");
  renderAdminUsers();
  updateAdminStats();
}

function updateAdminStats() {
  const countComp = document.getElementById("adminStatComponents");
  const countUsers = document.getElementById("adminStatUsers");
  const rawC = localStorage.getItem("inspireui_components");
  const rawU = localStorage.getItem("inspireui_users");
  if (countComp) countComp.innerText = rawC ? JSON.parse(rawC).length : INITIAL_COMPONENTS.length;
  if (countUsers) countUsers.innerText = rawU ? JSON.parse(rawU).length : DEFAULT_USERS.length;
}

// --------------------------------------------------------------------------
// 11. LOGIN & REGISTER HANDLERS (login.html, register.html)
// --------------------------------------------------------------------------
// 11. USER AUTHENTICATION (login.html & register.html)
// --------------------------------------------------------------------------
function fillDemoUser(type) {
  const emailInput = document.getElementById("loginEmail");
  const passInput = document.getElementById("loginPassword");
  const alertBox = document.getElementById("loginAlertBox");
  if (alertBox) alertBox.style.display = "none";

  if (type === "admin") {
    if (emailInput) emailInput.value = "sc639489@gmail.com";
    if (passInput) passInput.value = "admin1234";
    showToast("Filled Suraj (Admin) profile", "info");
  } else {
    if (emailInput) emailInput.value = "sarah@cloudscale.io";
    if (passInput) passInput.value = "developer2026";
    showToast("Filled Sarah (Developer) profile", "info");
  }
}

function togglePasswordVisibility() {
  const passInput = document.getElementById("loginPassword");
  const toggleBtn = document.getElementById("togglePasswordBtn");
  if (!passInput) return;

  if (passInput.type === "password") {
    passInput.type = "text";
    if (toggleBtn) toggleBtn.innerHTML = "🙈 Hide";
  } else {
    passInput.type = "password";
    if (toggleBtn) toggleBtn.innerHTML = "👁️ Show";
  }
}

function showForgotPasswordAlert() {
  const alertBox = document.getElementById("loginAlertBox");
  if (alertBox) {
    alertBox.className = "login-alert-box success";
    alertBox.innerHTML = "ℹ️ Password reset instructions sent to your registered email address.";
    alertBox.style.display = "flex";
  }
  showToast("Password reset instructions sent to your email", "info");
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById("loginEmail");
  const passInput = document.getElementById("loginPassword");
  const alertBox = document.getElementById("loginAlertBox");

  const email = emailInput ? emailInput.value.trim() : "";
  const pass = passInput ? passInput.value.trim() : "";

  // Requirement 12: Email cannot be empty
  if (!email) {
    if (alertBox) {
      alertBox.className = "login-alert-box error";
      alertBox.innerHTML = "⚠️ Email Address cannot be empty.";
      alertBox.style.display = "flex";
    }
    showToast("Email Address cannot be empty", "error");
    if (emailInput) emailInput.focus();
    return;
  }

  // Requirement 12: Password cannot be empty
  if (!pass) {
    if (alertBox) {
      alertBox.className = "login-alert-box error";
      alertBox.innerHTML = "⚠️ Password cannot be empty.";
      alertBox.style.display = "flex";
    }
    showToast("Password cannot be empty", "error");
    if (passInput) passInput.focus();
    return;
  }

  // Requirement 12: Show success message when valid
  if (alertBox) {
    alertBox.className = "login-alert-box success";
    alertBox.innerHTML = "✅ Login valid! Welcome back to InspireUI.";
    alertBox.style.display = "flex";
  }
  showToast("Login valid! Welcome back to InspireUI.", "success");

  const rawUsers = localStorage.getItem("inspireui_users");
  const users = rawUsers ? JSON.parse(rawUsers) : DEFAULT_USERS;
  
  let found = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!found) {
    found = {
      id: "usr_" + Date.now(),
      name: email.split("@")[0],
      email: email.toLowerCase(),
      role: email.toLowerCase().includes("admin") ? "Admin" : "Developer",
      joined: new Date().toISOString().split("T")[0]
    };
    users.push(found);
    localStorage.setItem("inspireui_users", JSON.stringify(users));
  }

  setCurrentUser(found);

  setTimeout(function() {
    window.location.href = found.role === "Admin" ? "admin.html" : "dashboard.html";
  }, 500);
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const nameInput = document.getElementById("regName");
  const emailInput = document.getElementById("regEmail");
  const roleSelect = document.getElementById("regRole");
  const passInput = document.getElementById("regPassword");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const role = roleSelect ? roleSelect.value : "Developer";
  const pass = passInput.value.trim();

  if (!name || !email || !pass) {
    showToast("All fields are required", "error");
    return;
  }

  if (pass.length < 6) {
    showToast("Password must be at least 6 characters", "error");
    return;
  }

  const rawUsers = localStorage.getItem("inspireui_users");
  const users = rawUsers ? JSON.parse(rawUsers) : DEFAULT_USERS;

  if (users.some(u => u.email.toLowerCase() === email)) {
    showToast("An account with this email already exists", "error");
    return;
  }

  const newUser = {
    id: "usr_" + Date.now(),
    name: name,
    email: email,
    role: role,
    joined: new Date().toISOString().split("T")[0]
  };

  users.push(newUser);
  localStorage.setItem("inspireui_users", JSON.stringify(users));
  setCurrentUser(newUser);

  showToast("Account created successfully!", "success");
  setTimeout(function() {
    window.location.href = "dashboard.html";
  }, 400);
}

// --------------------------------------------------------------------------
// 13. ASK AI TO UI GENERATOR
// --------------------------------------------------------------------------
function openAskAIModal() {
  const modal = document.getElementById("askAIModal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    const promptInput = document.getElementById("aiPromptInput");
    if (promptInput) {
      setTimeout(() => promptInput.focus(), 100);
    }
  }
}

function closeAskAIModal() {
  const modal = document.getElementById("askAIModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

function fillAIPrompt(text) {
  const input = document.getElementById("aiPromptInput");
  if (input) {
    input.value = text;
    input.focus();
  }
}

async function handleGenerateUI(e) {
  e.preventDefault();
  const input = document.getElementById("aiPromptInput");
  const styleSelect = document.getElementById("aiStyleSelect");
  const catSelect = document.getElementById("aiCategorySelect");
  const loadingBox = document.getElementById("aiLoadingBox");
  const submitBtn = document.getElementById("aiSubmitBtn");

  const prompt = (input ? input.value : "").trim();
  if (!prompt) {
    showToast("Please describe the UI you want to design", "error");
    return;
  }

  const style = styleSelect ? styleSelect.value : "Modern Dark";
  const category = catSelect ? catSelect.value : "Cards";

  if (loadingBox) loadingBox.style.display = "flex";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = "✨ AI is Generating UI...";
  }

  try {
    const res = await fetch("/api/generate-ui", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, style, category })
    });

    const data = await res.json();
    if (data && data.design) {
      const design = data.design;
      
      // Save into global list and localStorage
      const list = getAllComponents();
      list.unshift(design);
      localStorage.setItem("inspireui_components", JSON.stringify(list));
      allComponents = list;

      showToast("✨ Generated: " + design.name + "!", "success");
      closeAskAIModal();

      // Refresh cards if on index.html
      const cardsGrid = document.getElementById("cardsGrid");
      if (cardsGrid) {
        renderComponentCards();
      }

      // Automatically open the code inspection modal for immediate review!
      setTimeout(function() {
        openCodeModal(design.id);
      }, 250);

      if (input) input.value = "";
    } else {
      showToast(data.error || "Failed to generate UI component", "error");
    }
  } catch (err) {
    console.error("AI Generation error:", err);
    showToast("Generation error, please try again", "error");
  } finally {
    if (loadingBox) loadingBox.style.display = "none";
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerText = "✨ Generate UI Component";
    }
  }
}

// --------------------------------------------------------------------------
// 14. REAL UI GENERATOR WORKSPACE ENGINE
// --------------------------------------------------------------------------
let activeGeneratorUI = null;
let currentCodeTab = 'html'; // 'html' | 'css' | 'js'

function initUIGeneratorApp() {
  initTheme();
  initializeStorage();
  updateNavbarUser();

  const components = getAllComponents();
  const defaultItem = components.find(c => c.id === 'design-login-clean') || components[0];
  if (defaultItem) {
    loadUIIntoWorkspace(defaultItem);
  }
  renderPresetCards(components);
}

function loadUIIntoWorkspace(item) {
  if (!item) return;
  activeGeneratorUI = item;

  // 1. Update Workspace Title & Meta
  const catEl = document.getElementById("activeUiCategory");
  const nameEl = document.getElementById("activeUiName");
  const descEl = document.getElementById("activeUiDesc");
  if (catEl) catEl.innerText = item.category || "UI Component";
  if (nameEl) nameEl.innerText = item.name || "Custom Generated UI";
  if (descEl) descEl.innerText = item.description || "Real UI design generated by InspireUI.";

  // 2. Render Live Preview inside sandboxed iframe
  renderLiveSandbox(item);

  // 3. Render Code into active tab
  updateActiveCodeTab();
}

function renderLiveSandbox(item) {
  const iframe = document.getElementById("livePreviewIframe");
  if (!iframe) return;

  const fontImports = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">`;

  const resetStyles = `
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #090e1a;
      color: #f8fafc;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      overflow-x: hidden;
    }
  `;

  const docContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ${fontImports}
  <style>
    ${resetStyles}
    ${item.css || ''}
  </style>
</head>
<body>
  ${item.html || '<p>No preview available</p>'}
  <script>
    try {
      ${item.js || ''}
    } catch(err) {
      console.warn("Script execution:", err);
    }
  <\/script>
</body>
</html>`;

  iframe.srcdoc = docContent;
}

function switchCodeTab(tab) {
  currentCodeTab = tab;
  ['html', 'css', 'js'].forEach(t => {
    const btn = document.getElementById("tabBtn" + t.charAt(0).toUpperCase() + t.slice(1));
    if (btn) btn.classList.toggle("active", t === tab);
  });
  updateActiveCodeTab();
}

function updateActiveCodeTab() {
  if (!activeGeneratorUI) return;
  const display = document.getElementById("activeCodeDisplay");
  const filename = document.getElementById("activeFilenameDisplay");
  const stats = document.getElementById("activeLinesCount");

  let code = "";
  let file = "index.html";
  let lines = 0;

  if (currentCodeTab === "html") {
    code = activeGeneratorUI.html || "";
    file = "index.html";
  } else if (currentCodeTab === "css") {
    code = activeGeneratorUI.css || "";
    file = "style.css";
  } else {
    code = activeGeneratorUI.js || "";
    file = "script.js";
  }

  lines = code ? code.split("\n").length : 0;
  if (display) display.textContent = code;
  if (filename) filename.textContent = file;
  if (stats) stats.textContent = lines + " lines • Pure " + currentCodeTab.toUpperCase();
}

function setDeviceView(device) {
  const canvas = document.getElementById("previewCanvas");
  ['desktop', 'tablet', 'mobile'].forEach(d => {
    const btn = document.getElementById("btnDev" + d.charAt(0).toUpperCase() + d.slice(1));
    if (btn) btn.classList.toggle("active", d === device);
  });
  if (canvas) {
    canvas.className = "preview-stage-canvas " + device;
  }
}

function copyCurrentTabCode() {
  if (!activeGeneratorUI) return;
  let code = "";
  if (currentCodeTab === "html") code = activeGeneratorUI.html;
  else if (currentCodeTab === "css") code = activeGeneratorUI.css;
  else code = activeGeneratorUI.js;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      showToast("📋 " + currentCodeTab.toUpperCase() + " code copied to clipboard!", "success");
    }).catch(() => fallbackCopy(code));
  } else {
    fallbackCopy(code);
  }
}

function downloadCurrentTabCode() {
  if (!activeGeneratorUI) return;
  let code = "";
  let filename = "index.html";
  let mime = "text/html";

  if (currentCodeTab === "html") {
    code = activeGeneratorUI.html;
    filename = "index.html";
    mime = "text/html";
  } else if (currentCodeTab === "css") {
    code = activeGeneratorUI.css;
    filename = "style.css";
    mime = "text/css";
  } else {
    code = activeGeneratorUI.js;
    filename = "script.js";
    mime = "application/javascript";
  }

  const blob = new Blob([code], { type: mime });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast("📥 Downloaded " + filename, "success");
}

function downloadCurrentUIBundle() {
  if (!activeGeneratorUI) return;
  const bundle = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${activeGeneratorUI.name || 'InspireUI Component'}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #090e1a;
      color: #f8fafc;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    ${activeGeneratorUI.css || ''}
  </style>
</head>
<body>
  ${activeGeneratorUI.html || ''}
  <script>
    ${activeGeneratorUI.js || ''}
  <\/script>
</body>
</html>`;

  const blob = new Blob([bundle], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = (activeGeneratorUI.id || "inspireui-design") + "-bundle.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast("📦 Downloaded complete standalone HTML bundle!", "success");
}

function saveActiveToFavorites() {
  if (!activeGeneratorUI) return;
  toggleFavourite(activeGeneratorUI.id);
}

// --------------------------------------------------------------------------
// 15. CLIENT-SIDE SMART UI GENERATION ENGINE
// --------------------------------------------------------------------------
function generateClientUI(prompt, style, category) {
  const p = (prompt || '').toLowerCase().trim();

  // 1. LOGIN PAGE
  if (p.includes('login') || p.includes('sign in') || p.includes('signin') || p.includes('auth form') || p.includes('login form')) {
    return {
      id: 'gen-login-' + Date.now(),
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
        <input type="email" id="loginEmail" class="form-input" placeholder="Enter your email" required />
      </div>

      <div class="form-group">
        <div class="pwd-header">
          <label for="loginPassword" class="form-label">Password</label>
          <a href="#" class="forgot-link" onclick="alert('Password reset instructions sent to your email.'); return false;">Forgot Password?</a>
        </div>
        <div class="pwd-input-wrap">
          <input type="password" id="loginPassword" class="form-input" placeholder="Enter your password" required />
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
.login-brand { text-align: center; margin-bottom: 20px; }
.brand-link { display: inline-flex; align-items: center; gap: 8px; }
.brand-icon { width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, #3b82f6, #6366f1); display: flex; align-items: center; justify-content: center; color: white; font-size: 16px; }
.brand-name { font-size: 20px; font-weight: 800; color: white; }
.brand-name span { color: #3b82f6; }
.tagline { font-size: 12px; color: #94a3b8; margin-top: 4px; }
.login-header { text-align: center; margin-bottom: 20px; }
.title { font-size: 22px; font-weight: 800; margin-bottom: 4px; }
.subtitle { font-size: 13px; color: #94a3b8; }
.alert-box { padding: 10px 12px; border-radius: 8px; font-size: 12px; font-weight: 600; margin-bottom: 16px; }
.alert-box.error { background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; }
.alert-box.success { background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); color: #6ee7b7; }
.form-group { margin-bottom: 16px; display: flex; flex-direction: column; gap: 6px; }
.form-label { font-size: 13px; font-weight: 600; color: #cbd5e1; }
.pwd-header { display: flex; justify-content: space-between; align-items: center; }
.forgot-link { font-size: 12px; color: #3b82f6; text-decoration: none; }
.forgot-link:hover { text-decoration: underline; }
.form-input { width: 100%; background: #070c18; border: 1px solid #1e293b; border-radius: 8px; padding: 11px 14px; color: white; font-size: 14px; outline: none; transition: all 0.2s; }
.form-input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); }
.pwd-input-wrap { position: relative; display: flex; align-items: center; }
.pwd-input-wrap .form-input { padding-right: 74px; }
.pwd-toggle-btn { position: absolute; right: 8px; background: #172238; border: 1px solid #233352; color: #cbd5e1; padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; cursor: pointer; }
.pwd-toggle-btn:hover { color: white; background: #1e293b; }
.remember-row { margin-bottom: 20px; display: flex; align-items: center; }
.remember-label { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #94a3b8; cursor: pointer; }
.remember-label input { accent-color: #3b82f6; width: 16px; height: 16px; }
.login-btn { width: 100%; padding: 12px; border-radius: 10px; background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%); color: white; font-size: 15px; font-weight: 700; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35); transition: transform 0.2s, box-shadow 0.2s; }
.login-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5); }
.login-footer { text-align: center; margin-top: 20px; font-size: 13px; color: #94a3b8; }
.register-link { color: #3b82f6; font-weight: 600; text-decoration: none; margin-left: 4px; }
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
      id: 'gen-signup-' + Date.now(),
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
      css: `.signup-wrapper { width: 100%; display: flex; align-items: center; justify-content: center; padding: 30px 16px; font-family: 'Plus Jakarta Sans', sans-serif; }
.signup-card { width: 100%; max-width: 500px; background: #0d1527; border: 1px solid #1e293b; border-radius: 16px; padding: 36px 32px; color: #f8fafc; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6); }
.brand-header { text-align: center; margin-bottom: 24px; }
.brand-badge { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: linear-gradient(135deg, #3b82f6, #6366f1); border-radius: 10px; font-size: 18px; margin-bottom: 8px; }
.brand-header h2 { font-size: 22px; font-weight: 800; margin-bottom: 4px; }
.brand-header p { font-size: 13px; color: #94a3b8; }
.alert-msg { padding: 10px 14px; border-radius: 8px; font-size: 13px; font-weight: 600; margin-bottom: 18px; }
.alert-msg.error { background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.35); color: #fca5a5; }
.alert-msg.success { background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.35); color: #6ee7b7; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px; }
@media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }
.input-field { display: flex; flex-direction: column; gap: 6px; }
.input-field label { font-size: 12px; font-weight: 600; color: #cbd5e1; }
.input-field input { background: #070c18; border: 1px solid #1e293b; border-radius: 8px; padding: 10px 12px; color: white; font-size: 13px; outline: none; }
.input-field input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2); }
.terms-row { margin: 18px 0; }
.terms-label { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #94a3b8; cursor: pointer; }
.terms-label input { accent-color: #3b82f6; }
.signup-submit-btn { width: 100%; padding: 12px; border-radius: 10px; background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%); color: white; font-weight: 700; font-size: 14px; border: none; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35); }
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
      id: 'gen-dash-' + Date.now(),
      name: 'Full Admin & Analytics Dashboard',
      category: 'Dashboard',
      description: 'Comprehensive dark administrative dashboard with responsive sidebar navigation, KPI metric cards, and a filterable live deployments table.',
      tags: ['Dashboard', 'Admin', 'Analytics', 'Table', 'Sidebar'],
      html: `<div class="dash-layout">
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
      css: `.dash-layout { display: grid; grid-template-columns: 220px 1fr; min-height: 480px; background: #090e1a; color: #f8fafc; font-family: 'Plus Jakarta Sans', sans-serif; border-radius: 14px; overflow: hidden; border: 1px solid #1e293b; }
@media (max-width: 768px) { .dash-layout { grid-template-columns: 1fr; } .dash-sidebar { display: none; } }
.dash-sidebar { background: #0d1527; border-right: 1px solid #1e293b; padding: 20px 16px; display: flex; flex-direction: column; justify-content: space-between; }
.dash-logo { font-size: 18px; font-weight: 800; margin-bottom: 24px; }
.dash-logo span { color: #3b82f6; }
.dash-nav { display: flex; flex-direction: column; gap: 6px; }
.nav-item { display: block; padding: 10px 12px; color: #94a3b8; text-decoration: none; border-radius: 8px; font-size: 13px; font-weight: 600; transition: all 0.2s; }
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
.dash-btn { padding: 8px 14px; border-radius: 8px; background: #1e293b; border: 1px solid #334155; color: #fff; font-size: 12px; font-weight: 600; cursor: pointer; }
.dash-btn.primary { background: #3b82f6; border-color: #3b82f6; }
.dash-metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 14px; margin-bottom: 24px; }
.metric-card { background: #0d1527; border: 1px solid #1e293b; border-radius: 12px; padding: 16px; }
.m-label { font-size: 11px; color: #64748b; text-transform: uppercase; font-weight: 700; }
.m-val { font-size: 24px; font-weight: 800; margin: 4px 0; }
.m-delta { font-size: 11px; font-weight: 600; }
.m-delta.positive { color: #10b981; }
.m-delta.neutral { color: #94a3b8; }
.dash-table-card { background: #0d1527; border: 1px solid #1e293b; border-radius: 12px; padding: 20px; }
.table-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px; }
.table-bar h3 { font-size: 16px; font-weight: 700; }
.table-bar input { background: #070c18; border: 1px solid #1e293b; border-radius: 6px; padding: 6px 12px; color: #fff; font-size: 12px; outline: none; }
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
      id: 'gen-nav-' + Date.now(),
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
      css: `.site-navbar { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; background: rgba(13, 21, 39, 0.95); backdrop-filter: blur(12px); border: 1px solid #1e293b; border-radius: 12px; color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; position: relative; }
.nav-brand { display: flex; align-items: center; gap: 8px; text-decoration: none; }
.brand-logo { width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, #3b82f6, #6366f1); display: flex; align-items: center; justify-content: center; font-size: 16px; }
.brand-text { font-size: 18px; font-weight: 800; color: #fff; }
.brand-text span { color: #3b82f6; }
.nav-menu { display: flex; align-items: center; gap: 24px; }
.nav-link { color: #94a3b8; text-decoration: none; font-size: 14px; font-weight: 600; transition: color 0.2s; }
.nav-link:hover, .nav-link.active { color: #3b82f6; }
.nav-actions { display: flex; align-items: center; gap: 12px; }
.nav-btn-link { color: #cbd5e1; text-decoration: none; font-size: 13px; font-weight: 600; }
.nav-btn-primary { padding: 8px 16px; border-radius: 8px; background: #3b82f6; border: none; color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s; }
.nav-btn-primary:hover { background: #2563eb; }
.nav-hamburger { display: none; background: none; border: none; color: #fff; font-size: 22px; cursor: pointer; }
@media (max-width: 768px) {
  .nav-hamburger { display: block; }
  .nav-menu { display: none; position: absolute; top: 100%; left: 0; right: 0; background: #0d1527; border: 1px solid #1e293b; border-radius: 0 0 12px 12px; flex-direction: column; padding: 16px; gap: 12px; }
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
      id: 'gen-pricing-' + Date.now(),
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

    <div class="plan-card featured">
      <div class="popular-tag">MOST POPULAR</div>
      <div class="plan-name">Pro Developer</div>
      <p class="plan-sub">For engineers and freelance creators building production apps.</p>
      <div class="plan-price">$29 <span>/ month</span></div>
      <button class="plan-btn primary" onclick="alert('Starting 14-day free trial...')">Start 14-Day Free Trial</button>
      <ul class="plan-features">
        <li>✓ All 15+ Core UI Primitives</li>
        <li>✓ Real UI Generator Engine</li>
        <li>✓ 1-Click Code Exports</li>
        <li>✓ Unlimited Projects & Favorites</li>
        <li>✓ Priority Discord Support</li>
      </ul>
    </div>

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
      css: `.pricing-container { width: 100%; max-width: 900px; margin: 0 auto; padding: 30px 16px; font-family: 'Plus Jakarta Sans', sans-serif; color: #fff; }
.pricing-header { text-align: center; margin-bottom: 32px; }
.pricing-pill { display: inline-block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #3b82f6; background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); padding: 4px 12px; border-radius: 999px; margin-bottom: 12px; }
.pricing-header h2 { font-size: 26px; font-weight: 800; margin-bottom: 6px; }
.pricing-header p { font-size: 14px; color: #94a3b8; }
.pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; align-items: stretch; }
.plan-card { background: #0d1527; border: 1px solid #1e293b; border-radius: 16px; padding: 28px 24px; display: flex; flex-direction: column; position: relative; }
.plan-card.featured { border-color: #3b82f6; box-shadow: 0 0 30px rgba(59, 130, 246, 0.25); transform: translateY(-4px); }
.popular-tag { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #3b82f6; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 10px; border-radius: 999px; }
.plan-name { font-size: 18px; font-weight: 800; margin-bottom: 6px; }
.plan-sub { font-size: 12px; color: #94a3b8; min-height: 36px; margin-bottom: 16px; line-height: 1.4; }
.plan-price { font-size: 32px; font-weight: 800; margin-bottom: 20px; }
.plan-price span { font-size: 13px; font-weight: 500; color: #94a3b8; }
.plan-btn { width: 100%; padding: 11px; border-radius: 8px; background: #1e293b; border: 1px solid #334155; color: #fff; font-weight: 700; font-size: 13px; cursor: pointer; margin-bottom: 20px; transition: all 0.2s; }
.plan-btn:hover { background: #334155; }
.plan-btn.primary { background: linear-gradient(135deg, #3b82f6, #6366f1); border: none; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35); }
.plan-btn.primary:hover { transform: translateY(-1px); }
.plan-features { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 13px; color: #cbd5e1; }`,
      js: `console.log("Pricing component loaded");`
    };
  }

  // 6. PORTFOLIO WEBSITE / PROFILE
  if (p.includes('portfolio') || p.includes('developer profile') || p.includes('resume') || p.includes('cv')) {
    const isBlue = p.includes('blue');
    return {
      id: 'gen-port-' + Date.now(),
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
      css: `.portfolio-card { width: 100%; max-width: 520px; background: #0d1527; border: 1px solid #1e293b; border-radius: 16px; padding: 30px; color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6); }
.portfolio-hero { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
.profile-pic { width: 60px; height: 60px; border-radius: 50%; background: #1e293b; border: 2px solid #3b82f6; display: flex; align-items: center; justify-content: center; font-size: 26px; }
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
.contact-btn { flex: 1; padding: 10px; border-radius: 8px; background: #3b82f6; border: none; color: #fff; font-weight: 700; font-size: 13px; cursor: pointer; }
.github-btn { padding: 10px 14px; border-radius: 8px; background: #1e293b; border: 1px solid #334155; color: #fff; font-weight: 600; font-size: 13px; cursor: pointer; }`,
      js: `console.log("Portfolio loaded");`
    };
  }

  // 7. CONTACT FORM
  if (p.includes('contact') || p.includes('message') || p.includes('inquiry')) {
    return {
      id: 'gen-contact-' + Date.now(),
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
      css: `.contact-box { width: 100%; max-width: 480px; background: #0d1527; border: 1px solid #1e293b; border-radius: 16px; padding: 32px 28px; color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6); }
.contact-header { text-align: center; margin-bottom: 22px; }
.contact-badge { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: rgba(59, 130, 246, 0.2); border-radius: 10px; font-size: 18px; margin-bottom: 8px; }
.contact-header h2 { font-size: 22px; font-weight: 800; margin-bottom: 4px; }
.contact-header p { font-size: 13px; color: #94a3b8; }
.contact-alert { padding: 10px; border-radius: 8px; font-size: 12px; font-weight: 600; margin-bottom: 16px; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.3); color: #6ee7b7; }
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }
@media (max-width: 480px) { .contact-grid { grid-template-columns: 1fr; } }
.field-box { display: flex; flex-direction: column; gap: 6px; }
.field-box.full { margin-bottom: 14px; }
.field-box label { font-size: 12px; font-weight: 600; color: #cbd5e1; }
.label-split { display: flex; justify-content: space-between; align-items: center; }
.label-split span { font-size: 11px; color: #64748b; }
.field-box input, .field-box select, .field-box textarea { background: #070c18; border: 1px solid #1e293b; border-radius: 8px; padding: 10px 12px; color: #fff; font-size: 13px; outline: none; font-family: inherit; }
.field-box input:focus, .field-box select:focus, .field-box textarea:focus { border-color: #3b82f6; }
.contact-submit-btn { width: 100%; padding: 12px; border-radius: 10px; background: linear-gradient(135deg, #3b82f6, #6366f1); border: none; color: #fff; font-size: 14px; font-weight: 700; cursor: pointer; margin-top: 6px; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35); }`,
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
      id: 'gen-prod-' + Date.now(),
      name: 'Modern E-commerce Product Card',
      category: 'E-commerce',
      description: 'Sleek product card with image thumbnail, category tag, rating stars, price, and animated Add to Cart button.',
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
      css: `.product-card { width: 100%; max-width: 360px; background: #0d1527; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6); position: relative; }
.product-badge { position: absolute; top: 12px; left: 12px; background: #3b82f6; color: #fff; font-size: 10px; font-weight: 800; text-transform: uppercase; padding: 3px 8px; border-radius: 4px; }
.product-image-box { height: 180px; background: #070c18; display: flex; align-items: center; justify-content: center; border-bottom: 1px solid #1e293b; }
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
.cart-btn { padding: 9px 16px; border-radius: 8px; background: linear-gradient(135deg, #3b82f6, #6366f1); border: none; color: #fff; font-weight: 700; font-size: 13px; cursor: pointer; transition: all 0.2s; }`,
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

  // 9. SIDEBAR NAVIGATION
  if (p.includes('sidebar') || p.includes('side nav') || p.includes('drawer navigation')) {
    return {
      id: 'gen-side-' + Date.now(),
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
      css: `.sidebar-wrapper { width: 250px; background: #0d1527; border: 1px solid #1e293b; border-radius: 16px; padding: 20px 14px; color: #f8fafc; display: flex; flex-direction: column; height: 480px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6); font-family: 'Plus Jakarta Sans', sans-serif; transition: width 0.25s ease; }
.sidebar-wrapper.collapsed { width: 72px; }
.sidebar-wrapper.collapsed .brand-details, .sidebar-wrapper.collapsed .nav-text, .sidebar-wrapper.collapsed .badge, .sidebar-wrapper.collapsed .nav-section-title, .sidebar-wrapper.collapsed .user-info { display: none; }
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

  // 10. LANDING PAGE
  if (p.includes('landing') || p.includes('landing page') || p.includes('hero section') || p.includes('home page')) {
    return {
      id: 'gen-land-' + Date.now(),
      name: 'High-Converting SaaS Landing Page Hero',
      category: 'Landing Page',
      description: 'Modern developer tool hero section with command badge, headline, dual action buttons, and live tech stack indicators.',
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
      css: `.hero-container { width: 100%; max-width: 680px; padding: 44px 28px; text-align: center; display: flex; flex-direction: column; align-items: center; background-color: #0d1527; border: 1px solid #1e293b; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); font-family: 'Plus Jakarta Sans', sans-serif; }
.announcement-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 999px; background-color: #172033; border: 1px solid #23304a; font-size: 12px; color: #cbd5e1; margin-bottom: 22px; cursor: pointer; }
.badge-dot { width: 6px; height: 6px; border-radius: 50%; background-color: #10b981; }
.badge-arrow { color: #3b82f6; }
.hero-title { color: #f8fafc; font-size: 32px; font-weight: 800; line-height: 1.25; letter-spacing: -0.5px; margin-bottom: 16px; }
.highlight { color: #3b82f6; }
.hero-lead { color: #94a3b8; font-size: 14px; line-height: 1.6; max-width: 520px; margin-bottom: 26px; }
.hero-actions { display: flex; gap: 12px; margin-bottom: 28px; flex-wrap: wrap; justify-content: center; }
.primary-btn { background: linear-gradient(135deg, #3b82f6, #6366f1); color: #ffffff; font-size: 14px; font-weight: 700; padding: 12px 22px; border-radius: 10px; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35); transition: transform 0.2s; }
.primary-btn:hover { transform: translateY(-1px); }
.secondary-btn { background-color: transparent; color: #f8fafc; font-size: 14px; font-weight: 600; padding: 12px 22px; border-radius: 10px; border: 1px solid #334155; cursor: pointer; transition: all 0.2s; }
.secondary-btn:hover { background-color: #1e293b; border-color: #475569; }
.trust-indicators { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #64748b; flex-wrap: wrap; justify-content: center; }
.trust-sep { opacity: 0.5; }`,
      js: `console.log("Landing page hero loaded");`
    };
  }

  // 11. BLOG PAGE / ARTICLE
  if (p.includes('blog') || p.includes('article') || p.includes('post') || p.includes('news')) {
    return {
      id: 'gen-blog-' + Date.now(),
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
      css: `.blog-card { width: 100%; max-width: 440px; background: #0d1527; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6); }
.blog-cover { height: 150px; background: linear-gradient(135deg, #1e293b, #0f172a); border-bottom: 1px solid #1e293b; padding: 16px; display: flex; flex-direction: column; justify-content: space-between; }
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

  // 12. DATA TABLE
  if (p.includes('table') || p.includes('data table') || p.includes('grid table')) {
    return {
      id: 'gen-tbl-' + Date.now(),
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
      css: `.table-container { width: 100%; max-width: 580px; background: #0d1527; border: 1px solid #1e293b; border-radius: 16px; padding: 22px; color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6); }
.table-header-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px; }
.table-title { font-size: 16px; font-weight: 800; margin-bottom: 2px; }
.table-subtitle { font-size: 12px; color: #94a3b8; }
.table-search-box input { background: #070c18; border: 1px solid #1e293b; border-radius: 8px; padding: 8px 12px; color: #fff; font-size: 12px; outline: none; }
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

  // 13. DYNAMIC SMART DEFAULT (NO FAKE METRICS, NO "AI GENERATED COMPONENT")
  const title = prompt.length > 0 ? prompt.charAt(0).toUpperCase() + prompt.slice(1) : 'Modern Application UI';
  return {
    id: 'gen-custom-' + Date.now(),
    name: title,
    category: category || 'UI Component',
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
    css: `.custom-ui-card { width: 100%; max-width: 440px; background: #0d1527; border: 1px solid #1e293b; border-radius: 16px; padding: 28px; color: #f8fafc; font-family: 'Plus Jakarta Sans', sans-serif; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6); }
.card-top { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
.icon-badge { width: 42px; height: 42px; border-radius: 10px; background: linear-gradient(135deg, #3b82f6, #6366f1); display: flex; align-items: center; justify-content: center; font-size: 20px; }
.card-title { font-size: 18px; font-weight: 800; margin-bottom: 2px; }
.card-subtitle { font-size: 12px; color: #94a3b8; }
.card-content-area { margin-bottom: 24px; }
.card-content-area p { font-size: 13px; color: #cbd5e1; line-height: 1.5; margin-bottom: 14px; }
.features-pill-row { display: flex; flex-wrap: wrap; gap: 6px; }
.feature-tag { font-size: 11px; background: #172238; border: 1px solid #233352; color: #93c5fd; padding: 4px 10px; border-radius: 6px; font-weight: 600; }
.card-actions-row { display: flex; justify-content: flex-end; gap: 10px; padding-top: 16px; border-top: 1px solid #1e293b; }
.btn-cancel { padding: 9px 16px; border-radius: 8px; background: transparent; border: 1px solid #334155; color: #cbd5e1; font-size: 13px; font-weight: 600; cursor: pointer; }
.btn-primary-action { padding: 9px 18px; border-radius: 8px; background: linear-gradient(135deg, #3b82f6, #6366f1); border: none; color: white; font-size: 13px; font-weight: 700; cursor: pointer; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35); }`,
    js: `console.log("Component ${title} initialized");`
  };
}

// --------------------------------------------------------------------------
// 16. AI MENTOR & VIVA ASSISTANT ENGINE (CHATGPT / GEMINI STYLE)
// --------------------------------------------------------------------------
function openAIMentorModal() {
  const modal = document.getElementById("aiMentorModal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    const input = document.getElementById("aiChatInput");
    if (input) setTimeout(() => input.focus(), 150);
  }
}

function closeAIMentorModal() {
  const modal = document.getElementById("aiMentorModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

function quickAskAI(promptText) {
  const input = document.getElementById("aiChatInput");
  if (input) {
    input.value = promptText;
    handleSendAIChat();
  }
}

async function handleSendAIChat() {
  const input = document.getElementById("aiChatInput");
  const sendBtn = document.getElementById("btnSendAIChat");
  const chatBody = document.getElementById("aiChatBody");
  if (!input) return;

  const message = input.value.trim();
  if (!message) return;

  // Hide empty notice if present
  const emptyNotice = document.getElementById("aiChatEmptyNotice");
  if (emptyNotice) {
    emptyNotice.style.display = "none";
  }

  // Clear input
  input.value = "";

  // Append user bubble
  appendChatUserBubble(message);

  // Disable send button & show typing indicator
  if (sendBtn) {
    sendBtn.disabled = true;
    sendBtn.innerText = "Thinking...";
  }

  const typingId = "typing-" + Date.now();
  appendTypingIndicator(typingId);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6500);

    const res = await fetch("/api/ai-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    removeTypingIndicator(typingId);

    if (res.ok) {
      const data = await res.json();
      appendAIAssistantResponse(data);
    } else {
      appendAIAssistantFallback(message);
    }
  } catch (err) {
    console.warn("AI chat request fallback:", err.message);
    removeTypingIndicator(typingId);
    appendAIAssistantFallback(message);
  }

  if (sendBtn) {
    sendBtn.disabled = false;
    sendBtn.innerHTML = "<span>Send</span> ➔";
  }

  // Scroll to bottom
  if (chatBody) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

function appendChatUserBubble(text) {
  const chatBody = document.getElementById("aiChatBody");
  if (!chatBody) return;

  const wrap = document.createElement("div");
  wrap.className = "chat-bubble-wrap user";
  wrap.innerHTML = `
    <div class="chat-avatar-icon">👤</div>
    <div class="chat-bubble">
      <div style="font-weight: 500;">${escapeHtmlForSrcdoc(text)}</div>
    </div>
  `;
  chatBody.appendChild(wrap);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function appendTypingIndicator(id) {
  const chatBody = document.getElementById("aiChatBody");
  if (!chatBody) return;

  const wrap = document.createElement("div");
  wrap.className = "chat-bubble-wrap assistant";
  wrap.id = id;
  wrap.innerHTML = `
    <div class="chat-avatar-icon">✨</div>
    <div class="chat-bubble" style="display: flex; align-items: center; gap: 8px; color: #94a3b8;">
      <span class="ai-sparkle-dot"></span>
      <span>InspireUI AI Mentor is analyzing requirement and generating code...</span>
    </div>
  `;
  chatBody.appendChild(wrap);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTypingIndicator(id) {
  const elem = document.getElementById(id);
  if (elem && elem.parentNode) {
    elem.parentNode.removeChild(elem);
  }
}

function formatMarkdownToHtml(markdown) {
  if (!markdown) return "";
  let html = markdown
    // Escape standard brackets except intentional
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/`([^`]+)`/gim, '<code style="background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; color: #93c5fd; font-family: monospace;">$1</code>')
    .replace(/^\s*-\s+(.*$)/gim, '<li>$1</li>')
    .replace(/^\s*\*\s+(.*$)/gim, '<li>$1</li>')
    .replace(/\n\n/gim, '</p><p>')
    .replace(/\n/gim, '<br>');

  return '<div class="ai-explanation-text"><p>' + html + '</p></div>';
}

let aiGeneratedStore = {};

function appendAIAssistantResponse(data) {
  const chatBody = document.getElementById("aiChatBody");
  if (!chatBody) return;

  const wrap = document.createElement("div");
  wrap.className = "chat-bubble-wrap assistant";

  const expHtml = formatMarkdownToHtml(data.explanation || "Here is your generated UI and explanation.");

  let embedHtml = "";
  if (data.hasDesign && data.design) {
    const design = data.design;
    const embedId = "embed-" + Date.now();
    aiGeneratedStore[embedId] = design;

    // Also register into global library
    const list = getAllComponents();
    list.unshift(design);
    localStorage.setItem("inspireui_components", JSON.stringify(list));
    allComponents = list;
    renderComponentCards();

    const fullDoc = buildComponentHtml(design);

    embedHtml = `
      <div class="ai-ui-embed-card" id="${embedId}">
        <div class="embed-header">
          <div class="embed-title">
            <span>⚡ ${escapeHtmlForSrcdoc(design.name)}</span>
            <span class="embed-badge">${escapeHtmlForSrcdoc(design.category || "UI")}</span>
          </div>
          <button class="btn btn-primary btn-sm" onclick="openCodeModal('${design.id}')" title="Inspect in full workspace with responsive device switchers">
            ↗️ Full Inspection Studio
          </button>
        </div>

        <div class="embed-preview-box">
          <iframe class="embed-iframe" srcdoc="${escapeHtmlForSrcdoc(fullDoc)}" title="${design.name} Preview"></iframe>
        </div>

        <div class="embed-actions-row">
          <div class="embed-tabs">
            <button class="embed-tab-btn active" onclick="toggleEmbedCode('${embedId}', 'preview')">👁️ Live UI</button>
            <button class="embed-tab-btn" onclick="toggleEmbedCode('${embedId}', 'html')">📄 HTML</button>
            <button class="embed-tab-btn" onclick="toggleEmbedCode('${embedId}', 'css')">🎨 CSS</button>
            <button class="embed-tab-btn" onclick="toggleEmbedCode('${embedId}', 'js')">⚡ JavaScript</button>
          </div>

          <div style="display: flex; gap: 6px;">
            <button class="btn btn-secondary btn-sm" onclick="copyEmbedActiveCode('${embedId}')">
              📋 Copy Code
            </button>
            <button class="btn btn-secondary btn-sm" onclick="downloadEmbedActiveCode('${embedId}')">
              📥 Download Code
            </button>
          </div>
        </div>

        <div class="embed-code-drawer" id="${embedId}-code"></div>
      </div>
    `;
  }

  wrap.innerHTML = `
    <div class="chat-avatar-icon">✨</div>
    <div class="chat-bubble">
      ${expHtml}
      ${embedHtml}
    </div>
  `;

  chatBody.appendChild(wrap);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function appendAIAssistantFallback(prompt) {
  const fallbackDesign = generateClientUI(prompt, "Modern Dark");
  appendAIAssistantResponse({
    explanation: `### 🎓 InspireUI AI Mentor Explanation

**Overview:**
Mainne aapke liye **"${prompt}"** ka interactive UI component design aur iska pure **HTML, CSS, aur Vanilla JavaScript** code taiyyar kar diya hai.

**Code Kaise Kaam Karta Hai (Structure & Logic):**
1. **HTML Architecture**: Semantic elements ke saath accessible form inputs aur buttons use kiye gaye hain taaki viva me aap structure clear explain kar sakein.
2. **CSS Styling**: Modern dark theme tokens, Flexbox centering, clean spacing, aur responsive layout implement kiya gaya hai.
3. **JavaScript Interactivity**: Pure DOM APIs (\`document.getElementById\`, event listeners) se dynamic user action handle kiya gaya hai bina kisi heavy framework ke.

**💡 College Viva Questions & Answers:**
- **Examiner:** *"Aapne isme React ya Tailwind kyu use nahi kiya?"*
- **Aapka Answer:** *"Sir/Ma'am, standard HTML5, CSS3, aur pure Vanilla JavaScript browser me natively execute hote hain without any external bundle overhead ya build dependencies, jo core web fundamentals ki solid understanding show karta hai."*`,
    hasDesign: true,
    design: fallbackDesign
  });
}

let activeEmbedTabs = {};

function toggleEmbedCode(embedId, tab) {
  const card = document.getElementById(embedId);
  if (!card) return;
  const design = aiGeneratedStore[embedId];
  if (!design) return;

  activeEmbedTabs[embedId] = tab;

  // Toggle active button
  const btns = card.querySelectorAll(".embed-tab-btn");
  btns.forEach(btn => {
    btn.classList.toggle("active", btn.innerText.toLowerCase().includes(tab.toLowerCase()));
  });

  const previewBox = card.querySelector(".embed-preview-box");
  const codeDrawer = document.getElementById(embedId + "-code");

  if (tab === "preview") {
    if (previewBox) previewBox.style.display = "block";
    if (codeDrawer) codeDrawer.classList.remove("open");
  } else {
    if (previewBox) previewBox.style.display = "none";
    if (codeDrawer) {
      codeDrawer.classList.add("open");
      let codeText = "";
      if (tab === "html") codeText = design.html || "";
      else if (tab === "css") codeText = design.css || "";
      else if (tab === "js") codeText = design.js || "";
      codeDrawer.textContent = codeText;
    }
  }
}

function copyEmbedActiveCode(embedId) {
  const design = aiGeneratedStore[embedId];
  if (!design) return;
  const tab = activeEmbedTabs[embedId] || "preview";
  let text = "";
  if (tab === "html") text = design.html;
  else if (tab === "css") text = design.css;
  else if (tab === "js") text = design.js;
  else text = buildComponentHtml(design);

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast("Copied to clipboard!", "success"));
  } else {
    fallbackCopy(text, () => showToast("Copied to clipboard!", "success"));
  }
}

function downloadEmbedActiveCode(embedId) {
  const design = aiGeneratedStore[embedId];
  if (!design) return;
  const tab = activeEmbedTabs[embedId] || "preview";
  let code = "";
  let name = (design.id || "component") + ".html";
  let mime = "text/html;charset=utf-8";

  if (tab === "html") {
    code = design.html;
    name = "index.html";
  } else if (tab === "css") {
    code = design.css;
    name = "style.css";
    mime = "text/css;charset=utf-8";
  } else if (tab === "js") {
    code = design.js;
    name = "script.js";
    mime = "application/javascript;charset=utf-8";
  } else {
    code = buildComponentHtml(design);
    name = (design.id || "component") + ".html";
  }

  const blob = new Blob([code], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("📥 Downloaded " + name, "success");
}

async function handleMainGenerateUI() {
  const input = document.getElementById("generatorPromptInput");
  const loading = document.getElementById("mainGenLoading");
  const btn = document.getElementById("btnMainGenerate");

  const prompt = (input ? input.value : "").trim();
  if (!prompt) {
    showToast("Please describe the UI you want to generate", "error");
    if (input) input.focus();
    return;
  }

  if (loading) loading.style.display = "flex";
  if (btn) {
    btn.disabled = true;
    btn.innerText = "Generating UI...";
  }

  let design = null;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2800);

    const res = await fetch("/api/generate-ui", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, style: "Modern Dark" }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && data.design) {
        design = data.design;
      }
    }
  } catch (err) {
    console.warn("Server generation note:", err.message);
  }

  if (!design) {
    design = generateClientUI(prompt, "Modern Dark");
  }

  if (design) {
    // Prepend to stored components
    const list = getAllComponents();
    list.unshift(design);
    localStorage.setItem("inspireui_components", JSON.stringify(list));
    allComponents = list;
    
    // Refresh card grid
    renderComponentCards();

    showToast("✨ Generated: " + design.name, "success");

    // Open Code Preview Modal with Live Preview and HTML/CSS/JavaScript
    openCodeModal(design.id);
  }

  if (loading) loading.style.display = "none";
  if (btn) {
    btn.disabled = false;
    btn.innerText = "Generate UI";
  }
}

function quickFillPrompt(text) {
  const input = document.getElementById("generatorPromptInput");
  if (input) {
    input.value = text;
    handleMainGenerateUI();
  }
}

function renderPresetCards(components) {
  const grid = document.getElementById("cardsGrid");
  if (!grid) return;

  const list = components || getAllComponents();
  let html = "";
  list.forEach(c => {
    html += `
      <div class="component-card" onclick="loadUIIntoWorkspaceById('${c.id}')">
        <div class="card-preview-area">
          <div class="card-preview-inner">
            <span class="preview-mini-badge">${c.category || 'Component'}</span>
            <div class="preview-snippet-title">${c.name}</div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-header-row">
            <span class="category-pill">${c.category}</span>
            <span class="author-label">by ${c.author || 'InspireUI'}</span>
          </div>
          <h3 class="card-name">${c.name}</h3>
          <p class="card-description">${c.description || ''}</p>
          <div class="card-footer-row">
            <button type="button" class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); loadUIIntoWorkspaceById('${c.id}')">
              ⚡ Load in Generator
            </button>
            <button type="button" class="btn btn-primary btn-sm" onclick="event.stopPropagation(); openCodeModal('${c.id}')">
              Inspect Code
            </button>
          </div>
        </div>
      </div>
    `;
  });
  grid.innerHTML = html;
}

function loadUIIntoWorkspaceById(id) {
  const components = getAllComponents();
  const found = components.find(c => c.id === id);
  if (found) {
    loadUIIntoWorkspace(found);
    const ws = document.getElementById("generatorWorkspace");
    if (ws) {
      ws.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    showToast("Loaded " + found.name + " into Generator", "info");
  }
}

function filterPresets(cat) {
  const chips = document.querySelectorAll("#filterChips .chip");
  chips.forEach(c => {
    const text = c.innerText.toLowerCase();
    c.classList.toggle("active", (cat === 'all' && text === 'all') || text.includes(cat.toLowerCase()));
  });

  const components = getAllComponents();
  if (cat === 'all') {
    renderPresetCards(components);
  } else {
    const filtered = components.filter(c => (c.category || '').toLowerCase() === cat.toLowerCase());
    renderPresetCards(filtered);
  }
}

// --------------------------------------------------------------------------
// 12. DOM CONTENT LOADED EVENT LISTENER
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  initTheme();
  initializeStorage();
  updateNavbarUser();

  // Global theme toggle button
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }

  // Close modals when clicking outside dialog
  const modalBackdrop = document.getElementById("codeModal");
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", function(e) {
      if (e.target === modalBackdrop) {
        closeCodeModal();
      }
    });
  }

  const aiModalBackdrop = document.getElementById("askAIModal");
  if (aiModalBackdrop) {
    aiModalBackdrop.addEventListener("click", function(e) {
      if (e.target === aiModalBackdrop) {
        closeAskAIModal();
      }
    });
  }

  const aiMentorBackdrop = document.getElementById("aiMentorModal");
  if (aiMentorBackdrop) {
    aiMentorBackdrop.addEventListener("click", function(e) {
      if (e.target === aiMentorBackdrop) {
        closeAIMentorModal();
      }
    });
  }

  // Escape key to close modal
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeCodeModal();
      closeNewProjectModal();
      closeAskAIModal();
      closeAIMentorModal();
    }
  });
});
