import {
  Button,
  Column,
  Divider,
  Email,
  Heading,
  Row,
  Span,
  Table,
  TableCell,
  TableRow,
  Text,
} from "@hyper-elements/react";
import { activeP0Incident } from "../data/mockIncident";
import type { IncidentManifest } from "../data/types";
import { incidentTheme } from "../theme/incidentTheme";

interface IncidentEmailProps {
  incident?: IncidentManifest;
}

const EmailRoot = Email as any;

export default function IncidentEmail({ incident = activeP0Incident }: IncidentEmailProps) {
  const isResolved = incident.status === "RESOLVED";
  const statusColor = isResolved ? "#6ee7b7" : "#fda4af";
  const statusBg = isResolved ? "rgba(110, 231, 183, 0.14)" : "rgba(253, 164, 175, 0.14)";
  const statusBorder = isResolved ? "rgba(110, 231, 183, 0.35)" : "rgba(253, 164, 175, 0.35)";
  const btnBg = isResolved ? "#0d9488" : "#be123c";

  return (
    <EmailRoot
      width={600}
      lang="en"
      theme={incidentTheme}
      previewText={`[${incident.severity}] ${incident.id}: ${incident.title}`}
      title={`Incident Update: ${incident.id}`}
      style={{
        gap: 16,
      }}
    >
      {/* Brand Header & Severity Banner (Outer: 10px radius) */}
      <Column
        style={{
          backgroundColor: "#151e1b",
          padding: 24,
          borderRadius: 10,
          border: { width: 1, style: "solid", color: "#283832" },
          gap: 16,
        }}
      >
        <Row stackOnMobile style={{ alignItems: "center", gap: 12 }}>
          <Column style={{ gap: 4 }}>
            <Text style={{ fontSize: 13, color: "#2dd4bf", textTransform: "uppercase", letterSpacing: 1, fontWeight: 700 }}>
              {incident.organization} • Ops Bridge Dispatch
            </Text>
            <Heading level={1} style={{ fontSize: 24, color: "#e6f0ec", fontWeight: 800 }}>
              {incident.id}: {incident.title}
            </Heading>
          </Column>
          <Column
            style={{
              backgroundColor: statusBg,
              padding: [8, 14],
              borderRadius: 6,
              border: { width: 1, style: "solid", color: statusBorder },
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: 700, color: statusColor, textTransform: "uppercase" }}>
              {incident.status}
            </Text>
          </Column>
        </Row>

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#283832" } }} />

        {/* Executive Summary (Strict 16px Body Copy) */}
        <Text style={{ fontSize: 16, color: "#e6f0ec", lineHeight: 1.6 }}>
          {incident.summary}
        </Text>

        {/* Metric Cards Row (Prominent 22px Numbers) */}
        <Row stackOnMobile style={{ gap: 12 }}>
          <Column
            style={{
              backgroundColor: "#1e2a26",
              padding: 16,
              borderRadius: 6,
              border: { width: 1, style: "solid", color: "#283832" },
              gap: 4,
            }}
          >
            <Text style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase" }}>Peak Error Rate</Text>
            <Heading level={2} style={{ fontSize: 22, color: statusColor, fontWeight: 800 }}>
              {incident.metrics.peakErrorRate}
            </Heading>
          </Column>
          <Column
            style={{
              backgroundColor: "#1e2a26",
              padding: 16,
              borderRadius: 6,
              border: { width: 1, style: "solid", color: "#283832" },
              gap: 4,
            }}
          >
            <Text style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase" }}>Affected PoPs</Text>
            <Heading level={2} style={{ fontSize: 22, color: "#e6f0ec", fontWeight: 800 }}>
              {incident.metrics.affectedPoPs} / {incident.metrics.totalPoPs}
            </Heading>
          </Column>
          <Column
            style={{
              backgroundColor: "#1e2a26",
              padding: 16,
              borderRadius: 6,
              border: { width: 1, style: "solid", color: "#283832" },
              gap: 4,
            }}
          >
            <Text style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase" }}>Duration</Text>
            <Heading level={2} style={{ fontSize: 22, color: "#e6f0ec", fontWeight: 800 }}>
              {incident.durationMinutes} min
            </Heading>
          </Column>
        </Row>
      </Column>

      {/* Impacted Microservices Table */}
      <Column
        style={{
          backgroundColor: "#151e1b",
          padding: 24,
          borderRadius: 10,
          border: { width: 1, style: "solid", color: "#283832" },
          gap: 14,
        }}
      >
        <Heading level={2} style={{ fontSize: 18, color: "#e6f0ec", fontWeight: 700 }}>
          Subsystem Degradation Matrix
        </Heading>

        <Table
          style={{
            cellPadding: [12, 10],
            rowBorder: { width: 1, style: "solid", color: "#283832" },
            borderCollapse: "collapse",
          }}
        >
          <TableRow header>
            <TableCell style={{ fontSize: 13, color: "#8aa399" }}>Subsystem</TableCell>
            <TableCell style={{ fontSize: 13, color: "#8aa399" }}>Region</TableCell>
            <TableCell style={{ fontSize: 13, color: "#8aa399", textAlign: "right" }}>Health</TableCell>
          </TableRow>
          {incident.impactedServices.map((service, idx) => (
            <TableRow key={idx}>
              <TableCell style={{ fontSize: 14, color: "#e6f0ec", fontWeight: 500 }}>
                {service.name}
              </TableCell>
              <TableCell style={{ fontSize: 13, color: "#8aa399" }}>
                {service.region}
              </TableCell>
              <TableCell
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  textAlign: "right",
                  color: service.impactLevel === "OPERATIONAL" ? "#6ee7b7" : service.impactLevel === "DEGRADED" ? "#fbbf24" : "#fda4af",
                }}
              >
                {service.impactLevel}
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Column>

      {/* Latest Timeline Event & 44px Action CTA */}
      <Column
        style={{
          backgroundColor: "#151e1b",
          padding: 24,
          borderRadius: 10,
          border: { width: 1, style: "solid", color: "#283832" },
          gap: 14,
        }}
      >
        <Text style={{ fontSize: 12, color: "#2dd4bf", textTransform: "uppercase", fontWeight: 700 }}>
          Latest Action • {incident.timeline[incident.timeline.length - 1].timestamp}
        </Text>
        <Heading level={2} style={{ fontSize: 18, color: "#e6f0ec" }}>
          {incident.timeline[incident.timeline.length - 1].title}
        </Heading>
        <Text style={{ fontSize: 15, color: "#8aa399", lineHeight: 1.5 }}>
          {incident.timeline[incident.timeline.length - 1].description}
        </Text>

        <Button
          href="https://status.aethernet.cloud/incidents/INC-8492"
          style={{
            backgroundColor: btnBg,
            color: "#ffffff",
            borderRadius: 6,
            padding: [12, 24],
            alignSelf: "start",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          {isResolved ? "View Formal Post-Mortem Report" : "Join Active Incident War Room"}
        </Button>
      </Column>

      {/* Verified Footer */}
      <Column style={{ alignItems: "center", gap: 4, padding: [8, 0] }}>
        <Text style={{ fontSize: 13, color: "#8aa399", textAlign: "center" }}>
          Incident Commander: <Span style={{ color: "#e6f0ec", fontWeight: 600 }}>{incident.commander.name}</Span> ({incident.commander.role})
        </Text>
        <Text style={{ fontSize: 12, color: "#8aa399", textAlign: "center" }}>
          Audit Hash: <Span style={{ color: "#2dd4bf" }}>{incident.compliance.auditHash.substring(0, 28)}...</Span>
        </Text>
      </Column>
    </EmailRoot>
  );
}
