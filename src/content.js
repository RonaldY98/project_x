import { Component } from "react";
import Title from "./title";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Contact from "./contact";
import ScrollSpy from "react-ui-scrollspy";

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
        <ScrollSpy scrollThrottle={10} offsetTop={-600}>
          <Title />
          <AboutMe />
          <Projects />
          <Contact />
        </ScrollSpy>
      </div>
    );
  }
}

export default Content;
