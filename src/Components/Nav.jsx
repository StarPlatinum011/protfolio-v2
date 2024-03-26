import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='shadow-md text-titles font-work-sans w-full fixed top-0 left-0'>
            <div className='flex justify-between md:px-64 py-4 px-7 md:flex  items-center bg-main-bg'>
                {/* logo */}
                <div className='flex cursor-pointer items-center gap-1'>
                    <Link to={'/'}>
                        <p className='font-bold text-2xl md:text-4xl cursor-pointer'>KP.</p>
                    </Link>
                    
                </div>

                {/* hamburger menu implicate */}
                <div onClick={()=> setIsOpen(!isOpen)} className='w-7 h-7 absolute right-7 top-7 cursor-pointer md:hidden'>
                    {isOpen? <Icon icon="streamline:delete-1-solid" />: <Icon icon="charm:menu-hamburger" />}
                </div>
                <div>
                    {/* ul links */}
                    <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute bg-main-bg md:static md:z-auto z-[-1]
                    left-0 w-full transition-all duration-500 ease-in ${isOpen? 'top-12' : 'top-[-440px]'}`}>
                        <li className='font-semibold my-7 md:my-0 md:ml-8 md:text-xl'>About</li>
                        <li className='font-semibold my-7 md:my-0 md:ml-8 md:text-xl'>Projects</li>
                        <li className='font-semibold my-7 md:my-0 md:ml-8 md:text-xl'>Contacgt</li>
                        <button className='btn md:text-xl bg-accent-yellow  font-semibold py-1 md:ml-8 md:static brutal-shadow px-4'>Download CV</button>
                    </ul>  
                </div>
                


                         
            </div>
                        
        </div>
    );
};

export default Nav;