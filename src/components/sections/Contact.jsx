import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import BGVideo from "../../assets/Contact.mp4";
import { FaTerminal, FaPaperPlane, FaLock, FaCheckCircle, FaExclamationTriangle, FaCircle } from "react-icons/fa";

/* ============ Shared tokens ============ */
const crtScreen = {
  background: "radial-gradient(ellipse at 50% 40%, #0d1a14 0%, #081210 60%, #040808 100%)",
  boxShadow: "inset 0 3px 8px rgba(0,0,0,0.95), inset 0 -1px 0 rgba(255,255,255,0.04), 0 1px 0 rgba(255,255,255,0.05)",
};
const scanlines = {
  backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)",
};
const glowGreen = { color: "#4ade80", textShadow: "0 0 6px rgba(74,222,128,0.7)" };
const glowAmber = { color: "#fbbf24", textShadow: "0 0 6px rgba(251,191,36,0.7)" };
const glowCyan = { color: "#67e8f9", textShadow: "0 0 6px rgba(103,232,249,0.7)" };
const glowRed = { color: "#f87171", textShadow: "0 0 6px rgba(248,113,113,0.7)" };
const dim = { color: "#6b7c76" };
const bodyText = { color: "#c8d4ce" };

/* ============ LED ============ */
const Led = ({ color = "green", pulse = false }) => {
  const p = {
    green: { hi: "#86efac", mid: "#22c55e", lo: "#14532d", g: "rgba(34,197,94,0.9)" },
    amber: { hi: "#fcd34d", mid: "#f59e0b", lo: "#78350f", g: "rgba(245,158,11,0.9)" },
    cyan: { hi: "#a5f3fc", mid: "#22d3ee", lo: "#155e75", g: "rgba(34,211,238,0.9)" },
    red: { hi: "#ff9a9a", mid: "#ef4444", lo: "#7f1d1d", g: "rgba(239,68,68,0.9)" },
  }[color];
  return (
    <span className="relative flex items-center justify-center w-2 h-2 shrink-0">
      <span className="absolute inset-0 rounded-full bg-black/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)]" />
      <span
        className={`relative w-1.5 h-1.5 rounded-full ${pulse ? "animate-pulse" : ""}`}
        style={{ background: `radial-gradient(circle at 30% 30%, ${p.hi}, ${p.mid} 50%, ${p.lo})`, boxShadow: `0 0 5px ${p.g}, inset 0 -1px 1px rgba(0,0,0,0.5)` }}
      />
    </span>
  );
};

/* ============ Terminal input field ============ */
const TerminalField = ({ label, name, value, onChange, placeholder, type = "text", required, multiline, pattern }) => (
  <div className="font-mono">
    <div className="flex items-center gap-1.5 mb-1.5 text-[10px] uppercase tracking-widest" style={dim}>
      <span style={glowGreen}>$</span>
      <span>{label}</span>
      {required && <span style={glowRed}>*</span>}
    </div>
    <div
      className="relative rounded-md transition-all duration-150 focus-within:border-green-500/50"
      style={{
        background: "rgba(0,0,0,0.55)",
        border: "1px solid rgba(74,222,128,0.15)",
        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.8)",
      }}
    >
      <div className="flex items-start">
        <span className="pl-3 pt-2.5 font-mono text-[13px] shrink-0" style={glowGreen}>&gt;</span>
        {multiline ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            rows={4}
            className="w-full bg-transparent border-0 px-2 py-2 text-[13px] font-mono outline-none resize-none"
            style={{ color: "#e0f0ea", caretColor: "#4ade80" }}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            pattern={pattern}
            className="w-full bg-transparent border-0 px-2 py-2.5 text-[13px] font-mono outline-none"
            style={{ color: "#e0f0ea", caretColor: "#4ade80" }}
          />
        )}
      </div>
    </div>
  </div>
);

/* ============ Terminal select ============ */
const TerminalSelect = ({ label, name, value, onChange, options, required, small }) => (
  <div className="font-mono">
    <div className="flex items-center gap-1.5 mb-1.5 text-[10px] uppercase tracking-widest" style={dim}>
      <span style={glowGreen}>$</span>
      <span>{label}</span>
      {required && <span style={glowRed}>*</span>}
    </div>
    <div
      className="relative rounded-md transition-all duration-150 focus-within:border-green-500/50"
      style={{
        background: "rgba(0,0,0,0.55)",
        border: "1px solid rgba(74,222,128,0.15)",
        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.8)",
      }}
    >
      <div className="flex items-center">
        <span className={`pl-3 font-mono text-[13px] shrink-0 ${small ? "" : "py-2.5"}`} style={glowGreen}>&gt;</span>
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-transparent border-0 px-2 py-2.5 text-[13px] font-mono outline-none appearance-none cursor-pointer"
          style={{ color: "#e0f0ea" }}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ background: "#0a100e", color: "#e0f0ea" }}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg className="w-3.5 h-3.5 mr-3 shrink-0 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#4ade80" }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
);

/* ============ Main ============ */
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", service: "", countryCode: "+92", whatsapp: "", message: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const countryCodes = [
    { code: "+92", country: "🇵🇰 PK" },
    { code: "+1", country: "🇺🇸 US/CA" },
    { code: "+91", country: "🇮🇳 IN" },
    { code: "+44", country: "🇬🇧 UK" },
    { code: "+61", country: "🇦🇺 AU" },
    { code: "+49", country: "🇩🇪 DE" },
    { code: "+33", country: "🇫🇷 FR" },
    { code: "+971", country: "🇦🇪 AE" },
    { code: "+966", country: "🇸🇦 SA" },
  ];

  const services = [
    "Web Design", "Web Development", "App Development", "UI/UX Design",
    "Graphic Designing", "Digital Marketing", "SEO Services", "Brand Identity",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: "", type: "" });
    try {
      const response = await fetch("https://formspree.io/f/xblkjgao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          service: formData.service,
          whatsapp: `${formData.countryCode} ${formData.whatsapp.trim()}`,
          message: formData.message.trim(),
          submittedAt: new Date().toISOString(),
        }),
      });
      if (response.ok) {
        setStatus({ message: "200 OK · message queued for delivery", type: "success" });
        setFormData({ name: "", email: "", service: "", countryCode: "+92", whatsapp: "", message: "" });
        formRef.current?.reset();
      } else throw new Error("failed");
    } catch (err) {
      setStatus({ message: "500 ERR · transmission failed, retry", type: "error" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ message: "", type: "" }), 6000);
    }
  };

  const serviceOptions = [
    { value: "", label: "-- select service --" },
    ...services.map((s) => ({ value: s, label: s })),
  ];
  const countryOptions = countryCodes.map((c) => ({ value: c.code, label: `${c.country} ${c.code}` }));

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 lg:py-24"
      style={{ background: "radial-gradient(ellipse at 50% 20%, #0f1a15 0%, #0a100e 45%, #050807 100%)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: "linear-gradient(rgba(74,222,128,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Phosphor glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.18), transparent 70%)" }}
      />

      {/* Video backdrop */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-10">
        <source src={BGVideo} type="video/mp4" />
      </video>

      <RevealOnScroll>
        <div className="relative z-10 w-full max-w-2xl px-4 mx-auto">

          {/* Section header */}
          <div className="mb-10 font-mono text-center">
            <div className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.3em]" style={glowGreen}>
              <Led color="green" pulse />
              module_05
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold" style={{ color: "#e0f0ea" }}>
              <span style={glowGreen}>$</span> ssh contact@deslog
              <span className="inline-block w-[10px] h-[1em] ml-1 align-middle bg-green-400 animate-pulse" />
            </h2>
            <div className="h-px mt-3 bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
            <p className="mt-3 text-[12px]" style={dim}>
              // encrypted transmission · response within 24h
            </p>
          </div>

          {/* Terminal window */}
          <div
            className="relative rounded-lg overflow-hidden font-mono"
            style={{
              background: "linear-gradient(180deg, #16161a 0%, #101014 100%)",
              border: "1px solid rgba(74,222,128,0.25)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.7), inset 0 1px 0 rgba(74,222,128,0.1), 0 0 40px rgba(74,222,128,0.08)",
            }}
          >
            {/* Title bar */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 border-b"
              style={{ background: "linear-gradient(180deg, #26262c, #1a1a20)", borderColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ef4444", boxShadow: "0 0 4px rgba(239,68,68,0.9)" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#f59e0b", boxShadow: "0 0 4px rgba(245,158,11,0.7)" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 4px rgba(34,197,94,0.9)" }} />
              </div>
              <FaTerminal className="w-3 h-3 ml-2" style={glowGreen} />
              <span className="text-[10px] tracking-widest ml-1" style={dim}>
                contact_session — zsh — 80×24
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <FaLock className="w-2.5 h-2.5" style={glowGreen} />
                <span className="text-[9px] uppercase tracking-wider" style={glowGreen}>tls 1.3</span>
              </div>
            </div>

            {/* CRT form body */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative p-5 md:p-6 space-y-5"
              style={crtScreen}
            >
              <div className="absolute inset-0 pointer-events-none opacity-20" style={scanlines} />

              {/* Session greeting */}
              <div className="relative font-mono text-[11px] leading-relaxed" style={bodyText}>
                <div className="flex items-start gap-1.5">
                  <span style={glowGreen}>$</span>
                  <span>init contact_form.sh --verbose</span>
                </div>
                <div className="flex items-start gap-1.5 pl-3" style={dim}>
                  <span>→</span>
                  <span>secure channel established</span>
                </div>
              </div>

              <div className="relative h-px bg-gradient-to-r from-green-500/20 via-green-500/10 to-transparent" />

              {/* Name + Email row */}
              <div className="relative grid md:grid-cols-2 gap-4">
                <TerminalField
                  label="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
                <TerminalField
                  label="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Service select */}
              <div className="relative">
                <TerminalSelect
                  label="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  options={serviceOptions}
                  required
                />
              </div>

              {/* WhatsApp */}
              <div className="relative grid sm:grid-cols-[110px_1fr] gap-4">
                <TerminalSelect
                  label="cc"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  options={countryOptions}
                  small
                />
                <TerminalField
                  label="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="300 1234567"
                  required
                  pattern="[0-9]*"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <TerminalField
                  label="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="tell us about your project..."
                  required
                  multiline
                />
              </div>

              {/* Submit */}
              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md font-mono font-bold text-[13px] tracking-wider uppercase transition-all duration-100 active:translate-y-[2px] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    color: "#081210",
                    background: isSubmitting
                      ? "linear-gradient(180deg, #5a6a64, #3a4a44)"
                      : "linear-gradient(180deg, #4ade80 0%, #22c55e 60%, #16a34a 100%)",
                    boxShadow: isSubmitting
                      ? "inset 0 2px 4px rgba(0,0,0,0.6)"
                      : "0 4px 0 #14532d, 0 6px 14px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 0 rgba(0,0,0,0.2)",
                  }}
                >
                  {!isSubmitting && (
                    <span
                      className="absolute inset-x-1 top-1 h-1/2 rounded-t-md pointer-events-none opacity-40"
                      style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)" }}
                    />
                  )}
                  {isSubmitting ? (
                    <>
                      <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      transmitting...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-3.5 h-3.5" />
                      send transmission
                    </>
                  )}
                </button>
              </div>

              {/* Status output */}
              {status.message && (
                <div
                  className="relative rounded p-3 font-mono text-[11px] flex items-start gap-2"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    border: `1px solid ${status.type === "success" ? "rgba(74,222,128,0.3)" : "rgba(248,113,113,0.3)"}`,
                    color: status.type === "success" ? "#4ade80" : "#f87171",
                    boxShadow: status.type === "success"
                      ? "0 0 16px rgba(74,222,128,0.15), inset 0 1px 0 rgba(74,222,128,0.1)"
                      : "0 0 16px rgba(248,113,113,0.15), inset 0 1px 0 rgba(248,113,113,0.1)",
                  }}
                >
                  <span style={status.type === "success" ? glowGreen : glowRed}>
                    {status.type === "success" ? "✓" : "!"}
                  </span>
                  <span className="flex-1">{status.message}</span>
                </div>
              )}

              {/* Privacy footer */}
              <div className="relative flex items-center justify-center gap-1.5 text-[10px]" style={dim}>
                <FaLock className="w-2.5 h-2.5" />
                <span>end-to-end encrypted · your data stays private</span>
              </div>
            </form>

            {/* Status bar */}
            <div
              className="flex items-center justify-between px-4 py-1.5 text-[9px] border-t"
              style={{ background: "linear-gradient(180deg, #1a1a20, #101014)", borderColor: "rgba(0,0,0,0.6)", color: "#5a6a64" }}
            >
              <span>UTF-8 · zsh · contact@deslog</span>
              <span className="flex items-center gap-1.5">
                <Led color="green" pulse />
                <span>connected</span>
              </span>
            </div>
          </div>

          {/* Detailed form link — secondary command */}
          <div className="mt-8 text-center font-mono">
            <div className="text-[11px] mb-3" style={dim}>
              // need a detailed quote?
            </div>
            <a
              href="https://deslog-digital-solutuons-requirement-form.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-[11px] font-bold uppercase tracking-widest transition-all duration-100 active:translate-y-[1px]"
              style={{
                color: "#4ade80",
                background: "linear-gradient(180deg, #26262c, #1a1a20)",
                border: "1px solid rgba(74,222,128,0.3)",
                boxShadow: "0 3px 0 #08080a, 0 4px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <FaTerminal className="w-2.5 h-2.5" />
              <span>./open detailed_form.sh</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>

      <style jsx>{`
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        input:-webkit-autofill,
        textarea:-webkit-autofill,
        select:-webkit-autofill {
          -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.8) !important;
          -webkit-text-fill-color: #e0f0ea !important;
          background-color: rgba(0,0,0,0.55) !important;
        }
        input::placeholder,
        textarea::placeholder {
          color: rgba(107,124,118,0.6);
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};