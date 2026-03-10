import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative bg-black/90 text-white pt-16 pb-8 px-6 border-t border-red-500/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand + Intro */}
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10 transition-transform hover:scale-[1.02]">
          <h3 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-transparent bg-clip-text drop-shadow-lg">
            Faizan Sultan
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed text-justify">
            Full-stack developer turning ideas into elegant, efficient, and scalable digital experiences.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10 transition-transform hover:scale-[1.02]">
          <h4 className="text-xl font-semibold text-red-400 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Home", "About", "Projects", "Reviews", "Contact"].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-red-500 transition-all duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10 transition-transform hover:scale-[1.02]">
          <h4 className="text-xl font-semibold text-red-400 mb-4">Connect With Me</h4>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/faizan-sultan-302b1b24b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/DevilEye007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 hover:scale-110 transition-transform duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Map Location */}
        <div className="bg-white/5 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/10 transition-transform hover:scale-[1.02]">
          <h4 className="text-xl font-semibold text-red-400 mb-4">My Location</h4>
          <div className="w-full h-40 rounded-xl overflow-hidden border border-red-500/20 shadow-lg">
            <iframe
              title="Faizan's Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.96249353462!2d74.6682389!3d32.2643398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9266ddf0af41%3A0x2a31c0937f9f31e9!2sPasrur%2C%20Punjab!5e0!3m2!1sen!2s!4v1658841241812!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col sm:flex-row justify-center items-center gap-2">
        <span>© {new Date().getFullYear()}</span>
        <span className="text-red-500 font-semibold">Faizan Sultan</span>
        <span>. All rights reserved.</span>
      </div>
    </footer>
  );
};