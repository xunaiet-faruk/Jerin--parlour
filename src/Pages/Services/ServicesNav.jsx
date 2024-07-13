import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import Makeup from "./ServicesProduct/Makeup";
import Haircut from "./ServicesProduct/Haircut";
import Massage from "./ServicesProduct/Massage";
import Screencare from "./ServicesProduct/Screencare";


const ServicesNav = () => {

    const [activeButton, setActiveButton] = useState(1);
    const [activeCard, setActiveCard] = useState(1);

  

    return (
        <div>
            <div className="hero h-[600px] bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/CsX28bN/image.png)' }}>
                <div className="">
                    <h1 className="text-5xl font-bold text-white ">Services</h1>
                    <div className="pt-5 flex justify-center items-center gap-2">
                        <Link to={'/'} className="text-[#F63E7B] font-semibold ">Home</Link>
                        <FaArrowRight />
                        <Link className="font-semibold text-white">Services</Link>

                    </div>
                </div>

            </div>

            <h1 className="text-5xl font-serif font-bold text-center p-12">Our Parlour <span className="text-[#F63E7B] ">Services</span></h1>
            
              
          
                <div className="">
                    

                    {/* Card 1 */}
                    <div className="flex  mb-6">
                        <div className={`group relative mx-auto  ${activeCard !== 1 ? 'hidden' : ''}`}>

                            <Makeup/>
                        </div>
                    </div>

                   

                  
                  
                </div>
               

            </div>
     
    );
};

export default ServicesNav;