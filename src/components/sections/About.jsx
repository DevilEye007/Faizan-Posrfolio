import { RevealOnScroll } from "../RevealOnScroll";
import { FaDownload } from "react-icons/fa";
import Resume from './Resume.pdf';

export const About = () => {
  const frontendSkills = ["ReactJS", "Kotlin", "Flutter"];
  const backendSkills = ["Node.js", "Python", "MongoDB"];
  const graphicDesigning = ["Adobe Illustrator", "Adobe Photoshop", "Figma","Corel Draw"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-black">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 text-white">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            About Me
          </h2>

          {/* Summary Card */}
          <div className="rounded-2xl p-8 border border-red-500/30 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition-all duration-500 shadow-xl">
            <p className="text-gray-300 mb-8 text-lg leading-relaxed tracking-wide">
              I bring ideas to life through full-stack development blending clean architecture, sleek interfaces, and purposeful design. Whether it's a high-performing web app or a beautifully responsive portfolio, I focus on delivering digital products that not only look great but feel effortless to use.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div className="rounded-xl p-6 border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/20 text-red-300 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 hover:text-white transition shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/20 text-red-300 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 hover:text-white transition shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Graphic Design */}
              <div className="rounded-xl p-6 border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-red-400">Graphic Designing</h3>
                <div className="flex flex-wrap gap-2">
                  {graphicDesigning.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/20 text-red-300 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 hover:text-white transition shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Education */}
            <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-red-400">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm leading-relaxed">
                <li>
                  <strong>B.S. in Information Technology</strong> — University of Gujrat (2021–2025)
                </li>
                <li>
                  Final Year Project: Developed a cross-platform <strong>mobile application</strong> using <strong>Flutter</strong> and <strong>Firebase</strong> to solve real-time communication challenges.
                </li>
                <li>
                  Served as an <strong>Assistant Teacher</strong> for <strong>ReactJS</strong> and <strong>Tailwind CSS</strong>, helping peers build strong foundations in frontend development.
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-red-400">💼 Experience</h3>
              <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
                <div>
                  <h4 className="font-semibold text-white">Frontend Developer (2023 – Present)</h4>
                  <p>
                    Developed responsive and accessible UIs using <strong>ReactJS</strong> and <strong>Tailwind CSS</strong>. Optimized user flows, implemented animations, and collaborated in agile teams to deliver scalable, production-ready features.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Download Button */}
          <div className="mt-12 text-center">
            <a
              href={Resume}
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold py-3 px-7 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:scale-105"
            >
              <FaDownload className="text-xl" />
              Download Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
