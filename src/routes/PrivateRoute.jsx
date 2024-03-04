import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
const privateRoute = ({ children }) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log('location are ', location)

    if(loading){
        return <span className="loading loading-ball loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default privateRoute;