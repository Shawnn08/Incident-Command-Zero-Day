import type { IncidentManifest } from "../data/types";
import type { TypographyOptionId } from "./TypographyCanvas";
import { colorSuites, type ColorSuiteId } from "../theme/colorSuites";
import NetworkTopologyMap from "./NetworkTopologyMap";
import { ShieldAlert, CheckCircle2, Clock, Terminal, ChevronRight, FileCode } from "lucide-react";

export default function EmailPreview({
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
  const primaryBtnBg = currentSuite.primaryBtn(isResolved);

  const cardBorder = denoised ? currentSuite.cardBorder : (isResolved ? "2px solid #059669" : "2px solid #dc2626");

  return (
    <div
      style={{
        backgroundColor: currentSuite.canvasBg,
        color: currentSuite.textPrimary,
        padding: "36px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        fontFamily: fontStack,
        position: "relative",
        overflow: "hidden",
        minHeight: "100%",
        transition: "all 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Email Client Header Chrome */}
      <div
        style={{
          borderBottom: `1px solid ${currentSuite.cardBorder}`,
          paddingBottom: 16,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          fontSize: 13,
          color: currentSuite.textSecondary,
        }}
      >
        <div>
          <strong style={{ color: currentSuite.textPrimary }}>From:</strong> Ops Bridge &lt;ops-alerts@aethernet.cloud&gt;
        </div>
        <div>
          <strong style={{ color: currentSuite.textPrimary }}>To:</strong> Enterprise Incident Stakeholders
        </div>
        <div>
          <strong style={{ color: currentSuite.textPrimary }}>Subject:</strong> [{incident.severity}] {incident.id}: {incident.title}
        </div>
      </div>

      {/* Main Email Body Card (Outer: 10px radius) */}
      <div
        style={{
          backgroundColor: currentSuite.cardBg,
          border: cardBorder,
          borderRadius: 10,
          boxShadow: currentSuite.cardBoxShadow,
          padding: 30,
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        {/* Banner: Brand & Incident Status */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div
              style={{
                fontSize: 12,
                color: currentSuite.accentColor,
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: 700,
                fontFamily: monoStack,
              }}
            >
              {incident.organization} • Ops Bridge Dispatch
            </div>
            <h1
              style={{
                fontSize: 26,
                color: currentSuite.textPrimary,
                fontWeight: 800,
                margin: "6px 0 0 0",
                lineHeight: "32px",
                letterSpacing: "-0.02em",
              }}
            >
              {incident.id}: {incident.title}
            </h1>
          </div>

          {/* Denoised Ghost Badge */}
          <div
            style={{
              backgroundColor: denoised ? statusBg : (isResolved ? "#059669" : "#dc2626"),
              border: `1px solid ${denoised ? statusBorder : (isResolved ? "#059669" : "#dc2626")}`,
              borderRadius: 6,
              padding: "8px 14px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {isResolved ? (
              <CheckCircle2 size={16} color={denoised ? statusColor : "#ffffff"} />
            ) : (
              <ShieldAlert size={16} color={denoised ? statusColor : "#ffffff"} />
            )}
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: denoised ? statusColor : "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontFamily: monoStack,
              }}
            >
              {incident.status}
            </span>
          </div>
        </div>

        {/* Executive Summary (Strictly 16px body copy) */}
        <p
          style={{
            fontSize: 16,
            lineHeight: "26px",
            color: currentSuite.textPrimary,
            margin: 0,
          }}
        >
          {incident.summary}
        </p>

        {/* Metrics Grid (Prominent Numbers: 24px-26px Bold Space Mono) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 12 }}>
          <div
            style={{
              backgroundColor: currentSuite.metricBg,
              border: currentSuite.metricBorder,
              borderRadius: 6,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 11, color: currentSuite.textSecondary, textTransform: "uppercase", fontWeight: 600 }}>
              Peak Error Rate
            </span>
            <span style={{ fontSize: 24, fontWeight: 800, color: statusColor, fontFamily: monoStack }}>
              {incident.metrics.peakErrorRate}
            </span>
          </div>

          <div
            style={{
              backgroundColor: currentSuite.metricBg,
              border: currentSuite.metricBorder,
              borderRadius: 6,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 11, color: currentSuite.textSecondary, textTransform: "uppercase", fontWeight: 600 }}>
              Packet Loss
            </span>
            <span style={{ fontSize: 24, fontWeight: 800, color: statusColor, fontFamily: monoStack }}>
              {incident.metrics.packetLoss}
            </span>
          </div>

          <div
            style={{
              backgroundColor: currentSuite.metricBg,
              border: currentSuite.metricBorder,
              borderRadius: 6,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 11, color: currentSuite.textSecondary, textTransform: "uppercase", fontWeight: 600 }}>
              Duration
            </span>
            <span style={{ fontSize: 24, fontWeight: 800, color: currentSuite.textPrimary, fontFamily: monoStack }}>
              {incident.durationMinutes} min
            </span>
          </div>

          <div
            style={{
              backgroundColor: currentSuite.metricBg,
              border: currentSuite.metricBorder,
              borderRadius: 6,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 11, color: currentSuite.textSecondary, textTransform: "uppercase", fontWeight: 600 }}>
              Impacted Req
            </span>
            <span style={{ fontSize: 24, fontWeight: 800, color: currentSuite.textPrimary, fontFamily: monoStack }}>
              {incident.metrics.impactedRequests}
            </span>
          </div>
        </div>

        {/* Phase 4: Premium Product Preview - Interactive Anycast BGP Route Leak Visualizer */}
        <div
          style={{
            backgroundColor: currentSuite.surfaceNested,
            border: currentSuite.surfaceNestedBorder,
            borderRadius: 8,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "12px 18px",
              borderBottom: `1px solid ${currentSuite.surfaceNestedBorder}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.25)",
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, color: currentSuite.accentColor, fontFamily: monoStack, display: "flex", alignItems: "center", gap: 8 }}>
              <Terminal size={14} /> RFC 7908 Anycast BGP Telemetry Map
            </span>
            <span style={{ fontSize: 12, color: currentSuite.textSecondary, fontFamily: monoStack }}>
              4 PoPs Active
            </span>
          </div>
          <div style={{ padding: 10 }}>
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

        {/* Phase 3 Ergonomics: Standardized 44px Touch Targets & Stacked Clean Actions */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            paddingTop: 10,
          }}
        >
          {/* Primary Action Button (44px Height Standard) */}
          <button
            style={{
              backgroundColor: primaryBtnBg,
              color: "#ffffff",
              border: "none",
              borderRadius: 6,
              minHeight: 44,
              height: 44,
              padding: "10px 22px",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <span>Open Real-Time War Room Console</span>
            <ChevronRight size={17} />
          </button>

          {/* Secondary Stacked Action Buttons (44px Height Standard) */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <button
              style={{
                backgroundColor: currentSuite.secondaryBtnBg,
                color: currentSuite.secondaryBtnText,
                border: currentSuite.secondaryBtnBorder,
                borderRadius: 6,
                minHeight: 44,
                height: 44,
                padding: "10px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <FileCode size={15} /> Download Post-Mortem PDF
            </button>
            <button
              style={{
                backgroundColor: currentSuite.secondaryBtnBg,
                color: currentSuite.secondaryBtnText,
                border: currentSuite.secondaryBtnBorder,
                borderRadius: 6,
                minHeight: 44,
                height: 44,
                padding: "10px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <Clock size={15} /> View Incident Audit Log
            </button>
          </div>
        </div>

        {/* Footer Audit Hash */}
        <div
          style={{
            borderTop: `1px solid ${currentSuite.cardBorder}`,
            paddingTop: 14,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: currentSuite.textMuted,
            fontFamily: monoStack,
          }}
        >
          <span>Audit Hash: {incident.compliance.auditHash.substring(0, 20)}...</span>
          <span>SOC2 &amp; ISO 27001 Certified</span>
        </div>
      </div>
    </div>
  );
}
