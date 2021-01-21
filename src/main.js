import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
// import Scrollspy from "react-scrollspy";
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
      <div
        id="menu-content"
        className="flex fixed left-7 top-1/4 z-50 h-1/2 w-28 rounded-lg overflow-hidden"
      >
        <ul className="cursor-pointer grid grid-cols-1 font-semibold w-full text-lg">
          <li className="flex flex-wrap justify-center content-center text-gray-100 text-opacity-60 bg-gray-800 bg-opacity-100 hover:bg-opacity-100 hover:text-gray-100 hover:text-opacity-60 border-l-4 border-transparent border-blue-400 ">
            <a className="outline-none" href="#section_1">
              Home
            </a>
          </li>
          <li className="flex flex-wrap justify-center content-center text-gray-100 text-opacity-20 bg-gray-800 bg-opacity-90 hover:bg-opacity-100 hover:text-gray-100 hover:text-opacity-60 border-l-4 border-transparent">
            <a href="#section_2">Stuff</a>
          </li>
          <li className="flex flex-wrap justify-center content-center text-gray-100 text-opacity-20 bg-gray-800 bg-opacity-90 hover:bg-opacity-100 hover:text-gray-100 hover:text-opacity-60 border-l-4 border-transparent">
            <a href="#section_3">Contact</a>
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
          <h1 className="flex justify-center text-6xl font-bold my-5">
            Ronald Yeung
          </h1>
        </div>

        <div
          className="content"
          style={{ marginLeft: "15%", marginRight: "15%" }}
        >
          <Home />
          <Stuff />
          <Contact />
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
      <div className="">
        {this.renderNavbar()}
        {this.renderContent()}
      </div>
    );
  }
}

export default Main;
