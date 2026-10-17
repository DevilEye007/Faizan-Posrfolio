import { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaTerminal, FaCodeBranch, FaLock, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

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

/* ============ Panel wrapper ============ */
const Panel = ({ title, pid, children, color = "green", status = "active" }) => {
  const colorMap = {
    green: glowGreen,
    cyan: glowCyan,
    amber: glowAmber,
    red: glowRed,
  }[color];

  return (
    <div
      className="relative rounded-lg overflow-hidden font-mono"
      style={{
        background: "linear-gradient(180deg, #16161a 0%, #101014 100%)",
        border: `1px solid ${
          color === "green" ? "rgba(74,222,128,0.2)" :
          color === "cyan" ? "rgba(103,232,249,0.2)" :
          color === "amber" ? "rgba(251,191,36,0.2)" :
          "rgba(248,113,113,0.2)"
        }`,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.5)",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-3 py-2 border-b"
        style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(0,0,0,0.6)" }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: "#ef4444", boxShadow: "0 0 3px rgba(239,68,68,0.9)" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b", boxShadow: "0 0 3px rgba(245,158,11,0.7)" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 3px rgba(34,197,94,0.9)" }} />
        <span className="ml-2 text-[9px] uppercase tracking-widest" style={dim}>
          {title}
        </span>
        {pid && <span className="text-[9px] ml-1" style={dim}>· pid {pid}</span>}
        <div className="ml-auto flex items-center gap-1.5">
          <Led color={color} pulse={status === "active"} />
          <span className="text-[9px] uppercase tracking-wider" style={colorMap}>
            {status}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="relative p-4" style={crtScreen}>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={scanlines} />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

/* ============ Main Footer ============ */
export const Footer = () => {
  const [clock, setClock] = useState("");
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(
        [d.getHours(), d.getMinutes(), d.getSeconds()]
          .map((n) => String(n).padStart(2, "0"))
          .join(":")
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => setUptime(Math.floor((Date.now() - start) / 1000)), 1000);
    return () => clearInterval(id);
  }, []);

  const fmtUptime = (s) =>
    [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60]
      .map((n) => String(n).padStart(2, "0"))
      .join(":");

  const navItems = ["home", "about", "projects", "reviews", "contact"];

  return (
    <footer
      className="relative pt-16 pb-8 px-4 sm:px-6 overflow-hidden font-mono"
      style={{ background: "radial-gradient(ellipse at 50% 100%, #0f1a15 0%, #0a100e 45%, #050807 100%)" }}
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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.15), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* ===== Top status strip ===== */}
        <div
          className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 mb-6 rounded text-[10px] uppercase tracking-widest"
          style={{
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(74,222,128,0.15)",
            boxShadow: "inset 0 1px 0 rgba(74,222,128,0.05)",
          }}
        >
          <div className="flex items-center gap-2">
            <FaTerminal className="w-2.5 h-2.5" style={glowGreen} />
            <span style={glowGreen}>deslog@system</span>
            <span style={dim}>:</span>
            <span style={glowCyan}>~/footer</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Led color="green" pulse />
              <span style={glowGreen}>all services running</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span style={dim}>uptime:</span>
              <span style={glowAmber}>{fmtUptime(uptime)}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span style={dim}>time:</span>
              <span style={glowCyan}>{clock}</span>
            </span>
          </div>
        </div>

        {/* ===== Grid panels ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

          {/* Brand / whoami */}
          <Panel title="whoami.sh" pid="1001" color="green" status="active">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b" style={{ borderColor: "rgba(74,222,128,0.1)" }}>
              <span style={glowGreen}>$</span>
              <span className="text-[10px]" style={dim}>whoami --full</span>
            </div>
            <div className="font-mono">
              <div className="text-base sm:text-lg font-bold" style={glowGreen}>
                Faizan Sultan
              </div>
              <div className="text-[10px] mt-0.5" style={dim}>
                // full-stack developer
              </div>
              <div className="text-[10px]" style={dim}>
                // ui/ux designer
              </div>
            </div>
            <div className="mt-3 pt-3 border-t" style={{ borderColor: "rgba(74,222,128,0.1)" }}>
              <div className="flex items-center gap-1.5 text-[10px] mb-1" style={dim}>
                <FaCodeBranch className="w-2.5 h-2.5" />
                <span>git:</span>
                <span style={glowCyan}>main</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px]" style={dim}>
                <FaLock className="w-2.5 h-2.5" />
                <span>status:</span>
                <span style={glowGreen}>available</span>
              </div>
            </div>
            <p className="text-[11px] mt-3 leading-relaxed" style={bodyText}>
              <span style={dim}>{"/* "}</span>
              Turning ideas into elegant, efficient, and scalable digital experiences.
              <span style={dim}>{" */"}</span>
            </p>
          </Panel>

          {/* Navigation / routes */}
          <Panel title="routes.conf" pid="1002" color="cyan" status="active">
            <div className="flex items-center gap-1.5 mb-2 pb-2 border-b text-[10px]" style={{ borderColor: "rgba(103,232,249,0.1)" }}>
              <span style={glowCyan}>$</span>
              <span style={dim}>cat routes.conf</span>
            </div>
            <ul className="space-y-1.5 text-[12px]">
              {navItems.map((link, i) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="group/link flex items-center gap-2 px-1.5 py-1 rounded transition-colors duration-150 hover:bg-white/5"
                  >
                    <span className="text-[9px]" style={dim}>{String(i + 1).padStart(2, "0")}</span>
                    <span style={glowCyan}>&gt;</span>
                    <span style={{ color: "#c8d4ce" }}>./{link}</span>
                    <span className="ml-auto text-[9px] opacity-0 group-hover/link:opacity-100 transition-opacity" style={glowGreen}>
                      ↵
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Panel>

          {/* Social / endpoints */}
          <Panel title="endpoints.ssh" pid="1003" color="amber" status="active">
            <div className="flex items-center gap-1.5 mb-2 pb-2 border-b text-[10px]" style={{ borderColor: "rgba(251,191,36,0.1)" }}>
              <span style={glowAmber}>$</span>
              <span style={dim}>ssh -L endpoints</span>
            </div>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/faizan-sultan-302b1b24b"
                target="_blank"
                rel="noopener noreferrer"
                className="group/end flex items-center gap-2.5 px-2 py-2 rounded transition-all duration-100 active:translate-y-[1px]"
                style={{
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid rgba(103,232,249,0.2)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <FaLinkedinIn className="w-3.5 h-3.5 shrink-0" style={glowCyan} />
                <span className="text-[11px] tracking-wider" style={{ color: "#c8d4ce" }}>linkedin</span>
                <span className="ml-auto text-[9px]" style={dim}>:443</span>
                <Led color="cyan" />
              </a>
              <a
                href="https://github.com/DevilEye007"
                target="_blank"
                rel="noopener noreferrer"
                className="group/end flex items-center gap-2.5 px-2 py-2 rounded transition-all duration-100 active:translate-y-[1px]"
                style={{
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid rgba(251,191,36,0.2)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
              >
                <FaGithub className="w-3.5 h-3.5 shrink-0" style={glowAmber} />
                <span className="text-[11px] tracking-wider" style={{ color: "#c8d4ce" }}>github</span>
                <span className="ml-auto text-[9px]" style={dim}>:22</span>
                <Led color="amber" />
              </a>
            </div>
            <div className="mt-3 pt-3 border-t text-[10px]" style={{ borderColor: "rgba(255,255,255,0.04)", color: "#6b7c76" }}>
              <div className="flex items-center justify-between">
                <span>latency</span>
                <span style={glowGreen}>12ms</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span>encryption</span>
                <span style={glowGreen}>AES-256</span>
              </div>
            </div>
          </Panel>

          {/* Location / map */}
          <Panel title="geo.locate" pid="1004" color="red" status="active">
            <div className="flex items-center gap-1.5 mb-2 pb-2 border-b text-[10px]" style={{ borderColor: "rgba(248,113,113,0.1)" }}>
              <span style={glowRed}>$</span>
              <span style={dim}>curl geo/location</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] mb-2" style={dim}>
              <FaMapMarkerAlt className="w-2.5 h-2.5" style={glowRed} />
              <span>Pasrur, Punjab, PK</span>
            </div>
            <div
              className="relative w-full h-32 rounded overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #0a1410, #050a08)",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.95), inset 0 -1px 0 rgba(248,113,113,0.1)",
                border: "1px solid rgba(248,113,113,0.15)",
              }}
            >
              <iframe
                title="Faizan's Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.96249353462!2d74.6682389!3d32.2643398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9266ddf0af41%3A0x2a31c0937f9f31e9!2sPasrur%2C%20Punjab!5e0!3m2!1sen!2s!4v1658841241812!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative"
                style={{
                  filter: "grayscale(0.9) contrast(1.1) brightness(0.85) hue-rotate(60deg)",
                }}
              />
              {/* CRT overlay on map */}
              <div className="absolute inset-0 pointer-events-none opacity-30" style={scanlines} />
              <div className="absolute top-1.5 left-1.5 text-[8px] tracking-widest" style={glowRed}>
                ● SAT-LINK
              </div>
              <div className="absolute bottom-1.5 right-1.5 text-[8px] tracking-widest" style={glowGreen}>
                32.264°N 74.668°E
              </div>
            </div>
          </Panel>
        </div>

        {/* ===== Bottom shutdown log ===== */}
        <div
          className="relative rounded-lg overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #16161a 0%, #101014 100%)",
            border: "1px solid rgba(74,222,128,0.15)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <div className="relative p-4" style={crtScreen}>
            <div className="absolute inset-0 pointer-events-none opacity-20" style={scanlines} />

            <div className="relative font-mono text-[11px] space-y-1">
              <div className="flex items-center gap-1.5" style={bodyText}>
                <span style={glowGreen}>$</span>
                <span>sudo shutdown --now</span>
              </div>
              <div className="flex items-center gap-1.5 pl-3" style={dim}>
                <span>→</span>
                <span>saving session state...</span>
                <span style={glowGreen}>[ok]</span>
              </div>
              <div className="flex items-center gap-1.5 pl-3" style={dim}>
                <span>→</span>
                <span>terminating processes...</span>
                <span style={glowGreen}>[ok]</span>
              </div>
              <div className="flex items-center gap-1.5 pl-3" style={dim}>
                <span>→</span>
                <span>unmounting /dev/portfolio...</span>
                <span style={glowGreen}>[ok]</span>
              </div>

              <div className="h-px bg-gradient-to-r from-green-500/30 via-green-500/10 to-transparent my-2" />

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px]">
                <span style={dim}>
                  © {new Date().getFullYear()}
                </span>
                <span style={glowGreen}>Faizan Sultan</span>
                <span style={dim}>· all rights reserved</span>

                <span className="flex items-center gap-1.5">
                  <FaGlobe className="w-2.5 h-2.5" style={glowCyan} />
                  <span style={dim}>deslog.dev</span>
                </span>

                <span className="flex items-center gap-1.5">
                  <FaCodeBranch className="w-2.5 h-2.5" style={glowCyan} />
                  <span style={dim}>build:</span>
                  <span style={glowCyan}>v2026.01</span>
                </span>

                <span className="ml-auto flex items-center gap-1.5">
                  <Led color="amber" pulse />
                  <span style={glowAmber}>session closed</span>
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] mt-1" style={dim}>
                <span style={glowGreen}>$</span>
                <span>_</span>
                <span className="inline-block w-[6px] h-3 align-middle bg-green-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        iframe {
          border: none;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </footer>
  );
};