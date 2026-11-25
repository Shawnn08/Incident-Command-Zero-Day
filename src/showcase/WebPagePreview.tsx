import type { IncidentManifest } from "../data/types";
import NetworkTopologyMap from "./NetworkTopologyMap";

export default function WebPagePreview({
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
        backgroundColor: "#08090d",
        color: "#f8fafc",
        padding: "44px 40px",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Top Reliability Masthead */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ maxWidth: 680 }}>
          <div
            style={{
              fontSize: 12,
              color: "#94a3b8",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontFamily: "'Geist Mono', monospace",
            }}
          >
            {incident.organization} • Global Edge &amp; Reliability Ops
          </div>
          <h1
            style={{
              fontSize: 32,
              color: "#f8fafc",
              fontWeight: 800,
              margin: "8px 0 0 0",
              letterSpacing: "-0.025em",
              lineHeight: 1.25,
            }}
          >
            {incident.id}: {incident.title}
          </h1>
        </div>

        {/* Live Status Badge */}
        <div
          style={{
            backgroundColor: statusBg,
            border: `1px solid ${statusBorder}`,
            borderRadius: 6,
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: statusColor,
              boxShadow: `0 0 10px ${statusColor}`,
            }}
          />
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: statusColor,
              textTransform: "uppercase",
              fontFamily: "'Geist Mono', monospace",
            }}
          >
            {incident.status}
          </span>
        </div>
      </div>

      {/* Incident Executive Summary Brief */}
      <div
        style={{
          maxWidth: 880,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          paddingBottom: 4,
        }}
      >
        <p style={{ fontSize: 16, lineHeight: "26px", color: "#f8fafc", margin: 0 }}>
          {incident.summary}
        </p>
        <div style={{ fontSize: 14, color: "#94a3b8", lineHeight: "22px" }}>
          <strong style={{ color: "#f8fafc" }}>Forensic Root Cause: </strong>
          {incident.rootCause}
        </div>
        <div
          style={{
            fontSize: 14,
            fontStyle: "italic",
            fontFamily: "'Instrument Serif', 'Newsreader', Georgia, serif",
            color: "#38bdf8",
            lineHeight: "22px",
            borderLeft: "2px solid #38bdf8",
            paddingLeft: "12px",
            marginTop: "4px",
          }}
        >
          "Automated Route Origin Validation (ROV) failed-open across Tier-1 transit interfaces during AS-174 maintenance window."
        </div>
      </div>

      {/* Live Anycast BGP Route Leak Topology Map Visualizer */}
      <div
        style={{
          backgroundColor: "#0f1219",
          border: "1px solid #1e2230",
          borderRadius: 8,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                color: "#94a3b8",
                textTransform: "uppercase",
                fontFamily: "'Geist Mono', monospace",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              Real-Time Anycast Route Mesh
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#f8fafc", marginTop: 2 }}>
              Global Edge Ingress &amp; Transit Leak Visualizer
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 12,
              fontFamily: "'Geist Mono', monospace",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#94a3b8" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#10b981" }} />
              Healthy Route
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#94a3b8" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#f43f5e" }} />
              Leaked Autonomous Path
            </span>
          </div>
        </div>

        {/* The SVG Network Topology Map */}
        <NetworkTopologyMap isResolved={isResolved} />
      </div>

      {/* Unified Telemetry Rail */}
      <div
        style={{
          backgroundColor: "#0f1219",
          border: "1px solid #1e2230",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          }}
        >
          <div style={{ padding: "18px 20px", borderRight: "1px solid #1e2230" }}>
            <div style={{ fontSize: 11, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600, fontFamily: "'Geist Mono', monospace" }}>
              Peak Packet Loss
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, color: statusColor, marginTop: 4, fontFamily: "'Geist Mono', monospace" }}>
              {incident.metrics.packetLoss}
            </div>
          </div>

          <div style={{ padding: "18px 20px", borderRight: "1px solid #1e2230" }}>
            <div style={{ fontSize: 11, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600, fontFamily: "'Geist Mono', monospace" }}>
              Peak Error Rate
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, color: statusColor, marginTop: 4, fontFamily: "'Geist Mono', monospace" }}>
              {incident.metrics.peakErrorRate}
            </div>
          </div>

          <div style={{ padding: "18px 20px", borderRight: "1px solid #1e2230" }}>
            <div style={{ fontSize: 11, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600, fontFamily: "'Geist Mono', monospace" }}>
              Degraded PoPs
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#f8fafc", marginTop: 4, fontFamily: "'Geist Mono', monospace" }}>
              {incident.metrics.affectedPoPs} / {incident.metrics.totalPoPs}
            </div>
          </div>

          <div style={{ padding: "18px 20px", borderRight: "1px solid #1e2230" }}>
            <div style={{ fontSize: 11, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600, fontFamily: "'Geist Mono', monospace" }}>
              Impacted Invocations
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#f8fafc", marginTop: 4, fontFamily: "'Geist Mono', monospace" }}>
              {incident.metrics.impactedRequests}
            </div>
          </div>

          <div style={{ padding: "18px 20px" }}>
            <div style={{ fontSize: 11, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600, fontFamily: "'Geist Mono', monospace" }}>
              SLA Availability
            </div>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#f8fafc", marginTop: 4, fontFamily: "'Geist Mono', monospace" }}>
              {incident.metrics.slaAvailability}
            </div>
          </div>
        </div>
      </div>

      {/* Subsystem Health Matrix */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 18, color: "#f8fafc", fontWeight: 700, margin: 0 }}>
          Subsystem Health Matrix
        </h2>

        <div
          style={{
            backgroundColor: "#0f1219",
            border: "1px solid #1e2230",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #1e2230", textAlign: "left" }}>
                <th style={{ padding: "14px 18px", color: "#94a3b8", fontWeight: 600 }}>Microservice</th>
                <th style={{ padding: "14px 18px", color: "#94a3b8", fontWeight: 600 }}>Edge Region</th>
                <th style={{ padding: "14px 18px", color: "#94a3b8", fontWeight: 600 }}>Latency Delta</th>
                <th style={{ padding: "14px 18px", color: "#94a3b8", fontWeight: 600 }}>Error Rate</th>
                <th style={{ padding: "14px 18px", color: "#94a3b8", fontWeight: 600, textAlign: "right" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {incident.impactedServices.map((service, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid #1e2230" }}>
                  <td style={{ padding: "14px 18px", color: "#f8fafc", fontWeight: 600 }}>
                    {service.name}
                  </td>
                  <td style={{ padding: "14px 18px", color: "#94a3b8", fontFamily: "'Geist Mono', monospace" }}>
                    {service.region}
                  </td>
                  <td style={{ padding: "14px 18px", color: "#94a3b8", fontFamily: "'Geist Mono', monospace" }}>
                    {service.latencyDelta}
                  </td>
                  <td style={{ padding: "14px 18px", color: "#f8fafc", fontFamily: "'Geist Mono', monospace" }}>
                    {service.errorRate}
                  </td>
                  <td
                    style={{
                      padding: "14px 18px",
                      textAlign: "right",
                      fontWeight: 700,
                      fontFamily: "'Geist Mono', monospace",
                      color:
                        service.impactLevel === "OPERATIONAL"
                          ? "#10b981"
                          : service.impactLevel === "DEGRADED"
                          ? "#f59e0b"
                          : "#f43f5e",
                    }}
                  >
                    {service.impactLevel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chronological Mitigation Stream */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 18, color: "#f8fafc", fontWeight: 700, margin: 0 }}>
          Chronological Mitigation Stream
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {incident.timeline.map((event, idx) => (
            <div
              key={idx}
              style={{
                padding: "16px 20px",
                backgroundColor: "#0f1219",
                borderRadius: 6,
                border: "1px solid #1e2230",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
              }}
            >
              <div style={{ minWidth: 140, display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#10b981", fontFamily: "'Geist Mono', monospace" }}>
                  {event.phase}
                </span>
                <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'Geist Mono', monospace" }}>
                  {event.timestamp}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
                <h3 style={{ fontSize: 15, color: "#f8fafc", fontWeight: 600, margin: 0 }}>
                  {event.title}
                </h3>
                <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: "20px", margin: 0 }}>
                  {event.description}
                </p>
                <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>
                  Actor: <span style={{ color: "#f8fafc" }}>{event.actor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Compliance Bar */}
      <div
        style={{
          borderTop: "1px solid #1e2230",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          fontSize: 12,
          color: "#94a3b8",
        }}
      >
        <div>
          Incident Commander: <strong style={{ color: "#f8fafc" }}>{incident.commander.name}</strong> ({incident.commander.role})
          <div style={{ fontFamily: "'Geist Mono', monospace", color: "#64748b", marginTop: 2 }}>
            Audit Hash: {incident.compliance.auditHash}
          </div>
        </div>

        <button
          onClick={() => alert(`Official Audit Hash Verified:\n${incident.compliance.auditHash}\nSOC2 Classification: ${incident.compliance.classification}`)}
          style={{
            backgroundColor: "#161924",
            color: "#f8fafc",
            border: "1px solid #1e2230",
            borderRadius: 6,
            padding: "8px 16px",
            fontSize: 12,
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "'Geist', sans-serif",
          }}
        >
          Verify Audit Seal
        </button>
      </div>
    </div>
  );
}
