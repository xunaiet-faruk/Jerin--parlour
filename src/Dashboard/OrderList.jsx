import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import '../Dashboard/Orderlist.css'

const OrderList = () => {
    const [selectedOption, setSelectedOption] = useState("Take Action");
    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className="mt-12">
            <div className="overflow-x-auto ">
                <table className="min-w-[90%] bg-white shadow-md border mx-auto border-gray-100 my-6">
                    <thead className="rounded-full py-12 border-t-2 border-pink-300">
                        <tr className="bg-gray-100  text-[#959191] text-sm">
                            <th className="py-3 px-6 text-left border-b">Name</th>
                            <th className="py-3 px-6 text-left border-b">Email</th>
                            <th className="py-3 px-6 text-left border-b">Service</th>
                            <th className="py-3 px-14 border-b text-end">Pay with</th>
                            <th className="py-3 px-12 border-b ">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr  className="hover:bg-gray-50 transition duration-300 text-sm text-black">
                                <td className="py-4 px-6 border-b">junaiet</td>
                                <td className="py-4 px-6 border-b">xunaiet28@gmail.com</td>
                                <td className="py-4 px-6 border-b ">Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                <td className="py-4 px-16 border-b ">Bkase </td>
                                <td className="py-4 px-6 border-b text-end">

                                <select
                                    className={` w-full ${selectedOption === 'Pending' ? 'option-pending' : ''} ${selectedOption === 'Done' ? 'option-done' : ''} ${selectedOption === 'On going' ? 'option-ongoing' : ''}`}
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                >
                                    <option disabled selected>Take Action</option>
                                    <option className="text-red-300" value="Pending">Pending</option>
                                    <option className="text-green-400" value="Done">Done</option>
                                    <option className="text-[#edb44a]" value="On going">On going</option>
                                </select>

                                </td>
                              
                            </tr>
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;