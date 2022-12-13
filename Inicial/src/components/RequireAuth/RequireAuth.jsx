import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({children}){
    const { isLoggedIn } = useContext(AuthContext);
    const location = useLocation();

    if(!isLoggedIn) {
        return <Navigate to="/login" state={{from : location}} replace/>
    }

    return children;
}

export default RequireAuth