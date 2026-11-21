export type ColorSuiteId = "calm-slate" | "twilight-graphite" | "moss-eucalyptus";

export interface ColorSuite {
  id: ColorSuiteId;
  name: string;
  subtitle: string;
  themeHue: string;
  description: string;
  swatches: string[];
  canvasBg: string;
  cardBg: string;
  cardBorder: string;
  cardBoxShadow: string;
  surfaceNested: string;
  surfaceNestedBorder: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentColor: string;
  metricBg: string;
  metricBorder: string;
  statusBg: (isResolved: boolean) => string;
  statusBorder: (isResolved: boolean) => string;
  statusText: (isResolved: boolean) => string;
  primaryBtn: (isResolved: boolean) => string;
  primaryBtnHover: (isResolved: boolean) => string;
  secondaryBtnBg: string;
  secondaryBtnBorder: string;
  secondaryBtnText: string;
  secondaryBtnHover: string;
}

export const colorSuites: Record<ColorSuiteId, ColorSuite> = {
  // SUITE 1: Calm Dark Slate (The Official Hyper Elements / GitHub Engineering Standard)
  "calm-slate": {
    id: "calm-slate",
    name: "Calm Dark Slate",
    subtitle: "Eye-Friendly GitHub / Hyper Elements Dark Slate (#0d1117)",
    themeHue: "#38bdf8",
    description:
      "Directly modeled on the official Hyper Elements VerificationCode template and GitHub dark mode: soothing matte dark slate (#0d1117), elevated card surfaces (#161b22), delicate 1px hairline borders (#30363d), and soft off-white text (#e6edf3). Zero glare, zero eye strain.",
    swatches: ["#0d1117", "#161b22", "#21262d", "#30363d", "#38bdf8", "#34d399", "#f87171"],
    canvasBg: "#0d1117",
    cardBg: "#161b22",
    cardBorder: "1px solid #30363d",
    cardBoxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
    surfaceNested: "#21262d",
    surfaceNestedBorder: "1px solid #30363d",
    textPrimary: "#e6edf3",
    textSecondary: "#8b949e",
    textMuted: "#6e7681",
    accentColor: "#38bdf8",
    metricBg: "#1c2128",
    metricBorder: "1px solid #30363d",
    statusBg: (isResolved) => (isResolved ? "rgba(52, 211, 153, 0.12)" : "rgba(248, 113, 113, 0.12)"),
    statusBorder: (isResolved) => (isResolved ? "rgba(52, 211, 153, 0.3)" : "rgba(248, 113, 113, 0.3)"),
    statusText: (isResolved) => (isResolved ? "#34d399" : "#f87171"),
    primaryBtn: (isResolved) => (isResolved ? "#059669" : "#dc2626"),
    primaryBtnHover: (isResolved) => (isResolved ? "#10b981" : "#ef4444"),
    secondaryBtnBg: "#21262d",
    secondaryBtnBorder: "1px solid #30363d",
    secondaryBtnText: "#e6edf3",
    secondaryBtnHover: "#30363d",
  },

  // SUITE 2: Nordic Twilight Graphite (Linear / Cloudflare SRE Standard)
  "twilight-graphite": {
    id: "twilight-graphite",
    name: "Twilight Graphite",
    subtitle: "Soothing Deep Indigo-Graphite (#12151c) & Periwinkle",
    themeHue: "#818cf8",
    description:
      "A soothing twilight palette inspired by Cloudflare Radar and Linear SRE dashboards: soft indigo-slate base (#12151c), deep matte cards (#1a1f2c), hairline borders (#2d354a), and calm lavender-blue accents (#818cf8). Ultra-comfort for long engineering shifts.",
    swatches: ["#12151c", "#1a1f2c", "#242b3d", "#2d354a", "#818cf8", "#4ade80", "#fb7185"],
    canvasBg: "#12151c",
    cardBg: "#1a1f2c",
    cardBorder: "1px solid #2d354a",
    cardBoxShadow: "0 4px 20px rgba(0, 0, 0, 0.45)",
    surfaceNested: "#242b3d",
    surfaceNestedBorder: "1px solid #2d354a",
    textPrimary: "#e2e8f0",
    textSecondary: "#94a3b8",
    textMuted: "#64748b",
    accentColor: "#818cf8",
    metricBg: "#1f2637",
    metricBorder: "1px solid #2d354a",
    statusBg: (isResolved) => (isResolved ? "rgba(74, 222, 128, 0.12)" : "rgba(251, 113, 133, 0.12)"),
    statusBorder: (isResolved) => (isResolved ? "rgba(74, 222, 128, 0.3)" : "rgba(251, 113, 133, 0.3)"),
    statusText: (isResolved) => (isResolved ? "#4ade80" : "#fb7185"),
    primaryBtn: (isResolved) => (isResolved ? "#16a34a" : "#e11d48"),
    primaryBtnHover: (isResolved) => (isResolved ? "#22c55e" : "#f43f5e"),
    secondaryBtnBg: "#242b3d",
    secondaryBtnBorder: "1px solid #2d354a",
    secondaryBtnText: "#e2e8f0",
    secondaryBtnHover: "#2d354a",
  },

  // SUITE 3: Nordic Moss & Eucalyptus (Natural Calming Slate)
  "moss-eucalyptus": {
    id: "moss-eucalyptus",
    name: "Nordic Moss & Slate",
    subtitle: "Calming Pine-Slate (#0f1513) & Soft Mint",
    themeHue: "#2dd4bf",
    description:
      "A natural, restorative dark slate palette engineered to reduce cognitive fatigue: dark pine-slate foundation (#0f1513), forest-tinted matte cards (#151e1b), subtle slate borders (#283832), and soft mint telemetry (#2dd4bf).",
    swatches: ["#0f1513", "#151e1b", "#1e2a26", "#283832", "#2dd4bf", "#6ee7b7", "#fda4af"],
    canvasBg: "#0f1513",
    cardBg: "#151e1b",
    cardBorder: "1px solid #283832",
    cardBoxShadow: "0 4px 18px rgba(0, 0, 0, 0.4)",
    surfaceNested: "#1e2a26",
    surfaceNestedBorder: "1px solid #283832",
    textPrimary: "#e6f0ec",
    textSecondary: "#8aa399",
    textMuted: "#5e776e",
    accentColor: "#2dd4bf",
    metricBg: "#1a2521",
    metricBorder: "1px solid #283832",
    statusBg: (isResolved) => (isResolved ? "rgba(110, 231, 183, 0.12)" : "rgba(253, 164, 175, 0.12)"),
    statusBorder: (isResolved) => (isResolved ? "rgba(110, 231, 183, 0.3)" : "rgba(253, 164, 175, 0.3)"),
    statusText: (isResolved) => (isResolved ? "#6ee7b7" : "#fda4af"),
    primaryBtn: (isResolved) => (isResolved ? "#0d9488" : "#be123c"),
    primaryBtnHover: (isResolved) => (isResolved ? "#14b8a6" : "#e11d48"),
    secondaryBtnBg: "#1e2a26",
    secondaryBtnBorder: "1px solid #283832",
    secondaryBtnText: "#e6f0ec",
    secondaryBtnHover: "#283832",
  },
};
