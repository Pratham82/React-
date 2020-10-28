import React, { Component } from "react"

export default class Search extends Component {
  state = {
    text: "",
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchUser(this.state.text)
    this.setState({ text: "" })
  }

  render() {
    return (
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
    )
  }
}
