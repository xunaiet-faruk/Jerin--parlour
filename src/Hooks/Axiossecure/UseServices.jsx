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
                try {
                    const res = await axiosSecure.get(`/Services?email=${user.email}`);
                    console.log("services",res);
                    return res.data;
                } catch (error) {
                    console.error("Error fetching services:", error);
                    return [];
                }
            }
            return [];
        },
        enabled: !!user?.email,
    });

    const updateServiceStatus = async (serviceId, status) => {
        try {
            console.log('Sending PATCH request with id:', serviceId, 'and status:', status);
            const response = await axiosSecure.patch(`/Services/${serviceId}`, { status });
            console.log('Response data:', response.data);
            console.log('Response status:', response.status);
        
            refetch(); 
        } catch (error) {
            console.error('Error updating service status:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
        }
    };

    return [refetch, services, isLoading, updateServiceStatus];
};

export default UseServices;
