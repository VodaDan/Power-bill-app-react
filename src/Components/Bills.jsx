import { useEffect, useState } from "react";
import billsApi from "../api/billsApi";
import "./Bills.css";

const Bills = () => {

    const [billsInfo, setBillsInfo] = useState(null);
    const id = localStorage.getItem('id');
     useEffect(() => {
    const fetchBillsData = async () => {
      try {
        const response = await billsApi.get(`/${id}`);
        setBillsInfo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    };

    if (id) {
      fetchBillsData();
    } else {
      console.warn("No email found in localStorage");
    }
  }, [id]);
  

  if (!billsInfo) {
    return <p></p>;
  }

  return (
  <div className="bills-page">
    <h2>Your Bills</h2>

    {billsInfo.length === 0 ? (
      <p>No bills available.</p>
    ) : (
      <table className="bills-table">
        <thead>
          <tr>
            <th>Bill ID</th>
            <th>Customer ID</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Amount (Ron)</th>
          </tr>
        </thead>
        <tbody>
          {billsInfo.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.customerId}</td>
              <td>{bill.issueDate}</td>
              <td>{bill.dueDate}</td>
              <td>{Number(bill.amount).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

}

export default Bills;