import React, { useContext, useEffect } from "react"
import Spinner from "../layout/Spinner"
import { Link } from "react-router-dom"
import Repos from "../repos/Repos"
import GithubContext from "../../contexts/github/githubContext"

const User = ({ match }) => {
  const githubContext = useContext(GithubContext)
  const { getUser, user, loading, repos, getRepos } = githubContext
  useEffect(() => {
    getUser(match.params.login)
    getRepos(match.params.login)
    // For mimicking the behavior of componentDidMount we will add empty array.
    // So useEffect hook will only run once the component is mounted to the dom.
    // If we didn't provide any parameter there it will run in a loop for every update
    // Disabling eslint for avoding warnings
    // eslint-disable-next-line
  }, [])
  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link to="/" className="btn btn-light">
            Back to search
          </Link>
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                alt=""
                className="round-img"
                style={{ width: "150px" }}
              />
              <h2>{name}</h2>
              {location && <p>📍 {location}</p>}
              <p>
                {hireable ? (
                  <i className="fas fa-check text-success"></i>
                ) : (
                  <i className="fas fa-times-circle text-danger"></i>
                )}{" "}
                Hirable
              </p>
            </div>
            <div>
              {bio && (
                <>
                  <h3>Bio:</h3> <p>{bio}</p>
                </>
              )}
              <>
                {" "}
                <ul>
                  <a href={html_url} className="btn btn-dark my-1">
                    Visit on Github
                  </a>

                  <li>
                    {login && (
                      <>
                        {" "}
                        <b>Username: </b>
                        {login}
                      </>
                    )}
                  </li>
                  <li>
                    {company && (
                      <>
                        {" "}
                        <b>Company: </b>
                        {company}
                      </>
                    )}
                  </li>
                  <li>
                    {blog && (
                      <>
                        {" "}
                        <b>Blog: </b>
                        {blog}
                      </>
                    )}
                  </li>
                </ul>
              </>
            </div>
          </div>
        </>
      )}
      <div className="card text-center">
        <h3>Stats</h3>
        <div className="badge badge-success">Followers: {followers}</div>
        <div className="badge badge-warning">Following: {following}</div>
        <div className="badge badge-normal">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>

      <Repos repos={repos} />
    </div>
  )
}

export default User
