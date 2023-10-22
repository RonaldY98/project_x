import React, { Component } from "react";
import NavItem from "./navItem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        id="nav-bar"
        className="flex fixed left-7 top-1/4 z-50 h-1/2 w-28 rounded-lg overflow-hidden text-lg font-inter"
      >
        <ul className="cursor-pointer grid grid-cols-1 w-full">
          {/* To add border use 'border-l-4 border-transparent border-blue-400' */}
          {/* <NavItem title="HOME" scrollspyId="section_1" active={true}></NavItem> */}
          <NavItem
            title="ABOUT ME"
            scrollspyId="section_2"
            active={false}
          ></NavItem>
          <NavItem
            title="PROJECTS"
            scrollspyId="section_3"
            active={false}
          ></NavItem>
          <NavItem
            title="CONTACT"
            scrollspyId="section_4"
            active={false}
          ></NavItem>
        </ul>
      </div>
    );
  }
}

export default Navbar;
