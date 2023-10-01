import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./main.css";
// import Scrollspy from "react-scrollspy";
import Navbar from "./navbar";
import Content from "./content";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="">
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default Main;
