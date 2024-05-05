import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BiSolidBookmarkAltPlus } from "react-icons/bi";


const ServicesNav = () => {
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
            

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto">

                { /* Todo : Akanea json data  bosatea hobea must  */}


                <div className="bg-pink-100 border-red-500 hover:bg-[#fce4da] hover:border-[#Faeae3] border-r-2  mb-12 justify-between flex gap-5 shadow-2xl w-96 h-28  rounded-tr-full   rounded-l-full">
                    <img className="rounded-l-full" src="https://i.ibb.co/PmjYgwL/image.png" alt="" />
                    <div className="">
                        <h1 className="text-xl font-bold text-black py-2">Makeup</h1>
                        <p className="text-sm text-gray-400">Our makeup experts will have you looking your best in less than 30 minutes.</p>
                        <div className="flex justify-end ">
                            <BiSolidBookmarkAltPlus className="text-2xl hover:text-red-700 text-red-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="bg-pink-100 border-red-500 hover:bg-[#fce4da] hover:border-[#Faeae3] border-r-2  mb-12 justify-between flex gap-5 shadow-2xl w-96 h-28  rounded-tr-full   rounded-l-full">
                    <img className="rounded-l-full" src="https://i.ibb.co/PmjYgwL/image.png" alt="" />
                    <div className="">
                        <h1 className="text-xl font-bold text-black py-2">Makeup</h1>
                        <p className="text-sm text-gray-400">Our makeup experts will have you looking your best in less than 30 minutes.</p>
                        <div className="flex justify-end ">
                            <BiSolidBookmarkAltPlus className="text-2xl hover:text-red-700 text-red-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="bg-pink-100 border-red-500 hover:bg-[#fce4da] hover:border-[#Faeae3] border-r-2  mb-12 justify-between flex gap-5 shadow-2xl w-96 h-28  rounded-tr-full   rounded-l-full">
                    <img className="rounded-l-full" src="https://i.ibb.co/PmjYgwL/image.png" alt="" />
                    <div className="">
                        <h1 className="text-xl font-bold text-black py-2">Makeup</h1>
                        <p className="text-sm text-gray-400">Our makeup experts will have you looking your best in less than 30 minutes.</p>
                        <div className="flex justify-end ">
                            <BiSolidBookmarkAltPlus className="text-2xl hover:text-red-700 text-red-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="bg-pink-100 border-red-500 hover:bg-[#fce4da] hover:border-[#Faeae3] border-r-2  mb-12 justify-between flex gap-5 shadow-2xl w-96 h-28  rounded-tr-full   rounded-l-full">
                    <img className="rounded-l-full" src="https://i.ibb.co/PmjYgwL/image.png" alt="" />
                    <div className="">
                        <h1 className="text-xl font-bold text-black py-2">Makeup</h1>
                        <p className="text-sm text-gray-400">Our makeup experts will have you looking your best in less than 30 minutes.</p>
                        <div className="flex justify-end ">
                            <BiSolidBookmarkAltPlus className="text-2xl hover:text-red-700 text-red-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="bg-pink-100 border-red-500 hover:bg-[#fce4da] hover:border-[#Faeae3] border-r-2  mb-12 justify-between flex gap-5 shadow-2xl w-96 h-28  rounded-tr-full   rounded-l-full">
                    <img className="rounded-l-full" src="https://i.ibb.co/PmjYgwL/image.png" alt="" />
                    <div className="">
                        <h1 className="text-xl font-bold text-black py-2">Makeup</h1>
                        <p className="text-sm text-gray-400">Our makeup experts will have you looking your best in less than 30 minutes.</p>
                        <div className="flex justify-end ">
                            <BiSolidBookmarkAltPlus className="text-2xl hover:text-red-700 text-red-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="bg-pink-100 border-red-500 hover:bg-[#fce4da] hover:border-[#Faeae3] border-r-2  mb-12 justify-between flex gap-5 shadow-2xl w-96 h-28  rounded-tr-full   rounded-l-full">
                    <img className="rounded-l-full" src="https://i.ibb.co/PmjYgwL/image.png" alt="" />
                    <div className="">
                        <h1 className="text-xl font-bold text-black py-2">Makeup</h1>
                        <p className="text-sm text-gray-400">Our makeup experts will have you looking your best in less than 30 minutes.</p>
                        <div className="flex justify-end ">
                            <BiSolidBookmarkAltPlus className="text-2xl hover:text-red-700 text-red-500 cursor-pointer" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesNav;