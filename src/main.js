import React, { Component } from "react";
import "./main.css";
import Content from "./content";
import Footer from "./footer";
import Jupiter_Juno from "./images/Jupiter_Juno.jpg";
import Title from "./title";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="relative">
        <img
          className="opacity-60 top-0 left-0 fixed w-full h-auto"
          src={Jupiter_Juno}
          alt=""
        ></img>
        <div className="content relative">
          <Title />
          <Content />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
