import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const menuItems = ["home", "about", "skills", "projects", "reviews", "contact"];

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#1a1a1a] border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      
      {/* Neomorphic Top Highlight - Soft light catch */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Neomorphic Bottom Shadow - Deep extrusion */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex justify-between items-center h-16">

          {/* Logo with Neomorphic Effect */}
          <a
            href="#home"
            className="relative font-mono text-xl md:text-2xl font-bold tracking-wide flex items-center gap-2 group px-4 py-2 rounded-xl
              bg-[#1a1a1a]
              shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525]
              hover:shadow-[2px_2px_6px_#0f0f0f,-2px_-2px_6px_#252525]
              active:shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]
              transition-all duration-300"
          >
            {/* Neomorphic Inner Glow */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            <span className="relative bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent group-hover:brightness-125 transition">
              DESLOG
            </span>
            <span className="relative text-gray-300 text-sm hidden sm:block">
              Digital Solutions
            </span>
          </a>

          {/* Hamburger Menu with Neomorphic Design */}
          <div
            className="md:hidden flex flex-col justify-between w-10 h-10 p-2 cursor-pointer z-50 rounded-xl
              bg-[#1a1a1a]
              shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525]
              hover:shadow-[2px_2px_6px_#0f0f0f,-2px_-2px_6px_#252525]
              active:shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]
              transition-all duration-300"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`h-[2px] w-full bg-gradient-to-r from-red-400 to-orange-400 rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-gradient-to-r from-red-400 to-orange-400 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-gradient-to-r from-red-400 to-orange-400 rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>

          {/* Desktop Menu with Neomorphic Items */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative px-5 py-2.5 rounded-xl text-gray-300 hover:text-white text-sm uppercase tracking-wider font-medium transition-all duration-300
                  bg-[#1a1a1a]
                  shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]
                  hover:shadow-[1px_1px_4px_#0f0f0f,-1px_-1px_4px_#252525]
                  active:shadow-[inset_3px_3px_8px_#0f0f0f,inset_-3px_-3px_8px_#252525]
                  group"
              >
                {/* Neomorphic Inner Glow on Hover */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                {/* Text with Neomorphic Press Effect */}
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {section}
                </span>

                {/* Neomorphic Underline - Soft pressed effect */}
                <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%] rounded-full
                  shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]">
                </span>

                {/* Neomorphic Glow Effect */}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  shadow-[0_0_30px_rgba(239,68,68,0.15)]">
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu with Neomorphic Design */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#1a1a1a] z-40 overflow-y-auto">
          {/* Neomorphic Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 via-transparent to-red-600/5"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-start pt-12 space-y-4 px-6">
            {menuItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="w-full max-w-xs text-center px-8 py-4 rounded-2xl text-gray-300 hover:text-white text-lg uppercase tracking-wider font-medium transition-all duration-300
                  bg-[#1a1a1a]
                  shadow-[6px_6px_16px_#0f0f0f,-6px_-6px_16px_#252525]
                  hover:shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]
                  active:shadow-[inset_6px_6px_16px_#0f0f0f,inset_-6px_-6px_16px_#252525]
                  group"
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {section}
                </span>
                
                {/* Neomorphic Hover Glow */}
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
                {/* Decorative Neomorphic Dot */}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full
                  bg-[#1a1a1a]
                  shadow-[inset_1px_1px_3px_#0f0f0f,inset_-1px_-1px_3px_#252525]
                  group-hover:shadow-[1px_1px_3px_#0f0f0f,-1px_-1px_3px_#252525]
                  transition-all duration-300">
                </span>
              </a>
            ))}
            
            {/* Neomorphic Decorative Elements */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1a1a1a] shadow-[2px_2px_4px_#0f0f0f,-2px_-2px_4px_#252525]"></div>
              <div className="w-2 h-2 rounded-full bg-[#1a1a1a] shadow-[2px_2px_4px_#0f0f0f,-2px_-2px_4px_#252525]"></div>
              <div className="w-2 h-2 rounded-full bg-[#1a1a1a] shadow-[2px_2px_4px_#0f0f0f,-2px_-2px_4px_#252525]"></div>
            </div>
          </div>
        </div>
      )}

      {/* Global Neomorphic Styles */}
      <style jsx>{`
        /* Neomorphic Base */
        .neu-nav {
          background: #1a1a1a;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }
        
        /* Neomorphic Extruded */
        .neu-extruded {
          box-shadow: 6px 6px 16px #0f0f0f, -6px -6px 16px #252525;
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

        /* Shine Animation */
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }

        /* Custom Scrollbar for Mobile Menu */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #1a1a1a;
          box-shadow: inset 1px 1px 3px #0f0f0f, inset -1px -1px 3px #252525;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #2a2a2a;
          box-shadow: 2px 2px 4px #0f0f0f, -2px -2px 4px #252525;
          border-radius: 10px;
        }
      `}</style>
    </nav>
  );
};