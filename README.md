# INCIDENT COMMAND // ZERO-DAY
### *One Incident Manifest. Four Synchronized Outputs.*

[![Built with Hyper Elements](https://img.shields.io/badge/Built%20with-Hyper%20Elements-38bdf8?style=flat-square)](https://hyperelements.dev)
[![Status: 0 Errors, 0 Warnings](https://img.shields.io/badge/CLI%20Audit-0%20Errors%20%7C%200%20Warnings-10b981?style=flat-square)](https://hyperelements.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b?style=flat-square)](LICENSE)

> A mission-critical cloud infrastructure incident response & post-mortem suite built with **[Hyper Elements](https://hyperelements.dev)** (`@hyper-elements/react`).  
> Submitted for the **Hyper Elements Template Challenge** ($500 Prize Pool).

---

## 🎯 The Real-World Problem

When major cloud infrastructure collapses—whether it's an **upstream BGP route leak, an Anycast DNS partition, or an edge transit outage**—engineering and reliability teams face a chaotic coordination breakdown:

1. **The Executive & Customer Email Problem**: Customers and enterprise stakeholders require immediate notification. But standard HTML emails frequently break on strict corporate clients like Microsoft Outlook and Gmail, turning tables into broken jumbles during critical outages.
2. **The Status Portal Problem**: Public status pages are updated manually, leading to desynchronized timestamps and conflicting error rate numbers.
3. **The Formal Compliance Problem**: Enterprise SLA agreements require a **formal 2-page Root Cause Analysis (RCA) Post-Mortem PDF** with a 5-Whys diagnostic cascade, Jira action items, and cryptographic executive signatures for SOC2 Type II and ISO-27001 audit trails.
4. **The War-Room & Social Problem**: Technical teams and DevRel need an authoritative, high-contrast status badge for real-time Discord, Slack, and Tech Twitter updates.

**INCIDENT COMMAND // ZERO-DAY** eliminates this fragmentation by establishing **a single typed data manifest (`incident_p0.json`)** that compiles deterministically into all four mission-critical outputs using Hyper Elements.

---

## 📐 One Component System. Four Outputs.

```
                    ┌──────────────────────────────────────┐
                    │          incident_p0.json            │
                    │ (Outage Timeline, Blast Radius,      │
                    │  5-Whys, MTTR, Metrics, Fix PRs)     │
                    └──────────────────┬───────────────────┘
                                       │
             ┌─────────────────────────┼─────────────────────────┐
             ▼                         ▼                         ▼
    ┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
    │     <Email>     │       │     <Page>      │       │   <Document>    │
    │ P0 Urgent Alert │       │ Live War-Room & │       │ C-Suite / SOC2  │
    │ & Customer SLA  │       │ Real-Time Status│       │ RCA Post-Mortem │
    │ Dispatch        │       │ Timeline        │       │ Whitepaper PDF  │
    └─────────────────┘       └─────────────────┘       └─────────────────┘
                                       │
                                       ▼
                              ┌─────────────────┐
                              │    <Canvas>     │
                              │ "Incident       │
                              │ Resolved" 99.9% │
                              │ Social Badge    │
                              └─────────────────┘
```

| Output Format | Root Component | Primary Purpose & Features |
| :--- | :--- | :--- |
| **1. Email Dispatch** | `<Email width={600}>` | Table-safe HTML layout for Outlook & Gmail, dark-mode styling, blast radius summary, metric chips, and direct 1-click War Room button. |
| **2. Status Portal** | `<Page width={940}>` | Real-time web status view featuring chronological action timeline, microservices health matrix, and interactive SLA tracking. |
| **3. Formal RCA PDF** | `<Document size="A4">` | Paginated 2-page enterprise whitepaper with `<PageHeader>`, `<PageFooter>`, `<PageBreak>`, `<PageNumber>`, 5-Whys cascade, and executive sign-off lines. |
| **4. Resolution Badge** | `<Canvas width={1200} height={630}>` | High-contrast 1200×630 graphic card optimized for automatic PNG/SVG generation (`renderImage()`) for social & Slack announcements. |

---

## 🛡️ Hyper Elements CLI Verification

Every template in this repository has been audited and validated against the official Hyper Elements CLI (`@hyper-elements/cli`):

```bash
npx hyper-elements check src/templates/IncidentEmail.tsx src/templates/IncidentWebPage.tsx src/templates/IncidentAuditDoc.tsx src/templates/IncidentSocialCard.tsx
```

**Output:**
```
✓ src/templates/IncidentEmail.tsx (Email)
✓ src/templates/IncidentWebPage.tsx (Page)
✓ src/templates/IncidentAuditDoc.tsx (Document)
✓ src/templates/IncidentSocialCard.tsx (Canvas)
4 designs: 0 errors, 0 warnings, 0 skipped
```

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-username/incident-command-zero-day.git
cd incident-command-zero-day
npm install
```

### 2. Run the Interactive Showcase Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. The interactive workspace allows you to:
* Switch between all **4 Hyper Elements outputs** (`<Email>`, `<Page>`, `<Document>`, `<Canvas>`).
* Toggle between **Active P0 Outage** and **P0 Mitigated & Resolved** scenarios.
* Toggle between **Desktop (600px)** and **Mobile (375px)** email viewports.
* Copy rendered output source directly to your clipboard.

### 3. Check Design Compliance
```bash
npm run check
```

### 4. Build Production Bundle
```bash
npm run build
```

---

## 📂 Project Directory Structure

```
incident-command-zero-day/
├── src/
│   ├── data/
│   │   ├── types.ts                 # Typed Incident Manifest schema
│   │   └── mockIncident.ts          # Authentic P0 Incident: "INC-8492 // BGP Route Leak"
│   ├── theme/
│   │   └── incidentTheme.ts         # Hyper Elements defineTheme configuration
│   ├── templates/                   # The 4 Core Hyper Elements Roots:
│   │   ├── IncidentEmail.tsx        # <Email> Emergency Customer SLA Dispatch
│   │   ├── IncidentWebPage.tsx      # <Page> Live War-Room & Status Timeline
│   │   ├── IncidentAuditDoc.tsx     # <Document> 2-Page Formal Root Cause Analysis PDF
│   │   └── IncidentSocialCard.tsx   # <Canvas> 1200x630 Resolution Social Badge
│   ├── showcase/
│   │   └── ShowcaseApp.tsx          # Multi-tab switcher and interactive simulation
│   ├── App.tsx                      # Root Application
│   ├── main.tsx
│   └── index.css                    # Modern reset & typography
├── package.json
└── README.md
```

---

## 🎨 Design Philosophy: Anti-AI Slop

This project deliberately avoids generic AI templates, cheap gradients, and broken flexbox hacks. It is built strictly to the high-taste standards of **Linear, Datadog, Cloudflare, and Vercel**:
* **High-Contrast Monospace Accents**: Monospaced timestamping, packet loss ratios, and commit hashes paired with clean Inter geometric grotesk.
* **Semantic Dark & Light Duality**: Deep slate/graphite (`#0B0F19`) for high-stakes operational screens, shifting gracefully to crisp monochrome whitepaper typography for the formal PDF audit dossier.
* **Deterministic Realism**: The incident details, MTTR figures, RFC 7908 BGP route-leak mechanics, and 5-Whys cascade reflect actual tier-1 cloud reliability engineering.

---

## 🏆 Challenge Submission Details

* **Author**: Open-Source Builder
* **Repository**: `incident-command-zero-day`
* **Target Competition**: Hyper Elements Template Challenge (November 2026)
* **Official Hub**: [Hyper Elements GitHub Discussions #209](https://github.com/hyper-elements/hyper-elements/discussions/209)

---

## 📄 License

MIT License © 2026. Built with [Hyper Elements](https://hyperelements.dev).
