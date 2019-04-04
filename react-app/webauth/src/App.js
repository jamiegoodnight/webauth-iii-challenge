import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavLink exact to="/">
            {" "}
            | SIGN IN{" "}
          </NavLink>
          <NavLink to="/signup">| SIGN UP |</NavLink>
          <NavLink to="/users"> USERS |</NavLink>
        </header>
        <>
          <Route path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/users" component={Users} />
        </>
      </>
    );
  }
}

export default App;
