import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import UseAxios from "./UseAxios";
import { AuthContext } from "../../Component/Authentication/Providers/Authprovider";



const Usebooking= () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxios();
    const { refetch, data: book = [] } = useQuery({
        queryKey: ['book', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/Services?email=${user?.email}`);
            console.log(res, "hellow world");
            return res.data;
            
        }
    });
    return [book, refetch];
};

export default Usebooking;
