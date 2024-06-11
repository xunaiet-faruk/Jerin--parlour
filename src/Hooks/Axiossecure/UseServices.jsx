import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";


const UseServices = () => {
 
    const axiosSecure =UseAxios();
    const {refetch, data : services=[] } =useQuery({
        queryKey  : ['services'],
        queryFn : async() =>{
            const res = await axiosSecure.get('/Services');
            console.log("hellow world", res.data);
            return res.data;
        }
    })
    return [refetch, services]
};

export default UseServices;