import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Copy,
  FileText,
  Globe,
  Image as ImageIcon,
  Mail,
  Smartphone,
} from "lucide-react";
import { activeP0Incident, resolvedIncident } from "../data/mockIncident";
import type { IncidentManifest } from "../data/types";
import WebPagePreview from "./WebPagePreview";
import EmailPreview from "./EmailPreview";
import AuditDocPreview from "./AuditDocPreview";
import SocialCardPreview from "./SocialCardPreview";

type ViewTab = "web" | "email" | "document" | "canvas";

export default function ShowcaseApp() {
  const [incidentState, setIncidentState] = useState<"active" | "resolved">("active");
  const [activeTab, setActiveTab] = useState<ViewTab>("web");
  const [isMobileView, setIsMobileView] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentIncident: IncidentManifest =
    incidentState === "active" ? activeP0Incident : resolvedIncident;

  const handleCopy = () => {
    navigator.clipboard?.writeText(JSON.stringify(currentIncident, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#07090e",
        color: "#f8fafc",
        fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Sleek Floating-Style Header Bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(7, 9, 14, 0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #1e2230",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        {/* Brand & Suite Indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                backgroundColor: incidentState === "active" ? "#f43f5e" : "#10b981",
                boxShadow: `0 0 10px ${incidentState === "active" ? "#f43f5e" : "#10b981"}`,
              }}
            />
            <span
              style={{
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: "0.04em",
                color: "#f8fafc",
                fontFamily: "'Geist Mono', monospace",
              }}
            >
              INCIDENT COMMAND
            </span>
          </div>

          <span style={{ color: "#1e2230" }}>|</span>

          <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 600 }}>
            {currentIncident.id}
          </span>

          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#10b981",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.28)",
              borderRadius: 4,
              padding: "2px 8px",
              fontFamily: "'Geist Mono', monospace",
            }}
          >
            TITANIUM OBSIDIAN
          </span>
        </div>

        {/* Center: Template Format Segment Switcher */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#0f1219",
            border: "1px solid #1e2230",
            borderRadius: 8,
            padding: 3,
            gap: 2,
          }}
        >
          <button
            onClick={() => setActiveTab("web")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 14px",
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              backgroundColor: activeTab === "web" ? "#161924" : "transparent",
              color: activeTab === "web" ? "#f8fafc" : "#94a3b8",
              transition: "background 150ms ease, color 150ms ease",
              fontFamily: "'Geist', sans-serif",
            }}
          >
            <Globe size={15} />
            <span>Live Status Portal (&lt;Page&gt;)</span>
          </button>

          <button
            onClick={() => setActiveTab("email")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 14px",
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              backgroundColor: activeTab === "email" ? "#161924" : "transparent",
              color: activeTab === "email" ? "#f8fafc" : "#94a3b8",
              transition: "background 150ms ease, color 150ms ease",
              fontFamily: "'Geist', sans-serif",
            }}
          >
            <Mail size={15} />
            <span>SLA Dispatch (&lt;Email&gt;)</span>
          </button>

          <button
            onClick={() => setActiveTab("document")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 14px",
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              backgroundColor: activeTab === "document" ? "#161924" : "transparent",
              color: activeTab === "document" ? "#f8fafc" : "#94a3b8",
              transition: "background 150ms ease, color 150ms ease",
              fontFamily: "'Geist', sans-serif",
            }}
          >
            <FileText size={15} />
            <span>Whitepaper Dossier (&lt;Document&gt;)</span>
          </button>

          <button
            onClick={() => setActiveTab("canvas")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 14px",
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
              backgroundColor: activeTab === "canvas" ? "#161924" : "transparent",
              color: activeTab === "canvas" ? "#f8fafc" : "#94a3b8",
              transition: "background 150ms ease, color 150ms ease",
              fontFamily: "'Geist', sans-serif",
            }}
          >
            <ImageIcon size={15} />
            <span>Resolution Badge (&lt;Canvas&gt;)</span>
          </button>
        </div>

        {/* Right Action Controls: Scenario Toggle & Copy */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Scenario Toggle */}
          <div
            style={{
              display: "flex",
              backgroundColor: "#0f1219",
              border: "1px solid #1e2230",
              borderRadius: 8,
              padding: 3,
              gap: 2,
            }}
          >
            <button
              onClick={() => setIncidentState("active")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                border: "none",
                backgroundColor:
                  incidentState === "active" ? "rgba(244, 63, 94, 0.2)" : "transparent",
                color: incidentState === "active" ? "#f43f5e" : "#94a3b8",
                transition: "background 150ms ease, color 150ms ease",
                fontFamily: "'Geist Mono', monospace",
              }}
            >
              <AlertTriangle size={13} />
              <span>ACTIVE OUTAGE</span>
            </button>

            <button
              onClick={() => setIncidentState("resolved")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                border: "none",
                backgroundColor:
                  incidentState === "resolved" ? "rgba(16, 185, 129, 0.2)" : "transparent",
                color: incidentState === "resolved" ? "#10b981" : "#94a3b8",
                transition: "background 150ms ease, color 150ms ease",
                fontFamily: "'Geist Mono', monospace",
              }}
            >
              <CheckCircle2 size={13} />
              <span>MITIGATED</span>
            </button>
          </div>

          {/* Email Viewport Toggle */}
          {activeTab === "email" && (
            <button
              onClick={() => setIsMobileView(!isMobileView)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "7px 12px",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                backgroundColor: isMobileView ? "#161924" : "#0f1219",
                border: "1px solid #1e2230",
                color: isMobileView ? "#f8fafc" : "#94a3b8",
                fontFamily: "'Geist', sans-serif",
              }}
            >
              <Smartphone size={14} />
              <span>{isMobileView ? "Mobile (375px)" : "Desktop (600px)"}</span>
            </button>
          )}

          {/* Copy Manifest Button */}
          <button
            onClick={handleCopy}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "7px 14px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              backgroundColor: "#161924",
              border: "1px solid #1e2230",
              color: "#f8fafc",
              transition: "background 150ms ease",
              fontFamily: "'Geist', sans-serif",
            }}
          >
            <Copy size={13} />
            <span>{copied ? "Copied JSON!" : "Copy Manifest"}</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: activeTab === "document" ? "0px" : "32px 16px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ width: "100%", maxWidth: activeTab === "document" ? "100%" : "960px" }}>
          {activeTab === "web" && <WebPagePreview incident={currentIncident} />}
          {activeTab === "email" && (
            <EmailPreview incident={currentIncident} isMobile={isMobileView} />
          )}
          {activeTab === "document" && <AuditDocPreview incident={currentIncident} />}
          {activeTab === "canvas" && <SocialCardPreview incident={currentIncident} />}
        </div>
      </main>

      {/* Minimal Engineering Footer */}
      <footer
        style={{
          borderTop: "1px solid #1e2230",
          backgroundColor: "#07090e",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 12,
          color: "#94a3b8",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span>Incident Command // Zero-Day</span>
          <span>•</span>
          <span>Hyper Elements Template Challenge</span>
        </div>
        <div>
          <span>Engine: </span>
          <a
            href="https://hyperelements.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            @hyper-elements/react
          </a>
        </div>
      </footer>
    </div>
  );
}
