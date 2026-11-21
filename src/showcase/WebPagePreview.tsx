import type { IncidentManifest, TypographyOptionId } from "../data/types";
import { colorSuites, type ColorSuiteId } from "../theme/colorSuites";
import NetworkTopologyMap from "./NetworkTopologyMap";
import {
  ShieldAlert,
  CheckCircle2,
  Clock,
  Terminal,
  Activity,
  Share2,
  Bell,
  RefreshCw,
} from "lucide-react";

export default function WebPagePreview({
  incident,
  typography = "option-c",
  denoised = true,
  suite = "moss-eucalyptus",
}: {
  incident: IncidentManifest;
  typography?: TypographyOptionId;
  denoised?: boolean;
  suite?: ColorSuiteId;
}) {
  const isResolved = incident.status === "RESOLVED";
  const currentSuite = colorSuites[suite] || colorSuites["moss-eucalyptus"];

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

  const statusBg = currentSuite.statusBg(isResolved);
  const statusBorder = currentSuite.statusBorder(isResolved);
  const statusColor = currentSuite.statusText(isResolved);

  const cardBorder = denoised ? currentSuite.cardBorder : (isResolved ? "2px solid #059669" : "2px solid #dc2626");

  return (
    <div
      style={{
        backgroundColor: currentSuite.canvasBg,
        color: currentSuite.textPrimary,
        padding: "40px 36px",
        display: "flex",
        flexDirection: "column",
        gap: 28,
        fontFamily: fontStack,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Top Navigation Bar: Floating 44px Bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div
            style={{
              fontSize: 13,
              color: currentSuite.accentColor,
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontFamily: monoStack,
              fontWeight: 700,
            }}
          >
            {incident.organization} • Live Systems &amp; Network Health Portal
          </div>
          <h1
            style={{
              fontSize: 32,
              color: currentSuite.textPrimary,
              fontWeight: 800,
              margin: "6px 0 0 0",
              letterSpacing: "-0.025em",
              lineHeight: "40px",
            }}
          >
            {incident.id}: {incident.title}
          </h1>
        </div>

        {/* Soft Triage Status Badge (44px Height Target) */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              backgroundColor: denoised ? statusBg : (isResolved ? "#059669" : "#dc2626"),
              border: `1px solid ${denoised ? statusBorder : (isResolved ? "#059669" : "#dc2626")}`,
              borderRadius: 6,
              padding: "8px 18px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              minHeight: 44,
              height: 44,
            }}
          >
            {isResolved ? (
              <CheckCircle2 size={18} color={denoised ? statusColor : "#ffffff"} />
            ) : (
              <ShieldAlert size={18} color={denoised ? statusColor : "#ffffff"} />
            )}
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: denoised ? statusColor : "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontFamily: monoStack,
              }}
            >
              ● {incident.status}
            </span>
          </div>

          <button
            style={{
              backgroundColor: currentSuite.secondaryBtnBg,
              color: currentSuite.textPrimary,
              border: currentSuite.secondaryBtnBorder,
              borderRadius: 6,
              minHeight: 44,
              height: 44,
              padding: "0 18px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <Bell size={15} /> Subscribe
          </button>
        </div>
      </div>

      {/* Main Card: Executive Summary & Telemetry Grid (10px Radius) */}
      <div
        style={{
          backgroundColor: currentSuite.cardBg,
          border: cardBorder,
          borderRadius: 10,
          boxShadow: currentSuite.cardBoxShadow,
          padding: 28,
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${currentSuite.cardBorder}`, paddingBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Activity size={20} color={currentSuite.accentColor} />
            <h2 style={{ fontSize: 18, fontWeight: 700, color: currentSuite.textPrimary, margin: 0 }}>
              Executive Triage &amp; Infrastructure Impact
            </h2>
          </div>
          <span style={{ fontSize: 13, color: currentSuite.textSecondary, fontFamily: monoStack }}>
            Started: {incident.startedAt} UTC
          </span>
        </div>

        {/* Strictly 16px Body Copy with 1.6 Line Height */}
        <p style={{ fontSize: 16, lineHeight: "26px", color: currentSuite.textPrimary, margin: 0 }}>
          {incident.summary}
        </p>

        {/* 4-Column Hero Metrics Grid (Prominent Numbers: 30px Bold) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 14 }}>
          <div
            style={{
              backgroundColor: currentSuite.metricBg,
              border: currentSuite.metricBorder,
              borderRadius: 6,
              padding: 18,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 12, color: currentSuite.textSecondary, textTransform: "uppercase", fontWeight: 600 }}>
              Peak Error Rate
            </span>
            <span style={{ fontSize: 30, fontWeight: 800, color: statusColor, fontFamily: monoStack }}>
              {incident.metrics.peakErrorRate}
            </span>
            <span style={{ fontSize: 12, color: currentSuite.textMuted }}>Baseline: &lt;0.01%</span>
          </div>

          <div
            style={{
              backgroundColor: currentSuite.metricBg,
              border: currentSuite.metricBorder,
              borderRadius: 6,
              padding: 18,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 12, color: currentSuite.textSecondary, textTransform: "uppercase", fontWeight: 600 }}>
              Edge Packet Loss
            </span>
            <span style={{ fontSize: 30, fontWeight: 800, color: statusColor, fontFamily: monoStack }}>
              {incident.metrics.packetLoss}
            </span>
            <span style={{ fontSize: 12, color: currentSuite.textMuted }}>Tier-1 Transits</span>
          </div>

          <div
            style={{
              backgroundColor: currentSuite.metricBg,
              border: currentSuite.metricBorder,
              borderRadius: 6,
              padding: 18,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 12, color: currentSuite.textSecondary, textTransform: "uppercase", fontWeight: 600 }}>
              Mean Time to Mitigate
            </span>
            <span style={{ fontSize: 30, fontWeight: 800, color: currentSuite.textPrimary, fontFamily: monoStack }}>
              {incident.durationMinutes} min
            </span>
            <span style={{ fontSize: 12, color: currentSuite.textMuted }}>SLA Threshold: 15 min</span>
          </div>

          <div
            style={{
              backgroundColor: currentSuite.metricBg,
              border: currentSuite.metricBorder,
              borderRadius: 6,
              padding: 18,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 12, color: currentSuite.textSecondary, textTransform: "uppercase", fontWeight: 600 }}>
              Impacted Requests
            </span>
            <span style={{ fontSize: 30, fontWeight: 800, color: currentSuite.textPrimary, fontFamily: monoStack }}>
              {incident.metrics.impactedRequests}
            </span>
            <span style={{ fontSize: 12, color: currentSuite.textMuted }}>Across 4 Anycast PoPs</span>
          </div>
        </div>
      </div>

      {/* Phase 4: Premium Product Preview - Interactive Anycast BGP Route Leak Topology Card */}
      <div
        style={{
          backgroundColor: currentSuite.cardBg,
          border: cardBorder,
          borderRadius: 10,
          boxShadow: currentSuite.cardBoxShadow,
          padding: 26,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Terminal size={20} color={currentSuite.accentColor} />
            <h2 style={{ fontSize: 18, fontWeight: 700, color: currentSuite.textPrimary, margin: 0 }}>
              Anycast BGP Route Leak Telemetry (RFC 7908)
            </h2>
          </div>
          <span style={{ fontSize: 13, color: currentSuite.textSecondary, fontFamily: monoStack }}>
            Autonomous System AS-64512 Leaked Paths
          </span>
        </div>

        <div style={{ backgroundColor: currentSuite.surfaceNested, border: currentSuite.surfaceNestedBorder, borderRadius: 8, padding: 12 }}>
          <NetworkTopologyMap
            isResolved={isResolved}
            accentColor={currentSuite.accentColor}
            cardBg={currentSuite.surfaceNested}
            borderColor={currentSuite.surfaceNestedBorder}
            labelColor={currentSuite.textPrimary}
            mutedColor={currentSuite.textSecondary}
            gridLineColor="rgba(255, 255, 255, 0.05)"
          />
        </div>
      </div>

      {/* Incident Response Timeline (Single-Focus Step Flow per Phase 3) */}
      <div
        style={{
          backgroundColor: currentSuite.cardBg,
          border: cardBorder,
          borderRadius: 10,
          boxShadow: currentSuite.cardBoxShadow,
          padding: 26,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, borderBottom: `1px solid ${currentSuite.cardBorder}`, paddingBottom: 14 }}>
          <Clock size={20} color={currentSuite.accentColor} />
          <h2 style={{ fontSize: 18, fontWeight: 700, color: currentSuite.textPrimary, margin: 0 }}>
            Incident Mitigation Timeline
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {incident.timeline.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: currentSuite.surfaceNested,
                border: currentSuite.surfaceNestedBorder,
                borderRadius: 6,
                padding: "16px 18px",
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
              }}
            >
              <div
                style={{
                  fontFamily: monoStack,
                  fontSize: 13,
                  fontWeight: 700,
                  color: currentSuite.accentColor,
                  minWidth: 76,
                  paddingTop: 1,
                }}
              >
                {item.timestamp}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: currentSuite.textPrimary }}>
                  {item.title}
                </span>
                <span style={{ fontSize: 13, color: currentSuite.textSecondary, lineHeight: 1.5 }}>
                  {item.description} • Source: <strong style={{ color: currentSuite.textPrimary }}>{item.actor}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ergonomic 44px Action Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 14,
          paddingTop: 8,
        }}
      >
        <div style={{ fontSize: 13, color: currentSuite.textMuted, fontFamily: monoStack }}>
          Incident Hash: {incident.compliance.auditHash.substring(0, 24)}...
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <button
            style={{
              backgroundColor: currentSuite.secondaryBtnBg,
              color: currentSuite.secondaryBtnText,
              border: currentSuite.secondaryBtnBorder,
              borderRadius: 6,
              minHeight: 44,
              height: 44,
              padding: "0 20px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <Share2 size={16} /> Share Incident Status
          </button>
          <button
            style={{
              backgroundColor: currentSuite.primaryBtn(isResolved),
              color: "#ffffff",
              border: "none",
              borderRadius: 6,
              minHeight: 44,
              height: 44,
              padding: "0 22px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <RefreshCw size={16} /> Refresh Live Telemetry
          </button>
        </div>
      </div>
    </div>
  );
}
