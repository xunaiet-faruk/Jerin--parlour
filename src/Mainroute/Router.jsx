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
import AddService from "../Dashboard/AddService";
import MakeAdmin from "../Dashboard/MakeAdmin";
import OrderList from "../Dashboard/OrderList";
import Book from "../Dashboard/Book";
import Review from "../Dashboard/Review";
import ServicesNav from "../Pages/Services/ServicesNav";
import ShopingList from "../Dashboard/ShopingList";
import Booking from "../Dashboard/Booking";
import Payment from "../Dashboard/Pay/Payment";

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
            },
            {
                path:'/service',
                element:<ServicesNav/>
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
                path:'shopinglist',
                element:<ShopingList/>
            },
            {
                path:'booking',
                element:<Booking/>
            },
            {
                path:'pay',
                element:<Payment/>
            },
            {
                path:'review',
                element:<Review/>
            }
        ]
    }
]);
