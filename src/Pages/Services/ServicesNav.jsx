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

    const handleButtonClick = (buttonIndex, cardNumber) => {
        setActiveButton(buttonIndex);
        setActiveCard(cardNumber);
    };

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
                    <div className="flex  justify-center  mx-4 my-8  py-5">
                 <div className="flex gap-2 items-center">
                        <div>
                            <img
                                src="https://i.ibb.co/ZXjxQPd/image.png"
                                className="w-28 cursor-pointer h-28 bg-cover rounded-full border-pink-200 border-2 hover:border-pink-400 border-l-8 transition duration-300"
                                onClick={() => handleButtonClick(1, 1)}
                            />
                        </div>

                        <div className="w-44 h-[2px] bg-pink-500 relative">
                            <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-pink-500"></span>
                            <span className="bg-pink-500 w-10 h-1"></span>
                        </div>
                 </div>

                   

                   <div className="flex items-center gap-2 ">

                       <div>
                            <img
                                src="https://i.ibb.co/fYXRMCc/image.png"
                                className="w-28 cursor-pointer h-28 bg-cover rounded-full border-pink-200 border-2 hover:border-pink-400 border-l-8 transition duration-300"
                                onClick={() => handleButtonClick(2, 2)}
                            />
                       </div>
                        <div className="w-44 h-[2px] bg-pink-500 relative">
                            <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-pink-500"></span>
                            <span className="bg-pink-500 w-10 h-1"></span>
                        </div>

                   </div>
                  <div className="flex items-center gap-2">
                        <div className="relative w-28 h-28">
                            <img
                                src="https://i.ibb.co/dBNNLst/image.png"
                                className="w-28 cursor-pointer h-28 bg-cover  rounded-full border-pink-200 border-2 hover:border-pink-400 border-l-8 transition duration-300"
                                onClick={() => handleButtonClick(3, 3)}
                            />
                        </div>

                        <div className="w-44 h-[2px] bg-pink-500 relative">
                            <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-pink-500"></span>
                            <span className="bg-pink-500 w-10 h-1"></span>
                        </div>
                 </div>
                    <img
                        src="https://i.ibb.co/GsNFsF0/image.png"
                        className="w-28 cursor-pointer h-28 bg-cover rounded-full border-pink-200 border-2 hover:border-pink-400 border-l-8 transition duration-300"
                        onClick={() => handleButtonClick(4, 4)}
                    />
                    </div>

                    {/* Card 1 */}
                    <div className="flex  mb-6">
                        <div className={`group relative mx-auto  ${activeCard !== 1 ? 'hidden' : ''}`}>

                            <Makeup/>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex  mb-32 ">
                        <div className={`group relative mx-auto   ${activeCard !== 2 ? 'hidden' : ''}`}>
                            <Haircut/>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex -mt-32">
                        <div className={`group relative mx-auto ${activeCard !== 3 ? 'hidden' : ''}`}>
                           <Massage/>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="flex ">
                        <div className={`group relative mx-auto ${activeCard !== 4 ? 'hidden' : ''}`}>
                        <Screencare/>
                        </div>
                    </div>
                </div>
               

            </div>
     
    );
};

export default ServicesNav;