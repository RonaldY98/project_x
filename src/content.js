import { Component } from "react";
import Title from "./title";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Contact from "./contact";

import Jupiter_Juno from "./images/Jupiter_Juno.jpg";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="relative" id="section_1">
        <img
          className="opacity-60 top-0 left-0 fixed w-full h-auto"
          src={Jupiter_Juno}
          alt=""
        ></img>
        <div
          className="content relative ml-48"
          style={{
            marginRight: "15%",
          }}
        >
          <Title />
          <AboutMe />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default Content;
