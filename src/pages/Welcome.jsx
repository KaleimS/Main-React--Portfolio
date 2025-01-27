import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import About from "../pages/About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

function Welcome() {
  return (
    <div className="font-Roboto h-screen flex flex-col">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Welcome;
