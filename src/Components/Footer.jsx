import React from 'react';
import { Icon } from '@iconify/react';
 
const Footer = () => {
    return (
        <div className='font-work-sans  bg-main-bg text-titles space-y-4 py-3 md:py-8'>
            <hr className='border-gray-500 '/>
            <div className='flex justify-center space-x-4'>
                <Icon icon="bi:github" width="2rem" height="2rem"  style={{color: 'black'}} />
                <Icon icon="mingcute:linkedin-fill" width="2.5rem" height="2.5rem"  style={{color: 'black'}} />
            </div>
            <div className='flex justify-center'>
                <h2 className='text-lg md:text-xl '>Karan Pun &copy;2024</h2>
            </div>
        </div>
    );
};

export default Footer;