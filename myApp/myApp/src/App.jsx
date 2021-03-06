﻿import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import List from "./components/List";
import Blank from "./components/Blank";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Redirect exact path = "/" to = "/List" />
          <Route path = "/List" component = { List } />
          <Route path = "/Blank" component = { Blank } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
