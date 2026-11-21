import type { IncidentManifest, TypographyOptionId } from "../data/types";

export default function AuditDocPreview({
  incident,
  typography = "option-c",
}: {
  incident: IncidentManifest;
  typography?: TypographyOptionId;
}) {
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
        padding: "44px 52px",
        fontFamily: fontStack,
        display: "flex",
        flexDirection: "column",
        gap: 36,
      }}
    >
      {/* ==================== PAGE 1 ==================== */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Page 1 Header */}
        <div
          style={{
            borderBottom: "1px solid #283832",
            paddingBottom: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            fontWeight: 700,
            fontFamily: monoStack,
          }}
        >
          <span style={{ color: "#8aa399", textTransform: "uppercase", letterSpacing: "1px" }}>
            {incident.organization} • RELIABILITY ENGINEERING &amp; COMPLIANCE
          </span>
          <span style={{ color: "#fda4af", textTransform: "uppercase" }}>
            {incident.compliance.classification}
          </span>
        </div>

        {/* Title Banner (Bigger Heading: 28px) */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
          <div>
            <div style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase", fontWeight: 700, fontFamily: monoStack }}>
              Official Engineering Incident Report
            </div>
            <h1 style={{ fontSize: 28, color: "#e6f0ec", fontWeight: 800, margin: "6px 0 0 0", letterSpacing: "-0.02em" }}>
              Root Cause Analysis (RCA): {incident.id}
            </h1>
          </div>
          <div style={{ backgroundColor: "rgba(253, 164, 175, 0.14)", border: "1px solid rgba(253, 164, 175, 0.3)", borderRadius: 6, padding: "8px 14px" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#fda4af", fontFamily: monoStack }}>
              {incident.severity}
            </span>
          </div>
        </div>

        <div style={{ fontSize: 15, color: "#cbd5e1" }}>
          Incident Title: <strong style={{ color: "#e6f0ec" }}>{incident.title}</strong>
        </div>

        {/* Incident Metadata Table */}
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, backgroundColor: "#151e1b", border: "1px solid #283832", borderRadius: 8, overflow: "hidden" }}>
          <tbody>
            <tr style={{ borderBottom: "1px solid #283832" }}>
              <td style={{ padding: "12px 16px", fontWeight: 700, color: "#8aa399", width: "25%" }}>Incident Commander</td>
              <td style={{ padding: "12px 16px", color: "#e6f0ec", width: "25%" }}>{incident.commander.name}</td>
              <td style={{ padding: "12px 16px", fontWeight: 700, color: "#8aa399", width: "25%" }}>Total Downtime</td>
              <td style={{ padding: "12px 16px", color: "#fda4af", fontWeight: 700, width: "25%", fontFamily: monoStack }}>{incident.durationMinutes} Minutes (MTTR)</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #283832" }}>
              <td style={{ padding: "12px 16px", fontWeight: 700, color: "#8aa399" }}>Incident Started</td>
              <td style={{ padding: "12px 16px", color: "#e6f0ec", fontFamily: monoStack }}>{incident.startedAt}</td>
              <td style={{ padding: "12px 16px", fontWeight: 700, color: "#8aa399" }}>Incident Mitigated</td>
              <td style={{ padding: "12px 16px", color: "#e6f0ec", fontFamily: monoStack }}>{incident.mitigatedAt}</td>
            </tr>
            <tr>
              <td style={{ padding: "12px 16px", fontWeight: 700, color: "#8aa399" }}>Peak Error Rate</td>
              <td style={{ padding: "12px 16px", color: "#fda4af", fontWeight: 700, fontFamily: monoStack }}>{incident.metrics.peakErrorRate}</td>
              <td style={{ padding: "12px 16px", fontWeight: 700, color: "#8aa399" }}>Impacted Requests</td>
              <td style={{ padding: "12px 16px", color: "#e6f0ec", fontFamily: monoStack }}>{incident.metrics.impactedRequests}</td>
            </tr>
          </tbody>
        </table>

        {/* Section 1: Executive Summary */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
          <h2 style={{ fontSize: 18, color: "#2dd4bf", fontWeight: 700, margin: 0, textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: monoStack }}>
            1. Executive Summary &amp; Impact Assessment
          </h2>
          <p style={{ fontSize: 16, lineHeight: "26px", color: "#cbd5e1", margin: 0 }}>
            {incident.summary}
          </p>
        </div>

        {/* Section 2: Technical Root Cause Analysis */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h2 style={{ fontSize: 18, color: "#2dd4bf", fontWeight: 700, margin: 0, textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: monoStack }}>
            2. Technical Root Cause (RFC 7908 Route Leak)
          </h2>
          <p style={{ fontSize: 16, lineHeight: "26px", color: "#cbd5e1", margin: 0 }}>
            {incident.rootCause}
          </p>
        </div>

        {/* Section 3: Impact Matrix */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h2 style={{ fontSize: 18, color: "#2dd4bf", fontWeight: 700, margin: 0, textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: monoStack }}>
            3. Multi-Region Service Degradation Matrix
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, backgroundColor: "#151e1b", border: "1px solid #283832", borderRadius: 8, overflow: "hidden" }}>
            <thead>
              <tr style={{ backgroundColor: "#1e2a26", borderBottom: "1px solid #283832" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", color: "#8aa399" }}>Service Layer</th>
                <th style={{ padding: "12px 16px", textAlign: "left", color: "#8aa399" }}>Status</th>
                <th style={{ padding: "12px 16px", textAlign: "left", color: "#8aa399" }}>Latency Delta</th>
              </tr>
            </thead>
            <tbody>
              {incident.impactedServices.map((svc, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #1e2a26" }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600, color: "#e6f0ec" }}>{svc.name}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span
                      style={{
                        fontSize: 12,
                        padding: "4px 10px",
                        borderRadius: 4,
                        fontWeight: 700,
                        backgroundColor:
                          svc.impactLevel === "OFFLINE"
                            ? "rgba(253, 164, 175, 0.16)"
                            : svc.impactLevel === "DEGRADED"
                            ? "rgba(251, 191, 36, 0.16)"
                            : "rgba(110, 231, 183, 0.16)",
                        color:
                          svc.impactLevel === "OFFLINE"
                            ? "#fda4af"
                            : svc.impactLevel === "DEGRADED"
                            ? "#fbbf24"
                            : "#6ee7b7",
                        fontFamily: monoStack,
                      }}
                    >
                      {svc.impactLevel}
                    </span>
                  </td>
                  <td style={{ padding: "12px 16px", color: "#8aa399", fontFamily: monoStack }}>{svc.latencyDelta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==================== PAGE 2 (Page Break) ==================== */}
      <div style={{ borderTop: "2px dashed #283832", paddingTop: 36, display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Page 2 Header */}
        <div
          style={{
            borderBottom: "1px solid #283832",
            paddingBottom: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            fontWeight: 700,
            fontFamily: monoStack,
          }}
        >
          <span style={{ color: "#8aa399" }}>
            {incident.organization} • RCA {incident.id} (PAGE 2 OF 2)
          </span>
          <span style={{ color: "#2dd4bf" }}>
            CORRECTIVE ACTIONS &amp; COMPLIANCE
          </span>
        </div>

        {/* Section 4: Chronological Incident Log */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h2 style={{ fontSize: 18, color: "#2dd4bf", fontWeight: 700, margin: 0, textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: monoStack }}>
            4. Chronological Mitigation Log
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, backgroundColor: "#151e1b", border: "1px solid #283832", borderRadius: 8, overflow: "hidden" }}>
            <thead>
              <tr style={{ backgroundColor: "#1e2a26", borderBottom: "1px solid #283832" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", color: "#8aa399", width: "18%" }}>Time (UTC)</th>
                <th style={{ padding: "12px 16px", textAlign: "left", color: "#8aa399", width: "62%" }}>Action &amp; Telemetry</th>
                <th style={{ padding: "12px 16px", textAlign: "left", color: "#8aa399", width: "20%" }}>Actor</th>
              </tr>
            </thead>
            <tbody>
              {incident.timeline.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #1e2a26" }}>
                  <td style={{ padding: "12px 16px", fontFamily: monoStack, fontWeight: 700, color: "#2dd4bf" }}>{item.timestamp}</td>
                  <td style={{ padding: "12px 16px", color: "#e6f0ec" }}>
                    <strong>{item.title}:</strong> {item.description}
                  </td>
                  <td style={{ padding: "12px 16px", color: "#8aa399", fontSize: 13 }}>{item.actor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 5: Action Items & Prevention */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <h2 style={{ fontSize: 18, color: "#2dd4bf", fontWeight: 700, margin: 0, textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: monoStack }}>
            5. Corrective Action Items &amp; Architectural Hardening
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, backgroundColor: "#151e1b", border: "1px solid #283832", borderRadius: 8, overflow: "hidden" }}>
            <thead>
              <tr style={{ backgroundColor: "#1e2a26", borderBottom: "1px solid #283832" }}>
                <th style={{ padding: "12px 16px", textAlign: "left", color: "#8aa399", width: "15%" }}>ID</th>
                <th style={{ padding: "12px 16px", textAlign: "left", color: "#8aa399", width: "45%" }}>Action Item</th>
                <th style={{ padding: "12px 16px", textAlign: "left", color: "#8aa399", width: "20%" }}>Owner</th>
                <th style={{ padding: "12px 16px", textAlign: "left", color: "#8aa399", width: "20%" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {incident.actionItems.map((act) => (
                <tr key={act.id} style={{ borderBottom: "1px solid #1e2a26" }}>
                  <td style={{ padding: "12px 16px", fontFamily: monoStack, color: "#2dd4bf", fontWeight: 700 }}>{act.id}</td>
                  <td style={{ padding: "12px 16px", color: "#e6f0ec" }}>{act.description}</td>
                  <td style={{ padding: "12px 16px", color: "#8aa399" }}>{act.owner}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{ fontSize: 12, padding: "4px 10px", borderRadius: 4, fontWeight: 700, backgroundColor: act.status === "COMPLETED" ? "rgba(110, 231, 183, 0.16)" : "rgba(251, 191, 36, 0.16)", color: act.status === "COMPLETED" ? "#6ee7b7" : "#fbbf24", fontFamily: monoStack }}>
                      {act.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Commander Sign-Off & Verification Stamp */}
        <div style={{ backgroundColor: "#151e1b", border: "1px solid #283832", borderRadius: 8, padding: 22, display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
          <div>
            <div style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase", fontWeight: 600 }}>Commander Sign-Off</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#e6f0ec" }}>{incident.commander.name}</div>
            <div style={{ fontSize: 13, color: "#8aa399" }}>{incident.commander.role}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase", fontWeight: 600 }}>Compliance Hash</div>
            <div style={{ fontSize: 12, color: "#6ee7b7", fontFamily: monoStack }}>
              [VERIFIED] {incident.compliance.auditHash.substring(0, 24)}...
            </div>
            <div style={{ fontSize: 12, color: "#8aa399" }}>SOC-2 Type II Validated</div>
          </div>
        </div>
      </div>
    </div>
  );
}
