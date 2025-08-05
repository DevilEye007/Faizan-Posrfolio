import { RevealOnScroll } from "../RevealOnScroll";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import profileImg from './me.jpg';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-black text-white relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center gap-16 text-center md:text-left">
          {/* Profile Image with animated border and glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative group mt-[100px] md:mt-0 w-64 h-80 md:w-72 md:h-96 rounded-2xl p-[3px] bg-gradient-to-br from-red-600 via-gray-800 to-red-600 shadow-[0_20px_40px_rgba(255,0,0,0.3)] hover:shadow-red-600/50 transition-all duration-500"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
              <img
                src={profileImg}
                alt="Faizan's Profile"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="z-10 max-w-xl"
          >
            <h1 className="text-3xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-700 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-xl">
              Hi, I'm Faizan Sultan
            </h1>

            <p className="text-xl md:text-2xl font-extrabold mb-6">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 1500,
                  'Frontend Developer', 1500,
                  'Backend Developer', 1500,
                  'Application Developer', 1500,
                  'Portfolio Developer', 1500,
                  'UI/UX Designer', 1500,
                ]}
                speed={40}
                repeat={Infinity}
                className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent inline-block"
              />
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              I build performant full-stack applications with clean code, modern design, and optimized user flows. By uniting frontend elegance with backend strength, I deliver systems that are scalable, maintainable, and genuinely enjoyable to use.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="bg-gradient-to-tr from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_10px_25px_rgba(255,0,0,0.3)]"
              >
                View Projects
              </a>
              <a
                href="#about"
                className="border border-red-500 text-red-400 py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:bg-red-600/10 hover:text-white hover:scale-105"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="border border-red-500 text-red-400 py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:bg-red-600/10 hover:text-white hover:scale-105"
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
