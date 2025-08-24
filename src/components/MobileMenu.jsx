import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md transition-all duration-500 ease-in-out 
        ${menuOpen ? "h-screen opacity-100" : "h-0 opacity-0 overflow-hidden pointer-events-none"}
      `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl hover:text-red-500 transition-transform duration-300 hover:scale-125 focus:outline-none"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center h-full space-y-6 transition-opacity duration-500">
        {["Home", "About", "Skills", "Projects", "Reviews", "Contact"].map((section, i) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className={`text-3xl font-bold tracking-wide text-white relative group transform transition-all duration-500
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: `${i * 100 + 300}ms` }}
          >
            {section}
            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
        ))}
      </div>
    </div>
  );
};
