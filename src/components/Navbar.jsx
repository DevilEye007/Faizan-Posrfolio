import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-3xl font-bold text-white tracking-tight"
          >
            Des<span className="bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text">Log</span>
          </a>

          {/* Hamburger Menu for Mobile */}
          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-white text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-300 hover:text-white relative transition duration-300 group"
              >
                <span className="capitalize">{section}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
