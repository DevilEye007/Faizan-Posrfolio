import { useEffect, useState } from "react";
import { FaTerminal, FaCheck, FaSpinner } from "react-icons/fa";

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
const dim = { color: "#6b7c76" };
const bodyText = { color: "#c8d4ce" };

/* ============ Boot log messages ============ */
const bootLines = [
  { t: "BIOS", msg: "DESLOG Systems Inc. v2.6.1", type: "info", delay: 0 },
  { t: "BIOS", msg: "Detecting hardware...", type: "info", delay: 180 },
  { t: "BIOS", msg: "CPU: Quantum Core i9 @ 5.2GHz  [ok]", type: "ok", delay: 400 },
  { t: "BIOS", msg: "RAM: 64GB DDR5 6000MHz       [ok]", type: "ok", delay: 580 },
  { t: "BIOS", msg: "GPU: Neural Engine 4090       [ok]", type: "ok", delay: 760 },
  { t: "kern", msg: "Loading kernel modules...", type: "info", delay: 1000 },
  { t: "kern", msg: "Initializing network stack", type: "spin", delay: 1250 },
  { t: "kern", msg: "Mounting /dev/portfolio", type: "spin", delay: 1500 },
  { t: "kern", msg: "Starting display server", type: "spin", delay: 1750 },
  { t: "init", msg: "Booting Deslog environment", type: "info", delay: 2050 },
  { t: "auth", msg: "Initializing secure session", type: "spin", delay: 2300 },
  { t: "done", msg: "All systems operational", type: "done", delay: 2700 },
];

const progressStages = [
  { at: 400, label: "POST" },
  { at: 900, label: "kernel" },
  { at: 1400, label: "filesystem" },
  { at: 1900, label: "network" },
  { at: 2400, label: "display" },
  { at: 2900, label: "ready" },
];

export const LoadingScreen = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("POST");
  const [typedTitle, setTypedTitle] = useState("");
  const [done, setDone] = useState(false);

  const fullTitle = "<Deslog/>";

  /* ---- Type the title ---- */
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTypedTitle(fullTitle.substring(0, i + 1));
      i++;
      if (i >= fullTitle.length) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, []);

  /* ---- Reveal boot lines ---- */
  useEffect(() => {
    const timers = bootLines.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  /* ---- Progress bar + stage ---- */
  useEffect(() => {
    const start = Date.now();
    const duration = 3200;
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      const current = [...progressStages].reverse().find((s) => elapsed >= s.at);
      if (current) setStage(current.label);

      if (pct >= 100) {
        clearInterval(id);
        setDone(true);
        setTimeout(() => onComplete(), 900);
      }
    }, 50);
    return () => clearInterval(id);
  }, [onComplete]);

  /* ---- ASCII progress bar ---- */
  const barWidth = 28;
  const filled = Math.round((progress / 100) * barWidth);
  const bar = "█".repeat(filled) + "░".repeat(barWidth - filled);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 font-mono transition-opacity duration-700"
      style={{
        background: "radial-gradient(ellipse at 50% 30%, #0f1a15 0%, #0a100e 45%, #050807 100%)",
        opacity: done ? 0 : 1,
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,222,128,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Phosphor glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.2), transparent 70%)" }}
      />

      {/* Terminal window */}
      <div
        className="relative w-full max-w-2xl rounded-lg overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #16161a 0%, #101014 100%)",
          border: "1px solid rgba(74,222,128,0.3)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.9), inset 0 1px 0 rgba(74,222,128,0.1), 0 0 40px rgba(74,222,128,0.08)",
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
          <span className="text-[10px] tracking-widest" style={dim}>
            boot — deslog@system — tty1
          </span>
          <div className="ml-auto flex items-center gap-1.5 text-[9px]">
            <span style={{ color: "#f87171", textShadow: "0 0 4px rgba(239,68,68,0.9)" }}>●</span>
            <span style={glowGreen}>POWER</span>
          </div>
        </div>

        {/* CRT body */}
        <div className="relative" style={crtScreen}>
          <div className="absolute inset-0 pointer-events-none opacity-25" style={scanlines} />

          <div className="relative p-5 sm:p-6">

            {/* Big typing title */}
            <div className="mb-5 pb-4 border-b" style={{ borderColor: "rgba(74,222,128,0.15)" }}>
              <div className="text-[10px] uppercase tracking-[0.3em] mb-1" style={dim}>
                // deslog digital systems
              </div>
              <div className="flex items-baseline gap-1">
                <span
                  className="text-3xl sm:text-4xl md:text-5xl font-bold"
                  style={{
                    background: "linear-gradient(180deg, #86efac 0%, #4ade80 50%, #22c55e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 8px rgba(74,222,128,0.4))",
                  }}
                >
                  {typedTitle}
                </span>
                <span
                  className="inline-block w-[3px] h-[1.1em] align-middle bg-green-400 animate-pulse"
                  style={{ boxShadow: "0 0 6px rgba(74,222,128,0.9)" }}
                />
              </div>
            </div>

            {/* Boot log */}
            <div className="text-[11px] sm:text-[12px] leading-relaxed space-y-0.5 min-h-[180px] sm:min-h-[200px]">
              {bootLines.map((line, i) => {
                const isVisible = visibleLines.includes(i);
                return (
                  <div
                    key={i}
                    className="flex items-start gap-2 transition-all duration-300"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(-6px)",
                    }}
                  >
                    <span className="text-[10px] w-10 shrink-0 uppercase tracking-widest" style={dim}>
                      [{line.t}]
                    </span>

                    {line.type === "ok" && (
                      <span className="shrink-0 mt-0.5"><FaCheck className="w-2.5 h-2.5" style={glowGreen} /></span>
                    )}
                    {line.type === "spin" && (
                      <span className="shrink-0 mt-0.5">
                        <FaSpinner className="w-2.5 h-2.5 animate-spin" style={glowAmber} />
                      </span>
                    )}
                    {line.type === "done" && (
                      <span className="shrink-0 mt-0.5"><FaCheck className="w-2.5 h-2.5" style={glowGreen} /></span>
                    )}
                    {line.type === "info" && (
                      <span className="shrink-0 mt-0.5 text-[10px]" style={glowCyan}>▸</span>
                    )}

                    <span
                      className="flex-1"
                      style={
                        line.type === "ok"
                          ? bodyText
                          : line.type === "done"
                          ? glowGreen
                          : line.type === "spin"
                          ? glowAmber
                          : bodyText
                      }
                    >
                      {line.msg}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* ASCII progress bar */}
            <div className="mt-5 pt-4 border-t" style={{ borderColor: "rgba(74,222,128,0.15)" }}>
              <div className="flex items-center justify-between text-[10px] mb-1.5" style={dim}>
                <span>
                  <span style={glowGreen}>$</span> progress
                </span>
                <span>
                  <span style={glowAmber}>{stage}</span>
                  <span className="mx-1">·</span>
                  <span style={glowCyan}>{Math.round(progress).toString().padStart(3, "0")}%</span>
                </span>
              </div>

              <div className="text-[13px] tracking-tight leading-none flex items-center gap-2">
                <span style={glowGreen}>[</span>
                <span style={{ color: "#4ade80", textShadow: "0 0 6px rgba(74,222,128,0.5)" }}>
                  {bar.slice(0, filled)}
                </span>
                <span style={{ color: "rgba(255,255,255,0.12)" }}>
                  {bar.slice(filled)}
                </span>
                <span style={glowGreen}>]</span>
              </div>

              {/* Prompt line */}
              <div className="flex items-center gap-1.5 mt-3 text-[11px]">
                <span style={glowGreen}>deslog@system</span>
                <span style={dim}>:</span>
                <span style={glowCyan}>~</span>
                <span style={dim}>$</span>
                {done ? (
                  <span style={glowGreen}>login: success_</span>
                ) : (
                  <span className="inline-block w-[6px] h-3 align-middle bg-green-400 animate-pulse" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div
          className="flex items-center justify-between px-4 py-1.5 text-[9px] border-t"
          style={{
            background: "linear-gradient(180deg, #1a1a20, #101014)",
            borderColor: "rgba(0,0,0,0.6)",
            color: "#5a6a64",
          }}
        >
          <span>UTF-8 · tty1 · {new Date().getFullYear()}</span>
          <div className="flex items-center gap-3">
            <span style={glowAmber}>{stage}</span>
            <span style={glowGreen}>● {(done ? "boot ok" : "booting").toUpperCase()}</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .animate-pulse { animation: pulse 1.3s ease-in-out infinite; }
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