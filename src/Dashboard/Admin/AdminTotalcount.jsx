import { MdProductionQuantityLimits } from "react-icons/md";
import { TbMapDollar, TbUsersGroup } from "react-icons/tb";
import { IoAnalyticsOutline } from "react-icons/io5";

const AdminTotalcount = () => {
    return (
        <div>


           
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                <div className="group relative max-w-[350px] overflow-hidden bg-gradient-to-r bg-white px-6 py-6  shadow text-black rounded-md">
                    <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#efecee] via-[#fbeef5] to-[#fcf5f9]  duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                    <div className="relative z-20 space-y-6">
                        <h1 className="text-2xl font-bold">Total Bokking </h1>
                        <div className="flex justify-between items-center">
                        <p className="text-xl font-semibold">232 </p>
                            <MdProductionQuantityLimits  className="text-5xl" />

                        </div>
                        <button className="bg-white border-b-2 px-12 py-2">View</button>
                    </div>
                </div>
      
                <div className="group relative max-w-[350px] overflow-hidden bg-gradient-to-r bg-white px-6 py-6  shadow text-black rounded-md">
                    <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#efecee] via-[#fbeef5] to-[#fcf5f9]  duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                    <div className="relative z-20 space-y-6">
                        <h1 className="text-2xl font-bold">Totla Shop Products</h1>
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold">232 </p>
                            <IoAnalyticsOutline className="text-5xl" />

                        </div>
                        <button className="bg-white border-b-2 px-12 py-2">View</button>
                    </div>
                </div>



                <div className="group relative max-w-[350px] overflow-hidden bg-gradient-to-r bg-white px-6 py-6  shadow text-black rounded-md">
                    <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#efecee] via-[#fbeef5] to-[#fcf5f9]  duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                    <div className="relative z-20 space-y-6">
                        <h1 className="text-2xl font-bold">Totla Amount</h1>
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold">$ 232 </p>
                            <TbMapDollar className="text-5xl" />

                        </div>
                        <button className="bg-white border-b-2 px-12 py-2">View</button>
                    </div>
                </div>




                <div className="group relative max-w-[350px] overflow-hidden bg-gradient-to-r bg-white px-6 py-6  shadow text-black rounded-md">
                    <span className="absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#efecee] via-[#fbeef5] to-[#fcf5f9]  duration-300 group-hover:top-[40%] group-hover:blur-sm"></span>
                    <div className="relative z-20 space-y-6">
                        <h1 className="text-2xl font-bold">Totla Users</h1>
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-semibold">232 </p>
                            <TbUsersGroup className="text-5xl" />

                        </div>
                        <button className="bg-white border-b-2 px-12 py-2">View</button>
                    </div>
                </div>
      
      
      
        </div>


        </div>
    );
};

export default AdminTotalcount;