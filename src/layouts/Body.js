import React from "react";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Biography from "../sections/Biography";
import Chronology from "../sections/Chronology";

const Body = () => {
  return (
    <>
      <About />
      <Biography />
      <Chronology />
      <Projects />
      <Contact />
    </>
  );
};

export default Body;
