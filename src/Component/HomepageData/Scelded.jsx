import { FaRightFromBracket} from "react-icons/fa6";
import { Link } from "react-router-dom";


const Scelded = () => {
    return (
        <div className="mt-60 max-w-screen-2xl mx-auto ">
            <div>
                <div className="grid lg:grid-cols-3 justify-center  px-5 md:grid-cols-3 grid-cols-1">
                    <div className="border-2  border-r-0 border-[#F63E7B] ">
                      <div className="ml-12 space-y-7">
                            <h1 className="text-6xl mt-8 font-bold ">Schedule</h1>
                            <h1 className=" text-2xl font-semibold">Monday-Friday</h1>
                            <p className="text-gray-500">10AM – 8PM</p>
                          
                            <h1 className="text-2xl font-semibold" >Saturday</h1>
                            <p className="text-gray-500">10AM – 4PM</p>
                            <h1 className=" text-2xl font-semibold">Sunday</h1>
                            <p className="text-gray-500">CLOSED</p>
                            <h1 className="text-gray-600 font-semibold">We will be glad to see you anytime at our salon.</h1>
                            <div className="flex items-center hover:text-[#F63E7B] gap-3">
                                <Link className="uppercase italic">Make an <span className="text-[#F63E7B]">Appoinment</span> </Link>
                                <FaRightFromBracket className="animate-ping" />
                            </div>
                      </div>
                    </div>
                    <div>
                        <img className="h-[720px] -mt-10 left-[420px] shadow-xl absolute" src="https://livedemo00.template-help.com/wt_prod-9025_v1/images/home-4-6-498x688.jpg" alt="" />
                    </div>
                    <div className="bg-[#fdafc9] text-white ">

                        <div className="ml-12 space-y-7">
                            <h1 className="text-6xl mt-8 font-bold ">Pricing</h1>
                            <h1 className=" text-2xl font-semibold">Bikini Waxing</h1>
                            <p className="text-gray-500">FROM $30.00</p>

                            <h1 className="text-2xl font-semibold" >Facial Waxing</h1>
                            <p className="text-gray-500">FROM $35.00M</p>
                            <h1 className=" text-2xl font-semibold">Leg Waxing</h1>
                            <p className="text-gray-500">FROM $60.00</p>
                            <h1 className=" text-2xl font-semibold">Underarm Waxing</h1>
                            <p className="text-gray-500">FROM $70.00</p>
                            <h1 className=" text-2xl font-semibold">Body Waxing</h1>
                            <p className="text-gray-500">FROM $50.00</p>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scelded;