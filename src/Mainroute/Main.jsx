import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/HomepageData/Footer";



const Main = () => {
    const location =useLocation()
    console.log(location);
    const noNavFoot =location.pathname.includes('login')

    return (
        <div>
           {noNavFoot || <Navbar/>}
            <Outlet/>
            {noNavFoot || <Footer/>}
            
        </div>
    );
};

export default Main;