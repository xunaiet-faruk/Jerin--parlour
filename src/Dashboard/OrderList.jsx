import { useState } from "react";
import UseServices from "../Hooks/Axiossecure/UseServices";
import '../Dashboard/Orderlist.css';

const OrderList = () => {
    const [, services, , updateServiceStatus] = UseServices();
    const [statuses, setStatuses] = useState(services.reduce((acc, item) => {
        acc[item._id] = item.status || "Take Action";
        return acc;
    }, {}));

    const handleSelectChange = (e, id) => {
        const newStatus = e.target.value;
        setStatuses(prevStatuses => ({
            ...prevStatuses,
            [id]: newStatus,
        }));
        updateServiceStatus(id, newStatus);
    };

    return (
        <div className="mt-12">
            <div className="overflow-x-auto">
                {services.length > 0 && (
                    <table className="min-w-[90%] bg-white shadow-md border mx-auto border-gray-100 my-6">
                        <thead className="rounded-full py-12 border-t-2 border-pink-300">
                            <tr className="bg-gray-100 text-[#959191] text-sm">
                                <th className="py-3 px-6 text-left border-b">Image</th>
                                <th className="py-3 px-6 text-left border-b">Email</th>
                                <th className="py-3 px-6 text-left border-b">Service</th>
                                <th className="py-3 px-14 border-b text-end">Pay with</th>
                                <th className="py-3 px-12 border-b">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition duration-300 text-sm text-black">
                                    <td className="py-4 px-6 border-b">
                                        <img className="w-12 h-12 bg-cover rounded-full" src={item?.image} alt="" />
                                    </td>
                                    <td className="py-4 px-6 border-b">{item?.email}</td>
                                    <td className="py-4 px-6 border-b">{item?.title}</td>
                                    <td className="py-4 px-16 border-b">Bkase</td>
                                    <td className="py-4 px-6 border-b text-end">
                                        <select
                                            className={`w-full ${statuses[item._id] === 'Pending' ? 'option-pending' : ''} ${statuses[item._id] === 'Done' ? 'option-done' : ''} ${statuses[item._id] === 'On going' ? 'option-ongoing' : ''}`}
                                            value={statuses[item._id]}
                                            onChange={(e) => handleSelectChange(e, item._id)}
                                        >
                                            <option disabled value="Take Action">Take Action</option>
                                            <option className="text-red-300" value="Pending">Pending</option>
                                            <option className="text-green-400" value="Done">Done</option>
                                            <option className="text-[#edb44a]" value="On going">On going</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {services.length === 0 && (
                    <div className="text-center py-4 flex justify-center items-center">
                        <img src="https://i.ibb.co/ZW70Lhj/image-removebg-preview-78.png" alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderList;
