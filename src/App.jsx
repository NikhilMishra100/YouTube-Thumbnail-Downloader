import { useEffect, useRef, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ThumbnailResult from "./sections/ThumbnailResult";
import HowItWorks from "./sections/HowItWorks";
import Features from "./sections/Features";
import FAQ from "./sections/FAQ";
import About from "./sections/About";
import Footer from "./sections/Footer";

function App() {
  /* ========================================
     Thumbnail Result State
  ======================================== */

  const [thumbnailOptions, setThumbnailOptions] = useState(null);

  /* ========================================
     Theme State
  ======================================== */

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme === "dark";
  });

  /* ========================================
     Thumbnail Result Section Reference
  ======================================== */

  const resultSectionRef = useRef(null);

  /* ========================================
     Scroll to Result Section
  ======================================== */

  useEffect(() => {
    // Scroll to the result section whenever
    // a new thumbnail is successfully found.
    if (thumbnailOptions && resultSectionRef.current) {
      resultSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [thumbnailOptions]);

  /* ========================================
     Apply Theme
  ======================================== */

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  /* ========================================
     Theme Toggle
  ======================================== */

  const handleThemeToggle = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  return (
    <>
      <Navbar isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle} />

      <main>
        <Hero onThumbnailFound={setThumbnailOptions} />

        <div ref={resultSectionRef}>
          <ThumbnailResult thumbnailOptions={thumbnailOptions} />
        </div>

        <HowItWorks />
        <Features />
        <FAQ />
        <About />
      </main>

       <Footer />
    </>
  );
}

export default App;
