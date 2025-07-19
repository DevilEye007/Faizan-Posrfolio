import { RevealOnScroll } from "../RevealOnScroll";
import { TypeAnimation } from 'react-type-animation';
import profileImg from './me.jpg';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          {/* Profile Image with stylish border and glow */}
          <div className="relative group mt-[100px] md:mt-0 w-64 h-80 md:w-72 md:h-96 rounded-2xl p-[3px] bg-gradient-to-br from-red-600 via-gray-800 to-red-600 shadow-[0_20px_40px_rgba(255,0,0,0.3)] hover:shadow-red-600/50 transition-all duration-500">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
              <img
                src={profileImg}
                alt="Faizan's Profile"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[0.5deg]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </div>

          {/* Text Content */}
          <div className="z-10 max-w-xl animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-red-700 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
              Hi, I'm Faizan
            </h1>

            <p className="text-xl md:text-2xl font-extrabold mb-6 text-white">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 1500,
                  'Frontend Developer', 1500,
                  'Backend Developer', 1500,
                  'Application Developer', 1500,
                  'Attractive Portfolio Developer', 1500,
                  'UI/UX Designer', 1500,
                ]}
                speed={40}
                repeat={Infinity}
                className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent inline-block"
              />
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I’m a full-stack developer with a focus on building beautiful, performant, and intuitive applications that solve real-world problems with delightful user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="bg-red-700 hover:bg-red-600 text-white py-3 px-6 rounded-xl font-medium transition transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,50,50,0.4)] duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-red-500/60 text-red-400 py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:bg-red-500/10 hover:text-white hover:shadow-md"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
