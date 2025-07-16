import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text drop-shadow-lg">
            🚀 Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* === Project Card Template === */}
            {[
              {
                title: "E-Commerce Store",
                description:
                  "Roucha Cielo is an online retailer offering the latest T-shirt trends with fast shipping, secure payments, and top-tier customer service.",
                tech: ["React", "Express", "MongoDB", "TailwindCSS"],
                link: "https://rouchacielo.com/",
              },
              {
                title: "Marks Management System",
                description:
                  "A web app for managing student records and calculating marks with a responsive UI and Excel data export.",
                tech: ["ReactJS", "TailwindCSS", "MS Excel"],
                link: "https://marks-managmenet-system.vercel.app/",
              },
              {
                title: "Invoice Generator",
                description:
                  "Create printable invoices quickly with auto-calculation and itemized lists using this sleek web app.",
                tech: ["ReactJS", "TailwindCSS", "PDF Converter"],
                link: "https://faizan-invoice-generator.vercel.app/",
              },
              {
                title: "Pixel Crafter Portfolio",
                description:
                  "Pixel Crafter is a creative studio offering graphic design and video editing services for brands and businesses.",
                tech: ["ReactJS", "TailwindCSS"],
                link: "https://pixelcrafter.vercel.app/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white/5 border border-red-500/20 rounded-2xl p-6 shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-red-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-500/10 text-red-400 py-1 px-3 rounded-full text-xs font-medium hover:bg-red-500/20 hover:shadow-md transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-300 hover:text-white text-sm font-semibold inline-flex items-center gap-1 transition-all duration-300 hover:underline hover:underline-offset-4"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
