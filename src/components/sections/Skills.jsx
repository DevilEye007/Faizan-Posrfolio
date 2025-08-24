// components/SkillsSection.jsx
"use client";

import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiFlutter } from "react-icons/si";

function SkillsSection() {
  const skills = [
  { 
    name: "HTML", 
    icon: <FaHtml5 className="text-red-400 text-5xl" />, 
    description: "HyperText Markup Language (HTML) is the backbone of web development, responsible for structuring content on the web. It defines the meaning and organization of web elements, ensuring accessibility, search engine optimization (SEO), and semantic correctness." 
  },
  { 
    name: "CSS", 
    icon: <FaCss3Alt className="text-blue-400 text-5xl" />, 
    description: "Cascading Style Sheets (CSS) is used to style and visually present HTML content. It enables the creation of responsive, modern, and user-friendly designs while supporting animations, transitions, and mobile-first layouts." 
  },
  { 
    name: "JavaScript", 
    icon: <FaJs className="text-yellow-400 text-5xl" />, 
    description: "JavaScript is the core programming language of the web, adding interactivity, dynamic content, and logic to websites and applications. With modern ES6+ features, it powers everything from frontend animations to backend services." 
  },
  { 
    name: "React", 
    icon: <FaReact className="text-cyan-400 text-5xl" />, 
    description: "React is a powerful JavaScript library developed by Facebook for building highly interactive and scalable user interfaces. It leverages reusable components, virtual DOM, and state management to create seamless single-page applications (SPAs)." 
  },
  { 
    name: "Node.js", 
    icon: <FaNodeJs className="text-green-500 text-5xl" />, 
    description: "Node.js is a server-side JavaScript runtime built on Chrome’s V8 engine. It enables developers to build scalable, high-performance applications with non-blocking, event-driven architecture, making it ideal for APIs and real-time applications." 
  },
  { 
    name: "Express.js", 
    icon: <SiExpress className="text-gray-300 text-5xl" />, 
    description: "Express.js is a minimal and flexible Node.js framework that simplifies building APIs and server-side applications. It provides a robust set of tools for handling routes, middleware, authentication, and RESTful services efficiently." 
  },
  { 
    name: "MongoDB", 
    icon: <SiMongodb className="text-green-400 text-5xl" />, 
    description: "MongoDB is a leading NoSQL database known for its flexibility and scalability. It stores data in JSON-like documents, making it ideal for modern applications that require fast performance, high availability, and seamless integration with JavaScript frameworks." 
  },
  { 
    name: "TailwindCSS", 
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />, 
    description: "TailwindCSS is a utility-first CSS framework that accelerates UI development with prebuilt classes. It promotes clean and maintainable code by eliminating the need for custom CSS, allowing developers to rapidly prototype and build responsive designs." 
  },
  { 
    name: "Flutter", 
    icon: <SiFlutter className="text-sky-400 text-5xl" />, 
    description: "Flutter is Google's open-source UI toolkit for building natively compiled applications from a single codebase. It empowers developers to create beautiful, fast experiences for mobile, web and desktop." 
  },
];


  const [selectedSkill, setSelectedSkill] = useState(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 
                 bg-gradient-to-b from-white to-gray-100 
                 dark:from-[#1a1a1a] dark:to-[#0f0f0f]"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 
                         bg-gradient-to-r from-red-600 to-red-400 
                         text-transparent bg-clip-text drop-shadow-lg">
            Skills
          </h2>
          <p className="text-center text-gray-400 mb-12 text-base max-w-3xl mx-auto">
            My core technologies & tools click on any skill to learn more.
          </p>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedSkill(skill)}
                variants={item}
                whileHover={{ scale: 1.08, y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl 
                           bg-white/5 border border-red-500/20 
                           shadow-lg hover:shadow-red-500/40 
                           transition-all duration-300 backdrop-blur-md group focus:outline-none"
              >
                {/* Icon Glow */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 rounded-full transition-all"></div>
                  {skill.icon}
                </div>

                {/* Text */}
                <p className="text-base font-semibold text-red-300 tracking-wide">
                  {skill.name}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </RevealOnScroll>

      {/* Dialog Box */}
      <AnimatePresence>
        {selectedSkill && (
          <Dialog
            open={!!selectedSkill}
            onClose={() => setSelectedSkill(null)}
            className="relative z-50"
          >
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
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
                className="bg-[#1a1a1a] text-white rounded-2xl shadow-xl max-w-md w-full p-6"
              >
                <Dialog.Title className="text-xl font-bold flex items-center gap-3">
                  {selectedSkill.icon} {selectedSkill.name}
                </Dialog.Title>
                <Dialog.Description className="mt-3 text-gray-300 text-justify">
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
