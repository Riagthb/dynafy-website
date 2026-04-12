"use client";
import { useState } from "react";
import Link from "next/link";

function DynafyLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="12" fill="#070c1a"/>
      <path d="M5,30 C10,30 10,18 16,18 C22,18 22,26 27,24 C32,22 34,15 39,14 L39,36 L5,36 Z" fill="#a855f720"/>
      <path d="M5,30 C10,30 10,18 16,18 C22,18 22,26 27,24 C32,22 34,15 39,14" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="39" cy="14" r="3" fill="#a855f7"/>
      <circle cx="39" cy="14" r="5" fill="#a855f7" opacity="0.15"/>
    </svg>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Onbekende fout");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Verzenden mislukt.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#070c1a", color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}>
      {/* Nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(7,12,26,0.85)", backdropFilter: "blur(12px)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <DynafyLogo size={32} />
            <span style={{ fontWeight: 700, fontSize: 18, background: "linear-gradient(90deg,#4f8ef7,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Dynafy
            </span>
          </Link>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a href="https://app.dynafy.nl" style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14, padding: "8px 16px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)" }}>
              Inloggen
            </a>
            <a href="https://app.dynafy.nl?mode=register" style={{
              fontSize: 14, fontWeight: 600, padding: "8px 18px", borderRadius: 8, textDecoration: "none",
              background: "linear-gradient(135deg,#4f8ef7,#a855f7)", color: "#fff",
            }}>
              Gratis starten
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "72px 24px 48px" }}>
        <div style={{
          display: "inline-block", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#a855f7",
          background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)",
          borderRadius: 999, padding: "4px 14px", marginBottom: 20,
        }}>
          Contact
        </div>
        <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 16px" }}>
          Hoe kunnen we{" "}
          <span style={{ background: "linear-gradient(135deg,#4f8ef7,#a855f7,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            je helpen?
          </span>
        </h1>
        <p style={{ color: "#94a3b8", fontSize: 18, maxWidth: 520, margin: "0 auto" }}>
          Stuur ons een bericht en we reageren zo snel mogelijk. Je ontvangt ook een bevestiging per e-mail.
        </p>
      </div>

      {/* Form card */}
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px 80px" }}>
        {status === "success" ? (
          <div style={{
            background: "linear-gradient(135deg,rgba(79,142,247,0.1),rgba(168,85,247,0.1))",
            border: "1px solid rgba(168,85,247,0.3)", borderRadius: 16, padding: 48, textAlign: "center",
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
            <h2 style={{ fontWeight: 700, fontSize: 22, marginBottom: 12 }}>Bericht verstuurd!</h2>
            <p style={{ color: "#94a3b8", marginBottom: 28 }}>
              Bedankt voor je bericht. We hebben een bevestiging gestuurd naar <strong style={{ color: "#e2e8f0" }}>{form.email}</strong>.
            </p>
            <Link href="/" style={{
              display: "inline-block", textDecoration: "none",
              background: "linear-gradient(135deg,#4f8ef7,#a855f7)", color: "#fff",
              padding: "12px 28px", borderRadius: 10, fontWeight: 600, fontSize: 15,
            }}>
              Terug naar home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16, padding: "40px 40px",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
              <Field label="Naam" id="name" value={form.name} onChange={handleChange} placeholder="Jan de Vries" required />
              <Field label="E-mailadres" id="email" type="email" value={form.email} onChange={handleChange} placeholder="jan@voorbeeld.nl" required />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label htmlFor="subject" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 8 }}>
                Onderwerp
              </label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                style={selectStyle}
              >
                <option value="">Kies een onderwerp...</option>
                <option>Vraag over het product</option>
                <option>Technisch probleem</option>
                <option>Facturatie / abonnement</option>
                <option>Samenwerking / partnerschap</option>
                <option>Anders</option>
              </select>
            </div>

            <div style={{ marginBottom: 28 }}>
              <label htmlFor="message" style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 8 }}>
                Bericht
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Vertel ons wat je vraag of opmerking is..."
                required
                rows={6}
                style={{ ...inputStyle, resize: "vertical", minHeight: 140 } as React.CSSProperties}
              />
            </div>

            {status === "error" && (
              <div style={{
                background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
                borderRadius: 8, padding: "12px 16px", marginBottom: 20, color: "#f87171", fontSize: 14,
              }}>
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                width: "100%", padding: "14px 0", borderRadius: 10, border: "none", cursor: status === "loading" ? "not-allowed" : "pointer",
                background: status === "loading" ? "rgba(168,85,247,0.4)" : "linear-gradient(135deg,#4f8ef7,#a855f7)",
                color: "#fff", fontWeight: 700, fontSize: 16, transition: "opacity 0.2s",
              }}
            >
              {status === "loading" ? "Verzenden..." : "Bericht versturen →"}
            </button>
          </form>
        )}

        {/* Contact info */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32 }}>
          {[
            { icon: "✉️", label: "E-mail", value: "contact@dynafy.nl", href: "mailto:contact@dynafy.nl" },
            { icon: "⚡", label: "Reactietijd", value: "Binnen 1–2 werkdagen", href: null },
          ].map(item => (
            <div key={item.label} style={{
              background: "rgba(15,23,42,0.6)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12, padding: "20px 24px", display: "flex", alignItems: "center", gap: 14,
            }}>
              <span style={{ fontSize: 24 }}>{item.icon}</span>
              <div>
                <p style={{ margin: 0, fontSize: 12, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} style={{ color: "#4f8ef7", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>{item.value}</a>
                ) : (
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 500, color: "#e2e8f0" }}>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Reusable field ─────────────────────────────────────────────
function Field({ label, id, type = "text", value, onChange, placeholder, required }: {
  label: string; id: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 8 }}>
        {label}
      </label>
      <input
        id={id} name={id} type={type} value={value} onChange={onChange}
        placeholder={placeholder} required={required}
        style={inputStyle}
      />
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(7,12,26,0.8)", color: "#e2e8f0", fontSize: 14, outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: "none" as const,
  cursor: "pointer",
};
