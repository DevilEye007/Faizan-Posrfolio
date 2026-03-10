import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const menuItems = ["Home", "About", "Skills", "Projects", "Reviews", "Contact"];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center 
      bg-black/80 backdrop-blur-xl transition-all duration-500
      ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
    >

      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl 
        hover:text-red-500 hover:rotate-90 transition duration-300"
      >
        ×
      </button>

      {/* Menu Container */}
      <div className="flex flex-col items-center space-y-8">

        {menuItems.map((item, i) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className={`text-3xl md:text-4xl font-bold tracking-wide 
            text-white relative group transition duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {/* Text */}
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent group-hover:brightness-125 transition">
              {item}
            </span>

            {/* Underline Animation */}
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] 
            bg-gradient-to-r from-red-500 to-orange-400 
            transition-all duration-300 group-hover:w-full"></span>

            {/* Glow Effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-30 
            bg-red-500 blur-xl transition duration-300"></span>

          </a>
        ))}

      </div>
    </div>
  );
};