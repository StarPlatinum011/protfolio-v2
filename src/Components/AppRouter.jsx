import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home'
import About from '../Components/About'
import Projects from './Projects';
import Contacts from './Contacts';



const AppRouter = () => {


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path: '/projects',
            element: <Projects/>
        },
        {
            path:'/contact',
            element:<Contacts/>
        }
    ]);
    return <RouterProvider router={router}/>
};

export default AppRouter;