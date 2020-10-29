import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Search extends Component {
  state = {
    text: "",
  }

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light")
    } else {
      this.props.searchUser(this.state.text)
      this.setState({ text: "" })
    }
  }

  handleClick = () => console.log("check")

  render() {
    const { showClear, clearUser } = this.props

    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            placeholder="Search Usernames"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUser}>
            Clear
          </button>
        )}
      </div>
    )
  }
}
