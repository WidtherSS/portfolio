// App.js
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import WorkProves from "./components/WorkProves";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

function App() {
  const handleTechnologiesClick = () => {
    // Scroll to the "Experience" section
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      window.scrollTo({
        top: experienceSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <NavBar onTechnologiesClick={handleTechnologiesClick} />

      <Home />
      <WorkProves />
      <Portfolio />
      <Experience />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
