import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative bg-[#1a1a1a] text-white pt-16 pb-8 px-6 border-t border-red-500/10 overflow-hidden">
      
      {/* Neomorphic Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]"></div>
        
        {/* Soft Ambient Glows */}
        <div className="absolute w-[500px] h-[500px] bg-red-600/5 blur-[140px] rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-[300px] h-[300px] bg-purple-600/5 blur-[120px] rounded-full top-0 right-0"></div>
        
        {/* Neomorphic Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">

        {/* Brand + Intro - Neomorphic Card */}
        <div className="relative group rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] hover:-translate-y-1 transition-all duration-300">
          
          {/* Neomorphic Top Highlight */}
          <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
          
          {/* Neomorphic Inner Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-all duration-300 group-hover:bg-[#1e1e1e]">
            <h3 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              Faizan Sultan
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed text-justify group-hover:text-gray-300 transition-colors duration-300">
              Full-stack developer turning ideas into elegant, efficient, and scalable digital experiences.
            </p>
          </div>
        </div>

        {/* Quick Navigation - Neomorphic Card */}
        <div className="relative group rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] hover:-translate-y-1 transition-all duration-300">
          
          {/* Neomorphic Top Highlight */}
          <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
          
          {/* Neomorphic Inner Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-all duration-300 group-hover:bg-[#1e1e1e]">
            <h4 className="text-xl font-semibold text-red-400 mb-4 group-hover:text-red-300 transition-colors duration-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {["Home", "About", "Projects", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="relative inline-block hover:text-red-400 transition-all duration-300 group/link"
                  >
                    {link}
                    {/* Neomorphic Underline */}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-red-400 group-hover/link:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media - Neomorphic Card */}
        <div className="relative group rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] hover:-translate-y-1 transition-all duration-300">
          
          {/* Neomorphic Top Highlight */}
          <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
          
          {/* Neomorphic Inner Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative p-6 rounded-2xl bg-[#1a1a1a] transition-all duration-300 group-hover:bg-[#1e1e1e]">
            <h4 className="text-xl font-semibold text-red-400 mb-4 group-hover:text-red-300 transition-colors duration-300">
              Connect With Me
            </h4>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/faizan-sultan-302b1b24b"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300 group/link
                  bg-[#1a1a1a]
                  shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]
                  hover:shadow-[1px_1px_4px_#0f0f0f,-1px_-1px_4px_#252525]
                  hover:bg-[#1e1e1e]
                  active:shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]"
              >
                {/* Neomorphic Inner Glow */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                <FaLinkedinIn className="relative text-xl group-hover/link:scale-110 transition-transform duration-300" />
              </a>
              
              <a
                href="https://github.com/DevilEye007"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300 group/link
                  bg-[#1a1a1a]
                  shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]
                  hover:shadow-[1px_1px_4px_#0f0f0f,-1px_-1px_4px_#252525]
                  hover:bg-[#1e1e1e]
                  active:shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]"
              >
                {/* Neomorphic Inner Glow */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                <FaGithub className="relative text-xl group-hover/link:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Map Location - Neomorphic Card */}
        <div className="relative group rounded-2xl bg-[#1a1a1a] shadow-[8px_8px_20px_#0f0f0f,-8px_-8px_20px_#252525] hover:shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525] hover:-translate-y-1 transition-all duration-300">
          
          {/* Neomorphic Top Highlight */}
          <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"></div>
          
          {/* Neomorphic Inner Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative p-4 rounded-2xl bg-[#1a1a1a] transition-all duration-300 group-hover:bg-[#1e1e1e]">
            <h4 className="text-xl font-semibold text-red-400 mb-4 group-hover:text-red-300 transition-colors duration-300 px-2">
              My Location
            </h4>
            <div className="relative w-full h-40 rounded-xl overflow-hidden
              bg-[#1a1a1a]
              shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]
              group-hover:shadow-[inset_2px_2px_4px_#0f0f0f,inset_-2px_-2px_4px_#252525]
              transition-all duration-300">
              
              {/* Neomorphic Frame Glow */}
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
              
              <iframe
                title="Faizan's Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.96249353462!2d74.6682389!3d32.2643398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9266ddf0af41%3A0x2a31c0937f9f31e9!2sPasrur%2C%20Punjab!5e0!3m2!1sen!2s!4v1658841241812!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative rounded-xl transition-transform duration-700 group-hover:scale-105"
                style={{ filter: 'grayscale(0.2)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Neomorphic Design */}
      <div className="relative max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 z-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-sm text-gray-500">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-red-400 font-semibold">Faizan Sultan</span>
          <span>. All rights reserved.</span>
          
          {/* Neomorphic Decorative Dots */}
          <div className="flex gap-2 ml-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
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

        /* Map iframe styling */
        iframe {
          border: none;
        }
      `}</style>
    </footer>
  );
};