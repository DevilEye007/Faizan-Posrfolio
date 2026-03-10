
"use client";

import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaBrain,
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

  /* Animation Variants */

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center py-24 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-red-600/20 blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative z-10">

          {/* Heading */}

          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 
          bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
            Skills
          </h2>

          <p className="text-center text-gray-400 mb-14 text-base max-w-3xl mx-auto">
            My core technologies & tools — click any skill to learn more.
          </p>

          {/* Skills Grid */}

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedSkill(skill)}
                variants={item}
                whileHover={{ scale: 1.08, y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl 
                bg-white/5 border border-red-500/20 shadow-lg 
                hover:shadow-red-500/40 backdrop-blur-md
                transition-all duration-300 group"
              >

                {/* Icon */}

                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 rounded-full bg-red-500/10 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
                  {skill.icon}
                </div>

                <p className="text-base font-semibold text-red-300 tracking-wide">
                  {skill.name}
                </p>

              </motion.button>
            ))}
          </motion.div>
        </div>
      </RevealOnScroll>

      {/* Skill Modal */}

      <AnimatePresence>
        {selectedSkill && (
          <Dialog
            open={true}
            onClose={() => setSelectedSkill(null)}
            className="relative z-50"
          >

            {/* Overlay */}

            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <div className="fixed inset-0 flex items-center justify-center p-4">

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#141414] border border-red-500/20 text-white rounded-2xl shadow-xl max-w-md w-full p-6"
              >

                <Dialog.Title className="text-xl font-bold flex items-center gap-3">
                  {selectedSkill.icon}
                  {selectedSkill.name}
                </Dialog.Title>

                <Dialog.Description className="mt-4 text-gray-300 text-justify">
                  {selectedSkill.description}
                </Dialog.Description>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition text-white font-medium"
                  >
                    Close
                  </button>
                </div>

              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}

export default SkillsSection;
