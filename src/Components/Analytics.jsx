import { useEffect, useState } from "react";
import analyticsApi from "../api/analyticsApi";
import "./Analytics.css";
import { Await } from "react-router-dom";

const Analytics = () => {
    
    const token = localStorage.getItem("token");
    const handleLogin = async () => {
        try {
        const roleResponse = await fetch("http://localhost:4005/api/authorize",{
                method: "GET",
                headers: {"Content-Type" : "application/json", "Authorization": `Bearer ${token}`}
            });

            if(!roleResponse.ok) {
                console.log(roleResponse.json);
                throw new Error("Invalid role");
            }
            const roleData = await roleResponse.json();
            localStorage.setItem("role",roleData.role);
        } catch (error) {
            console.log("Failed to fetch role")
        }  
    }
    handleLogin();
    const role = localStorage.getItem("role");

    const [analyticsInfo, setAnalyticsInfo] = useState("");

    useEffect(() => {
        if(role === "ADMIN") {
        const fetchAnalyticsInfo = async () => {
            try{
                const response = await analyticsApi.get();
                setAnalyticsInfo(response.data);
            } catch (error) {
                console.error("Failed to fetch data: ", error);
            }
        };

        fetchAnalyticsInfo();
        }
    });

    if(!analyticsInfo) {
        return (
         <div className="analytics-page">
            <p>You should not be here!</p>
         </div>   
        )
    };

    return (
    <div className="analytics-page">
            <h2>Analytics Dashboard</h2>
            <p><strong>Total Customers:</strong> {analyticsInfo.totalCustomers}</p>
            <p><strong>Total Bills:</strong> {analyticsInfo.totalBills}</p>
            <p><strong>Total Revenue:</strong> ${parseFloat(analyticsInfo.totalRevenue).toFixed(2)}</p>
            <p><strong>Average Bill Revenue:</strong> ${parseFloat(analyticsInfo.averageBillRevenue).toFixed(2)}</p>
            <p><strong>Generated On:</strong> {analyticsInfo.generationDate}</p>
        </div>
  );
    
};

export default Analytics;