import { Icon } from '@iconify/react';
import "aos/dist/aos.css";

const About = () => { 
    return (
        <div id='about' className='flex flex-col place-items-center font-work-sans bg-white text-titles px-8 py-16 md:py-28 md:px-48 overflow-hidden'>
            <h1 className='text-3xl font-semibold md:text-6xl'>About</h1>
            <div className='flex flex-col md:flex-row space-y-8 md:p-16 md:space-x-32'>
                {/* About description  */}
                <div className='flex flex-col place-items-center mb-4 mt-1 '>
                    <p className=' text-lg text-titles md:text-2xl md:font-semibold text-justify md:pt-8 '>
                    <span ><Icon className='md:w-16 md:h-16' icon="meteocons:star-fill" width="2rem" height="2rem" /></span>
                    I am a dedicated software developer with a keen interest in modern web technologies and a passion for solving complex problems. I enjoy exploring new tools and frameworks, and I take pride in delivering clean, efficient, and maintainable code. I believe in continuous learning and strive for consistent growth, both personally and professionally. Whether collaborating in a team or working independently, I approach every challenge with curiosity and a strong commitment to quality.
                    </p>
                    <p>
                    </p>
                    <span><Icon className='md:w-16 md:h-16' icon="meteocons:star-fill" width="2rem" height="2rem" /></span>                    
                </div>

                {/* logos */}
                <div className='flex flex-col  space-y-6 place-items-center md:space-y-12 '>
                    <div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration="800" className='flex space-x-2.5 md:space-x-12 '>
                        <div  className='card md:w-32 md:h-32 card-hover'><Icon className='md:w-20 md:h-20 md:ml-4' icon="devicon:typescript" width="3rem" height="3rem" /></div>
                        <div  className='card md:w-32 md:h-32 card-hover '><Icon className='md:w-20 md:h-20 md:ml-4' icon="devicon:mongodb-wordmark" width="3rem" height="3rem" /></div>
                        <div className='card md:w-32 md:h-32 card-hover '><Icon className='md:w-20 md:h-20 md:ml-4' icon="devicon:react-wordmark" width="3rem" height="3rem" /></div>
                    </div>
                    <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="800" className='flex space-x-2.5 md:space-x-12'>
                        <div className='card md:w-32 md:h-32 card-hover'><Icon className='md:w-20 md:h-20 md:ml-4' icon="devicon:tailwindcss" width="3rem" height="3rem" /></div>
                        <div className='card md:w-32 md:h-32 card-hover' ><Icon className='md:w-20 md:h-20 md:ml-4' icon="logos:nextjs-icon" width="3rem" height="3rem" /></div>
                        <div className='card md:w-32 md:h-32 card-hover'><Icon className='md:w-20 md:h-20 md:ml-4' icon="devicon:git" width="3rem" height="3rem" /></div>
                    </div>
                    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800" className='flex space-x-2.5 md:space-x-12'>
                        <div className='card md:w-32 md:h-32 card-hover'><Icon className='md:w-20 md:h-20 md:ml-4' icon="logos:nodejs" width="3rem" height="3rem" /></div>
                        <div className='card md:w-32 md:h-32 card-hover'><Icon className='md:w-20 md:h-20 md:ml-4' icon="simple-icons:drizzle" width="3rem" height="3rem"  style={{color: "#4c4a4e"}} /></div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default About;



