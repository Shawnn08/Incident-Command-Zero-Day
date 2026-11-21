# INCIDENT COMMAND // ZERO-DAY
### *One Incident Manifest. Four Synchronized Outputs.*

[![Built with Hyper Elements](https://img.shields.io/badge/Built%20with-Hyper%20Elements-2dd4bf?style=for-the-badge&logo=react)](https://hyperelements.dev)
[![Status: 0 Errors, 0 Warnings](https://img.shields.io/badge/Hyper%20Elements%20CLI-0%20Errors%20%7C%200%20Warnings-6ee7b7?style=for-the-badge)](https://hyperelements.dev)
[![Palette: Natural Restorative Slate](https://img.shields.io/badge/Palette-Nordic%20Moss%20%26%20Slate-2dd4bf?style=for-the-badge)](https://hyperelements.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-38bdf8?style=for-the-badge)](LICENSE)

> **Submission for the Unlayer Hyper Elements Template Challenge ($500 Prize Pool)**  
> Built strictly with **[Hyper Elements](https://hyperelements.dev)** (`@hyper-elements/react`) by Unlayer.

---

## 🎯 The Real-World Problem

When tier-1 cloud infrastructure suffers an outage—such as an **RFC 7908 Anycast BGP route leak, transit partition, or edge failure**—site reliability engineering (SRE) teams face a catastrophic communications breakdown across disconnected tools:

* **Customer SLA Emails** break on Outlook and mobile clients, garbling metrics and layout tables.
* **Status Portals** are edited manually in separate consoles, showing out-of-sync timelines and conflicting packet loss statistics.
* **Formal Compliance Audits** require an executive 2-page Root Cause Analysis (RCA) post-mortem PDF with a 5-Whys diagnostic cascade, Jira action items, and cryptographic signatures for SOC2 Type II compliance.
* **War-Room & Social Announcements** require an instant, high-contrast resolution card for Discord, Slack, and status channels.

Historically, organizations maintain **four disparate systems** to produce these artifacts. **INCIDENT COMMAND // ZERO-DAY** replaces this fragmentation with **a single typed incident manifest (`incident_p0.json` / `types.ts`)** that compiles deterministically into all four outputs with **0 errors and 0 warnings**.

---

## 📸 Visual Showcase & Gallery (Both Scenarios)

The live interactive application simulates **both operational states** via a single click:
1. 🔴 **P0 Active Outage**: Critical crisis state (42.8% packet drop, ROV bypassed, transit de-peered).
2. 🟢 **P0 Mitigated & Restored**: Full convergence (0% packet drop, ROV enforced, MTTR 42m, signed compliance hash).

---

### 1. Live Status & War-Room Portal (`<Page width={940}>`)
*Real-time war room dashboard featuring live Anycast BGP route leak topology map, blast radius telemetry matrix, and chronological mitigation log.*

#### 🔴 Scenario A: Active P0 Outage
![Live Status Portal - Active Outage](docs/screenshots/01-live-status-portal-active.png)

#### 🟢 Scenario B: Mitigated & Restored
![Live Status Portal - Mitigated & Restored](docs/screenshots/05-live-status-portal-mitigated.png)

---

### 2. Emergency Customer & Stakeholder SLA Dispatch (`<Email width={600}>`)
*Bulletproof, table-safe HTML dispatch engineered for Microsoft Outlook, Gmail, and Apple Mail. Includes toned-down telemetry graphics and 44px touch targets.*

| 🔴 Active Outage (Desktop 600px) | 🟢 Mitigated (Desktop 600px) | 📱 Responsive Mobile (375px) |
| :---: | :---: | :---: |
| ![Email Active Desktop](docs/screenshots/02-email-dispatch-active.png) | ![Email Mitigated Desktop](docs/screenshots/06-email-dispatch-mitigated.png) | ![Email Active Mobile](docs/screenshots/02b-email-mobile-active.png) |

---

### 3. Formal 2-Page Root Cause Analysis (RCA) Dossier (`<Document size="A4">`)
*Print-ready, paginated enterprise post-mortem whitepaper featuring `<PageHeader>`, `<PageFooter>`, `<PageBreak>`, 5-Whys forensic table, Jira remediation items, and executive cryptographic validation.*

#### 🔴 Scenario A: Incident Active Investigation (Full 2-Page Document)
![Formal RCA Document - Active](docs/screenshots/03-formal-rca-document-active.png)

#### 🟢 Scenario B: Complete Post-Mortem Sign-Off (Full 2-Page Document)
![Formal RCA Document - Mitigated](docs/screenshots/07-formal-rca-document-mitigated.png)

---

### 4. Resolution & Social Announcement Badge (`<Canvas width={1200} height={630}>`)
*High-contrast 1200×630 OpenGraph graphic generated programmatically via Hyper Elements Canvas engine (`renderImage()`) for instant Slack, Discord, and social updates.*

| 🔴 Active Crisis Alert Card | 🟢 Mitigated Resolution Badge |
| :---: | :---: |
| ![Resolution Badge Active](docs/screenshots/04-resolution-badge-canvas-active.png) | ![Resolution Badge Mitigated](docs/screenshots/08-resolution-badge-canvas-mitigated.png) |

---

## 📐 One Component System. Four Outputs.

```
                    ┌─────────────────────────────────────────┐
                    │            incident_p0.json             │
                    │   (BGP Route Leak Telemetry, MTTR,      │
                    │   5-Whys, Multi-PoP Impact, Jira Fixes) │
                    └────────────────────┬────────────────────┘
                                         │
              ┌──────────────────────────┼──────────────────────────┐
              ▼                          ▼                          ▼
     ┌─────────────────┐        ┌─────────────────┐        ┌─────────────────┐
     │     <Email>     │        │     <Page>      │        │   <Document>    │
     │ P0 Urgent Alert │        │ Live War-Room & │        │ C-Suite / SOC2  │
     │ & Customer SLA  │        │ Real-Time Status│        │ RCA Post-Mortem │
     │ Dispatch        │        │ Portal          │        │ Dossier PDF     │
     └─────────────────┘        └─────────────────┘        └─────────────────┘
                                         │
                                         ▼
                                ┌─────────────────┐
                                │    <Canvas>     │
                                │ 1200x630 Res    │
                                │ "Mitigated"     │
                                │ Social Badge    │
                                └─────────────────┘
```

| Output Format | Root Component | Primary Purpose & Key Capabilities |
| :--- | :--- | :--- |
| **1. Live Status Portal** | `<Page width={940}>` | Real-time war room portal with interactive Anycast BGP topology map, blast radius summary, live multi-PoP metrics, and chronological action timeline. |
| **2. Emergency SLA Email** | `<Email width={600}>` | Table-safe HTML dispatch for Microsoft Outlook and Gmail, featuring telemetry chips, toned-down Anycast BGP map, and 44px ergonomic CTA. |
| **3. Formal RCA Report** | `<Document size="A4">` | Paginated 2-page enterprise post-mortem dossier with `<PageHeader>`, `<PageFooter>`, `<PageBreak>`, `<PageNumber>`, 5-Whys forensic table, and VP sign-off stamp. |
| **4. Resolution Badge** | `<Canvas width={1200} height={630}>` | High-contrast 1200×630 graphic card optimized for automatic PNG/SVG rendering (`renderImage()`) for Slack, Discord, and social incident updates. |

---

## 🎨 Design Engineering & Craft Standards

This template strictly follows senior design engineering craft guidelines adapted from [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) and [meodai/color-expert](https://github.com/meodai/skill.color-expert):

### 1. Natural Restorative Slate Palette
Eliminates blinding stark white backgrounds (`#ffffff`) and neon glare:
- **Base Canvas**: `#0f1513` (Deep pine slate, gentle on the eyes during high-stress incident response)
- **Elevated Cards**: `#151e1b` (Calm matte surface)
- **Nested Subsystems**: `#1e2a26` (Inner cards & telemetry map containers)
- **Delicate Borders**: `#283832` (Subtle 1px hairlines)
- **Primary Typography**: `#e6f0ec` (Soft off-white with ~14:1 AAA contrast)
- **Secondary Copy**: `#8aa399` (Muted readable slate)
- **Restorative Accent**: `#2dd4bf` (Calming mint/teal for technical telemetry)
- **P0 Status Badges**: Translucent ghost pills (`rgba(253, 164, 175, 0.14)`) instead of loud opaque fills.

### 2. Strict Typography Hierarchy (Option C Locked)
- **Font Pairing**: `Plus Jakarta Sans` (UI clarity & humanist geometry) paired with `Space Mono` (timestamps, RFC codes, SHA-256 hashes).
- **Type Scale Snapping**:
  - Hero Headings: `32px` / `40px` line-height
  - Section Headings (H2): `20px` / `28px`
  - Metric Numbers: `30px–34px` bold Space Mono
  - Default Body Copy: Strictly **`16px`** (`text-base`, `line-height: 26px`)
  - Metadata Labels: `13px–14px`

### 3. Ergonomics & Nested Radii
- **44px Touch Targets**: All action buttons and scenario toggles strictly honor the **44px ergonomic height** standard (WCAG 2.5.5).
- **Nested Radius Formula**: `inner radius = outer radius - gap` (Outer card `10px`, inner metrics `6px`, badges `4px`).

### 4. Restrained Motion
- Emil Kowalski decelerating curve: `cubic-bezier(0.22, 1, 0.36, 1)` with 200–280ms duration.
- Animates only `transform` and `opacity` with full `prefers-reduced-motion` accessibility support.

---

## 🛡️ Hyper Elements CLI Verification

Every template in this repository has been audited and validated against the official Hyper Elements CLI (`@hyper-elements/cli`):

```bash
npx hyper-elements check (Get-ChildItem src/templates/*.tsx | Select-Object -ExpandProperty FullName)
```

**CLI Audit Result:**
```
✓ src/templates/IncidentAuditDoc.tsx (Document)
✓ src/templates/IncidentEmail.tsx (Email)
✓ src/templates/IncidentSocialCard.tsx (Canvas)
✓ src/templates/IncidentWebPage.tsx (Page)
4 designs: 0 errors, 0 warnings, 0 skipped
```

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Shawnn08/incident-command-zero-day.git
cd incident-command-zero-day
npm install
```

### 2. Launch the Interactive Showcase
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser:
* Switch seamlessly between **`<Page>`**, **`<Email>`**, **`<Document>`**, and **`<Canvas>`**.
* Toggle scenarios between **🔴 P0 Active Outage** and **🟢 P0 Mitigated & Restored**.
* Test responsive viewports with the **Desktop (600px) / Mobile (375px)** email switcher.
* Click **Copy Manifest JSON** to inspect the underlying incident data model.

### 3. Run Hyper Elements Compliance Audit
```bash
npm run check
```

### 4. Production Build
```bash
npm run build
```

---

## 📂 Project Directory Structure

```
incident-command-zero-day/
├── docs/
│   └── screenshots/                     # Full 2x Retina screenshots (both scenarios)
│       ├── 01-live-status-portal-active.png
│       ├── 02-email-dispatch-active.png
│       ├── 02b-email-mobile-active.png
│       ├── 03-formal-rca-document-active.png
│       ├── 04-resolution-badge-canvas-active.png
│       ├── 05-live-status-portal-mitigated.png
│       ├── 06-email-dispatch-mitigated.png
│       ├── 07-formal-rca-document-mitigated.png
│       └── 08-resolution-badge-canvas-mitigated.png
├── scripts/
│   └── capture-screenshots.mjs          # Automated Puppeteer fullPage capture engine
├── src/
│   ├── data/
│   │   ├── types.ts                     # Strongly-typed Incident Manifest schema
│   │   └── mockIncident.ts              # Authentic P0 Incident: "INC-8492 // BGP Route Leak"
│   ├── theme/
│   │   ├── colorSuites.ts               # Natural Restorative Slate & calibrated palettes
│   │   └── incidentTheme.ts             # Hyper Elements defineTheme configuration
│   ├── templates/                       # The 4 Core Hyper Elements Source Templates:
│   │   ├── IncidentWebPage.tsx          # <Page> Live War-Room Portal
│   │   ├── IncidentEmail.tsx            # <Email> Emergency Customer SLA Dispatch
│   │   ├── IncidentAuditDoc.tsx         # <Document> 2-Page Formal Root Cause Analysis PDF
│   │   └── IncidentSocialCard.tsx       # <Canvas> 1200x630 Resolution Social Badge
│   ├── showcase/
│   │   ├── ShowcaseApp.tsx              # Submission-ready 4-tab interactive runner
│   │   ├── NetworkTopologyMap.tsx       # Interactive SVG Anycast BGP Route Leak Visualizer
│   │   ├── WebPagePreview.tsx           # Live status portal DOM renderer
│   │   ├── EmailPreview.tsx             # SRE email dispatch DOM renderer
│   │   ├── AuditDocPreview.tsx          # Formal RCA dossier DOM renderer
│   │   └── SocialCardPreview.tsx        # Resolution badge DOM renderer
│   ├── App.tsx                          # Root Application
│   ├── main.tsx
│   └── index.css                        # Emil Kowalski craft motion & token reset
├── package.json
└── README.md
```

---

## 🏆 Challenge Submission Details

* **Project Title**: INCIDENT COMMAND // ZERO-DAY
* **Concept**: Multi-Format Mission-Critical Cloud Infrastructure Incident Response & RCA Post-Mortem Suite
* **Target Competition**: Hyper Elements Template Challenge (November 2026)
* **Official Community Hub**: [Hyper Elements GitHub Discussions](https://github.com/hyper-elements/hyper-elements/discussions)
* **Engine**: [Hyper Elements](https://hyperelements.dev) by Unlayer

---

## 📄 License

MIT License © 2026. Built with [Hyper Elements](https://hyperelements.dev) by Unlayer.
