import { useState } from "react";
import type { IncidentManifest } from "../data/types";
import EmailPreview from "./EmailPreview";
import WebPagePreview from "./WebPagePreview";
import { colorSuites, type ColorSuiteId } from "../theme/colorSuites";
import { ShieldCheck, Sparkles, Sliders, Check } from "lucide-react";

export default function ColorAuditCanvas({
  incident,
  selectedSuite,
  onSelectSuite,
}: {
  incident: IncidentManifest;
  selectedSuite: ColorSuiteId;
  onSelectSuite: (suite: ColorSuiteId) => void;
}) {
  const [sampleScreen, setSampleScreen] = useState<"web" | "email">("web");
  const [isDenoised, setIsDenoised] = useState(true);

  const currentSuite = colorSuites[selectedSuite] || colorSuites["calm-slate"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28, padding: "28px 24px", backgroundColor: "#0d1117", color: "#e6edf3" }}>
      {/* Header Banner */}
      <div
        style={{
          borderBottom: "1px solid #30363d",
          paddingBottom: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontWeight: 700,
              color: currentSuite.themeHue,
              backgroundColor: `${currentSuite.themeHue}18`,
              border: `1px solid ${currentSuite.themeHue}33`,
              padding: "4px 10px",
              borderRadius: 6,
              marginBottom: 10,
              fontFamily: "'Space Mono', monospace",
            }}
          >
            <ShieldCheck size={14} /> PHASE 2: SOOTHING EYE-FRIENDLY COLOR SUITES &amp; DE-NOISING
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px 0", color: "#e6edf3", letterSpacing: "-0.02em" }}>
            Calibrated Dark Slate &amp; Eye-Comfort Systems
          </h1>
          <p style={{ fontSize: 15, color: "#8b949e", margin: 0, maxWidth: 880, lineHeight: 1.6 }}>
            Eliminating blinding stark white backgrounds and harsh neon gamer glare. Modeled on official Hyper Elements templates (<code style={{ color: "#38bdf8", fontFamily: "'Space Mono', monospace" }}>VerificationCode.tsx</code>) and <code style={{ color: "#38bdf8", fontFamily: "'Space Mono', monospace" }}>elayadesign/ai-design-skills</code>: calming dark slate canvases (<code style={{ color: "#8b949e" }}>#0d1117</code>), elevated matte cards (<code style={{ color: "#8b949e" }}>#161b22</code>), hairline borders (<code style={{ color: "#8b949e" }}>#30363d</code>), and soft off-white typography (<code style={{ color: "#8b949e" }}>#e6edf3</code>).
          </p>
        </div>

        {/* Active Badge */}
        <div
          style={{
            backgroundColor: "#161b22",
            border: `1px solid ${currentSuite.themeHue}55`,
            borderRadius: 8,
            padding: "12px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            boxShadow: `0 4px 16px ${currentSuite.themeHue}15`,
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", fontFamily: "'Space Mono', monospace" }}>
            Active Color Suite
          </span>
          <span style={{ fontSize: 15, fontWeight: 700, color: currentSuite.themeHue, display: "flex", alignItems: "center", gap: 6 }}>
            <Sparkles size={15} /> {currentSuite.name}
          </span>
        </div>
      </div>

      {/* 3 Calibrated Soothing Suites Selection Grid */}
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#8b949e", marginBottom: 14, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Space Mono', monospace" }}>
          Select A Calming Technical Suite:
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
          {/* Suite 1: Calm Dark Slate */}
          <div
            onClick={() => onSelectSuite("calm-slate")}
            style={{
              backgroundColor: selectedSuite === "calm-slate" ? "#161b22" : "#12161f",
              border: selectedSuite === "calm-slate" ? "2px solid #38bdf8" : "1px solid #30363d",
              borderRadius: 10,
              padding: 20,
              cursor: "pointer",
              transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
              boxShadow: selectedSuite === "calm-slate" ? "0 8px 24px rgba(56, 189, 248, 0.12)" : "none",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div>
                <span style={{ fontSize: 11, color: "#38bdf8", fontWeight: 700, fontFamily: "'Space Mono', monospace" }}>
                  OFFICIAL HYPER ELEMENTS STANDARD
                </span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e6edf3", margin: "4px 0 2px 0" }}>
                  Calm Dark Slate
                </h3>
                <div style={{ fontSize: 12, color: "#8b949e" }}>#0d1117 Base • #161b22 Card • #30363d Line</div>
              </div>
              {selectedSuite === "calm-slate" && (
                <div style={{ backgroundColor: "#38bdf8", color: "#090d16", borderRadius: "50%", padding: 3, display: "flex" }}>
                  <Check size={14} />
                </div>
              )}
            </div>
            <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.5, margin: "10px 0 14px 0" }}>
              Modeled after the official <code style={{ color: "#38bdf8" }}>VerificationCode.tsx</code> template. Deep eye comfort, zero glare, high-contrast readable off-white typography.
            </p>
            {/* Swatches */}
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {colorSuites["calm-slate"].swatches.map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    backgroundColor: c,
                    border: "1px solid #30363d",
                  }}
                  title={c}
                />
              ))}
            </div>
          </div>

          {/* Suite 2: Twilight Graphite */}
          <div
            onClick={() => onSelectSuite("twilight-graphite")}
            style={{
              backgroundColor: selectedSuite === "twilight-graphite" ? "#1a1f2c" : "#12151c",
              border: selectedSuite === "twilight-graphite" ? "2px solid #818cf8" : "1px solid #2d354a",
              borderRadius: 10,
              padding: 20,
              cursor: "pointer",
              transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
              boxShadow: selectedSuite === "twilight-graphite" ? "0 8px 24px rgba(129, 140, 248, 0.12)" : "none",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div>
                <span style={{ fontSize: 11, color: "#818cf8", fontWeight: 700, fontFamily: "'Space Mono', monospace" }}>
                  LINEAR / CLOUDFLARE RADAR THEME
                </span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e2e8f0", margin: "4px 0 2px 0" }}>
                  Twilight Graphite
                </h3>
                <div style={{ fontSize: 12, color: "#94a3b8" }}>#12151c Base • #1a1f2c Card • #2d354a Line</div>
              </div>
              {selectedSuite === "twilight-graphite" && (
                <div style={{ backgroundColor: "#818cf8", color: "#090d16", borderRadius: "50%", padding: 3, display: "flex" }}>
                  <Check size={14} />
                </div>
              )}
            </div>
            <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5, margin: "10px 0 14px 0" }}>
              Soothing deep indigo-graphite base with lavender-tinted borders and soft periwinkle accents. Perfect for high-density operations consoles.
            </p>
            {/* Swatches */}
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {colorSuites["twilight-graphite"].swatches.map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    backgroundColor: c,
                    border: "1px solid #2d354a",
                  }}
                  title={c}
                />
              ))}
            </div>
          </div>

          {/* Suite 3: Nordic Moss & Eucalyptus */}
          <div
            onClick={() => onSelectSuite("moss-eucalyptus")}
            style={{
              backgroundColor: selectedSuite === "moss-eucalyptus" ? "#151e1b" : "#0f1513",
              border: selectedSuite === "moss-eucalyptus" ? "2px solid #2dd4bf" : "1px solid #283832",
              borderRadius: 10,
              padding: 20,
              cursor: "pointer",
              transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
              boxShadow: selectedSuite === "moss-eucalyptus" ? "0 8px 24px rgba(45, 212, 191, 0.12)" : "none",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div>
                <span style={{ fontSize: 11, color: "#2dd4bf", fontWeight: 700, fontFamily: "'Space Mono', monospace" }}>
                  NATURAL RESTORATIVE SLATE
                </span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#e6f0ec", margin: "4px 0 2px 0" }}>
                  Nordic Moss &amp; Slate
                </h3>
                <div style={{ fontSize: 12, color: "#8aa399" }}>#0f1513 Base • #151e1b Card • #283832 Line</div>
              </div>
              {selectedSuite === "moss-eucalyptus" && (
                <div style={{ backgroundColor: "#2dd4bf", color: "#090d16", borderRadius: "50%", padding: 3, display: "flex" }}>
                  <Check size={14} />
                </div>
              )}
            </div>
            <p style={{ fontSize: 13, color: "#8aa399", lineHeight: 1.5, margin: "10px 0 14px 0" }}>
              Calming dark pine-slate foundation engineered to reduce cognitive strain during stressful incident triage. Soft mint accents.
            </p>
            {/* Swatches */}
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              {colorSuites["moss-eucalyptus"].swatches.map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    backgroundColor: c,
                    border: "1px solid #283832",
                  }}
                  title={c}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* De-Noising Controls Bar */}
      <div
        style={{
          backgroundColor: "#161b22",
          border: "1px solid #30363d",
          borderRadius: 8,
          padding: "14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", fontFamily: "'Space Mono', monospace" }}>
            Sample Screen:
          </span>
          <div style={{ display: "flex", gap: 6 }}>
            <button
              onClick={() => setSampleScreen("web")}
              style={{
                backgroundColor: sampleScreen === "web" ? "#21262d" : "transparent",
                color: sampleScreen === "web" ? "#e6edf3" : "#8b949e",
                border: sampleScreen === "web" ? "1px solid #38bdf8" : "1px solid #30363d",
                borderRadius: 6,
                padding: "8px 14px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                height: 38,
              }}
            >
              Live Status Portal (&lt;Page&gt;)
            </button>
            <button
              onClick={() => setSampleScreen("email")}
              style={{
                backgroundColor: sampleScreen === "email" ? "#21262d" : "transparent",
                color: sampleScreen === "email" ? "#e6edf3" : "#8b949e",
                border: sampleScreen === "email" ? "1px solid #38bdf8" : "1px solid #30363d",
                borderRadius: 6,
                padding: "8px 14px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                height: 38,
              }}
            >
              Email Dispatch (&lt;Email&gt;)
            </button>
          </div>
        </div>

        {/* Quieter Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 13, color: "#8b949e", fontWeight: 600 }}>Impeccable `quieter` Mode:</span>
          <button
            onClick={() => setIsDenoised(!isDenoised)}
            style={{
              backgroundColor: isDenoised ? "rgba(52, 211, 153, 0.15)" : "#21262d",
              color: isDenoised ? "#34d399" : "#8b949e",
              border: `1px solid ${isDenoised ? "rgba(52, 211, 153, 0.4)" : "#30363d"}`,
              borderRadius: 6,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              height: 38,
            }}
          >
            <Sliders size={14} />
            {isDenoised ? "De-Noised: Ghost Badges & Hairline Borders" : "Raw: Harsh Borders & Filled Badges"}
          </button>
        </div>
      </div>

      {/* Live Sample Screen Preview */}
      <div
        style={{
          border: "1px solid #30363d",
          borderRadius: 10,
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          backgroundColor: currentSuite.canvasBg,
        }}
      >
        {sampleScreen === "web" ? (
          <WebPagePreview incident={incident} denoised={isDenoised} suite={selectedSuite} />
        ) : (
          <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
            <div style={{ maxWidth: 640, width: "100%", borderRadius: 10, overflow: "hidden", border: "1px solid #30363d" }}>
              <EmailPreview incident={incident} denoised={isDenoised} suite={selectedSuite} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
