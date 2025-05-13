import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import './login.css';
const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:4005/auth/login", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({email,password}),
            });
        
            if(!response.ok) {
                console.log(response.json());
                throw new Error("Invalid Credentials!");
                
            }

            const data = await response.json();
            localStorage.setItem("email",email);
            login(data);
            navigate("/home");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="login-container-body">
            <div className="login-container">
                <h2>Login</h2>
                <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) =>setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) =>setPassword(e.target.value)}
                />
                <button onClick = {handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;