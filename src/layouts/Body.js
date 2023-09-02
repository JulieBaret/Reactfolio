import React from 'react';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Biography from '../sections/Biography';
import Chronology from '../sections/Chronology';

const Body = () => {
    return (
        <>
        <About />
        <Projects />
        <Biography />
        <Chronology />
        <Contact />
        </>
    );
};

export default Body;