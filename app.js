/* ========================================================
   RUHAMA CHANYALEW — macOS SEQUOIA PORTFOLIO ENGINE (2026)
   Authentic App Workspaces, Playable Chess, Safari Browser,
   Draggable Desktop Folders, Apple Menu & 3D Locker Scene
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const modalBackdrop = document.getElementById('caseStudyModal');
  const windowScrollBody = document.getElementById('windowScrollBody');
  const windowAddressBar = document.getElementById('windowAddressBar');
  const btnClose = document.getElementById('btnWindowClose');
  const btnClosePill = document.getElementById('btnWindowClosePill');

  const layouts = {

    // ----------------------------------------------------
    // ABOUT ME: EXACT 3D BLUE LOCKER MOODBOARD
    // ----------------------------------------------------
    about: {
      address: 'portfolio.ruhama.dev / about-me (3d-locker)',
      isLocker: true,
      html: `
        <div class="locker-scene-container">
          <button class="locker-close-btn" onclick="closeCaseStudy()" title="Close locker">✕</button>
          <div class="locker-backboard-grid"></div>

          <div class="locker-open-door">
            <div class="locker-door-sunburst">
              <div class="sunburst-core"></div>
            </div>
            <div class="locker-lock-mechanism">
              <div class="lock-keyhole"></div>
              <div class="lock-barcode-strip"></div>
            </div>
            <div class="locker-door-vents">
              <span></span><span></span><span></span><span></span>
            </div>
          </div>

          <div class="locker-name-badge">
            <div class="badge-plastic-clip"></div>
            <div class="name-badge-inner">
              <div class="badge-main-name">RUHAMA CHANYALEW</div>
              <div class="badge-sub-title">COMPUTER ENGINEERING · DEVELOPER</div>
            </div>
          </div>

          <div class="locker-photo-portrait">
            <div class="photo-tape-corner"></div>
            <img src="assets/ruhama_clean_polaroid.jpg" alt="Ruhama Chanyalew">
          </div>

          <div class="locker-birthday-stamp">
            <div class="stamp-header-text">BIRTHDAY</div>
            <div class="stamp-digital-num">2003</div>
            <div class="stamp-digital-sub">0324</div>
          </div>

          <div class="locker-sheet-im-ruhama">
            <div class="spiral-holes-left">
              <span></span><span></span><span></span><span></span>
            </div>
            <div class="im-ruhama-title">I'm Ruhama.</div>
            <div class="im-ruhama-subtitle">A Creative Systems Builder.</div>
          </div>

          <div class="locker-sticky-bio">
            I'm <span class="sticky-bio-highlight">Ruhama Chanyalew</span>, a 22-year-old 5th-year <span class="sticky-bio-highlight">Computer Engineering</span> undergraduate at <span class="sticky-bio-highlight">AASTU</span> (Addis Ababa Science and Technology University). Passionate about full-stack web architectures, defensive cybersecurity (ALX Ethiopia AGCCI), and high-voltage visual identity design. I engineer modern digital products from pixel to packet. <span style="font-size:1.1rem; color:#22440d;">▲ ▲</span>
          </div>

          <div class="locker-round-sticker" title="AASTU 2026 Sticker">
            <span class="sticker-pixel-mark">✦</span>
            <span class="sticker-curved-text">AASTU · 2026</span>
          </div>

          <div class="locker-sheet-contact">
            <div class="spiral-holes-left">
              <span></span><span></span><span></span><span></span>
            </div>
            <div class="contact-sheet-heading">Contact</div>
            <div class="contact-row-item">
              <span class="contact-icon-bubble" style="background:#28c840; color:#fff;">📞</span>
              <span>+251 9XX XXX XXX</span>
            </div>
            <div class="contact-row-item">
              <span class="contact-icon-bubble" style="background:#000; color:#fff;">Be</span>
              <span>behance.net/ruhama</span>
            </div>
            <div class="contact-row-item">
              <span class="contact-icon-bubble" style="background:#e1306c; color:#fff;">🐙</span>
              <span>github.com/Ruhama-Chanyalew</span>
            </div>
            <div class="contact-row-item">
              <span class="contact-icon-bubble" style="background:#1877f2; color:#fff;">✈️</span>
              <span>t.me/ruhama</span>
            </div>
            <div class="contact-row-item">
              <span class="contact-icon-bubble" style="background:#ea4335; color:#fff;">✉️</span>
              <span style="font-size:0.78rem;">ruhama@example.com</span>
            </div>
          </div>

          <div class="locker-sheet-skills">
            <div class="spiral-holes-top">
              <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <div class="skills-tape-tag">ENGINEER & DESIGN</div>
            <div class="skills-sheet-heading">Skills</div>

            <div class="skill-tool-item"><span style="font-size:1.2rem;">⚛️</span> React & Next.js</div>
            <div class="skill-tool-item"><span style="font-size:1.2rem;">🟢</span> Node.js & Express</div>
            <div class="skill-tool-item"><span style="font-size:1.2rem;">🐘</span> PostgreSQL & Python</div>
            <div class="skill-tool-item"><span style="font-size:1.2rem;">🛡️</span> Cybersecurity (ALX AGCCI)</div>
            <div class="skill-tool-item"><span style="font-size:1.2rem;">🎨</span> Adobe Illustrator & Figma</div>

            <div class="skill-handwritten-tags">
              <span>-Full Stack Dev</span>
              <span>-Network Defense</span>
              <span>-UI/UX Design</span>
              <span>-Database Schema</span>
              <span>-Brand Systems</span>
              <span>-Linux Security</span>
            </div>
          </div>

          <div class="locker-glass-cube">✦</div>
        </div>
      `
    },

    // ----------------------------------------------------
    // ABOUT THIS MAC: AUTHENTIC SYSTEM SPECIFICATIONS
    // ----------------------------------------------------
    about_mac: {
      address: 'About This Mac — macOS Sequoia 15.2 (2026)',
      html: `
        <div class="about-mac-container">
          <div class="about-mac-header">
            <div class="about-mac-icon"></div>
            <div class="about-mac-identity">
              <h2>MacBook Pro</h2>
              <div class="about-mac-sub">16-inch, Nov 2026</div>
            </div>
          </div>

          <div class="about-mac-specs-card">
            <div class="spec-row">
              <span class="spec-label">Chip</span>
              <span class="spec-val">Apple M5 Max (16-core CPU, 40-core GPU, 16-core NE)</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Memory</span>
              <span class="spec-val">64 GB Unified LPDDR5X (800 GB/s bandwidth)</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Startup Disk</span>
              <span class="spec-val">Macintosh HD</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">macOS</span>
              <span class="spec-val">macOS Sequoia 15.2 (Build 24C101)</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Serial Number</span>
              <span class="spec-val">C02RUHAMA2026</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Primary Engineer</span>
              <span class="spec-val" style="color:#34c759; font-weight:700;">Ruhama Chanyalew (AASTU CE)</span>
            </div>
          </div>

          <div class="about-mac-storage-section">
            <div class="storage-title-row">
              <span>Macintosh HD — 182.4 GB available of 494.38 GB</span>
              <span style="color:#0071e3; cursor:pointer;" onclick="alert('SSD Health: 100% · TRIM Active · APFS Encrypted')">Storage Settings...</span>
            </div>
            <div class="storage-meter-bar">
              <div class="storage-segment seg-macos" style="width:18%;" title="macOS System: 88 GB"></div>
              <div class="storage-segment seg-apps" style="width:26%;" title="Developer Apps (VS Code, MySQL, Docker): 128 GB"></div>
              <div class="storage-segment seg-design" style="width:16%;" title="Creative Design (Illustrator, Photoshop): 79 GB"></div>
              <div class="storage-segment seg-code" style="width:12%;" title="Git Repositories & Python Venvs: 59 GB"></div>
              <div class="storage-segment seg-free" style="width:28%;" title="Available Free Space: 182.4 GB"></div>
            </div>
            <div class="storage-legend">
              <span><span class="dot-legend" style="background:#af52de;"></span> macOS</span>
              <span><span class="dot-legend" style="background:#0071e3;"></span> Developer</span>
              <span><span class="dot-legend" style="background:#34c759;"></span> Design Assets</span>
              <span><span class="dot-legend" style="background:#ff9500;"></span> Repositories</span>
              <span><span class="dot-legend" style="background:#8e8e93;"></span> Free Space</span>
            </div>
          </div>

          <div class="about-mac-btn-row">
            <button class="mac-sys-btn" onclick="openCaseStudy('about')">👤 Engineer Profile (Locker)</button>
            <button class="mac-sys-btn" onclick="alert('macOS Sequoia 15.2 is up to date. Security updates enabled.')">Software Update...</button>
            <button class="mac-sys-btn btn-primary" onclick="alert('MacBook Pro (16-inch, 2026)\nHardware UUID: 4E5C6B7A-8D9E-0F1A-2B3C-4D5E6F7A8B9C\nBattery Health: Normal (100%)\nAll hardware diagnostics passed.')">More Info...</button>
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // SAFARI: WORKING APPLE SAFARI BROWSER
    // ----------------------------------------------------
    safari: {
      address: 'Safari — Start Page',
      html: `
        <div class="safari-browser-window">
          <!-- Safari Toolbar -->
          <div class="safari-toolbar">
            <div class="safari-nav-group">
              <button class="safari-nav-btn" id="safariBackBtn" onclick="safariGoBack()" title="Back">◀</button>
              <button class="safari-nav-btn" id="safariFwdBtn" onclick="safariGoForward()" title="Forward">▶</button>
              <button class="safari-nav-btn" onclick="safariReload()" title="Reload">⟳</button>
            </div>

            <!-- URL / Search Bar -->
            <div class="safari-url-bar-container">
              <span class="safari-url-icon" id="safariLockIcon">🔒</span>
              <input type="text" class="safari-url-input" id="safariUrlInput" value="https://google.com" onkeydown="handleSafariUrlKeyDown(event)">
              <button class="safari-url-go" onclick="handleSafariGo()" title="Go">Go ↵</button>
            </div>

            <div class="safari-actions-group">
              <button class="safari-nav-btn" onclick="safariShare()" title="Share">⬆</button>
              <button class="safari-nav-btn" onclick="safariNewTab()" title="New Tab">+</button>
            </div>
          </div>

          <!-- Safari Tabs Bar -->
          <div class="safari-tabs-strip">
            <div class="safari-tab active" id="safariTabGoogle" onclick="safariSwitchTab('google')">
              <span class="tab-favicon">🔍</span>
              <span class="tab-title">Google Search</span>
              <span class="tab-close" onclick="event.stopPropagation(); safariCloseTab('google')">✕</span>
            </div>
            <div class="safari-tab" id="safariTabGithub" onclick="safariSwitchTab('github')">
              <span class="tab-favicon">🐙</span>
              <span class="tab-title">GitHub · Ruhama</span>
              <span class="tab-close" onclick="event.stopPropagation(); safariCloseTab('github')">✕</span>
            </div>
            <div class="safari-tab" id="safariTabAastu" onclick="safariSwitchTab('aastu')">
              <span class="tab-favicon">🏛️</span>
              <span class="tab-title">AASTU Portal</span>
              <span class="tab-close" onclick="event.stopPropagation(); safariCloseTab('aastu')">✕</span>
            </div>
            <div class="safari-tab" id="safariTabFastapi" onclick="safariSwitchTab('fastapi')">
              <span class="tab-favicon">⚡</span>
              <span class="tab-title">FastAPI Docs</span>
              <span class="tab-close" onclick="event.stopPropagation(); safariCloseTab('fastapi')">✕</span>
            </div>
          </div>

          <!-- Bookmarks Bar -->
          <div class="safari-bookmarks-bar">
            <span class="bookmark-item" onclick="safariNavigate('google')">🔍 Google</span>
            <span class="bookmark-item" onclick="safariNavigate('github')">🐙 GitHub</span>
            <span class="bookmark-item" onclick="safariNavigate('aastu')">🏛️ AASTU Portal</span>
            <span class="bookmark-item" onclick="safariNavigate('fastapi')">⚡ FastAPI Swagger</span>
            <span class="bookmark-item" onclick="safariNavigate('behance')">🎨 Behance SUKU</span>
            <span class="bookmark-item" onclick="safariNavigate('start')">⭐️ Start Page</span>
          </div>

          <!-- Safari Live Web View Stage -->
          <div class="safari-web-viewport" id="safariViewport">
            <!-- Dynamic Web View Injected by Safari Engine -->
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // GRAPHICS DESIGN: SUKU PACKAGING DESIGN SHOWCASE
    // ----------------------------------------------------
    design: {
      address: 'portfolio.ruhama.dev / suku-packaging-design',
      html: `
        <div class="suku-case-container">
          <div class="suku-top-banner">
            <div class="suku-brand-row">
              <div class="suku-sd-icon">SUKU</div>
              <div class="suku-title-text">
                <h2>SUKU</h2>
                <span>PACKAGING DESIGN</span>
              </div>
            </div>
            <div class="suku-concept-card">
              SukuSuku in Japanese means 'healthy growth.' Therefore, Lotte named its new product SukuSuku with the hope of helping children grow quickly and healthily. This is not only a very tasty candy but also contains important nutrients for children's development.
            </div>
          </div>

          <div class="suku-image-showcase">
            <img src="assets/suku_packaging.jpg" alt="SUKU Packaging Design Case Study">
          </div>

          <div class="suku-blueprint-section">
            <div class="suku-specimen-grid">
              <div>
                <div class="suku-logo-big">SUKU</div>
                <div class="suku-vietnamese-sub">KẸO CHANH MUỐI</div>
                <div class="suku-vietnamese-trans">Salt Lemon Candy · Packaging System</div>
              </div>

              <div class="suku-palette-badges">
                <div class="suku-badge-item">
                  <div class="suku-badge-face" style="color:#2c4a9f;">(^‿^)</div>
                  <div class="suku-badge-hex">#2c4a9f</div>
                  <div style="height:14px; background:#2c4a9f; border-radius:3px; margin-top:4px;"></div>
                </div>
                <div class="suku-badge-item">
                  <div class="suku-badge-face" style="color:#73bb44;">(◕‿◕)</div>
                  <div class="suku-badge-hex">#73bb44</div>
                  <div style="height:14px; background:#73bb44; border-radius:3px; margin-top:4px;"></div>
                </div>
                <div class="suku-badge-item">
                  <div class="suku-badge-face" style="color:#92c83e;">(¬‿¬)</div>
                  <div class="suku-badge-hex">#92c83e</div>
                  <div style="height:14px; background:#92c83e; border-radius:3px; margin-top:4px;"></div>
                </div>
                <div class="suku-badge-item">
                  <div class="suku-badge-face" style="color:#d3de28;">(★‿★)</div>
                  <div class="suku-badge-hex">#d3de28</div>
                  <div style="height:14px; background:#d3de28; border-radius:3px; margin-top:4px;"></div>
                </div>
              </div>
            </div>

            <div class="suku-cta-bar">
              <div>
                <strong style="color:#1f1f1f; font-size:1.1rem;">Graphic Design Portfolio Deck</strong>
                <p style="font-size:0.85rem; color:#645e57; margin-top:3px;">Curated brand identities, packaging mockups, and vector typography systems.</p>
              </div>
              <button class="btn-suku-download" onclick="alert('Complete PDF Graphic Design Portfolio deck is ready! Reach out to ruhama@example.com for the high-res file.');">
                📄 Download Full PDF Deck
              </button>
            </div>
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // FULL STACK: INTERNAL DATA REQUEST MANAGEMENT SYSTEM
    // ----------------------------------------------------
        // ----------------------------------------------------
    // FULL STACK: CLEAN MULTI-PROJECT SHOWCASE (DISTORTION-FREE)
    // ----------------------------------------------------
    fullstack: {
      address: 'Finder — Documents / full_stack_projects',
      html: `
        <div class="fullstack-showcase-container">
          <!-- Folder Header -->
          <div class="fullstack-header-bar">
            <div class="fullstack-breadcrumb">📁 Ruhama's Workspace › Desktop › full_stack</div>
            <h1>Full-Stack Systems & Web Architectures</h1>
            <p>Production multi-role portals, asynchronous REST microservices, relational database schemas, and responsive web user experiences.</p>
            <div class="fullstack-tech-pills">
              <span class="fs-pill active">● FastAPI (Python 3.12)</span>
              <span class="fs-pill active">● React 18 & TypeScript</span>
              <span class="fs-pill active">● MySQL & SQLAlchemy</span>
              <span class="fs-pill">JWT Bearer Auth</span>
              <span class="fs-pill">Uvicorn ASGI</span>
              <span class="fs-pill">SMTP Mailer</span>
              <span class="fs-pill">Vite Build</span>
            </div>
          </div>

          <!-- Flagship Capstone: Internal Data Request System -->
          <div class="fs-flagship-card">
            <div class="fs-flagship-info">
              <span class="fs-flagship-badge">Featured Capstone</span>
              <h2 class="fs-flagship-title">Internal Data Request Management System</h2>
              <p class="fs-flagship-desc">
                An enterprise-grade operational workflow portal connecting departmental requesters, assigned data engineers, and managers. Streamlines request lifecycles, automated status alerts, and strict role-based access control.
              </p>

              <div class="fs-metrics-grid">
                <div class="fs-metric-box">
                  <div class="fs-metric-val">3</div>
                  <div class="fs-metric-label">Role Portals</div>
                </div>
                <div class="fs-metric-box">
                  <div class="fs-metric-val">99.4%</div>
                  <div class="fs-metric-label">SLA Uptime</div>
                </div>
                <div class="fs-metric-box">
                  <div class="fs-metric-val">ACID</div>
                  <div class="fs-metric-label">MySQL Transactions</div>
                </div>
              </div>

              <div class="fs-action-row">
                <a href="https://github.com/Ruhama-Chanyalew/request_system_frontend" target="_blank" class="fs-btn-primary">
                  <span>Frontend Repo</span> ↗
                </a>
                <a href="https://github.com/Ruhama-Chanyalew/request_system_backend" target="_blank" class="fs-btn-secondary">
                  <span>Backend Repo</span> ↗
                </a>
                <button class="fs-btn-secondary" onclick="openCaseStudy('safari'); setTimeout(() => safariNavigate('fastapi'), 150);">
                  <span>⚡ Test API in Safari</span> →
                </button>
              </div>
            </div>

            <!-- Interactive UI Mockup -->
            <div class="fs-preview-window">
              <div class="fs-preview-top">
                <span style="font-weight:700; font-size:0.8rem; color:#333;">Request Portal · Live Monitor</span>
                <span style="font-size:0.72rem; color:#28a745; font-weight:700;">● API Connected</span>
              </div>
              <div class="fs-preview-body">
                <table class="fs-request-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Request Title</th>
                      <th>Urgency</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="font-weight:700;">#101</td>
                      <td>Student Records Export</td>
                      <td><span style="background:#fee2e2; color:#dc2626; padding:2px 8px; border-radius:12px; font-weight:700; font-size:0.7rem;">Critical</span></td>
                      <td><span style="color:#d97706; font-weight:600;">Pending</span></td>
                    </tr>
                    <tr>
                      <td style="font-weight:700;">#102</td>
                      <td>Campus Wi-Fi Security Audit</td>
                      <td><span style="background:#ffedd5; color:#ea580c; padding:2px 8px; border-radius:12px; font-weight:700; font-size:0.7rem;">High</span></td>
                      <td><span style="color:#2563eb; font-weight:600;">In Progress</span></td>
                    </tr>
                    <tr>
                      <td style="font-weight:700;">#103</td>
                      <td>FastAPI Schema Migration</td>
                      <td><span style="background:#fef9c3; color:#ca8a04; padding:2px 8px; border-radius:12px; font-weight:700; font-size:0.7rem;">Medium</span></td>
                      <td><span style="color:#16a34a; font-weight:600;">Completed</span></td>
                    </tr>
                  </tbody>
                </table>
                <div style="margin-top:12px; font-size:0.72rem; color:#777; display:flex; justify-content:space-between;">
                  <span>Engine: InnoDB · MySQL 8.0</span>
                  <span>FastAPI v0.110.0</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Secondary Projects Subgrid -->
          <div class="fs-secondary-grid">
            <!-- Project 2: Great -->
            <div class="fs-subproject-card">
              <div>
                <div style="font-size:0.7rem; color:#888; font-family:'JetBrains Mono'; margin-bottom:4px;">WEB APPLICATION</div>
                <h3>Great — Dynamic Web Systems</h3>
                <p>Interactive web applications combining Python server logic and modular JavaScript client scripting. Built for dynamic DOM manipulation, real-time client-side feedback, and asynchronous API interactions.</p>
                <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:16px;">
                  <span class="fs-pill">Python</span>
                  <span class="fs-pill">JavaScript</span>
                  <span class="fs-pill">Async/Await</span>
                  <span class="fs-pill">REST APIs</span>
                </div>
              </div>
              <a href="https://github.com/Ruhama-Chanyalew/Great" target="_blank" class="fs-btn-secondary" style="width:fit-content;">
                <span>Inspect Repository</span> ↗
              </a>
            </div>

            <!-- Project 3: Birthday Surprise -->
            <div class="fs-subproject-card">
              <div>
                <div style="font-size:0.7rem; color:#888; font-family:'JetBrains Mono'; margin-bottom:4px;">INTERACTIVE EXPERIENCE</div>
                <h3>Birthday Surprise Animation</h3>
                <p>An interactive, responsive celebration application featuring choreographed CSS 3D keyframe animations, audio synchronization, particle effects, and adaptive mobile viewport scaling.</p>
                <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:16px;">
                  <span class="fs-pill">CSS 3D Physics</span>
                  <span class="fs-pill">Keyframes</span>
                  <span class="fs-pill">Web Audio</span>
                  <span class="fs-pill">Vanilla JS</span>
                </div>
              </div>
              <a href="https://github.com/Ruhama-Chanyalew/birthday-surprise" target="_blank" class="fs-btn-secondary" style="width:fit-content;">
                <span>Inspect Repository</span> ↗
              </a>
            </div>
          </div>

          <!-- Add / Submit More Projects Card -->
          <div class="fs-submit-card">
            <div>
              <h4>➕ Have More Full-Stack Projects to Add?</h4>
              <p>You can send GitHub repository links, live deployment URLs (Render, Vercel, Netlify), or UI screenshots directly into our chat, and they will be formatted into custom project showcase cards right here!</p>
            </div>
            <button class="fs-btn-primary" onclick="alert('To add projects:\n1. Share your GitHub link or project name in chat.\n2. Include a short description or live link.\n3. Drag/drop any screenshots you want displayed!')">
              How to Add ℹ️
            </button>
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // CYBERSECURITY: EDITORIAL LAB
    // ----------------------------------------------------
    cyber: {
      address: 'portfolio.ruhama.dev / cybersecurity-lab',
      html: `
        <div class="editorial-hero-split">
          <div class="editorial-card-ice">
            <div>
              <div class="card-sparkle">✦</div>
              <h1 class="editorial-heading-serif" style="color:#7b91ba;">Shield<br>The Digital.</h1>
              <p class="editorial-subtitle-sans">
                Defensive cybersecurity analysis and server hardening through the ALX Ethiopia AGCCI program.
              </p>
            </div>
            <div>
              <button class="btn-pill-crimson" style="background:#7b91ba;" onclick="runTerminalScan()">Run Network Scan →</button>
            </div>
          </div>

          <div class="editorial-visual-card" style="padding:0; background:#181926;">
            <div class="editorial-terminal-box" id="cyberTerminal" style="width:100%; border-radius:24px;">
              <div style="color:#7b91ba; margin-bottom:10px;">[AUDIT] Live System Defense Report</div>
              <div><span style="color:#ff5f57;">root@aastu-secops:~$</span> <span style="color:#c2d9eb;">nmap -sV target.local</span></div>
              <div style="color:#a6e3a1; margin-top:6px;">✓ Port 443 (HTTPS) TLS 1.3 Strict Enforced</div>
              <div style="color:#a6e3a1;">✓ Content-Security-Policy: default-src 'self' [ACTIVE]</div>
              <div style="color:#a6e3a1;">✓ OWASP Top 10 Sanitization [VERIFIED]</div>
              <div style="color:#f9e2af; margin-top:8px;">! Vulnerabilities: 0 Critical | 0 High</div>
              <div style="margin-top:10px; color:#7b91ba;">Host status: HARDENED & SECURE</div>
            </div>
          </div>
        </div>

        <div class="editorial-section-title">
          <h3><span>✦</span> Defensive Pillars</h3>
          <span style="font-family:'JetBrains Mono'; font-size:0.8rem; color:#d80c09;">ALX AGCCI Trainee</span>
        </div>

        <div class="four-card-pastel-grid">
          <div class="pastel-object-card bg-ice">
            <div class="floating-plus-btn">+</div>
            <div style="font-size:2rem;">🛡️</div>
            <div>
              <div class="card-object-title">ALX AGCCI Program</div>
              <div class="card-object-price">Foundation</div>
              <p style="font-size:0.8rem; color:#645e57; margin-top:6px;">African Girls Can Code Initiative cybersecurity program covering network protocols and defense.</p>
            </div>
          </div>

          <div class="pastel-object-card bg-blush">
            <div class="floating-plus-btn">+</div>
            <div style="font-size:2rem;">🌐</div>
            <div>
              <div class="card-object-title">Network Protocols</div>
              <div class="card-object-price">Traffic Analysis</div>
              <p style="font-size:0.8rem; color:#645e57; margin-top:6px;">TCP/IP handshakes, DNS inspection, TLS certificates, and Wireshark packet capture.</p>
            </div>
          </div>

          <div class="pastel-object-card bg-peach">
            <div class="floating-plus-btn">+</div>
            <div style="font-size:2rem;">🔒</div>
            <div>
              <div class="card-object-title">OWASP Hardening</div>
              <div class="card-object-price">Web App Sec</div>
              <p style="font-size:0.8rem; color:#645e57; margin-top:6px;">Input validation, SQL injection prevention, XSS mitigation, and safe session storage.</p>
            </div>
          </div>

          <div class="pastel-object-card bg-apricot">
            <div class="floating-plus-btn">+</div>
            <div style="font-size:2rem;">🐧</div>
            <div>
              <div class="card-object-title">Linux Systems</div>
              <div class="card-object-price">Server Admin</div>
              <p style="font-size:0.8rem; color:#645e57; margin-top:6px;">Permissions auditing, SSH key-pair configuration, and firewall rules via UFW/iptables.</p>
            </div>
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // VS CODE: REAL AUTHENTIC IDE WORKSPACE
    // ----------------------------------------------------
    vscode: {
      address: 'Visual Studio Code — App.tsx — ruhama-workspace',
      html: `
        <div class="real-vscode-workspace">
          <div class="vscode-layout-split">
            <div class="vscode-activity-rail">
              <span class="active" title="Explorer">📁</span>
              <span title="Search">🔍</span>
              <span title="Source Control">🌿</span>
              <span title="Run and Debug">🐞</span>
              <span title="Extensions">🧩</span>
            </div>

            <div class="vscode-sidebar-tree">
              <div class="vscode-tree-title">EXPLORER: RUHAMA-WORKSPACE</div>
              <div class="vscode-tree-node active" id="treeNodeApp" onclick="switchVSCodeFile('app')">
                <span>⚛️</span> App.tsx
              </div>
              <div class="vscode-tree-node" id="treeNodeMain" onclick="switchVSCodeFile('main')">
                <span>🐍</span> main.py
              </div>
              <div class="vscode-tree-node" id="treeNodeDb" onclick="switchVSCodeFile('db')">
                <span>🐬</span> database.py
              </div>
              <div class="vscode-tree-node" id="treeNodePkg" onclick="switchVSCodeFile('pkg')">
                <span>📦</span> package.json
              </div>
              <div class="vscode-tree-node" id="treeNodeReq" onclick="switchVSCodeFile('req')">
                <span>📄</span> requirements.txt
              </div>
            </div>

            <div class="vscode-main-editor">
              <div class="vscode-tabs-bar">
                <div class="vscode-tab-header active" id="vscTabApp" onclick="switchVSCodeFile('app')">
                  <span>⚛️</span> App.tsx <span style="font-size:0.7rem; margin-left:4px;">✕</span>
                </div>
                <div class="vscode-tab-header inactive" id="vscTabMain" onclick="switchVSCodeFile('main')">
                  <span>🐍</span> main.py <span style="font-size:0.7rem; margin-left:4px;">✕</span>
                </div>
                <div class="vscode-tab-header inactive" id="vscTabDb" onclick="switchVSCodeFile('db')">
                  <span>🐬</span> database.py <span style="font-size:0.7rem; margin-left:4px;">✕</span>
                </div>
              </div>

              <div class="vscode-editor-scroll" id="vscodeEditorContent">
                <div><span style="color:#6a9955;">// Ruhama Chanyalew · Portfolio (2026)</span></div>
                <div><span style="color:#c586c0;">import</span> React, { useState } <span style="color:#c586c0;">from</span> <span style="color:#ce9178;">'react'</span>;</div>
                <div><span style="color:#c586c0;">import</span> { AASTU_Student } <span style="color:#c586c0;">from</span> <span style="color:#ce9178;">'@aastu/engineering'</span>;</div>
                <br>
                <div><span style="color:#569cd6;">export const</span> <span style="color:#4ec9b0;">RuhamaPortfolio</span>: React.FC = () =&gt; {</div>
                <div>&nbsp;&nbsp;<span style="color:#569cd6;">const</span> [engineer] = useState&lt;AASTU_Student&gt;({</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;name: <span style="color:#ce9178;">"Ruhama Chanyalew"</span>,</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;education: <span style="color:#ce9178;">"AASTU Computer Engineering (5th Year Finalist)"</span>,</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;disciplines: [<span style="color:#ce9178;">"Full-Stack Web"</span>, <span style="color:#ce9178;">"Defensive Cybersecurity"</span>, <span style="color:#ce9178;">"Graphic Design"</span>],</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;coreStack: [<span style="color:#ce9178;">"FastAPI"</span>, <span style="color:#ce9178;">"React"</span>, <span style="color:#ce9178;">"MySQL"</span>, <span style="color:#ce9178;">"Python"</span>, <span style="color:#ce9178;">"TypeScript"</span>]</div>
                <div>&nbsp;&nbsp;});</div>
                <br>
                <div>&nbsp;&nbsp;<span style="color:#c586c0;">return</span> (</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#4ec9b0;">MacBookEnvironment</span> user={engineer.name} status=<span style="color:#ce9178;">"Active"</span>&gt;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#4ec9b0;">DockApps</span> apps={[<span style="color:#ce9178;">"Safari"</span>, <span style="color:#ce9178;">"VSCode"</span>, <span style="color:#ce9178;">"Illustrator"</span>, <span style="color:#ce9178;">"Photoshop"</span>, <span style="color:#ce9178;">"GitHub"</span>, <span style="color:#ce9178;">"MySQL"</span>, <span style="color:#ce9178;">"Chess"</span>]} /&gt;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#4ec9b0;">MacBookEnvironment</span>&gt;</div>
                <div>&nbsp;&nbsp;);</div>
                <div>};</div>
              </div>

              <div class="vscode-terminal-bottom">
                <div style="display:flex; justify-content:space-between; color:#969696; font-size:0.75rem; margin-bottom:6px; border-bottom:1px solid #2a2a2a; padding-bottom:4px;">
                  <span>TERMINAL · zsh</span>
                  <span style="color:#4ec9b0;">● Node 20.x · Python 3.12</span>
                </div>
                <div style="color:#4ec9b0;">ruhama@MacBook-Pro:~/portfolio $ <span style="color:#cccccc;">uvicorn main:app --reload</span></div>
                <div style="color:#6a9955;">INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)</div>
                <div style="color:#6a9955;">INFO:     Application startup complete. FastAPI v0.110.0 ready.</div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // ADOBE ILLUSTRATOR: REAL VECTOR STAGE
    // ----------------------------------------------------
    illustrator: {
      address: 'Adobe Illustrator 2026 — suku_packaging_vector.ai @ 100% (CMYK/Preview)',
      html: `
        <div class="real-ai-workspace">
          <div class="ai-toolbar-left">
            <div class="ai-tool-icon active" title="Selection Tool (V)">↖</div>
            <div class="ai-tool-icon" title="Direct Selection (A)">↗</div>
            <div class="ai-tool-icon" title="Pen Tool (P)">✒️</div>
            <div class="ai-tool-icon" title="Curvature Tool (Shift+~)">〰️</div>
            <div class="ai-tool-icon" title="Rectangle Tool (M)">▭</div>
            <div class="ai-tool-icon" title="Ellipse Tool (L)">◯</div>
            <div class="ai-tool-icon" title="Paintbrush Tool (B)">🖌️</div>
            <div class="ai-tool-icon" title="Type Tool (T)">T</div>
            <div class="ai-tool-icon" title="Eyedropper (I)">💧</div>
            <div class="ai-tool-icon" title="Gradient (G)">▦</div>
            <div class="ai-tool-icon" title="Hand Tool (H)">✋</div>
            <div class="ai-tool-icon" title="Zoom (Z)">🔍</div>
          </div>

          <div class="ai-artboard-stage">
            <div class="ai-vector-canvas">
              <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:16px;">
                <span style="font-family:'Fraunces'; font-weight:900; font-size:1.8rem; color:#73bb44;">SUKU SUKU</span>
                <span style="font-family:'JetBrains Mono'; font-size:0.75rem; background:#73bb44; color:#fff; padding:3px 10px; border-radius:50px;">Vector CMYK</span>
              </div>
              <div style="text-align:center; position:relative; padding:20px; background:#fbfdf9; border:1px dashed #73bb44; border-radius:8px;">
                <img src="assets/suku_packaging.jpg" alt="Vector Art" style="max-width:100%; height:auto; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
                <div style="position:absolute; top:28px; left:35px; width:8px; height:8px; background:#007acc; border:1px solid #fff;"></div>
                <div style="position:absolute; top:28px; right:35px; width:8px; height:8px; background:#007acc; border:1px solid #fff;"></div>
                <div style="position:absolute; bottom:35px; left:45px; width:8px; height:8px; background:#007acc; border:1px solid #fff;"></div>
                <div style="position:absolute; bottom:35px; right:45px; width:8px; height:8px; background:#007acc; border:1px solid #fff;"></div>
              </div>
              <div style="display:flex; justify-content:space-between; margin-top:14px; font-family:'JetBrains Mono'; font-size:0.75rem; color:#666;">
                <span>Path: 48 anchor points</span>
                <span>Handles: Smooth Bezier</span>
                <span>Fill: Spot #73bb44</span>
              </div>
            </div>
          </div>

          <div class="ai-panel-right">
            <div>
              <div style="font-size:0.75rem; font-weight:700; color:#aaa; margin-bottom:8px; letter-spacing:0.5px;">PROPERTIES</div>
              <div style="background:#242424; padding:10px; border-radius:6px; font-size:0.78rem;">
                <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                  <span>Width:</span> <span style="color:#ff9a00;">520.0 pt</span>
                </div>
                <div style="display:flex; justify-content:space-between;">
                  <span>Height:</span> <span style="color:#ff9a00;">410.0 pt</span>
                </div>
              </div>
            </div>

            <div>
              <div style="font-size:0.75rem; font-weight:700; color:#aaa; margin-bottom:8px; letter-spacing:0.5px;">COLOR SWATCHES</div>
              <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:6px;">
                <div style="height:28px; background:#73bb44; border-radius:4px; border:1px solid #555;" title="#73bb44"></div>
                <div style="height:28px; background:#2c4a9f; border-radius:4px; border:1px solid #555;" title="#2c4a9f"></div>
                <div style="height:28px; background:#92c83e; border-radius:4px; border:1px solid #555;" title="#92c83e"></div>
                <div style="height:28px; background:#d3de28; border-radius:4px; border:1px solid #555;" title="#d3de28"></div>
              </div>
            </div>

            <div>
              <div style="font-size:0.75rem; font-weight:700; color:#aaa; margin-bottom:8px; letter-spacing:0.5px;">LAYERS</div>
              <div style="background:#242424; padding:8px; border-radius:6px; font-size:0.76rem; display:flex; flex-direction:column; gap:6px;">
                <div style="display:flex; align-items:center; gap:6px; color:#ff9a00;">👁️ 📁 Packaging Layout</div>
                <div style="display:flex; align-items:center; gap:6px; padding-left:14px;">👁️ ✏️ Mascot Vector</div>
                <div style="display:flex; align-items:center; gap:6px; padding-left:14px;">👁️ 🔤 Typography Path</div>
                <div style="display:flex; align-items:center; gap:6px;">👁️ 🔲 Die-cut Dieline</div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // ADOBE PHOTOSHOP: REAL RETOUCHING WORKSPACE
    // ----------------------------------------------------
    photoshop: {
      address: 'Adobe Photoshop 2026 — ruhama_portrait_retouch.psd @ 66.7% (RGB/8)',
      html: `
        <div class="real-ps-workspace">
          <div class="ai-toolbar-left" style="background:#2b2b2b;">
            <div class="ai-tool-icon active" style="color:#31a8ff;" title="Move Tool (V)">✥</div>
            <div class="ai-tool-icon" title="Marquee (M)">⬚</div>
            <div class="ai-tool-icon" title="Lasso (L)">➰</div>
            <div class="ai-tool-icon" title="Quick Selection (W)">🪄</div>
            <div class="ai-tool-icon" title="Crop (C)">⧉</div>
            <div class="ai-tool-icon" title="Spot Healing (J)">🩹</div>
            <div class="ai-tool-icon" title="Clone Stamp (S)">🖃</div>
            <div class="ai-tool-icon" title="Eraser (E)">▱</div>
            <div class="ai-tool-icon" title="Blur / Sharpen (R)">💧</div>
          </div>

          <div class="ps-canvas-stage">
            <div class="ps-image-frame">
              <img src="assets/ruhama_clean_polaroid.jpg" alt="Ruhama Photoshop" style="width:100%; height:auto; display:block;">
            </div>
          </div>

          <div class="ps-layers-panel">
            <div style="font-size:0.75rem; font-weight:700; color:#aaa; margin-bottom:4px; letter-spacing:0.5px;">ADJUSTMENTS</div>
            <div style="background:#1e1e1e; padding:8px; border-radius:6px; font-size:0.76rem; display:flex; justify-content:space-between;">
              <span>Curves 1</span>
              <span style="color:#31a8ff;">RGB Curves</span>
            </div>

            <div style="font-size:0.75rem; font-weight:700; color:#aaa; margin:10px 0 4px; letter-spacing:0.5px;">LAYERS (Blend: Normal)</div>
            <div style="background:#1e1e1e; padding:8px; border-radius:6px; font-size:0.76rem; display:flex; flex-direction:column; gap:6px;">
              <div style="display:flex; align-items:center; justify-content:space-between; color:#31a8ff;">
                <span>👁️ Curves 1 (Adjustment)</span>
                <span>100%</span>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between;">
                <span>👁️ Retouching & Soft Skin</span>
                <span>80%</span>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between;">
                <span>👁️ Cardigan Color Grading</span>
                <span>90%</span>
              </div>
              <div style="display:flex; align-items:center; justify-content:space-between; color:#888;">
                <span>🔒 Background Layer 0</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // GITHUB: PIXEL-PERFECT CLONE OF RUHAMA'S GITHUB
    // ----------------------------------------------------
    github: {
      address: 'github.com / Ruhama-Chanyalew',
      html: `
        <div class="gh-app-window">
          <div class="gh-nav-bar">
            <div class="gh-nav-left">
              <svg height="32" viewBox="0 0 16 16" width="32" fill="#f0f6fc">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              <input type="text" class="gh-nav-search" value="Type / to search" readonly>
              <div class="gh-nav-links">
                <span>Pull requests</span>
                <span>Issues</span>
                <span>Codespaces</span>
                <span>Marketplace</span>
                <span>Explore</span>
              </div>
            </div>
            <div>
              <a href="https://github.com/Ruhama-Chanyalew" target="_blank" style="background:#238636; color:#fff; padding:6px 14px; border-radius:6px; font-weight:600; text-decoration:none; font-size:0.82rem;">Open Official Profile ↗</a>
            </div>
          </div>

          <div class="gh-page-body">
            <div class="gh-profile-sidebar">
              <div class="gh-avatar-wrap">
                <img src="assets/ruhama_clean_polaroid.jpg" alt="Ruhama Chanyalew" class="gh-avatar-img">
                <div class="gh-avatar-badge" title="Focus: Full-Stack Engineering">🎯</div>
              </div>
              <div class="gh-names">
                <div class="gh-fullname">Ruhama Chanyalew</div>
                <div class="gh-username">Ruhama-Chanyalew</div>
              </div>
              <a href="https://github.com/Ruhama-Chanyalew" target="_blank" class="gh-btn-follow" style="text-decoration:none;">Follow</a>
              <div class="gh-bio-text">
                5th-year Computer Engineering undergraduate at AASTU. Building full-stack web architectures with FastAPI, React, and MySQL, alongside defensive cybersecurity research.
              </div>
              <div class="gh-meta-info">
                <div>👥 <strong>14</strong> followers · <strong>8</strong> following</div>
                <div>🏢 Addis Ababa Science and Technology University (AASTU)</div>
                <div>📍 Addis Ababa, Ethiopia</div>
                <div>🔗 portfolio.ruhama.dev</div>
              </div>
            </div>

            <div>
              <div class="gh-tabs-nav">
                <div class="gh-tab-item active"><span>📖 Overview</span></div>
                <div class="gh-tab-item"><span>📦 Repositories</span><span class="gh-counter-badge">5</span></div>
                <div class="gh-tab-item"><span>📊 Projects</span></div>
                <div class="gh-tab-item"><span>⭐ Stars</span></div>
              </div>

              <div class="gh-pinned-header">
                <span>Pinned</span>
                <span style="font-size:0.75rem;">Customize your pins</span>
              </div>

              <div class="gh-pinned-grid">
                <div class="gh-repo-card">
                  <div>
                    <div class="gh-repo-title-row">
                      <a href="https://github.com/Ruhama-Chanyalew/request_system_frontend" target="_blank" class="gh-repo-link">request_system_frontend</a>
                      <span class="gh-pill-public">Public</span>
                    </div>
                    <div class="gh-repo-desc">
                      Internal Data Request Management System - Frontend Multi-Role Portal (Requester, Engineer, Manager).
                    </div>
                  </div>
                  <div class="gh-repo-footer">
                    <span class="gh-lang-indicator"><span class="gh-lang-dot" style="background:#e34c26;"></span> HTML</span>
                    <span>★ 0</span><span>⑂ 0</span>
                  </div>
                </div>

                <div class="gh-repo-card">
                  <div>
                    <div class="gh-repo-title-row">
                      <a href="https://github.com/Ruhama-Chanyalew/request_system_backend" target="_blank" class="gh-repo-link">request_system_backend</a>
                      <span class="gh-pill-public">Public</span>
                    </div>
                    <div class="gh-repo-desc">
                      Internal Data Request Management System - FastAPI backend microservice with MySQL persistence and JWT authentication.
                    </div>
                  </div>
                  <div class="gh-repo-footer">
                    <span class="gh-lang-indicator"><span class="gh-lang-dot" style="background:#3572A5;"></span> Python</span>
                    <span>★ 0</span><span>⑂ 0</span>
                  </div>
                </div>

                <div class="gh-repo-card">
                  <div>
                    <div class="gh-repo-title-row">
                      <a href="https://github.com/Ruhama-Chanyalew/Great" target="_blank" class="gh-repo-link">Great</a>
                      <span class="gh-pill-public">Public</span>
                    </div>
                    <div class="gh-repo-desc">
                      Web programming with Python and JavaScript. Interactive full-stack applications.
                    </div>
                  </div>
                  <div class="gh-repo-footer">
                    <span class="gh-lang-indicator"><span class="gh-lang-dot" style="background:#f1e05a;"></span> JavaScript</span>
                    <span>★ 0</span><span>⑂ 0</span>
                  </div>
                </div>

                <div class="gh-repo-card">
                  <div>
                    <div class="gh-repo-title-row">
                      <a href="https://github.com/Ruhama-Chanyalew/birthday-surprise" target="_blank" class="gh-repo-link">birthday-surprise</a>
                      <span class="gh-pill-public">Public</span>
                    </div>
                    <div class="gh-repo-desc">
                      Interactive celebration animation and responsive visual web experience.
                    </div>
                  </div>
                  <div class="gh-repo-footer">
                    <span class="gh-lang-indicator"><span class="gh-lang-dot" style="background:#563d7c;"></span> CSS</span>
                    <span>★ 0</span><span>⑂ 0</span>
                  </div>
                </div>
              </div>

              <div class="gh-heatmap-card">
                <div style="font-size:0.85rem; font-weight:600; color:#f0f6fc; margin-bottom:4px;">
                  512 contributions in the last year
                </div>
                <div class="gh-heatmap-grid" id="ghHeatmapGrid"></div>
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#8b949e; margin-top:8px;">
                  <span>Learn how we count contributions</span>
                  <div style="display:flex; align-items:center; gap:4px;">
                    <span>Less</span>
                    <span style="width:10px; height:10px; background:#161b22; border-radius:2px;"></span>
                    <span style="width:10px; height:10px; background:#0e4429; border-radius:2px;"></span>
                    <span style="width:10px; height:10px; background:#006d32; border-radius:2px;"></span>
                    <span style="width:10px; height:10px; background:#26a641; border-radius:2px;"></span>
                    <span style="width:10px; height:10px; background:#39d353; border-radius:2px;"></span>
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // MYSQL: REAL MYSQL WORKBENCH INTERFACE
    // ----------------------------------------------------
    mysql: {
      address: 'MySQL Workbench 8.0 — Localhost:3306 (request_db) — Query 1*',
      html: `
        <div class="real-sql-workspace">
          <div class="sql-sidebar-nav">
            <div style="font-weight:700; color:#00d4b2; margin-bottom:10px; font-size:0.82rem;">SCHEMAS: request_db</div>
            <div style="display:flex; flex-direction:column; gap:6px;">
              <div style="color:#e48e00;">📁 Tables</div>
              <div style="padding-left:14px; color:#d1d5db;">📄 requests</div>
              <div style="padding-left:14px; color:#d1d5db;">📄 users</div>
              <div style="padding-left:14px; color:#d1d5db;">📄 departments</div>
              <div style="padding-left:14px; color:#d1d5db;">📄 assignments</div>
              <div style="padding-left:14px; color:#d1d5db;">📄 audit_logs</div>
              <div style="color:#e48e00; margin-top:6px;">📁 Views</div>
              <div style="color:#e48e00;">📁 Stored Procedures</div>
            </div>
          </div>

          <div class="sql-main-stage">
            <div style="background:#141820; padding:8px 14px; border-bottom:1px solid #28303d; display:flex; gap:12px; align-items:center;">
              <button onclick="executeMySQLQuery()" style="background:#00d4b2; color:#111; font-weight:800; border:none; padding:5px 14px; border-radius:4px; cursor:pointer; font-size:0.78rem;">⚡ Execute (Ctrl+Enter)</button>
              <span style="font-size:0.75rem; color:#888;">Database: request_db · Engine: InnoDB</span>
            </div>

            <div class="sql-editor-box">
              <span style="color:#c586c0;">SELECT</span> r.id, r.title, r.urgency, r.status, u.username <span style="color:#c586c0;">AS</span> requester, r.created_at<br>
              <span style="color:#c586c0;">FROM</span> requests r<br>
              <span style="color:#c586c0;">JOIN</span> users u <span style="color:#c586c0;">ON</span> r.requester_id = u.id<br>
              <span style="color:#c586c0;">WHERE</span> r.status = <span style="color:#a6e3a1;">'Pending'</span><br>
              <span style="color:#c586c0;">ORDER BY</span> r.created_at <span style="color:#c586c0;">DESC</span>;
            </div>

            <div class="sql-result-table">
              <table class="sql-table" id="sqlResultTable">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>urgency</th>
                    <th>status</th>
                    <th>requester</th>
                    <th>created_at</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>101</td>
                    <td>Student Record Export - AASTU Portal</td>
                    <td><span style="color:#f38ba8; font-weight:700;">Critical</span></td>
                    <td><span style="color:#f9e2af;">Pending</span></td>
                    <td>deans_office</td>
                    <td>2026-09-02 14:22:10</td>
                  </tr>
                  <tr>
                    <td>102</td>
                    <td>Campus Wi-Fi Security Audit Logs</td>
                    <td><span style="color:#fab387; font-weight:700;">High</span></td>
                    <td><span style="color:#f9e2af;">Pending</span></td>
                    <td>net_admin</td>
                    <td>2026-09-02 16:45:00</td>
                  </tr>
                  <tr>
                    <td>103</td>
                    <td>FastAPI Schema Synchronization</td>
                    <td><span style="color:#a6e3a1; font-weight:700;">Medium</span></td>
                    <td><span style="color:#f9e2af;">Pending</span></td>
                    <td>ruhama</td>
                    <td>2026-09-03 10:15:22</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="background:#141820; padding:6px 14px; font-size:0.72rem; color:#a6adc8; border-top:1px solid #28303d;" id="sqlStatusMsg">
              Output: 3 row(s) returned · Duration: 0.0014 sec / Fetch: 0.0008 sec
            </div>
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // CHESS: REAL PLAYABLE MACOS CHESS APP
    // ----------------------------------------------------
    chess: {
      address: 'Chess — Game vs Computer (macOS Sequoia Engine)',
      html: `
        <div class="chess-app-container">
          <!-- Left: Chess Board with Game Over Overlay -->
          <div class="chess-board-outer" style="position:relative;">
            <div class="chess-grid" id="chessBoardGrid"></div>

            <!-- Game Over / Winner & Loser Overlay -->
            <div class="chess-game-over-overlay" id="chessGameOverOverlay" style="display:none;">
              <div class="chess-game-over-card">
                <div class="game-over-trophy" id="gameOverTrophy">🏆</div>
                <div class="game-over-title" id="gameOverTitle">CHECKMATE!</div>
                <div class="game-over-winner" id="gameOverWinner">Winner: You (White)</div>
                <div class="game-over-loser" id="gameOverLoser">Loser: Computer (Black)</div>
                <p id="gameOverReason" style="font-size:0.78rem; color:#aaa; margin:4px 0 12px;">Black King has no legal escape moves.</p>
                <button class="chess-btn-play-again" onclick="resetChessGame()">⟳ Play Again</button>
              </div>
            </div>
          </div>

          <!-- Right: Game Controls, Check Alert & History -->
          <div class="chess-side-panel">
            <div class="chess-status-badge" id="chessStatusBadge">
              <span id="chessTurnText">White's Turn (You)</span>
              <span id="chessTurnIcon" style="font-size:1.2rem;">♔</span>
            </div>

            <!-- Check Indicator Banner -->
            <div id="chessCheckBanner" style="display:none; background:#d32f2f; color:#fff; padding:6px 12px; border-radius:6px; font-weight:800; font-size:0.8rem; text-align:center;">
              ⚠️ CHECK ON KING!
            </div>

            <div style="font-size:0.78rem; font-weight:700; color:#c5b8a5;">MOVE HISTORY</div>
            <div class="chess-moves-list" id="chessMoveHistory">
              <div>1. Game initialized.</div>
            </div>

            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#aaa;">
              <span>Captured:</span>
              <span id="chessCapturedTray">None</span>
            </div>

            <button class="chess-btn-reset" onclick="resetChessGame()">⟳ New Game</button>
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // 7. FINDER: REAL MACOS FINDER WINDOW
    // ----------------------------------------------------
    finder: {
      address: 'Finder — Desktop',
      html: `
        <div class="real-finder-workspace">
          <div class="finder-sidebar">
            <div style="font-size:0.68rem; font-weight:700; color:#888; letter-spacing:0.5px;">FAVORITES</div>
            <div style="display:flex; align-items:center; gap:8px; padding:4px 6px; border-radius:4px; cursor:pointer;" onclick="openCaseStudy('finder')">
              <span>🖥️</span> Desktop
            </div>
            <div style="display:flex; align-items:center; gap:8px; padding:4px 6px; border-radius:4px; cursor:pointer;" onclick="openCaseStudy('fullstack')">
              <span>📁</span> Documents
            </div>
            <div style="display:flex; align-items:center; gap:8px; padding:4px 6px; border-radius:4px; cursor:pointer;" onclick="openCaseStudy('github')">
              <span>🐙</span> GitHub Repos
            </div>
            <div style="display:flex; align-items:center; gap:8px; padding:4px 6px; border-radius:4px; cursor:pointer;" onclick="openCaseStudy('about')">
              <span>👤</span> About Me.ruhama
            </div>

            <div style="font-size:0.68rem; font-weight:700; color:#888; letter-spacing:0.5px; margin-top:14px;">TAGS</div>
            <div style="display:flex; align-items:center; gap:8px; padding:2px 6px; font-size:0.75rem;">
              <span style="width:8px; height:8px; background:#ff5f57; border-radius:50%;"></span> Urgent
            </div>
            <div style="display:flex; align-items:center; gap:8px; padding:2px 6px; font-size:0.75rem;">
              <span style="width:8px; height:8px; background:#28c840; border-radius:50%;"></span> Active
            </div>
            <div style="display:flex; align-items:center; gap:8px; padding:2px 6px; font-size:0.75rem;">
              <span style="width:8px; height:8px; background:#007acc; border-radius:50%;"></span> Engineering
            </div>
          </div>

          <div class="finder-main-files">
            <div class="finder-file-item" onclick="openCaseStudy('fullstack')">
              <div class="finder-folder-icon">
                <svg viewBox="0 0 100 80"><path d="M0 16 C0 8 8 0 16 0 L40 0 L52 14 L84 14 C92 14 100 22 100 30 L100 64 C100 72 92 80 84 80 L16 80 C8 80 0 72 0 64 Z" fill="#2979ff"/><path d="M0 24 L100 24 L100 66 C100 74 92 80 84 80 L16 80 C8 80 0 74 0 66 Z" fill="#69a8ff"/></svg>
              </div>
              <div class="finder-file-label">full_stack</div>
            </div>

            <div class="finder-file-item" onclick="openCaseStudy('cyber')">
              <div class="finder-folder-icon">
                <svg viewBox="0 0 100 80"><path d="M0 16 C0 8 8 0 16 0 L40 0 L52 14 L84 14 C92 14 100 22 100 30 L100 64 C100 72 92 80 84 80 L16 80 C8 80 0 72 0 64 Z" fill="#2979ff"/><path d="M0 24 L100 24 L100 66 C100 74 92 80 84 80 L16 80 C8 80 0 74 0 66 Z" fill="#69a8ff"/></svg>
              </div>
              <div class="finder-file-label">cybersecurity</div>
            </div>

            <div class="finder-file-item" onclick="openCaseStudy('design')">
              <div class="finder-folder-icon">
                <svg viewBox="0 0 100 80"><path d="M0 16 C0 8 8 0 16 0 L40 0 L52 14 L84 14 C92 14 100 22 100 30 L100 64 C100 72 92 80 84 80 L16 80 C8 80 0 72 0 64 Z" fill="#2979ff"/><path d="M0 24 L100 24 L100 66 C100 74 92 80 84 80 L16 80 C8 80 0 74 0 66 Z" fill="#69a8ff"/></svg>
              </div>
              <div class="finder-file-label">graphics_design</div>
            </div>

            <div class="finder-file-item" onclick="openCaseStudy('about')">
              <div style="width:58px; height:68px; background:#fff; border-radius:4px; box-shadow:0 3px 8px rgba(0,0,0,0.15); border:1px solid #ddd; padding:3px; overflow:hidden;">
                <img src="assets/ruhama_clean_polaroid.jpg" alt="Ruhama" style="width:100%; height:50px; object-fit:cover;">
              </div>
              <div class="finder-file-label">about_me</div>
            </div>
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // TERMINAL: REAL INTERACTIVE MACOS TERMINAL
    // ----------------------------------------------------
    terminal: {
      address: 'Terminal — ruhama@MacBook-Pro: ~ (zsh) — 80x24',
      html: `
        <div class="real-terminal-workspace" onclick="focusTerminal()">
          <div class="terminal-history-output" id="termHistory">
            <div style="color:#98c379;">Last login: Tue Nov 17 14:52:10 on ttys001</div>
            <div>Welcome to macOS Sequoia (MacBook M5 Edition)</div>
            <div>Type <span style="color:#e5c07b; font-weight:700;">help</span> to see available commands.</div>
          </div>
          <div class="terminal-input-row">
            <span class="terminal-prompt">ruhama@MacBook-Pro ~ %</span>
            <input type="text" class="terminal-input-field" id="termCliInput" autofocus autocomplete="off" spellcheck="false">
          </div>
        </div>
      `
    },

    // ----------------------------------------------------
    // TRASH: MACOS TRASH CAN
    // ----------------------------------------------------
    trash: {
      address: 'Trash — 0 items',
      html: `
        <div style="background:#fff; height:450px; border-radius:12px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#888;">
          <div style="font-size:3.5rem;">🗑️</div>
          <div style="font-weight:700; font-size:1.1rem; color:#444; margin-top:10px;">Trash is Empty</div>
          <p style="font-size:0.85rem; color:#888; margin-top:4px;">No files or drafts currently discarded.</p>
        </div>
      `
    }
  };

  // ========================================================
  // LIVE macOS CLOCK
  // ========================================================
  function updateMacClock() {
    const clockEl = document.getElementById('macClock');
    const lockTimeEl = document.getElementById('lockClockTime');
    const lockDateEl = document.getElementById('lockClockDate');
    const now = new Date();

    if (clockEl) {
      const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
      clockEl.textContent = now.toLocaleDateString('en-US', options).replace(/,/g, '');
    }

    if (lockTimeEl) {
      const hours = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      lockTimeEl.textContent = `${hours}:${mins}`;
    }

    if (lockDateEl) {
      const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
      lockDateEl.textContent = now.toLocaleDateString('en-US', dateOptions);
    }
  }
  setInterval(updateMacClock, 1000);
  updateMacClock();

  // ========================================================
  // APPLE MENU CONTROLLER (REPLACES DIRECT ABOUT MODAL)
  // ========================================================
  const appleTrigger = document.getElementById('appleMenuTrigger');
  const appleDropdown = document.getElementById('macAppleDropdown');

  if (appleTrigger && appleDropdown) {
    appleTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      appleDropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!appleDropdown.contains(e.target) && e.target !== appleTrigger) {
        appleDropdown.classList.remove('active');
      }
    });
  }

  window.handleAppleMenuAction = function(action) {
    if (appleDropdown) appleDropdown.classList.remove('active');

    if (action === 'about_mac') {
      openCaseStudy('about_mac');
    } else if (action === 'settings') {
      alert('System Settings: Displays, Network, Battery, and Privacy all functioning normally on macOS Sequoia 15.2.');
    } else if (action === 'appstore') {
      alert('App Store: All installed developer environments (VS Code, Python, MySQL) are up to date.');
    } else if (action === 'forcequit') {
      alert('Force Quit Applications: All applications are running smoothly with zero unresponsive tasks.');
    } else if (action === 'sleep') {
      const sleepOverlay = document.getElementById('macSleepOverlay');
      if (sleepOverlay) sleepOverlay.classList.add('active');
    } else if (action === 'restart') {
      const restartOverlay = document.getElementById('macRestartOverlay');
      if (restartOverlay) {
        restartOverlay.classList.add('active');
        setTimeout(() => {
          restartOverlay.classList.remove('active');
        }, 2200);
      }
    } else if (action === 'shutdown') {
      alert('MacBook Pro: Shutdown requested. Antigravity session preserved.');
    } else if (action === 'lock' || action === 'logout') {
      const lockScreen = document.getElementById('macLockScreen');
      if (lockScreen) lockScreen.classList.add('active');
    }
  };

  window.unlockMacScreen = function() {
    const lockScreen = document.getElementById('macLockScreen');
    if (lockScreen) lockScreen.classList.remove('active');
  };

  window.wakeMacFromSleep = function() {
    const sleepOverlay = document.getElementById('macSleepOverlay');
    if (sleepOverlay) sleepOverlay.classList.remove('active');
  };

  // Keyboard listener for lock screen enter
  document.addEventListener('keydown', (e) => {
    const lockScreen = document.getElementById('macLockScreen');
    if (lockScreen && lockScreen.classList.contains('active')) {
      if (e.key === 'Enter') unlockMacScreen();
    }
    const sleepOverlay = document.getElementById('macSleepOverlay');
    if (sleepOverlay && sleepOverlay.classList.contains('active')) {
      wakeMacFromSleep();
    }
  });

  // ========================================================
  // CASE STUDY CONTROLLER & GLOBAL DELEGATION
  // ========================================================
  window.openCaseStudy = function(targetKey) {
    const layout = layouts[targetKey];
    if (!layout) return;

    windowAddressBar.textContent = layout.address;
    windowScrollBody.innerHTML = layout.html;
    windowScrollBody.scrollTop = 0;

    if (layout.isLocker) {
      modalBackdrop.classList.add('modal-locker-mode');
    } else {
      modalBackdrop.classList.remove('modal-locker-mode');
    }

    modalBackdrop.classList.add('active');

    // Trigger App-Specific Runtime Initializers
    if (targetKey === 'chess') {
      setTimeout(initChessGame, 50);
    } else if (targetKey === 'github') {
      setTimeout(renderGitHubHeatmap, 50);
    } else if (targetKey === 'terminal') {
      setTimeout(initTerminal, 50);
    } else if (targetKey === 'safari') {
      setTimeout(initSafariBrowser, 50);
    }
  };

  window.closeCaseStudy = function() {
    modalBackdrop.classList.remove('active');
    modalBackdrop.classList.remove('modal-locker-mode');
  };

  if (btnClose) btnClose.addEventListener('click', closeCaseStudy);
  if (btnClosePill) btnClosePill.addEventListener('click', closeCaseStudy);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeCaseStudy();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCaseStudy();
  });

  // Global Event Delegation for ALL [data-open] elements
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open]');
    if (trigger) {
      // If element was just dragged, ignore opening!
      if (trigger._justDragged) return;

      const target = trigger.getAttribute('data-open');
      if (target) {
        openCaseStudy(target);
      }
    }
  });

  // ========================================================
  // DESKTOP FOLDERS: DRAG & DROP ENGINE (MOVEABLE FOLDERS)
  // Users can drag and position desktop folders anywhere!
  // ========================================================
  const desktopFolders = document.querySelectorAll('.desktop-item');
  const desktopCanvas = document.getElementById('desktopCanvas');

  desktopFolders.forEach(card => {
    let isDragging = false;
    let hasMoved = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    card.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;

      const rect = card.getBoundingClientRect();
      const canvasRect = desktopCanvas.getBoundingClientRect();

      // Convert from computed CSS (including % or right/bottom) to absolute px
      initialLeft = rect.left - canvasRect.left;
      initialTop = rect.top - canvasRect.top;

      card.style.left = initialLeft + 'px';
      card.style.top = initialTop + 'px';
      card.style.right = 'auto';
      card.style.bottom = 'auto';

      startX = e.clientX;
      startY = e.clientY;
      hasMoved = false;
      isDragging = true;

      try {
        card.setPointerCapture(e.pointerId);
      } catch (err) {}

      const onPointerMove = (moveEvt) => {
        if (!isDragging) return;
        const dx = moveEvt.clientX - startX;
        const dy = moveEvt.clientY - startY;

        if (!hasMoved && Math.hypot(dx, dy) > 4) {
          hasMoved = true;
          card.classList.add('is-dragging');
          card.style.animation = 'none'; // Halt background floating
        }

        if (hasMoved) {
          const minX = 8;
          const maxX = canvasRect.width - card.offsetWidth - 8;
          const minY = 34; // keep below top bar
          const maxY = canvasRect.height - card.offsetHeight - 90; // keep above dock

          const newX = Math.max(minX, Math.min(maxX, initialLeft + dx));
          const newY = Math.max(minY, Math.min(maxY, initialTop + dy));

          card.style.left = newX + 'px';
          card.style.top = newY + 'px';
        }
      };

      const onPointerUp = (upEvt) => {
        if (!isDragging) return;
        isDragging = false;
        card.classList.remove('is-dragging');

        try {
          card.releasePointerCapture(upEvt.pointerId);
        } catch (err) {}

        card.removeEventListener('pointermove', onPointerMove);
        card.removeEventListener('pointerup', onPointerUp);
        card.removeEventListener('pointercancel', onPointerUp);

        if (hasMoved) {
          card._justDragged = true;
          setTimeout(() => { card._justDragged = false; }, 220);
        }
      };

      card.addEventListener('pointermove', onPointerMove);
      card.addEventListener('pointerup', onPointerUp);
      card.addEventListener('pointercancel', onPointerUp);
    });
  });

  window.runTerminalScan = function() {
    const term = document.getElementById('cyberTerminal');
    if (!term) return;
    term.innerHTML += '<div style="color:#a6e3a1; margin-top:8px;">[SCAN COMPLETE] All 65,535 ports audited. Zero critical vulnerabilities found.</div>';
    term.scrollTop = term.scrollHeight;
  };

  // ========================================================
  // WORKING SAFARI BROWSER ENGINE
  // Multi-tab, interactive Google search, AASTU Portal, FastAPI
  // ========================================================
  let safariHistory = ['google'];
  let safariHistoryIdx = 0;
  let currentSafariPage = 'google';
  let safariSearchQuery = 'Ruhama Chanyalew';

  window.initSafariBrowser = function() {
    renderSafariCurrentPage();
  };

  function updateSafariNavButtons() {
    const backBtn = document.getElementById('safariBackBtn');
    const fwdBtn = document.getElementById('safariFwdBtn');
    if (backBtn) {
      if (safariHistoryIdx > 0) backBtn.classList.remove('disabled');
      else backBtn.classList.add('disabled');
    }
    if (fwdBtn) {
      if (safariHistoryIdx < safariHistory.length - 1) fwdBtn.classList.remove('disabled');
      else fwdBtn.classList.add('disabled');
    }
  }

  window.safariGoBack = function() {
    if (safariHistoryIdx > 0) {
      safariHistoryIdx--;
      currentSafariPage = safariHistory[safariHistoryIdx];
      renderSafariCurrentPage(false);
    }
  };

  window.safariGoForward = function() {
    if (safariHistoryIdx < safariHistory.length - 1) {
      safariHistoryIdx++;
      currentSafariPage = safariHistory[safariHistoryIdx];
      renderSafariCurrentPage(false);
    }
  };

  window.safariReload = function() {
    const viewport = document.getElementById('safariViewport');
    if (!viewport) return;
    viewport.style.opacity = '0.4';
    setTimeout(() => {
      viewport.style.opacity = '1';
      renderSafariCurrentPage(false);
    }, 200);
  };

  window.safariShare = function() {
    alert('Safari: Share sheet opened. Link copied to clipboard: portfolio.ruhama.dev');
  };

  window.safariNewTab = function() {
    safariNavigate('start');
  };

  window.safariCloseTab = function(tabKey) {
    if (currentSafariPage === tabKey) {
      safariNavigate('google');
    }
  };

  window.safariSwitchTab = function(pageKey) {
    safariNavigate(pageKey);
  };

  window.safariNavigate = function(pageKey, query = null) {
    if (query) safariSearchQuery = query;

    // Push into history stack
    safariHistory = safariHistory.slice(0, safariHistoryIdx + 1);
    safariHistory.push(pageKey);
    safariHistoryIdx = safariHistory.length - 1;
    currentSafariPage = pageKey;

    renderSafariCurrentPage(false);
  };

  window.handleSafariUrlKeyDown = function(e) {
    if (e.key === 'Enter') handleSafariGo();
  };

  window.handleSafariGo = function() {
    const input = document.getElementById('safariUrlInput');
    if (!input) return;
    const val = input.value.trim();

    if (val.toLowerCase().includes('github.com')) {
      safariNavigate('github');
    } else if (val.toLowerCase().includes('aastu')) {
      safariNavigate('aastu');
    } else if (val.toLowerCase().includes('fastapi') || val.toLowerCase().includes('8000') || val.toLowerCase().includes('docs')) {
      safariNavigate('fastapi');
    } else if (val.toLowerCase().includes('behance')) {
      safariNavigate('behance');
    } else {
      // Treat as Google Search Query
      safariSearchQuery = val.replace('https://', '').replace('http://', '').replace('www.', '');
      safariNavigate('google', safariSearchQuery);
    }
  };

  function renderSafariCurrentPage(addToHistory = true) {
    const viewport = document.getElementById('safariViewport');
    const urlInput = document.getElementById('safariUrlInput');
    if (!viewport) return;

    updateSafariNavButtons();

    // Update active tab styling
    ['google', 'github', 'aastu', 'fastapi'].forEach(t => {
      const tabEl = document.getElementById('safariTab' + t.charAt(0).toUpperCase() + t.slice(1));
      if (tabEl) {
        if (t === currentSafariPage) tabEl.classList.add('active');
        else tabEl.classList.remove('active');
      }
    });

    if (currentSafariPage === 'google') {
      if (urlInput) urlInput.value = `https://www.google.com/search?q=${encodeURIComponent(safariSearchQuery)}`;
      viewport.innerHTML = `
        <div class="safari-google-results-container">
          <!-- Left Main Results -->
          <div>
            <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px; border-bottom:1px solid #dfe1e5; padding-bottom:14px;">
              <span class="safari-google-logo" style="font-size:1.8rem; margin:0;"><span class="g-blue">G</span><span class="g-red">o</span><span class="g-yellow">o</span><span class="g-blue">g</span><span class="g-green">l</span><span class="g-red">e</span></span>
              <div style="flex:1; display:flex; align-items:center; background:#fff; border:1px solid #dfe1e5; border-radius:24px; padding:6px 14px; box-shadow:0 1px 4px rgba(0,0,0,0.08);">
                <input type="text" id="liveGoogleSearchInput" value="${safariSearchQuery}" style="border:none; outline:none; width:100%; font-size:0.9rem;" onkeydown="if(event.key==='Enter') executeLiveGoogleSearch()">
                <button onclick="executeLiveGoogleSearch()" style="background:transparent; border:none; cursor:pointer;">🔍</button>
              </div>
            </div>

            <div style="font-size:0.8rem; color:#70757a; margin-bottom:18px;">About 42,900 results (0.34 seconds)</div>

            <!-- Result 1 -->
            <div class="safari-result-item">
              <div class="safari-result-cite">https://github.com › Ruhama-Chanyalew</div>
              <a href="https://github.com/Ruhama-Chanyalew" target="_blank" class="safari-result-title">Ruhama Chanyalew (Ruhama-Chanyalew) · GitHub</a>
              <div class="safari-result-snippet">5th-year Computer Engineering undergraduate at AASTU (Addis Ababa Science and Technology University). Repositories include <strong>request_system_frontend</strong>, <strong>request_system_backend</strong>, and full-stack projects.</div>
            </div>

            <!-- Result 2 -->
            <div class="safari-result-item">
              <div class="safari-result-cite">https://portfolio.ruhama.dev › full-stack</div>
              <div class="safari-result-title" onclick="openCaseStudy('fullstack')">Internal Data Request Management System — Case Study</div>
              <div class="safari-result-snippet">A multi-role enterprise operations portal engineered with Python FastAPI, React, MySQL, and JWT authentication. Built for efficient engineering request handling.</div>
            </div>

            <!-- Result 3 -->
            <div class="safari-result-item">
              <div class="safari-result-cite">https://aastu.edu.et › engineering › students</div>
              <div class="safari-result-title" onclick="safariNavigate('aastu')">Addis Ababa Science and Technology University — Dept. of Computer Engineering</div>
              <div class="safari-result-snippet">Department of Computer Science and Engineering. Finalist profile and research in defensive cybersecurity, network infrastructure, and scalable web architectures.</div>
            </div>

            <!-- Result 4 -->
            <div class="safari-result-item">
              <div class="safari-result-cite">https://behance.net › ruhama › suku</div>
              <div class="safari-result-title" onclick="openCaseStudy('design')">SUKU Salt Lemon Candy — Packaging Design & Brand Identity</div>
              <div class="safari-result-snippet">A vibrant, typography-driven candy packaging and 3D visual system created in Adobe Illustrator and Photoshop with custom die-lines and color-coded emotional expressions.</div>
            </div>
          </div>

          <!-- Right Knowledge Panel -->
          <div class="safari-knowledge-panel">
            <div style="display:flex; gap:14px; align-items:center; margin-bottom:14px;">
              <img src="assets/ruhama_clean_polaroid.jpg" alt="Ruhama Chanyalew" style="width:72px; height:72px; border-radius:10px; object-fit:cover; border:1px solid #ddd;">
              <div>
                <h3 style="font-size:1.25rem; font-weight:700; margin:0;">Ruhama Chanyalew</h3>
                <span style="font-size:0.8rem; color:#70757a;">Computer Engineer & Developer</span>
              </div>
            </div>
            <div style="font-size:0.82rem; color:#3c4043; line-height:1.55; margin-bottom:14px;">
              Ruhama Chanyalew is a 22-year-old 5th-year Computer Engineering undergraduate at Addis Ababa Science and Technology University (AASTU), specializing in full-stack web architectures, cybersecurity (ALX AGCCI), and digital visual identities.
            </div>
            <div style="border-top:1px solid #e8eaed; padding-top:10px; font-size:0.8rem; display:flex; flex-direction:column; gap:6px;">
              <div><strong>Education:</strong> AASTU (Addis Ababa, Ethiopia)</div>
              <div><strong>Degree:</strong> B.Sc. Computer Engineering (2026)</div>
              <div><strong>Core Stack:</strong> FastAPI, React, MySQL, Python</div>
              <div><strong>Certifications:</strong> ALX Ethiopia AGCCI Cybersecurity</div>
            </div>
          </div>
        </div>
      `;
    } else if (currentSafariPage === 'github') {
      if (urlInput) urlInput.value = 'https://github.com/Ruhama-Chanyalew';
      viewport.innerHTML = layouts.github.html;
    } else if (currentSafariPage === 'aastu') {
      if (urlInput) urlInput.value = 'https://portal.aastu.edu.et/student/ruhama';
      viewport.innerHTML = `
        <div class="aastu-portal-container">
          <div class="aastu-banner">
            <div>
              <h2 style="font-size:1.15rem; margin:0; font-weight:800; letter-spacing:0.5px;">ADDIS ABABA SCIENCE AND TECHNOLOGY UNIVERSITY</h2>
              <span style="font-size:0.75rem; opacity:0.85;">Student Information Management System (SIMS)</span>
            </div>
            <div style="text-align:right;">
              <div style="font-size:0.82rem; font-weight:700;">Ruhama Chanyalew</div>
              <div style="font-size:0.72rem; opacity:0.8;">Dept: Computer Engineering · 5th Year</div>
            </div>
          </div>

          <div class="aastu-body">
            <div class="aastu-card">
              <h3 style="font-size:1rem; color:#003366; margin-top:0; border-bottom:2px solid #e1e8ed; padding-bottom:8px;">Academic Record (Year 5 Finalist)</h3>
              <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:14px; margin-top:14px;">
                <div style="background:#f7f9fa; padding:12px; border-radius:6px;">
                  <div style="font-size:0.75rem; color:#657786;">Cumulative GPA</div>
                  <div style="font-size:1.4rem; font-weight:800; color:#003366;">3.89 / 4.00</div>
                </div>
                <div style="background:#f7f9fa; padding:12px; border-radius:6px;">
                  <div style="font-size:0.75rem; color:#657786;">Completed Credits</div>
                  <div style="font-size:1.4rem; font-weight:800; color:#28a745;">142 ECTS</div>
                </div>
                <div style="background:#f7f9fa; padding:12px; border-radius:6px;">
                  <div style="font-size:0.75rem; color:#657786;">Status</div>
                  <div style="font-size:1.4rem; font-weight:800; color:#17a2b8;">Good Standing</div>
                </div>
                <div style="background:#f7f9fa; padding:12px; border-radius:6px;">
                  <div style="font-size:0.75rem; color:#657786;">Graduation Year</div>
                  <div style="font-size:1.4rem; font-weight:800; color:#ff9900;">2026</div>
                </div>
              </div>
            </div>

            <div class="aastu-card">
              <h3 style="font-size:1rem; color:#003366; margin-top:0; border-bottom:2px solid #e1e8ed; padding-bottom:8px;">Current Semester Coursework</h3>
              <table style="width:100%; border-collapse:collapse; font-size:0.82rem; margin-top:10px;">
                <thead>
                  <tr style="background:#f0f4f8; text-align:left;">
                    <th style="padding:8px 12px;">Course Code</th>
                    <th style="padding:8px 12px;">Course Title</th>
                    <th style="padding:8px 12px;">Cr. Hr</th>
                    <th style="padding:8px 12px;">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:8px 12px; font-weight:700;">CENG-5101</td>
                    <td style="padding:8px 12px;">Distributed Systems & Cloud Architecture</td>
                    <td style="padding:8px 12px;">4</td>
                    <td style="padding:8px 12px; color:#28a745; font-weight:800;">A</td>
                  </tr>
                  <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:8px 12px; font-weight:700;">CENG-5102</td>
                    <td style="padding:8px 12px;">Cryptography & Network Security</td>
                    <td style="padding:8px 12px;">4</td>
                    <td style="padding:8px 12px; color:#28a745; font-weight:800;">A+</td>
                  </tr>
                  <tr style="border-bottom:1px solid #eee;">
                    <td style="padding:8px 12px; font-weight:700;">CENG-5103</td>
                    <td style="padding:8px 12px;">Web Architecture & High-Performance APIs</td>
                    <td style="padding:8px 12px;">3</td>
                    <td style="padding:8px 12px; color:#28a745; font-weight:800;">A+</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 12px; font-weight:700;">CENG-5104</td>
                    <td style="padding:8px 12px;">Senior Capstone Project (Data Request System)</td>
                    <td style="padding:8px 12px;">5</td>
                    <td style="padding:8px 12px; color:#28a745; font-weight:800;">A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    } else if (currentSafariPage === 'fastapi') {
      if (urlInput) urlInput.value = 'http://127.0.0.1:8000/docs';
      viewport.innerHTML = `
        <div class="swagger-container">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; border-bottom:1px solid #ddd; padding-bottom:12px;">
            <div>
              <h2 style="margin:0; font-size:1.6rem;">Data Request System API <span style="font-size:0.75rem; background:#7d828a; color:#fff; padding:2px 8px; border-radius:12px;">1.0.0</span></h2>
              <p style="margin:4px 0 0; font-size:0.85rem; color:#555;">[ Base URL: 127.0.0.1:8000/api ] · OAS 3.0</p>
            </div>
            <button onclick="executeSwaggerTest()" style="background:#49cc90; border:none; color:#fff; font-weight:800; padding:8px 18px; border-radius:5px; cursor:pointer;">⚡ Test GET /api/requests</button>
          </div>

          <div class="swagger-tag-box">
            <div class="swagger-op-row" onclick="executeSwaggerTest()">
              <span class="swagger-method-pill get">GET</span>
              <span style="font-weight:700;">/api/requests</span>
              <span style="color:#666; font-size:0.75rem; margin-left:auto;">List all active pending engineering requests</span>
            </div>
            <div id="swaggerResponseBox" style="display:none; padding:14px; background:#292d3e; color:#a6accd; font-family:'JetBrains Mono'; font-size:0.78rem;">
              <div style="color:#add7ff; margin-bottom:4px;">HTTP/1.1 200 OK — Content-Type: application/json</div>
              <pre style="margin:0;">{
  "status": "success",
  "count": 3,
  "data": [
    {"id": 101, "title": "Student Record Export", "status": "Pending", "urgency": "Critical"},
    {"id": 102, "title": "Campus Wi-Fi Security Audit", "status": "Pending", "urgency": "High"},
    {"id": 103, "title": "FastAPI Schema Sync", "status": "Pending", "urgency": "Medium"}
  ]
}</pre>
            </div>
          </div>

          <div class="swagger-tag-box">
            <div class="swagger-op-row post" onclick="alert('POST /api/requests\nPayload schema: { title: str, urgency: str, requester_id: int }\nStatus: Ready for input.')">
              <span class="swagger-method-pill post">POST</span>
              <span style="font-weight:700;">/api/requests</span>
              <span style="color:#666; font-size:0.75rem; margin-left:auto;">Create new internal data request</span>
            </div>
          </div>

          <div class="swagger-tag-box">
            <div class="swagger-op-row post" onclick="alert('POST /api/auth/token\nOAuth2 Password Bearer JWT Authentication\nStatus: 200 OK generated token.')">
              <span class="swagger-method-pill post">POST</span>
              <span style="font-weight:700;">/api/auth/token</span>
              <span style="color:#666; font-size:0.75rem; margin-left:auto;">OAuth2 JWT authentication endpoint</span>
            </div>
          </div>
        </div>
      `;
    } else if (currentSafariPage === 'behance') {
      if (urlInput) urlInput.value = 'https://behance.net/gallery/suku-packaging';
      viewport.innerHTML = layouts.design.html;
    } else if (currentSafariPage === 'start') {
      if (urlInput) urlInput.value = 'safari://start-page';
      viewport.innerHTML = `
        <div class="safari-start-page">
          <h2 style="font-size:1.4rem; font-weight:700; color:#1d1d1f; margin-top:0;">Favorites</h2>
          <div class="safari-favs-grid">
            <div class="safari-fav-item" onclick="safariNavigate('google')">
              <div class="safari-fav-icon">🔍</div>
              <span class="safari-fav-label">Google</span>
            </div>
            <div class="safari-fav-item" onclick="safariNavigate('github')">
              <div class="safari-fav-icon">🐙</div>
              <span class="safari-fav-label">GitHub</span>
            </div>
            <div class="safari-fav-item" onclick="safariNavigate('aastu')">
              <div class="safari-fav-icon">🏛️</div>
              <span class="safari-fav-label">AASTU</span>
            </div>
            <div class="safari-fav-item" onclick="safariNavigate('fastapi')">
              <div class="safari-fav-icon">⚡</div>
              <span class="safari-fav-label">FastAPI</span>
            </div>
            <div class="safari-fav-item" onclick="safariNavigate('behance')">
              <div class="safari-fav-icon">🎨</div>
              <span class="safari-fav-label">Behance</span>
            </div>
          </div>

          <h2 style="font-size:1.4rem; font-weight:700; color:#1d1d1f; margin-top:30px;">Privacy Report</h2>
          <div style="background:#fff; border-radius:12px; padding:20px; box-shadow:0 2px 10px rgba(0,0,0,0.06); max-width:500px;">
            <div style="font-size:1.8rem; font-weight:800; color:#0071e3;">41 Trackers Prevented</div>
            <p style="font-size:0.82rem; color:#666; margin:6px 0 0;">In the last 30 days, Safari Intelligent Tracking Prevention prevented 41 profiling trackers from learning your habits.</p>
          </div>
        </div>
      `;
    }
  }

  window.executeLiveGoogleSearch = function() {
    const input = document.getElementById('liveGoogleSearchInput');
    if (input) {
      safariSearchQuery = input.value.trim() || 'Ruhama Chanyalew';
      renderSafariCurrentPage(false);
    }
  };

  window.executeSwaggerTest = function() {
    const box = document.getElementById('swaggerResponseBox');
    if (box) {
      box.style.display = box.style.display === 'none' ? 'block' : 'none';
    }
  };

  // ========================================================
  // VS CODE INTERACTIVE FILE SWITCHER
  // ========================================================
  const vscodeFiles = {
    app: {
      title: 'App.tsx',
      code: `<div><span style="color:#6a9955;">// Ruhama Chanyalew · Portfolio (2026)</span></div>
<div><span style="color:#c586c0;">import</span> React, { useState } <span style="color:#c586c0;">from</span> <span style="color:#ce9178;">'react'</span>;</div>
<div><span style="color:#c586c0;">import</span> { AASTU_Student } <span style="color:#c586c0;">from</span> <span style="color:#ce9178;">'@aastu/engineering'</span>;</div>
<br>
<div><span style="color:#569cd6;">export const</span> <span style="color:#4ec9b0;">RuhamaPortfolio</span>: React.FC = () =&gt; {</div>
<div>&nbsp;&nbsp;<span style="color:#569cd6;">const</span> [engineer] = useState&lt;AASTU_Student&gt;({</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;name: <span style="color:#ce9178;">"Ruhama Chanyalew"</span>,</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;education: <span style="color:#ce9178;">"AASTU Computer Engineering (5th Year Finalist)"</span>,</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;disciplines: [<span style="color:#ce9178;">"Full-Stack Web"</span>, <span style="color:#ce9178;">"Defensive Cybersecurity"</span>, <span style="color:#ce9178;">"Graphic Design"</span>],</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;coreStack: [<span style="color:#ce9178;">"FastAPI"</span>, <span style="color:#ce9178;">"React"</span>, <span style="color:#ce9178;">"MySQL"</span>, <span style="color:#ce9178;">"Python"</span>, <span style="color:#ce9178;">"TypeScript"</span>]</div>
<div>&nbsp;&nbsp;});</div>
<br>
<div>&nbsp;&nbsp;<span style="color:#c586c0;">return</span> (</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#4ec9b0;">MacBookEnvironment</span> user={engineer.name} status=<span style="color:#ce9178;">"Active"</span>&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color:#4ec9b0;">DockApps</span> apps={[<span style="color:#ce9178;">"Safari"</span>, <span style="color:#ce9178;">"VSCode"</span>, <span style="color:#ce9178;">"Illustrator"</span>, <span style="color:#ce9178;">"Photoshop"</span>, <span style="color:#ce9178;">"GitHub"</span>, <span style="color:#ce9178;">"MySQL"</span>, <span style="color:#ce9178;">"Chess"</span>]} /&gt;</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style="color:#4ec9b0;">MacBookEnvironment</span>&gt;</div>
<div>&nbsp;&nbsp;);</div>
<div>};</div>`
    },
    main: {
      title: 'main.py',
      code: `<div><span style="color:#6a9955;"># Ruhama Chanyalew — Internal Data Request System Backend</span></div>
<div><span style="color:#c586c0;">from</span> fastapi <span style="color:#c586c0;">import</span> FastAPI, Depends, HTTPException, status</div>
<div><span style="color:#c586c0;">from</span> fastapi.middleware.cors <span style="color:#c586c0;">import</span> CORSMiddleware</div>
<div><span style="color:#c586c0;">from</span> sqlalchemy.orm <span style="color:#c586c0;">import</span> Session</div>
<div><span style="color:#c586c0;">from</span> database <span style="color:#c586c0;">import</span> get_db, RequestModel</div>
<br>
<div>app = FastAPI(title=<span style="color:#ce9178;">"Data Request System API"</span>, version=<span style="color:#ce9178;">"1.0.0"</span>)</div>
<br>
<div><span style="color:#dcdcaa;">@app.get</span>(<span style="color:#ce9178;">"/api/requests"</span>)</div>
<div><span style="color:#569cd6;">def</span> <span style="color:#dcdcaa;">list_pending_requests</span>(db: Session = Depends(get_db)):</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;requests = db.query(RequestModel).filter(RequestModel.status == <span style="color:#ce9178;">"Pending"</span>).all()</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span> {<span style="color:#ce9178;">"total"</span>: len(requests), <span style="color:#ce9178;">"items"</span>: requests}</div>
<br>
<div><span style="color:#dcdcaa;">@app.post</span>(<span style="color:#ce9178;">"/api/requests/{req_id}/assign"</span>)</div>
<div><span style="color:#569cd6;">def</span> <span style="color:#dcdcaa;">assign_engineer</span>(req_id: <span style="color:#4ec9b0;">int</span>, engineer_id: <span style="color:#4ec9b0;">int</span>, db: Session = Depends(get_db)):</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;item = db.query(RequestModel).filter(RequestModel.id == req_id).first()</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">if not</span> item:</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">raise</span> HTTPException(status_code=404, detail=<span style="color:#ce9178;">"Request not found"</span>)</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;item.assigned_engineer_id = engineer_id</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;item.status = <span style="color:#ce9178;">"In_Progress"</span></div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;db.commit()</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0;">return</span> {<span style="color:#ce9178;">"status"</span>: <span style="color:#ce9178;">"success"</span>, <span style="color:#ce9178;">"message"</span>: <span style="color:#ce9178;">"Engineer assigned successfully"</span>}</div>`
    },
    db: {
      title: 'database.py',
      code: `<div><span style="color:#6a9955;"># Relational MySQL Connector & Session Maker</span></div>
<div><span style="color:#c586c0;">from</span> sqlalchemy <span style="color:#c586c0;">import</span> create_engine, Column, Integer, String, Text, DateTime</div>
<div><span style="color:#c586c0;">from</span> sqlalchemy.ext.declarative <span style="color:#c586c0;">import</span> declarative_base</div>
<div><span style="color:#c586c0;">from</span> sqlalchemy.orm <span style="color:#c586c0;">import</span> sessionmaker</div>
<div><span style="color:#c586c0;">import</span> datetime</div>
<br>
<div>DATABASE_URL = <span style="color:#ce9178;">"mysql+mysqlconnector://ruhama:secret@localhost:3306/request_db"</span></div>
<div>engine = create_engine(DATABASE_URL, pool_pre_ping=<span style="color:#569cd6;">True</span>)</div>
<div>SessionLocal = sessionmaker(autocommit=<span style="color:#569cd6;">False</span>, autoflush=<span style="color:#569cd6;">False</span>, bind=engine)</div>
<div>Base = declarative_base()</div>
<br>
<div><span style="color:#569cd6;">class</span> <span style="color:#4ec9b0;">RequestModel</span>(Base):</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;__tablename__ = <span style="color:#ce9178;">"requests"</span></div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;id = Column(Integer, primary_key=<span style="color:#569cd6;">True</span>, index=<span style="color:#569cd6;">True</span>)</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;requester_id = Column(Integer, nullable=<span style="color:#569cd6;">False</span>)</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;assigned_engineer_id = Column(Integer, nullable=<span style="color:#569cd6;">True</span>)</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;title = Column(String(255), nullable=<span style="color:#569cd6;">False</span>)</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;urgency = Column(String(50), default=<span style="color:#ce9178;">"Medium"</span>)</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;status = Column(String(50), default=<span style="color:#ce9178;">"Pending"</span>)</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;created_at = Column(DateTime, default=datetime.datetime.utcnow)</div>`
    },
    pkg: {
      title: 'package.json',
      code: `<div>{</div>
<div>&nbsp;&nbsp;<span style="color:#9cdcfe;">"name"</span>: <span style="color:#ce9178;">"request-system-frontend"</span>,</div>
<div>&nbsp;&nbsp;<span style="color:#9cdcfe;">"version"</span>: <span style="color:#ce9178;">"1.0.0"</span>,</div>
<div>&nbsp;&nbsp;<span style="color:#9cdcfe;">"author"</span>: <span style="color:#ce9178;">"Ruhama Chanyalew"</span>,</div>
<div>&nbsp;&nbsp;<span style="color:#9cdcfe;">"scripts"</span>: {</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">"dev"</span>: <span style="color:#ce9178;">"vite"</span>,</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">"build"</span>: <span style="color:#ce9178;">"tsc &amp;&amp; vite build"</span></div>
<div>&nbsp;&nbsp;},</div>
<div>&nbsp;&nbsp;<span style="color:#9cdcfe;">"dependencies"</span>: {</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">"react"</span>: <span style="color:#ce9178;">"^18.2.0"</span>,</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">"react-dom"</span>: <span style="color:#ce9178;">"^18.2.0"</span>,</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe;">"lucide-react"</span>: <span style="color:#ce9178;">"^0.359.0"</span></div>
<div>&nbsp;&nbsp;}</div>
<div>}</div>`
    },
    req: {
      title: 'requirements.txt',
      code: `<div>fastapi==0.110.0</div>
<div>uvicorn==0.28.0</div>
<div>sqlalchemy==2.0.28</div>
<div>mysql-connector-python==8.3.0</div>
<div>python-jose[cryptography]==3.3.0</div>
<div>passlib[bcrypt]==1.7.4</div>
<div>pydantic==2.6.4</div>`
    }
  };

  window.switchVSCodeFile = function(fileKey) {
    const file = vscodeFiles[fileKey];
    if (!file) return;

    const editorContent = document.getElementById('vscodeEditorContent');
    if (editorContent) {
      editorContent.innerHTML = file.code;
    }

    const tabs = {
      app: document.getElementById('vscTabApp'),
      main: document.getElementById('vscTabMain'),
      db: document.getElementById('vscTabDb')
    };

    Object.keys(tabs).forEach(k => {
      if (tabs[k]) {
        if (k === fileKey) {
          tabs[k].className = 'vscode-tab-header active';
        } else {
          tabs[k].className = 'vscode-tab-header inactive';
        }
      }
    });

    ['App', 'Main', 'Db', 'Pkg', 'Req'].forEach(name => {
      const node = document.getElementById('treeNode' + name);
      if (node) {
        if (name.toLowerCase() === fileKey.toLowerCase()) {
          node.classList.add('active');
        } else {
          node.classList.remove('active');
        }
      }
    });
  };

  // ========================================================
  // GITHUB DYNAMIC CONTRIBUTION HEATMAP
  // ========================================================
  window.renderGitHubHeatmap = function() {
    const grid = document.getElementById('ghHeatmapGrid');
    if (!grid || grid.children.length > 0) return;

    const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
    for (let c = 0; c < 52; c++) {
      const colDiv = document.createElement('div');
      colDiv.style.display = 'flex';
      colDiv.style.flexDirection = 'column';
      colDiv.style.gap = '3px';

      for (let r = 0; r < 7; r++) {
        const cell = document.createElement('div');
        cell.className = 'gh-heatmap-cell';

        let rand = Math.random();
        if (c > 35) rand += 0.25;
        let colorIdx = 0;
        if (rand > 0.88) colorIdx = 4;
        else if (rand > 0.72) colorIdx = 3;
        else if (rand > 0.55) colorIdx = 2;
        else if (rand > 0.40) colorIdx = 1;

        cell.style.background = colors[colorIdx];
        const contribCount = colorIdx === 0 ? 0 : colorIdx * 3 + Math.floor(Math.random() * 4);
        cell.title = `${contribCount} contribution(s) on week ${c + 1}`;
        colDiv.appendChild(cell);
      }
      grid.appendChild(colDiv);
    }
  };

  // ========================================================
  // MYSQL WORKBENCH INTERACTIVE QUERY RUNNER
  // ========================================================
  window.executeMySQLQuery = function() {
    const statusMsg = document.getElementById('sqlStatusMsg');
    const table = document.getElementById('sqlResultTable');
    if (!statusMsg || !table) return;

    statusMsg.textContent = 'Executing query on localhost:3306...';
    table.style.opacity = '0.5';

    setTimeout(() => {
      table.style.opacity = '1';
      const duration = (Math.random() * 0.001 + 0.0008).toFixed(4);
      statusMsg.innerHTML = `Output: 3 row(s) returned · Duration: ${duration} sec / Fetch: 0.0006 sec · <span style="color:#00d4b2;">Query OK</span>`;
    }, 280);
  };

  // ========================================================
  // PLAYABLE MACOS CHESS ENGINE (WITH CHECK & CHECKMATE / WINNER & LOSER)
  // Complete Interactive 8x8 Board with Full Rules & Computer AI
  // ========================================================
  let chessBoardState = [];
  let selectedSquare = null;
  let validTargetSquares = [];
  let isWhiteTurn = true;
  let moveHistoryCount = 1;
  let capturedPieces = [];
  let isGameOver = false;

  const whitePieceSet = new Set(['♔', '♕', '♖', '♗', '♘', '♙']);
  const blackPieceSet = new Set(['♚', '♛', '♜', '♝', '♞', '♟']);

  function getInitialChessBoard() {
    return [
      ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
      ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
      ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
    ];
  }

  window.initChessGame = function() {
    chessBoardState = getInitialChessBoard();
    selectedSquare = null;
    validTargetSquares = [];
    isWhiteTurn = true;
    moveHistoryCount = 1;
    capturedPieces = [];
    isGameOver = false;

    renderChessBoard();

    const turnText = document.getElementById('chessTurnText');
    const turnIcon = document.getElementById('chessTurnIcon');
    const badge = document.getElementById('chessStatusBadge');
    const banner = document.getElementById('chessCheckBanner');
    const overlay = document.getElementById('chessGameOverOverlay');

    if (turnText) turnText.textContent = "White's Turn (You)";
    if (turnIcon) turnIcon.textContent = "♔";
    if (badge) badge.className = 'chess-status-badge';
    if (banner) banner.style.display = 'none';
    if (overlay) overlay.style.display = 'none';
    
    const history = document.getElementById('chessMoveHistory');
    if (history) history.innerHTML = '<div>1. Game initialized.</div>';

    const tray = document.getElementById('chessCapturedTray');
    if (tray) tray.textContent = 'None';
  };

  window.resetChessGame = function() {
    initChessGame();
  };

  // Find King Position on board
  function findKing(board, isWhite) {
    const kingChar = isWhite ? '♔' : '♚';
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (board[r][c] === kingChar) return { r, c };
      }
    }
    return null;
  }

  // Check if given square is attacked by opponent
  function isSquareUnderAttack(targetR, targetC, board, byWhite) {
    const attackerSet = byWhite ? whitePieceSet : blackPieceSet;
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (attackerSet.has(board[r][c])) {
          const rawMoves = calculateRawPseudoMoves(r, c, board, byWhite);
          if (rawMoves.some(m => m.r === targetR && m.c === targetC)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  // Returns true if king of given color is currently in check
  function isKingInCheck(board, isWhite) {
    const king = findKing(board, isWhite);
    if (!king) return true; // Captured
    return isSquareUnderAttack(king.r, king.c, board, !isWhite);
  }

  // Raw pseudo-legal moves without self-check validation
  function calculateRawPseudoMoves(r, c, board, isWhite) {
    const piece = board[r][c];
    const moves = [];
    const ownSet = isWhite ? whitePieceSet : blackPieceSet;
    const oppSet = isWhite ? blackPieceSet : whitePieceSet;

    if (!piece) return moves;

    // Pawn
    if (piece === '♙') {
      if (r > 0 && board[r - 1][c] === '') {
        moves.push({ r: r - 1, c: c });
        if (r === 6 && board[r - 2][c] === '') {
          moves.push({ r: r - 2, c: c });
        }
      }
      if (r > 0 && c > 0 && oppSet.has(board[r - 1][c - 1])) moves.push({ r: r - 1, c: c - 1 });
      if (r > 0 && c < 7 && oppSet.has(board[r - 1][c + 1])) moves.push({ r: r - 1, c: c + 1 });
    } else if (piece === '♟') {
      if (r < 7 && board[r + 1][c] === '') {
        moves.push({ r: r + 1, c: c });
        if (r === 1 && board[r + 2][c] === '') {
          moves.push({ r: r + 2, c: c });
        }
      }
      if (r < 7 && c > 0 && oppSet.has(board[r + 1][c - 1])) moves.push({ r: r + 1, c: c - 1 });
      if (r < 7 && c < 7 && oppSet.has(board[r + 1][c + 1])) moves.push({ r: r + 1, c: c + 1 });
    }

    // Knight
    if (piece === '♘' || piece === '♞') {
      const offsets = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
      ];
      offsets.forEach(([dr, dc]) => {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          if (!ownSet.has(board[nr][nc])) moves.push({ r: nr, c: nc });
        }
      });
    }

    // Bishop / Queen Diagonals
    if (piece === '♗' || piece === '♝' || piece === '♕' || piece === '♛') {
      const diagDirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
      diagDirs.forEach(([dr, dc]) => {
        let nr = r + dr;
        let nc = c + dc;
        while (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          if (board[nr][nc] === '') {
            moves.push({ r: nr, c: nc });
          } else {
            if (oppSet.has(board[nr][nc])) moves.push({ r: nr, c: nc });
            break;
          }
          nr += dr;
          nc += dc;
        }
      });
    }

    // Rook / Queen Orthogonals
    if (piece === '♖' || piece === '♜' || piece === '♕' || piece === '♛') {
      const orthoDirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      orthoDirs.forEach(([dr, dc]) => {
        let nr = r + dr;
        let nc = c + dc;
        while (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          if (board[nr][nc] === '') {
            moves.push({ r: nr, c: nc });
          } else {
            if (oppSet.has(board[nr][nc])) moves.push({ r: nr, c: nc });
            break;
          }
          nr += dr;
          nc += dc;
        }
      });
    }

    // King
    if (piece === '♔' || piece === '♚') {
      const kingDirs = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1]
      ];
      kingDirs.forEach(([dr, dc]) => {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8) {
          if (!ownSet.has(board[nr][nc])) moves.push({ r: nr, c: nc });
        }
      });
    }

    return moves;
  }

  // Legal moves that do NOT leave own king in check
  function getStrictLegalMoves(r, c, board, isWhite) {
    const pseudo = calculateRawPseudoMoves(r, c, board, isWhite);
    const piece = board[r][c];
    const legal = [];

    pseudo.forEach(m => {
      const tempBoard = board.map(row => [...row]);
      tempBoard[m.r][m.c] = piece;
      tempBoard[r][c] = '';

      if (!isKingInCheck(tempBoard, isWhite)) {
        legal.push(m);
      }
    });

    return legal;
  }

  // Get all legal moves for a player across the whole board
  function getAllPlayerLegalMoves(board, isWhite) {
    const ownSet = isWhite ? whitePieceSet : blackPieceSet;
    const all = [];

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        if (ownSet.has(board[r][c])) {
          const pieceMoves = getStrictLegalMoves(r, c, board, isWhite);
          pieceMoves.forEach(target => {
            all.push({
              fromR: r,
              fromC: c,
              toR: target.r,
              toC: target.c,
              piece: board[r][c],
              targetPiece: board[target.r][target.c],
              isCapture: board[target.r][target.c] !== ''
            });
          });
        }
      }
    }
    return all;
  }

  function renderChessBoard() {
    const grid = document.getElementById('chessBoardGrid');
    if (!grid) return;

    grid.innerHTML = '';

    // Check if either king is in check
    const whiteKing = findKing(chessBoardState, true);
    const blackKing = findKing(chessBoardState, false);
    const whiteInCheck = isKingInCheck(chessBoardState, true);
    const blackInCheck = isKingInCheck(chessBoardState, false);

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const square = document.createElement('div');
        const isLight = (r + c) % 2 === 0;
        square.className = `chess-square ${isLight ? 'light' : 'dark'}`;
        square.dataset.row = r;
        square.dataset.col = c;

        const piece = chessBoardState[r][c];
        if (piece) {
          square.textContent = piece;
          if (whitePieceSet.has(piece)) {
            square.style.textShadow = '0 1px 2px rgba(0,0,0,0.6)';
          }
        }

        // Highlight King in Check with red pulsating warning
        if (whiteInCheck && whiteKing && whiteKing.r === r && whiteKing.c === c) {
          square.classList.add('in-check');
          square.title = 'White King is in CHECK!';
        }
        if (blackInCheck && blackKing && blackKing.r === r && blackKing.c === c) {
          square.classList.add('in-check');
          square.title = 'Black King is in CHECK!';
        }

        // Highlight selected square
        if (selectedSquare && selectedSquare.row === r && selectedSquare.col === c) {
          square.classList.add('selected');
        }

        // Highlight valid target squares
        const isValidTarget = validTargetSquares.some(t => t.r === r && t.c === c);
        if (isValidTarget) {
          if (piece !== '') {
            square.classList.add('valid-capture');
          } else {
            square.classList.add('valid-target');
          }
        }

        square.addEventListener('click', () => handleChessSquareClick(r, c));
        grid.appendChild(square);
      }
    }
  }

  function handleChessSquareClick(r, c) {
    if (isGameOver || !isWhiteTurn) return;

    const clickedPiece = chessBoardState[r][c];

    // Click own white piece -> select and calculate strictly legal moves
    if (whitePieceSet.has(clickedPiece)) {
      selectedSquare = { row: r, col: c };
      validTargetSquares = getStrictLegalMoves(r, c, chessBoardState, true);
      renderChessBoard();
      return;
    }

    // Move to target square
    if (selectedSquare) {
      const isLegal = validTargetSquares.some(t => t.r === r && t.c === c);
      if (isLegal) {
        executeChessMove(selectedSquare.row, selectedSquare.col, r, c);
        selectedSquare = null;
        validTargetSquares = [];

        // Check state after White's move
        const blackLegalMoves = getAllPlayerLegalMoves(chessBoardState, false);
        const blackInCheck = isKingInCheck(chessBoardState, false);

        const banner = document.getElementById('chessCheckBanner');
        const badge = document.getElementById('chessStatusBadge');
        const turnText = document.getElementById('chessTurnText');

        renderChessBoard();

        if (blackLegalMoves.length === 0) {
          if (blackInCheck) {
            // CHECKMATE! White Wins!
            announceWinner(true, "Checkmate! Black King has no escape moves.");
          } else {
            // Stalemate
            announceStalemate();
          }
          return;
        }

        // Switch to Black Computer Turn
        isWhiteTurn = false;
        if (turnText) turnText.textContent = blackInCheck ? "Black is in CHECK! (Thinking...)" : "Black's Turn (Computer thinking...)";
        if (banner) banner.style.display = blackInCheck ? 'block' : 'none';
        if (badge) badge.className = blackInCheck ? 'chess-status-badge check-alert' : 'chess-status-badge';

        setTimeout(makeBlackAIMove, 500);
      } else {
        selectedSquare = null;
        validTargetSquares = [];
        renderChessBoard();
      }
    }
  }

  function executeChessMove(fromR, fromC, toR, toC) {
    const piece = chessBoardState[fromR][fromC];
    const targetPiece = chessBoardState[toR][toC];

    // Pawn Promotion to Queen if reaching end rank
    let movedPiece = piece;
    if (piece === '♙' && toR === 0) movedPiece = '♕';
    if (piece === '♟' && toR === 7) movedPiece = '♛';

    if (targetPiece) {
      capturedPieces.push(targetPiece);
      const tray = document.getElementById('chessCapturedTray');
      if (tray) tray.textContent = capturedPieces.join(' ');
    }

    chessBoardState[toR][toC] = movedPiece;
    chessBoardState[fromR][fromC] = '';

    const colNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const rowNames = ['8', '7', '6', '5', '4', '3', '2', '1'];
    const fromSquare = `${colNames[fromC]}${rowNames[fromR]}`;
    const toSquare = `${colNames[toC]}${rowNames[toR]}`;
    const captureNotation = targetPiece ? 'x' : '-';

    // Check notation suffix
    const opponentIsWhite = piece === '♟';
    const deliversCheck = isKingInCheck(chessBoardState, opponentIsWhite);
    const checkSuffix = deliversCheck ? ' +' : '';

    const history = document.getElementById('chessMoveHistory');
    if (history) {
      const moveDiv = document.createElement('div');
      moveDiv.textContent = `${moveHistoryCount}. ${piece} ${fromSquare}${captureNotation}${toSquare}${checkSuffix}`;
      if (deliversCheck) moveDiv.style.color = '#ff6b6b';
      history.appendChild(moveDiv);
      history.scrollTop = history.scrollHeight;
    }
    moveHistoryCount++;
  }

  function makeBlackAIMove() {
    if (isGameOver) return;

    const allBlackMoves = getAllPlayerLegalMoves(chessBoardState, false);

    if (allBlackMoves.length === 0) {
      const blackInCheck = isKingInCheck(chessBoardState, false);
      if (blackInCheck) {
        announceWinner(true, "Checkmate! Black King has no escape moves.");
      } else {
        announceStalemate();
      }
      return;
    }

    // AI Move Selection: Prioritize captures (Queen > Rook > Bishop/Knight > Pawn)
    const captures = allBlackMoves.filter(m => m.isCapture);
    let chosenMove;

    if (captures.length > 0) {
      const pieceValues = { '♕': 9, '♖': 5, '♗': 3, '♘': 3, '♙': 1 };
      captures.sort((a, b) => (pieceValues[b.targetPiece] || 0) - (pieceValues[a.targetPiece] || 0));
      chosenMove = captures[0];
    } else {
      // Prefer center board moves
      const centerMoves = allBlackMoves.filter(m => m.toR >= 2 && m.toR <= 4);
      if (centerMoves.length > 0) {
        chosenMove = centerMoves[Math.floor(Math.random() * centerMoves.length)];
      } else {
        chosenMove = allBlackMoves[Math.floor(Math.random() * allBlackMoves.length)];
      }
    }

    executeChessMove(chosenMove.fromR, chosenMove.fromC, chosenMove.toR, chosenMove.toC);

    // Check state after Black's move
    const whiteLegalMoves = getAllPlayerLegalMoves(chessBoardState, true);
    const whiteInCheck = isKingInCheck(chessBoardState, true);

    const banner = document.getElementById('chessCheckBanner');
    const badge = document.getElementById('chessStatusBadge');
    const turnText = document.getElementById('chessTurnText');

    renderChessBoard();

    if (whiteLegalMoves.length === 0) {
      if (whiteInCheck) {
        // CHECKMATE! Computer Wins!
        announceWinner(false, "Checkmate! White King has no escape moves.");
      } else {
        announceStalemate();
      }
      return;
    }

    // Switch back to White's Turn
    isWhiteTurn = true;
    if (turnText) turnText.textContent = whiteInCheck ? "⚠️ YOU ARE IN CHECK!" : "White's Turn (You)";
    if (banner) {
      banner.textContent = whiteInCheck ? "⚠️ CHECK ON YOUR KING!" : "⚠️ CHECK ON KING!";
      banner.style.display = whiteInCheck ? 'block' : 'none';
    }
    if (badge) badge.className = whiteInCheck ? 'chess-status-badge check-alert' : 'chess-status-badge';
  }

  function announceWinner(whiteWon, reason) {
    isGameOver = true;
    const overlay = document.getElementById('chessGameOverOverlay');
    const trophy = document.getElementById('gameOverTrophy');
    const title = document.getElementById('gameOverTitle');
    const winner = document.getElementById('gameOverWinner');
    const loser = document.getElementById('gameOverLoser');
    const reasonEl = document.getElementById('gameOverReason');

    if (overlay && trophy && title && winner && loser) {
      trophy.textContent = whiteWon ? '🏆' : '☠️';
      title.textContent = 'CHECKMATE!';
      winner.textContent = whiteWon ? 'Winner: You (White)' : 'Winner: Computer (Black)';
      winner.style.color = whiteWon ? '#34c759' : '#ff9500';
      loser.textContent = whiteWon ? 'Loser: Computer (Black)' : 'Loser: You (White)';
      if (reasonEl) reasonEl.textContent = reason;
      overlay.style.display = 'flex';
    }

    const turnText = document.getElementById('chessTurnText');
    if (turnText) {
      turnText.textContent = whiteWon ? 'Game Over: You Won! 🏆' : 'Game Over: Computer Won! ☠️';
    }
  }

  function announceStalemate() {
    isGameOver = true;
    const overlay = document.getElementById('chessGameOverOverlay');
    const trophy = document.getElementById('gameOverTrophy');
    const title = document.getElementById('gameOverTitle');
    const winner = document.getElementById('gameOverWinner');
    const loser = document.getElementById('gameOverLoser');
    const reasonEl = document.getElementById('gameOverReason');

    if (overlay) {
      trophy.textContent = '🤝';
      title.textContent = 'STALEMATE!';
      winner.textContent = 'Outcome: Draw';
      winner.style.color = '#ffcc00';
      loser.textContent = 'No player wins.';
      if (reasonEl) reasonEl.textContent = 'No legal moves remaining and King is not in check.';
      overlay.style.display = 'flex';
    }
  }

  
  // ========================================================
  // INTERACTIVE MACOS TERMINAL
  // ========================================================
  window.focusTerminal = function() {
    const input = document.getElementById('termCliInput');
    if (input) input.focus();
  };

  window.initTerminal = function() {
    const input = document.getElementById('termCliInput');
    const history = document.getElementById('termHistory');
    if (!input || !history) return;

    input.focus();

    input.onkeydown = function(e) {
      if (e.key === 'Enter') {
        const cmd = input.value.trim();
        input.value = '';

        const promptLine = document.createElement('div');
        promptLine.innerHTML = `<span style="color:#98c379; font-weight:700;">ruhama@MacBook-Pro ~ %</span> <span style="color:#61afef;">${cmd}</span>`;
        history.appendChild(promptLine);

        if (cmd === '') return;

        const cmdLower = cmd.toLowerCase();
        const responseLine = document.createElement('div');

        if (cmdLower === 'help') {
          responseLine.innerHTML = `
            <div style="color:#e5c07b; margin:4px 0;">Available Commands:</div>
            <div>&nbsp;&nbsp;<span style="color:#61afef;">ls</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- List files and directories</div>
            <div>&nbsp;&nbsp;<span style="color:#61afef;">whoami</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Current user identity</div>
            <div>&nbsp;&nbsp;<span style="color:#61afef;">cat about.txt</span> - Display biography</div>
            <div>&nbsp;&nbsp;<span style="color:#61afef;">projects</span> &nbsp;&nbsp;&nbsp;&nbsp;- List active engineering projects</div>
            <div>&nbsp;&nbsp;<span style="color:#61afef;">skills</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Technical stack breakdown</div>
            <div>&nbsp;&nbsp;<span style="color:#61afef;">contact</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Connect channels (Email, GitHub, Telegram)</div>
            <div>&nbsp;&nbsp;<span style="color:#61afef;">python3 main.py</span> - Run FastAPI local dev server</div>
            <div>&nbsp;&nbsp;<span style="color:#61afef;">clear</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Clear screen</div>
          `;
        } else if (cmdLower === 'ls') {
          responseLine.innerHTML = `<span style="color:#98c379;">about.txt</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#61afef; font-weight:700;">full_stack/</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#61afef; font-weight:700;">cybersecurity/</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#61afef; font-weight:700;">graphics_design/</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#e5c07b;">main.py</span>&nbsp;&nbsp;&nbsp;&nbsp;package.json`;
        } else if (cmdLower === 'whoami') {
          responseLine.innerHTML = `Ruhama Chanyalew — 5th-Year Computer Engineering @ AASTU (Addis Ababa Science & Technology University)`;
        } else if (cmdLower === 'cat about.txt') {
          responseLine.innerHTML = `Ruhama Chanyalew is a 22-year-old Computer Engineering finalist passionate about building resilient full-stack systems, defensive cybersecurity auditing (ALX AGCCI), and expressive visual identities.`;
        } else if (cmdLower === 'projects') {
          responseLine.innerHTML = `
            <div>1. <span style="color:#61afef; font-weight:700;">request_system_frontend</span> (HTML5/JS multi-role data request portal)</div>
            <div>2. <span style="color:#61afef; font-weight:700;">request_system_backend</span> (FastAPI, MySQL, JWT authentication)</div>
            <div>3. <span style="color:#61afef; font-weight:700;">Great</span> (Interactive web systems with Python & JavaScript)</div>
            <div>4. <span style="color:#61afef; font-weight:700;">birthday-surprise</span> (Interactive CSS celebration experience)</div>
          `;
        } else if (cmdLower === 'skills') {
          responseLine.innerHTML = `
            <div>- Full-Stack: React, TypeScript, Node.js, FastAPI, Python, MySQL, PostgreSQL</div>
            <div>- Security: ALX AGCCI, Network Defense, OWASP Top 10, Server Hardening</div>
            <div>- Design: Adobe Illustrator, Adobe Photoshop, Figma, Brand Systems</div>
          `;
        } else if (cmdLower === 'contact') {
          responseLine.innerHTML = `
            <div>Email: ruhama@example.com</div>
            <div>GitHub: https://github.com/Ruhama-Chanyalew</div>
            <div>Telegram: @ruhama</div>
          `;
        } else if (cmdLower === 'python3 main.py' || cmdLower === 'python main.py') {
          responseLine.innerHTML = `
            <div style="color:#98c379;">INFO:     Started server process [pid 49210]</div>
            <div style="color:#98c379;">INFO:     Waiting for application startup.</div>
            <div style="color:#98c379;">INFO:     Application startup complete.</div>
            <div style="color:#61afef;">INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)</div>
          `;
        } else if (cmdLower === 'clear') {
          history.innerHTML = '';
          return;
        } else {
          responseLine.innerHTML = `zsh: command not found: ${cmd}. Type <span style="color:#e5c07b;">help</span> for available commands.`;
        }

        history.appendChild(responseLine);
        history.scrollTop = history.scrollHeight;
      }
    };
  };

  console.log('%c Ruhama Chanyalew Portfolio (2026) Engine Active ', 'background:#d80c09; color:#fff; font-weight:bold; font-size:12px; padding:6px 12px; border-radius:4px;');
});
