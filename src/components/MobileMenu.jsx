import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center 
        transition-all duration-500 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl hover:text-red-500 transition"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Links */}
      {["Home", "About", "Projects", "Contact"].map((section, i) => (
        <a
          key={section}
          href={`#${section.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-semibold text-white my-4 transition-all duration-500 relative group
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {section}
          <span className="block h-0.5 w-0 bg-red-500 group-hover:w-full transition-all duration-300 mt-1"></span>
        </a>
      ))}
    </div>
  );
};
