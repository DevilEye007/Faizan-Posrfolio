import { RevealOnScroll } from "../RevealOnScroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profileImg from "./me.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-black text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 blur-[140px] rounded-full"></div>

      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 text-center lg:text-left">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative group mt-16 md:mt-20
             w-52 h-72
             sm:w-64 sm:h-80
             md:w-80 md:h-[28rem]
             lg:w-96 lg:h-[32rem]
             rounded-2xl p-[3px] bg-gradient-to-br from-red-600 via-gray-800 to-red-600
             shadow-[0_20px_50px_rgba(255,0,0,0.35)]
             transition-all duration-500"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-black relative">
              <img
                src={profileImg}
                alt="Faizan's Profile"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
              />

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="z-10 max-w-lg sm:max-w-xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Faizan Sultan
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6">
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "Application Developer",
                  1500,
                  "Python Developer",
                  1500,
                  "AI Prompt Engineer",
                  1500,
                  "Portfolio Developer",
                  1500,
                  "UI/UX Designer",
                  1500,
                ]}
                speed={40}
                repeat={Infinity}
                className="text-red-500"
              />
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 text-justify">
              I build performant full-stack applications with clean code,
              modern design, and optimized user flows. By uniting frontend
              elegance with backend strength, I deliver systems that are
              scalable, maintainable, and genuinely enjoyable to use.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">

              <a
                href="#projects"
                className="relative px-8 py-3 rounded-xl font-semibold text-white 
                bg-gradient-to-r from-red-700 to-red-500
                hover:from-red-600 hover:to-red-400
                transition duration-300 hover:scale-105
                shadow-lg shadow-red-600/30"
              >
                View Projects
              </a>

              <a
                href="#about"
                className="border border-red-500 text-red-400 px-6 py-3 rounded-xl 
                font-semibold transition duration-300
                hover:bg-red-600/10 hover:text-white hover:scale-105"
              >
                About Me
              </a>

              <a
                href="#contact"
                className="border border-red-500 text-red-400 px-6 py-3 rounded-xl 
                font-semibold transition duration-300
                hover:bg-red-600/10 hover:text-white hover:scale-105"
              >
                Contact Me
              </a>

            </div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};