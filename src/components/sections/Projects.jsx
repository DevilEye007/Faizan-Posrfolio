import { useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import Invertorry from "../../assets/DA/INV.png";
import DataAnalytics from "../../assets/DA/DATA.png";
import CRM from "../../assets/DA/CRM.png";
import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaChevronLeft, FaChevronRight, FaTerminal, FaExternalLinkAlt,
  FaDownload, FaMobileAlt, FaGlobe, FaGamepad, FaDesktop, FaCodeBranch,
} from "react-icons/fa";

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

/* ============ Deployment card ============ */
const DeployCard = ({ project, index, variant = "web", shouldReduceMotion, renderImage }) => {
  const variants = {
    web: { tag: "web", color: "green", icon: FaGlobe, action: "open", actionIcon: FaExternalLinkAlt },
    mobile: { tag: "apk", color: "cyan", icon: FaMobileAlt, action: "download", actionIcon: FaDownload },
    game: { tag: "game", color: "amber", icon: FaGamepad, action: "play", actionIcon: FaExternalLinkAlt },
    desktop: { tag: "exe", color: "red", icon: FaDesktop, action: "download", actionIcon: FaDownload },
  }[variant];

  const colorMap = {
    green: { text: glowGreen, border: "rgba(74,222,128,0.25)", bg: "rgba(74,222,128,0.06)" },
    cyan: { text: glowCyan, border: "rgba(103,232,249,0.25)", bg: "rgba(103,232,249,0.06)" },
    amber: { text: glowAmber, border: "rgba(251,191,36,0.25)", bg: "rgba(251,191,36,0.06)" },
    red: { text: glowRed, border: "rgba(248,113,113,0.25)", bg: "rgba(248,113,113,0.06)" },
  }[variants.color];

  const Icon = variants.icon;
  const ActionIcon = variants.actionIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={shouldReduceMotion ? { duration: 0.01 } : { type: "spring", stiffness: 110, damping: 20, delay: index * 0.05 }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      className="relative h-full rounded-lg overflow-hidden font-mono group"
      style={{
        background: "linear-gradient(180deg, #16161a 0%, #101014 100%)",
        border: `1px solid ${colorMap.border}`,
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.4)`,
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-1.5 px-3 py-2 border-b shrink-0"
        style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(0,0,0,0.6)" }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: "#ef4444", boxShadow: "0 0 3px rgba(239,68,68,0.9)" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b", boxShadow: "0 0 3px rgba(245,158,11,0.7)" }} />
        <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 3px rgba(34,197,94,0.9)" }} />

        <Icon className="w-3 h-3 ml-2" style={colorMap.text} />

        <span className="ml-1 text-[10px] uppercase tracking-widest" style={colorMap.text}>
          {variants.tag}
        </span>

        <div className="ml-auto flex items-center gap-1.5">
          <Led color={variants.color} pulse />
          <span className="text-[9px] uppercase tracking-wider" style={{ color: "#9aa6a0" }}>
            live
          </span>
        </div>
      </div>

      {/* Body — CRT screen */}
      <div className="relative p-4" style={crtScreen}>
        <div className="absolute inset-0 pointer-events-none opacity-20" style={scanlines} />

        {/* Optional preview image */}
        {renderImage && project.image && (
          <div
            className="relative mb-3 rounded overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #0a1410, #050a08)",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.95), inset 0 -1px 0 rgba(74,222,128,0.1)",
            }}
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-36 object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 will-change-transform"
              style={{ filter: "contrast(1.05) saturate(0.9)" }}
            />
            <div className="absolute inset-0 pointer-events-none opacity-30" style={scanlines} />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.5) 100%)" }}
            />
            <div className="absolute top-1.5 left-1.5 text-[8px] tracking-widest" style={glowGreen}>
              ● REC
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="relative text-[13px] font-bold mb-1.5 leading-snug" style={{ color: "#e0f0ea" }}>
          {project.title}
        </h3>

        {/* Repo path */}
        <div className="relative flex items-center gap-1.5 text-[9px] mb-2" style={dim}>
          <FaCodeBranch className="w-2.5 h-2.5" />
          <span>~/projects/{project.title.toLowerCase().replace(/\s+/g, "-")}</span>
        </div>

        {/* Description as terminal output */}
        <div
          className="relative rounded p-2.5 mb-3 text-[11px] leading-relaxed"
          style={{
            background: "rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,255,255,0.04)",
            color: bodyText,
          }}
        >
          <span style={glowGreen}>&gt;</span> {project.description}
        </div>

        {/* Tech stack as installed packages */}
        <div className="relative mb-3">
          <div className="text-[9px] mb-1" style={dim}>// dependencies</div>
          <div className="flex flex-wrap gap-1">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-1.5 py-0.5 rounded text-[9px] font-mono tracking-wide"
                style={{
                  color: "#9aa6a0",
                  background: "rgba(0,0,0,0.4)",
                  border: `1px solid ${colorMap.border}`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest transition-all duration-100 active:translate-y-[1px]"
          style={{
            color: "#081210",
            background: `linear-gradient(180deg, ${
              variants.color === "green" ? "#4ade80, #22c55e" :
              variants.color === "cyan" ? "#67e8f9, #22d3ee" :
              variants.color === "amber" ? "#fcd34d, #f59e0b" :
              "#f87171, #ef4444"
            })`,
            boxShadow: `0 2px 0 ${
              variants.color === "green" ? "#14532d" :
              variants.color === "cyan" ? "#164e63" :
              variants.color === "amber" ? "#78350f" :
              "#7f1d1d"
            }, inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.2)`,
          }}
        >
          <FaTerminal className="w-2.5 h-2.5" />
          <span>./{variants.action}</span>
          <ActionIcon className="w-2.5 h-2.5" />
        </a>
      </div>

      {/* Status bar */}
      <div
        className="flex items-center justify-between px-3 py-1 text-[8px] border-t"
        style={{ background: "linear-gradient(180deg, #1a1a20, #101014)", borderColor: "rgba(0,0,0,0.6)", color: "#5a6a64" }}
      >
        <span>UTF-8 · {variants.tag}</span>
        <span>{project.tech.length} deps</span>
      </div>
    </motion.div>
  );
};

/* ============ Slider ============ */
const ProjectSlider = ({ projects, variant, shouldReduceMotion, renderImage }) => {
  const scrollRef = useRef(null);

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    el.scrollBy({
      left: direction * cardWidth,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const atStart = el.scrollLeft <= 4;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    el.parentElement?.setAttribute("data-at-start", atStart);
    el.parentElement?.setAttribute("data-at-end", atEnd);
  };

  const springSnappy = shouldReduceMotion
    ? { duration: 0.01 }
    : { type: "spring", stiffness: 280, damping: 24 };

  return (
    <div
      className="relative group/slider"
      data-at-start="true"
      data-at-end={projects.length <= 3 ? "true" : "false"}
    >
      {/* Left arrow */}
      <motion.button
        onClick={() => scrollByAmount(-1)}
        whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
        transition={springSnappy}
        aria-label="Scroll left"
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6 z-30 w-10 h-10 rounded-md items-center justify-center transition-all duration-100 active:translate-y-[1px]
          opacity-0 group-data-[at-start=true]/slider:opacity-40
          group-data-[at-start=false]/slider:opacity-100"
        style={{
          background: "linear-gradient(180deg, #26262c, #1a1a20)",
          border: "1px solid rgba(74,222,128,0.2)",
          boxShadow: "0 3px 0 #08080a, 0 4px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
          ...glowGreen,
        }}
      >
        <FaChevronLeft className="w-3.5 h-3.5" />
      </motion.button>

      {/* Right arrow */}
      <motion.button
        onClick={() => scrollByAmount(1)}
        whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
        transition={springSnappy}
        aria-label="Scroll right"
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6 z-30 w-10 h-10 rounded-md items-center justify-center transition-all duration-100 active:translate-y-[1px]
          opacity-0 group-data-[at-end=true]/slider:opacity-40
          group-data-[at-end=false]/slider:opacity-100"
        style={{
          background: "linear-gradient(180deg, #26262c, #1a1a20)",
          border: "1px solid rgba(74,222,128,0.2)",
          boxShadow: "0 3px 0 #08080a, 0 4px 8px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
          ...glowGreen,
        }}
      >
        <FaChevronRight className="w-3.5 h-3.5" />
      </motion.button>

      {/* Track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            data-card
            className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[55%] lg:w-[calc(33.333%-1rem)]"
          >
            <DeployCard
              project={project}
              index={index}
              variant={variant}
              shouldReduceMotion={shouldReduceMotion}
              renderImage={renderImage}
            />
          </div>
        ))}
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-[#050807] to-transparent opacity-60 group-data-[at-start=true]/slider:opacity-0 transition-opacity duration-300" />
      <div className="pointer-events-none absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-[#050807] to-transparent opacity-60 group-data-[at-end=true]/slider:opacity-0 transition-opacity duration-300" />
    </div>
  );
};

/* ============ Section heading — module path ============ */
const SectionHeading = ({ icon: Icon, label, count, color = "green" }) => {
  const colorMap = {
    green: glowGreen,
    cyan: glowCyan,
    amber: glowAmber,
    red: glowRed,
  }[color];

  return (
    <div className="mb-5 font-mono">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] mb-1" style={colorMap}>
        <Led color={color} pulse />
        <span>module_{String(count).padStart(2, "0")}</span>
      </div>
      <h3 className="text-lg md:text-xl font-bold flex items-center gap-2" style={{ color: "#e0f0ea" }}>
        <span style={colorMap}>$</span>
        <Icon className="w-4 h-4" style={colorMap} />
        <span>{label}</span>
        <span className="text-sm" style={dim}>({count})</span>
      </h3>
      <div className="h-px mt-2 bg-gradient-to-r from-green-500/30 via-green-500/10 to-transparent" />
    </div>
  );
};

/* ==================== Main ==================== */
export const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  const webProjects = [
    { title: "AI Content Generator", description: "AI-powered content & SEO writer for blog posts, ads, and social captions.", tech: ["HTML", "TailwindCSS", "JavaScript", "Python", "FlaskAPI"], link: "https://gacg.vercel.app/" },
    { title: "AI Quiz Generator", description: "AI-driven quiz generator for custom topics and difficulty levels.", tech: ["HTML", "TailwindCSS", "JavaScript", "Python", "Gemini"], link: "https://neuro-quiz.vercel.app/" },
    { title: "E-Commerce Store", description: "Roucha Cielo — modern fashion store with cart, secure checkout, and elegant UI.", tech: ["React", "Express", "MongoDB", "TailwindCSS"], link: "https://rouchacielo.com/" },
    { title: "Marks Management System", description: "Academic tool for student records, automated grading, and Excel export.", tech: ["ReactJS", "TailwindCSS", "MS Excel"], link: "https://marks-managmenet-system.vercel.app/" },
    { title: "Invoice Generator", description: "Create sleek printable invoices with auto totals for freelancers.", tech: ["ReactJS", "TailwindCSS", "PDF"], link: "https://faizan-invoice-generator.vercel.app/" },
    { title: "Pixel Crafter Portfolio", description: "Creative studio portfolio showcasing graphic design and video editing.", tech: ["ReactJS", "TailwindCSS"], link: "https://pixelcrafter.vercel.app/" },
    { title: "Expense Tracker", description: "Intuitive expense tracker with add/edit/delete and spend visualization.", tech: ["ReactJS", "TailwindCSS"], link: "https://expense-tracker-faiz.vercel.app/" },
  ];

  const gamingProjects = [
    { title: "Tic Tac Toe", description: "Sleek, responsive tic-tac-toe with smooth gameplay and vibrant animations.", tech: ["ReactJS", "TailwindCSS", "Bot"], link: "https://tic-tac-toe-game-faiz.vercel.app/" },
  ];

  const desktopApplication = [
    { title: "Inventory Management System", description: "Desktop app to manage inventory, orders, sales, and deliveries.", tech: ["PYQT5", "SQLite"], link: "https://github.com/DevilEye007/Inventory-Management-System/releases/download/v1.0.0/main_window.exe", image: Invertorry },
    { title: "Data Analytics Dashboard", description: "Desktop dashboard for visualizing and analyzing data through interactive charts.", tech: ["PYQT5", "Charts", "Data Science"], link: "https://github.com/DevilEye007/Data-Analytics-Dashboard/releases/download/Data-Analytics-Dashboard/Data.Analytics.Dashboard.exe", image: DataAnalytics },
    { title: "CRM System", description: "CRM desktop app to manage customer interactions and pipelines.", tech: ["PYQT5", "Charts", "SQLite"], link: "https://github.com/DevilEye007/CRM-System/releases/download/CRM_Prov1.0.0/CRM.Pro.exe", image: CRM },
  ];

  const mobileApplication = [
    { title: "Expense Tracker Mobile", description: "Mobile app to track daily expenses, categorize spending, and visualize finances.", tech: ["Flutter", "Dart", "SQLite"], link: "https://github.com/DevilEye007/Fin-Track/releases/download/Expence_Tracker/app-release.apk" },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
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
      <motion.div
        animate={shouldReduceMotion ? {} : { opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.2), transparent 70%)" }}
      />

      <Helmet>
        <title>Projects | Faizan Sultan Portfolio</title>
        <meta name="description" content="Explore Faizan Sultan's deployed projects — web apps, mobile apps, desktop tools, and games." />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        {/* Section header */}
        <RevealOnScroll>
          <div className="mb-12 font-mono">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em]" style={glowGreen}>
              <Led color="green" pulse />
              module_03
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold" style={{ color: "#e0f0ea" }}>
              <span style={glowGreen}>$</span> ls ./projects/<span className="ml-1">{""}</span>
              <span className="inline-block w-[10px] h-[1em] ml-1 align-middle bg-green-400 animate-pulse" />
            </h2>
            <div className="h-px mt-3 bg-gradient-to-r from-green-500/40 via-green-500/10 to-transparent" />
            <p className="mt-3 text-[12px]" style={dim}>
              // {webProjects.length + gamingProjects.length + desktopApplication.length + mobileApplication.length} deployments live · click any card to launch
            </p>
          </div>
        </RevealOnScroll>

        {/* Android */}
        <RevealOnScroll>
          <div className="mb-14">
            <SectionHeading icon={FaMobileAlt} label="android_apps" count={mobileApplication.length} color="cyan" />
            <ProjectSlider projects={mobileApplication} variant="mobile" shouldReduceMotion={shouldReduceMotion} />
          </div>
        </RevealOnScroll>

        {/* Web */}
        <RevealOnScroll>
          <div className="mb-14">
            <SectionHeading icon={FaGlobe} label="web_apps" count={webProjects.length} color="green" />
            <ProjectSlider projects={webProjects} variant="web" shouldReduceMotion={shouldReduceMotion} />
          </div>
        </RevealOnScroll>

        {/* Games */}
        <RevealOnScroll>
          <div className="mb-14">
            <SectionHeading icon={FaGamepad} label="mini_games" count={gamingProjects.length} color="amber" />
            <ProjectSlider projects={gamingProjects} variant="game" shouldReduceMotion={shouldReduceMotion} />
          </div>
        </RevealOnScroll>

        {/* Desktop */}
        <RevealOnScroll>
          <div>
            <SectionHeading icon={FaDesktop} label="desktop_apps" count={desktopApplication.length} color="red" />
            <ProjectSlider projects={desktopApplication} variant="desktop" shouldReduceMotion={shouldReduceMotion} renderImage />
          </div>
        </RevealOnScroll>
      </div>

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