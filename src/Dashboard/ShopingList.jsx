import Swal from "sweetalert2";
import UseAxios from "../Hooks/Axiossecure/UseAxios";
import Usecard from "../Hooks/Usecard";
import { FaDeleteLeft } from "react-icons/fa6";

const ShopingList = () => {
    const [cart, refetch] = Usecard();

    const axios =UseAxios();

    const handleDelete =id=>{
    
        axios.delete(`/Shoping/${id}`)
        .then(res =>{
            if(res.data.deletedCount > 0){
                Swal.fire({
                    title: "Successfully Deleted",
                    text: `Deleted This Product`,
                    icon: "success"
                });
                refetch();
            }
        })
    
    }

    return (
        <div className="mt-12">
            <div className="overflow-x-auto ">
                <table className="min-w-[90%] bg-white shadow-md border mx-auto border-gray-100 my-6">
                    <thead className="rounded-full py-12 border-t-2 border-pink-300">
                        <tr className="bg-gray-100  text-[#959191]  text-sm">
                            <th className="py-3 px-6 text-left border-b">Image </th>
                            <th className="py-3 px-6 text-left border-b">Name</th>
                            <th className="py-3 px-6 text-left border-b">Email</th>
                            <th className="py-3 px-6 text-left border-b">Service</th>
                            <th className="py-3 px-14 border-b text-end">Pay</th>
                            <th className="py-3 px-12 border-b ">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart?.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border-b"> 
                                <img src={item?.image} alt="table navigate ui" className="h-14 rounded-full w-14 object-cover bg-gray-300" /></td>
                                <td className="py-4 px-6 border-b">{item?.name}</td>
                                <td className="py-4 px-6 border-b">12900</td>
                                <td className="py-4 px-6 border-b">junaiet ds</td>
                                <td className="py-4 px-6 border-b text-end">juniet faruk</td>
                                <td className="text-end pl-24 hover:text-red-400 cursor-pointer">
                                <FaDeleteLeft onClick={() =>handleDelete(item._id)}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShopingList;
