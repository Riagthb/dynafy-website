"use client";

const variants = [
  // ── BOLT D variants ───────────────────────────────────────────
  {
    group: "Bolt D",
    id: "3A",
    name: "Bolt D — Blauw / Paars",
    desc: "Originele kleur. Matcht de app exact.",
    svg: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="12" fill="#08101e"/>
        <defs>
          <linearGradient id="b3a" x1="12" y1="8" x2="32" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4f8ef7"/>
            <stop offset="100%" stopColor="#a855f7"/>
          </linearGradient>
        </defs>
        <path d="M13 8 h10 a12 12 0 0 1 0 28 h-10 Z" fill="rgba(79,142,247,0.07)" stroke="rgba(79,142,247,0.15)" strokeWidth="1"/>
        <path d="M24 8 L17 22 h6 L20 36 L31 20 h-7 Z" fill="url(#b3a)"/>
      </svg>
    ),
  },
  {
    group: "Bolt D",
    id: "3B",
    name: "Bolt D — Amber / Oranje",
    desc: "Warmer, energieker. Springt meer uit.",
    svg: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="12" fill="#0d0a04"/>
        <defs>
          <linearGradient id="b3b" x1="12" y1="8" x2="32" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f59e0b"/>
            <stop offset="100%" stopColor="#f97316"/>
          </linearGradient>
        </defs>
        <path d="M13 8 h10 a12 12 0 0 1 0 28 h-10 Z" fill="rgba(245,158,11,0.07)" stroke="rgba(245,158,11,0.15)" strokeWidth="1"/>
        <path d="M24 8 L17 22 h6 L20 36 L31 20 h-7 Z" fill="url(#b3b)"/>
      </svg>
    ),
  },
  {
    group: "Bolt D",
    id: "3C",
    name: "Bolt D — Wit op kleur",
    desc: "Bliksem wit, achtergrond gradient. Meest opvallend.",
    svg: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="12" fill="url(#b3cbg)"/>
        <defs>
          <linearGradient id="b3cbg" x1="0" y1="0" x2="44" y2="44">
            <stop offset="0%" stopColor="#4f8ef7"/>
            <stop offset="100%" stopColor="#6366f1"/>
          </linearGradient>
        </defs>
        <path d="M13 8 h10 a12 12 0 0 1 0 28 h-10 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <path d="M24 8 L17 22 h6 L20 36 L31 20 h-7 Z" fill="white"/>
      </svg>
    ),
  },
  {
    group: "Bolt D",
    id: "3D",
    name: "Bolt D — Groen (finance)",
    desc: "Groen = geld/groei. Rustiger maar herkenbaar.",
    svg: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="12" fill="#06130e"/>
        <defs>
          <linearGradient id="b3d" x1="12" y1="8" x2="32" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22c55e"/>
            <stop offset="100%" stopColor="#14b8a6"/>
          </linearGradient>
        </defs>
        <path d="M13 8 h10 a12 12 0 0 1 0 28 h-10 Z" fill="rgba(34,197,94,0.07)" stroke="rgba(34,197,94,0.2)" strokeWidth="1"/>
        <path d="M24 8 L17 22 h6 L20 36 L31 20 h-7 Z" fill="url(#b3d)"/>
      </svg>
    ),
  },

  // ── WAVE CHART variants ───────────────────────────────────────
  {
    group: "Wave",
    id: "4A",
    name: "Wave — Blauw / Paars",
    desc: "Originele kleur. Elegant en modern.",
    svg: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="12" fill="#070c1a"/>
        <defs>
          <linearGradient id="w4a" x1="5" y1="0" x2="39" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4f8ef7"/>
            <stop offset="60%" stopColor="#a855f7"/>
            <stop offset="100%" stopColor="#ec4899"/>
          </linearGradient>
          <linearGradient id="w4afill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M5,30 C10,30 10,18 16,18 C22,18 22,26 27,24 C32,22 34,15 39,14 L39,36 L5,36 Z" fill="url(#w4afill)"/>
        <path d="M5,30 C10,30 10,18 16,18 C22,18 22,26 27,24 C32,22 34,15 39,14" fill="none" stroke="url(#w4a)" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="39" cy="14" r="3" fill="#a855f7"/>
        <circle cx="39" cy="14" r="5" fill="#a855f7" opacity="0.15"/>
      </svg>
    ),
  },
  {
    group: "Wave",
    id: "4B",
    name: "Wave — Groen (groei)",
    desc: "Groen wave = financiële groei. Positief gevoel.",
    svg: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="12" fill="#060f0a"/>
        <defs>
          <linearGradient id="w4b" x1="5" y1="0" x2="39" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4f8ef7"/>
            <stop offset="100%" stopColor="#22c55e"/>
          </linearGradient>
          <linearGradient id="w4bfill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M5,30 C10,30 10,18 16,18 C22,18 22,26 27,24 C32,22 34,15 39,14 L39,36 L5,36 Z" fill="url(#w4bfill)"/>
        <path d="M5,30 C10,30 10,18 16,18 C22,18 22,26 27,24 C32,22 34,15 39,14" fill="none" stroke="url(#w4b)" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="39" cy="14" r="3" fill="#22c55e"/>
        <circle cx="39" cy="14" r="5" fill="#22c55e" opacity="0.2"/>
      </svg>
    ),
  },
  {
    group: "Wave",
    id: "4C",
    name: "Wave — Wit op kleur",
    desc: "Wave wit, achtergrond paars gradient. Premium look.",
    svg: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="12" fill="url(#w4cbg)"/>
        <defs>
          <linearGradient id="w4cbg" x1="0" y1="0" x2="44" y2="44">
            <stop offset="0%" stopColor="#6366f1"/>
            <stop offset="100%" stopColor="#a855f7"/>
          </linearGradient>
        </defs>
        <path d="M5,30 C10,30 10,18 16,18 C22,18 22,26 27,24 C32,22 34,15 39,14 L39,36 L5,36 Z" fill="rgba(255,255,255,0.15)"/>
        <path d="M5,30 C10,30 10,18 16,18 C22,18 22,26 27,24 C32,22 34,15 39,14" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="39" cy="14" r="3" fill="white"/>
        <circle cx="39" cy="14" r="5" fill="white" opacity="0.2"/>
      </svg>
    ),
  },
  {
    group: "Wave",
    id: "4D",
    name: "Wave — Double line",
    desc: "Twee lijnen = privé + zakelijk. Uniek concept.",
    svg: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="12" fill="#08091a"/>
        <defs>
          <linearGradient id="w4d1" x1="5" y1="0" x2="39" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4f8ef7"/>
            <stop offset="100%" stopColor="#4f8ef7" stopOpacity="0.3"/>
          </linearGradient>
          <linearGradient id="w4d2" x1="5" y1="0" x2="39" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#a855f7"/>
          </linearGradient>
        </defs>
        {/* Line 1 — privé */}
        <path d="M5,26 C9,26 12,18 17,19 C22,20 23,28 28,25 C33,22 35,16 39,15" fill="none" stroke="url(#w4d1)" strokeWidth="2" strokeLinecap="round"/>
        {/* Line 2 — zakelijk */}
        <path d="M5,32 C9,32 11,24 16,23 C21,22 24,30 29,28 C34,26 36,20 39,21" fill="none" stroke="url(#w4d2)" strokeWidth="2" strokeLinecap="round" strokeDasharray="0"/>
        <circle cx="39" cy="15" r="2.5" fill="#4f8ef7"/>
        <circle cx="39" cy="21" r="2.5" fill="#a855f7"/>
      </svg>
    ),
  },
];

const groups = ["Bolt D", "Wave"];

function LogoPreview({ svg, size = 44, showName = false, name = "" }: any) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "20px 22px", background: "#060b14", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ transform: `scale(${size / 44})`, transformOrigin: "left center", flexShrink: 0 }}>{svg}</div>
      <span style={{ fontWeight: 800, fontSize: size * 0.5, color: "#f1f5f9", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>Dynafy</span>
    </div>
  );
}

export default function LogosPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#080d18", padding: "60px 40px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#4f8ef7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Logo varianten</div>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: "#f1f5f9", marginBottom: 8, letterSpacing: "-0.02em" }}>
            Bolt D  ·  Wave
          </h1>
          <p style={{ fontSize: 14, color: "#475569" }}>4 varianten per stijl — kleur, achtergrond en conceptverschillen</p>
        </div>

        {groups.map(group => (
          <div key={group} style={{ marginBottom: 64 }}>
            {/* Group header */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.06)" }}/>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#334155", textTransform: "uppercase", letterSpacing: "0.12em" }}>{group}</span>
              <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.06)" }}/>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", gap: 16 }}>
              {variants.filter(v => v.group === group).map(v => (
                <div key={v.id} style={{
                  background: "#0d1424",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}>
                  {/* Normal size */}
                  <LogoPreview svg={v.svg} size={44}/>

                  {/* Large size */}
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ transform: "scale(1.6)", transformOrigin: "left center", marginLeft: 8 }}>{v.svg}</div>
                    <span style={{ marginLeft: 48, fontSize: 10, color: "#1e293b" }}>1.6×</span>
                  </div>

                  {/* Info */}
                  <div style={{ marginTop: 8 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#4f8ef7", background: "rgba(79,142,247,0.1)", padding: "2px 10px", borderRadius: 20, letterSpacing: "0.05em" }}>
                        #{v.id}
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8" }}>{v.name}</span>
                    </div>
                    <p style={{ fontSize: 12, color: "#475569" }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Side by side comparison */}
        <div style={{ marginTop: 20, padding: "28px 28px", background: "#0d1424", borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#334155", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
            Direct vergelijken — groot formaat
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {variants.map(v => (
              <div key={v.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <div style={{ transform: "scale(2)", transformOrigin: "center top", marginBottom: 40 }}>{v.svg}</div>
                <span style={{ fontSize: 11, color: "#334155", fontWeight: 600 }}>#{v.id}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 24, padding: "18px 22px", background: "#0d1424", borderRadius: 14, border: "1px solid rgba(255,255,255,0.05)" }}>
          <p style={{ fontSize: 13, color: "#475569" }}>
            💡 <strong style={{ color: "#94a3b8" }}>Zeg gewoon:</strong> "3C" of "4A maar dan met groen" of "de Bolt D maar op witte achtergrond" — dan pas ik het aan en zet ik het door in de app én website.
          </p>
        </div>
      </div>
    </div>
  );
}
