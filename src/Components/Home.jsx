import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';
import Footer from './Footer';

const Home = () => {
    
    return (
        <div className='box-content'>
            <Nav/>
            <Hero/>
            <About/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default Home;