# 🚀 Multidisciplinary Tech Portfolio: Full-Stack • Cybersecurity • Graphic Design

> **Brand Identity:** Ohryu Aesthetic (Pantone 381 C, 2665 C, 212 C, 1495 C, 7442 C)  
> **Target Roles:** Full-Stack Developer, Junior Cybersecurity Analyst / SecOps, Visual Brand Designer  
> **Location:** `/Users/ruhamachanyalew/.gemini/antigravity/scratch/portfolio`

---

## ⚡ Quick Start: Viewing Your Portfolio

To preview your new interactive portfolio immediately:

1. **Option A (Instant in Browser):**
   Simply double-click [`index.html`](file:///Users/ruhamachanyalew/.gemini/antigravity/scratch/portfolio/index.html) in your file manager, or right-click and choose **Open With > Google Chrome / Safari / Arc**.

2. **Option B (Local Dev Server):**
   Open your terminal, navigate to this folder, and run:
   ```bash
   cd /Users/ruhamachanyalew/.gemini/antigravity/scratch/portfolio
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in any browser.

---

## 🧭 The Blueprint: Solving Your Three Biggest Dilemmas

You mentioned feeling in the dark about how to put everything together. Here is your clear, battle-tested roadmap:

---

### PILLAR 1: Full-Stack Developer — Where & How to Put Your Work

#### 1. Where to Host Your Full-Stack Websites for Free:
* **Frontend (React, Next.js, Vue, HTML/CSS/JS):**
  * **[Vercel](https://vercel.com)**: Best for Next.js and React. Automatic CI/CD from GitHub, zero config, 100% free tier.
  * **[Netlify](https://netlify.com)**: Drag-and-drop or GitHub integration. Excellent free tier with forms & SSL.
* **Backend APIs (Node.js/Express, Python/Django/Flask):**
  * **[Render](https://render.com)**: Generous free tier for Web Services. (Tip: Free instances spin down after inactivity; take 30s to wake up, which is normal).
  * **[Railway](https://railway.app)**: Fast, modern container hosting with free trial credits.
* **Databases:**
  * **[Supabase](https://supabase.com)**: Free hosted PostgreSQL database with built-in Auth and real-time APIs.
  * **[Neon.tech](https://neon.tech)**: Serverless Postgres with instant branching and generous free tier.
  * **[MongoDB Atlas](https://www.mongodb.com/atlas)**: Free M0 cloud MongoDB cluster.

#### 2. The Winning Formula for Every Project Card:
Recruiters and senior engineers don't just want to see a screenshot. They look for 4 key elements:
1. **The Problem:** *"Small businesses were losing track of inventory during peak shopping seasons."*
2. **The Tech Stack:** *"Built with React, Node.js, PostgreSQL, and Tailwind CSS."*
3. **The Engineering Challenge Solved:** *"Implemented database row-level locking to prevent race-condition overselling during concurrent checkouts."*
4. **The Security Angle (Your Secret Weapon!):** *"Enforced parameterized SQL queries and HttpOnly SameSite JWT cookies to prevent XSS and SQL injection."*

---

### PILLAR 2: Cybersecurity for Beginners — ALX Ethiopia AGCCI Edition

You mentioned: *"I'm a beginner, I took ALX Ethiopia's AGCCI program, didn't finish all of it, but need the portfolio and don't know what to include."*

> **Crucial Mindset Shift:** You do NOT need 5 years of commercial penetration testing experience to have a respected cybersecurity presence. Security teams hire junior analysts for **curiosity, defensive mindset, hands-on lab replication, and secure coding fundamentals**.

#### 1. How to Frame Your ALX Experience:
* **Title:** *Cybersecurity Trainee — ALX Ethiopia (AGCCI Track)*
* **Key Competencies Covered:**
  * Computer Networking & TCP/IP protocols (OSI 7-Layer model)
  * Linux Operating System Fundamentals & CLI command line navigation
  * Threat Modeling & Common Vulnerability Types (MITRE ATT&CK, OWASP)
  * Incident response workflow & defense principles
* **Why it's okay you didn't finish everything:** Emphasize the modules you *did* master, and showcase active self-directed learning through hands-on home labs!

#### 2. The 3 Beginner Projects Included in This Portfolio:
* **Project 1: The OWASP Web App Security Audit (Your Superpower!)**
  * Because you are ALSO a Full-Stack Developer, you have an advantage 95% of junior cyber applicants lack: *You understand the code.*
  * Audit your own full-stack projects against the OWASP Top 10 (preventing SQL Injection, XSS, CSRF, insecure authentication). Document what you fixed.
* **Project 2: Wireshark Packet Inspection Lab**
  * Capture network packets in Wireshark.
  * Compare an unencrypted HTTP login form with an encrypted HTTPS/TLS 1.3 session to demonstrate how plaintext data is intercepted over open networks.
* **Project 3: VirtualBox Sandboxed Linux Lab**
  * Set up an isolated host-only virtual network with Kali Linux and a vulnerable machine (Metasploitable or DVWA).
  * Document Nmap port scanning and service reconnaissance results.

#### 3. Free Badges to Add to Your Portfolio (1-2 Week Boosters):
* **[TryHackMe (Pre-Security Path)](https://tryhackme.com):** Completely beginner-friendly. Earn badges for networking and Linux basics and embed your public profile link!
* **[OverTheWire (Bandit)](https://overthewire.org/wargames/bandit/):** Fun Linux CLI game. Mention: *"Completed OverTheWire Bandit Levels 1–15 (Linux CLI mastering)"*.

---

### PILLAR 3: Graphic Design — Unlocking Your PDF Portfolio

You mentioned: *"I only have a pdf graphics design portfolio. I'm totally in pitch dark now."*

Having a PDF is actually a fantastic starting point! Here is how we turn your PDF into an interactive web presence:

#### 1. Step-by-Step PDF Conversion:
1. **Extract High-Res Images:**
   * Open your PDF in Adobe Acrobat, Illustrator, or use free web tools like [PDF2PNG](https://pdf2png.com) or [ilovepdf.com](https://www.ilovepdf.com).
   * Extract your 4 to 6 best visual designs (brand logos, streetwear apparel mockups, poster designs, UI layouts).
2. **Place Images in `assets/`:**
   * Save them into `/Users/ruhamachanyalew/.gemini/antigravity/scratch/portfolio/assets/` as `design-1.png`, `design-2.png`, etc.
   * Update the `background: url('assets/design-1.png')` inside `index.html`.
3. **Offer the Full PDF for Download & Viewing:**
   * Save your complete PDF as `portfolio-design.pdf` inside this folder.
   * In `index.html`, set the link:
     ```html
     <a href="portfolio-design.pdf" class="btn btn-pink" download>Download Design PDF</a>
     ```
   * Browsers allow users to click and view your PDF with full pinch-to-zoom and page controls!

---

## 🎨 The Brand Identity: Ohryu Aesthetic

Your uploaded moodboard establishes a high-voltage, neo-brutalist Tokyo streetwear aesthetic. The site uses these exact CSS tokens:

| Pantone Code | Color Tone | Hex Code | Symbolic Meaning in Portfolio |
|---|---|---|---|
| **381 C** | Neon Lime / Chartreuse | `#D4F000` | Code, Logic, Terminal Highlights |
| **2665 C** | Electric Indigo / Violet | `#6946FF` | System Architecture & Infrastructure |
| **212 C** | Bubblegum Neon Pink | `#FF3E8A` | Graphic Design, Brand & Artistry |
| **1495 C** | Vibrant Tangerine Orange | `#FF7315` | Action Items, Badges & Energy |
| **7442 C** | Deep Royal Magenta-Purple | `#8B1FA9` | Cybersecurity, Threat Defense |
| **Obsidian** | Deep Pitch Canvas | `#0B0B0F` | Contrast Backdrop, Glass Panels |

---

## 🌐 Deploying Online (Free & Live in 2 Minutes)

### Option 1: GitHub Pages (Recommended)
1. Initialize git and commit:
   ```bash
   cd /Users/ruhamachanyalew/.gemini/antigravity/scratch/portfolio
   git init
   git add .
   git commit -m "Initial commit of multidisciplinary portfolio"
   ```
2. Create a new repository on GitHub named `portfolio` (or `<your-username>.github.io`).
3. Push your code and go to **Repository Settings > Pages > Deploy from Branch `main`**.
4. Your site is live at `https://<your-username>.github.io/portfolio`!

### Option 2: Vercel / Netlify (Zero Terminal Setup)
1. Go to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Simply drag and drop the `portfolio` folder onto their upload dropzone.
3. Your site gets a free custom SSL domain (e.g. `your-name.vercel.app`) instantly!
