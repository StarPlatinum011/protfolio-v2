import React from 'react';
import ImageBackground from './ImageBackground';
import { Icon } from '@iconify/react';

const Hero = () => {
    return (
        <div className='flex flex-col font-work-sans bg-main-bg text-main-text  py-28 md:py-44 md:flex-row md:px-48 '>
        {/* heading and subheading contents  */}
            <div className='p-4 space-y-3 md:px-16 md:pt-24'>
                <h1 className='text-3xl font-bold md:text-6xl'>Proving hard work can be equal to <span className='text-accent-blue'>talent <Icon icon="meteocons:star-fill" width="1rem" height="1rem" /></span> </h1>
                
                
                <h3 className=' text-lg md:text-3xl'>Hi, my name is Karan Pun and I’m a full-stack web developer.</h3>
                <div className='flex space-x-4'>
                    <button className='btn brutal-shadow text-base md:text-xl bg-white font-semibold py-1 px-3 md:py-3 md:px-6'>Hire Me</button>
                    <button className='brutal-shadow text-base md:text-xl bg-accent-yellow font-semibold md:py-3 md:px-6 px-2'>Learn More</button>
                </div>
            </div>
            {/* picture contents */}
            <div className='flex px-12 -mt-16 md:pt-24 md:static md:z-auto '>
                <ImageBackground/>

            </div>

            
        </div>
    );
};


export default Hero;


