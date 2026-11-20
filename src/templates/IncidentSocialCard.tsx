import {
  Canvas,
  Column,
  Divider,
  Heading,
  Row,
  Span,
  Text,
} from "@hyper-elements/react";
import { resolvedIncident } from "../data/mockIncident";
import type { IncidentManifest } from "../data/types";
import { incidentTheme } from "../theme/incidentTheme";

interface IncidentSocialCardProps {
  incident?: IncidentManifest;
}

const CanvasRoot = Canvas as any;

export default function IncidentSocialCard({ incident = resolvedIncident }: IncidentSocialCardProps) {
  const isResolved = incident.status === "RESOLVED";
  const statusColor = isResolved ? "#10b981" : "#ef4444";
  const statusBg = isResolved ? "#064e3b" : "#450a0a";

  return (
    <CanvasRoot
      width={1200}
      height={630}
      lang="en"
      title={`${incident.id} Resolution Badge`}
      theme={incidentTheme}
      style={{
        padding: 56,
        gap: 28,
        justifyContent: "space-between",
      }}
    >
      {/* Top Bar: Brand, ID, Status Pill */}
      <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
        <Row style={{ alignItems: "center", gap: 12 }}>
          <Column
            style={{
              backgroundColor: "#1e293b",
              padding: [8, 14],
              borderRadius: 6,
              border: { width: 1, style: "solid", color: "#334155" },
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 700, color: "#38bdf8", letterSpacing: 1 }}>
              {incident.id}
            </Text>
          </Column>
          <Text style={{ fontSize: 16, color: "#94a3b8", fontWeight: 600 }}>
            {incident.organization} • Cloud Security &amp; Network Operations
          </Text>
        </Row>

        <Column
          style={{
            backgroundColor: statusBg,
            padding: [8, 18],
            borderRadius: 6,
            border: { width: 1, style: "solid", color: statusColor },
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: 800, color: statusColor, textTransform: "uppercase", letterSpacing: 1 }}>
            ● {incident.status}
          </Text>
        </Column>
      </Row>

      {/* Main Title & Hero Announcement */}
      <Column style={{ gap: 16 }}>
        <Heading level={1} style={{ fontSize: 44, color: "#ffffff", fontWeight: 800, lineHeight: 1.2 }}>
          {isResolved ? "Incident Mitigated & Systems Restored" : incident.title}
        </Heading>
        <Text style={{ fontSize: 20, color: "#cbd5e1", lineHeight: 1.5, maxWidth: 1000 }}>
          {incident.summary}
        </Text>
      </Column>

      {/* Metric Highlights Strip */}
      <Row style={{ gap: 20 }}>
        <Column
          style={{
            flex: 1,
            backgroundColor: "#0f172a",
            padding: 24,
            borderRadius: 8,
            border: { width: 1, style: "solid", color: "#1e293b" },
            gap: 6,
          }}
        >
          <Text style={{ fontSize: 13, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
            Mean Time To Resolve
          </Text>
          <Heading level={2} style={{ fontSize: 32, color: statusColor, fontWeight: 800 }}>
            {incident.durationMinutes} min
          </Heading>
          <Text style={{ fontSize: 13, color: "#64748b" }}>Detection to Mitigation</Text>
        </Column>

        <Column
          style={{
            flex: 1,
            backgroundColor: "#0f172a",
            padding: 24,
            borderRadius: 8,
            border: { width: 1, style: "solid", color: "#1e293b" },
            gap: 6,
          }}
        >
          <Text style={{ fontSize: 13, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
            Global Edge Status
          </Text>
          <Heading level={2} style={{ fontSize: 32, color: "#f8fafc", fontWeight: 800 }}>
            {incident.metrics.totalPoPs} / {incident.metrics.totalPoPs} PoPs
          </Heading>
          <Text style={{ fontSize: 13, color: "#64748b" }}>100% Convergence</Text>
        </Column>

        <Column
          style={{
            flex: 1,
            backgroundColor: "#0f172a",
            padding: 24,
            borderRadius: 8,
            border: { width: 1, style: "solid", color: "#1e293b" },
            gap: 6,
          }}
        >
          <Text style={{ fontSize: 13, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
            Packet Loss Baseline
          </Text>
          <Heading level={2} style={{ fontSize: 32, color: "#34d399", fontWeight: 800 }}>
            0.00%
          </Heading>
          <Text style={{ fontSize: 13, color: "#64748b" }}>Transit Stabilized</Text>
        </Column>
      </Row>

      <Divider style={{ borderTop: { width: 1, style: "solid", color: "#1e293b" } }} />

      {/* Footer Info & Verification Bar */}
      <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 14, color: "#64748b" }}>
          Incident Commander: <Span style={{ color: "#f8fafc", fontWeight: 600 }}>{incident.commander.name}</Span>
        </Text>
        <Text style={{ fontSize: 14, color: "#64748b" }}>
          Audit SHA256: <Span style={{ color: "#38bdf8", fontFamily: "monospace" }}>{incident.compliance.auditHash.substring(0, 36)}...</Span>
        </Text>
        <Text style={{ fontSize: 14, color: "#10b981", fontWeight: 600 }}>
          [CERTIFIED] SOC2 Type II Certified
        </Text>
      </Row>
    </CanvasRoot>
  );
}
