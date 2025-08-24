import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.75)] backdrop-blur-sm border-b border-white/10 shadow-xl transition duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-3xl font-bold text-white tracking-tight transition hover:scale-105 duration-200"
          >
            Des
            <span className="bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text">
              Log
            </span>
          </a>

          {/* Hamburger Menu for Mobile */}
          <div
            className="md:hidden flex flex-col justify-between w-6 h-5 z-50 cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-[2px] bg-white rounded transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-white rounded transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-white rounded transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "skills", "projects", "reviews", "contact"].map(
              (section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-gray-300 hover:text-white text-sm uppercase tracking-wider font-medium relative group transition"
                >
                  {section}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
