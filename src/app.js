import React, { Children, useState } from "react";
import ReactDOM from  "react-dom/client";
import Heading from "./components/Header";
import {Footer} from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom"; 
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";

import {Provider} from "react-redux"
import store from "./util/store";

const Instamart = lazy(()=> import("./components/Instamart"));

const AppLayout = ()=>{
    

    return (
        <Provider store = {store}>
        <Heading/>
        <Outlet/>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            },
            {
                path:"/instamart",
                element:<Suspense><Instamart/></Suspense>
            }
        
        ]
    }
    
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);