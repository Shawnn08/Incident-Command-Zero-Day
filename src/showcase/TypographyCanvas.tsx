import { Check, Layers } from "lucide-react";
import type { IncidentManifest } from "../data/types";

export type TypographyOptionId = "option-a" | "option-b" | "option-c";

interface TypographyCanvasProps {
  selectedOption: TypographyOptionId;
  onSelectOption: (option: TypographyOptionId) => void;
  incident: IncidentManifest;
}

export default function TypographyCanvas({
  selectedOption,
  onSelectOption,
  incident,
}: TypographyCanvasProps) {
  const options = [
    {
      id: "option-a" as TypographyOptionId,
      name: "Option A: Neutral Systems",
      fontStack: "'Inter', sans-serif",
      monoStack: "'JetBrains Mono', monospace",
      vibes: "Linear / Cloudflare Console",
      description: "Crisp neutral grotesk paired with JetBrains Mono for telemetry, error rates, and timestamps.",
      specs: {
        h1: { size: "30px", weight: 700, lh: "36px", ls: "-0.02em" },
        h2: { size: "24px", weight: 600, lh: "32px", ls: "-0.015em" },
        h3: { size: "20px", weight: 600, lh: "28px", ls: "-0.01em" },
        body: { size: "16px", weight: 400, lh: "24px", ls: "0" },
        small: { size: "14px", weight: 400, lh: "20px", ls: "0" },
        caption: { size: "12px", weight: 500, lh: "16px", ls: "+0.04em", mono: true },
      },
    },
    {
      id: "option-b" as TypographyOptionId,
      name: "Option B: High-Authority Dossier",
      fontStack: "'Geist', sans-serif",
      monoStack: "'Geist Mono', monospace",
      vibes: "Vercel / Datadog RCA Dossier",
      description: "High-density geometric technical grotesk. Engineered for forensic post-mortems and audit logs.",
      specs: {
        h1: { size: "36px", weight: 700, lh: "40px", ls: "-0.025em" },
        h2: { size: "24px", weight: 600, lh: "32px", ls: "-0.02em" },
        h3: { size: "20px", weight: 600, lh: "28px", ls: "-0.015em" },
        body: { size: "16px", weight: 400, lh: "24px", ls: "0" },
        small: { size: "14px", weight: 400, lh: "20px", ls: "0" },
        caption: { size: "12px", weight: 600, lh: "16px", ls: "+0.06em", mono: true },
      },
    },
    {
      id: "option-c" as TypographyOptionId,
      name: "Option C: Swiss Minimalist Grid (Chosen)",
      fontStack: "'Plus Jakarta Sans', sans-serif",
      monoStack: "'Space Mono', monospace",
      vibes: "Swiss High-Craft / Unlayer Masterpiece",
      description: "Humanist geometry with Space Mono tabular accents. Balanced line heights, zero eye fatigue, strictly 16px body text.",
      specs: {
        h1: { size: "30px", weight: 700, lh: "36px", ls: "-0.02em" },
        h2: { size: "24px", weight: 600, lh: "32px", ls: "-0.015em" },
        h3: { size: "20px", weight: 600, lh: "28px", ls: "-0.01em" },
        body: { size: "16px", weight: 400, lh: "24px", ls: "0" },
        small: { size: "14px", weight: 400, lh: "20px", ls: "0" },
        caption: { size: "12px", weight: 500, lh: "16px", ls: "+0.03em", mono: true },
      },
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28, padding: "28px 24px", backgroundColor: "#0d1117", color: "#e6edf3" }}>
      {/* Banner */}
      <div
        style={{
          backgroundColor: "#161b22",
          border: "1px solid #30363d",
          borderRadius: 10,
          padding: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#38bdf8", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Space Mono', monospace" }}>
            <Layers size={16} /> Phase 1: Typography Audit &amp; Locked Mobile Scale
          </div>
          <h2 style={{ fontSize: 22, color: "#e6edf3", fontWeight: 700, margin: "6px 0 4px 0" }}>
            Locked Scale: Option C (Plus Jakarta Sans + Space Mono)
          </h2>
          <p style={{ fontSize: 14, color: "#8b949e", margin: 0 }}>
            Strictly snapping to Tailwind default steps (12, 14, 16, 20, 24, 30, 36) per <code style={{ color: "#38bdf8" }}>elayadesign-skills</code>. Default body copy is strictly 16px. No weights above bold (no 900), no orphaned words.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onSelectOption(opt.id)}
              style={{
                backgroundColor: selectedOption === opt.id ? "#38bdf8" : "#21262d",
                color: selectedOption === opt.id ? "#090d16" : "#e6edf3",
                border: "1px solid",
                borderColor: selectedOption === opt.id ? "#38bdf8" : "#30363d",
                borderRadius: 6,
                padding: "8px 14px",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                height: 40,
              }}
            >
              {selectedOption === opt.id && <Check size={14} />}
              {opt.name.split(":")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Visual Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        {options.map((opt) => {
          const isSelected = selectedOption === opt.id;

          return (
            <div
              key={opt.id}
              onClick={() => onSelectOption(opt.id)}
              style={{
                backgroundColor: isSelected ? "#161b22" : "#11161d",
                border: isSelected ? "2px solid #38bdf8" : "1px solid #30363d",
                borderRadius: 10,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 20,
                cursor: "pointer",
                position: "relative",
                transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
                boxShadow: isSelected ? "0 8px 24px rgba(56, 189, 248, 0.12)" : "none",
              }}
            >
              {/* Card Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#38bdf8", textTransform: "uppercase", letterSpacing: "1px", fontFamily: opt.monoStack }}>
                    {opt.vibes}
                  </div>
                  <h3 style={{ fontSize: 18, color: "#e6edf3", fontWeight: 700, margin: "4px 0 0 0", fontFamily: opt.fontStack }}>
                    {opt.name}
                  </h3>
                </div>
                {isSelected && (
                  <div style={{ backgroundColor: "#38bdf8", color: "#090d16", borderRadius: "50%", padding: 3, display: "flex" }}>
                    <Check size={14} />
                  </div>
                )}
              </div>

              <p style={{ fontSize: 13, color: "#8b949e", margin: 0, lineHeight: 1.5 }}>
                {opt.description}
              </p>

              {/* Complete Type Scale Specimen Table */}
              <div
                style={{
                  backgroundColor: "#21262d",
                  borderRadius: 6,
                  padding: 14,
                  border: "1px solid #30363d",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, color: "#8b949e", textTransform: "uppercase", letterSpacing: "1px", fontFamily: opt.monoStack }}>
                  Tailwind Type Scale Specimen
                </div>

                <div style={{ borderBottom: "1px solid #30363d", paddingBottom: 8 }}>
                  <div style={{ fontSize: 10, color: "#8b949e", fontFamily: opt.monoStack }}>
                    H1: {opt.specs.h1.size} / {opt.specs.h1.lh} (Semibold 700)
                  </div>
                  <div style={{ fontSize: opt.specs.h1.size, fontWeight: opt.specs.h1.weight, lineHeight: opt.specs.h1.lh, letterSpacing: opt.specs.h1.ls, color: "#e6edf3", fontFamily: opt.fontStack }}>
                    BGP Hijack Triage
                  </div>
                </div>

                <div style={{ borderBottom: "1px solid #30363d", paddingBottom: 8 }}>
                  <div style={{ fontSize: 10, color: "#8b949e", fontFamily: opt.monoStack }}>
                    H2: {opt.specs.h2.size} / {opt.specs.h2.lh} (Semibold 600)
                  </div>
                  <div style={{ fontSize: opt.specs.h2.size, fontWeight: opt.specs.h2.weight, lineHeight: opt.specs.h2.lh, letterSpacing: opt.specs.h2.ls, color: "#e6edf3", fontFamily: opt.fontStack }}>
                    42.8% Global Packet Loss
                  </div>
                </div>

                <div style={{ borderBottom: "1px solid #30363d", paddingBottom: 8 }}>
                  <div style={{ fontSize: 10, color: "#8b949e", fontFamily: opt.monoStack }}>
                    H3: {opt.specs.h3.size} / {opt.specs.h3.lh} (Semibold 600)
                  </div>
                  <div style={{ fontSize: opt.specs.h3.size, fontWeight: opt.specs.h3.weight, lineHeight: opt.specs.h3.lh, letterSpacing: opt.specs.h3.ls, color: "#e6edf3", fontFamily: opt.fontStack }}>
                    Root Cause: RFC 7908 Route Leak
                  </div>
                </div>

                <div style={{ borderBottom: "1px solid #30363d", paddingBottom: 8 }}>
                  <div style={{ fontSize: 10, color: "#8b949e", fontFamily: opt.monoStack }}>
                    Body Medium (Strict 16px): {opt.specs.body.size} / {opt.specs.body.lh} (Regular 400)
                  </div>
                  <div style={{ fontSize: opt.specs.body.size, fontWeight: opt.specs.body.weight, lineHeight: opt.specs.body.lh, color: "#cbd5e1", fontFamily: opt.fontStack }}>
                    Tier-1 upstream transit provider AS-64512 mistakenly announced unauthorized more-specific /24 prefixes.
                  </div>
                </div>

                <div style={{ borderBottom: "1px solid #30363d", paddingBottom: 8 }}>
                  <div style={{ fontSize: 10, color: "#8b949e", fontFamily: opt.monoStack }}>
                    Body Small: {opt.specs.small.size} / {opt.specs.small.lh} (Regular 400)
                  </div>
                  <div style={{ fontSize: opt.specs.small.size, fontWeight: opt.specs.small.weight, lineHeight: opt.specs.small.lh, color: "#8b949e", fontFamily: opt.fontStack }}>
                    Mitigation confirmed across all 4 Anycast edge points of presence (PoPs).
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 10, color: "#8b949e", fontFamily: opt.monoStack }}>
                    Caption / Tabular Mono: {opt.specs.caption.size} / {opt.specs.caption.lh} (Space Mono)
                  </div>
                  <div style={{ fontSize: opt.specs.caption.size, fontWeight: opt.specs.caption.weight, lineHeight: opt.specs.caption.lh, letterSpacing: opt.specs.caption.ls, color: "#38bdf8", fontFamily: opt.monoStack }}>
                    RFC-7908 • SHA256: 9f8a2b4c1d7e • 14:23:08 UTC
                  </div>
                </div>
              </div>

              {/* Live Rendered Card Sample */}
              <div
                style={{
                  backgroundColor: "#0d1117",
                  borderRadius: 8,
                  padding: 16,
                  border: "1px solid #30363d",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  fontFamily: opt.fontStack,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", fontFamily: opt.monoStack }}>
                    {incident.organization} • Ops Bridge
                  </span>
                  <span style={{ fontSize: 11, color: "#f87171", backgroundColor: "rgba(248, 113, 113, 0.12)", border: "1px solid rgba(248, 113, 113, 0.3)", borderRadius: 4, padding: "2px 6px", fontWeight: 700 }}>
                    {incident.severity}
                  </span>
                </div>
                <div style={{ fontSize: opt.specs.h3.size, fontWeight: opt.specs.h3.weight, color: "#e6edf3" }}>
                  {incident.id}: {incident.title}
                </div>
                <div style={{ fontSize: opt.specs.small.size, color: "#8b949e", lineHeight: 1.5 }}>
                  {incident.summary.substring(0, 110)}...
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 8, borderTop: "1px solid #21262d", fontSize: 11, color: "#38bdf8", fontFamily: opt.monoStack }}>
                  <span>MTTR: {incident.durationMinutes} min</span>
                  <span>Impacted: 8,420 Tenants</span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectOption(opt.id);
                }}
                style={{
                  backgroundColor: isSelected ? "#38bdf8" : "#21262d",
                  color: isSelected ? "#090d16" : "#e6edf3",
                  border: "1px solid",
                  borderColor: isSelected ? "#38bdf8" : "#30363d",
                  borderRadius: 6,
                  padding: "10px 18px",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 44,
                  minHeight: 44,
                  transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {isSelected ? "Active Scale (Option C)" : "Select This Scale"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
