import React from 'react';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Biography from '../sections/Biography';
import Timeline from '../sections/Timeline/Timeline';

const Body = () => {
    return (
        <>
        <About />
        <Projects />
        <Biography />
        <Timeline />
        <Contact />
        </>
    );
};

export default Body;