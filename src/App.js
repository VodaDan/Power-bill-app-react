import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./Components/MainLayout";
import Home from "./Components/Home";


function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="/user" element={<User />} />
                    <Route path="/bills" element={<Bills />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;