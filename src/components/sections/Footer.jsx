import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 mt-12 border-t border-red-500/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand + Intro */}
        <div>
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
            Faizan Sultan
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Passionate full-stack developer crafting clean, scalable, and engaging digital experiences with purpose-driven code.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 className="text-xl font-semibold text-red-400 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-red-500 transition-all duration-200">Home</a></li>
            <li><a href="#about" className="hover:text-red-500 transition-all duration-200">About</a></li>
            <li><a href="#projects" className="hover:text-red-500 transition-all duration-200">Projects</a></li>
            <li><a href="#contact" className="hover:text-red-500 transition-all duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h4 className="text-xl font-semibold text-red-400 mb-4">Connect With Me</h4>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://www.linkedin.com/in/faizan-sultan-302b1b24b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 hover:scale-110 transition-transform duration-200"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/DevilEye007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 hover:scale-110 transition-transform duration-200"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Map Location */}
        {/* Map Location */}
<div>
  <h4 className="text-xl font-semibold text-red-400 mb-4">My Location</h4>
  <div className="w-full h-40 rounded-xl overflow-hidden border border-red-500/30 shadow-lg transform transition duration-300 hover:scale-[1.02]">
    <iframe
      title="Faizan's Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.96249353462!2d74.6682389!3d32.2643398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9266ddf0af41%3A0x2a31c0937f9f31e9!2sPasrur%2C%20Punjab!5e0!3m2!1sen!2s!4v1658841241812!5m2!1sen!2s"
      width="100%"
      height="100%"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-xl"
    ></iframe>
  </div>
</div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-5 border-t border-white/10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-red-500 font-semibold">Faizan Sultan</span>. All rights reserved.
      </div>
    </footer>
  );
};
