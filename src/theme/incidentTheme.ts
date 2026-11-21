import { defineTheme } from "@hyper-elements/react";

export const incidentTheme = defineTheme({
  colors: {
    background: "#0f1513",
    foreground: "#e6f0ec",
    primary: "#be123c",
    primaryForeground: "#ffffff",
    muted: "#8aa399",
    border: "#283832",
  },
  formats: {
    document: {
      colors: {
        background: "#0f1513",
        foreground: "#e6f0ec",
        border: "#283832",
      },
    },
    email: {
      colors: {
        background: "#0f1513",
        foreground: "#e6f0ec",
        border: "#283832",
      },
    },
    page: {
      colors: {
        background: "#0f1513",
        foreground: "#e6f0ec",
        border: "#283832",
      },
    },
    canvas: {
      colors: {
        background: "#0f1513",
        foreground: "#e6f0ec",
        border: "#283832",
      },
    },
  },
  fonts: {
    body: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  elements: {
    Heading: {
      by: {
        level: {
          1: { fontSize: 30, mobile: { fontSize: 24 }, fontWeight: 700 },
          2: { fontSize: 24, mobile: { fontSize: 18 }, fontWeight: 600 },
          3: { fontSize: 20, mobile: { fontSize: 16 }, fontWeight: 600 },
          4: { fontSize: 18, fontWeight: 600 },
          5: { fontSize: 16, fontWeight: 600 },
          6: { fontSize: 14, fontWeight: 600 },
        },
      },
    },
    Button: {
      borderRadius: 6,
      padding: [10, 18],
      fontSize: 14,
      fontWeight: 600,
      hover: { backgroundColor: "#e11d48" },
    },
  },
  styles: {
    card: {
      backgroundColor: "#151e1b",
      padding: 24,
      borderRadius: 10,
      border: { width: 1, style: "solid", color: "#283832" },
      gap: 16,
    },
    cardInner: {
      backgroundColor: "#1e2a26",
      padding: 16,
      borderRadius: 6,
      border: { width: 1, style: "solid", color: "#283832" },
      gap: 8,
    },
    badgeCritical: {
      backgroundColor: "rgba(253, 164, 175, 0.12)",
      padding: [4, 10],
      borderRadius: 4,
      border: { width: 1, style: "solid", color: "rgba(253, 164, 175, 0.3)" },
    },
    badgeSuccess: {
      backgroundColor: "rgba(110, 231, 183, 0.12)",
      padding: [4, 10],
      borderRadius: 4,
      border: { width: 1, style: "solid", color: "rgba(110, 231, 183, 0.3)" },
    },
  },
});
