import React from 'react';
import { Icon } from '@iconify/react';


const About = () => {
    return (
        <div className='flex flex-col place-items-center font-work-sans bg-white text-titles p-4 pb-16 -mt-28 md:mt-12 md:px-48 md:py-28'>
            <h1 className='text-3xl font-semibold md:text-6xl mt-4'>About</h1>
            <div className='flex flex-col md:flex-row space-y-8 md:p-16 md:space-x-32'>
                {/* About description  */}
                <div className='flex flex-col place-items-center mb-4 mt-1 '>
                    <span className='justify-self-start'><Icon  icon="meteocons:star-fill" width="4rem" height="4rem" /></span>
                    <p className=' text-lg text-text-light md:text-2xl md:font-semibold text-balance md:pt-8 '>
                        Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I’m not at my computer I like to spend my time reading, keeping  fit and playing guitar.
                    </p>                    
                </div>

                {/* logos */}
                <div className='flex flex-col content-center space-y-6 place-items-center md:space-y-12 '>
                    <div className='flex space-x-6 md:space-x-12'>
                        <div className='card md:w-32 md:h-32'><Icon className='md:w-20 md:h-20 md:ml-3' icon="vscode-icons:file-type-js-official" width="3rem" height="3rem" /></div>
                        <div className='card md:w-32 md:h-32'><Icon className='md:w-20 md:h-20 md:ml-3' icon="devicon:mongodb-wordmark" width="3rem" height="3rem" /></div>
                        <div className='card md:w-32 md:h-32'><Icon className='md:w-20 md:h-20 md:ml-3' icon="devicon:react-wordmark" width="3rem" height="3rem" /></div>
                    </div>
                    <div className='flex space-x-6 md:space-x-12'>
                        <div className='card md:w-32 md:h-32'><Icon className='md:w-20 md:h-20 md:ml-3' icon="devicon:tailwindcss" width="3rem" height="3rem" /></div>
                        <div className='card md:w-32 md:h-32'><Icon className='md:w-20 md:h-20 md:ml-3' icon="logos:nodejs" width="3rem" height="3rem" /></div>
                        <div className='card md:w-32 md:h-32'><Icon className='md:w-20 md:h-20 md:ml-3' icon="devicon:git" width="3rem" height="3rem" /></div>
                    </div>
                    <div className='flex space-x-6 md:space-x-12'>
                        <div className='card md:w-32 md:h-32'><Icon className='md:w-20 md:h-20 md:ml-3' icon="skill-icons:css" width="3rem" height="3rem" /></div>
                        <div className='card md:w-32 md:h-32'><Icon className='md:w-20 md:h-20 md:ml-3' icon="skill-icons:html" width="3rem" height="3rem" /></div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default About;

