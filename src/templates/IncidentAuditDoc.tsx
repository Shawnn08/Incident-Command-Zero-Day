import {
  Column,
  Divider,
  Document,
  Heading,
  PageBreak,
  PageFooter,
  PageHeader,
  PageNumber,
  Row,
  Span,
  Table,
  TableCell,
  TableRow,
  Text,
} from "@hyper-elements/react";
import { resolvedIncident } from "../data/mockIncident";
import type { IncidentManifest } from "../data/types";
import { incidentTheme } from "../theme/incidentTheme";

interface IncidentAuditDocProps {
  incident?: IncidentManifest;
}

const DocumentRoot = Document as any;

export default function IncidentAuditDoc({ incident = resolvedIncident }: IncidentAuditDocProps) {
  return (
    <DocumentRoot
      size="A4"
      orientation="portrait"
      margin={32}
      lang="en"
      title={`Formal Root Cause Analysis Post-Mortem // ${incident.id}`}
      theme={incidentTheme}
      style={{
        gap: 16,
      }}
    >
      {/* Persistent Page Header */}
      <PageHeader
        style={{
          border: { width: 1, style: "solid", color: "#e2e8f0" },
          padding: [8, 12],
          backgroundColor: "#f8fafc",
        }}
      >
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 10, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 1 }}>
            {incident.organization} • RELIABILITY ENGINEERING &amp; COMPLIANCE
          </Text>
          <Text style={{ fontSize: 10, fontWeight: 700, color: "#dc2626", textTransform: "uppercase" }}>
            {incident.compliance.classification}
          </Text>
        </Row>
      </PageHeader>

      {/* Persistent Page Footer */}
      <PageFooter
        style={{
          border: { width: 1, style: "solid", color: "#e2e8f0" },
          padding: [8, 12],
          backgroundColor: "#f8fafc",
        }}
      >
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 10, color: "#94a3b8" }}>
            Incident {incident.id} Post-Mortem • Audit Hash: {incident.compliance.auditHash.substring(0, 20)}...
          </Text>
          <Text style={{ fontSize: 10, color: "#64748b" }}>
            Page <PageNumber /> of <PageNumber total />
          </Text>
        </Row>
      </PageFooter>

      {/* ===================== PAGE 1 ===================== */}
      <Column style={{ gap: 14 }}>
        {/* Document Title Banner */}
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Column style={{ gap: 2 }}>
            <Text style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>
              Official Engineering Incident Report
            </Text>
            <Heading level={1} style={{ fontSize: 22, color: "#0f172a", fontWeight: 800 }}>
              Root Cause Analysis (RCA): {incident.id}
            </Heading>
          </Column>
          <Column
            style={{
              backgroundColor: "#fef2f2",
              padding: [4, 10],
              borderRadius: 4,
              border: { width: 1, style: "solid", color: "#f87171" },
            }}
          >
            <Text style={{ fontSize: 11, fontWeight: 700, color: "#dc2626" }}>
              {incident.severity}
            </Text>
          </Column>
        </Row>

        <Text style={{ fontSize: 13, color: "#334155", fontWeight: 500 }}>
          Incident Title: <Span style={{ fontWeight: 700, color: "#0f172a" }}>{incident.title}</Span>
        </Text>

        {/* Incident Metadata Table */}
        <Table
          style={{
            cellPadding: [6, 8],
            rowBorder: { width: 1, style: "solid", color: "#e2e8f0" },
            backgroundColor: "#f8fafc",
            border: { width: 1, style: "solid", color: "#e2e8f0" },
            borderCollapse: "collapse",
          }}
        >
          <TableRow>
            <TableCell style={{ fontSize: 11, fontWeight: 700, color: "#475569", width: 140 }}>Incident Commander</TableCell>
            <TableCell style={{ fontSize: 11, color: "#0f172a" }}>{incident.commander.name} ({incident.commander.role})</TableCell>
            <TableCell style={{ fontSize: 11, fontWeight: 700, color: "#475569", width: 130 }}>Total Downtime</TableCell>
            <TableCell style={{ fontSize: 11, color: "#dc2626", fontWeight: 700 }}>{incident.durationMinutes} Minutes (MTTR)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontSize: 11, fontWeight: 700, color: "#475569" }}>Incident Started</TableCell>
            <TableCell style={{ fontSize: 11, color: "#0f172a" }}>{incident.startedAt}</TableCell>
            <TableCell style={{ fontSize: 11, fontWeight: 700, color: "#475569" }}>Incident Mitigated</TableCell>
            <TableCell style={{ fontSize: 11, color: "#0f172a" }}>{incident.mitigatedAt}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontSize: 11, fontWeight: 700, color: "#475569" }}>Peak Error Rate</TableCell>
            <TableCell style={{ fontSize: 11, color: "#dc2626", fontWeight: 700 }}>{incident.metrics.peakErrorRate}</TableCell>
            <TableCell style={{ fontSize: 11, fontWeight: 700, color: "#475569" }}>Monthly SLA Impact</TableCell>
            <TableCell style={{ fontSize: 11, color: "#0f172a" }}>{incident.metrics.slaAvailability} Availability</TableCell>
          </TableRow>
        </Table>

        {/* Section 1: Executive Summary */}
        <Column style={{ gap: 6 }}>
          <Heading level={2} style={{ fontSize: 14, color: "#0f172a", textTransform: "uppercase", letterSpacing: 1 }}>
            1. Executive Summary &amp; Scope of Impact
          </Heading>
          <Text style={{ fontSize: 12, color: "#334155", lineHeight: 1.6 }}>
            {incident.summary}
          </Text>
        </Column>

        {/* Section 2: Technical Root Cause */}
        <Column style={{ gap: 6 }}>
          <Heading level={2} style={{ fontSize: 14, color: "#0f172a", textTransform: "uppercase", letterSpacing: 1 }}>
            2. Detailed Root Cause Analysis
          </Heading>
          <Text style={{ fontSize: 12, color: "#334155", lineHeight: 1.6 }}>
            {incident.rootCause} During normal peering operations, BGP session route-maps failed to evaluate RFC 7908 leak detection attributes due to disabled RPKI Route Origin Validation (ROV) on secondary transit interfaces.
          </Text>
        </Column>

        {/* Section 3: The 5-Whys Root Cause Cascade */}
        <Column style={{ gap: 8 }}>
          <Heading level={2} style={{ fontSize: 14, color: "#0f172a", textTransform: "uppercase", letterSpacing: 1 }}>
            3. The 5-Whys Diagnostic Cascade
          </Heading>
          <Table
            style={{
              cellPadding: [6, 8],
              rowBorder: { width: 1, style: "solid", color: "#e2e8f0" },
              border: { width: 1, style: "solid", color: "#e2e8f0" },
              borderCollapse: "collapse",
            }}
          >
            <TableRow header>
              <TableCell style={{ fontSize: 11, color: "#475569", width: 50 }}>Level</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569", width: 230 }}>Why did this happen?</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569" }}>Determined Root Cause</TableCell>
            </TableRow>
            {incident.fiveWhys.map((item) => (
              <TableRow key={item.level}>
                <TableCell style={{ fontSize: 11, fontWeight: 700, color: "#64748b" }}>Why #{item.level}</TableCell>
                <TableCell style={{ fontSize: 11, fontWeight: 600, color: "#0f172a" }}>{item.question}</TableCell>
                <TableCell style={{ fontSize: 11, color: "#334155" }}>{item.answer}</TableCell>
              </TableRow>
            ))}
          </Table>
        </Column>
      </Column>

      {/* ===================== PAGE BREAK ===================== */}
      <PageBreak />

      {/* ===================== PAGE 2 ===================== */}
      <Column style={{ gap: 16 }}>
        {/* Section 4: Subsystem Impact & Recovery Metrics */}
        <Column style={{ gap: 6 }}>
          <Heading level={2} style={{ fontSize: 14, color: "#0f172a", textTransform: "uppercase", letterSpacing: 1 }}>
            4. Subsystem Recovery &amp; Health Matrix
          </Heading>
          <Table
            style={{
              cellPadding: [6, 8],
              rowBorder: { width: 1, style: "solid", color: "#e2e8f0" },
              border: { width: 1, style: "solid", color: "#e2e8f0" },
              borderCollapse: "collapse",
            }}
          >
            <TableRow header>
              <TableCell style={{ fontSize: 11, color: "#475569" }}>Microservice</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569" }}>Region / Cluster</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569" }}>Peak Error %</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569", textAlign: "right" }}>Current Health</TableCell>
            </TableRow>
            {incident.impactedServices.map((service, idx) => (
              <TableRow key={idx}>
                <TableCell style={{ fontSize: 11, fontWeight: 600, color: "#0f172a" }}>{service.name}</TableCell>
                <TableCell style={{ fontSize: 11, color: "#475569" }}>{service.region}</TableCell>
                <TableCell style={{ fontSize: 11, color: "#334155" }}>{service.errorRate}</TableCell>
                <TableCell style={{ fontSize: 11, fontWeight: 700, textAlign: "right", color: "#059669" }}>
                  {service.impactLevel}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Column>

        {/* Section 5: Corrective Preventive Action Items */}
        <Column style={{ gap: 6 }}>
          <Heading level={2} style={{ fontSize: 14, color: "#0f172a", textTransform: "uppercase", letterSpacing: 1 }}>
            5. Mandatory Preventive Action Items (SLA Tracked)
          </Heading>
          <Table
            style={{
              cellPadding: [6, 8],
              rowBorder: { width: 1, style: "solid", color: "#e2e8f0" },
              border: { width: 1, style: "solid", color: "#e2e8f0" },
              borderCollapse: "collapse",
            }}
          >
            <TableRow header>
              <TableCell style={{ fontSize: 11, color: "#475569", width: 80 }}>Jira Ticket</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569" }}>Remediation Task Description</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569", width: 120 }}>Owner</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569", width: 70 }}>Due Date</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569", width: 70, textAlign: "right" }}>Status</TableCell>
            </TableRow>
            {incident.actionItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell style={{ fontSize: 11, fontWeight: 700, color: "#2563eb" }}>{item.id}</TableCell>
                <TableCell style={{ fontSize: 11, color: "#334155" }}>{item.description}</TableCell>
                <TableCell style={{ fontSize: 11, color: "#64748b" }}>{item.owner}</TableCell>
                <TableCell style={{ fontSize: 11, color: "#64748b" }}>{item.dueDate}</TableCell>
                <TableCell style={{ fontSize: 11, fontWeight: 600, textAlign: "right", color: item.status === "COMPLETED" ? "#059669" : "#d97706" }}>
                  {item.status}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Column>

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#cbd5e1" } }} />

        {/* Section 6: Executive Cryptographic Sign-Off */}
        <Column style={{ gap: 10 }}>
          <Heading level={2} style={{ fontSize: 14, color: "#0f172a", textTransform: "uppercase", letterSpacing: 1 }}>
            6. Executive Sign-Off &amp; SOC2 Audit Certification
          </Heading>
          <Text style={{ fontSize: 11, color: "#64748b", lineHeight: 1.5 }}>
            This post-mortem document has been reviewed, certified, and cryptographically signed pursuant to Enterprise SLA Section 14.2 and SOC2 Type II compliance controls.
          </Text>

          <Row style={{ gap: 24 }}>
            <Column
              style={{
                flex: 1,
                border: { width: 1, style: "solid", color: "#cbd5e1" },
                padding: 12,
                borderRadius: 4,
                gap: 4,
              }}
            >
              <Text style={{ fontSize: 10, color: "#64748b", textTransform: "uppercase" }}>VP Global Infrastructure</Text>
              <Text style={{ fontSize: 12, fontWeight: 700, color: "#0f172a" }}>{incident.compliance.signedByVp}</Text>
              <Text style={{ fontSize: 10, color: "#059669" }}>[VERIFIED] SIGNED ({incident.compliance.signDate})</Text>
            </Column>

            <Column
              style={{
                flex: 1,
                border: { width: 1, style: "solid", color: "#cbd5e1" },
                padding: 12,
                borderRadius: 4,
                gap: 4,
              }}
            >
              <Text style={{ fontSize: 10, color: "#64748b", textTransform: "uppercase" }}>Chief Information Security Officer (CISO)</Text>
              <Text style={{ fontSize: 12, fontWeight: 700, color: "#0f172a" }}>{incident.compliance.signedBySec}</Text>
              <Text style={{ fontSize: 10, color: "#059669" }}>[VERIFIED] SIGNED ({incident.compliance.signDate})</Text>
            </Column>
          </Row>

          <Text style={{ fontSize: 10, color: "#94a3b8", fontFamily: "monospace" }}>
            Cryptographic SHA-256 Digest: {incident.compliance.auditHash}
          </Text>
        </Column>
      </Column>
    </DocumentRoot>
  );
}
