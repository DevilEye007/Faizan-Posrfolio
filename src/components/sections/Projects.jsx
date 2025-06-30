import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-red-500/30
              hover:shadow-[10px_10px_40px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">E-Commerce Store</h3>
              <p className="text-gray-400 mb-4">
                ​Roucha Cielo is an online retailer specializing in the latest
                T-shirt trends, offering high-quality products at competitive
                prices. They emphasize fast shipping, secure payments, and
                excellent customer service.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Express", "MongoDB", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-red-500/10 text-red-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-red-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                href="https://rouchacielo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-300 hover:text-red-500 transition-colors my-4"
              >
                View Project →
              </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
