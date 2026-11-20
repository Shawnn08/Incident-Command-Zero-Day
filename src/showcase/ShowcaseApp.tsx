import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Copy,
  FileText,
  Globe,
  Image as ImageIcon,
  Mail,
  ShieldAlert,
  Smartphone,
} from "lucide-react";
import { activeP0Incident, resolvedIncident } from "../data/mockIncident";
import type { IncidentManifest } from "../data/types";
import IncidentEmail from "../templates/IncidentEmail";
import IncidentWebPage from "../templates/IncidentWebPage";
import IncidentAuditDoc from "../templates/IncidentAuditDoc";
import IncidentSocialCard from "../templates/IncidentSocialCard";

type ViewTab = "email" | "web" | "document" | "canvas";

export default function ShowcaseApp() {
  const [incidentState, setIncidentState] = useState<"active" | "resolved">("active");
  const [activeTab, setActiveTab] = useState<ViewTab>("email");
  const [isMobileView, setIsMobileView] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentIncident: IncidentManifest =
    incidentState === "active" ? activeP0Incident : resolvedIncident;

  const handleCopyHtml = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#06090e", color: "#f8fafc", fontFamily: "Inter, sans-serif" }}>
      {/* Top Navbar */}
      <header
        style={{
          borderBottom: "1px solid #1e293b",
          backgroundColor: "#0b0f19",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              backgroundColor: "#450a0a",
              border: "1px solid #ef4444",
              borderRadius: 6,
              padding: "6px 10px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <ShieldAlert size={18} color="#ef4444" />
            <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.08em", color: "#f87171" }}>
              INCIDENT COMMAND
            </span>
          </div>
          <span style={{ color: "#64748b" }}>/</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#cbd5e1" }}>
            ZERO-DAY // {currentIncident.id}
          </span>
          <div
            style={{
              backgroundColor: "#064e3b",
              border: "1px solid #10b981",
              borderRadius: 4,
              padding: "2px 8px",
              fontSize: 11,
              fontWeight: 700,
              color: "#34d399",
            }}
          >
            HYPER ELEMENTS VERIFIED: 0 ERRORS
          </div>
        </div>

        {/* State Toggle: Active Outage vs Resolved */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 12, color: "#94a3b8" }}>Incident Scenario:</span>
          <div
            style={{
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: 6,
              padding: 3,
              display: "flex",
              gap: 4,
            }}
          >
            <button
              onClick={() => setIncidentState("active")}
              style={{
                backgroundColor: incidentState === "active" ? "#450a0a" : "transparent",
                color: incidentState === "active" ? "#f87171" : "#94a3b8",
                border: incidentState === "active" ? "1px solid #ef4444" : "none",
                borderRadius: 4,
                padding: "6px 12px",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <AlertTriangle size={14} /> P0 Active Outage
            </button>
            <button
              onClick={() => setIncidentState("resolved")}
              style={{
                backgroundColor: incidentState === "resolved" ? "#064e3b" : "transparent",
                color: incidentState === "resolved" ? "#34d399" : "#94a3b8",
                border: incidentState === "resolved" ? "1px solid #10b981" : "none",
                borderRadius: 4,
                padding: "6px 12px",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <CheckCircle2 size={14} /> P0 Mitigated &amp; Resolved
            </button>
          </div>
        </div>
      </header>

      {/* Format Selector Bar */}
      <div
        style={{
          borderBottom: "1px solid #1e293b",
          backgroundColor: "#090d16",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {/* The 4 Outputs Tabs */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            onClick={() => setActiveTab("email")}
            style={{
              backgroundColor: activeTab === "email" ? "#1e293b" : "transparent",
              color: activeTab === "email" ? "#ffffff" : "#94a3b8",
              border: activeTab === "email" ? "1px solid #38bdf8" : "1px solid transparent",
              borderRadius: 6,
              padding: "8px 14px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Mail size={16} color={activeTab === "email" ? "#38bdf8" : "#94a3b8"} />
            1. Email Dispatch (<code style={{ fontSize: 11, color: "#38bdf8" }}>&lt;Email&gt;</code>)
          </button>

          <button
            onClick={() => setActiveTab("web")}
            style={{
              backgroundColor: activeTab === "web" ? "#1e293b" : "transparent",
              color: activeTab === "web" ? "#ffffff" : "#94a3b8",
              border: activeTab === "web" ? "1px solid #38bdf8" : "1px solid transparent",
              borderRadius: 6,
              padding: "8px 14px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Globe size={16} color={activeTab === "web" ? "#38bdf8" : "#94a3b8"} />
            2. Live Status Portal (<code style={{ fontSize: 11, color: "#38bdf8" }}>&lt;Page&gt;</code>)
          </button>

          <button
            onClick={() => setActiveTab("document")}
            style={{
              backgroundColor: activeTab === "document" ? "#1e293b" : "transparent",
              color: activeTab === "document" ? "#ffffff" : "#94a3b8",
              border: activeTab === "document" ? "1px solid #38bdf8" : "1px solid transparent",
              borderRadius: 6,
              padding: "8px 14px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <FileText size={16} color={activeTab === "document" ? "#38bdf8" : "#94a3b8"} />
            3. Formal RCA PDF (<code style={{ fontSize: 11, color: "#38bdf8" }}>&lt;Document&gt;</code>)
          </button>

          <button
            onClick={() => setActiveTab("canvas")}
            style={{
              backgroundColor: activeTab === "canvas" ? "#1e293b" : "transparent",
              color: activeTab === "canvas" ? "#ffffff" : "#94a3b8",
              border: activeTab === "canvas" ? "1px solid #38bdf8" : "1px solid transparent",
              borderRadius: 6,
              padding: "8px 14px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <ImageIcon size={16} color={activeTab === "canvas" ? "#38bdf8" : "#94a3b8"} />
            4. Resolution Badge (<code style={{ fontSize: 11, color: "#38bdf8" }}>&lt;Canvas&gt;</code>)
          </button>
        </div>

        {/* Action Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {activeTab === "email" && (
            <button
              onClick={() => setIsMobileView(!isMobileView)}
              style={{
                backgroundColor: isMobileView ? "#1e293b" : "#0f172a",
                color: isMobileView ? "#38bdf8" : "#94a3b8",
                border: "1px solid #334155",
                borderRadius: 6,
                padding: "6px 12px",
                fontSize: 12,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Smartphone size={14} /> {isMobileView ? "Mobile (375px)" : "Desktop (600px)"}
            </button>
          )}

          <button
            onClick={handleCopyHtml}
            style={{
              backgroundColor: "#0f172a",
              color: "#f8fafc",
              border: "1px solid #334155",
              borderRadius: 6,
              padding: "6px 12px",
              fontSize: 12,
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Copy size={14} /> {copied ? "Copied Source!" : "Copy Output"}
          </button>
        </div>
      </div>

      {/* Main Workspace Preview Container */}
      <main
        style={{
          padding: 32,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            width:
              activeTab === "email"
                ? isMobileView
                  ? "375px"
                  : "640px"
                : activeTab === "web"
                ? "980px"
                : activeTab === "document"
                ? "840px"
                : "1240px",
            transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
            borderRadius: 12,
            border: "1px solid #1e293b",
            overflow: "hidden",
            backgroundColor: activeTab === "document" ? "#ffffff" : "#0b0f19",
          }}
        >
          {activeTab === "email" && <IncidentEmail incident={currentIncident} />}
          {activeTab === "web" && <IncidentWebPage incident={currentIncident} />}
          {activeTab === "document" && <IncidentAuditDoc incident={currentIncident} />}
          {activeTab === "canvas" && <IncidentSocialCard incident={currentIncident} />}
        </div>
      </main>
    </div>
  );
}
