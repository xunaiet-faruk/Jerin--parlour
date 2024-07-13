import { useContext } from "react";
import UseAxios from "./UseAxios";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Component/Authentication/Providers/Authprovider";

const UseServices = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxios();

    const { refetch, data: services = [], isLoading } = useQuery({
        queryKey: ['services', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure.get(`/Services?email=${user.email}`);
                console.log(res.data);
                return res.data;
            }
            return [];
        },
    });

    const updateServiceStatus = async (id, status) => {
        try {
            const res = await axiosSecure.patch(`/Services/${id}`, { status });
            refetch();
            return res.data;
        } catch (error) {
            console.error("Error updating service status:", error);
        }
    };

    return [refetch, services, isLoading, updateServiceStatus];
};

export default UseServices;
