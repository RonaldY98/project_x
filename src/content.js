import { Component } from "react";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Contact from "./contact";
import ScrollSpy from "react-ui-scrollspy";
import Navbar from "./navbar";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex flex-row">
        <Navbar />
        <div
          className="content relative ml-48"
          style={{
            marginRight: "15%",
          }}
        >
          <ScrollSpy scrollThrottle={10} offsetTop={-600}>
            <AboutMe />
            <Projects />
            <Contact />
          </ScrollSpy>
        </div>
      </div>
    );
  }
}

export default Content;
