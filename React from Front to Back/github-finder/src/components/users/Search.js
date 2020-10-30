import React, { useContext, useState } from "react"
import GithubContext from "../../contexts/github/githubContext"
import AlertContext from "../../contexts/alert/alertContext"

const Search = () => {
  const [text, setText] = useState("")
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const { searchUser, users, clearUser } = githubContext
  const { setAlert } = alertContext

  const handleChange = (e) => setText(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === "") {
      setAlert("Please enter something", "light")
    } else {
      searchUser(text)
      setText("")
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search Usernames"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUser}>
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
