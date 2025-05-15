import { useEffect, useState } from "react";
import userApi from "../api/userApi";
import './User.css';

const User = () => {
  
    const userId = localStorage.getItem('id');
    const userName = localStorage.getItem('name');
    const userEmail = localStorage.getItem('email');
    const userAddress = localStorage.getItem('address');


    return (
        <div className="user-card">
            <h2>User Profile</h2>
            <p className="user-detail"><strong>ID:</strong> {userId}</p>
            <p className="user-detail"><strong>Email:</strong> {userEmail}</p>
            <p className="user-detail"><strong>Name:</strong> {userName}</p>
            <p className="user-detail"><strong>Address:</strong> {userAddress}</p>
        </div>
    );
};

export default User;