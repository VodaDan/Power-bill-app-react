import {Link} from "react-router-dom";
import { useAuth } from "../context/auth-context";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">PowerBillApp</div>
                <ul className="nav-links">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/user" className="nav-link">User</Link></li>
                    <li><Link to="/bills" className="nav-link">Bills</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>         
                </ul>
            <Link to='/logout'><button id="logoutButton" >Logout</button></Link>
        </nav>
    );
};

export default Navbar;