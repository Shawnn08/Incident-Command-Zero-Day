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
          border: { width: 1, style: "solid", color: "#283832" },
          padding: [8, 14],
          backgroundColor: "#151e1b",
        }}
      >
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 11, fontWeight: 700, color: "#8aa399", textTransform: "uppercase", letterSpacing: 1 }}>
            {incident.organization} • RELIABILITY ENGINEERING &amp; COMPLIANCE
          </Text>
          <Text style={{ fontSize: 11, fontWeight: 700, color: "#fda4af", textTransform: "uppercase" }}>
            {incident.compliance.classification}
          </Text>
        </Row>
      </PageHeader>

      {/* Persistent Page Footer */}
      <PageFooter
        style={{
          border: { width: 1, style: "solid", color: "#283832" },
          padding: [8, 14],
          backgroundColor: "#151e1b",
        }}
      >
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 11, color: "#8aa399" }}>
            Incident {incident.id} Post-Mortem • Audit Hash: {incident.compliance.auditHash.substring(0, 20)}...
          </Text>
          <Text style={{ fontSize: 11, color: "#8aa399" }}>
            Page <PageNumber /> of <PageNumber total />
          </Text>
        </Row>
      </PageFooter>

      {/* ===================== PAGE 1 ===================== */}
      <Column style={{ gap: 16 }}>
        {/* Document Title Banner */}
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Column style={{ gap: 2 }}>
            <Text style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase", fontWeight: 700 }}>
              Official Engineering Incident Report
            </Text>
            <Heading level={1} style={{ fontSize: 26, color: "#e6f0ec", fontWeight: 800 }}>
              Root Cause Analysis (RCA): {incident.id}
            </Heading>
          </Column>
          <Column
            style={{
              backgroundColor: "rgba(253, 164, 175, 0.14)",
              padding: [6, 12],
              borderRadius: 4,
              border: { width: 1, style: "solid", color: "rgba(253, 164, 175, 0.3)" },
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: 700, color: "#fda4af" }}>
              {incident.severity}
            </Text>
          </Column>
        </Row>

        <Text style={{ fontSize: 15, color: "#cbd5e1" }}>
          Incident Title: <Span style={{ fontWeight: 700, color: "#e6f0ec" }}>{incident.title}</Span>
        </Text>

        {/* Incident Metadata Table */}
        <Table
          style={{
            cellPadding: [12, 14],
            rowBorder: { width: 1, style: "solid", color: "#283832" },
            borderCollapse: "collapse",
            backgroundColor: "#151e1b",
          }}
        >
          <TableRow>
            <TableCell style={{ fontSize: 13, fontWeight: 700, color: "#8aa399" }}>Incident Commander</TableCell>
            <TableCell style={{ fontSize: 13, color: "#e6f0ec" }}>{incident.commander.name} ({incident.commander.role})</TableCell>
            <TableCell style={{ fontSize: 13, fontWeight: 700, color: "#8aa399" }}>Total Downtime</TableCell>
            <TableCell style={{ fontSize: 13, color: "#6ee7b7", fontWeight: 700 }}>{incident.durationMinutes} Minutes (MTTR)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontSize: 13, fontWeight: 700, color: "#8aa399" }}>Incident Started</TableCell>
            <TableCell style={{ fontSize: 13, color: "#e6f0ec" }}>{incident.startedAt}</TableCell>
            <TableCell style={{ fontSize: 13, fontWeight: 700, color: "#8aa399" }}>Incident Mitigated</TableCell>
            <TableCell style={{ fontSize: 13, color: "#e6f0ec" }}>{incident.mitigatedAt}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontSize: 13, fontWeight: 700, color: "#8aa399" }}>Peak Error Rate</TableCell>
            <TableCell style={{ fontSize: 13, color: "#fda4af", fontWeight: 700 }}>{incident.metrics.peakErrorRate}</TableCell>
            <TableCell style={{ fontSize: 13, fontWeight: 700, color: "#8aa399" }}>Impacted Requests</TableCell>
            <TableCell style={{ fontSize: 13, color: "#e6f0ec" }}>{incident.metrics.impactedRequests}</TableCell>
          </TableRow>
        </Table>

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#283832" } }} />

        {/* Section 1: Executive Summary */}
        <Column style={{ gap: 6 }}>
          <Heading level={2} style={{ fontSize: 18, color: "#2dd4bf", fontWeight: 700 }}>
            1. Executive Summary &amp; Impact
          </Heading>
          <Text style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.6 }}>
            {incident.summary}
          </Text>
        </Column>

        {/* Section 2: Technical Root Cause Analysis */}
        <Column style={{ gap: 6 }}>
          <Heading level={2} style={{ fontSize: 18, color: "#2dd4bf", fontWeight: 700 }}>
            2. Technical Root Cause (RFC 7908 Route Leak)
          </Heading>
          <Text style={{ fontSize: 15, color: "#cbd5e1", lineHeight: 1.6 }}>
            {incident.rootCause}
          </Text>
        </Column>

        {/* Section 3: 5 Whys Analysis Table */}
        <Column style={{ gap: 6 }}>
          <Heading level={2} style={{ fontSize: 18, color: "#2dd4bf", fontWeight: 700 }}>
            3. Five Whys Forensic Analysis
          </Heading>
          <Table
            style={{
              cellPadding: [10, 12],
              rowBorder: { width: 1, style: "solid", color: "#283832" },
              borderCollapse: "collapse",
              backgroundColor: "#151e1b",
            }}
          >
            <TableRow header>
              <TableCell style={{ fontSize: 13, color: "#8aa399", width: 40 }}>Level</TableCell>
              <TableCell style={{ fontSize: 13, color: "#8aa399", width: 220 }}>Why Question</TableCell>
              <TableCell style={{ fontSize: 13, color: "#8aa399" }}>Forensic Finding</TableCell>
            </TableRow>
            {incident.fiveWhys.map((why) => (
              <TableRow key={why.level}>
                <TableCell style={{ fontSize: 13, fontWeight: 700, color: "#2dd4bf" }}>
                  Why #{why.level}
                </TableCell>
                <TableCell style={{ fontSize: 13, color: "#e6f0ec", fontWeight: 600 }}>
                  {why.question}
                </TableCell>
                <TableCell style={{ fontSize: 13, color: "#cbd5e1" }}>
                  {why.answer}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Column>
      </Column>

      <PageBreak />

      {/* ===================== PAGE 2 ===================== */}
      <Column style={{ gap: 16 }}>
        {/* Section 4: Chronological Action Timeline */}
        <Column style={{ gap: 6 }}>
          <Heading level={2} style={{ fontSize: 18, color: "#2dd4bf", fontWeight: 700 }}>
            4. Chronological Incident Mitigation Log
          </Heading>
          <Table
            style={{
              cellPadding: [10, 12],
              rowBorder: { width: 1, style: "solid", color: "#283832" },
              borderCollapse: "collapse",
              backgroundColor: "#151e1b",
            }}
          >
            <TableRow header>
              <TableCell style={{ fontSize: 13, color: "#8aa399", width: 80 }}>Time (UTC)</TableCell>
              <TableCell style={{ fontSize: 13, color: "#8aa399", width: 100 }}>Phase</TableCell>
              <TableCell style={{ fontSize: 13, color: "#8aa399" }}>Action &amp; Telemetry</TableCell>
              <TableCell style={{ fontSize: 13, color: "#8aa399", width: 100 }}>Actor</TableCell>
            </TableRow>
            {incident.timeline.map((event, idx) => (
              <TableRow key={idx}>
                <TableCell style={{ fontSize: 13, fontFamily: "monospace", color: "#2dd4bf" }}>
                  {event.timestamp}
                </TableCell>
                <TableCell style={{ fontSize: 13, fontWeight: 600, color: "#e6f0ec" }}>
                  {event.phase}
                </TableCell>
                <TableCell style={{ fontSize: 13, color: "#cbd5e1" }}>
                  <Span style={{ fontWeight: 600, color: "#e6f0ec" }}>{event.title}: </Span>
                  {event.description}
                </TableCell>
                <TableCell style={{ fontSize: 13, color: "#8aa399" }}>
                  {event.actor}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Column>

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#283832" } }} />

        {/* Section 5: Corrective Action Items */}
        <Column style={{ gap: 6 }}>
          <Heading level={2} style={{ fontSize: 18, color: "#2dd4bf", fontWeight: 700 }}>
            5. Corrective Action Items &amp; Architectural Hardening
          </Heading>
          <Table
            style={{
              cellPadding: [10, 12],
              rowBorder: { width: 1, style: "solid", color: "#283832" },
              borderCollapse: "collapse",
              backgroundColor: "#151e1b",
            }}
          >
            <TableRow header>
              <TableCell style={{ fontSize: 13, color: "#8aa399", width: 60 }}>ID</TableCell>
              <TableCell style={{ fontSize: 13, color: "#8aa399" }}>Action Item Description</TableCell>
              <TableCell style={{ fontSize: 13, color: "#8aa399", width: 90 }}>Priority</TableCell>
              <TableCell style={{ fontSize: 13, color: "#8aa399", width: 100 }}>Owner</TableCell>
              <TableCell style={{ fontSize: 13, color: "#8aa399", width: 90 }}>Status</TableCell>
            </TableRow>
            {incident.actionItems.map((action) => (
              <TableRow key={action.id}>
                <TableCell style={{ fontSize: 13, fontFamily: "monospace", color: "#2dd4bf" }}>
                  {action.id}
                </TableCell>
                <TableCell style={{ fontSize: 13, color: "#e6f0ec" }}>
                  {action.description}
                </TableCell>
                <TableCell style={{ fontSize: 13, fontWeight: 700, color: action.priority === "P0" ? "#fda4af" : "#fbbf24" }}>
                  {action.priority}
                </TableCell>
                <TableCell style={{ fontSize: 13, color: "#8aa399" }}>
                  {action.owner}
                </TableCell>
                <TableCell style={{ fontSize: 13, fontWeight: 600, color: action.status === "COMPLETED" ? "#6ee7b7" : "#fbbf24" }}>
                  {action.status}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Column>

        {/* Commander Sign-Off & Verification Stamp */}
        <Row
          style={{
            backgroundColor: "#151e1b",
            padding: [16, 20],
            borderRadius: 6,
            border: { width: 1, style: "solid", color: "#283832" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Column style={{ gap: 2 }}>
            <Text style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase" }}>Executive Sign-Off</Text>
            <Text style={{ fontSize: 15, fontWeight: 700, color: "#e6f0ec" }}>{incident.compliance.signedByVp}</Text>
            <Text style={{ fontSize: 12, color: "#8aa399" }}>VP of Global Infrastructure • {incident.compliance.signDate}</Text>
          </Column>
          <Column style={{ gap: 2, alignItems: "end" }}>
            <Text style={{ fontSize: 12, color: "#8aa399", textTransform: "uppercase" }}>Security Assurance</Text>
            <Text style={{ fontSize: 13, color: "#6ee7b7", fontWeight: 700 }}>
              [VERIFIED] SOC2 Type II Certified
            </Text>
            <Text style={{ fontSize: 11, color: "#8aa399", fontFamily: "monospace" }}>
              {incident.compliance.auditHash.substring(0, 24)}...
            </Text>
          </Column>
        </Row>
      </Column>
    </DocumentRoot>
  );
}
