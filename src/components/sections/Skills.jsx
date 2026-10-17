"use client";

import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaBrain,
  FaChevronLeft, FaChevronRight, FaTerminal, FaTimes,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFlutter } from "react-icons/si";

/* ============ Shared tokens ============ */
const crtScreen = {
  background: "radial-gradient(ellipse at 50% 40%, #0d1a14 0%, #081210 60%, #040808 100%)",
  boxShadow: "inset 0 3px 8px rgba(0,0,0,0.95), inset 0 -1px 0 rgba(255,255,255,0.04), 0 1px 0 rgba(255,255,255,0.05)",
};

const scanlines = {
  backgroundImage:
    "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)",
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
        style={{
          background: `radial-gradient(circle at 30% 30%, ${p.hi}, ${p.mid} 50%, ${p.lo})`,
          boxShadow: `0 0 5px ${p.g}, inset 0 -1px 1px rgba(0,0,0,0.5)`,
        }}
      />
    </span>
  );
};

/* ============ Skill module card (carousel) ============ */
const SkillCard = ({ skill, isActive, style, onClick, shouldReduceMotion }) => (
  <motion.button
    onClick={onClick}
    initial={false}
    animate={style}
    transition={shouldReduceMotion ? { duration: 0.01 } : { type: "spring", stiffness: 180, damping: 26 }}
    whileHover={isActive && !shouldReduceMotion ? { scale: style.scale * 1.05, y: -6 } : {}}
    whileTap={isActive && !shouldReduceMotion ? { scale: 0.97 } : {}}
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: "-7rem",
      marginTop: "-10rem",
      width: "14rem",
      height: "20rem",
      willChange: "transform, opacity",
      transformStyle: "preserve-3d",
      background: "linear-gradient(180deg, #16161a 0%, #101014 100%)",
      border: isActive ? "1px solid rgba(74,222,128,0.35)" : "1px solid rgba(255,255,255,0.04)",
      boxShadow: isActive
        ? "inset 0 1px 0 rgba(74,222,128,0.15), 0 0 24px rgba(74,222,128,0.15), 0 6px 16px rgba(0,0,0,0.6)"
        : "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.5)",
    }}
    className={`relative flex flex-col rounded-lg overflow-hidden ${isActive ? "cursor-pointer" : "cursor-default"}`}
  >
    {/* Window chrome top */}
    <div
      className="flex items-center gap-1.5 px-3 py-1.5 border-b shrink-0"
      style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#ef4444", boxShadow: "0 0 3px rgba(239,68,68,0.9)" }} />
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#f59e0b", boxShadow: "0 0 3px rgba(245,158,11,0.7)" }} />
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 3px rgba(34,197,94,0.9)" }} />
      <span className="ml-auto text-[8px] font-mono tracking-widest uppercase" style={dim}>
        pkg
      </span>
    </div>

    {/* Body — icon + name + version */}
    <div className="relative flex-1 flex flex-col items-center justify-center gap-3 p-4" style={crtScreen}>
      <div className="absolute inset-0 pointer-events-none opacity-20" style={scanlines} />

      {/* Icon in recessed circle */}
      <div className="relative flex items-center justify-center">
        <div
          className="absolute w-20 h-20 rounded-full"
          style={{
            background: "linear-gradient(180deg, #0a1410, #050a08)",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.95), inset 0 -1px 0 rgba(74,222,128,0.1)",
          }}
        />
        {isActive && (
          <div className="absolute w-20 h-20 rounded-full bg-green-500/15 blur-xl" />
        )}
        <span className="relative z-10 text-4xl">{skill.icon}</span>
      </div>

      {/* Name */}
      <p
        className="relative text-sm font-mono font-bold text-center tracking-wider"
        style={isActive ? glowGreen : dim}
      >
        {skill.name}
      </p>

      {/* Version pin */}
      <div
        className="relative px-2 py-0.5 rounded text-[9px] font-mono tracking-widest uppercase"
        style={{
          color: "#9aa6a0",
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(74,222,128,0.15)",
        }}
      >
        v{skill.version}
      </div>

      {/* Active indicator */}
      {isActive && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[8px] font-mono uppercase tracking-widest" style={glowGreen}>
          <Led color="green" pulse />
          <span>loaded</span>
        </div>
      )}
    </div>
  </motion.button>
);

/* ============ Main ============ */
function SkillsSection() {
  const skills = [
    { name: "html", version: "5.0.0", icon: <FaHtml5 className="text-red-400 text-4xl" />, description: "HTML structures the web. It defines semantic content, accessibility standards, and SEO-friendly markup used by modern websites.", category: "frontend", deps: [] },
    { name: "css", version: "3.0.0", icon: <FaCss3Alt className="text-blue-400 text-4xl" />, description: "CSS controls layout, responsiveness, animations, and visual design, enabling modern responsive and mobile-first interfaces.", category: "frontend", deps: [] },
    { name: "javascript", version: "ES2023", icon: <FaJs className="text-yellow-400 text-4xl" />, description: "JavaScript powers dynamic web applications, enabling logic, interactivity, API communication, and modern frontend frameworks.", category: "frontend", deps: [] },
    { name: "react", version: "18.2.0", icon: <FaReact className="text-cyan-400 text-4xl" />, description: "React is a powerful UI library for building scalable component-based applications with fast rendering and reusable architecture.", category: "frontend", deps: ["javascript"] },
    { name: "node.js", version: "20.11.0", icon: <FaNodeJs className="text-green-500 text-4xl" />, description: "Node.js enables server-side JavaScript with fast event-driven architecture, ideal for APIs, real-time apps, and scalable backends.", category: "backend", deps: ["javascript"] },
    { name: "express.js", version: "4.18.0", icon: <SiExpress className="text-gray-300 text-4xl" />, description: "Express simplifies backend development with routing, middleware, REST APIs, authentication systems, and server logic.", category: "backend", deps: ["node.js"] },
    { name: "mongodb", version: "7.0.0", icon: <SiMongodb className="text-green-400 text-4xl" />, description: "MongoDB is a NoSQL database storing flexible JSON-like documents for scalable, modern web applications.", category: "backend", deps: [] },
    { name: "tailwindcss", version: "3.4.0", icon: <SiTailwindcss className="text-sky-400 text-4xl" />, description: "TailwindCSS is a utility-first framework that allows developers to rapidly design modern responsive interfaces.", category: "frontend", deps: ["css"] },
    { name: "flutter", version: "3.24.0", icon: <SiFlutter className="text-sky-400 text-4xl" />, description: "Flutter enables cross-platform development from a single codebase for mobile, desktop, and web applications.", category: "mobile", deps: [] },
    { name: "python", version: "3.12.0", icon: <FaPython className="text-yellow-500 text-4xl" />, description: "Python is widely used for backend systems, AI, machine learning, automation, and data science.", category: "backend", deps: [] },
    { name: "prompt-ai", version: "1.0.0", icon: <FaBrain className="text-indigo-500 text-4xl" />, description: "Prompt engineering focuses on crafting high-quality instructions for AI systems to produce consistent and accurate outputs.", category: "ai", deps: [] },
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const total = skills.length;
  const goTo = (index) => setActiveIndex(((index % total) + total) % total);
  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  const getCardStyle = (index) => {
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    const abs = Math.abs(offset);

    if (abs > 3) {
      return {
        x: offset * 280,
        scale: 0.4,
        opacity: 0,
        rotateY: offset * 25,
        zIndex: 0,
        pointerEvents: "none",
      };
    }

    return {
      x: offset * 240,
      scale: abs === 0 ? 1 : abs === 1 ? 0.82 : abs === 2 ? 0.62 : 0.42,
      opacity: abs === 0 ? 1 : abs === 1 ? 0.7 : abs === 2 ? 0.35 : 0,
      rotateY: offset * 28,
      zIndex: 10 - abs,
      pointerEvents: abs === 0 ? "auto" : "none",
    };
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion ? { duration: 0.01 } : { type: "spring", stiffness: 110, damping: 20 },
    },
  };

  const springSnappy = shouldReduceMotion
    ? { duration: 0.01 }
    : { type: "spring", stiffness: 280, damping: 24 };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 30%, #0f1a15 0%, #0a100e 45%, #050807 100%)" }}
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
      <motion.div
        animate={shouldReduceMotion ? {} : { opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.22), transparent 70%)" }}
      />

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
          {/* Section header */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12 font-mono"
          >
            <motion.div variants={item} className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em]" style={glowGreen}>
              <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.9)" }} />
              module_02
            </motion.div>
            <motion.h2 variants={item} className="mt-2 text-3xl md:text-4xl font-bold" style={{ color: "#e0f0ea" }}>
              <span style={glowGreen}>$</span> ls ./skills/
              <span className="inline-block w-[10px] h-[1em] ml-1 align-middle bg-green-400 animate-pulse" />
            </motion.h2>
            <motion.div variants={item} className="h-px mt-3 bg-gradient-to-r from-green-500/40 via-green-500/10 to-transparent" />
            <motion.p variants={item} className="mt-3 text-[12px]" style={dim}>
              // 11 modules loaded · click the active card to inspect
            </motion.p>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="relative">
            <motion.div variants={item} className="relative h-[24rem] sm:h-[26rem] md:h-[28rem] flex items-center justify-center" style={{ perspective: "1400px" }}>
              <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                {skills.map((skill, index) => {
                  const style = getCardStyle(index);
                  const isActive = index === activeIndex;
                  return (
                    <SkillCard
                      key={index}
                      skill={skill}
                      isActive={isActive}
                      style={style}
                      shouldReduceMotion={shouldReduceMotion}
                      onClick={() => (isActive ? setSelectedSkill(skill) : goTo(index))}
                    />
                  );
                })}
              </div>
            </motion.div>

            {/* Arrows — terminal buttons */}
            <motion.button
              variants={item}
              onClick={prev}
              whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
              transition={springSnappy}
              aria-label="Previous"
              className="absolute top-1/2 -translate-y-1/2 left-0 md:left-2 z-30 w-10 h-10 rounded-md flex items-center justify-center transition-all duration-100 active:translate-y-[1px]"
              style={{
                background: "linear-gradient(180deg, #26262c, #1a1a20)",
                border: "1px solid rgba(74,222,128,0.2)",
                boxShadow: "0 3px 0 #08080a, 0 4px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
                ...glowGreen,
              }}
            >
              <FaChevronLeft className="w-3.5 h-3.5" />
            </motion.button>

            <motion.button
              variants={item}
              onClick={next}
              whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
              transition={springSnappy}
              aria-label="Next"
              className="absolute top-1/2 -translate-y-1/2 right-0 md:right-2 z-30 w-10 h-10 rounded-md flex items-center justify-center transition-all duration-100 active:translate-y-[1px]"
              style={{
                background: "linear-gradient(180deg, #26262c, #1a1a20)",
                border: "1px solid rgba(74,222,128,0.2)",
                boxShadow: "0 3px 0 #08080a, 0 4px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
                ...glowGreen,
              }}
            >
              <FaChevronRight className="w-3.5 h-3.5" />
            </motion.button>

            {/* Dots — package index */}
            <motion.div variants={item} className="mt-8 flex items-center justify-center gap-1.5 font-mono">
              {skills.map((s, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to ${s.name}`}
                    className="transition-all duration-200 rounded-sm"
                    style={{
                      width: isActive ? "1.75rem" : "0.5rem",
                      height: "0.5rem",
                      background: isActive
                        ? "linear-gradient(90deg, #4ade80, #22c55e)"
                        : "rgba(74,222,128,0.15)",
                      boxShadow: isActive
                        ? "0 0 8px rgba(74,222,128,0.7), inset 0 1px 0 rgba(255,255,255,0.3)"
                        : "inset 0 1px 1px rgba(0,0,0,0.6)",
                    }}
                  />
                );
              })}
            </motion.div>

            {/* Counter */}
            <motion.div variants={item} className="mt-3 text-center font-mono text-[11px]" style={dim}>
              [{String(activeIndex + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}] · selected: <span style={glowGreen}>{skills[activeIndex].name}</span>
            </motion.div>
          </motion.div>
        </div>
      </RevealOnScroll>

      {/* ===== Detail Modal — package inspector ===== */}
      <AnimatePresence>
        {selectedSkill && (
          <Dialog open={true} onClose={() => setSelectedSkill(null)} className="relative z-50">
            <motion.div
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={shouldReduceMotion ? { duration: 0.01 } : { type: "spring", stiffness: 280, damping: 24 }}
                className="relative rounded-lg max-w-md w-full overflow-hidden font-mono"
                style={{
                  background: "linear-gradient(180deg, #16161a 0%, #101014 100%)",
                  border: "1px solid rgba(74,222,128,0.3)",
                  boxShadow: "0 12px 48px rgba(0,0,0,0.9), inset 0 1px 0 rgba(74,222,128,0.15), 0 0 32px rgba(74,222,128,0.1)",
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
                    {selectedSkill.name}@<span style={glowAmber}>{selectedSkill.version}</span>
                  </span>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="ml-auto w-5 h-5 rounded flex items-center justify-center transition-colors hover:bg-white/5"
                    aria-label="Close"
                  >
                    <FaTimes className="w-3 h-3" style={dim} />
                  </button>
                </div>

                {/* CRT body */}
                <div className="relative p-5" style={crtScreen}>
                  <div className="absolute inset-0 pointer-events-none opacity-25" style={scanlines} />

                  <Dialog.Title className="relative flex items-center gap-3 mb-4">
                    <div
                      className="w-14 h-14 rounded-md flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(180deg, #0a1410, #050a08)",
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.95), inset 0 -1px 0 rgba(74,222,128,0.15)",
                      }}
                    >
                      {selectedSkill.icon}
                    </div>
                    <div className="font-mono">
                      <div className="text-lg font-bold" style={glowGreen}>{selectedSkill.name}</div>
                      <div className="text-[10px] mt-0.5" style={dim}>
                        pkg :: <span style={glowAmber}>{selectedSkill.version}</span> · {selectedSkill.category}
                      </div>
                    </div>
                  </Dialog.Title>

                  {/* Terminal output block */}
                  <div
                    className="relative rounded p-3 mb-3 text-[12px] leading-relaxed"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      border: "1px solid rgba(74,222,128,0.15)",
                      color: bodyText,
                    }}
                  >
                    <div className="text-[10px] mb-1.5" style={dim}>$ cat README.md</div>
                    <Dialog.Description as="p" style={{ color: "#c8d4ce" }}>
                      {selectedSkill.description}
                    </Dialog.Description>
                  </div>

                  {/* Deps tree */}
                  <div className="rounded p-3 text-[11px]" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.04)" }}>
                    <div className="text-[10px] mb-1.5" style={dim}>$ npm ls dependencies</div>
                    {selectedSkill.deps.length === 0 ? (
                      <div style={dim}>└── (none)</div>
                    ) : (
                      selectedSkill.deps.map((d, i) => (
                        <div key={i} style={bodyText}>
                          {i === selectedSkill.deps.length - 1 ? "└── " : "├── "}
                          <span style={glowCyan}>{d}</span>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Status row */}
                  <div className="flex items-center justify-between mt-3 text-[10px]">
                    <div className="flex items-center gap-1.5">
                      <Led color="green" pulse />
                      <span style={glowGreen}>installed</span>
                    </div>
                    <span style={dim}>license: MIT</span>
                  </div>
                </div>

                {/* Status bar */}
                <div
                  className="flex items-center justify-between px-4 py-1.5 text-[9px] border-t"
                  style={{ background: "linear-gradient(180deg, #1a1a20, #101014)", borderColor: "rgba(0,0,0,0.6)", color: "#5a6a64" }}
                >
                  <span>UTF-8 · node · 80×24</span>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="px-2 py-0.5 rounded transition-all active:translate-y-[1px]"
                    style={{
                      color: "#081210",
                      background: "linear-gradient(180deg, #4ade80, #22c55e)",
                      boxShadow: "0 1px 0 #14532d, inset 0 1px 0 rgba(255,255,255,0.4)",
                    }}
                  >
                    close
                  </button>
                </div>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>

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
}

export default SkillsSection;