import React, { useContext } from "react"
import UserItem from "./UserItem"
import Spinner from "../layout/Spinner"
import GithubContext from "../../contexts/github/githubContext"

const Users = () => {
  const githubContext = useContext(GithubContext)
  const usersStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  }
  const { loading, users } = githubContext

  return (
    <div style={usersStyle}>
      {loading ? (
        <Spinner />
      ) : (
        users.map((user) => <UserItem user={user} key={user.id} />)
      )}
    </div>
  )
}

export default Users
