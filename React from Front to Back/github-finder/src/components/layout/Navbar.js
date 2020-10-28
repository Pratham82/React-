import React from "react"
import PropTypes from "prop-types"

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      {" "}
      <h1>
        {" "}
        <i className={icon} />
        &nbsp; {title}
      </h1>{" "}
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
