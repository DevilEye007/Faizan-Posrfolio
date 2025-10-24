import { RevealOnScroll } from "../RevealOnScroll";
import Invertorry from "../../assets/DA/INV.png";
import DataAnalytics from "../../assets/DA/DATA.png";
import CRM from "../../assets/DA/CRM.png";

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
      className="bg-white/5 border border-red-500/20 rounded-2xl p-6 shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
    >
      <h3 className="text-2xl font-bold text-red-400 mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-5 leading-relaxed text-justify">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, key) => (
          <span
            key={key}
            className="bg-red-500/10 text-red-300 py-1 px-3 rounded-full text-xs font-medium hover:bg-red-500/20 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-300 hover:text-white text-sm font-semibold inline-flex items-center gap-1 transition-all hover:underline"
      >
        View Project →
      </a>
    </div>
  );

  const renderProjectCardDA = (project, index) => (
    <div
      key={index}
      className="bg-white/5 border border-red-500/20 rounded-2xl p-6 shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
    >
      {project.image && (
        <div className="mb-4">
          <img
            src={project.image}
            alt={`${project.title} Screenshot`}
            className="w-full h-36 object-cover rounded-lg border border-red-500/10 shadow-md hover:shadow-red-500/20 transition-all"
          />
        </div>
      )}
      <h3 className="text-2xl font-bold text-red-400 mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-5 leading-relaxed text-justify">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, key) => (
          <span
            key={key}
            className="bg-red-500/10 text-red-300 py-1 px-3 rounded-full text-xs font-medium hover:bg-red-500/20 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-300 hover:text-white text-sm font-semibold inline-flex items-center gap-1 transition-all hover:underline"
      >
        Download for Experience →
      </a>
    </div>
  );

  const renderProjectCardMob = (project, index) => (
    <div
      key={index}
      className="bg-white/5 border border-red-500/20 rounded-2xl p-6 shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
    >
      <h3 className="text-2xl font-bold text-red-400 mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm mb-5 leading-relaxed text-justify">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, key) => (
          <span
            key={key}
            className="bg-red-500/10 text-red-300 py-1 px-3 rounded-full text-xs font-medium hover:bg-red-500/20 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-300 hover:text-white text-sm font-semibold inline-flex items-center gap-1 transition-all hover:underline"
      >
        Download Application →
      </a>
    </div>
  );

  return (
    <section
      id="projects"
      className="min-h-screen md:flex md:items-center md:justify-center py-12 md:py-20 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text drop-shadow-lg">
            Projects
          </h2>
          <p className="text-center text-gray-400 mb-12 text-base max-w-3xl mx-auto">
            A showcase of my latest creations from full-stack web apps to
            interactive browser games built with modern frameworks, clean code,
            and a passion for design.
          </p>

          {/* Mobile Applications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-500 mb-6 border-b border-red-500/30 pb-2">
              Android Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileApplication.map(renderProjectCardMob)}
            </div>
          </div>

          {/* Web Applications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-red-500 mb-6 border-b border-red-500/30 pb-2">
              Web Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webProjects.map(renderProjectCard)}
            </div>
          </div>

          {/* Gaming Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-red-500 mb-6 border-b border-red-500/30 pb-2">
              Mini Games
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gamingProjects.map(renderProjectCard)}
            </div>
          </div>

          {/* Desktop Applications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-red-500 mb-6 border-b border-red-500/30 pb-2">
              Desktop Management Software
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {desktopApplication.map(renderProjectCardDA)}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
