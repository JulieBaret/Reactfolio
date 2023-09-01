import React from 'react';
import About from '../sections/About/About';
import Projects from '../sections/Projects/Projects';
import Contact from '../sections/Contact/Contact';
import Bio from '../sections/Bio/Bio';
import Timeline from '../sections/Timeline/Timeline';

const Body = () => {
    return (
        <>
        <About />
        <Projects />
        <Bio />
        <Timeline />
        <Contact />
        </>
    );
};

export default Body;