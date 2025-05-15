import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
    return (
        <>
        <Navbar />
            <main className="p-4">
                <div className="main-body">
                <Outlet />
                </div>
            </main>
        </>
    );
};

export default MainLayout;