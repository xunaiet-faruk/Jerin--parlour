import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Loading";


const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location =useLocation()
    if(loading){
        <Loading/>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from : location}} replace></Navigate>
} 

export default PrivateRoute;