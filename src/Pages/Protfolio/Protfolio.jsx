import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProtfolioTab from "./ProtfolioTab";
import ProtfolioOffer from "./ProtfolioOffer";
const Protfolio = () => {
    return (
        <div className="mb-20">
            <div className="hero h-[600px] bg-cover " style={{ backgroundImage: 'url(https://thewebmax.org/spa/images/main-slider/slider2/slide1.jpg)' }}>               
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-white ">Our Portfolio</h1>
                    <div className="pt-5 flex justify-center items-center gap-2">
                        <Link to={'/'} className="text-[#F63E7B] font-semibold ">Home</Link>
                        <FaArrowRight/>
                        <Link className="font-semibold text-white">Portfolio</Link>

                    </div>
                </div>
               
            </div>


            <div className="mt-12 text-center ">
                <h1 className="text-5xl font-bold text-center font-serif">Port<span className="text-[#F63E7B]">f</span>olio</h1>
                <h1 className="text-gray-400 pt-2">
                    Check out the full portfolio of our works including haircuts, custom makeup, exclusive manicure and pedicure, <br/> and more. All these works were performed by our skilled estheticians, manicurists, and cosmetologist</h1>
            </div>

            <div className="mt-10 ">

                <ProtfolioTab/>

            </div>
            <div className="flex justify-center items-center pt-12">
                <button className="uppercase border-2 border-[#f49fbb] hover:bg-[#F63E7B]  px-6 py-2 rounded-full font-semibold hover:text-white">View All Protfolio</button>
            </div>

            <ProtfolioOffer/>

          
        </div>
    );
};

export default Protfolio;