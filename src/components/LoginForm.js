import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
  
  const[state, setState] = useState({
    username:"",
    password:"",
  })
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  }
  const handleLogin = (e) => {
    e.preventDefault();
    if (state.username === "admin" && state.password === "newton_school") {
      setIsLoggedIn(true);
      
    } else{
      setErrorMessage("Invalid username or password");
    }
  };

    if(isLoggedIn){
      return <Redirect to="/dashboard"/> 
    }

  return (
    <div className="login-div">
        <h1>Login Form</h1>
        <form className="form" onSubmit={handleLogin}>
          <div className="username-div">
              <label className="username-label">Username:</label>
              <input
                  className="username-input"
                  type="text"
                  name="username"
                  onChange={handleChange}
              />
          </div>
          <div className="password-div">
              <label className="password-label">Password:</label>
              <input
                  className="password-input"
                  type="password"
                  name="password"
                  onChange={handleChange}
              />
          </div>
          <button type="submit" className="login-btn">Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
