import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Dashboard;
