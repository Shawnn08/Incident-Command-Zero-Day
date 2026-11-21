import {
  Button,
  Column,
  Divider,
  Grid,
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
  const statusColor = isResolved ? "#6ee7b7" : "#fda4af";
  const statusBg = isResolved ? "rgba(110, 231, 183, 0.14)" : "rgba(253, 164, 175, 0.14)";
  const statusBorder = isResolved ? "rgba(110, 231, 183, 0.35)" : "rgba(253, 164, 175, 0.35)";

  return (
    <PageRoot
      width={940}
      lang="en"
      title={`${incident.id} War Room // ${incident.organization}`}
      description="Live mission-critical incident telemetry and mitigation status"
      theme={incidentTheme}
      style={{
        gap: 24,
      }}
    >
      <Column style={{ padding: 24, gap: 24 }}>
        {/* Navigation Header */}
        <Row stackOnMobile style={{ alignItems: "center", gap: 16 }}>
          <Column style={{ gap: 4 }}>
            <Text style={{ fontSize: 13, color: "#2dd4bf", textTransform: "uppercase", letterSpacing: 1, fontWeight: 700 }}>
              {incident.organization} • Cloud Security &amp; Network Operations
            </Text>
            <Heading level={1} style={{ fontSize: 30, color: "#e6f0ec", fontWeight: 800 }}>
              {incident.id}: {incident.title}
            </Heading>
          </Column>

          <Column
            style={{
              backgroundColor: statusBg,
              padding: [8, 18],
              borderRadius: 6,
              border: { width: 1, style: "solid", color: statusBorder },
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 700, color: statusColor, textTransform: "uppercase" }}>
              ● {incident.status}
            </Text>
          </Column>
        </Row>

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#283832" } }} />

        {/* Hero Metrics Grid */}
        <Grid columns={4} stackOnMobile style={{ gap: 16 }}>
          <Column
            style={{
              backgroundColor: "#151e1b",
              padding: 20,
              borderRadius: 8,
              border: { width: 1, style: "solid", color: "#283832" },
              gap: 6,
            }}
          >
            <Text style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase" }}>Peak Error Rate</Text>
            <Heading level={2} style={{ fontSize: 28, color: statusColor, fontWeight: 800 }}>
              {incident.metrics.peakErrorRate}
            </Heading>
            <Text style={{ fontSize: 12, color: "#8aa399" }}>Baseline: &lt;0.01%</Text>
          </Column>

          <Column
            style={{
              backgroundColor: "#151e1b",
              padding: 20,
              borderRadius: 8,
              border: { width: 1, style: "solid", color: "#283832" },
              gap: 6,
            }}
          >
            <Text style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase" }}>Edge Packet Loss</Text>
            <Heading level={2} style={{ fontSize: 28, color: statusColor, fontWeight: 800 }}>
              {incident.metrics.packetLoss}
            </Heading>
            <Text style={{ fontSize: 12, color: "#8aa399" }}>Tier-1 Transits</Text>
          </Column>

          <Column
            style={{
              backgroundColor: "#151e1b",
              padding: 20,
              borderRadius: 8,
              border: { width: 1, style: "solid", color: "#283832" },
              gap: 6,
            }}
          >
            <Text style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase" }}>Affected PoPs</Text>
            <Heading level={2} style={{ fontSize: 28, color: "#e6f0ec", fontWeight: 800 }}>
              {incident.metrics.affectedPoPs} / {incident.metrics.totalPoPs}
            </Heading>
            <Text style={{ fontSize: 12, color: "#8aa399" }}>EU &amp; US East Zones</Text>
          </Column>

          <Column
            style={{
              backgroundColor: "#151e1b",
              padding: 20,
              borderRadius: 8,
              border: { width: 1, style: "solid", color: "#283832" },
              gap: 6,
            }}
          >
            <Text style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase" }}>SLA Availability</Text>
            <Heading level={2} style={{ fontSize: 28, color: "#e6f0ec", fontWeight: 800 }}>
              {incident.metrics.slaAvailability}
            </Heading>
            <Text style={{ fontSize: 12, color: "#8aa399" }}>Target: 99.99%</Text>
          </Column>
        </Grid>

        {/* Main Content Layout: Summary & Live Timeline */}
        <Row stackOnMobile style={{ gap: 24, alignItems: "start" }}>
          {/* Left Column: Summary & Service Table */}
          <Column style={{ flex: 1.2, gap: 20 }}>
            <Column
              style={{
                backgroundColor: "#151e1b",
                padding: 26,
                borderRadius: 10,
                border: { width: 1, style: "solid", color: "#283832" },
                gap: 12,
              }}
            >
              <Heading level={2} style={{ fontSize: 20, color: "#e6f0ec", fontWeight: 700 }}>
                Incident Summary &amp; Blast Radius
              </Heading>
              <Text style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.6 }}>
                {incident.summary}
              </Text>
              <Text style={{ fontSize: 14, color: "#8aa399" }}>
                <Span style={{ fontWeight: 600, color: "#e6f0ec" }}>Root Cause: </Span>
                {incident.rootCause}
              </Text>
            </Column>

            <Column
              style={{
                backgroundColor: "#151e1b",
                padding: 26,
                borderRadius: 10,
                border: { width: 1, style: "solid", color: "#283832" },
                gap: 14,
              }}
            >
              <Heading level={2} style={{ fontSize: 20, color: "#e6f0ec", fontWeight: 700 }}>
                Subsystem Health Matrix
              </Heading>

              <Table
                style={{
                  cellPadding: [12, 10],
                  rowBorder: { width: 1, style: "solid", color: "#283832" },
                  borderCollapse: "collapse",
                }}
              >
                <TableRow header>
                  <TableCell style={{ fontSize: 13, color: "#8aa399" }}>Microservice</TableCell>
                  <TableCell style={{ fontSize: 13, color: "#8aa399" }}>Edge Region</TableCell>
                  <TableCell style={{ fontSize: 13, color: "#8aa399" }}>Error Rate</TableCell>
                  <TableCell style={{ fontSize: 13, color: "#8aa399", textAlign: "right" }}>Status</TableCell>
                </TableRow>
                {incident.impactedServices.map((service, idx) => (
                  <TableRow key={idx}>
                    <TableCell style={{ fontSize: 14, color: "#e6f0ec", fontWeight: 500 }}>
                      {service.name}
                    </TableCell>
                    <TableCell style={{ fontSize: 13, color: "#8aa399" }}>
                      {service.region}
                    </TableCell>
                    <TableCell style={{ fontSize: 14, color: "#e6f0ec" }}>
                      {service.errorRate}
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
          </Column>

          {/* Right Column: Chronological Action Timeline */}
          <Column style={{ flex: 1, gap: 16 }}>
            <Column
              style={{
                backgroundColor: "#151e1b",
                padding: 26,
                borderRadius: 10,
                border: { width: 1, style: "solid", color: "#283832" },
                gap: 16,
              }}
            >
              <Heading level={2} style={{ fontSize: 20, color: "#e6f0ec", fontWeight: 700 }}>
                Real-Time Action Timeline
              </Heading>

              {incident.timeline.map((event, idx) => (
                <Column
                  key={idx}
                  style={{
                    padding: 16,
                    backgroundColor: "#1e2a26",
                    borderRadius: 6,
                    border: { width: 1, style: "solid", color: "#283832" },
                    gap: 6,
                  }}
                >
                  <Row style={{ alignItems: "center", gap: 8 }}>
                    <Text style={{ fontSize: 12, fontWeight: 700, color: "#2dd4bf", textTransform: "uppercase" }}>
                      {event.phase} • {event.timestamp}
                    </Text>
                  </Row>
                  <Heading level={3} style={{ fontSize: 16, color: "#e6f0ec", fontWeight: 600 }}>
                    {event.title}
                  </Heading>
                  <Text style={{ fontSize: 14, color: "#8aa399", lineHeight: 1.5 }}>
                    {event.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </Column>
        </Row>

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#283832" } }} />

        {/* Action Controls Footer */}
        <Row stackOnMobile style={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 13, color: "#8aa399" }}>
            Audit Hash: <Span style={{ color: "#2dd4bf" }}>{incident.compliance.auditHash}</Span>
          </Text>

          <Row style={{ gap: 12 }}>
            <Button
              href="https://status.aethernet.cloud/subscribe"
              style={{
                backgroundColor: "#1e2a26",
                color: "#e6f0ec",
                borderRadius: 6,
                padding: [12, 22],
                fontWeight: 600,
                fontSize: 14,
                border: { width: 1, style: "solid", color: "#283832" },
              }}
            >
              Subscribe via Webhook
            </Button>
            <Button
              href="https://status.aethernet.cloud/post-mortem/INC-8492.pdf"
              style={{
                backgroundColor: "#be123c",
                color: "#ffffff",
                borderRadius: 6,
                padding: [12, 24],
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Download Signed RCA (.pdf)
            </Button>
          </Row>
        </Row>
      </Column>
    </PageRoot>
  );
}
