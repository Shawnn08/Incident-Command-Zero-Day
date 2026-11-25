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
  const isResolved = incident.status === "RESOLVED";

  return (
    <DocumentRoot
      size="A4"
      orientation="portrait"
      margin={32}
      lang="en"
      title={`Formal Root Cause Analysis Post-Mortem // ${incident.id}`}
      theme={incidentTheme}
      style={{
        gap: 18,
      }}
    >
      {/* Persistent Running Page Header */}
      <PageHeader
        style={{
          border: { width: 1, style: "solid", color: "#e2e8f0" },
          padding: [8, 14],
          backgroundColor: "#f8fafc",
        }}
      >
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 10, fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: 1 }}>
            {incident.organization} • RELIABILITY ENGINEERING &amp; AUDIT COMPLIANCE
          </Text>
          <Text style={{ fontSize: 10, fontWeight: 700, color: "#b91c1c", textTransform: "uppercase" }}>
            {incident.compliance.classification}
          </Text>
        </Row>
      </PageHeader>

      {/* Persistent Running Page Footer */}
      <PageFooter
        style={{
          border: { width: 1, style: "solid", color: "#e2e8f0" },
          padding: [8, 14],
          backgroundColor: "#f8fafc",
        }}
      >
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 10, color: "#64748b" }}>
            Incident {incident.id} Post-Mortem • Audit Hash: {incident.compliance.auditHash.substring(0, 24)}...
          </Text>
          <Text style={{ fontSize: 10, color: "#64748b" }}>
            Page <PageNumber /> of <PageNumber total />
          </Text>
        </Row>
      </PageFooter>

      {/* ===================== PAGE 1 ===================== */}
      <Column style={{ gap: 18 }}>
        {/* Document Title Banner */}
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Column style={{ gap: 4 }}>
            <Text style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", fontWeight: 700, letterSpacing: 1 }}>
              Official Engineering Post-Mortem Dossier
            </Text>
            <Heading level={1} style={{ fontSize: 26, color: "#0f172a", fontWeight: 800 }}>
              Root Cause Analysis (RCA): {incident.id}
            </Heading>
            <Text style={{ fontSize: 14, fontStyle: "italic", color: "#475569", lineHeight: 1.5 }}>
              A forensic examination of Anycast BGP route propagation, telemetry failure modes, and architectural safeguards.
            </Text>
          </Column>

          <Column
            style={{
              backgroundColor: isResolved ? "#ecfdf5" : "#fef2f2",
              padding: [6, 12],
              borderRadius: 4,
              border: { width: 1, style: "solid", color: isResolved ? "#a7f3d0" : "#fecaca" },
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: 700, color: isResolved ? "#047857" : "#b91c1c" }}>
              {incident.severity} • {incident.status}
            </Text>
          </Column>
        </Row>

        {/* Core Incident Metadata Matrix */}
        <Table
          style={{
            cellPadding: [10, 14],
            rowBorder: { width: 1, style: "solid", color: "#e2e8f0" },
            borderCollapse: "collapse",
            backgroundColor: "#ffffff",
          }}
        >
          <TableRow>
            <TableCell style={{ fontSize: 12, color: "#475569", fontWeight: 700, width: "25%" }}>Incident Commander</TableCell>
            <TableCell style={{ fontSize: 13, color: "#0f172a", width: "25%" }}>{incident.commander.name}</TableCell>
            <TableCell style={{ fontSize: 12, color: "#475569", fontWeight: 700, width: "25%" }}>Total Downtime (MTTR)</TableCell>
            <TableCell style={{ fontSize: 13, color: "#047857", fontWeight: 700, width: "25%" }}>{incident.durationMinutes} Minutes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontSize: 12, color: "#475569", fontWeight: 700 }}>Incident Detected</TableCell>
            <TableCell style={{ fontSize: 13, color: "#0f172a" }}>{incident.detectedAt}</TableCell>
            <TableCell style={{ fontSize: 12, color: "#475569", fontWeight: 700 }}>Incident Mitigated</TableCell>
            <TableCell style={{ fontSize: 13, color: "#0f172a" }}>{incident.mitigatedAt}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontSize: 12, color: "#475569", fontWeight: 700 }}>Peak Error Rate</TableCell>
            <TableCell style={{ fontSize: 13, color: "#b91c1c", fontWeight: 700 }}>{incident.metrics.peakErrorRate}</TableCell>
            <TableCell style={{ fontSize: 12, color: "#475569", fontWeight: 700 }}>Impacted Requests</TableCell>
            <TableCell style={{ fontSize: 13, color: "#0f172a" }}>{incident.metrics.impactedRequests}</TableCell>
          </TableRow>
        </Table>

        {/* Section 1: Executive Summary */}
        <Column style={{ gap: 6 }}>
          <Heading level={2} style={{ fontSize: 16, color: "#0f172a", fontWeight: 700 }}>
            1. Executive Summary &amp; Impact
          </Heading>
          <Text style={{ fontSize: 13, lineHeight: 1.6, color: "#334155" }}>
            {incident.summary}
          </Text>
        </Column>

        {/* Section 2: Technical Root Cause */}
        <Column style={{ gap: 6 }}>
          <Heading level={2} style={{ fontSize: 16, color: "#0f172a", fontWeight: 700 }}>
            2. Technical Root Cause (RFC 7908 BGP Route Leak)
          </Heading>
          <Text style={{ fontSize: 13, lineHeight: 1.6, color: "#334155" }}>
            {incident.rootCause}
          </Text>
        </Column>

        {/* Section 3: 5-Whys Forensic Analysis */}
        <Column style={{ gap: 8 }}>
          <Heading level={2} style={{ fontSize: 16, color: "#0f172a", fontWeight: 700 }}>
            3. Five-Whys Forensic Cascade
          </Heading>
          <Table
            style={{
              cellPadding: [8, 12],
              rowBorder: { width: 1, style: "solid", color: "#e2e8f0" },
              borderCollapse: "collapse",
              backgroundColor: "#ffffff",
            }}
          >
            <TableRow header>
              <TableCell style={{ fontSize: 11, color: "#475569", width: "14%", fontWeight: 700 }}>Level</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569", width: "43%", fontWeight: 700 }}>Diagnostic Question</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569", width: "43%", fontWeight: 700 }}>Forensic Finding</TableCell>
            </TableRow>
            {incident.fiveWhys.map((why) => (
              <TableRow key={why.level}>
                <TableCell style={{ fontSize: 12, fontWeight: 700, color: "#0369a1" }}>
                  Why #{why.level}
                </TableCell>
                <TableCell style={{ fontSize: 12, color: "#0f172a" }}>
                  {why.question}
                </TableCell>
                <TableCell style={{ fontSize: 12, color: "#475569" }}>
                  {why.answer}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Column>
      </Column>

      {/* ===================== PAGE BREAK ===================== */}
      <PageBreak />

      {/* ===================== PAGE 2 ===================== */}
      <Column style={{ gap: 20 }}>
        {/* Section 4: Chronological Timeline Log */}
        <Column style={{ gap: 8 }}>
          <Heading level={2} style={{ fontSize: 16, color: "#0f172a", fontWeight: 700 }}>
            4. Chronological Remediation Log
          </Heading>
          <Table
            style={{
              cellPadding: [8, 12],
              rowBorder: { width: 1, style: "solid", color: "#e2e8f0" },
              borderCollapse: "collapse",
              backgroundColor: "#ffffff",
            }}
          >
            <TableRow header>
              <TableCell style={{ fontSize: 11, color: "#475569", width: "18%", fontWeight: 700 }}>Timestamp</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569", width: "62%", fontWeight: 700 }}>Mitigation Event</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569", width: "20%", fontWeight: 700 }}>Actor</TableCell>
            </TableRow>
            {incident.timeline.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell style={{ fontSize: 12, fontWeight: 700, color: "#047857" }}>
                  {item.timestamp}
                </TableCell>
                <TableCell style={{ fontSize: 12, color: "#0f172a" }}>
                  <Span style={{ fontWeight: 600 }}>{item.title}: </Span>
                  {item.description}
                </TableCell>
                <TableCell style={{ fontSize: 11, color: "#64748b" }}>
                  {item.actor}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Column>

        {/* Section 5: Corrective Action Items */}
        <Column style={{ gap: 8 }}>
          <Heading level={2} style={{ fontSize: 16, color: "#0f172a", fontWeight: 700 }}>
            5. Corrective Action Items &amp; Architectural Hardening
          </Heading>
          <Table
            style={{
              cellPadding: [8, 12],
              rowBorder: { width: 1, style: "solid", color: "#e2e8f0" },
              borderCollapse: "collapse",
              backgroundColor: "#ffffff",
            }}
          >
            <TableRow header>
              <TableCell style={{ fontSize: 11, color: "#475569", width: "16%", fontWeight: 700 }}>Jira Ticket</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569", width: "46%", fontWeight: 700 }}>Action Item</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569", width: "20%", fontWeight: 700 }}>Owner</TableCell>
              <TableCell style={{ fontSize: 11, color: "#475569", width: "18%", textAlign: "right", fontWeight: 700 }}>Status</TableCell>
            </TableRow>
            {incident.actionItems.map((act) => (
              <TableRow key={act.id}>
                <TableCell style={{ fontSize: 12, fontWeight: 700, color: "#0369a1" }}>
                  {act.id}
                </TableCell>
                <TableCell style={{ fontSize: 12, color: "#0f172a" }}>
                  {act.description}
                </TableCell>
                <TableCell style={{ fontSize: 11, color: "#64748b" }}>
                  {act.owner}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textAlign: "right",
                    color: act.status === "COMPLETED" ? "#047857" : "#b45309",
                  }}
                >
                  {act.status}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Column>

        <Divider style={{ borderTop: { width: 1, style: "solid", color: "#e2e8f0" } }} />

        {/* Section 6: Executive Validation & Cryptographic Sign-Off */}
        <Column style={{ gap: 8 }}>
          <Heading level={2} style={{ fontSize: 16, color: "#0f172a", fontWeight: 700 }}>
            6. Executive Validation &amp; Compliance Sign-Off
          </Heading>
          <Table
            style={{
              cellPadding: [12, 14],
              rowBorder: { width: 1, style: "solid", color: "#cbd5e1" },
              borderCollapse: "collapse",
              backgroundColor: "#f8fafc",
            }}
          >
            <TableRow>
              <TableCell style={{ fontSize: 12, color: "#475569", width: "50%" }}>
                <Span style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", fontWeight: 700 }}>Executive Sign-Off: </Span>
                <Span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{incident.compliance.signedByVp}</Span>
                <Span style={{ fontSize: 11, color: "#64748b" }}> ({incident.compliance.signedBySec})</Span>
              </TableCell>
              <TableCell style={{ fontSize: 12, color: "#475569", width: "50%" }}>
                <Span style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", fontWeight: 700 }}>Audit Hash: </Span>
                <Span style={{ fontSize: 12, color: "#047857", fontWeight: 700 }}>
                  [VERIFIED] {incident.compliance.auditHash.substring(0, 24)}...
                </Span>
                <Span style={{ fontSize: 11, color: "#64748b" }}> • {incident.compliance.signDate}</Span>
              </TableCell>
            </TableRow>
          </Table>
        </Column>
      </Column>
    </DocumentRoot>
  );
}
