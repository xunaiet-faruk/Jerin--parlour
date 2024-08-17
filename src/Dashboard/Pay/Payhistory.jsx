import { useContext } from "react";
import { AuthContext } from "../../Component/Authentication/Providers/Authprovider";
import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../Hooks/Axiossecure/UseAxios";


const Payhistory = () => {
    const {user} =useContext(AuthContext);
    const axiosSecure =UseAxios()
    const {data :payments} =useQuery({
        queryKey : ['payments',user?.email],
        queryFn : async() => {
            const res = await axiosSecure.get(`/Payment/${user?.email}`)
            return res.data;
        }
    })
    return (
        <div className="mt-12">

            <div className="overflow-x-auto ">
                <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
                    <thead>
                        <tr className="bg-gray-100 text-[#959191] border-t-2 border-pink-300">
                            <th className="py-3 px-6 text-left border-b">#</th>
                            <th className="py-3 px-6 text-left border-b">Gmail</th>
                            <th className="py-3 px-6 text-left border-b">TransitionId</th>
                            <th className="py-3 px-6  border-b text-end">Price</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        
                      {
                            payments?.map((item, index) => <tr key={index} className="hover:bg-gray-50 transition duration-300">
                                <td className="py-4 px-6 border-b">{index+1}</td>
                                <td className="py-4 px-6 border-b">{item?.email}</td>
                                <td className="py-4 px-6 border-b">{item?.transitionId}</td>
                                <td className="py-4 px-6 border-b text-end">{item.price}</td>
                            </tr>)
                      }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Payhistory;