import React, { Component } from "react"
import UserItem from "./UserItem"

export default class Users extends Component {
  render() {
    const usersStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: "1rem",
    }
    const { user, loading } = this.props
    console.log(loading)

    return (
      <div style={usersStyle}>
        {user.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    )
  }
}
