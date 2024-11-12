import  { useEffect } from 'react';
import data from '../utils/ProjectData';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


const Projects = () => {

    //Initialize the AOS package on componentDidMount
    useEffect(() => {
        AOS.init(); //You can add options as per your need inside an object
       }, []);

    return (
        <div id='projects' className='flex flex-col font-work-sans bg-main-bg p-4 items-center text-titles space-y-12 md:px-48 md:space-y-40 py-16 md:py-28'>
            <h1 className='text-3xl font-bold md:text-6xl mt-2 -mb-8  md:-mb-16'>Projects</h1>
            {
                data.map((data) => {
                    return(
                        <div data-aos="fade-out" data-aos-duration="900" data-aos-easing="linear" key={data.id}  className={`flex flex-col md:items-center md:space-x-24 space-y-3  ${data.id%2==0? "md:flex-row-reverse": "md:flex-row"}`}>
                            <div className='brutal-shadow-edge bg-no-repeat hover:brightness-75  transition-all duration-500'>
                                <img src={data.image}/>
                            </div>
                            <div className='flex flex-col space-y-3 '>
                                <div className='space-y-1'>
                                    <h1 className='text-xl  font-bold md:text-4xl'>{data.title}</h1>
                                    <h3 className='text-lg font-semibold md:text-4xl'>{data.subTitle}</h3>
                                    <p className='text-lg  text-text-light text-balance md:text-3xl'>{data.desc}</p>
                                </div>
                                <div className='space-x-2'>
                                    <button className={`btn brutal-shadow text-base font-semibold py-1 px-3
                                    ${data.id%2==0? 'bg-accent-green': 'bg-accent-pink'} md:text-xl md:py-2 md:px-4   
                                    `}><Link to={data.url} target="_blank"> Live App</Link> </button>
                                    <button className={`btn brutal-shadow text-base font-semibold py-1 px-3
                                    ${data.id%2==0? 'bg-accent-yellow': 'bg-accent-blue'} md:text-xl md:py-2 md:px-4   
                                    `}><Link to={data.git} target="_blank"> Learn More</Link></button>
                                </div>
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Projects;