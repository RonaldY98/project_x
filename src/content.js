import { Component } from "react";
import Title from "./title";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Contact from "./contact";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
    );
  }
}

export default Content;
