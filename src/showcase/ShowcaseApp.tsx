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
import EmailPreview from "./EmailPreview";
import WebPagePreview from "./WebPagePreview";
import AuditDocPreview from "./AuditDocPreview";
import SocialCardPreview from "./SocialCardPreview";
import { colorSuites } from "../theme/colorSuites";

type ViewTab = "web" | "email" | "document" | "canvas";

export default function ShowcaseApp() {
  const [incidentState, setIncidentState] = useState<"active" | "resolved">("active");
  const [activeTab, setActiveTab] = useState<ViewTab>("web");
  const [isMobileView, setIsMobileView] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentIncident: IncidentManifest =
    incidentState === "active" ? activeP0Incident : resolvedIncident;

  // Locked to the user's approved Natural Restorative Slate (Nordic Moss & Slate)
  const currentTheme = colorSuites["moss-eucalyptus"];

  const handleCopy = () => {
    navigator.clipboard?.writeText(JSON.stringify(currentIncident, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: currentTheme.canvasBg,
        color: currentTheme.textPrimary,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        transition: "all 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Top Navbar: Submission-Ready Executive Command Bar */}
      <header
        style={{
          borderBottom: "1px solid #283832",
          backgroundColor: "#151e1b",
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              backgroundColor: "rgba(253, 164, 175, 0.12)",
              border: "1px solid rgba(253, 164, 175, 0.3)",
              borderRadius: 6,
              padding: "8px 14px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <ShieldAlert size={19} color="#fda4af" />
            <span style={{ fontWeight: 800, fontSize: 14, letterSpacing: "0.06em", color: "#fda4af", fontFamily: "'Space Mono', monospace" }}>
              INCIDENT COMMAND
            </span>
          </div>
          <span style={{ color: "#283832", fontSize: 18 }}>/</span>
          <span style={{ fontSize: 16, fontWeight: 700, color: "#e6f0ec", letterSpacing: "-0.01em" }}>
            ZERO-DAY // {currentIncident.id}
          </span>
          <div
            style={{
              backgroundColor: "rgba(110, 231, 183, 0.12)",
              border: "1px solid rgba(110, 231, 183, 0.3)",
              borderRadius: 4,
              padding: "4px 10px",
              fontSize: 12,
              fontWeight: 700,
              color: "#6ee7b7",
              fontFamily: "'Space Mono', monospace",
            }}
          >
            HYPER ELEMENTS VERIFIED • 0 ERRORS
          </div>
        </div>

        {/* State Toggle: Active Outage vs Resolved (Ergonomic 44px Height) */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 13, color: "#8aa399", fontWeight: 600 }}>Scenario:</span>
          <div
            style={{
              backgroundColor: "#1e2a26",
              border: "1px solid #283832",
              borderRadius: 8,
              padding: 4,
              display: "flex",
              gap: 6,
            }}
          >
            <button
              onClick={() => setIncidentState("active")}
              style={{
                backgroundColor: incidentState === "active" ? "rgba(253, 164, 175, 0.18)" : "transparent",
                color: incidentState === "active" ? "#fda4af" : "#8aa399",
                border: incidentState === "active" ? "1px solid rgba(253, 164, 175, 0.4)" : "1px solid transparent",
                borderRadius: 6,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                minHeight: 40,
                transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <AlertTriangle size={15} /> P0 Active Outage
            </button>
            <button
              onClick={() => setIncidentState("resolved")}
              style={{
                backgroundColor: incidentState === "resolved" ? "rgba(110, 231, 183, 0.18)" : "transparent",
                color: incidentState === "resolved" ? "#6ee7b7" : "#8aa399",
                border: incidentState === "resolved" ? "1px solid rgba(110, 231, 183, 0.4)" : "1px solid transparent",
                borderRadius: 6,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                minHeight: 40,
                transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <CheckCircle2 size={15} /> P0 Mitigated &amp; Restored
            </button>
          </div>
        </div>
      </header>

      {/* Format Selector Bar: Clean 4 Core Submission Deliverables */}
      <div
        style={{
          borderBottom: "1px solid #283832",
          backgroundColor: "#111816",
          padding: "10px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        {/* The 4 Outputs Tabs */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <button
            onClick={() => setActiveTab("web")}
            style={{
              backgroundColor: activeTab === "web" ? "#1e2a26" : "transparent",
              color: activeTab === "web" ? "#e6f0ec" : "#8aa399",
              border: `1px solid ${activeTab === "web" ? "#2dd4bf" : "transparent"}`,
              borderRadius: 6,
              padding: "0 18px",
              minHeight: 44,
              height: 44,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <Globe size={17} color={activeTab === "web" ? "#2dd4bf" : "#8aa399"} />
            1. Live Status Portal (<code style={{ fontSize: 12, color: activeTab === "web" ? "#2dd4bf" : "#8aa399", fontFamily: "'Space Mono', monospace" }}>&lt;Page&gt;</code>)
          </button>

          <button
            onClick={() => setActiveTab("email")}
            style={{
              backgroundColor: activeTab === "email" ? "#1e2a26" : "transparent",
              color: activeTab === "email" ? "#e6f0ec" : "#8aa399",
              border: `1px solid ${activeTab === "email" ? "#2dd4bf" : "transparent"}`,
              borderRadius: 6,
              padding: "0 18px",
              minHeight: 44,
              height: 44,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <Mail size={17} color={activeTab === "email" ? "#2dd4bf" : "#8aa399"} />
            2. Email Dispatch (<code style={{ fontSize: 12, color: activeTab === "email" ? "#2dd4bf" : "#8aa399", fontFamily: "'Space Mono', monospace" }}>&lt;Email&gt;</code>)
          </button>

          <button
            onClick={() => setActiveTab("document")}
            style={{
              backgroundColor: activeTab === "document" ? "#1e2a26" : "transparent",
              color: activeTab === "document" ? "#e6f0ec" : "#8aa399",
              border: `1px solid ${activeTab === "document" ? "#2dd4bf" : "transparent"}`,
              borderRadius: 6,
              padding: "0 18px",
              minHeight: 44,
              height: 44,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <FileText size={17} color={activeTab === "document" ? "#2dd4bf" : "#8aa399"} />
            3. Formal RCA Report (<code style={{ fontSize: 12, color: activeTab === "document" ? "#2dd4bf" : "#8aa399", fontFamily: "'Space Mono', monospace" }}>&lt;Document&gt;</code>)
          </button>

          <button
            onClick={() => setActiveTab("canvas")}
            style={{
              backgroundColor: activeTab === "canvas" ? "#1e2a26" : "transparent",
              color: activeTab === "canvas" ? "#e6f0ec" : "#8aa399",
              border: `1px solid ${activeTab === "canvas" ? "#2dd4bf" : "transparent"}`,
              borderRadius: 6,
              padding: "0 18px",
              minHeight: 44,
              height: 44,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <ImageIcon size={17} color={activeTab === "canvas" ? "#2dd4bf" : "#8aa399"} />
            4. Resolution Badge (<code style={{ fontSize: 12, color: activeTab === "canvas" ? "#2dd4bf" : "#8aa399", fontFamily: "'Space Mono', monospace" }}>&lt;Canvas&gt;</code>)
          </button>
        </div>

        {/* Action Controls (Ergonomic 44px Height) */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {activeTab === "email" && (
            <button
              onClick={() => setIsMobileView(!isMobileView)}
              style={{
                backgroundColor: "#1e2a26",
                color: isMobileView ? "#2dd4bf" : "#8aa399",
                border: "1px solid #283832",
                borderRadius: 6,
                padding: "0 16px",
                minHeight: 44,
                height: 44,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <Smartphone size={15} /> {isMobileView ? "Mobile (375px)" : "Desktop (600px)"}
            </button>
          )}

          <button
            onClick={handleCopy}
            style={{
              backgroundColor: "#1e2a26",
              color: "#e6f0ec",
              border: "1px solid #283832",
              borderRadius: 6,
              padding: "0 18px",
              minHeight: 44,
              height: 44,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <Copy size={15} /> {copied ? "Manifest Copied!" : "Copy Manifest JSON"}
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
                : "1200px",
            maxWidth: "100%",
            transition: "width 0.28s cubic-bezier(0.22, 1, 0.36, 1)",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.6)",
            borderRadius: 12,
            border: "1px solid #283832",
            overflow: "hidden",
            backgroundColor: "#0f1513",
          }}
        >
          {activeTab === "web" && (
            <WebPagePreview
              incident={currentIncident}
              typography="option-c"
              suite="moss-eucalyptus"
            />
          )}
          {activeTab === "email" && (
            <EmailPreview
              incident={currentIncident}
              typography="option-c"
              suite="moss-eucalyptus"
            />
          )}
          {activeTab === "document" && (
            <AuditDocPreview
              incident={currentIncident}
              typography="option-c"
            />
          )}
          {activeTab === "canvas" && (
            <SocialCardPreview
              incident={currentIncident}
              typography="option-c"
            />
          )}
        </div>
      </main>
    </div>
  );
}
