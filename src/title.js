import { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="h-screen pt-96 " id="section_1">
        <h1 className="flex justify-center text-8xl text-yellow-200 mb-3 font-inter font-light">
          Ronny Yeung
        </h1>
        <h3 className="flex justify-center text-3xl text-white font-bold">
          Software Engineer | Bartender | Optimist
        </h3>
        <h3 className="flex justify-center text-white">
          The World's Your Oyster, And It's Buck a' Shuck
        </h3>
      </div>
    );
  }
}

export default Title;
