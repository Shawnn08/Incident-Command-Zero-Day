import {
  Button,
  Column,
  Divider,
  Grid,
  Heading,
  Link,
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
  const statusColor = isResolved ? "#34d399" : "#f87171";
  const statusBg = isResolved ? "#064e3b" : "#450a0a";

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
            <Text style={{ fontSize: 14, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1 }}>
              {incident.organization} • Cloud Security &amp; Network Operations
            </Text>
            <Heading level={1} style={{ fontSize: 26, color: "#ffffff", fontWeight: 700 }}>
              {incident.id}: {incident.title}
            </Heading>
          </Column>

          <Column
            style={{
              backgroundColor: statusBg,
              padding: [8, 16],
              borderRadius: 6,
              border: { width: 1, style: "solid", color: statusColor },
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 700, color: statusColor, textTransform: "uppercase" }}>
              ● {incident.status}
            </Text>
          </Column>
        </Row>

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#1e293b" } }} />

        {/* Hero Metrics Grid */}
        <Grid columns={4} stackOnMobile style={{ gap: 16 }}>
          <Column
            style={{
              backgroundColor: "#0f172a",
              padding: 18,
              borderRadius: 8,
              border: { width: 1, style: "solid", color: "#1e293b" },
              gap: 6,
            }}
          >
            <Text style={{ fontSize: 14, color: "#94a3b8", textTransform: "uppercase" }}>Peak Error Rate</Text>
            <Heading level={2} style={{ fontSize: 24, color: statusColor, fontWeight: 700 }}>
              {incident.metrics.peakErrorRate}
            </Heading>
            <Text style={{ fontSize: 14, color: "#94a3b8" }}>Baseline: &lt;0.01%</Text>
          </Column>

          <Column
            style={{
              backgroundColor: "#0f172a",
              padding: 18,
              borderRadius: 8,
              border: { width: 1, style: "solid", color: "#1e293b" },
              gap: 6,
            }}
          >
            <Text style={{ fontSize: 14, color: "#94a3b8", textTransform: "uppercase" }}>Edge Packet Loss</Text>
            <Heading level={2} style={{ fontSize: 24, color: statusColor, fontWeight: 700 }}>
              {incident.metrics.packetLoss}
            </Heading>
            <Text style={{ fontSize: 14, color: "#94a3b8" }}>Tier-1 Transits</Text>
          </Column>

          <Column
            style={{
              backgroundColor: "#0f172a",
              padding: 18,
              borderRadius: 8,
              border: { width: 1, style: "solid", color: "#1e293b" },
              gap: 6,
            }}
          >
            <Text style={{ fontSize: 14, color: "#94a3b8", textTransform: "uppercase" }}>Affected PoPs</Text>
            <Heading level={2} style={{ fontSize: 24, color: "#f8fafc", fontWeight: 700 }}>
              {incident.metrics.affectedPoPs} / {incident.metrics.totalPoPs}
            </Heading>
            <Text style={{ fontSize: 14, color: "#94a3b8" }}>EU &amp; US East Zones</Text>
          </Column>

          <Column
            style={{
              backgroundColor: "#0f172a",
              padding: 18,
              borderRadius: 8,
              border: { width: 1, style: "solid", color: "#1e293b" },
              gap: 6,
            }}
          >
            <Text style={{ fontSize: 14, color: "#94a3b8", textTransform: "uppercase" }}>SLA Availability</Text>
            <Heading level={2} style={{ fontSize: 24, color: "#f8fafc", fontWeight: 700 }}>
              {incident.metrics.slaAvailability}
            </Heading>
            <Text style={{ fontSize: 14, color: "#94a3b8" }}>Target: 99.99%</Text>
          </Column>
        </Grid>

        {/* Main Content Layout: Summary & Live Timeline */}
        <Row stackOnMobile style={{ gap: 24, alignItems: "start" }}>
          {/* Left Column: Summary & Service Table */}
          <Column style={{ flex: 1.2, gap: 20 }}>
            <Column
              style={{
                backgroundColor: "#0f172a",
                padding: 24,
                borderRadius: 8,
                border: { width: 1, style: "solid", color: "#1e293b" },
                gap: 12,
              }}
            >
              <Heading level={2} style={{ fontSize: 18, color: "#ffffff" }}>
                Incident Summary &amp; Blast Radius
              </Heading>
              <Text style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.6 }}>
                {incident.summary}
              </Text>
              <Text style={{ fontSize: 14, color: "#94a3b8" }}>
                <Span style={{ fontWeight: 600, color: "#f8fafc" }}>Root Cause: </Span>
                {incident.rootCause}
              </Text>
            </Column>

            <Column
              style={{
                backgroundColor: "#0f172a",
                padding: 24,
                borderRadius: 8,
                border: { width: 1, style: "solid", color: "#1e293b" },
                gap: 14,
              }}
            >
              <Heading level={2} style={{ fontSize: 18, color: "#ffffff" }}>
                Subsystem Health Matrix
              </Heading>

              <Table
                style={{
                  cellPadding: [12, 10],
                  rowBorder: { width: 1, style: "solid", color: "#1e293b" },
                  borderCollapse: "collapse",
                }}
              >
                <TableRow header>
                  <TableCell style={{ fontSize: 14, color: "#94a3b8" }}>Microservice</TableCell>
                  <TableCell style={{ fontSize: 14, color: "#94a3b8" }}>Edge Region</TableCell>
                  <TableCell style={{ fontSize: 14, color: "#94a3b8" }}>Error Rate</TableCell>
                  <TableCell style={{ fontSize: 14, color: "#94a3b8", textAlign: "right" }}>Status</TableCell>
                </TableRow>
                {incident.impactedServices.map((service, idx) => (
                  <TableRow key={idx}>
                    <TableCell style={{ fontSize: 14, color: "#f8fafc", fontWeight: 500 }}>
                      {service.name}
                    </TableCell>
                    <TableCell style={{ fontSize: 14, color: "#94a3b8" }}>
                      {service.region}
                    </TableCell>
                    <TableCell style={{ fontSize: 14, color: "#f8fafc" }}>
                      {service.errorRate}
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
          </Column>

          {/* Right Column: Chronological Action Timeline */}
          <Column style={{ flex: 1, gap: 16 }}>
            <Column
              style={{
                backgroundColor: "#0f172a",
                padding: 24,
                borderRadius: 8,
                border: { width: 1, style: "solid", color: "#1e293b" },
                gap: 16,
              }}
            >
              <Heading level={2} style={{ fontSize: 18, color: "#ffffff" }}>
                Real-Time Action Timeline
              </Heading>

              {incident.timeline.map((event, idx) => (
                <Column
                  key={idx}
                  style={{
                    padding: 14,
                    backgroundColor: "#1e293b",
                    borderRadius: 6,
                    border: { width: 1, style: "solid", color: "#334155" },
                    gap: 6,
                  }}
                >
                  <Row style={{ alignItems: "center", gap: 8 }}>
                    <Text style={{ fontSize: 14, fontWeight: 700, color: "#38bdf8", textTransform: "uppercase" }}>
                      {event.phase} • {event.timestamp}
                    </Text>
                  </Row>
                  <Heading level={3} style={{ fontSize: 15, color: "#f8fafc", fontWeight: 600 }}>
                    {event.title}
                  </Heading>
                  <Text style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.5 }}>
                    {event.description}
                  </Text>
                  <Text style={{ fontSize: 14, color: "#94a3b8" }}>
                    Operator: {event.actor}
                  </Text>
                </Column>
              ))}

              <Button
                href="https://status.aethernet.cloud/war-room"
                style={{
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  padding: [12, 18],
                  borderRadius: 6,
                  fontWeight: 600,
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                Open Live Discord / Slack Ops Feed
              </Button>
            </Column>
          </Column>
        </Row>

        {/* Verified Audit Footer */}
        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#1e293b" } }} />
        <Row stackOnMobile style={{ alignItems: "center", gap: 16 }}>
          <Text style={{ fontSize: 14, color: "#94a3b8" }}>
            Incident Command // ID: <Span style={{ color: "#f8fafc" }}>{incident.id}</Span>
          </Text>
          <Text style={{ fontSize: 14, color: "#94a3b8" }}>
            Security Hash: <Span style={{ color: "#38bdf8" }}>{incident.compliance.auditHash.substring(0, 32)}...</Span>
          </Text>
          <Link href="https://status.aethernet.cloud/security" style={{ fontSize: 14, color: "#38bdf8" }}>
            Verify SOC2 Compliance
          </Link>
        </Row>
      </Column>
    </PageRoot>
  );
}
