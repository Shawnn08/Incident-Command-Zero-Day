import type { IncidentManifest } from "../data/types";

export default function AuditDocPreview({
  incident,
}: {
  incident: IncidentManifest;
}) {
  const isResolved = incident.status === "RESOLVED";

  return (
    <div
      style={{
        backgroundColor: "#07090e",
        padding: "40px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 32,
        fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* ==================== A4 SHEET 1 ==================== */}
      <div
        style={{
          width: "100%",
          maxWidth: "840px",
          backgroundColor: "#ffffff",
          color: "#0f172a",
          padding: "52px 60px",
          borderRadius: "4px",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.45)",
          display: "flex",
          flexDirection: "column",
          gap: 22,
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            borderBottom: "1px solid #e2e8f0",
            paddingBottom: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 10,
            fontWeight: 700,
            fontFamily: "'Geist Mono', monospace",
          }}
        >
          <span style={{ color: "#475569", textTransform: "uppercase", letterSpacing: "1px" }}>
            {incident.organization} • RELIABILITY ENGINEERING &amp; AUDIT COMPLIANCE
          </span>
          <span style={{ color: "#b91c1c", textTransform: "uppercase" }}>
            {incident.compliance.classification}
          </span>
        </div>

        {/* Title */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", fontWeight: 700, fontFamily: "'Geist Mono', monospace", letterSpacing: "1px" }}>
              Official Engineering Post-Mortem Dossier
            </div>
            <h1 style={{ fontSize: 28, color: "#0f172a", fontWeight: 800, margin: "6px 0 0 0", letterSpacing: "-0.02em" }}>
              Root Cause Analysis (RCA): {incident.id}
            </h1>
            <p style={{ fontSize: 18, fontStyle: "italic", fontFamily: "'Instrument Serif', 'Newsreader', Georgia, serif", color: "#475569", margin: "4px 0 0 0" }}>
              A forensic examination of Anycast BGP route propagation, telemetry failure modes, and architectural safeguards.
            </p>
          </div>
          <div
            style={{
              backgroundColor: isResolved ? "#ecfdf5" : "#fef2f2",
              border: `1px solid ${isResolved ? "#a7f3d0" : "#fecaca"}`,
              borderRadius: 4,
              padding: "6px 14px",
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, color: isResolved ? "#047857" : "#b91c1c", fontFamily: "'Geist Mono', monospace" }}>
              {incident.severity} • {incident.status}
            </span>
          </div>
        </div>

        {/* Core Metadata Table */}
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 4 }}>
          <tbody>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "10px 14px", fontWeight: 700, color: "#475569", width: "25%" }}>Incident Commander</td>
              <td style={{ padding: "10px 14px", color: "#0f172a", width: "25%" }}>{incident.commander.name}</td>
              <td style={{ padding: "10px 14px", fontWeight: 700, color: "#475569", width: "25%" }}>Total Downtime</td>
              <td style={{ padding: "10px 14px", color: "#047857", fontWeight: 700, width: "25%", fontFamily: "'Geist Mono', monospace" }}>{incident.durationMinutes} Minutes (MTTR)</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
              <td style={{ padding: "10px 14px", fontWeight: 700, color: "#475569" }}>Incident Started</td>
              <td style={{ padding: "10px 14px", color: "#0f172a", fontFamily: "'Geist Mono', monospace" }}>{incident.startedAt}</td>
              <td style={{ padding: "10px 14px", fontWeight: 700, color: "#475569" }}>Incident Mitigated</td>
              <td style={{ padding: "10px 14px", color: "#0f172a", fontFamily: "'Geist Mono', monospace" }}>{incident.mitigatedAt}</td>
            </tr>
            <tr>
              <td style={{ padding: "10px 14px", fontWeight: 700, color: "#475569" }}>Peak Error Rate</td>
              <td style={{ padding: "10px 14px", color: "#b91c1c", fontWeight: 700, fontFamily: "'Geist Mono', monospace" }}>{incident.metrics.peakErrorRate}</td>
              <td style={{ padding: "10px 14px", fontWeight: 700, color: "#475569" }}>Impacted Requests</td>
              <td style={{ padding: "10px 14px", color: "#0f172a", fontFamily: "'Geist Mono', monospace" }}>{incident.metrics.impactedRequests}</td>
            </tr>
          </tbody>
        </table>

        {/* Section 1: Executive Summary */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <h2 style={{ fontSize: 16, color: "#0f172a", fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>
            1. Executive Summary &amp; Impact Assessment
          </h2>
          <p style={{ fontSize: 13, lineHeight: "22px", color: "#334155", margin: 0 }}>
            {incident.summary}
          </p>
        </div>

        {/* Section 2: Technical Root Cause */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <h2 style={{ fontSize: 16, color: "#0f172a", fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>
            2. Technical Root Cause (RFC 7908 Route Leak)
          </h2>
          <p style={{ fontSize: 13, lineHeight: "22px", color: "#334155", margin: 0 }}>
            {incident.rootCause}
          </p>
        </div>

        {/* Section 3: 5-Whys Forensic Analysis */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h2 style={{ fontSize: 16, color: "#0f172a", fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>
            3. Five-Whys Forensic Cascade
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, border: "1px solid #e2e8f0" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0", textAlign: "left" }}>
                <th style={{ padding: "8px 12px", color: "#475569", fontWeight: 700, width: "14%" }}>Level</th>
                <th style={{ padding: "8px 12px", color: "#475569", fontWeight: 700, width: "43%" }}>Diagnostic Question</th>
                <th style={{ padding: "8px 12px", color: "#475569", fontWeight: 700, width: "43%" }}>Forensic Finding</th>
              </tr>
            </thead>
            <tbody>
              {incident.fiveWhys.map((why) => (
                <tr key={why.level} style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "8px 12px", fontWeight: 700, color: "#0369a1", fontFamily: "'Geist Mono', monospace" }}>Why #{why.level}</td>
                  <td style={{ padding: "8px 12px", color: "#0f172a" }}>{why.question}</td>
                  <td style={{ padding: "8px 12px", color: "#475569" }}>{why.answer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Page 1 Footer */}
        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 10, marginTop: "auto", display: "flex", justifyContent: "space-between", fontSize: 10, color: "#64748b" }}>
          <span>Incident {incident.id} Post-Mortem • Audit Hash: {incident.compliance.auditHash.substring(0, 24)}...</span>
          <span>Page 1 of 2</span>
        </div>
      </div>

      {/* Sheet Divider Indicator */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ height: "1px", width: "40px", backgroundColor: "#272a38" }} />
        <span style={{ fontSize: 11, color: "#94a3b8", fontFamily: "'Geist Mono', monospace", textTransform: "uppercase", letterSpacing: "1px" }}>
          Page 2 // Corrective Actions &amp; Compliance Sign-Off
        </span>
        <div style={{ height: "1px", width: "40px", backgroundColor: "#272a38" }} />
      </div>

      {/* ==================== A4 SHEET 2 ==================== */}
      <div
        style={{
          width: "100%",
          maxWidth: "840px",
          backgroundColor: "#ffffff",
          color: "#0f172a",
          padding: "52px 60px",
          borderRadius: "4px",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.45)",
          display: "flex",
          flexDirection: "column",
          gap: 22,
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            borderBottom: "1px solid #e2e8f0",
            paddingBottom: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 10,
            fontWeight: 700,
            fontFamily: "'Geist Mono', monospace",
          }}
        >
          <span style={{ color: "#475569", textTransform: "uppercase", letterSpacing: "1px" }}>
            {incident.organization} • RELIABILITY ENGINEERING &amp; AUDIT COMPLIANCE
          </span>
          <span style={{ color: "#b91c1c", textTransform: "uppercase" }}>
            {incident.compliance.classification}
          </span>
        </div>

        {/* Section 4: Chronological Timeline Log */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h2 style={{ fontSize: 16, color: "#0f172a", fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>
            4. Chronological Remediation Log
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, border: "1px solid #e2e8f0" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0", textAlign: "left" }}>
                <th style={{ padding: "8px 12px", color: "#475569", fontWeight: 700, width: "18%" }}>Timestamp</th>
                <th style={{ padding: "8px 12px", color: "#475569", fontWeight: 700, width: "62%" }}>Mitigation Event</th>
                <th style={{ padding: "8px 12px", color: "#475569", fontWeight: 700, width: "20%" }}>Actor</th>
              </tr>
            </thead>
            <tbody>
              {incident.timeline.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "8px 12px", fontWeight: 700, color: "#047857", fontFamily: "'Geist Mono', monospace" }}>{item.timestamp}</td>
                  <td style={{ padding: "8px 12px", color: "#0f172a" }}>
                    <span style={{ fontWeight: 600 }}>{item.title}: </span>
                    {item.description}
                  </td>
                  <td style={{ padding: "8px 12px", color: "#64748b" }}>{item.actor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 5: Corrective Action Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h2 style={{ fontSize: 16, color: "#0f172a", fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>
            5. Corrective Action Items &amp; Architectural Hardening
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, border: "1px solid #e2e8f0" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0", textAlign: "left" }}>
                <th style={{ padding: "8px 12px", color: "#475569", fontWeight: 700, width: "16%" }}>Jira Ticket</th>
                <th style={{ padding: "8px 12px", color: "#475569", fontWeight: 700, width: "46%" }}>Action Item</th>
                <th style={{ padding: "8px 12px", color: "#475569", fontWeight: 700, width: "20%" }}>Owner</th>
                <th style={{ padding: "8px 12px", color: "#475569", fontWeight: 700, width: "18%", textAlign: "right" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {incident.actionItems.map((act) => (
                <tr key={act.id} style={{ borderBottom: "1px solid #e2e8f0" }}>
                  <td style={{ padding: "8px 12px", fontWeight: 700, color: "#0369a1", fontFamily: "'Geist Mono', monospace" }}>{act.id}</td>
                  <td style={{ padding: "8px 12px", color: "#0f172a" }}>{act.description}</td>
                  <td style={{ padding: "8px 12px", color: "#64748b" }}>{act.owner}</td>
                  <td style={{ padding: "8px 12px", fontWeight: 700, textAlign: "right", color: act.status === "COMPLETED" ? "#047857" : "#b45309", fontFamily: "'Geist Mono', monospace" }}>
                    {act.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 6: Executive Validation & Cryptographic Sign-Off */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
          <h2 style={{ fontSize: 16, color: "#0f172a", fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>
            6. Executive Validation &amp; Compliance Sign-Off
          </h2>
          <div
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #cbd5e1",
              borderRadius: 4,
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div>
              <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", fontWeight: 700 }}>Executive Sign-Off</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginTop: 2 }}>
                {incident.compliance.signedByVp} <span style={{ fontSize: 12, color: "#64748b", fontWeight: 400 }}>({incident.compliance.signedBySec})</span>
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", fontWeight: 700 }}>Cryptographic Audit Seal</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#047857", fontFamily: "'Geist Mono', monospace", marginTop: 2 }}>
                [VERIFIED] {incident.compliance.auditHash.substring(0, 24)}...
              </div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>Signed: {incident.compliance.signDate}</div>
            </div>
          </div>
        </div>

        {/* Page 2 Footer */}
        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 10, marginTop: "auto", display: "flex", justifyContent: "space-between", fontSize: 10, color: "#64748b" }}>
          <span>Incident {incident.id} Post-Mortem • Audit Hash: {incident.compliance.auditHash.substring(0, 24)}...</span>
          <span>Page 2 of 2</span>
        </div>
      </div>
    </div>
  );
}
