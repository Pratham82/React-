import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  // Defvault Props: If the props are not passed then these props values will be used
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  }

  // PropTypes: Type Checking for our props;
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }

  render() {
    return (
      <nav className="navbar bg-primary">
        {" "}
        <h1>
          {" "}
          <i className={this.props.icon} />
          &nbsp; {this.props.title}
        </h1>{" "}
      </nav>
    )
  }
}
