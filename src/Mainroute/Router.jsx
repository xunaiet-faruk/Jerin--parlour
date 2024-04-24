import {
    createBrowserRouter,
  
} from "react-router-dom";
import Main from "./Main";
import HomePage from "../Pages/Home/HomePage";
import Protfolio from "../Pages/Protfolio/Protfolio";
import Blog from "../Pages/BlogPage/Blog";
import Login from "../Component/Authentication/Login/Login";

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
            }
        ]
    },
]);
