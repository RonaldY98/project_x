import { Component } from "react";

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      scrollspyId: props.scrollspyId,
      active: props.active,
    };
  }
  render() {
    let classAttributes =
      "flex flex-wrap justify-center content-center text-gray-100 bg-gray-800 hover:bg-opacity-100 hover:text-gray-100 hover:text-opacity-60";
    if (!this.state.active) {
      classAttributes +=
        " text-opacity-20 bg-opacity-90 border-l-4 border-transparent";
    } else {
      classAttributes += " text-opacity-60 bg-opacity-100";
    }

    console.log(this.state.title, this.state.scrollspyId);

    return (
      <li className={classAttributes}>
        <p data-to-scrollspy-id={this.state.scrollspyId}>{this.state.title}</p>
      </li>
    );
  }
}

export default NavItem;
