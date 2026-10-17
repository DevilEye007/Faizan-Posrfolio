import { useEffect, useState } from "react";
import { FaTerminal, FaTimes, FaCodeBranch, FaWifi, FaLock } from "react-icons/fa";

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

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [clock, setClock] = useState("");
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const tick = () => {
      const d = new Date();
      setClock([d.getHours(), d.getMinutes(), d.getSeconds()].map((n) => String(n).padStart(2, "0")).join(":"));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      setUptime(0);
      return;
    }
    const start = Date.now();
    const id = setInterval(() => setUptime(Math.floor((Date.now() - start) / 1000)), 1000);
    return () => clearInterval(id);
  }, [menuOpen]);

  const fmtUptime = (s) => [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60].map((n) => String(n).padStart(2, "0")).join(":");

  const menuItems = ["home", "about", "skills", "projects", "reviews", "contact"];

  return (
    <div
      className={`fixed inset-0 z-50 font-mono transition-all duration-500 ${
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
      style={{
        background: "radial-gradient(ellipse at 50% 20%, #0f1a15 0%, #0a100e 45%, #050807 100%)",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "linear-gradient(rgba(74,222,128,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Phosphor glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.2), transparent 70%)" }}
      />

      {/* Full-screen terminal window */}
      <div className="relative h-full w-full flex items-center justify-center px-4 py-6">
        <div
          className={`relative w-full max-w-sm rounded-lg overflow-hidden transition-all duration-500 ${
            menuOpen ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
          }`}
          style={{
            background: "linear-gradient(180deg, #16161a 0%, #101014 100%)",
            border: "1px solid rgba(74,222,128,0.3)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(74,222,128,0.1), 0 0 40px rgba(74,222,128,0.08)",
          }}
        >
          {/* ===== Title bar ===== */}
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
            <span className="text-[9px] tracking-widest" style={dim}>
              menu_session — zsh
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="ml-auto w-6 h-6 rounded flex items-center justify-center transition-all duration-150 active:translate-y-[1px]"
              style={{
                background: "linear-gradient(180deg, #3a3a40, #24242a)",
                border: "1px solid rgba(248,113,113,0.25)",
                boxShadow: "0 2px 0 #08080a, inset 0 1px 0 rgba(255,255,255,0.1)",
                color: "#f87171",
              }}
            >
              <FaTimes className="w-2.5 h-2.5" />
            </button>
          </div>

          {/* ===== CRT body ===== */}
          <div className="relative" style={crtScreen}>
            <div className="absolute inset-0 pointer-events-none opacity-25" style={scanlines} />

            <div className="relative p-4">

              {/* Boot header */}
              <div className="text-[11px] leading-relaxed mb-3 space-y-0.5">
                <div className="flex items-start gap-1.5" style={bodyText}>
                  <span style={glowGreen}>$</span>
                  <span>./menu.sh --interactive</span>
                </div>
                <div className="flex items-center gap-1.5 pl-3" style={dim}>
                  <span>→</span>
                  <span>loading routes...</span>
                  <span style={glowGreen}>[ok]</span>
                </div>
              </div>

              <div className="h-px mb-3 bg-gradient-to-r from-green-500/30 via-green-500/10 to-transparent" />

              {/* Column header — ps style */}
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest mb-2 px-1" style={dim}>
                <span className="w-6">pid</span>
                <span className="flex-1">cmd</span>
                <span>status</span>
              </div>

              {/* Route rows — staggered */}
              <div className="space-y-1.5">
                {menuItems.map((item, i) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                    className={`group/route relative flex items-center gap-2 px-2.5 py-2.5 rounded-md transition-all duration-150 active:translate-y-[1px] ${
                      menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      background: "linear-gradient(180deg, #1c1c22 0%, #14141a 100%)",
                      border: "1px solid rgba(74,222,128,0.12)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04), 0 2px 0 #08080a",
                      transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
                    }}
                  >
                    {/* PID */}
                    <span className="text-[9px] w-6" style={dim}>
                      {String(1000 + i * 11).padStart(4, "0")}
                    </span>

                    {/* Prompt + command */}
                    <span className="text-[11px]" style={glowGreen}>&gt;</span>
                    <span className="flex-1 text-[13px] tracking-wider uppercase font-bold" style={{ color: "#d1fae5" }}>
                      ./{item}
                    </span>

                    {/* Status LED */}
                    <div className="flex items-center gap-1">
                      <Led color="green" pulse />
                      <span className="text-[8px] uppercase tracking-widest" style={glowGreen}>run</span>
                    </div>

                    {/* Hover arrow */}
                    <span className="text-[10px] opacity-0 group-hover/route:opacity-100 transition-opacity" style={glowGreen}>
                      ↵
                    </span>
                  </a>
                ))}
              </div>

              {/* Footer / system info */}
              <div className="mt-4 pt-3 border-t text-[10px] space-y-1.5" style={{ borderColor: "rgba(74,222,128,0.1)" }}>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <FaCodeBranch className="w-2.5 h-2.5" style={glowCyan} />
                    <span style={dim}>git:</span>
                    <span style={glowCyan}>main</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaWifi className="w-2.5 h-2.5" style={glowGreen} />
                    <span style={dim}>net:</span>
                    <span style={glowGreen}>online</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <FaLock className="w-2.5 h-2.5" style={glowGreen} />
                    <span style={dim}>tls 1.3</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span style={dim}>uptime:</span>
                    <span style={glowAmber}>{fmtUptime(uptime)}</span>
                  </span>
                </div>
              </div>

              {/* Prompt line at bottom */}
              <div className="flex items-center gap-1.5 mt-3 text-[11px]">
                <span style={glowGreen}>$</span>
                <span className="inline-block w-[6px] h-3 align-middle bg-green-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* ===== Status bar ===== */}
          <div
            className="flex items-center justify-between px-4 py-1.5 text-[9px] border-t"
            style={{
              background: "linear-gradient(180deg, #1a1a20, #101014)",
              borderColor: "rgba(0,0,0,0.6)",
              color: "#5a6a64",
            }}
          >
            <span>UTF-8 · zsh · 80×24</span>
            <div className="flex items-center gap-2">
              <span style={glowAmber}>{clock}</span>
              <Led color="green" pulse />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};