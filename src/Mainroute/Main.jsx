import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/HomepageData/Footer";



const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Main;