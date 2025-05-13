import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const Logout = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate("/");
    }, []);

    return null;
};

export default Logout;