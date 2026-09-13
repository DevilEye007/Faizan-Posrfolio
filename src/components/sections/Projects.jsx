import { useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import Invertorry from "../../assets/DA/INV.png";
import DataAnalytics from "../../assets/DA/DATA.png";
import CRM from "../../assets/DA/CRM.png";
import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* ==================== Horizontal Slider Component ==================== */
const ProjectSlider = ({ projects, renderCard, shouldReduceMotion }) => {
  const scrollRef = useRef(null);

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 360; // +gap
    el.scrollBy({
      left: direction * cardWidth,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  /* Detect at start / end for arrow states */
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
    : { type: "spring", stiffness: 300, damping: 22 };

  return (
    <div
      className="relative group/slider"
      data-at-start="true"
      data-at-end={projects.length <= 3 ? "true" : "false"}
    >
      {/* Left Arrow */}
      <motion.button
        onClick={() => scrollByAmount(-1)}
        whileHover={shouldReduceMotion ? {} : { scale: 1.1, x: -3 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
        transition={springSnappy}
        aria-label="Scroll left"
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-6 z-30
          w-12 h-12 rounded-full items-center justify-center
          bg-[#1a1a1a]
          shadow-[6px_6px_16px_#0f0f0f,-6px_-6px_16px_#252525]
          hover:shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]
          active:shadow-[inset_6px_6px_16px_#0f0f0f,inset_-6px_-6px_16px_#252525]
          text-red-300 hover:text-white
          transition-all duration-300 group/arrow
          opacity-0 group-data-[at-start=true]/slider:opacity-40
          group-data-[at-start=false]/slider:opacity-100"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover/arrow:opacity-100 transition-opacity duration-300" />
        <FaChevronLeft className="relative" />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        onClick={() => scrollByAmount(1)}
        whileHover={shouldReduceMotion ? {} : { scale: 1.1, x: 3 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
        transition={springSnappy}
        aria-label="Scroll right"
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-6 z-30
          w-12 h-12 rounded-full items-center justify-center
          bg-[#1a1a1a]
          shadow-[6px_6px_16px_#0f0f0f,-6px_-6px_16px_#252525]
          hover:shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]
          active:shadow-[inset_6px_6px_16px_#0f0f0f,inset_-6px_-6px_16px_#252525]
          text-red-300 hover:text-white
          transition-all duration-300 group/arrow
          opacity-0 group-data-[at-end=true]/slider:opacity-40
          group-data-[at-end=false]/slider:opacity-100"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover/arrow:opacity-100 transition-opacity duration-300" />
        <FaChevronRight className="relative" />
      </motion.button>

      {/* Scroll Track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            data-card
            className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[55%] lg:w-[calc(33.333%-1rem)]"
          >
            {renderCard(project, index)}
          </div>
        ))}
      </div>

      {/* Edge Fades */}
      <div className="pointer-events-none absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-[#1a1a1a] to-transparent opacity-60 group-data-[at-start=true]/slider:opacity-0 transition-opacity duration-300" />
      <div className="pointer-events-none absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent opacity-60 group-data-[at-end=true]/slider:opacity-0 transition-opacity duration-300" />
    </div>
  );
};

/* ==================== Main Projects Component ==================== */

export const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  const webProjects = [
    {
      title: "AI Content Generator",
      description:
        "AI-powered content & SEO writer that helps you generate engaging blog posts, ads, and social captions. Boosts creativity and saves time with smart, high-quality content suggestions.",
      tech: ["HTML", "TailwindCSS", "JavaScript", "Python", "FlaskAPI"],
      link: "https://gacg.vercel.app/",
    },
    {
      title: "AI Quiz Generator",
      description:
        "An AI-driven quiz generator that creates customized quizzes based on user-defined topics and difficulty levels, perfect for educators and learners.",
      tech: ["HTML", "TailwindCSS", "JavaScript", "Python", "Gemini Prompt"],
      link: "https://neuro-quiz.vercel.app/",
    },
    {
      title: "E-Commerce Store",
      description:
        "Roucha Cielo is a modern online fashion store built for seamless shopping, featuring real-time cart updates, secure checkout, and elegant UI.",
      tech: ["React", "Express", "MongoDB", "TailwindCSS"],
      link: "https://rouchacielo.com/",
    },
    {
      title: "Marks Management System",
      description:
        "A powerful academic tool that allows schools to manage student records, automate grading, and export to Excel in one click.",
      tech: ["ReactJS", "TailwindCSS", "MS Excel"],
      link: "https://marks-managmenet-system.vercel.app/",
    },
    {
      title: "Invoice Generator",
      description:
        "Create sleek, printable invoices with auto calculated totals and itemized entries perfect for freelancers and small businesses.",
      tech: ["ReactJS", "TailwindCSS", "PDF Generator"],
      link: "https://faizan-invoice-generator.vercel.app/",
    },
    {
      title: "Pixel Crafter Portfolio",
      description:
        "Creative studio portfolio showcasing high end graphic design and video editing work built with smooth transitions and custom layouts.",
      tech: ["ReactJS", "TailwindCSS"],
      link: "https://pixelcrafter.vercel.app/",
    },
    {
      title: "Expense Tracker",
      description:
        "Track your expenses effortlessly with this intuitive app that allows you to add, edit, and delete transactions, all while visualizing your spending habits.",
      tech: ["ReactJS", "TailwindCSS"],
      link: "https://expense-tracker-faiz.vercel.app/",
    },
  ];

  const gamingProjects = [
    {
      title: "Tic Tac Toe",
      description:
        "Challenge a friend or play solo with a sleek, responsive design. Enjoy smooth gameplay, vibrant animations, and a fun user experience.",
      tech: ["ReactJS", "TailwindCSS", "Bot"],
      link: "https://tic-tac-toe-game-faiz.vercel.app/",
    },
  ];

  const desktopApplication = [
    {
      title: "Inventory Management System",
      description:
        "A desktop application to efficiently manage and track inventory levels, orders, sales, and deliveries with a user-friendly interface.",
      tech: ["PYQT5", "SQLite"],
      link: "https://github.com/DevilEye007/Inventory-Management-System/releases/download/v1.0.0/main_window.exe",
      image: Invertorry,
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "A comprehensive desktop dashboard for visualizing and analyzing data through interactive charts and graphs, aiding in informed decision-making.",
      tech: ["PYQT5", "Charts", "Data Science Tool"],
      link: "https://github.com/DevilEye007/Data-Analytics-Dashboard/releases/download/Data-Analytics-Dashboard/Data.Analytics.Dashboard.exe",
      image: DataAnalytics,
    },
    {
      title: "CRM System",
      description:
        "A customer relationship management (CRM) desktop application designed to help businesses manage interactions with current and potential customers effectively.",
      tech: ["PYQT5", "Charts", "SQLite"],
      link: "https://github.com/DevilEye007/CRM-System/releases/download/CRM_Prov1.0.0/CRM.Pro.exe",
      image: CRM,
    },
  ];

  const mobileApplication = [
    {
      title: "Expense Tracker Mobile App",
      description:
        "An intuitive mobile app to help users track their daily expenses, categorize spending, and visualize financial habits with easy-to-use features.",
      tech: ["Flutter", "Dart", "SQLite"],
      link: "https://github.com/DevilEye007/Fin-Track/releases/download/Expence_Tracker/app-release.apk",
    },
  ];

  /* ---------------- Card Renderers ---------------- */

  const renderProjectCard = (project, index) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.01 }
          : { type: "spring", stiffness: 100, damping: 18, delay: index * 0.05 }
      }
      whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
      style={{ willChange: "transform, opacity" }}
      className="relative group h-full rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] transition-shadow duration-300"
    >
      <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>

      <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#1e1e1e] flex flex-col h-full">
        <h3 className="text-2xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-5 leading-relaxed text-justify flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, key) => (
            <span
              key={key}
              className="relative px-3 py-1 rounded-full text-xs font-medium text-red-300 transition-all duration-300
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
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-1 text-sm font-semibold text-red-400 hover:text-white transition-colors duration-300 group/link"
        >
          View Project →
          <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-red-400 group-hover/link:w-full transition-all duration-300"></span>
        </a>
      </div>
    </motion.div>
  );

  const renderProjectCardDA = (project, index) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.01 }
          : { type: "spring", stiffness: 100, damping: 18, delay: index * 0.05 }
      }
      whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
      style={{ willChange: "transform, opacity" }}
      className="relative group h-full rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] transition-shadow duration-300"
    >
      <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>

      <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#1e1e1e] flex flex-col h-full">
        {project.image && (
          <div className="relative mb-4 rounded-xl overflow-hidden bg-[#1a1a1a] shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525] group-hover:shadow-[inset_2px_2px_4px_#0f0f0f,inset_-2px_-2px_4px_#252525] transition-shadow duration-300">
            <img
              src={project.image}
              alt={`${project.title} Screenshot`}
              className="w-full h-40 object-cover rounded-xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        )}

        <h3 className="text-2xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm mb-5 leading-relaxed text-justify flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, key) => (
            <span
              key={key}
              className="relative px-3 py-1 rounded-full text-xs font-medium text-red-300 transition-all duration-300
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

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-1 text-sm font-semibold text-red-400 hover:text-white transition-colors duration-300 group/link"
        >
          Download for Experience →
          <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-red-400 group-hover/link:w-full transition-all duration-300"></span>
        </a>
      </div>
    </motion.div>
  );

  const renderProjectCardMob = (project, index) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        shouldReduceMotion
          ? { duration: 0.01 }
          : { type: "spring", stiffness: 100, damping: 18, delay: index * 0.05 }
      }
      whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
      style={{ willChange: "transform, opacity" }}
      className="relative group h-full rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] transition-shadow duration-300"
    >
      <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>

      <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#1e1e1e] flex flex-col h-full">
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-[#1a1a1a] shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525] border border-green-500/20">
          📱 Mobile
        </div>

        <h3 className="text-2xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm mb-5 leading-relaxed text-justify flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, key) => (
            <span
              key={key}
              className="relative px-3 py-1 rounded-full text-xs font-medium text-red-300 transition-all duration-300
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

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-1 text-sm font-semibold text-red-400 hover:text-white transition-colors duration-300 group/link"
        >
          Download Application →
          <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-red-400 group-hover/link:w-full transition-all duration-300"></span>
        </a>
      </div>
    </motion.div>
  );

  /* ---------------- Section Heading Component ---------------- */
  const SectionHeading = ({ children }) => (
    <div className="relative inline-block mb-6">
      <h3 className="text-2xl font-bold text-red-400 relative">{children}</h3>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{ transformOrigin: "left" }}
        className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"
      />
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        style={{ transformOrigin: "left" }}
        className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[1px]"
      />
    </div>
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-[#1a1a1a] text-white relative overflow-hidden"
    >
      {/* Neomorphic Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]"></div>

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

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <Helmet>
        <title>Projects | Faizan Sultan Portfolio</title>
        <meta
          name="description"
          content="Explore Faizan Sultan's ReactJS projects including web apps, UI designs, and frontend work."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        {/* Heading */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block">
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                Projects
              </span>
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
            </h2>

            <p className="text-gray-400 text-base max-w-3xl mx-auto relative inline-block px-6 py-2 rounded-full bg-[#1a1a1a] shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]">
              A showcase of my latest creations from full-stack web apps to
              interactive browser games built with modern frameworks, clean code,
              and a passion for design.
            </p>
          </div>
        </RevealOnScroll>

        {/* Android Applications */}
        <RevealOnScroll>
          <div className="mb-16">
            <SectionHeading>📱 Android Applications</SectionHeading>
            <ProjectSlider
              projects={mobileApplication}
              renderCard={renderProjectCardMob}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        </RevealOnScroll>

        {/* Web Projects */}
        <RevealOnScroll>
          <div className="mb-16">
            <SectionHeading>🌐 Web Applications</SectionHeading>
            <ProjectSlider
              projects={webProjects}
              renderCard={renderProjectCard}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        </RevealOnScroll>

        {/* Gaming Projects */}
        <RevealOnScroll>
          <div className="mb-16">
            <SectionHeading>🎮 Mini Games</SectionHeading>
            <ProjectSlider
              projects={gamingProjects}
              renderCard={renderProjectCard}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        </RevealOnScroll>

        {/* Desktop Applications */}
        <RevealOnScroll>
          <div>
            <SectionHeading>💻 Desktop Management Software</SectionHeading>
            <ProjectSlider
              projects={desktopApplication}
              renderCard={renderProjectCardDA}
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        </RevealOnScroll>
      </div>

      {/* Global Neomorphic Styles */}
      <style jsx>{`
        .neu-base {
          background: #1a1a1a;
          border-radius: 1rem;
        }

        .neu-extruded {
          box-shadow: 8px 8px 20px #0f0f0f, -8px -8px 20px #252525;
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
};