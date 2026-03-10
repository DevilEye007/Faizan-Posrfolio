import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const menuItems = ["home", "about", "skills", "projects", "reviews", "contact"];

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-lg bg-black/60 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl md:text-2xl font-bold tracking-wide flex items-center gap-2 group"
          >
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent group-hover:brightness-125 transition">
              DESLOG
            </span>
            <span className="text-gray-300 text-sm hidden sm:block">
              Digital Solutions
            </span>
          </a>

          {/* Hamburger Menu */}
          <div
            className="md:hidden flex flex-col justify-between w-7 h-5 cursor-pointer z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`h-[2px] w-full bg-white rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-white rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-white rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative text-gray-300 hover:text-white text-sm uppercase tracking-wider font-medium transition duration-300 group"
              >
                {section}

                {/* Hover underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-300 group-hover:w-full"></span>

                {/* Glow effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-red-500 blur-lg transition duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};