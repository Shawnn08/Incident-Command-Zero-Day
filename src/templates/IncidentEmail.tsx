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
  const statusColor = isResolved ? "#10b981" : "#f43f5e";
  const statusBg = isResolved ? "rgba(16, 185, 129, 0.12)" : "rgba(244, 63, 94, 0.12)";
  const statusBorder = isResolved ? "rgba(16, 185, 129, 0.28)" : "rgba(244, 63, 94, 0.28)";
  const btnBg = isResolved ? "#059669" : "#be123c";

  return (
    <EmailRoot
      width={600}
      lang="en"
      theme={incidentTheme}
      previewText={`[${incident.severity}] ${incident.id}: ${incident.title}`}
      title={`Incident Dispatch: ${incident.id}`}
      style={{
        gap: 20,
      }}
    >
      <Column
        style={{
          backgroundColor: "#0f1219",
          padding: 28,
          borderRadius: 8,
          border: { width: 1, style: "solid", color: "#1e2230" },
          gap: 20,
        }}
      >
        {/* Top Masthead Row */}
        <Row stackOnMobile style={{ alignItems: "center", gap: 12 }}>
          <Column style={{ flex: 1, gap: 4 }}>
            <Text style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>
              {incident.organization} • SLA Emergency Dispatch
            </Text>
            <Heading level={1} style={{ fontSize: 24, color: "#f8fafc", fontWeight: 800 }}>
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

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#1e2230" } }} />

        {/* Executive Incident Brief */}
        <Text style={{ fontSize: 16, color: "#f8fafc", lineHeight: 1.6 }}>
          {incident.summary}
        </Text>

        <Text style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.55 }}>
          <Span style={{ color: "#f8fafc", fontWeight: 600 }}>Forensic Root Cause: </Span>
          {incident.rootCause}
        </Text>

        <Text style={{ fontSize: 13, fontStyle: "italic", color: "#38bdf8", lineHeight: 1.5 }}>
          Notice: Urgent SLA notification dispatched under RFC 7908 Anycast BGP mitigation protocols.
        </Text>

        {/* Telemetry Summary Table (Table-safe for Outlook) */}
        <Table
          style={{
            cellPadding: [12, 14],
            rowBorder: { width: 1, style: "solid", color: "#1e2230" },
            borderCollapse: "collapse",
            backgroundColor: "#08090d",
          }}
        >
          <TableRow header>
            <TableCell style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase" }}>Peak Error Rate</TableCell>
            <TableCell style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase" }}>Edge Packet Drop</TableCell>
            <TableCell style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", textAlign: "right" }}>Impacted Requests</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontSize: 20, fontWeight: 800, color: statusColor }}>
              {incident.metrics.peakErrorRate}
            </TableCell>
            <TableCell style={{ fontSize: 20, fontWeight: 800, color: statusColor }}>
              {incident.metrics.packetLoss}
            </TableCell>
            <TableCell style={{ fontSize: 20, fontWeight: 800, color: "#f8fafc", textAlign: "right" }}>
              {incident.metrics.impactedRequests}
            </TableCell>
          </TableRow>
        </Table>

        {/* Impacted Region Matrix */}
        <Column style={{ gap: 10 }}>
          <Heading level={2} style={{ fontSize: 16, color: "#f8fafc", fontWeight: 700 }}>
            Impacted Edge Subsystems
          </Heading>
          <Table
            style={{
              cellPadding: [10, 12],
              rowBorder: { width: 1, style: "solid", color: "#1e2230" },
              borderCollapse: "collapse",
              backgroundColor: "#08090d",
            }}
          >
            <TableRow header>
              <TableCell style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>Service</TableCell>
              <TableCell style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>Region</TableCell>
              <TableCell style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600, textAlign: "right" }}>State</TableCell>
            </TableRow>
            {incident.impactedServices.map((svc, idx) => (
              <TableRow key={idx}>
                <TableCell style={{ fontSize: 13, color: "#f8fafc", fontWeight: 600 }}>{svc.name}</TableCell>
                <TableCell style={{ fontSize: 13, color: "#94a3b8" }}>{svc.region}</TableCell>
                <TableCell
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    textAlign: "right",
                    color: svc.impactLevel === "OPERATIONAL" ? "#10b981" : "#f43f5e",
                  }}
                >
                  {svc.impactLevel}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Column>

        {/* 44px High-Contrast Action CTA */}
        <Column style={{ padding: [8, 0, 0, 0] }}>
          <Button
            href={`https://status.aethernet.internal/incidents/${incident.id}`}
            style={{
              backgroundColor: btnBg,
              color: "#ffffff",
              padding: [14, 24],
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            View Live Incident Telemetry &amp; Resolution Feed
          </Button>
        </Column>

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#1e2230" } }} />

        {/* Footer Meta */}
        <Row stackOnMobile style={{ alignItems: "center", gap: 8 }}>
          <Column style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, color: "#94a3b8" }}>
              Incident Commander: <Span style={{ color: "#f8fafc", fontWeight: 600 }}>{incident.commander.name}</Span>
            </Text>
          </Column>
          <Text style={{ fontSize: 12, color: "#94a3b8" }}>
            Audit Hash: {incident.compliance.auditHash.substring(0, 18)}...
          </Text>
        </Row>
      </Column>
    </EmailRoot>
  );
}
