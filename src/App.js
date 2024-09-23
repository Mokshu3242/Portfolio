import React, { useState } from "react";
import "./App.css";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Internships from "./Components/internships/Internships";
import Qualification from "./Components/qualification/Qualification";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/footer/Footer";
import ScrollUp from "./Components/scrollup/Scrollup";
import Projects from "./Components/Projects/Project";

const App = () => {
  const [showProjects, setShowProjects] = useState(false); // Set to false to hide initially

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        {showProjects && <Projects />} {/* Projects will only render if showProjects is true */}
        <Internships />
        <Qualification />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
