import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["ReactJS", "Kotlin", "Flutter"];
  const backendSkills = ["Node.js", "Python", "MongoDB"];
  const graphicDesigning = ["Adobe Illustrator", "Adobe Photoshop", "Corel Draw"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-black">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 text-white">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent drop-shadow-md">
            About Me
          </h2>

          {/* Summary Card */}
          <div className="rounded-2xl p-8 border border-red-500/30 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition-all duration-500 shadow-lg">
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Passionate developer with expertise in building scalable web & mobile applications,
              backed by strong UI/UX design and logic-based programming.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div className="rounded-xl p-6 border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-red-400">🎯 Frontend</h3>
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
                <h3 className="text-xl font-semibold mb-4 text-red-400">🔧 Backend</h3>
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
                <h3 className="text-xl font-semibold mb-4 text-red-400">🎨 Graphic Designing</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Education */}
            <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all shadow">
  <h3 className="text-xl font-bold mb-4 text-red-400">🎓 Education</h3>
  <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
    <li>
      <strong>B.S. in Information Technology</strong> — University of Gujrat (2021–2025)
    </li>
    <li>
      Developed a cross-platform <strong>mobile application</strong> as a Final Year Project using <strong>Flutter</strong> and <strong>Firebase</strong>.
    </li>
    <li>
      Worked as an <strong>Assistant Teacher</strong> for <strong>ReactJS</strong> and <strong>Tailwind CSS</strong>, helping peers and juniors with hands-on learning.
    </li>
  </ul>
</div>


            {/* Work Experience */}
            <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-all shadow">
              <h3 className="text-xl font-bold mb-4 text-red-400">💼 Experience</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <div>
                  <h4 className="font-semibold">Frontend Developer (2023 – Present)</h4>
                  <p>
                    Developed and maintained scalable frontends with ReactJS and Tailwind, focusing on user-friendly interfaces and responsive design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
