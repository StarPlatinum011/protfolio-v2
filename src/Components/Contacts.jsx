import React from 'react';

const Contacts = () => {
    return (
        <div id='contacts' className='flex flex-col font-work-sans bg-main-bg space-y-6  pb-20 p-4 md:py-24 md:flex-row md:px-48 md:space-x-12'>
            <div className='flex flex-col space-y-4 items-center md:w-1/2'>
                <h1 className='text-3xl font-bold md:text-6xl mt-4 md:mt-3'>Let's get connected!</h1>
                <p className='text-justify text-lg md:text-2xl md:px-'>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible. 
                Any project starts with goal setting. If you have got and idea, we can collaborate and work towards it.</p>
            </div>
            <div className='space-y-4 md:w-1/2'>
            <input type="text"  className="bg-whitesmoke  transition-all duration-300 ease-in brutal-shadow text-gray-900 text-sm focus:shadow-offset-hover md:hover:shadow-offset-hover w-full p-2.5 outline-none md:py-4 md:px-4 md:text-lg" placeholder="Your name" required />
            <input type="text"  className="bg-whitesmoke transition-all duration-300 ease-in brutal-shadow text-gray-900 text-sm focus:shadow-offset-hover w-full md:hover:shadow-offset-hover p-2.5 outline-none md:py-4 md:px-4 md:text-lg" placeholder="Your email" required />
            <input type="text"  className="bg-whitesmoke transition-all duration-300 ease-in brutal-shadow text-gray-900 text-sm focus:shadow-offset-hover w-full md:hover:shadow-offset-hover p-2.5 outline-none md:py-4 md:px-4 md:text-lg" placeholder="Website (if exists)" required />
             <textarea rows="4" className="bg-whitesmoke transition-all duration-300 ease-in p-2.5 w-full text-sm text-gray-900 rounded-lg brutal-shadow focus:shadow-offset-hover md:hover:shadow-offset-hover outline-none md:py-4 md:px-4 md:text-lg" placeholder="Write your message here..."></textarea>
            <button className=' cursor-pointer brutal-shadow text-base md:text-xl bg-accent-yellow w-full font-semibold md:py-4 md:px-6 px-6 py-2 md:w-1/4 md:hover:shadow-offset-hover transition duration-300 ease-in-out  md:hover:-translate-y-0.5 hover:scale-100'>Submit</button>
            </div>
        </div>
    );
};

export default Contacts;