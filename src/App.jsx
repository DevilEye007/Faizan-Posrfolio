import { useState, useEffect } from "react"; // Add useEffect here
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects} from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import Rev from './components/sections/Review'
import SkillsSection from "./components/sections/Skills";
import { inject } from '@vercel/analytics'

function App() {
  useEffect(() => {
    inject()
  }, [])
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <SkillsSection />
        <Projects />
        <Rev />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
