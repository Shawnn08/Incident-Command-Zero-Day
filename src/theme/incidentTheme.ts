import { defineTheme } from "@hyper-elements/react";

export const incidentTheme = defineTheme({
  colors: {
    background: "#0b0f19",
    foreground: "#f8fafc",
    primary: "#ef4444",
    primaryForeground: "#ffffff",
    muted: "#94a3b8",
    border: "#1e293b",
  },
  formats: {
    document: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",
        border: "#e2e8f0",
      },
    },
  },
  fonts: {
    body: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  elements: {
    Heading: {
      by: {
        level: {
          1: { fontSize: 22, mobile: { fontSize: 19 }, fontWeight: 700 },
          2: { fontSize: 16, mobile: { fontSize: 15 }, fontWeight: 600 },
          3: { fontSize: 13, fontWeight: 600 },
        },
      },
    },
    Button: {
      borderRadius: 6,
      padding: [10, 18],
      fontSize: 13,
      fontWeight: 600,
      hover: { backgroundColor: "#dc2626" },
    },
  },
  styles: {
    card: {
      backgroundColor: "#0f172a",
      padding: 20,
      borderRadius: 8,
      border: { width: 1, style: "solid", color: "#1e293b" },
      gap: 12,
    },
    badgeCritical: {
      backgroundColor: "#450a0a",
      padding: [4, 10],
      borderRadius: 4,
      border: { width: 1, style: "solid", color: "#ef4444" },
    },
    badgeSuccess: {
      backgroundColor: "#064e3b",
      padding: [4, 10],
      borderRadius: 4,
      border: { width: 1, style: "solid", color: "#10b981" },
    },
  },
});
