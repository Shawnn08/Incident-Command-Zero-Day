import { defineTheme } from "@hyper-elements/react";

export const incidentTheme = defineTheme({
  colors: {
    background: "#090a0f",
    foreground: "#f4f4f7",
    primary: "#be123c",
    primaryForeground: "#ffffff",
    muted: "#94a3b8",
    border: "#1e2230",
  },
  formats: {
    document: {
      colors: {
        background: "#ffffff",
        foreground: "#0f172a",
        border: "#e2e8f0",
      },
    },
    email: {
      colors: {
        background: "#090a0f",
        foreground: "#f4f4f7",
        border: "#1e2230",
      },
    },
    page: {
      colors: {
        background: "#090a0f",
        foreground: "#f4f4f7",
        border: "#1e2230",
      },
    },
    canvas: {
      colors: {
        background: "#090a0f",
        foreground: "#f4f4f7",
        border: "#1e2230",
      },
    },
  },
  fonts: {
    body: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  elements: {
    Heading: {
      by: {
        level: {
          1: { fontSize: 32, mobile: { fontSize: 24 }, fontWeight: 700 },
          2: { fontSize: 22, mobile: { fontSize: 18 }, fontWeight: 600 },
          3: { fontSize: 18, mobile: { fontSize: 16 }, fontWeight: 600 },
          4: { fontSize: 16, fontWeight: 600 },
          5: { fontSize: 14, fontWeight: 600 },
          6: { fontSize: 13, fontWeight: 600 },
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
      backgroundColor: "#11131a",
      padding: 24,
      borderRadius: 8,
      border: { width: 1, style: "solid", color: "#1e2230" },
      gap: 16,
    },
    cardInner: {
      backgroundColor: "#161924",
      padding: 16,
      borderRadius: 6,
      border: { width: 1, style: "solid", color: "#1e2230" },
      gap: 8,
    },
  },
});
