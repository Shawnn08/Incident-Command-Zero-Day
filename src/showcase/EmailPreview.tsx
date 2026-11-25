import type { IncidentManifest } from "../data/types";

export default function EmailPreview({
  incident,
  isMobile = false,
}: {
  incident: IncidentManifest;
  isMobile?: boolean;
}) {
  const isResolved = incident.status === "RESOLVED";
  const statusColor = isResolved ? "#10b981" : "#f43f5e";
  const statusBg = isResolved ? "rgba(16, 185, 129, 0.12)" : "rgba(244, 63, 94, 0.12)";
  const statusBorder = isResolved ? "rgba(16, 185, 129, 0.28)" : "rgba(244, 63, 94, 0.28)";
  const btnBg = isResolved ? "#059669" : "#be123c";

  return (
    <div
      style={{
        backgroundColor: "#07090e",
        padding: isMobile ? 16 : 32,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: isMobile ? "375px" : "600px",
          maxWidth: "100%",
          backgroundColor: "#0f1219",
          border: "1px solid #1e2230",
          borderRadius: 8,
          padding: isMobile ? 20 : 28,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          color: "#f8fafc",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div>
            <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              {incident.organization} • SLA Emergency Dispatch
            </div>
            <h1 style={{ fontSize: isMobile ? 20 : 24, fontWeight: 800, margin: "6px 0 0 0", color: "#f8fafc", letterSpacing: "-0.02em" }}>
              {incident.id}: {incident.title}
            </h1>
          </div>

          <div
            style={{
              backgroundColor: statusBg,
              border: `1px solid ${statusBorder}`,
              borderRadius: 4,
              padding: "6px 12px",
              fontSize: 12,
              fontWeight: 700,
              color: statusColor,
              textTransform: "uppercase",
              fontFamily: "'Geist Mono', monospace",
              whiteSpace: "nowrap",
            }}
          >
            {incident.status}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1e2230" }} />

        {/* Executive Summary */}
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "#f8fafc", margin: 0 }}>
          {incident.summary}
        </p>

        <p style={{ fontSize: 13, lineHeight: 1.55, color: "#94a3b8", margin: 0 }}>
          <strong style={{ color: "#f8fafc" }}>Forensic Root Cause: </strong>
          {incident.rootCause}
        </p>

        <p style={{ fontSize: 14, fontStyle: "italic", fontFamily: "'Instrument Serif', 'Newsreader', Georgia, serif", color: "#38bdf8", lineHeight: 1.5, margin: 0 }}>
          Notice: Urgent SLA notification dispatched under RFC 7908 Anycast BGP mitigation protocols.
        </p>

        {/* Telemetry Table */}
        <div style={{ backgroundColor: "#08090d", border: "1px solid #1e2230", borderRadius: 6, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1e2230" }}>
                <th style={{ padding: "10px 14px", textAlign: "left", color: "#94a3b8", textTransform: "uppercase", fontSize: 11 }}>Peak Error</th>
                <th style={{ padding: "10px 14px", textAlign: "left", color: "#94a3b8", textTransform: "uppercase", fontSize: 11 }}>Packet Drop</th>
                <th style={{ padding: "10px 14px", textAlign: "right", color: "#94a3b8", textTransform: "uppercase", fontSize: 11 }}>Impacted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px 14px", fontSize: 18, fontWeight: 800, color: statusColor, fontFamily: "'Geist Mono', monospace" }}>
                  {incident.metrics.peakErrorRate}
                </td>
                <td style={{ padding: "12px 14px", fontSize: 18, fontWeight: 800, color: statusColor, fontFamily: "'Geist Mono', monospace" }}>
                  {incident.metrics.packetLoss}
                </td>
                <td style={{ padding: "12px 14px", fontSize: 18, fontWeight: 800, color: "#f8fafc", textAlign: "right", fontFamily: "'Geist Mono', monospace" }}>
                  {incident.metrics.impactedRequests}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Impacted Region Matrix */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#f8fafc" }}>Impacted Edge Subsystems</div>
          <div style={{ backgroundColor: "#08090d", border: "1px solid #1e2230", borderRadius: 6, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #1e2230" }}>
                  <th style={{ padding: "8px 12px", textAlign: "left", color: "#94a3b8" }}>Service</th>
                  <th style={{ padding: "8px 12px", textAlign: "left", color: "#94a3b8" }}>Region</th>
                  <th style={{ padding: "8px 12px", textAlign: "right", color: "#94a3b8" }}>State</th>
                </tr>
              </thead>
              <tbody>
                {incident.impactedServices.map((svc, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #1e2230" }}>
                    <td style={{ padding: "8px 12px", color: "#f8fafc", fontWeight: 600 }}>{svc.name}</td>
                    <td style={{ padding: "8px 12px", color: "#94a3b8", fontFamily: "'Geist Mono', monospace" }}>{svc.region}</td>
                    <td
                      style={{
                        padding: "8px 12px",
                        textAlign: "right",
                        fontWeight: 700,
                        fontFamily: "'Geist Mono', monospace",
                        color: svc.impactLevel === "OPERATIONAL" ? "#10b981" : "#f43f5e",
                      }}
                    >
                      {svc.impactLevel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ paddingTop: 6 }}>
          <a
            href={`https://status.aethernet.internal/incidents/${incident.id}`}
            style={{
              display: "block",
              backgroundColor: btnBg,
              color: "#ffffff",
              padding: "14px 20px",
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 700,
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            View Live Incident Telemetry &amp; Resolution Feed
          </a>
        </div>

        <div style={{ borderTop: "1px solid #1e2230" }} />

        {/* Footer Meta */}
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#94a3b8", flexWrap: "wrap", gap: 8 }}>
          <span>Incident Commander: <strong style={{ color: "#f8fafc" }}>{incident.commander.name}</strong></span>
          <span style={{ fontFamily: "'Geist Mono', monospace" }}>Audit Hash: {incident.compliance.auditHash.substring(0, 18)}...</span>
        </div>
      </div>
    </div>
  );
}
