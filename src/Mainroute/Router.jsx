import {
    createBrowserRouter,
  
} from "react-router-dom";
import Main from "./Main";
import HomePage from "../Pages/Home/HomePage";
import Protfolio from "../Pages/Protfolio/Protfolio";
import Blog from "../Pages/BlogPage/Blog";
import Login from "../Component/Authentication/Login/Login";
import Dasboard from "../Dashboard/Dasboard";
import { Card } from "@mui/material";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/protfolio',
                element:<Protfolio/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/login',
                element:<Login/>
            },
           
        ]
    },
    {
        path: '/dashboard',
        element: <Dasboard />,
        children:[
           
            {
                path:'card',
                element:<Card/>
            }
        ]
    }
]);
