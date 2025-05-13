import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;