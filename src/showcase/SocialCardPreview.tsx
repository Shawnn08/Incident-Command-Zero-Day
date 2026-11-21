import type { IncidentManifest, TypographyOptionId } from "../data/types";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export default function SocialCardPreview({
  incident,
  typography = "option-c",
}: {
  incident: IncidentManifest;
  typography?: TypographyOptionId;
}) {
  const isResolved = incident.status === "RESOLVED";
  const statusColor = isResolved ? "#6ee7b7" : "#fda4af";
  const statusBg = isResolved ? "rgba(110, 231, 183, 0.14)" : "rgba(253, 164, 175, 0.14)";
  const statusBorder = isResolved ? "rgba(110, 231, 183, 0.35)" : "rgba(253, 164, 175, 0.35)";

  const fontStack =
    typography === "option-c"
      ? "'Plus Jakarta Sans', sans-serif"
      : typography === "option-b"
      ? "'Geist', sans-serif"
      : "'Inter', sans-serif";

  const monoStack =
    typography === "option-c"
      ? "'Space Mono', monospace"
      : typography === "option-b"
      ? "'Geist Mono', monospace"
      : "'JetBrains Mono', monospace";

  return (
    <div
      style={{
        backgroundColor: "#0f1513",
        color: "#e6f0ec",
        padding: 56,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 520,
        gap: 28,
        fontFamily: fontStack,
      }}
    >
      {/* Top Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ backgroundColor: "#151e1b", border: "1px solid #283832", borderRadius: 8, padding: "8px 16px" }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#2dd4bf", letterSpacing: "1px", fontFamily: monoStack }}>
              {incident.id}
            </span>
          </div>
          <span style={{ fontSize: 16, color: "#8aa399", fontWeight: 600 }}>
            {incident.organization} • Cloud Security &amp; Network Operations
          </span>
        </div>

        <div style={{ backgroundColor: statusBg, border: `1px solid ${statusBorder}`, borderRadius: 8, padding: "8px 20px", display: "flex", alignItems: "center", gap: 8 }}>
          {isResolved ? (
            <CheckCircle2 size={18} color={statusColor} />
          ) : (
            <ShieldAlert size={18} color={statusColor} />
          )}
          <span style={{ fontSize: 14, fontWeight: 800, color: statusColor, textTransform: "uppercase", letterSpacing: "1px", fontFamily: monoStack }}>
            {incident.status}
          </span>
        </div>
      </div>

      {/* Hero Headline (Bigger Impact Announcement: 42px) */}
      <div>
        <h1 style={{ fontSize: 42, color: "#e6f0ec", fontWeight: 800, lineHeight: 1.25, margin: "0 0 16px 0", letterSpacing: "-0.025em" }}>
          {isResolved ? "Incident Mitigated & Systems Restored" : incident.title}
        </h1>
        <p style={{ fontSize: 18, color: "#8aa399", lineHeight: 1.6, margin: 0, maxWidth: 940 }}>
          {incident.summary}
        </p>
      </div>

      {/* Metrics Strip (Prominent 32px Bold Space Mono Numbers) */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
        <div style={{ backgroundColor: "#151e1b", border: "1px solid #283832", borderRadius: 8, padding: 22 }}>
          <div style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase", fontWeight: 600 }}>Mean Time To Resolve</div>
          <div style={{ fontSize: 32, color: statusColor, fontWeight: 800, margin: "6px 0 2px 0", fontFamily: monoStack }}>{incident.durationMinutes} min</div>
          <div style={{ fontSize: 12, color: "#5e776e" }}>Detection to Mitigation</div>
        </div>

        <div style={{ backgroundColor: "#151e1b", border: "1px solid #283832", borderRadius: 8, padding: 22 }}>
          <div style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase", fontWeight: 600 }}>Peak Error Rate</div>
          <div style={{ fontSize: 32, color: statusColor, fontWeight: 800, margin: "6px 0 2px 0", fontFamily: monoStack }}>{incident.metrics.peakErrorRate}</div>
          <div style={{ fontSize: 12, color: "#5e776e" }}>Global Edge HTTP 5xx</div>
        </div>

        <div style={{ backgroundColor: "#151e1b", border: "1px solid #283832", borderRadius: 8, padding: 22 }}>
          <div style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase", fontWeight: 600 }}>Impacted Requests</div>
          <div style={{ fontSize: 32, color: "#e6f0ec", fontWeight: 800, margin: "6px 0 2px 0", fontFamily: monoStack }}>{incident.metrics.impactedRequests}</div>
          <div style={{ fontSize: 12, color: "#5e776e" }}>Across 4 Anycast PoPs</div>
        </div>
      </div>

      {/* Footer Strip */}
      <div style={{ borderTop: "1px solid #283832", paddingTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 13, color: "#8aa399", fontFamily: monoStack }}>
          Audit Hash: {incident.compliance.auditHash.substring(0, 36)}...
        </span>
        <span style={{ fontSize: 13, color: "#2dd4bf", fontWeight: 700, fontFamily: monoStack }}>
          HYPER ELEMENTS CANVAS ENGINE // ZERO-DAY
        </span>
      </div>
    </div>
  );
}
