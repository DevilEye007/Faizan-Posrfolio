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
      className="relative min-h-screen flex items-center justify-center py-24 bg-[#1a1a1a] overflow-hidden"
    >
      {/* Neomorphic Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]"></div>
        
        {/* Soft Ambient Glows */}
        <div className="absolute w-[600px] h-[600px] bg-red-600/5 blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full bottom-0 right-0"></div>
        <div className="absolute w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full top-1/2 left-0"></div>
        
        {/* Neomorphic Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 relative z-10">

          {/* Heading with Neomorphic Design */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Skills
              </span>
              {/* Neomorphic Underline */}
              <span className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_3px_#0f0f0f,inset_-1px_-1px_3px_#252525]"></span>
              <span className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[2px]"></span>
            </h2>

            <p className="text-gray-400 text-base max-w-3xl mx-auto relative inline-block px-6 py-2 rounded-full
              bg-[#1a1a1a]
              shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]">
              My core technologies & tools — click any skill to learn more.
            </p>
          </div>

          {/* Skills Grid with Neomorphic Cards */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
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
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl 
                  bg-[#1a1a1a]
                  shadow-[6px_6px_16px_#0f0f0f,-6px_-6px_16px_#252525]
                  hover:shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]
                  active:shadow-[inset_6px_6px_16px_#0f0f0f,inset_-6px_-6px_16px_#252525]
                  transition-all duration-300 group"
              >
                {/* Neomorphic Top Highlight */}
                <span className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></span>
                
                {/* Neomorphic Inner Glow on Hover */}
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                {/* Neomorphic Border Glow on Hover */}
                <span className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></span>

                {/* Icon with Neomorphic Circle Background */}
                <div className="relative flex items-center justify-center">
                  {/* Neomorphic Icon Background */}
                  <div className="absolute w-20 h-20 rounded-full bg-[#1a1a1a] 
                    shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]
                    group-hover:shadow-[inset_2px_2px_4px_#0f0f0f,inset_-2px_-2px_4px_#252525]
                    transition-all duration-300">
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute w-20 h-20 rounded-full bg-red-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative z-10">
                    {skill.icon}
                  </span>
                </div>

                <p className="relative text-base font-semibold text-red-300 tracking-wide group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </RevealOnScroll>

      {/* Skill Modal with Neomorphic Design */}
      <AnimatePresence>
        {selectedSkill && (
          <Dialog
            open={true}
            onClose={() => setSelectedSkill(null)}
            className="relative z-50"
          >

            {/* Overlay with Neomorphic Blend */}
            <motion.div
              className="fixed inset-0 bg-[#1a1a1a]/80 backdrop-blur-sm"
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
                className="relative bg-[#1a1a1a] rounded-2xl shadow-[20px_20px_50px_#0f0f0f,-20px_-20px_50px_#252525] max-w-md w-full p-6 overflow-hidden"
              >
                {/* Neomorphic Top Highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                
                {/* Neomorphic Inner Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent"></div>

                <Dialog.Title className="relative text-xl font-bold flex items-center gap-3">
                  {/* Neomorphic Icon Container */}
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
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="relative px-6 py-2.5 rounded-lg font-medium text-white transition-all duration-300
                      bg-[#1a1a1a]
                      shadow-[6px_6px_16px_#0f0f0f,-6px_-6px_16px_#252525]
                      hover:shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]
                      active:shadow-[inset_6px_6px_16px_#0f0f0f,inset_-6px_-6px_16px_#252525]
                      hover:bg-[#1e1e1e]
                      group/btn"
                  >
                    {/* Neomorphic Inner Glow */}
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">Close</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Global Neomorphic Styles */}
      <style jsx>{`
        /* Neomorphic Base */
        .neu-base {
          background: #1a1a1a;
          border-radius: 1rem;
        }
        
        /* Neomorphic Extruded */
        .neu-extruded {
          box-shadow: 6px 6px 16px #0f0f0f, -6px -6px 16px #252525;
        }
        
        /* Neomorphic Inset */
        .neu-inset {
          box-shadow: inset 4px 4px 12px #0f0f0f, inset -4px -4px 12px #252525;
        }
        
        /* Neomorphic Pressed (Active State) */
        .neu-pressed {
          box-shadow: inset 6px 6px 16px #0f0f0f, inset -6px -6px 16px #252525;
        }
        
        /* Smooth Transitions */
        * {
          transition: box-shadow 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }

        /* Neomorphic Grid Pattern */
        .neu-grid {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 40px 40px;
        }

        /* Custom Scrollbar */
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
      `}</style>
    </section>
  );
}

export default SkillsSection;