import { useQuery } from "@tanstack/react-query";
import UseAxios from "./Axiossecure/UseAxios";
import { useContext } from "react";
import { AuthContext } from "../Component/Authentication/Providers/Authprovider";

const Usecard = () => {
    const {user} =useContext(AuthContext)
    const axiosSecure = UseAxios();
    const { refetch,data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/Shoping?email=${user?.email}`);
            return res.data;
        }
    });
    return [cart,refetch];
};

export default Usecard;
