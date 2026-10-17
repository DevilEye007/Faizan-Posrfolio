import { RevealOnScroll } from "../RevealOnScroll";
import { TypeAnimation } from "react-type-animation";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaTerminal,
  FaCircle,
  FaCode,
  FaServer,
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCodeBranch,
} from "react-icons/fa";
import profileImg from "./DP.png";

/* ============ Shared tokens ============ */
const crtScreen = {
  background:
    "radial-gradient(ellipse at 50% 40%, #0d1a14 0%, #081210 60%, #040808 100%)",
  boxShadow:
    "inset 0 3px 8px rgba(0,0,0,0.95), inset 0 -1px 0 rgba(255,255,255,0.04), 0 1px 0 rgba(255,255,255,0.05)",
};

const terminalChrome = {
  background: "linear-gradient(180deg, #2a2a30 0%, #1e1e24 100%)",
  boxShadow:
    "0 2px 0 #0a0a0c, 0 6px 16px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.12)",
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

/* ============ Terminal window wrapper ============ */
const TerminalWindow = ({ title = "bash", children, className = "" }) => (
  <div className={`relative rounded-lg overflow-hidden ${className}`} style={terminalChrome}>
    {/* Title bar */}
    <div
      className="relative flex items-center gap-2 px-4 py-2.5 border-b"
      style={{
        background: "linear-gradient(180deg, #38383e, #2a2a30)",
        borderColor: "rgba(0,0,0,0.6)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #ff8a8a, #ef4444 60%, #7f1d1d)", boxShadow: "inset 0 -1px 1px rgba(0,0,0,0.4)" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #fcd34d, #f59e0b 60%, #78350f)", boxShadow: "inset 0 -1px 1px rgba(0,0,0,0.4)" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #86efac, #22c55e 60%, #14532d)", boxShadow: "inset 0 -1px 1px rgba(0,0,0,0.4)" }} />
      </div>
      <div className="flex items-center gap-2 ml-3 flex-1 min-w-0">
        <FaTerminal className="w-3 h-3 shrink-0" style={{ color: "#8a8a90" }} />
        <span className="text-[11px] font-mono tracking-wider truncate" style={{ color: "#a0a0a8" }}>
          {title}
        </span>
      </div>
      <span className="text-[9px] font-mono uppercase tracking-widest" style={glowGreen}>
        ● live
      </span>
    </div>

    {/* CRT screen */}
    <div className="relative" style={crtScreen}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={scanlines} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)" }}
      />
      <div className="relative p-5 md:p-6">{children}</div>
    </div>
  </div>
);

/* ============ Prompt line ============ */
const Prompt = ({ children, user = "faizan", path = "~" }) => (
  <div className="font-mono text-[13px] flex items-start gap-1.5 mb-1">
    <span style={glowGreen}>{user}@deslog</span>
    <span style={dim}>:</span>
    <span style={glowCyan}>{path}</span>
    <span style={dim}>$</span>
    <span className="ml-1 flex-1" style={bodyText}>{children}</span>
  </div>
);

/* ============ CRT Monitor ============ */
const Monitor = ({ children, status = "online" }) => (
  <div className="relative">
    {/* Monitor bezel — heavy plastic/metal */}
    <div
      className="relative rounded-2xl p-4 md:p-5"
      style={{
        background: "linear-gradient(180deg, #3a3a40 0%, #2a2a30 40%, #1e1e24 100%)",
        boxShadow:
          "0 8px 0 #0a0a0c, 0 12px 24px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.6)",
      }}
    >
      {/* Brand label */}
      <div className="flex items-center justify-between mb-2 px-2">
        <span className="text-[9px] font-mono tracking-[0.4em] uppercase" style={dim}>
          DESLOG · CRT-01
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] font-mono uppercase tracking-widest" style={glowGreen}>● {status}</span>
        </div>
      </div>

      {/* Screen frame */}
      <div
        className="relative rounded-lg overflow-hidden"
        style={{
          boxShadow:
            "inset 0 4px 8px rgba(0,0,0,0.95), inset 0 -1px 0 rgba(255,255,255,0.03), 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {children}
      </div>

      {/* Control strip below screen */}
      <div className="flex items-center justify-between mt-3 px-2">
        <div className="flex gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #ff9a9a, #ef4444 45%, #7f1d1d)", boxShadow: "0 0 4px rgba(239,68,68,0.9)" }} />
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #fcd34d, #f59e0b 45%, #78350f)", boxShadow: "0 0 4px rgba(245,158,11,0.7)" }} />
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #86efac, #22c55e 45%, #14532d)", boxShadow: "0 0 4px rgba(34,197,94,0.9)" }} />
        </div>
        <span className="text-[8px] font-mono tracking-widest" style={dim}>MENU · SRC · PWR</span>
      </div>
    </div>

    {/* Monitor stand */}
    <div className="relative mx-auto mt-1 w-24 h-3"
      style={{
        background: "linear-gradient(180deg, #2a2a30, #1a1a20)",
        boxShadow: "0 2px 4px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
        clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0% 100%)",
      }}
    />
    <div className="relative mx-auto w-40 h-2 rounded-b-md"
      style={{
        background: "linear-gradient(180deg, #26262c, #15151a)",
        boxShadow: "0 3px 6px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    />
  </div>
);

/* ============ Command button ============ */
const CommandButton = ({ href, children, variant = "primary", springSnappy }) => {
  const palette = {
    primary: {
      face: "linear-gradient(180deg, #4ade80 0%, #22c55e 60%, #16a34a 100%)",
      edge: "#14532d",
      text: "#081210",
      glow: "rgba(74,222,128,0.55)",
    },
    secondary: {
      face: "linear-gradient(180deg, #67e8f9 0%, #22d3ee 60%, #0891b2 100%)",
      edge: "#164e63",
      text: "#041a1f",
      glow: "rgba(103,232,249,0.55)",
    },
    ghost: {
      face: "linear-gradient(180deg, #3a3a40 0%, #2a2a30 60%, #1e1e24 100%)",
      edge: "#0a0a0c",
      text: "#c8d4ce",
      glow: "rgba(255,255,255,0.15)",
    },
  }[variant];

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ y: 2 }}
      transition={springSnappy}
      className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-mono font-bold text-sm tracking-wide select-none"
      style={{
        color: palette.text,
        background: palette.face,
        boxShadow: `0 4px 0 ${palette.edge}, 0 6px 14px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -2px 0 rgba(0,0,0,0.25)`,
      }}
    >
      <span
        className="absolute inset-x-1 top-1 h-1/2 rounded-t-md pointer-events-none opacity-40"
        style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, transparent 100%)" }}
      />
      <span className="relative flex items-center gap-2">{children}</span>
    </motion.a>
  );
};

/* ============ Main Home ============ */
export const Home = () => {
  const shouldReduceMotion = useReducedMotion();

  const springSnappy = shouldReduceMotion
    ? { duration: 0.01 }
    : { type: "spring", stiffness: 240, damping: 24 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { staggerChildren: 0.09, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 20%, #0f1a15 0%, #0a100e 45%, #050807 100%)",
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
      <motion.div
        animate={shouldReduceMotion ? {} : { opacity: [0.1, 0.22, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.3) 0%, transparent 70%)" }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)" }}
      />

      <RevealOnScroll>
        <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16 text-center lg:text-left">

          {/* ============ PROFILE — CRT MONITOR ============ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springSnappy, delay: 0.1 }}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            className="relative shrink-0
              w-64 sm:w-72 md:w-80 lg:w-96"
          >
            <Monitor status="online">
              {/* Screen content: image with boot overlay */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={profileImg}
                  alt="Faizan's Profile"
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 will-change-transform"
                  style={{ filter: "contrast(1.05) saturate(0.95) hue-rotate(-5deg)" }}
                />

                {/* CRT color tint */}
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20"
                  style={{ background: "linear-gradient(180deg, rgba(74,222,128,0.15), transparent 60%, rgba(103,232,249,0.1))" }}
                />

                {/* Scanlines overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-30" style={scanlines} />

                {/* Glass reflection */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(125deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 25%, transparent 55%, rgba(0,0,0,0.3) 100%)",
                  }}
                />

                {/* Screen inner shadow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow:
                      "inset 0 0 50px rgba(0,0,0,0.7), inset 0 2px 4px rgba(0,0,0,0.9), inset 0 -1px 0 rgba(255,255,255,0.06)",
                  }}
                />

                {/* Corner HUD markers */}
                <div className="absolute top-2 left-2 font-mono text-[8px] tracking-widest" style={glowGreen}>REC</div>
                <div className="absolute top-2 right-2 font-mono text-[8px] tracking-widest" style={dim}>01:24:03</div>
                <div className="absolute bottom-2 left-2 font-mono text-[8px] tracking-widest" style={glowAmber}>▸ LIVE</div>

                {/* Blinking REC dot */}
                <span
                  className="absolute top-2.5 left-9 w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#ef4444", boxShadow: "0 0 6px rgba(239,68,68,0.9)" }}
                />
              </div>
            </Monitor>
          </motion.div>

          {/* ============ TEXT — TERMINAL PANEL ============ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10 w-full max-w-xl"
          >
            {/* Identity terminal */}
            <motion.div variants={itemVariants} className="mb-4">
              <TerminalWindow title="faizan@deslog: ~">
                <Prompt>whoami</Prompt>
                <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-1 leading-tight" style={glowGreen}>
                  Faizan Sultan
                </h1>
                <div className="font-mono text-[12px] sm:text-sm mt-1" style={dim}>
                  // full-stack developer · ui/ux designer
                </div>

                <div className="h-px my-3 bg-gradient-to-r from-green-500/40 via-green-500/10 to-transparent" />

                <Prompt>./role.sh</Prompt>
                <p className="font-mono text-sm sm:text-base md:text-lg font-bold mt-1">
                  <span style={glowAmber}>$ </span>
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer",
                      1500,
                      "Application Developer",
                      1500,
                      "Python Developer",
                      1500,
                      "AI Prompt Engineer",
                      1500,
                      "Portfolio Developer",
                      1500,
                      "UI/UX Designer",
                      1500,
                    ]}
                    speed={40}
                    repeat={Infinity}
                    className="text-amber-300"
                    style={{ textShadow: "0 0 8px rgba(251,191,36,0.7)" }}
                  />
                  <span className="inline-block w-[9px] h-[1em] ml-0.5 align-middle bg-amber-300 animate-pulse" />
                </p>
              </TerminalWindow>
            </motion.div>

            {/* System info panel */}
            <motion.div variants={itemVariants} className="mb-4">
              <div
                className="relative rounded-lg p-4 font-mono"
                style={{
                  background: "linear-gradient(180deg, #16161a, #101014)",
                  border: "1px solid rgba(74,222,128,0.15)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.5)",
                }}
              >
                {/* Status row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] mb-3 pb-3 border-b" style={{ borderColor: "rgba(74,222,128,0.1)" }}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 4px rgba(74,222,128,0.9)" }} />
                    <span style={glowGreen}>available for work</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCodeBranch className="w-2.5 h-2.5" style={glowCyan} />
                    <span style={dim}>git:</span>
                    <span style={glowCyan}>main</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span style={dim}>node:</span>
                    <span style={glowAmber}>v20.11</span>
                  </div>
                </div>

                {/* About blurb as code comments */}
                <div className="text-[12px] sm:text-[13px] leading-relaxed" style={bodyText}>
                  <span style={dim}>{"/* "}</span>
                  I build performant full-stack applications with clean code,
                  modern design, and optimized user flows. Uniting frontend
                  elegance with backend strength to deliver scalable, maintainable
                  systems.
                  <span style={dim}>{" */"}</span>
                </div>
              </div>
            </motion.div>

            {/* Command palette buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 mb-4">
              <CommandButton href="#projects" variant="primary" springSnappy={springSnappy}>
                <FaCode className="w-3.5 h-3.5" />
                <span>view_projects</span>
                <FaArrowRight className="w-3 h-3" />
              </CommandButton>

              <CommandButton href="#about" variant="secondary" springSnappy={springSnappy}>
                <FaServer className="w-3.5 h-3.5" />
                <span>about_me</span>
              </CommandButton>

              <CommandButton href="#contact" variant="ghost" springSnappy={springSnappy}>
                <FaEnvelope className="w-3.5 h-3.5" />
                <span>contact</span>
              </CommandButton>
            </motion.div>

            {/* Social links as CLI */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 font-mono text-[11px]">
              <span style={dim}>// find me:</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors duration-150 hover:bg-white/5"
                style={{ color: "#a0a0a8" }}
              >
                <FaGithub className="w-3 h-3" />
                <span>github</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors duration-150 hover:bg-white/5"
                style={{ color: "#a0a0a8" }}
              >
                <FaLinkedin className="w-3 h-3" />
                <span>linkedin</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </RevealOnScroll>

      <style jsx>{`
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