import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Home from "./Components/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./Components/Login"
import Logout from "./Components/Logout";
import User from "./Components/User";
import Bills from "./Components/Bills";
import Analytics from "./Components/Analytics";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    element={
                        <PrivateRoute>
                        <MainLayout />
                        </PrivateRoute>
                    }
                >
                    <Route path="/home" element={<Home />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/bills" element={<Bills />} />
                    <Route path="/analytics" element={<Analytics />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;