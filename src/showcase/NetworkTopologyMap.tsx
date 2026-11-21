export default function NetworkTopologyMap({
  isResolved = false,
  accentColor = "#2dd4bf",
  alertColor = "#f87171",
  successColor = "#34d399",
  cardBg = "#1e2a26",
  borderColor = "#283832",
  labelColor = "#e6f0ec",
  mutedColor = "#8aa399",
  gridLineColor = "rgba(255, 255, 255, 0.06)",
}: {
  isResolved?: boolean;
  accentColor?: string;
  alertColor?: string;
  successColor?: string;
  cardBg?: string;
  borderColor?: string;
  labelColor?: string;
  mutedColor?: string;
  gridLineColor?: string;
}) {
  const statusColor = isResolved ? successColor : alertColor;

  return (
    <div
      style={{
        backgroundColor: cardBg,
        border: `1px solid ${borderColor}`,
        borderRadius: 8,
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header HUD */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: statusColor,
              boxShadow: `0 0 10px ${statusColor}`,
              display: "inline-block",
            }}
          />
          <span style={{ fontSize: 13, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Space Mono', monospace" }}>
            TELEMETRY // GLOBAL ANYCAST BGP TOPOLOGY MAP
          </span>
        </div>
        <div style={{ fontSize: 11, color: mutedColor, fontFamily: "'Space Mono', monospace" }}>
          RFC 7908 • AS-64512 LEAK DETECTION
        </div>
      </div>

      {/* SVG Interactive Visual Imagery Map - Expanded 760x260 ViewBox (No Overlapping Text) */}
      <div style={{ width: "100%", height: "auto", minHeight: 240, display: "flex", justifyContent: "center" }}>
        <svg
          viewBox="0 0 760 260"
          style={{ width: "100%", maxHeight: 270, overflow: "visible" }}
        >
          <defs>
            <linearGradient id="healthyPathPastel" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
              <stop offset="100%" stopColor={successColor} stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="leakPathPastel" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={alertColor} stopOpacity="0.9" />
              <stop offset="100%" stopColor={accentColor} stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Background Grid Lines */}
          <line x1="30" y1="50" x2="730" y2="50" stroke={gridLineColor} strokeDasharray="4 4" strokeWidth="0.8" />
          <line x1="30" y1="125" x2="730" y2="125" stroke={gridLineColor} strokeDasharray="4 4" strokeWidth="0.8" />
          <line x1="30" y1="200" x2="730" y2="200" stroke={gridLineColor} strokeDasharray="4 4" strokeWidth="0.8" />

          {/* Cable Routes (Spaced Out with Generous Bezier Curvature) */}
          {/* IAD (100, 120) to LHR (280, 70) */}
          <path
            d="M 100 120 C 180 60, 220 60, 280 70"
            fill="none"
            stroke="url(#healthyPathPastel)"
            strokeWidth="2.5"
            strokeDasharray={isResolved ? "none" : "6 4"}
          />

          {/* LHR (280, 70) to FRA (460, 175) */}
          <path
            d="M 280 70 C 340 80, 390 140, 460 175"
            fill="none"
            stroke={isResolved ? "url(#healthyPathPastel)" : "url(#leakPathPastel)"}
            strokeWidth={isResolved ? "2.5" : "3.5"}
            strokeDasharray={isResolved ? "none" : "5 5"}
          />

          {/* IAD (100, 120) to NRT (660, 110) direct transit */}
          <path
            d="M 100 120 C 260 230, 500 230, 660 110"
            fill="none"
            stroke="url(#healthyPathPastel)"
            strokeWidth="2"
            opacity="0.75"
          />

          {/* FRA (460, 175) to NRT (660, 110) */}
          <path
            d="M 460 175 C 540 185, 600 145, 660 110"
            fill="none"
            stroke={isResolved ? "url(#healthyPathPastel)" : alertColor}
            strokeWidth="2"
            strokeDasharray={isResolved ? "none" : "4 4"}
            opacity={isResolved ? 0.9 : 0.6}
          />

          {/* Central Route Status Pill (370, 115) - Completely Clear from All Nodes */}
          {!isResolved && (
            <g transform="translate(365, 115)">
              <rect x="-56" y="-14" width="112" height="28" rx="6" fill="rgba(248, 113, 113, 0.2)" stroke="rgba(248, 113, 113, 0.5)" strokeWidth="1" />
              <text x="0" y="5" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="700" fontFamily="'Space Mono', monospace">
                PACKET DROP 42%
              </text>
            </g>
          )}

          {isResolved && (
            <g transform="translate(365, 115)">
              <rect x="-56" y="-14" width="112" height="28" rx="6" fill="rgba(52, 211, 153, 0.2)" stroke="rgba(52, 211, 153, 0.5)" strokeWidth="1" />
              <text x="0" y="5" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="700" fontFamily="'Space Mono', monospace">
                ROV CONVERGED
              </text>
            </g>
          )}

          {/* POP 1: US East (IAD-1 at 100, 120) */}
          <g transform="translate(100, 120)">
            <circle r="20" fill={cardBg} stroke={accentColor} strokeWidth="2.5" />
            <circle r="7" fill={accentColor} />
            <text x="0" y="-30" textAnchor="middle" fill={labelColor} fontSize="13" fontWeight="700" fontFamily="'Space Mono', monospace">
              IAD-1
            </text>
            <text x="0" y="38" textAnchor="middle" fill={mutedColor} fontSize="11" fontFamily="'Space Mono', monospace">
              Ashburn • 100% OK
            </text>
          </g>

          {/* POP 2: London (LHR-2 at 280, 70) */}
          <g transform="translate(280, 70)">
            <circle r="20" fill={cardBg} stroke={isResolved ? successColor : "#fbbf24"} strokeWidth="2.5" />
            <circle r="7" fill={isResolved ? successColor : "#fbbf24"} />
            <text x="0" y="-28" textAnchor="middle" fill={labelColor} fontSize="13" fontWeight="700" fontFamily="'Space Mono', monospace">
              LHR-2
            </text>
            <text x="0" y="38" textAnchor="middle" fill={mutedColor} fontSize="11" fontFamily="'Space Mono', monospace">
              {isResolved ? "London • Healthy" : "London • Rerouting"}
            </text>
          </g>

          {/* POP 3: Frankfurt (FRA-1 at 460, 175) - Cleanly Lowered Ground Zero */}
          <g transform="translate(460, 175)">
            <circle
              r="24"
              fill={cardBg}
              stroke={isResolved ? successColor : alertColor}
              strokeWidth="3"
            />
            <circle r="8" fill={isResolved ? successColor : alertColor} />
            <text x="0" y="-32" textAnchor="middle" fill={labelColor} fontSize="13" fontWeight="800" fontFamily="'Space Mono', monospace">
              FRA-1
            </text>
            <text x="0" y="40" textAnchor="middle" fill={isResolved ? successColor : alertColor} fontSize="11" fontWeight="700" fontFamily="'Space Mono', monospace">
              {isResolved ? "ROV Active • Verified" : "LEAK ORIGIN • ISOLATED"}
            </text>
          </g>

          {/* POP 4: Tokyo (NRT-1 at 660, 110) */}
          <g transform="translate(660, 110)">
            <circle r="20" fill={cardBg} stroke={accentColor} strokeWidth="2.5" />
            <circle r="7" fill={accentColor} />
            <text x="0" y="-30" textAnchor="middle" fill={labelColor} fontSize="13" fontWeight="700" fontFamily="'Space Mono', monospace">
              NRT-1
            </text>
            <text x="0" y="38" textAnchor="middle" fill={mutedColor} fontSize="11" fontFamily="'Space Mono', monospace">
              Tokyo • Stable
            </text>
          </g>
        </svg>
      </div>

      {/* Telemetry Strip */}
      <div
        style={{
          borderTop: `1px solid ${gridLineColor}`,
          paddingTop: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          fontSize: 11,
          fontFamily: "'Space Mono', monospace",
        }}
      >
        <div>
          <span style={{ color: mutedColor }}>ANYCAST CONVERGENCE: </span>
          <strong style={{ color: statusColor }}>{isResolved ? "100.0% (STABILIZED)" : "72.4% (PARTITIONED)"}</strong>
        </div>
        <div>
          <span style={{ color: mutedColor }}>TRANSIT FAILOVER: </span>
          <span style={{ color: accentColor, fontWeight: 600 }}>AS-PATH PREPEND 3X ON TIER-1</span>
        </div>
        <div>
          <span style={{ color: mutedColor }}>ROV FILTER: </span>
          <span style={{ color: isResolved ? successColor : "#fbbf24", fontWeight: 600 }}>{isResolved ? "ENFORCED (RFC 6811)" : "BYPASSED"}</span>
        </div>
      </div>
    </div>
  );
}
