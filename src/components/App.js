import React from 'react'
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {

  return (
    <div id="main">
      <Router>
          <LoginForm />
          <Dashboard />
      </Router>
    </div>
  )
}


export default App;
