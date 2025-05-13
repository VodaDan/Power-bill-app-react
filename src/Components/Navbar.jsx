import {Link} from "react-router-dom";
import '../style.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">PowerBillApp</div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user">User</Link></li>
                    <li><Link to="/bills">Bills</Link></li>
                    <li><Link to="/contact">Contact</Link></li>         
                </ul>
            <button id="logoutButton">Logout</button>
        </nav>
    );
};

export default Navbar;