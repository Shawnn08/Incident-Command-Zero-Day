import type { IncidentManifest } from "../data/types";

export default function SocialCardPreview({
  incident,
}: {
  incident: IncidentManifest;
}) {
  const isResolved = incident.status === "RESOLVED";
  const statusColor = isResolved ? "#10b981" : "#f43f5e";
  const statusBg = isResolved ? "rgba(16, 185, 129, 0.12)" : "rgba(244, 63, 94, 0.12)";
  const statusBorder = isResolved ? "rgba(16, 185, 129, 0.28)" : "rgba(244, 63, 94, 0.28)";

  return (
    <div
      style={{
        backgroundColor: "#07090e",
        padding: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          aspectRatio: "1200 / 630",
          backgroundColor: "#08090d",
          border: "1px solid #1e2230",
          borderRadius: 12,
          padding: 48,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 24px 64px rgba(0, 0, 0, 0.7)",
          fontFamily: "'Geist', sans-serif",
          color: "#f8fafc",
        }}
      >
        {/* Top Header Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                backgroundColor: "#0f1219",
                border: "1px solid #1e2230",
                borderRadius: 6,
                padding: "6px 14px",
                fontSize: 14,
                fontWeight: 700,
                color: "#10b981",
                fontFamily: "'Geist Mono', monospace",
              }}
            >
              {incident.id}
            </span>
            <span style={{ fontSize: 14, color: "#94a3b8", fontWeight: 600 }}>
              {incident.organization} • Global Reliability Operations
            </span>
          </div>

          <div
            style={{
              backgroundColor: statusBg,
              border: `1px solid ${statusBorder}`,
              borderRadius: 6,
              padding: "6px 16px",
              fontSize: 13,
              fontWeight: 800,
              color: statusColor,
              textTransform: "uppercase",
              fontFamily: "'Geist Mono', monospace",
              letterSpacing: "0.5px",
            }}
          >
            ● {incident.status}
          </div>
        </div>

        {/* Headline */}
        <div>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: "#f8fafc", margin: 0, lineHeight: 1.25, letterSpacing: "-0.02em" }}>
            {isResolved ? "Incident Mitigated: Systems 100% Restored" : incident.title}
          </h1>
          <p style={{ fontSize: 18, fontStyle: "italic", fontFamily: "'Instrument Serif', 'Newsreader', Georgia, serif", color: "#cbd5e1", marginTop: 12, lineHeight: 1.6, maxWidth: 840, margin: "12px 0 0 0" }}>
            "{incident.summary}"
          </p>
        </div>

        {/* Highlights Ledger */}
        <div
          style={{
            backgroundColor: "#0f1219",
            border: "1px solid #1e2230",
            borderRadius: 8,
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ fontSize: 11, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600, fontFamily: "'Geist Mono', monospace" }}>
              Mean Time To Resolve
            </div>
            <div style={{ fontSize: 28, color: statusColor, fontWeight: 800, marginTop: 4, fontFamily: "'Geist Mono', monospace" }}>
              {incident.durationMinutes} Minutes
            </div>
          </div>

          <div style={{ width: 1, height: 40, backgroundColor: "#1e2230" }} />

          <div>
            <div style={{ fontSize: 11, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600, fontFamily: "'Geist Mono', monospace" }}>
              Peak Packet Loss
            </div>
            <div style={{ fontSize: 28, color: isResolved ? "#10b981" : "#f43f5e", fontWeight: 800, marginTop: 4, fontFamily: "'Geist Mono', monospace" }}>
              {incident.metrics.packetLoss}
            </div>
          </div>

          <div style={{ width: 1, height: 40, backgroundColor: "#1e2230" }} />

          <div>
            <div style={{ fontSize: 11, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600, fontFamily: "'Geist Mono', monospace" }}>
              Edge Traffic Recovered
            </div>
            <div style={{ fontSize: 28, color: "#f8fafc", fontWeight: 800, marginTop: 4, fontFamily: "'Geist Mono', monospace" }}>
              {incident.metrics.slaAvailability}
            </div>
          </div>

          <div style={{ width: 1, height: 40, backgroundColor: "#1e2230" }} />

          <div>
            <div style={{ fontSize: 11, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600, fontFamily: "'Geist Mono', monospace" }}>
              SOC2 Cryptographic Seal
            </div>
            <div style={{ fontSize: 13, color: "#10b981", fontWeight: 700, fontFamily: "'Geist Mono', monospace", marginTop: 4 }}>
              [VERIFIED] {incident.compliance.auditHash.substring(0, 14)}...
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#94a3b8" }}>
          <span>Incident Commander: {incident.commander.name} ({incident.commander.role})</span>
          <span>Official Audit Time: {incident.compliance.signDate}</span>
        </div>
      </div>
    </div>
  );
}
