import { useEffect, useState } from "react";
import { FaTerminal, FaCircle, FaCodeBranch, FaWifi, FaCog } from "react-icons/fa";

/* ============ Shared tokens ============ */
const terminalChrome = {
  background: "linear-gradient(180deg, #2a2a30 0%, #1e1e24 100%)",
  boxShadow:
    "0 2px 0 #0a0a0c, 0 6px 16px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.1)",
};

const scanlines = {
  backgroundImage:
    "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)",
};

const glowGreen = { color: "#4ade80", textShadow: "0 0 6px rgba(74,222,128,0.7)" };
const glowAmber = { color: "#fbbf24", textShadow: "0 0 6px rgba(251,191,36,0.7)" };
const glowRed = { color: "#f87171", textShadow: "0 0 6px rgba(248,113,113,0.7)" };
const glowCyan = { color: "#67e8f9", textShadow: "0 0 6px rgba(103,232,249,0.7)" };
const dim = { color: "#6b7c76" };
const bodyText = { color: "#c8d4ce" };

/* ============ LED ============ */
const Led = ({ color = "green", pulse = false, size = "sm" }) => {
  const palette = {
    green: { hi: "#86efac", mid: "#22c55e", lo: "#14532d", glow: "rgba(34,197,94,0.9)" },
    amber: { hi: "#fcd34d", mid: "#f59e0b", lo: "#78350f", glow: "rgba(245,158,11,0.9)" },
    red: { hi: "#ff9a9a", mid: "#ef4444", lo: "#7f1d1d", glow: "rgba(239,68,68,0.9)" },
    cyan: { hi: "#a5f3fc", mid: "#22d3ee", lo: "#155e75", glow: "rgba(34,211,238,0.9)" },
  }[color];
  const dim = size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2";
  return (
    <span className={`relative flex items-center justify-center ${size === "sm" ? "w-2 h-2" : "w-2.5 h-2.5"}`}>
      <span className="absolute inset-0 rounded-full bg-black/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)]" />
      <span
        className={`relative ${dim} rounded-full ${pulse ? "animate-pulse" : ""}`}
        style={{
          background: `radial-gradient(circle at 30% 30%, ${palette.hi}, ${palette.mid} 50%, ${palette.lo})`,
          boxShadow: `0 0 5px ${palette.glow}, inset 0 -1px 1px rgba(0,0,0,0.5)`,
        }}
      />
    </span>
  );
};

/* ============ Main Navbar ============ */
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [pressed, setPressed] = useState(null);
  const [clock, setClock] = useState("");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Live clock — HH:MM:SS */
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

  const menuItems = ["home", "about", "skills", "projects", "reviews", "contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "py-1" : "py-2"
      }`}
      style={terminalChrome}
    >
      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={scanlines} />

      {/* Top phosphor line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
      {/* Bottom recess */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">

        {/* ===== ROW 1: Status bar (hidden on mobile below 640px) ===== */}
        <div
          className={`hidden sm:flex items-center justify-between text-[10px] font-mono tracking-wider border-b transition-all duration-300 overflow-hidden ${
            scrolled ? "h-0 opacity-0 border-transparent" : "h-7 opacity-100 border-green-500/10"
          }`}
        >
          {/* Left: prompt */}
          <div className="flex items-center gap-2">
            <FaTerminal className="w-2.5 h-2.5" style={glowGreen} />
            <span style={glowGreen}>faizan@deslog</span>
            <span style={dim}>:</span>
            <span style={glowCyan}>~</span>
            <span style={dim}>$</span>
            <span style={bodyText} className="ml-1">./navigate.sh --interactive</span>
          </div>

          {/* Right: telemetry */}
          <div className="flex items-center gap-4">
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
            <span className="flex items-center gap-1.5">
              <Led color="green" pulse />
              <span style={dim}>srv:</span>
              <span style={glowGreen}>ok</span>
            </span>
            <span style={glowAmber}>{clock}</span>
          </div>
        </div>

        {/* ===== ROW 2: Main toolbar ===== */}
        <div className="flex justify-between items-center h-14 sm:h-16 gap-2">

          {/* ---- Logo — terminal tab ---- */}
          <a
            href="#home"
            className="relative group flex items-center gap-2.5 px-3 py-1.5 rounded-md transition-all duration-100 active:translate-y-[1px]"
            style={{
              background: "linear-gradient(180deg, #16161a 0%, #0e0e12 100%)",
              border: "1px solid rgba(74,222,128,0.2)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.6)",
            }}
          >
            {/* Window dots */}
            <div className="flex flex-col gap-[2px]">
              <div className="flex gap-[2px]">
                <span className="w-1 h-1 rounded-full" style={{ background: "#ef4444", boxShadow: "0 0 3px rgba(239,68,68,0.9)" }} />
                <span className="w-1 h-1 rounded-full" style={{ background: "#f59e0b", boxShadow: "0 0 3px rgba(245,158,11,0.7)" }} />
              </div>
              <div className="flex gap-[2px]">
                <span className="w-1 h-1 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 3px rgba(34,197,94,0.9)" }} />
                <span className="w-1 h-1 rounded-full" style={{ background: "#3a3a40" }} />
              </div>
            </div>

            {/* Wordmark */}
            <div className="relative flex flex-col leading-none">
              <span className="font-mono text-sm sm:text-base font-bold tracking-[0.2em]" style={glowGreen}>
                DESLOG
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] mt-0.5" style={dim}>
                /dev/portfolio
              </span>
            </div>

            {/* Blinking cursor */}
            <span className="inline-block w-[6px] h-3 align-middle bg-green-400 animate-pulse" />
          </a>

          {/* ---- Hamburger (terminal toggle) ---- */}
          <button
            aria-label="Toggle menu"
            className="md:hidden relative flex flex-col justify-center items-center gap-[5px] w-11 h-11 rounded-md transition-all duration-100 active:translate-y-[1px]"
            style={{
              background: "linear-gradient(180deg, #3a3a40 0%, #24242a 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow:
                "0 3px 0 #0a0a0c, 0 4px 8px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-[2px] w-5 rounded-sm transition-all duration-200 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
              style={{ background: "#4ade80", boxShadow: "0 0 4px rgba(74,222,128,0.8)" }}
            />
            <span
              className={`block h-[2px] w-5 rounded-sm transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
              style={{ background: "#4ade80", boxShadow: "0 0 4px rgba(74,222,128,0.8)" }}
            />
            <span
              className={`block h-[2px] w-5 rounded-sm transition-all duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
              style={{ background: "#4ade80", boxShadow: "0 0 4px rgba(74,222,128,0.8)" }}
            />
          </button>

          {/* ---- Desktop command palette ---- */}
          <div className="hidden md:flex items-center gap-1.5">
            {menuItems.map((section) => {
              const isActive = activeSection === section;
              const isPressed = pressed === section;

              return (
                <a
                  key={section}
                  href={`#${section}`}
                  onMouseEnter={() => setActiveSection(section)}
                  onMouseDown={() => setPressed(section)}
                  onMouseUp={() => setPressed(null)}
                  onMouseLeave={() => setPressed(null)}
                  className="relative px-3.5 py-2 rounded-md text-[11px] uppercase tracking-[0.15em] font-mono font-bold transition-all duration-75 select-none"
                  style={{
                    color: isActive ? "#d1fae5" : "#7a8a84",
                    textShadow: isActive
                      ? "0 0 6px rgba(74,222,128,0.6)"
                      : "0 1px 0 rgba(0,0,0,0.8)",
                    background:
                      isPressed || isActive
                        ? "linear-gradient(180deg, #0a1410 0%, #12211a 100%)"
                        : "linear-gradient(180deg, #26262c 0%, #1a1a20 100%)",
                    border: isActive ? "1px solid rgba(74,222,128,0.25)" : "1px solid rgba(255,255,255,0.04)",
                    boxShadow:
                      isPressed || isActive
                        ? "inset 0 2px 4px rgba(0,0,0,0.9), inset 0 -1px 0 rgba(74,222,128,0.15), 0 0 12px rgba(74,222,128,0.15)"
                        : "0 2px 0 #08080a, 0 3px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                    transform: isPressed ? "translateY(1px)" : "translateY(0)",
                  }}
                >
                  {/* Prompt prefix when active */}
                  {isActive && (
                    <span className="mr-1" style={glowGreen}>&gt;</span>
                  )}
                  {section}
                </a>
              );
            })}

            {/* Settings icon */}
            <button
              aria-label="Settings"
              className="ml-1 flex items-center justify-center w-8 h-8 rounded-md transition-all duration-100 active:translate-y-[1px]"
              style={{
                background: "linear-gradient(180deg, #26262c, #1a1a20)",
                border: "1px solid rgba(255,255,255,0.04)",
                boxShadow: "0 2px 0 #08080a, 0 3px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                color: "#7a8a84",
              }}
            >
              <FaCog className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ===== Mobile drawer — process list ===== */}
      <div
        className={`md:hidden fixed inset-0 top-[64px] transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`relative h-full overflow-y-auto transition-transform duration-300 ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
          style={terminalChrome}
        >
          {/* Scanlines */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={scanlines} />

          {/* Path header */}
          <div
            className="relative flex items-center justify-between px-5 py-3 border-b font-mono text-[11px]"
            style={{ borderColor: "rgba(74,222,128,0.15)" }}
          >
            <div className="flex items-center gap-2">
              <FaTerminal className="w-3 h-3" style={glowGreen} />
              <span style={glowGreen}>faizan@deslog</span>
              <span style={dim}>:</span>
              <span style={glowCyan}>~/menu</span>
            </div>
            <span style={glowAmber}>{clock}</span>
          </div>

          {/* Process list */}
          <div className="relative px-5 py-6">
            <div className="font-mono text-[10px] mb-3 flex items-center gap-2" style={dim}>
              <span>PID</span>
              <span className="w-6" />
              <span className="flex-1">COMMAND</span>
              <span>STATUS</span>
            </div>

            <div className="space-y-2">
              {menuItems.map((section, i) => {
                const isActive = activeSection === section;
                return (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={() => {
                      setActiveSection(section);
                      setMenuOpen(false);
                    }}
                    className="relative flex items-center gap-3 px-3 py-3 rounded-md font-mono text-sm transition-all duration-150 active:translate-y-[1px]"
                    style={{
                      background: isActive
                        ? "linear-gradient(180deg, #0a1410 0%, #12211a 100%)"
                        : "linear-gradient(180deg, #1c1c22 0%, #14141a 100%)",
                      border: isActive
                        ? "1px solid rgba(74,222,128,0.3)"
                        : "1px solid rgba(255,255,255,0.04)",
                      boxShadow: isActive
                        ? "inset 0 1px 0 rgba(74,222,128,0.15), 0 0 16px rgba(74,222,128,0.1)"
                        : "0 2px 0 #08080a, inset 0 1px 0 rgba(255,255,255,0.05)",
                      transitionDelay: menuOpen ? `${i * 35}ms` : "0ms",
                    }}
                  >
                    {/* PID */}
                    <span className="text-[10px] w-6" style={dim}>
                      {String(1000 + i * 7).padStart(4, "0")}
                    </span>

                    {/* Prompt caret */}
                    <span style={isActive ? glowGreen : dim}>
                      {isActive ? "▸" : "$"}
                    </span>

                    {/* Command */}
                    <span
                      className="flex-1 tracking-wider uppercase"
                      style={{
                        color: isActive ? "#d1fae5" : "#a0a8a4",
                        textShadow: isActive ? "0 0 6px rgba(74,222,128,0.5)" : "none",
                      }}
                    >
                      ./{section}
                    </span>

                    {/* Status */}
                    <div className="flex items-center gap-1.5">
                      <Led color={isActive ? "green" : "cyan"} pulse={isActive} />
                      <span className="text-[9px] uppercase tracking-widest" style={isActive ? glowGreen : dim}>
                        {isActive ? "run" : "idle"}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Footer */}
            <div
              className="mt-8 mx-auto px-4 py-2 rounded text-[9px] font-mono uppercase tracking-[0.35em] text-center"
              style={{
                color: "#4a5a54",
                background: "linear-gradient(180deg, #14141a, #0e0e12)",
                border: "1px solid rgba(74,222,128,0.08)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              [ process list · 6 running · uptime 00:00:00 ]
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};