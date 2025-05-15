import { useEffect, useState } from "react";
import userApi from "../api/userApi";

const Home = () => {
    const email = localStorage.getItem("email");

    useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await userApi.get(`/${email}`);
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('address', response.data.address);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    };

    if (email) {
      fetchUserData();
    } else {
      console.warn("No email found in localStorage");
    }
  }, [email]);

    return (
        <div className="home-page">
            <h1>Welcome to our page!</h1>
            <h2>- Power bill management -</h2>
        </div>
    );
};

export default Home;