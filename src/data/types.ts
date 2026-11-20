export type Severity = "P0 - CRITICAL" | "P1 - HIGH" | "P2 - MEDIUM";
export type IncidentStatus = "INVESTIGATING" | "IDENTIFIED" | "MONITORING" | "RESOLVED";

export interface TimelineEvent {
  timestamp: string;
  phase: string;
  title: string;
  description: string;
  actor: string;
  status: "critical" | "warning" | "success" | "info";
}

export interface ImpactedService {
  name: string;
  region: string;
  impactLevel: "OFFLINE" | "DEGRADED" | "OPERATIONAL";
  errorRate: string;
  latencyDelta: string;
}

export interface FiveWhyItem {
  level: number;
  question: string;
  answer: string;
}

export interface ActionItem {
  id: string;
  description: string;
  owner: string;
  priority: "P0" | "P1" | "P2";
  dueDate: string;
  status: "OPEN" | "IN_PROGRESS" | "COMPLETED";
}

export interface IncidentManifest {
  id: string;
  title: string;
  organization: string;
  severity: Severity;
  status: IncidentStatus;
  startedAt: string;
  detectedAt: string;
  mitigatedAt: string;
  durationMinutes: number;
  commander: {
    name: string;
    role: string;
    contact: string;
  };
  metrics: {
    peakErrorRate: string;
    packetLoss: string;
    affectedPoPs: number;
    totalPoPs: number;
    impactedRequests: string;
    slaAvailability: string;
  };
  summary: string;
  rootCause: string;
  timeline: TimelineEvent[];
  impactedServices: ImpactedService[];
  fiveWhys: FiveWhyItem[];
  actionItems: ActionItem[];
  compliance: {
    auditHash: string;
    classification: string;
    signedByVp: string;
    signedBySec: string;
    signDate: string;
  };
}
