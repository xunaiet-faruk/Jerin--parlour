import {
    createBrowserRouter,
  
} from "react-router-dom";
import Main from "./Main";
import HomePage from "../Pages/Home/HomePage";
import Protfolio from "../Pages/Protfolio/Protfolio";
import Blog from "../Pages/BlogPage/Blog";
import Login from "../Component/Authentication/Login/Login";
import Dasboard from "../Dashboard/Dasboard";
import Shop from "../Pages/Shop/Shop";
import Cart from "../Dashboard/OrderList";
import AddService from "../Dashboard/AddService";
import MakeAdmin from "../Dashboard/MakeAdmin";
import OrderList from "../Dashboard/OrderList";
import BookingList from "../Dashboard/BookingList";
import Book from "../Dashboard/Book";
import Review from "../Dashboard/Review";

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
            {
                path:'/shop',
                element:<Shop/>
            }
           
        ]
    },
    {
        path: 'dashboard',
        element: <Dasboard />,
        children:[
           
            {
                path:'orderlist',
                element:<OrderList/>
            },
            {
                path:'add',
                element:<AddService/>
            },
            {
                path:'makeadmin',
                element:<MakeAdmin/>
            },
            {
                path:'bookingList',
                element:<BookingList/>
            },
            {
                path:'book',
                element:<Book/>
            },
            {
                path:'review',
                element:<Review/>
            }
        ]
    }
]);
