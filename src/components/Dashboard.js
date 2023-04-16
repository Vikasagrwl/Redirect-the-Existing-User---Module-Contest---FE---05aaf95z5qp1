import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleClick = ()=>{
    setIsLoggedIn(false);
  }

  if(!isLoggedIn){
    return <Redirect to={'/'}/>
  }
  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <button className="logout-btn" onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Dashboard;
