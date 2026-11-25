export default function NetworkTopologyMap({
  isResolved = false,
}: {
  isResolved?: boolean;
}) {
  const statusMint = "#10b981";
  const statusRose = "#f43f5e";
  const statusAmber = "#f59e0b";
  const textPrimary = "#f8fafc";
  const textSecondary = "#94a3b8";
  const textMuted = "#64748b";

  const activeColor = isResolved ? statusMint : statusRose;

  return (
    <div
      style={{
        backgroundColor: "#090a0f",
        border: "1px solid #1e2230",
        borderRadius: 8,
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Visualizer Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: activeColor,
              boxShadow: `0 0 12px ${activeColor}`,
              display: "inline-block",
            }}
          />
          <h3
            style={{
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              color: textPrimary,
              margin: 0,
            }}
          >
            Anycast BGP Edge Routing Topology
          </h3>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontSize: 11,
              fontFamily: "'Geist Mono', monospace",
              color: isResolved ? statusMint : statusRose,
              backgroundColor: isResolved
                ? "rgba(16, 185, 129, 0.12)"
                : "rgba(244, 63, 94, 0.12)",
              border: `1px solid ${
                isResolved
                  ? "rgba(16, 185, 129, 0.28)"
                  : "rgba(244, 63, 94, 0.28)"
              }`,
              borderRadius: 4,
              padding: "4px 10px",
              fontWeight: 700,
            }}
          >
            {isResolved ? "● ROV ENFORCED // 100% CONVERGED" : "▲ RFC 7908 ROUTE LEAK ACTIVE"}
          </span>
          <span
            style={{
              fontSize: 11,
              color: textMuted,
              fontFamily: "'Geist Mono', monospace",
            }}
          >
            AS-64512
          </span>
        </div>
      </div>

      {/* SVG Topology Canvas (780 x 260) */}
      <div style={{ width: "100%", overflowX: "auto" }}>
        <svg
          viewBox="0 0 780 260"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            minWidth: "680px",
          }}
          aria-label="Anycast BGP Edge Network Map"
        >
          <defs>
            <linearGradient id="healthyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="leakedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Background Grid Lines */}
          <line x1="40" y1="65" x2="740" y2="65" stroke="#161924" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="40" y1="130" x2="740" y2="130" stroke="#161924" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="40" y1="195" x2="740" y2="195" stroke="#161924" strokeWidth="1" strokeDasharray="4 4" />

          {/* Inter-PoP Mesh Lines */}
          <path
            d="M 110 130 C 200 70, 220 75, 300 75"
            fill="none"
            stroke={isResolved ? "url(#healthyGradient)" : "url(#leakedGradient)"}
            strokeWidth={isResolved ? "2" : "2.5"}
            strokeDasharray={isResolved ? "none" : "6 4"}
          />
          <path
            d="M 300 75 C 380 75, 420 180, 490 180"
            fill="none"
            stroke={isResolved ? "url(#healthyGradient)" : "url(#leakedGradient)"}
            strokeWidth={isResolved ? "2" : "2.5"}
            strokeDasharray={isResolved ? "none" : "6 4"}
          />
          <path
            d="M 490 180 C 560 180, 600 120, 670 120"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
          />
          <path
            d="M 110 130 C 300 230, 490 230, 670 120"
            fill="none"
            stroke="#1e2230"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Node 1: IAD (US-East) */}
          <g transform="translate(110, 130)">
            <circle r="20" fill="#0f1219" stroke={isResolved ? statusMint : statusRose} strokeWidth="2" />
            <circle r="6" fill={isResolved ? statusMint : statusRose} />
            <text x="0" y="-28" textAnchor="middle" fill={textPrimary} fontSize="12" fontWeight="700" fontFamily="'Geist Mono', monospace">
              IAD-01
            </text>
            <text x="0" y="36" textAnchor="middle" fill={textSecondary} fontSize="11" fontFamily="'Geist Mono', monospace">
              {isResolved ? "0.0% Drop" : "42.8% Drop"}
            </text>
          </g>

          {/* Node 2: LHR (London Edge) */}
          <g transform="translate(300, 75)">
            <circle r="20" fill="#0f1219" stroke={isResolved ? statusMint : statusRose} strokeWidth="2" />
            <circle r="6" fill={isResolved ? statusMint : statusRose} />
            <text x="0" y="-28" textAnchor="middle" fill={textPrimary} fontSize="12" fontWeight="700" fontFamily="'Geist Mono', monospace">
              LHR-02
            </text>
            <text x="0" y="36" textAnchor="middle" fill={textSecondary} fontSize="11" fontFamily="'Geist Mono', monospace">
              {isResolved ? "18ms Lat" : "240ms Lat"}
            </text>
          </g>

          {/* Node 3: FRA (Frankfurt Transit) */}
          <g transform="translate(490, 180)">
            <circle r="20" fill="#0f1219" stroke={isResolved ? statusMint : statusAmber} strokeWidth="2" />
            <circle r="6" fill={isResolved ? statusMint : statusAmber} />
            <text x="0" y="-28" textAnchor="middle" fill={textPrimary} fontSize="12" fontWeight="700" fontFamily="'Geist Mono', monospace">
              FRA-01
            </text>
            <text x="0" y="36" textAnchor="middle" fill={textSecondary} fontSize="11" fontFamily="'Geist Mono', monospace">
              {isResolved ? "Nominal" : "Rerouted"}
            </text>
          </g>

          {/* Node 4: NRT (Tokyo Edge) */}
          <g transform="translate(670, 120)">
            <circle r="20" fill="#0f1219" stroke={statusMint} strokeWidth="2" />
            <circle r="6" fill={statusMint} />
            <text x="0" y="-28" textAnchor="middle" fill={textPrimary} fontSize="12" fontWeight="700" fontFamily="'Geist Mono', monospace">
              NRT-01
            </text>
            <text x="0" y="36" textAnchor="middle" fill={textSecondary} fontSize="11" fontFamily="'Geist Mono', monospace">
              0.0% Drop
            </text>
          </g>

          {/* Flow Annotations */}
          {!isResolved && (
            <g transform="translate(390, 115)">
              <rect x="-85" y="-12" width="170" height="24" rx="4" fill="#161924" stroke="#f43f5e" strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fill="#f43f5e" fontSize="10" fontWeight="700" fontFamily="'Geist Mono', monospace">
                ▲ AS-174 ROUTE LEAK
              </text>
            </g>
          )}

          {isResolved && (
            <g transform="translate(390, 115)">
              <rect x="-85" y="-12" width="170" height="24" rx="4" fill="#161924" stroke="#10b981" strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="700" fontFamily="'Geist Mono', monospace">
                ✓ ROV FILTER ENFORCED
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}
