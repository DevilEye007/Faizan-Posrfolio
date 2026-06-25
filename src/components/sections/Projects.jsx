import { RevealOnScroll } from "../RevealOnScroll";
import Invertorry from "../../assets/DA/INV.png";
import DataAnalytics from "../../assets/DA/DATA.png";
import CRM from "../../assets/DA/CRM.png";
import { Helmet } from "react-helmet-async";

export const Projects = () => {
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
      tech: ["PYQT5", "Charts","SQLite"],
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

  const renderProjectCard = (project, index) => (
    <div
      key={index}
      className="relative group rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] hover:-translate-y-2 transition-all duration-300"
    >
      {/* Neomorphic Top Highlight */}
      <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
      
      {/* Neomorphic Inner Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Neomorphic Border Glow on Hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
      
      <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-all duration-300 group-hover:bg-[#1e1e1e]">
        <h3 className="text-2xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-5 leading-relaxed text-justify">
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
          className="relative inline-flex items-center gap-1 text-sm font-semibold text-red-400 hover:text-white transition-all duration-300 group/link"
        >
          View Project →
          <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-red-400 group-hover/link:w-full transition-all duration-300"></span>
        </a>
      </div>
    </div>
  );

  const renderProjectCardDA = (project, index) => (
    <div
      key={index}
      className="relative group rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] hover:-translate-y-2 transition-all duration-300"
    >
      {/* Neomorphic Top Highlight */}
      <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
      
      {/* Neomorphic Inner Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Neomorphic Border Glow on Hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
      
      <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-all duration-300 group-hover:bg-[#1e1e1e]">
        
        {/* Project Screenshot with Neomorphic Frame */}
        {project.image && (
          <div className="relative mb-4 rounded-xl overflow-hidden
            bg-[#1a1a1a]
            shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]
            group-hover:shadow-[inset_2px_2px_4px_#0f0f0f,inset_-2px_-2px_4px_#252525]
            transition-all duration-300">
            <img
              src={project.image}
              alt={`${project.title} Screenshot`}
              className="w-full h-35 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
            {/* Neomorphic Overlay on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        )}

        <h3 className="text-2xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm mb-5 leading-relaxed text-justify">
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
          className="relative inline-flex items-center gap-1 text-sm font-semibold text-red-400 hover:text-white transition-all duration-300 group/link"
        >
          Download for Experience →
          <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-red-400 group-hover/link:w-full transition-all duration-300"></span>
        </a>
      </div>
    </div>
  );

  const renderProjectCardMob = (project, index) => (
    <div
      key={index}
      className="relative group rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] hover:-translate-y-2 transition-all duration-300"
    >
      {/* Neomorphic Top Highlight */}
      <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
      
      {/* Neomorphic Inner Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Neomorphic Border Glow on Hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
      
      <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-all duration-300 group-hover:bg-[#1e1e1e]">
        
        {/* Mobile App Icon Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white
          bg-[#1a1a1a]
          shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]
          border border-green-500/20">
          📱 Mobile
        </div>

        <h3 className="text-2xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm mb-5 leading-relaxed text-justify">
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
          className="relative inline-flex items-center gap-1 text-sm font-semibold text-red-400 hover:text-white transition-all duration-300 group/link"
        >
          Download Application →
          <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-red-400 group-hover/link:w-full transition-all duration-300"></span>
        </a>
      </div>
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

      <Helmet>
        <title>Projects | Faizan Sultan Portfolio</title>
        <meta name="description" content="Explore Faizan Sultan's ReactJS projects including web apps, UI designs, and frontend work." />
      </Helmet>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Heading with Neomorphic Design */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
              Projects
            </span>
            {/* Neomorphic Underline */}
            <span className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_3px_#0f0f0f,inset_-1px_-1px_3px_#252525]"></span>
            <span className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[2px]"></span>
          </h2>

          <p className="text-gray-400 text-base max-w-3xl mx-auto relative inline-block px-6 py-2 rounded-full
            bg-[#1a1a1a]
            shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]">
            A showcase of my latest creations from full-stack web apps to
            interactive browser games built with modern frameworks, clean code,
            and a passion for design.
          </p>
        </div>

        {/* Android Applications */}
        <div className="mb-16">
          <div className="relative inline-block mb-6">
            <h3 className="text-2xl font-bold text-red-400 relative">
              📱 Android Applications
            </h3>
            {/* Neomorphic Underline */}
            <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
            <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[1px]"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileApplication.map(renderProjectCardMob)}
          </div>
        </div>

        {/* Web Projects */}
        <div className="mb-16">
          <div className="relative inline-block mb-6">
            <h3 className="text-2xl font-bold text-red-400 relative">
              🌐 Web Applications
            </h3>
            <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
            <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[1px]"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map(renderProjectCard)}
          </div>
        </div>

        {/* Gaming Projects */}
        <div className="mb-16">
          <div className="relative inline-block mb-6">
            <h3 className="text-2xl font-bold text-red-400 relative">
              🎮 Mini Games
            </h3>
            <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
            <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[1px]"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gamingProjects.map(renderProjectCard)}
          </div>
        </div>

        {/* Desktop Application Projects */}
        <div>
          <div className="relative inline-block mb-6">
            <h3 className="text-2xl font-bold text-red-400 relative">
              💻 Desktop Management Software
            </h3>
            <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
            <span className="absolute -bottom-2 left-0 w-full h-[2px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[1px]"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {desktopApplication.map(renderProjectCardDA)}
          </div>
        </div>
      </div>

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
};