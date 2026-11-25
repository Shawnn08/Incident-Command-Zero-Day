import {
  Button,
  Column,
  Divider,
  Heading,
  Page,
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

interface IncidentWebPageProps {
  incident?: IncidentManifest;
}

const PageRoot = Page as any;

export default function IncidentWebPage({ incident = activeP0Incident }: IncidentWebPageProps) {
  const isResolved = incident.status === "RESOLVED";
  const statusColor = isResolved ? "#10b981" : "#f43f5e";
  const statusBg = isResolved ? "rgba(16, 185, 129, 0.12)" : "rgba(244, 63, 94, 0.12)";
  const statusBorder = isResolved ? "rgba(16, 185, 129, 0.28)" : "rgba(244, 63, 94, 0.28)";

  return (
    <PageRoot
      width={960}
      lang="en"
      title={`${incident.id} Status • ${incident.organization}`}
      description="Live mission-critical incident telemetry and mitigation status"
      theme={incidentTheme}
      style={{
        gap: 32,
      }}
    >
      <Column style={{ padding: 32, gap: 32 }}>
        {/* Top Reliability Masthead */}
        <Row stackOnMobile style={{ alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Column style={{ gap: 6 }}>
            <Text style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" }}>
              {incident.organization} • Global Edge &amp; Reliability Ops
            </Text>
            <Heading level={1} style={{ fontSize: 32, color: "#f8fafc", fontWeight: 800 }}>
              {incident.id}: {incident.title}
            </Heading>
          </Column>

          <Column
            style={{
              backgroundColor: statusBg,
              padding: [8, 16],
              borderRadius: 6,
              border: { width: 1, style: "solid", color: statusBorder },
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: 700, color: statusColor, textTransform: "uppercase", letterSpacing: 1 }}>
              ● {incident.status}
            </Text>
          </Column>
        </Row>

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#1e2230" } }} />

        {/* Executive Summary Brief */}
        <Column style={{ gap: 8, maxWidth: 840 }}>
          <Text style={{ fontSize: 16, color: "#f8fafc", lineHeight: 1.65 }}>
            {incident.summary}
          </Text>
          <Text style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.6 }}>
            <Span style={{ fontWeight: 600, color: "#f8fafc" }}>Forensic Root Cause: </Span>
            {incident.rootCause}
          </Text>
          <Text style={{ fontSize: 14, fontStyle: "italic", color: "#38bdf8", lineHeight: 1.6 }}>
            "Automated Route Origin Validation (ROV) failed-open across Tier-1 transit interfaces during AS-174 maintenance window."
          </Text>
        </Column>

        {/* Unified Telemetry Rail */}
        <Table
          style={{
            cellPadding: [16, 20],
            rowBorder: { width: 1, style: "solid", color: "#1e2230" },
            borderCollapse: "collapse",
            backgroundColor: "#0f1219",
          }}
        >
          <TableRow header>
            <TableCell style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
              Peak Packet Loss
            </TableCell>
            <TableCell style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
              Peak Error Rate
            </TableCell>
            <TableCell style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
              Degraded PoPs
            </TableCell>
            <TableCell style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
              Impacted Invocations
            </TableCell>
            <TableCell style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", fontWeight: 600, textAlign: "right" }}>
              SLA Availability
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontSize: 24, fontWeight: 800, color: statusColor }}>
              {incident.metrics.packetLoss}
            </TableCell>
            <TableCell style={{ fontSize: 24, fontWeight: 800, color: statusColor }}>
              {incident.metrics.peakErrorRate}
            </TableCell>
            <TableCell style={{ fontSize: 24, fontWeight: 800, color: "#f8fafc" }}>
              {incident.metrics.affectedPoPs} / {incident.metrics.totalPoPs}
            </TableCell>
            <TableCell style={{ fontSize: 24, fontWeight: 800, color: "#f8fafc" }}>
              {incident.metrics.impactedRequests}
            </TableCell>
            <TableCell style={{ fontSize: 24, fontWeight: 800, color: "#f8fafc", textAlign: "right" }}>
              {incident.metrics.slaAvailability}
            </TableCell>
          </TableRow>
        </Table>

        {/* Subsystem Health Matrix */}
        <Column style={{ gap: 16 }}>
          <Heading level={2} style={{ fontSize: 20, color: "#f8fafc", fontWeight: 700 }}>
            Subsystem Health Matrix
          </Heading>

          <Table
            style={{
              cellPadding: [14, 16],
              rowBorder: { width: 1, style: "solid", color: "#1e2230" },
              borderCollapse: "collapse",
              backgroundColor: "#0f1219",
            }}
          >
            <TableRow header>
              <TableCell style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600 }}>Microservice</TableCell>
              <TableCell style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600 }}>Edge Region</TableCell>
              <TableCell style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600 }}>Latency Delta</TableCell>
              <TableCell style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600 }}>Error Rate</TableCell>
              <TableCell style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600, textAlign: "right" }}>Status</TableCell>
            </TableRow>
            {incident.impactedServices.map((service, idx) => (
              <TableRow key={idx}>
                <TableCell style={{ fontSize: 14, color: "#f8fafc", fontWeight: 600 }}>
                  {service.name}
                </TableCell>
                <TableCell style={{ fontSize: 13, color: "#94a3b8" }}>
                  {service.region}
                </TableCell>
                <TableCell style={{ fontSize: 13, color: "#94a3b8" }}>
                  {service.latencyDelta}
                </TableCell>
                <TableCell style={{ fontSize: 14, color: "#f8fafc" }}>
                  {service.errorRate}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    textAlign: "right",
                    color:
                      service.impactLevel === "OPERATIONAL"
                        ? "#10b981"
                        : service.impactLevel === "DEGRADED"
                        ? "#f59e0b"
                        : "#f43f5e",
                  }}
                >
                  {service.impactLevel}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Column>

        {/* Chronological Mitigation Stream */}
        <Column style={{ gap: 16 }}>
          <Heading level={2} style={{ fontSize: 20, color: "#f8fafc", fontWeight: 700 }}>
            Chronological Mitigation Stream
          </Heading>

          <Column style={{ gap: 12 }}>
            {incident.timeline.map((event, idx) => (
              <Row
                key={idx}
                stackOnMobile
                style={{
                  padding: 18,
                  backgroundColor: "#0f1219",
                  borderRadius: 6,
                  border: { width: 1, style: "solid", color: "#1e2230" },
                  alignItems: "start",
                  gap: 16,
                }}
              >
                <Column style={{ minWidth: 140, gap: 2 }}>
                  <Text style={{ fontSize: 12, fontWeight: 700, color: "#10b981", letterSpacing: 0.5 }}>
                    {event.phase}
                  </Text>
                  <Text style={{ fontSize: 13, color: "#94a3b8" }}>
                    {event.timestamp}
                  </Text>
                </Column>

                <Column style={{ flex: 1, gap: 4 }}>
                  <Heading level={3} style={{ fontSize: 16, color: "#f8fafc", fontWeight: 600 }}>
                    {event.title}
                  </Heading>
                  <Text style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.55 }}>
                    {event.description}
                  </Text>
                  <Text style={{ fontSize: 13, color: "#94a3b8" }}>
                    Actor: {event.actor}
                  </Text>
                </Column>
              </Row>
            ))}
          </Column>
        </Column>

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#1e2230" } }} />

        {/* Institutional Compliance Seal */}
        <Row stackOnMobile style={{ alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <Column style={{ gap: 4 }}>
            <Text style={{ fontSize: 13, color: "#94a3b8" }}>
              Incident Commander: <Span style={{ color: "#f8fafc", fontWeight: 600 }}>{incident.commander.name}</Span> ({incident.commander.role})
            </Text>
            <Text style={{ fontSize: 13, color: "#94a3b8" }}>
              Audit Hash: {incident.compliance.auditHash}
            </Text>
          </Column>

          <Button
            href="mailto:security-audit@aethernet.internal"
            style={{
              backgroundColor: "#161924",
              color: "#f8fafc",
              border: { width: 1, style: "solid", color: "#1e2230" },
              borderRadius: 6,
              padding: [10, 18],
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Request Audit Package
          </Button>
        </Row>
      </Column>
    </PageRoot>
  );
}
