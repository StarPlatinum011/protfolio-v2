import React from 'react';
import data from '../utils/ProjectData';


const Projects = () => {

    function btnColor(value) {
        switch(value.id){
            case 0:
                return 'bg-fff'
        }
    }
    return (
        <div className='flex flex-col font-work-sans bg-main-bg space-y-12 p-4 items-center text-titles md:px-48 md:space-y-40'>
            <h1 className='text-3xl font-bold md:text-6xl mt-2 -mb-8 md:mt-12 md:-mb-16'>Projects</h1>
            {
                data.map((data) => {
                    return(
                        <div key={data.id} className={`flex flex-col md:items-center md:space-x-24 space-y-3  ${data.id%2==0? "md:flex-row-reverse": "md:flex-row"}`}>
                            <div className='brutal-shadow-edge'>
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
                                    `}>Live App</button>
                                    <button className={`btn brutal-shadow text-base font-semibold py-1 px-3
                                    ${data.id%2==0? 'bg-accent-yellow': 'bg-accent-blue'} md:text-xl md:py-2 md:px-4   
                                    `}>Learn More</button>
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