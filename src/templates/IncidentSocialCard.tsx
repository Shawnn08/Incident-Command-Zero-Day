import {
  Canvas,
  Column,
  Heading,
  Row,
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
  const statusColor = isResolved ? "#10b981" : "#f43f5e";
  const statusBg = isResolved ? "rgba(16, 185, 129, 0.12)" : "rgba(244, 63, 94, 0.12)";
  const statusBorder = isResolved ? "rgba(16, 185, 129, 0.28)" : "rgba(244, 63, 94, 0.28)";

  return (
    <CanvasRoot
      width={1200}
      height={630}
      lang="en"
      title={`${incident.id} Resolution Badge`}
      theme={incidentTheme}
      style={{
        padding: 64,
        gap: 32,
        justifyContent: "space-between",
        backgroundColor: "#08090d",
      }}
    >
      {/* Top Header Row */}
      <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
        <Row style={{ alignItems: "center", gap: 14 }}>
          <Column
            style={{
              backgroundColor: "#0f1219",
              padding: [8, 16],
              borderRadius: 6,
              border: { width: 1, style: "solid", color: "#1e2230" },
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 700, color: "#10b981", letterSpacing: 1 }}>
              {incident.id}
            </Text>
          </Column>
          <Text style={{ fontSize: 16, color: "#94a3b8", fontWeight: 600 }}>
            {incident.organization} • Global Reliability Operations
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
          <Text style={{ fontSize: 15, fontWeight: 800, color: statusColor, textTransform: "uppercase", letterSpacing: 1 }}>
            ● {incident.status}
          </Text>
        </Column>
      </Row>

      {/* Main Announcement Headline */}
      <Column style={{ gap: 16 }}>
        <Heading level={1} style={{ fontSize: 48, color: "#f8fafc", fontWeight: 800, lineHeight: 1.2 }}>
          {isResolved ? "Incident Mitigated: Systems 100% Restored" : incident.title}
        </Heading>
        <Text style={{ fontSize: 20, fontStyle: "italic", color: "#cbd5e1", lineHeight: 1.6, maxWidth: 1040 }}>
          "{incident.summary}"
        </Text>
      </Column>

      {/* Metric Highlights Ledger */}
      <Row
        style={{
          backgroundColor: "#0f1219",
          border: { width: 1, style: "solid", color: "#1e2230" },
          borderRadius: 8,
          padding: 24,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Column style={{ gap: 4 }}>
          <Text style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
            Mean Time To Resolve
          </Text>
          <Heading level={2} style={{ fontSize: 32, color: statusColor, fontWeight: 800 }}>
            {incident.durationMinutes} Minutes
          </Heading>
        </Column>

        <Column style={{ width: 1, height: 48, backgroundColor: "#1e2230" }} />

        <Column style={{ gap: 4 }}>
          <Text style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
            Peak Packet Loss
          </Text>
          <Heading level={2} style={{ fontSize: 32, color: isResolved ? "#10b981" : "#f43f5e", fontWeight: 800 }}>
            {incident.metrics.packetLoss}
          </Heading>
        </Column>

        <Column style={{ width: 1, height: 48, backgroundColor: "#1e2230" }} />

        <Column style={{ gap: 4 }}>
          <Text style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
            Edge Traffic Recovered
          </Text>
          <Heading level={2} style={{ fontSize: 32, color: "#f8fafc", fontWeight: 800 }}>
            {incident.metrics.slaAvailability}
          </Heading>
        </Column>

        <Column style={{ width: 1, height: 48, backgroundColor: "#1e2230" }} />

        <Column style={{ gap: 4 }}>
          <Text style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
            SOC2 Cryptographic Seal
          </Text>
          <Text style={{ fontSize: 14, color: "#10b981", fontWeight: 700 }}>
            [VERIFIED] {incident.compliance.auditHash.substring(0, 14)}...
          </Text>
        </Column>
      </Row>

      {/* Footer System Signature */}
      <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 14, color: "#94a3b8" }}>
          Incident Commander: {incident.commander.name} ({incident.commander.role})
        </Text>
        <Text style={{ fontSize: 14, color: "#94a3b8" }}>
          Official Audit Time: {incident.compliance.signDate}
        </Text>
      </Row>
    </CanvasRoot>
  );
}
