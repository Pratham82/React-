import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      {" "}
      <h1>
        {" "}
        <Link to="/">
          <i className={icon}></i> &nbsp;
          {title}
        </Link>
      </h1>{" "}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

// Defvault Props: If the props are not passed then these props values will be used
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
}

// PropTypes: Type Checking for our props;
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Navbar
