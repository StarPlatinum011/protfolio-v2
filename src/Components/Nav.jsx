import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { HashLink } from 'react-router-hash-link';

import MyPDF from "../assets/Karan's Resume-2.pdf"



const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);




    return (
        <div className='shadow-md text-titles font-work-sans w-full fixed top-0 left-0 z-10'>
            <div className='flex justify-between md:px-64 py-4 px-6 md:flex  items-center bg-main-bg'>
                {/* logo */}
                <div className='flex cursor-pointer items-center gap-1'>
                    <HashLink smooth to={'/#'}>
                        <p className='font-bold text-2xl md:text-4xl cursor-pointer'>KP.</p>
                    </HashLink>
                    
                </div>

                {/* hamburger menu implicate */}
                <div onClick={()=> setIsOpen(!isOpen)} className='w-7 h-7 absolute right-7 top-7 cursor-pointer md:hidden'>
                    {isOpen? <Icon icon="streamline:delete-1-solid" />: <Icon icon="charm:menu-hamburger" />}
                </div>
                <div>
                    {/* ul links */}
                    <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute bg-main-bg md:static 
                    left-0 w-full transition-all duration-500 ease-in ${isOpen? 'top-12' : 'top-[-440px]'}`}>
                        <li className='cursor-pointer font-semibold my-7 md:my-0 md:ml-8 md:text-xl md:hover:text-loud-pink'><HashLink smooth to={'/#about'}>About</HashLink></li>
                        <li className='cursor-pointer font-semibold my-7 md:my-0 md:ml-8 md:text-xl md:hover:text-loud-pink'><HashLink smooth to={'/#projects'}>Projects</HashLink></li>
                        <li className='cursor-pointer font-semibold my-7 md:my-0 md:ml-8 md:text-xl md:hover:text-loud-pink'><HashLink smooth to={'/#contacts'}>Contact</HashLink></li>
                        <button className='btn md:text-xl bg-accent-yellow cursor-pointer  font-semibold py-1 md:ml-8 md:static brutal-shadow px-4 transition ease-in duration-300 hover:shadow-offset-hover'  ><a href={MyPDF} target='_blank'>Download CV</a></button>

                    </ul>  
                </div>
                


                         
            </div>
                        
        </div>
    );
};

export default Nav;