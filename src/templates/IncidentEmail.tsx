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
  const statusColor = isResolved ? "#34d399" : "#f87171";
  const statusBg = isResolved ? "#064e3b" : "#450a0a";
  const btnBg = isResolved ? "#059669" : "#dc2626";

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
      {/* Brand Header & Severity Banner */}
      <Column
        style={{
          backgroundColor: "#0f172a",
          padding: 24,
          borderRadius: 8,
          border: { width: 1, style: "solid", color: "#1e293b" },
          gap: 14,
        }}
      >
        <Row stackOnMobile style={{ alignItems: "center", gap: 12 }}>
          <Column style={{ gap: 4 }}>
            <Text style={{ fontSize: 14, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1 }}>
              {incident.organization} • Ops Bridge
            </Text>
            <Heading level={1} style={{ fontSize: 22, color: "#ffffff", fontWeight: 700 }}>
              {incident.id}: {incident.title}
            </Heading>
          </Column>
          <Column
            style={{
              backgroundColor: statusBg,
              padding: [6, 12],
              borderRadius: 4,
              border: { width: 1, style: "solid", color: statusColor },
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 700, color: statusColor, textTransform: "uppercase" }}>
              {incident.status}
            </Text>
          </Column>
        </Row>

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#1e293b" } }} />

        {/* Executive Summary */}
        <Text style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.6 }}>
          {incident.summary}
        </Text>

        {/* Metric Cards Row */}
        <Row stackOnMobile style={{ gap: 12 }}>
          <Column
            style={{
              backgroundColor: "#1e293b",
              padding: 14,
              borderRadius: 6,
              border: { width: 1, style: "solid", color: "#334155" },
              gap: 4,
            }}
          >
            <Text style={{ fontSize: 14, color: "#94a3b8" }}>Peak Error Rate</Text>
            <Heading level={2} style={{ fontSize: 20, color: statusColor, fontWeight: 700 }}>
              {incident.metrics.peakErrorRate}
            </Heading>
          </Column>
          <Column
            style={{
              backgroundColor: "#1e293b",
              padding: 14,
              borderRadius: 6,
              border: { width: 1, style: "solid", color: "#334155" },
              gap: 4,
            }}
          >
            <Text style={{ fontSize: 14, color: "#94a3b8" }}>Affected Edge PoPs</Text>
            <Heading level={2} style={{ fontSize: 20, color: "#f8fafc", fontWeight: 700 }}>
              {incident.metrics.affectedPoPs} / {incident.metrics.totalPoPs}
            </Heading>
          </Column>
          <Column
            style={{
              backgroundColor: "#1e293b",
              padding: 14,
              borderRadius: 6,
              border: { width: 1, style: "solid", color: "#334155" },
              gap: 4,
            }}
          >
            <Text style={{ fontSize: 14, color: "#94a3b8" }}>Current Duration</Text>
            <Heading level={2} style={{ fontSize: 20, color: "#f8fafc", fontWeight: 700 }}>
              {incident.durationMinutes} min
            </Heading>
          </Column>
        </Row>
      </Column>

      {/* Impacted Microservices Table */}
      <Column
        style={{
          backgroundColor: "#0f172a",
          padding: 24,
          borderRadius: 8,
          border: { width: 1, style: "solid", color: "#1e293b" },
          gap: 14,
        }}
      >
        <Heading level={2} style={{ fontSize: 16, color: "#ffffff", fontWeight: 600 }}>
          Service Impact & Degradation Status
        </Heading>

        <Table
          style={{
            cellPadding: [10, 8],
            rowBorder: { width: 1, style: "solid", color: "#1e293b" },
            borderCollapse: "collapse",
          }}
        >
          <TableRow header>
            <TableCell style={{ fontSize: 14, color: "#94a3b8" }}>Subsystem</TableCell>
            <TableCell style={{ fontSize: 14, color: "#94a3b8" }}>Region</TableCell>
            <TableCell style={{ fontSize: 14, color: "#94a3b8", textAlign: "right" }}>Health</TableCell>
          </TableRow>
          {incident.impactedServices.map((service, idx) => (
            <TableRow key={idx}>
              <TableCell style={{ fontSize: 14, color: "#f8fafc", fontWeight: 500 }}>
                {service.name}
              </TableCell>
              <TableCell style={{ fontSize: 14, color: "#94a3b8" }}>
                {service.region}
              </TableCell>
              <TableCell
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  textAlign: "right",
                  color: service.impactLevel === "OPERATIONAL" ? "#34d399" : service.impactLevel === "DEGRADED" ? "#fbbf24" : "#f87171",
                }}
              >
                {service.impactLevel}
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Column>

      {/* Latest Timeline Event */}
      <Column
        style={{
          backgroundColor: "#0f172a",
          padding: 24,
          borderRadius: 8,
          border: { width: 1, style: "solid", color: "#1e293b" },
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 14, color: "#94a3b8", textTransform: "uppercase" }}>
          Latest Action • {incident.timeline[incident.timeline.length - 1].timestamp}
        </Text>
        <Heading level={2} style={{ fontSize: 16, color: "#f8fafc" }}>
          {incident.timeline[incident.timeline.length - 1].title}
        </Heading>
        <Text style={{ fontSize: 14, color: "#cbd5e1" }}>
          {incident.timeline[incident.timeline.length - 1].description}
        </Text>

        <Button
          href="https://status.aethernet.cloud/incidents/INC-8492"
          style={{
            backgroundColor: btnBg,
            color: "#ffffff",
            borderRadius: 6,
            padding: [12, 20],
            alignSelf: "start",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          {isResolved ? "View Formal Post-Mortem Report" : "Join Active Incident War Room"}
        </Button>
      </Column>

      {/* Verified Footer */}
      <Column style={{ alignItems: "center", gap: 6, padding: [8, 0] }}>
        <Text style={{ fontSize: 14, color: "#94a3b8", textAlign: "center" }}>
          Incident Commander: <Span style={{ color: "#f8fafc", fontWeight: 600 }}>{incident.commander.name}</Span> ({incident.commander.role})
        </Text>
        <Text style={{ fontSize: 14, color: "#94a3b8", textAlign: "center" }}>
          Audit Hash: <Span style={{ color: "#38bdf8" }}>{incident.compliance.auditHash.substring(0, 28)}...</Span>
        </Text>
      </Column>
    </EmailRoot>
  );
}
