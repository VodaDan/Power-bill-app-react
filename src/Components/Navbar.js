export default function Navbar() {
    return (
        <nav className="navbar">
        <div className="logo">PowerBillApp</div>
        <ul className="nav-links">
            <li><a href="../Home/home.html">Home</a></li>
            <li><a href="../User/user.html">User</a></li>
            <li><a href="../Bills/bills.html">Bills</a></li>
            <li><a href="../Contact/contact.html">Contact</a></li>   
            
        </ul>
        <button id="logoutButton">Logout</button>
    </nav>
    )
}