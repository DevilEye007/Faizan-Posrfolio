import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import SkillsSection from "./components/sections/Skills";
import Rev from "./components/sections/Review";
import { Helmet } from "react-helmet-async";
import { inject } from "@vercel/analytics";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    inject();

    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Helmet>
          <title>Faizan Sultan | Frontend Developer</title>
        </Helmet>

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* 🔽 UP → DOWN Scroll Animation Applied Globally */}
        <div data-aos="fade-up">
          <Home />
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <About />
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <SkillsSection />
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <Projects />
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <Rev />
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
