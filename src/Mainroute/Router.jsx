import {
    createBrowserRouter,
  
} from "react-router-dom";
import Main from "./Main";
import HomePage from "../Pages/Home/HomePage";
import Protfolio from "../Pages/Protfolio/Protfolio";

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
            }
        ]
    },
]);
