"use client";

import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBrain,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFlutter,
} from "react-icons/si";

function SkillsSection() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-red-400 text-5xl" />,
      description:
        "HTML structures the web. It defines semantic content, accessibility standards, and SEO-friendly markup used by modern websites.",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-400 text-5xl" />,
      description:
        "CSS controls layout, responsiveness, animations, and visual design, enabling modern responsive and mobile-first interfaces.",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 text-5xl" />,
      description:
        "JavaScript powers dynamic web applications, enabling logic, interactivity, API communication, and modern frontend frameworks.",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400 text-5xl" />,
      description:
        "React is a powerful UI library for building scalable component-based applications with fast rendering and reusable architecture.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-5xl" />,
      description:
        "Node.js enables server-side JavaScript with fast event-driven architecture, ideal for APIs, real-time apps, and scalable backends.",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-300 text-5xl" />,
      description:
        "Express simplifies backend development with routing, middleware, REST APIs, authentication systems, and server logic.",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400 text-5xl" />,
      description:
        "MongoDB is a NoSQL database storing flexible JSON-like documents for scalable, modern web applications.",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
      description:
        "TailwindCSS is a utility-first framework that allows developers to rapidly design modern responsive interfaces.",
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="text-sky-400 text-5xl" />,
      description:
        "Flutter enables cross-platform development from a single codebase for mobile, desktop, and web applications.",
    },
    {
      name: "Python",
      icon: <FaPython className="text-yellow-500 text-5xl" />,
      description:
        "Python is widely used for backend systems, AI, machine learning, automation, and data science.",
    },
    {
      name: "AI Prompt Engineering",
      icon: <FaBrain className="text-indigo-500 text-5xl" />,
      description:
        "Prompt engineering focuses on crafting high-quality instructions for AI systems to produce consistent and accurate outputs.",
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  /* ---------- Carousel Navigation ---------- */
  const total = skills.length;

  const goTo = (index) => {
    setActiveIndex(((index % total) + total) % total);
  };

  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  /* ---------- 3D Cover-Flow Transform ---------- */
  const getCardStyle = (index) => {
    // Circular distance from active index
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const abs = Math.abs(offset);

    // Hide cards too far out
    if (abs > 3) {
      return {
        x: offset * 260,
        scale: 0.4,
        opacity: 0,
        rotateY: offset * 25,
        zIndex: 0,
        pointerEvents: "none",
      };
    }

    return {
      x: offset * 220,
      scale: abs === 0 ? 1 : abs === 1 ? 0.82 : abs === 2 ? 0.65 : 0.45,
      opacity: abs === 0 ? 1 : abs === 1 ? 0.65 : abs === 2 ? 0.3 : 0,
      rotateY: offset * 28,
      zIndex: 10 - abs,
      pointerEvents: abs === 0 ? "auto" : "none",
    };
  };

  /* ---------- Entry Variants ---------- */
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  const springSnappy = shouldReduceMotion
    ? { duration: 0.01 }
    : { type: "spring", stiffness: 300, damping: 22 };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-24 bg-[#1a1a1a] overflow-hidden"
    >
      {/* Neomorphic Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]"></div>

        {/* Soft Ambient Glows — breathing */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : { scale: [1, 1.06, 1], opacity: [0.05, 0.09, 0.05] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[600px] h-[600px] bg-red-600/5 blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2 will-change-transform"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : { scale: [1, 1.08, 1], opacity: [0.05, 0.1, 0.05] }
          }
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full bottom-0 right-0 will-change-transform"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : { scale: [1, 1.05, 1], opacity: [0.05, 0.08, 0.05] }
          }
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full top-1/2 left-0 will-change-transform"
        />

        {/* Neomorphic Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
          {/* Heading with Neomorphic Design */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.h2
              variants={item}
              className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block"
            >
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Skills
              </span>
              {/* Neomorphic Underline — animated */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3,
                }}
                style={{ transformOrigin: "center" }}
                className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_3px_#0f0f0f,inset_-1px_-1px_3px_#252525]"
              />
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.4,
                }}
                style={{ transformOrigin: "center" }}
                className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[2px]"
              />
            </motion.h2>

            <motion.p
              variants={item}
              className="text-gray-400 text-base max-w-3xl mx-auto relative inline-block px-6 py-2 rounded-full
              bg-[#1a1a1a]
              shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]"
            >
              My core technologies & tools — click any skill to learn more.
            </motion.p>
          </motion.div>

          {/* ==================== CAROUSEL ==================== */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Carousel Stage */}
            <motion.div
              variants={item}
              className="relative h-[22rem] sm:h-[24rem] md:h-[26rem] flex items-center justify-center"
              style={{ perspective: "1400px" }}
            >
              {/* Inner 3D stage */}
              <div
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {skills.map((skill, index) => {
                  const style = getCardStyle(index);
                  const isActive = index === activeIndex;

                  return (
                    <motion.button
                      key={index}
                      onClick={() => {
                        if (isActive) {
                          setSelectedSkill(skill);
                        } else {
                          goTo(index);
                        }
                      }}
                      initial={false}
                      animate={style}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0.01 }
                          : { type: "spring", stiffness: 180, damping: 26 }
                      }
                      whileHover={
                        isActive && !shouldReduceMotion
                          ? { scale: style.scale * 1.05, y: -6 }
                          : {}
                      }
                      whileTap={
                        isActive && !shouldReduceMotion ? { scale: 0.97 } : {}
                      }
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginLeft: "-6rem",
                        marginTop: "-9rem",
                        width: "12rem",
                        height: "18rem",
                        willChange: "transform, opacity",
                        transformStyle: "preserve-3d",
                      }}
                      className={`relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl 
                        bg-[#1a1a1a]
                        shadow-[6px_6px_16px_#0f0f0f,-6px_-6px_16px_#252525]
                        transition-shadow duration-300 group ${
                          isActive ? "cursor-pointer" : "cursor-default"
                        }`}
                    >
                      {/* Neomorphic Top Highlight */}
                      <span className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></span>

                      {/* Neomorphic Inner Glow on Hover */}
                      <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                      {/* Neomorphic Border Glow on Hover (active only) */}
                      {isActive && (
                        <span className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></span>
                      )}

                      {/* Icon with Neomorphic Circle Background */}
                      <div className="relative flex items-center justify-center">
                        <div
                          className="absolute w-20 h-20 rounded-full bg-[#1a1a1a] 
                          shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]
                          transition-all duration-300"
                        ></div>

                        {isActive && (
                          <div className="absolute w-20 h-20 rounded-full bg-red-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        )}

                        <span className="relative z-10">{skill.icon}</span>
                      </div>

                      <p
                        className={`relative text-base font-semibold tracking-wide text-center
                        transition-colors duration-300 ${
                          isActive
                            ? "text-red-300 group-hover:text-white"
                            : "text-red-300/60"
                        }`}
                      >
                        {skill.name}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* ---------- Arrows ---------- */}
            <motion.button
              variants={item}
              onClick={prev}
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, x: -3 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
              transition={springSnappy}
              aria-label="Previous skill"
              className="absolute top-1/2 -translate-y-1/2 left-0 md:left-2 z-30 
                w-12 h-12 rounded-full flex items-center justify-center
                bg-[#1a1a1a]
                shadow-[6px_6px_16px_#0f0f0f,-6px_-6px_16px_#252525]
                hover:shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]
                active:shadow-[inset_6px_6px_16px_#0f0f0f,inset_-6px_-6px_16px_#252525]
                text-red-300 hover:text-white
                transition-all duration-300 group/arrow"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover/arrow:opacity-100 transition-opacity duration-300"></span>
              <FaChevronLeft className="relative" />
            </motion.button>

            <motion.button
              variants={item}
              onClick={next}
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, x: 3 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
              transition={springSnappy}
              aria-label="Next skill"
              className="absolute top-1/2 -translate-y-1/2 right-0 md:right-2 z-30 
                w-12 h-12 rounded-full flex items-center justify-center
                bg-[#1a1a1a]
                shadow-[6px_6px_16px_#0f0f0f,-6px_-6px_16px_#252525]
                hover:shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]
                active:shadow-[inset_6px_6px_16px_#0f0f0f,inset_-6px_-6px_16px_#252525]
                text-red-300 hover:text-white
                transition-all duration-300 group/arrow"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover/arrow:opacity-100 transition-opacity duration-300"></span>
              <FaChevronRight className="relative" />
            </motion.button>

            {/* ---------- Dots ---------- */}
            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {skills.map((_, i) => {
                const isActive = i === activeIndex;
                return (
                  <motion.button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to skill ${i + 1}`}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                    transition={springSnappy}
                    className="relative rounded-full flex items-center justify-center bg-[#1a1a1a]
                      shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]
                      transition-all duration-300"
                    style={{
                      width: isActive ? "2rem" : "0.75rem",
                      height: "0.75rem",
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="dot-glow"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/40 to-red-400/30 blur-[2px]"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                    {isActive && (
                      <span className="relative w-full h-full rounded-full bg-gradient-to-r from-red-500 to-red-400 shadow-[0_0_12px_rgba(239,68,68,0.6)]"></span>
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </RevealOnScroll>

      {/* ==================== SKILL MODAL ==================== */}
      <AnimatePresence>
        {selectedSkill && (
          <Dialog
            open={true}
            onClose={() => setSelectedSkill(null)}
            className="relative z-50"
          >
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-[#1a1a1a]/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 24 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.01 }
                    : { type: "spring", stiffness: 260, damping: 24 }
                }
                style={{ willChange: "transform, opacity" }}
                className="relative bg-[#1a1a1a] rounded-2xl shadow-[20px_20px_50px_#0f0f0f,-20px_-20px_50px_#252525] max-w-md w-full p-6 overflow-hidden"
              >
                {/* Neomorphic Top Highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

                {/* Neomorphic Inner Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent"></div>

                <Dialog.Title className="relative text-xl font-bold flex items-center gap-3">
                  <div className="p-3 rounded-full bg-[#1a1a1a] shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]">
                    {selectedSkill.icon}
                  </div>
                  <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                    {selectedSkill.name}
                  </span>
                </Dialog.Title>

                <Dialog.Description className="relative mt-4 text-gray-300 text-justify p-4 rounded-xl
                  bg-[#1a1a1a]
                  shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]">
                  {selectedSkill.description}
                </Dialog.Description>

                <div className="relative mt-6 flex justify-end">
                  <motion.button
                    onClick={() => setSelectedSkill(null)}
                    whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.03 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                    transition={springSnappy}
                    className="relative px-6 py-2.5 rounded-lg font-medium text-white 
                      bg-[#1a1a1a]
                      shadow-[6px_6px_16px_#0f0f0f,-6px_-6px_16px_#252525]
                      hover:shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]
                      active:shadow-[inset_6px_6px_16px_#0f0f0f,inset_-6px_-6px_16px_#252525]
                      transition-shadow duration-300
                      group/btn"
                  >
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">Close</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Global Neomorphic Styles */}
      <style jsx>{`
        .neu-base {
          background: #1a1a1a;
          border-radius: 1rem;
        }

        .neu-extruded {
          box-shadow: 6px 6px 16px #0f0f0f, -6px -6px 16px #252525;
        }

        .neu-inset {
          box-shadow: inset 4px 4px 12px #0f0f0f, inset -4px -4px 12px #252525;
        }

        .neu-pressed {
          box-shadow: inset 6px 6px 16px #0f0f0f, inset -6px -6px 16px #252525;
        }

        .neu-transition {
          transition: box-shadow 0.3s ease, background 0.3s ease,
            transform 0.3s ease;
        }

        .neu-grid {
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 0
          );
          background-size: 40px 40px;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
          box-shadow: inset 1px 1px 3px #0f0f0f, inset -1px -1px 3px #252525;
        }

        ::-webkit-scrollbar-thumb {
          background: #2a2a2a;
          box-shadow: 2px 2px 4px #0f0f0f, -2px -2px 4px #252525;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #333;
        }

        @media (prefers-reduced-motion: reduce) {
          .neu-transition {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

export default SkillsSection;