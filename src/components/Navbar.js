import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//css
import "../css/navbar.css";

//user components

import { List } from "./List";
import { ShopingPage } from "./ShopingPage";

// constructor(props){
//     super(props)
// }
export class VmNavbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" variant="dark" className="navhead">
          <Navbar className="htitle">Vending Machine</Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Router>
              <Nav className="mr-auto">
                <Link to="/ShopingPage" className="hclick">
                  Home
                </Link>
                <Link to="/list" className="hclick">
                  Requsts
                </Link>
              </Nav>

              <Switch>
                <Route exact path="/ShopingPage">
                  <ShopingPage />
                </Route>
                <Route exact path="/list">
                  <List />
                </Route>
              </Switch>
            </Router>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
