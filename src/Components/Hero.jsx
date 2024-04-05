import React from 'react';
import ImageBackground from './ImageBackground';
import { Icon } from '@iconify/react';

const Hero = () => {
    return (
        <div className='flex flex-col font-work-sans bg-main-bg  text-titles py-28 p-4 md:py-48 md:flex-row md:px-48 '>
        {/* heading and subheading contents  */}
            <div className=' space-y-3 md:px-16 md:pt-24'>
                <div className='text-3xl font-bold md:text-6xl text-main-text'> <h1>Proving hard work can be equal to <span className='inline-flex text-accent-blue'>talent <Icon className='md:w-16 md:h-16' icon="meteocons:star-fill" width="2rem" height="2rem" /></span></h1>  </div> 
                <h3 className=' text-lg md:text-3xl text-balance '>Hi, my name is Karan Pun and I’m a full-stack web developer.</h3>
                <div className='flex space-x-4'>
                    <button className='btn brutal-shadow text-base md:text-xl bg-white font-semibold py-1 px-3 md:py-3 md:px-6 md:hover:shadow-offset-hover transition duration-300 ease-in-out  md:hover:-translate-y-0.5 hover:scale-100'>Hire Me</button>
                    <button className='brutal-shadow text-base md:text-xl bg-accent-yellow font-semibold md:py-3 md:px-6 px-2 md:hover:shadow-offset-hover transition duration-300 ease-in-out  md:hover:-translate-y-0.5 hover:scale-100'>Learn More</button>
                </div>
            </div>
            {/* picture contents */}
            <div className='flex p-8 -mt-8 md:pt-24  md:static '>
                <ImageBackground/>

            </div>


            
        </div>
    );
};


export default Hero;


