import { useEffect, useState } from "react";
import userApi from "../api/userApi";
import './User.css';

const User = () => {
  const [userInfo, setUserInfo] = useState(null);
  const email = localStorage.getItem("email");

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await userApi.get(`/${email}`);
  //       setUserInfo(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch data: ", error);
  //     }
  //   };

  //   if (email) {
  //     fetchUserData();
  //   } else {
  //     console.warn("No email found in localStorage");
  //   }
  // }, [email]);


  // if (!userInfo) {
  //   return <p>Loading user data...</p>;
  // }

    const userId = localStorage.getItem('id');
    const userName = localStorage.getItem('name');
    const userEmail = localStorage.getItem('email');
    const userAddress = localStorage.getItem('address');

        console.log(userId);

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