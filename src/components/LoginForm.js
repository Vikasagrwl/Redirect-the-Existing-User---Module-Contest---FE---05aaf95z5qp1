import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "newton_school") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="login-div">
        <h1>Login Form</h1>
        <form className="form">
          <div className="username-div">
              <label className="username-label">Username:</label>
              <input
                  className="username-input"
                  type="text"
              />
          </div>
          <div className="password-div">
              <label className="password-label">Password:</label>
              <input
                  className="password-input"
                  type="password"
              />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <p className="error-message">{errorMessage}</p>
      </form>
    </div>
  );
};

export default LoginForm;
