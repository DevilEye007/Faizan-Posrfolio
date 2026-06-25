import { RevealOnScroll } from "../RevealOnScroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profileImg from "./me.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-[#1a1a1a] text-white relative overflow-hidden"
    >
      {/* Neomorphic Background - Soft ambient glow instead of harsh shadows */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px]"></div>
      </div>

      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 text-center lg:text-left">

          {/* Profile Image with Neomorphic Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative group mt-16 md:mt-20
             w-52 h-72
             sm:w-64 sm:h-80
             md:w-80 md:h-[28rem]
             lg:w-96 lg:h-[32rem]
             rounded-3xl
             transition-all duration-500
             hover:scale-[1.02]"
          >
            {/* Neomorphic Outer Shadow - Soft extruded effect */}
            <div className="absolute -inset-2 rounded-3xl bg-[#1a1a1a] shadow-[20px_20px_60px_#0f0f0f,-20px_-20px_60px_#252525]"></div>
            
            {/* Neomorphic Inner Shadow - Soft inset effect */}
            <div className="absolute -inset-2 rounded-3xl bg-[#1a1a1a] shadow-[inset_2px_2px_10px_#0f0f0f,inset_-2px_-2px_10px_#252525] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Image Container with Neomorphic Effect */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#1a1a1a] 
              shadow-[inset_4px_4px_15px_#0f0f0f,inset_-4px_-4px_15px_#252525]
              group-hover:shadow-[inset_2px_2px_8px_#0f0f0f,inset_-2px_-2px_8px_#252525]
              transition-shadow duration-500">
              
              <img
                src={profileImg}
                alt="Faizan's Profile"
                className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
              />

              {/* Neomorphic Overlay - Soft pressed effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Subtle Highlight - Neomorphic light catch */}
              <div className="absolute top-2 left-2 w-20 h-20 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-sm"></div>
              <div className="absolute bottom-2 right-2 w-16 h-16 rounded-full bg-gradient-to-tl from-black/20 to-transparent blur-sm"></div>
            </div>

            {/* Neomorphic Decorative Orbs - Pressed dots */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#1a1a1a] shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-[#1a1a1a] shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]"></div>
          </motion.div>

          {/* Text Content with Neomorphic Design */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="z-10 max-w-lg sm:max-w-xl relative"
          >
            {/* Neomorphic Card Behind Text - Soft extruded panel */}
            <div className="absolute -inset-8 rounded-3xl bg-[#1a1a1a] shadow-[10px_10px_30px_#0f0f0f,-10px_-10px_30px_#252525] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent relative z-10">
                  Faizan Sultan
                </span>
                {/* Neomorphic Underline - Soft pressed effect */}
                <span className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_3px_#0f0f0f,inset_-1px_-1px_3px_#252525]"></span>
                <span className="absolute -bottom-2 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-red-500/0 via-red-500/30 to-red-500/0 blur-[2px]"></span>
              </span>
            </h1>

            <div className="relative">
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
                  className="text-red-400 relative"
                />
              </p>
              
              {/* Neomorphic Glow Under TypeAnimation */}
              <div className="absolute -bottom-2 left-0 w-32 h-[2px] rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_3px_#0f0f0f,inset_-1px_-1px_3px_#252525]"></div>
            </div>

            {/* Neomorphic Text Card - Soft inset/outset effect */}
            <div className="relative p-6 rounded-2xl bg-[#1a1a1a] 
              shadow-[inset_2px_2px_8px_#0f0f0f,inset_-2px_-2px_8px_#252525]
              hover:shadow-[inset_1px_1px_4px_#0f0f0f,inset_-1px_-1px_4px_#252525]
              transition-shadow duration-300 mb-8">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify relative">
                I build performant full-stack applications with clean code,
                modern design, and optimized user flows. By uniting frontend
                elegance with backend strength, I deliver systems that are
                scalable, maintainable, and genuinely enjoyable to use.
              </p>
              
              {/* Neomorphic Inner Highlights */}
              <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-gradient-to-l from-black/20 to-transparent"></div>
            </div>

            {/* Buttons with Neomorphic Design */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">

              {/* Primary Neomorphic Button - Extruded */}
              <a
                href="#projects"
                className="relative px-8 py-3 rounded-xl font-semibold text-white 
                bg-[#1a1a1a]
                shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525]
                hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525]
                hover:bg-[#1e1e1e]
                active:shadow-[inset_4px_4px_12px_#0f0f0f,inset_-4px_-4px_12px_#252525]
                transition-all duration-300
                overflow-hidden group/btn"
              >
                {/* Neomorphic Press Effect Overlay */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <span>View Projects</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>

              {/* Secondary Neomorphic Button - Inset */}
              <a
                href="#about"
                className="relative px-6 py-3 rounded-xl font-semibold text-red-400
                bg-[#1a1a1a]
                shadow-[inset_2px_2px_8px_#0f0f0f,inset_-2px_-2px_8px_#252525]
                hover:shadow-[inset_1px_1px_4px_#0f0f0f,inset_-1px_-1px_4px_#252525]
                hover:bg-[#1e1e1e]
                active:shadow-[inset_3px_3px_10px_#0f0f0f,inset_-3px_-3px_10px_#252525]
                transition-all duration-300
                overflow-hidden group/btn2"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover/btn2:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">About Me</span>
              </a>

              {/* Tertiary Neomorphic Button - Flat with hover */}
              <a
                href="#contact"
                className="relative px-6 py-3 rounded-xl font-semibold text-red-400
                bg-[#1a1a1a]
                shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525]
                hover:shadow-[2px_2px_6px_#0f0f0f,-2px_-2px_6px_#252525]
                hover:bg-[#1e1e1e]
                active:shadow-[inset_4px_4px_12px_#0f0f0f,inset_-4px_-4px_12px_#252525]
                transition-all duration-300
                overflow-hidden group/btn3"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover/btn3:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Contact Me</span>
              </a>

            </div>
          </motion.div>
        </div>
      </RevealOnScroll>

      {/* Global Neomorphism Styles */}
      <style jsx>{`
        /* Neomorphic Base Styles */
        .neu-base {
          background: #1a1a1a;
          border-radius: 1.5rem;
          transition: all 0.3s ease;
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
        
        /* Neomorphic Hover Glow */
        .neu-glow {
          box-shadow: 8px 8px 20px #0f0f0f, -8px -8px 20px #252525, 0 0 30px rgba(239, 68, 68, 0.1);
        }
        
        /* Smooth Neomorphic Transitions */
        * {
          transition: box-shadow 0.3s ease, background 0.3s ease, transform 0.3s ease;
        }

        /* Custom Scrollbar - Neomorphic Style */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
          box-shadow: inset 2px 2px 6px #0f0f0f, inset -2px -2px 6px #252525;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #2a2a2a;
          box-shadow: 3px 3px 8px #0f0f0f, -3px -3px 8px #252525;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
      `}</style>
    </section>
  );
};