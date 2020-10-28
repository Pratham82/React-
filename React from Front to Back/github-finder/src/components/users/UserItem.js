import React, { Component } from "react"

export default class UserItem extends Component {
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://www.github.com/mojombo",
  }
  render() {
    //Destructuring props values from the state:
    const { login, avatar_url, html_url } = this.props

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          className="round-img"
          alt={login}
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>

        <a href={html_url} className="btn btn-dark btn-sm my-1" target="_">
          More
        </a>
      </div>
    )
  }
}
