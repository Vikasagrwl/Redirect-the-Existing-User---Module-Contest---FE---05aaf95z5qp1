import React from 'react'
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {

  return (
    <Router>
      <div id="main">
        <Switch>
          <Route exact path={"/"}><LoginForm/></Route>
          <Route exact path={"/dashboard"} ><Dashboard/></Route>
        </Switch>
      </div>
    </Router>
  )
}


export default App;
