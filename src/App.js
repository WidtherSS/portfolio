import React from "react";
import { useInView } from "react-intersection-observer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import WorkProves from "./components/WorkProves";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";

function App() {
  // Destructure the second element (inView) if it's not used
  const [homeRef,] = useInView({
    triggerOnce: true,
  });

  const [workProvesRef,] = useInView({
    triggerOnce: true,
  });

  const [portfolioRef,] = useInView({
    triggerOnce: true,
  });

  const [experienceRef,] = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <NavBar />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={workProvesRef}>
        <WorkProves />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
