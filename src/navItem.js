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
      "flex flex-wrap justify-center content-center text-gray-100 hover:text-gray-100 hover:text-opacity-60 whitespace-nowrap";
    if (!this.state.active) {
      classAttributes += " text-opacity-20 border-l-4 border-transparent";
    } else {
      classAttributes += " text-opacity-60";
    }

    console.log(this.state.title, this.state.scrollspyId);

    return (
      <div className={classAttributes} style={{ height: "33vh" }}>
        <p data-to-scrollspy-id={this.state.scrollspyId} className="w-auto">
          {this.state.title}
        </p>
      </div>
    );
  }
}

export default NavItem;
