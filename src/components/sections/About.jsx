import { RevealOnScroll } from "../RevealOnScroll";
import { FaDownload, FaTerminal, FaCircle, FaSquare, FaLock, FaCode, FaDatabase, FaServer, FaPaintBrush, FaDesktop } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import Resume from "./Resume.pdf";
import VideoSrc from "../../assets/BG.mp4";

/* ============ Shared tokens ============ */
const terminalChrome = {
  background: "linear-gradient(180deg, #2a2a30 0%, #1e1e24 100%)",
  boxShadow:
    "0 2px 0 #0a0a0c, 0 6px 16px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.12)",
};

const crtScreen = {
  background:
    "radial-gradient(ellipse at 50% 40%, #0d1a14 0%, #081210 60%, #040808 100%)",
  boxShadow:
    "inset 0 3px 8px rgba(0,0,0,0.95), inset 0 -1px 0 rgba(255,255,255,0.04), 0 1px 0 rgba(255,255,255,0.05)",
};

const scanlines = {
  backgroundImage:
    "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)",
};

const glowGreen = { color: "#4ade80", textShadow: "0 0 6px rgba(74,222,128,0.7)" };
const glowAmber = { color: "#fbbf24", textShadow: "0 0 6px rgba(251,191,36,0.7)" };
const glowRed = { color: "#f87171", textShadow: "0 0 6px rgba(248,113,113,0.7)" };
const glowCyan = { color: "#67e8f9", textShadow: "0 0 6px rgba(103,232,249,0.7)" };
const dimText = { color: "#6b7c76" };

/* ============ Terminal window wrapper ============ */
const TerminalWindow = ({ title = "bash", children, status = "online", className = "" }) => (
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
      {/* Window dots */}
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
        ● {status}
      </span>
    </div>

    {/* CRT screen */}
    <div className="relative" style={crtScreen}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={scanlines} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />
      <div className="relative p-5 md:p-7">{children}</div>
    </div>

    {/* Status bar */}
    <div
      className="flex items-center justify-between px-4 py-1.5 text-[10px] font-mono border-t"
      style={{
        background: "linear-gradient(180deg, #22222a, #1a1a20)",
        borderColor: "rgba(0,0,0,0.6)",
        color: "#5a6a64",
      }}
    >
      <span>UTF-8 · bash · 120×40</span>
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 4px rgba(74,222,128,0.9)" }} />
        connected
      </span>
    </div>
  </div>
);

/* ============ Prompt line ============ */
const Prompt = ({ children, user = "faizan", path = "~" }) => (
  <div className="font-mono text-[13px] md:text-sm flex items-start gap-1.5 mb-1">
    <span style={glowGreen}>{user}@deslog</span>
    <span style={dimText}>:</span>
    <span style={glowCyan}>{path}</span>
    <span style={dimText}>$</span>
    <span className="ml-1 flex-1" style={{ color: "#c8d4ce" }}>{children}</span>
  </div>
);

/* ============ Skill module — package manifest ============ */
const SkillModule = ({ icon: Icon, title, pkg, skills, variants, color = "green" }) => {
  const colorMap = {
    green: { text: glowGreen, border: "rgba(74,222,128,0.3)" },
    cyan: { text: glowCyan, border: "rgba(103,232,249,0.3)" },
    amber: { text: glowAmber, border: "rgba(251,191,36,0.3)" },
    red: { text: glowRed, border: "rgba(248,113,113,0.3)" },
  }[color];

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="relative rounded-md overflow-hidden font-mono"
      style={{
        background: "linear-gradient(180deg, #16161a, #101014)",
        border: `1px solid ${colorMap.border}`,
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.6), 0 2px 6px rgba(0,0,0,0.5)",
      }}
    >
      {/* Module header */}
      <div
        className="flex items-center gap-2 px-3 py-2 border-b"
        style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}
      >
        <Icon className="w-3 h-3 shrink-0" style={colorMap.text} />
        <span className="text-[11px] tracking-wider uppercase" style={{ color: "#9aa6a0" }}>
          {title}
        </span>
        <span className="ml-auto text-[10px]" style={dimText}>
          {pkg}
        </span>
      </div>

      {/* Skill rows */}
      <div className="p-3 space-y-1">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-2 text-[12px] group/row">
            <span style={dimText}>{">"}</span>
            <span
              className="flex-1 truncate transition-colors duration-150"
              style={{ color: "#c8d4ce" }}
            >
              {skill}
            </span>
            <span className="text-[10px] opacity-0 group-hover/row:opacity-100 transition-opacity" style={colorMap.text}>
              ●
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

/* ============ Progress meter (VU-style) ============ */
const Meter = ({ label, value, color = "green" }) => {
  const cells = 20;
  const filled = Math.round((value / 100) * cells);
  const colorMap = {
    green: { on: "#4ade80", glow: "rgba(74,222,128,0.7)" },
    amber: { on: "#fbbf24", glow: "rgba(251,191,36,0.7)" },
    red: { on: "#f87171", glow: "rgba(248,113,113,0.7)" },
  }[color];

  return (
    <div className="flex items-center gap-2 font-mono text-[11px]">
      <span className="w-24 truncate" style={{ color: "#9aa6a0" }}>{label}</span>
      <div className="flex gap-[2px] flex-1">
        {Array.from({ length: cells }).map((_, i) => (
          <span
            key={i}
            className="h-2 flex-1 rounded-[1px]"
            style={{
              background: i < filled ? colorMap.on : "rgba(255,255,255,0.06)",
              boxShadow: i < filled ? `0 0 3px ${colorMap.glow}` : "inset 0 1px 1px rgba(0,0,0,0.6)",
            }}
          />
        ))}
      </div>
      <span className="w-8 text-right" style={{ color: colorMap.on }}>{value}%</span>
    </div>
  );
};

/* ============ Certificate — license key card ============ */
const CertificateCard = ({ cert, variants }) => (
  <motion.div
    variants={variants}
    whileHover={{ y: -3 }}
    transition={{ type: "spring", stiffness: 280, damping: 22 }}
    className="relative rounded-lg overflow-hidden font-mono group"
    style={{
      background: "linear-gradient(180deg, #16161a, #101014)",
      border: "1px solid rgba(103,232,249,0.2)",
      boxShadow:
        "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.5)",
    }}
  >
    {/* Top strip */}
    <div
      className="flex items-center justify-between px-3 py-1.5 border-b"
      style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(103,232,249,0.04)" }}
    >
      <span className="text-[9px] tracking-[0.3em] uppercase" style={glowCyan}>
        CERT
      </span>
      <span className="text-[9px]" style={dimText}>{cert.date}</span>
    </div>

    <div className="p-4">
      <h3 className="text-[13px] font-bold mb-2 leading-snug" style={{ color: "#e0f0ea" }}>
        {cert.title}
      </h3>

      {/* Description in nested code block */}
      <div
        className="rounded p-2.5 mb-3 text-[11px] leading-relaxed"
        style={{
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.04)",
          color: "#9aa6a0",
        }}
      >
        <span style={glowGreen}>$</span> {cert.description}
      </div>

      <div className="flex items-center justify-between text-[10px] mb-3">
        <span style={dimText}>issuer:</span>
        <span style={{ color: "#a8d4c0" }}>{cert.issuer}</span>
      </div>

      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest transition-all duration-150 active:translate-y-[1px]"
          style={{
            color: "#081210",
            background: "linear-gradient(180deg, #4ade80, #22c55e)",
            boxShadow:
              "0 2px 0 #14532d, inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.2)",
          }}
        >
          <FaLock className="w-2.5 h-2.5" />
          verify
        </a>
      )}
    </div>
  </motion.div>
);

/* ============ Main About ============ */

export const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const springSnappy = shouldReduceMotion
    ? { duration: 0.01 }
    : { type: "spring", stiffness: 280, damping: 24 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { staggerChildren: 0.07, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  const modules = [
    { icon: FaCode, title: "frontend", pkg: "v18.2", color: "green", skills: ["ReactJS", "Kotlin", "Flutter"] },
    { icon: FaServer, title: "backend", pkg: "v20.11", color: "cyan", skills: ["Node.js", "Python", "MongoDB"] },
    { icon: FaPaintBrush, title: "graphics", pkg: "v6.0", color: "amber", skills: ["Illustrator", "Photoshop", "Figma", "CorelDRAW"] },
    { icon: FaDesktop, title: "desktop", pkg: "v3.1", color: "red", skills: ["Python PyQt5", "C# .NET"] },
  ];

  const certificates = [
    { title: "Generative AI: Prompt Engineering Basics", description: "IBM authorized · prompt engineering", link: "https://coursera.org/verify/2ZUQRFNVP0TF", date: "2025-09-12", issuer: "IBM" },
    { title: "Introduction to Front-End Development", description: "Meta authorized · HTML, CSS, JS", link: "https://coursera.org/verify/YBRG7PHYHRDZ", date: "2025-09-11", issuer: "Meta" },
    { title: "Learn Firebase", description: "Scrimba · auth, realtime DB, hosting", link: "https://coursera.org/verify/91T4444LH0VD", date: "2025-09-14", issuer: "Scrimba" },
  ];

  return (
    <>
      {/* ============ ABOUT ============ */}
      <section
        id="about"
        className="relative mt-10 py-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, #0f1a15 0%, #0a100e 50%, #050807 100%)",
        }}
      >
        {/* grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(74,222,128,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(74,222,128,0.25), transparent 70%)" }}
        />

        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-10">
          <source src={VideoSrc} type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <RevealOnScroll>
            {/* Section header — like a man page */}
            <div className="mb-10 font-mono">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em]" style={glowGreen}>
                <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.9)" }} />
                section_01
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold" style={{ color: "#e0f0ea" }}>
                <span style={glowGreen}>$</span> cat about_me.md
                <span className="inline-block w-[10px] h-[1em] ml-1 align-middle bg-green-400 animate-pulse" />
              </h2>
              <div className="h-px mt-3 bg-gradient-to-r from-green-500/40 via-green-500/10 to-transparent" />
            </div>

            {/* Main terminal */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ type: "spring", stiffness: 90, damping: 20 }}
            >
              <TerminalWindow title="faizan@deslog: ~/about" status="connected">
                <Prompt>./intro.sh</Prompt>
                <p className="font-mono text-[13px] md:text-sm leading-relaxed mb-6 pl-4 border-l-2" style={{ color: "#c8d4ce", borderColor: "rgba(74,222,128,0.4)" }}>
                  <span style={dimText}># </span>
                  I bring ideas to life through full-stack development — clean
                  architecture, sleek interfaces, purposeful design. From
                  high-performing web apps to responsive portfolios, I deliver
                  digital products that look great and feel effortless.
                </p>

                <Prompt>ls -la ./skills/</Prompt>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4"
                >
                  {modules.map((m) => (
                    <SkillModule key={m.title} {...m} variants={itemVariants} />
                  ))}
                </motion.div>

                <div className="mt-5">
                  <Prompt>nproc --proficiency</Prompt>
                  <div className="mt-2 space-y-1.5 pl-4">
                    <Meter label="Frontend" value={92} color="green" />
                    <Meter label="Backend" value={85} color="green" />
                    <Meter label="UI/UX" value={88} color="amber" />
                    <Meter label="DevOps" value={72} color="amber" />
                  </div>
                </div>
              </TerminalWindow>
            </motion.div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============ EDUCATION & EXPERIENCE ============ */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #0f1a15 0%, #0a100e 60%, #050807 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <RevealOnScroll>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {/* Education terminal */}
              <motion.div variants={itemVariants}>
                <TerminalWindow title="edu.log" status="readonly">
                  <Prompt path="~/education">tail -f history.log</Prompt>
                  <div className="mt-3 space-y-3 font-mono text-[12px] pl-4" style={{ color: "#c8d4ce" }}>
                    <div className="relative pl-4" style={{ borderLeft: "2px solid rgba(103,232,249,0.4)" }}>
                      <div className="text-[10px] mb-0.5" style={dimText}>2021–2025</div>
                      <div style={{ color: "#e0f0ea" }}>
                        <span style={glowCyan}>BS</span> Information Technology
                      </div>
                      <div className="text-[11px]" style={dimText}>University of Gujrat</div>
                    </div>
                    <div className="relative pl-4" style={{ borderLeft: "2px solid rgba(103,232,249,0.4)" }}>
                      <div className="text-[10px] mb-0.5" style={dimText}>FYP · 2025</div>
                      <div style={{ color: "#e0f0ea" }}>
                        <span style={glowCyan}>mobile</span> cross-platform app
                      </div>
                      <div className="text-[11px]" style={dimText}>Flutter + Firebase</div>
                    </div>
                    <div className="relative pl-4" style={{ borderLeft: "2px solid rgba(103,232,249,0.4)" }}>
                      <div className="text-[10px] mb-0.5" style={dimText}>role</div>
                      <div style={{ color: "#e0f0ea" }}>
                        <span style={glowCyan}>TA</span> ReactJS · Tailwind CSS
                      </div>
                    </div>
                  </div>
                </TerminalWindow>
              </motion.div>

              {/* Experience terminal */}
              <motion.div variants={itemVariants}>
                <TerminalWindow title="work.log" status="active">
                  <Prompt path="~/experience">systemctl status frontend</Prompt>
                  <div className="mt-3 font-mono text-[12px] pl-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 6px rgba(74,222,128,0.9)" }} />
                      <span style={glowGreen}>active (running)</span>
                      <span className="text-[10px]" style={dimText}>since 2023</span>
                    </div>
                    <div style={{ color: "#e0f0ea" }}>
                      <span style={glowAmber}>▸</span> Frontend Developer
                    </div>
                    <div className="text-[11px] leading-relaxed pl-3" style={{ color: "#9aa6a0" }}>
                      Developing responsive UI with <span style={{ color: "#c8d4ce" }}>ReactJS</span> and{" "}
                      <span style={{ color: "#c8d4ce" }}>Tailwind CSS</span>. Optimized UX,
                      animations, scalable frontend architecture.
                    </div>

                    <div className="pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                      <div className="text-[10px] mb-1" style={dimText}>// metrics</div>
                      <div className="space-y-1">
                        <Meter label="uptime" value={100} color="green" />
                        <Meter label="code quality" value={94} color="green" />
                        <Meter label="perf" value={89} color="amber" />
                      </div>
                    </div>
                  </div>
                </TerminalWindow>
              </motion.div>
            </motion.div>

            {/* Download button — chunky keycap */}
            <div className="mt-10 text-center">
              <motion.a
                href={Resume}
                download
                whileHover={{ y: -2 }}
                whileTap={{ y: 2 }}
                transition={springSnappy}
                className="relative inline-flex items-center gap-3 px-7 py-3 rounded-md font-mono font-bold text-sm tracking-wider select-none group/btn"
                style={{
                  color: "#081210",
                  background: "linear-gradient(180deg, #4ade80 0%, #22c55e 60%, #16a34a 100%)",
                  boxShadow:
                    "0 5px 0 #14532d, 0 7px 16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -2px 0 rgba(0,0,0,0.2)",
                }}
              >
                <span
                  className="absolute inset-x-1 top-1 h-1/2 rounded-t-md pointer-events-none opacity-50"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, transparent 100%)" }}
                />
                <FaDownload className="relative text-base group-hover/btn:animate-bounce" />
                <span className="relative">./download --resume</span>
              </motion.a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ============ CERTIFICATES ============ */}
      <section
        id="certificates"
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #0f1a15 0%, #0a100e 60%, #050807 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(103,232,249,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4">
          <RevealOnScroll>
            <div className="mb-10 font-mono">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em]" style={glowCyan}>
                <span className="w-2 h-2 rounded-full bg-cyan-400" style={{ boxShadow: "0 0 8px rgba(103,232,249,0.9)" }} />
                section_02
              </div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold" style={{ color: "#e0f0ea" }}>
                <span style={glowCyan}>$</span> ls ./certificates/
              </h2>
              <div className="h-px mt-3 bg-gradient-to-r from-cyan-500/40 via-cyan-500/10 to-transparent" />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {certificates.map((cert, i) => (
                <CertificateCard key={i} cert={cert} variants={itemVariants} />
              ))}
            </motion.div>
          </RevealOnScroll>
        </div>
      </section>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </>
  );
};