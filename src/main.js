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
      <div className="flex justify-center bg-gray-400 text-lg">
        <ul className="flex flex-row space-x-4 text-white">
          <li className="text-black">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="text-red-700">
            <NavLink to="/stuff">Stuff</NavLink>
          </li>
          <li className="text-blue-500">
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
      <div>
        <div className="">
          <img
            src="Jupiter_Juno.jpg"
            alt=""
            className="w-full h-96 object-cover"
          ></img>
          <h1 className="flex justify-center text-4xl">Ronald Yeung</h1>
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
        <div>
          {this.renderNavbar()}
          {this.renderContent()}
        </div>
      </HashRouter>
    );
  }
}

export default Main;
