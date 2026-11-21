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
  const statusColor = isResolved ? "#6ee7b7" : "#fda4af";
  const statusBg = isResolved ? "rgba(110, 231, 183, 0.14)" : "rgba(253, 164, 175, 0.14)";
  const statusBorder = isResolved ? "rgba(110, 231, 183, 0.35)" : "rgba(253, 164, 175, 0.35)";

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
        <Row style={{ alignItems: "center", gap: 14 }}>
          <Column
            style={{
              backgroundColor: "#151e1b",
              padding: [8, 16],
              borderRadius: 6,
              border: { width: 1, style: "solid", color: "#283832" },
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: 700, color: "#2dd4bf", letterSpacing: 1 }}>
              {incident.id}
            </Text>
          </Column>
          <Text style={{ fontSize: 16, color: "#8aa399", fontWeight: 600 }}>
            {incident.organization} • Cloud Security &amp; Network Operations
          </Text>
        </Row>

        <Column
          style={{
            backgroundColor: statusBg,
            padding: [8, 20],
            borderRadius: 6,
            border: { width: 1, style: "solid", color: statusBorder },
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: 800, color: statusColor, textTransform: "uppercase", letterSpacing: 1 }}>
            ● {incident.status}
          </Text>
        </Column>
      </Row>

      {/* Main Title & Hero Announcement */}
      <Column style={{ gap: 16 }}>
        <Heading level={1} style={{ fontSize: 46, color: "#e6f0ec", fontWeight: 800, lineHeight: 1.25 }}>
          {isResolved ? "Incident Mitigated & Systems Restored" : incident.title}
        </Heading>
        <Text style={{ fontSize: 20, color: "#8aa399", lineHeight: 1.6, maxWidth: 1000 }}>
          {incident.summary}
        </Text>
      </Column>

      {/* Metric Highlights Strip */}
      <Row style={{ gap: 20 }}>
        <Column
          style={{
            flex: 1,
            backgroundColor: "#151e1b",
            padding: 24,
            borderRadius: 8,
            border: { width: 1, style: "solid", color: "#283832" },
            gap: 6,
          }}
        >
          <Text style={{ fontSize: 13, color: "#8aa399", textTransform: "uppercase", fontWeight: 600 }}>
            Mean Time To Resolve
          </Text>
          <Heading level={2} style={{ fontSize: 34, color: statusColor, fontWeight: 800 }}>
            {incident.durationMinutes} min
          </Heading>
          <Text style={{ fontSize: 13, color: "#5e776e" }}>Detection to Mitigation</Text>
        </Column>

        <Column
          style={{
            flex: 1,
            backgroundColor: "#151e1b",
            padding: 24,
            borderRadius: 8,
            border: { width: 1, style: "solid", color: "#283832" },
            gap: 6,
          }}
        >
          <Text style={{ fontSize: 13, color: "#8aa399", textTransform: "uppercase", fontWeight: 600 }}>
            Global Edge Status
          </Text>
          <Heading level={2} style={{ fontSize: 34, color: "#e6f0ec", fontWeight: 800 }}>
            {incident.metrics.totalPoPs} / {incident.metrics.totalPoPs} PoPs
          </Heading>
          <Text style={{ fontSize: 13, color: "#5e776e" }}>100% Convergence</Text>
        </Column>

        <Column
          style={{
            flex: 1,
            backgroundColor: "#151e1b",
            padding: 24,
            borderRadius: 8,
            border: { width: 1, style: "solid", color: "#283832" },
            gap: 6,
          }}
        >
          <Text style={{ fontSize: 13, color: "#8aa399", textTransform: "uppercase", fontWeight: 600 }}>
            Packet Loss Baseline
          </Text>
          <Heading level={2} style={{ fontSize: 34, color: "#6ee7b7", fontWeight: 800 }}>
            0.00%
          </Heading>
          <Text style={{ fontSize: 13, color: "#5e776e" }}>Transit Stabilized</Text>
        </Column>
      </Row>

      <Divider style={{ borderTop: { width: 1, style: "solid", color: "#283832" } }} />

      {/* Footer Info & Verification Bar */}
      <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 14, color: "#8aa399" }}>
          Incident Commander: <Span style={{ color: "#e6f0ec", fontWeight: 600 }}>{incident.commander.name}</Span>
        </Text>
        <Text style={{ fontSize: 14, color: "#8aa399" }}>
          Audit SHA256: <Span style={{ color: "#2dd4bf", fontFamily: "monospace" }}>{incident.compliance.auditHash.substring(0, 36)}...</Span>
        </Text>
        <Text style={{ fontSize: 14, color: "#6ee7b7", fontWeight: 700 }}>
          [CERTIFIED] SOC2 Type II Certified
        </Text>
      </Row>
    </CanvasRoot>
  );
}
