import { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="h-screen">
        <h1 className="flex justify-center text-8xl text-yellow-200 mt-96 mb-3 font-inter">
          Ronald Yeung
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
