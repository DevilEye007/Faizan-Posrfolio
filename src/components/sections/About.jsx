import { RevealOnScroll } from "../RevealOnScroll";
import { FaDownload } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import Resume from "./Resume.pdf";
import VideoSrc from "../../assets/BG.mp4";

/* ---------------- Skill Card ---------------- */

const SkillCard = ({ title, skills, variants }) => (
  <motion.div
    variants={variants}
    whileHover={{ y: -4, scale: 1.015 }}
    transition={{ type: "spring", stiffness: 260, damping: 22 }}
    style={{ willChange: "transform" }}
    className="relative group rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] transition-shadow duration-300"
  >
    {/* Neomorphic Inner Highlight */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="relative rounded-2xl p-6 bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#1e1e1e]">
      <h3 className="text-xl font-semibold mb-4 text-red-400">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((tech, key) => (
          <span
            key={key}
            className="relative px-4 py-1.5 rounded-full text-sm font-medium text-red-300 transition-all duration-300
              bg-[#1a1a1a]
              shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]
              hover:shadow-[inset_1px_1px_3px_#0f0f0f,inset_-1px_-1px_3px_#252525]
              hover:text-white hover:scale-105
              group/tech"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">{tech}</span>
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

/* ---------------- Education Card ---------------- */

const EducationCard = ({ variants }) => (
  <motion.div
    variants={variants}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 260, damping: 22 }}
    style={{ willChange: "transform" }}
    className="relative group rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] transition-shadow duration-300"
  >
    {/* Neomorphic Top Highlight */}
    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

    {/* Neomorphic Inner Glow */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#1e1e1e]">
      <h3 className="text-xl font-bold mb-4 text-red-400">Education</h3>

      <ul className="text-gray-300 space-y-3 text-sm leading-relaxed">
        <li className="relative pl-4">
          <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
          <strong>B.S. in Information Technology</strong> — University of Gujrat (2021–2025)
        </li>

        <li className="relative pl-4">
          <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
          Final Year Project: Developed a cross-platform
          <strong> mobile application</strong> using
          <strong> Flutter</strong> and <strong>Firebase</strong>.
        </li>

        <li className="relative pl-4">
          <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
          Assistant Teacher for <strong>ReactJS</strong> and
          <strong> Tailwind CSS</strong>.
        </li>
      </ul>
    </div>
  </motion.div>
);

/* ---------------- Experience Card ---------------- */

const ExperienceCard = ({ variants }) => (
  <motion.div
    variants={variants}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 260, damping: 22 }}
    style={{ willChange: "transform" }}
    className="relative group rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] transition-shadow duration-300"
  >
    {/* Neomorphic Top Highlight */}
    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

    {/* Neomorphic Inner Glow */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#1e1e1e]">
      <h3 className="text-xl font-bold mb-4 text-red-400">Experience</h3>

      <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
        <div className="relative pl-4">
          <span className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
          <h4 className="font-semibold text-white">
            Frontend Developer (2023 – Present)
          </h4>

          <p className="mt-1">
            Developed responsive UI using <strong>ReactJS</strong> and
            <strong> Tailwind CSS</strong>. Optimized UX, animations,
            and scalable frontend architecture.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

/* ---------------- Certificate Card ---------------- */

const CertificateCard = ({ cert, variants }) => (
  <motion.div
    variants={variants}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 240, damping: 20 }}
    style={{ willChange: "transform" }}
    className="relative group rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] transition-shadow duration-300"
  >
    {/* Neomorphic Top Highlight */}
    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

    {/* Neomorphic Inner Glow */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    {/* Neomorphic Border Glow on Hover */}
    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>

    <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#1e1e1e]">
      <h3 className="text-lg font-semibold mb-1 text-red-300">
        {cert.title}
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed">
        {cert.description}
      </p>

      <p className="text-gray-400 text-xs mt-2">
        {cert.issuer} — {cert.date}
      </p>

      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block mt-3 text-sm font-medium text-red-400 hover:text-red-300 transition-colors duration-300 group/link"
        >
          View Certificate →
          {/* Neomorphic Underline */}
          <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-red-400/30 rounded-full shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
          <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-red-400 group-hover/link:w-full transition-all duration-300"></span>
        </a>
      )}
    </div>
  </motion.div>
);

/* ---------------- Main About Component ---------------- */

export const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const springSnappy = shouldReduceMotion
    ? { duration: 0.01 }
    : { type: "spring", stiffness: 260, damping: 22 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  const frontendSkills = ["ReactJS", "Kotlin", "Flutter"];
  const backendSkills = ["Node.js", "Python", "MongoDB"];
  const graphicDesigning = ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Corel Draw"];
  const desktopApplication = ["Python PyQt5", "C# .NET"];

  const certificates = [
    {
      title: "Generative AI: Prompt Engineering Basics",
      description: "Completed an IBM authorized course on Prompt Engineering.",
      link: "https://coursera.org/verify/2ZUQRFNVP0TF",
      date: "Sep 12, 2025",
      issuer: "IBM (Coursera)",
    },
    {
      title: "Introduction to Front-End Development",
      description: "Meta authorized course covering HTML, CSS, JavaScript.",
      link: "https://coursera.org/verify/YBRG7PHYHRDZ",
      date: "Sep 11, 2025",
      issuer: "Meta (Coursera)",
    },
    {
      title: "Learn Firebase",
      description: "Scrimba course covering authentication, realtime DB, hosting.",
      link: "https://coursera.org/verify/91T4444LH0VD",
      date: "Sep 14, 2025",
      issuer: "Scrimba (Coursera)",
    },
  ];

  return (
    <>
      {/* ---------------- About + Skills ---------------- */}

      <section
        id="about"
        className="relative mt-10 flex items-center justify-center py-20 bg-[#1a1a1a] overflow-hidden"
      >
        {/* Neomorphic Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[#1a1a1a]"></div>
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : { scale: [1, 1.06, 1], opacity: [0.05, 0.08, 0.05] }
            }
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] will-change-transform"
          />
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : { scale: [1, 1.08, 1], opacity: [0.05, 0.09, 0.05] }
            }
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px] will-change-transform"
          />
        </div>

        {/* Background Video with Neomorphic Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
        >
          <source src={VideoSrc} type="video/mp4" />
        </video>

        {/* Neomorphic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]/90 z-0" />

        <div className="relative z-10 w-full">
          <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4 text-white">
              {/* Heading with animated underline */}
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  About Me
                </span>
                {/* Neomorphic Underline - Animated */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  style={{ transformOrigin: "center" }}
                  className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_3px_#0f0f0f,inset_-1px_-1px_3px_#252525]"
                />
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                  style={{ transformOrigin: "center" }}
                  className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[2px]"
                />
              </h2>

              {/* Neomorphic Main Card - Extruded */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                style={{ willChange: "transform, opacity" }}
                className="relative rounded-2xl bg-[#1a1a1a] shadow-[12px_12px_30px_#0f0f0f,-12px_-12px_30px_#252525] hover:shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] transition-shadow duration-500"
              >
                {/* Neomorphic Top Highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-t-2xl"></div>

                {/* Neomorphic Inner Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8 rounded-2xl bg-[#1a1a1a]">
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed tracking-wide">
                    I bring ideas to life through full-stack development blending
                    clean architecture, sleek interfaces, and purposeful design.
                    Whether it's a high-performing web app or a beautifully
                    responsive portfolio, I focus on delivering digital products
                    that look great and feel effortless to use.
                  </p>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <SkillCard title="Frontend" skills={frontendSkills} variants={itemVariants} />
                    <SkillCard title="Backend" skills={backendSkills} variants={itemVariants} />
                    <SkillCard title="Graphic Designing" skills={graphicDesigning} variants={itemVariants} />
                    <SkillCard title="Desktop Application Development" skills={desktopApplication} variants={itemVariants} />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ---------------- Education & Experience ---------------- */}

      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-4 text-white">
          <RevealOnScroll>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <EducationCard variants={itemVariants} />
              <ExperienceCard variants={itemVariants} />
            </motion.div>

            {/* Resume Button with Neomorphic Design */}
            <div className="mt-12 text-center">
              <motion.a
                href={Resume}
                download
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                transition={springSnappy}
                className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white 
                  bg-[#1a1a1a]
                  shadow-[10px_10px_25px_#0f0f0f,-10px_-10px_25px_#252525]
                  hover:shadow-[6px_6px_15px_#0f0f0f,-6px_-6px_15px_#252525]
                  active:shadow-[inset_6px_6px_15px_#0f0f0f,inset_-6px_-6px_15px_#252525]
                  transition-shadow duration-300
                  group/btn"
              >
                {/* Neomorphic Inner Glow */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>

                {/* Neomorphic Red Glow Effect */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(239,68,68,0.2)]"></span>

                <FaDownload className="relative text-xl group-hover/btn:animate-bounce" />
                <span className="relative">Download Resume</span>
              </motion.a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ---------------- Certificates ---------------- */}

      <section id="certificates" className="py-20 bg-[#1a1a1a]">
        <div className="max-w-5xl mx-auto px-4 text-white">
          <RevealOnScroll>
            {/* Heading with animated underline */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
              <span className="text-red-400">Certificates</span>
              {/* Neomorphic Underline - Animated */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                style={{ transformOrigin: "center" }}
                className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_3px_#0f0f0f,inset_-1px_-1px_3px_#252525]"
              />
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                style={{ transformOrigin: "center" }}
                className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[2px]"
              />
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {certificates.map((cert, index) => (
                <CertificateCard key={index} cert={cert} variants={itemVariants} />
              ))}
            </motion.div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Global Neomorphic Styles */}
      <style jsx>{`
        /* Neomorphic Base */
        .neu-base {
          background: #1a1a1a;
          border-radius: 1rem;
        }

        /* Neomorphic Extruded */
        .neu-extruded {
          box-shadow: 8px 8px 20px #0f0f0f, -8px -8px 20px #252525;
        }

        /* Neomorphic Inset */
        .neu-inset {
          box-shadow: inset 4px 4px 12px #0f0f0f, inset -4px -4px 12px #252525;
        }

        /* Neomorphic Pressed (Active State) */
        .neu-pressed {
          box-shadow: inset 6px 6px 16px #0f0f0f, inset -6px -6px 16px #252525;
        }

        /* Scoped neomorphic transition (replaces the global * selector) */
        .neu-transition {
          transition: box-shadow 0.3s ease, background 0.3s ease,
            transform 0.3s ease;
        }

        /* Neomorphic Shadow Variations */
        .shadow-neu-sm {
          box-shadow: 3px 3px 8px #0f0f0f, -3px -3px 8px #252525;
        }

        .shadow-neu-md {
          box-shadow: 8px 8px 20px #0f0f0f, -8px -8px 20px #252525;
        }

        .shadow-neu-lg {
          box-shadow: 12px 12px 30px #0f0f0f, -12px -12px 30px #252525;
        }

        .shadow-neu-inset {
          box-shadow: inset 4px 4px 12px #0f0f0f, inset -4px -4px 12px #252525;
        }

        /* Respect user motion preference */
        @media (prefers-reduced-motion: reduce) {
          .neu-transition {
            transition: none;
          }
        }
      `}</style>
    </>
  );
};