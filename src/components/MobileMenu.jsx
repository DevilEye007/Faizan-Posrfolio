import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const menuItems = ["Home", "About", "Skills", "Projects", "Reviews", "Contact"];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center 
      bg-[#1a1a1a]/95 backdrop-blur-xl transition-all duration-700
      ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
    >
      {/* Neomorphic Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1a1a1a]/95"></div>
        
        {/* Soft Ambient Glows */}
        <div className="absolute w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[300px] h-[300px] bg-purple-600/5 blur-[120px] rounded-full top-0 right-0"></div>
        <div className="absolute w-[250px] h-[250px] bg-blue-600/5 blur-[100px] rounded-full bottom-0 left-0"></div>
        
        {/* Neomorphic Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Neomorphic Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 w-14 h-14 rounded-full text-white text-3xl font-light
          bg-[#1a1a1a]
          shadow-[6px_6px_16px_#0f0f0f,-6px_-6px_16px_#252525]
          hover:shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]
          active:shadow-[inset_6px_6px_16px_#0f0f0f,inset_-6px_-6px_16px_#252525]
          hover:bg-[#1e1e1e]
          transition-all duration-300
          flex items-center justify-center
          group/btn"
      >
        {/* Neomorphic Inner Glow */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
        
        {/* Neomorphic Red Glow Effect */}
        <span className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(239,68,68,0.15)]"></span>
        
        <span className="relative group-hover/btn:rotate-90 transition-transform duration-300 group-hover/btn:text-red-400">
          ×
        </span>
      </button>

      {/* Menu Container with Neomorphic Card */}
      <div className="relative z-10 flex flex-col items-center space-y-6 p-12 rounded-3xl
        bg-[#1a1a1a]
        shadow-[20px_20px_50px_#0f0f0f,-20px_-20px_50px_#252525]
        transition-all duration-500
        max-w-sm w-full mx-4">
        
        {/* Neomorphic Top Highlight */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-full"></div>
        
        {/* Neomorphic Inner Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-red-500/5 to-transparent"></div>

        {/* Decorative Neomorphic Orbs */}
        <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#1a1a1a] shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]"></div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-[#1a1a1a] shadow-[3px_3px_8px_#0f0f0f,-3px_-3px_8px_#252525]"></div>

        {/* Brand/Logo at top of menu */}
        <div className="relative mb-2 px-6 py-2 rounded-full text-sm font-mono text-gray-400 tracking-widest
          bg-[#1a1a1a]
          shadow-[inset_2px_2px_6px_#0f0f0f,inset_-2px_-2px_6px_#252525]">
          NAVIGATION
        </div>

        {menuItems.map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className={`relative w-full text-center px-8 py-4 rounded-xl font-bold tracking-wide 
            transition-all duration-300
            bg-[#1a1a1a]
            shadow-[4px_4px_12px_#0f0f0f,-4px_-4px_12px_#252525]
            hover:shadow-[2px_2px_6px_#0f0f0f,-2px_-2px_6px_#252525]
            active:shadow-[inset_4px_4px_12px_#0f0f0f,inset_-4px_-4px_12px_#252525]
            hover:bg-[#1e1e1e]
            group
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Neomorphic Inner Glow */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-red-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            {/* Neomorphic Border Glow */}
            <span className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-red-500/0 via-red-500/15 to-red-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></span>

            {/* Menu Item Text */}
            <span className="relative text-2xl md:text-3xl font-bold tracking-wide
              bg-gradient-to-r from-red-400 via-red-300 to-orange-400 bg-clip-text text-transparent
              group-hover:brightness-125 transition-all duration-300">
              {item}
            </span>

            {/* Neomorphic Underline Effect */}
            <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] 
              bg-gradient-to-r from-red-500 to-orange-400 
              transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%]
              rounded-full
              shadow-[0_0_10px_rgba(239,68,68,0.3)]">
            </span>

            {/* Decorative Arrow Indicator */}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1
              text-red-400 text-lg">
              →
            </span>
          </a>
        ))}

        {/* Menu Footer with Neomorphic Design */}
        <div className="relative mt-4 w-full flex justify-center gap-4 pt-4 border-t border-white/5">
          <div className="flex gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shadow-[inset_1px_1px_2px_#0f0f0f,inset_-1px_-1px_2px_#252525]"></span>
          </div>
          <span className="text-[10px] text-gray-500 tracking-widest uppercase">Menu</span>
        </div>
      </div>

      {/* Global Neomorphic Styles */}
      <style>{`
        /* Neomorphic Base */
        .neu-base {
          background: #1a1a1a;
          border-radius: 1rem;
        }
        
        /* Neomorphic Extruded */
        .neu-extruded {
          box-shadow: 20px 20px 50px #0f0f0f, -20px -20px 50px #252525;
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
      `}</style>
    </div>
  );
};