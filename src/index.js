import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

// Styles
// Import Flag Icons Set
import "flag-icon-css/css/flag-icon.min.css";
// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Import Simple Line Icons Set
import "simple-line-icons/css/simple-line-icons.css";
// Import Main styles for this application
import "../scss/style.scss";
// Temp fix for reactstrap
import "../scss/core/_dropdown-menu-right.scss";
// Containers
import Login from "./containers/Login/";
import AdminPanel from "./containers/AdminPanel/";

/*=========================================================================
// This is where the high level routing of Big Data System is handled and 
// React elements are placed into the DOM via the div with id 'root'.
=========================================================================*/
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/admin" component={AdminPanel} />
      <Route path="/" component={Login} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
