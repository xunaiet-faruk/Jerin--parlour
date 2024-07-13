import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProtfolioTab from "./ProtfolioTab";
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
                <h1 className="text-5xl font-bold text-center font-serif">Portfolio</h1>
                <h1 className="text-gray-400 pt-2">
                    Check out the full portfolio of our works including haircuts, custom makeup, exclusive manicure and pedicure, <br/> and more. All these works were performed by our skilled estheticians, manicurists, and cosmetologist</h1>
            </div>

            <div className="mt-10 ">

                <ProtfolioTab/>

            </div>
            <div className="flex justify-center items-center pt-12">
                <button className="uppercase border-2 border-[#f49fbb] hover:bg-[#F63E7B]  px-6 py-2 rounded-full font-semibold hover:text-white">View All Protfolio</button>
            </div>

            <div className=" bg-cover bg-fixed mt-[200px] mb-12  h-[400px] " style={{ backgroundImage: 'url(https://i.ibb.co/KygcFRj/image.png)' }}>


                


                <div className="flex justify-center items-center  ">
                    <div className="pt-5 ">
                        <img className="w-60  ml-[150px] animate-pulse" src="https://i.ibb.co/1X0Ptfp/image-removebg-preview-71.png" alt="" />
                       <div className="space-y-4 text-center">
                            <h1 className="text-[#f6e4dc] uppercase pl-8 text-5xl font-bold ">Student  </h1>
                            <h1 className="text-[#f6e4dc] uppercase pl-8 text-2xl font-bold ">Discount  </h1>
                            <button className="uppercase  ml-8 bg-[#F63E7B]  text-white font-semibold px-6 py-1 rounded-xl">Discover Now</button>
                            <p className="uppercase pl-8 text-[#f6e4dc] text-sm font-semibold">Unlock 15% student discount at chantalle with student beans id.</p>
                        </div>
                       </div>
                   
                </div>

            </div>

          
        </div>
    );
};

export default Protfolio;