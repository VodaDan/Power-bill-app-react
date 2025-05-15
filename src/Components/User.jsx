import { useEffect, useState } from "react";
import userApi from '../api/userApi';

const User = () => {
    
    const [userInfo, setUserInfo] = useState(null);
    const email = localStorage.getItem('email');
    useEffect(() => {
        const fetchUserData = async() =>{
            try {
                const response = await userApi.get(`/${email}`);
                setUserInfo(response.data);
            } catch(error) {
                console.error("Failed to fetch data: ",error);
            }
        };

        if(email) {
            fetchUserData();
        } else {
            console.warn("No email found in localStorage")
        }
    },[email]);

    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>ID:</strong>{userInfo.id}</p>
            <p><strong>Email:</strong>{userInfo.email}</p>
            <p><strong>Name:</strong>{userInfo.name}</p>
            <p><strong>Address:</strong>{userInfo.address}</p>
        </div>
    )
};

export default User;