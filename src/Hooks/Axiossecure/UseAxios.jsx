import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const axiosSecure =axios.create({
    baseURL:"http://localhost:5000"
})
const UseAxios = () => {
    return axiosSecure;
};

export default UseAxios;