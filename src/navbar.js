import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        id="nav-bar"
        className="flex fixed left-7 top-1/4 z-50 h-1/2 w-28 rounded-lg overflow-hidden"
      >
        <ul className="cursor-pointer grid grid-cols-1 font-semibold w-full text-lg">
          {/* To add border use 'border-l-4 border-transparent border-blue-400' */}
          <li className="flex flex-wrap justify-center content-center text-gray-100 text-opacity-60 bg-gray-800 bg-opacity-100 hover:bg-opacity-100 hover:text-gray-100 hover:text-opacity-60">
            <a className="outline-none" href="#section_1">
              HOME
            </a>
          </li>
          <li className="flex flex-wrap justify-center content-center text-gray-100 text-opacity-20 bg-gray-800 bg-opacity-90 hover:bg-opacity-100 hover:text-gray-100 hover:text-opacity-60 border-l-4 border-transparent">
            <a href="#section_2">ABOUT ME</a>
          </li>
          <li className="flex flex-wrap justify-center content-center text-gray-100 text-opacity-20 bg-gray-800 bg-opacity-90 hover:bg-opacity-100 hover:text-gray-100 hover:text-opacity-60 border-l-4 border-transparent">
            <a href="#section_3">PROJECTS</a>
          </li>
          <li className="flex flex-wrap justify-center content-center text-gray-100 text-opacity-20 bg-gray-800 bg-opacity-90 hover:bg-opacity-100 hover:text-gray-100 hover:text-opacity-60 border-l-4 border-transparent">
            <a href="#section_4">CONTACT</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
