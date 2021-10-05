import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }
  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <div onClick={(e) => this.togglePanel(e)} className="dropdown-title">
          {this.props.title}
          <FontAwesomeIcon
            icon={this.state.open ? faChevronUp : faChevronDown}
          />
        </div>
        {this.state.open ? (
          <div className="dropdown-content">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default DropDown;
