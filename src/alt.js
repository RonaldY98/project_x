import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="flex fixed left-7 top-1/4 z-50 bg-gray-800 h-1/2 w-28 rounded-lg bg-opacity-90">
        <ul className="grid grid-cols-1 content-evenly font-semibold text-gray-100 text-lg text-opacity-20 mx-5">
          <li className="flex justify-center hover:text-gray-100 hover:text-opacity-60">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="flex justify-center hover:text-gray-100 hover:text-opacity-60">
            <NavLink to="/stuff">Stuff</NavLink>
          </li>
          <li className="flex justify-center hover:text-gray-100 hover:text-opacity-60">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="relative z-30">
        <div className="">
          <img
            src="Jupiter_Juno.jpg"
            alt="Jupiter"
            className="bg-fixed w-full h-96 object-cover"
          ></img>
          <h1 className="flex justify-center text-6xl my-5">Ronald Yeung</h1>
        </div>

        <div
          className="content"
          style={{ marginLeft: "15%", marginRight: "15%" }}
        >
          <div>
            <Route exact path="/" component={Home}></Route>
          </div>
          <div>
            <Route path="/stuff" component={Stuff}></Route>
          </div>
          <div>
            <Route path="/contact" component={Contact}></Route>
          </div>
        </div>
      </div>
    );
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderNavbar() {
    return <Navbar />;
  }

  renderContent() {
    return <Content />;
  }

  render() {
    return (
      <HashRouter>
        <div className="">
          {this.renderContent()}
          {this.renderNavbar()}
        </div>
      </HashRouter>
    );
  }
}

export default Main;
