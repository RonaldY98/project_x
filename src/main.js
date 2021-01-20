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
      // <nav className="navbar navbar-expand-lg">
      //   <ul className="nav justify-content-end">
      //     <NavLink className="navbar-brand" exact to="/">
      //       Ronald Yeung
      //     </NavLink>
      //     <li className="nav-item color-gray-500">
      //       <NavLink className="nav-link active" exact to="/">
      //         Home
      //       </NavLink>
      //     </li>
      //     <li className="nav-item">
      //       <NavLink className="nav-link" to="/stuff">
      //         Stuff
      //       </NavLink>
      //     </li>
      //     <li className="nav-item bg-cyan-500">
      //       <NavLink className="nav-link" to="/contact">
      //         Contact
      //       </NavLink>
      //     </li>
      //   </ul>
      // </nav>
      <div className="flex fixed left-7 top-1/4 z-50 bg-gray-800 text-lg h-1/2 w-28 font-bold rounded-lg bg-opacity-90">
        <ul className="grid grid-cols-1 content-evenly text-gray-100 text-opacity-20 mx-5">
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
            alt=""
            className="w-full h-96 object-cover"
          ></img>
          <h1 className="flex justify-center text-6xl my-5">Ronald Yeung</h1>
        </div>

        <div
          className="content"
          style={{ marginLeft: "15%", marginRight: "15%" }}
        >
          <Route exact path="/" component={Home} />
          <Route path="/stuff" component={Stuff} />
          <Route path="/contact" component={Contact} />
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
