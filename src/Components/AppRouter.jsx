import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home'
import About from '../Components/About'



const AppRouter = () => {


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>
        },
        {
            path:'/About',
            element:<About/>
        }
    ]);
    return <RouterProvider router={router}/>
};

export default AppRouter;