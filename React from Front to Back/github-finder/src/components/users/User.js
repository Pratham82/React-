import React, { Component } from "react"

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user
    return (
      <div>
        User Info:
        <h1>{name}</h1>
        <img src={`${avatar_url}`} alt="" style={{ width: "200px" }} />
      </div>
    )
  }
}
