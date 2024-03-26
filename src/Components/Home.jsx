import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Nav/>
            <Hero/>
            <About/>
            <Projects/>

        </div>
    );
};

export default Home;