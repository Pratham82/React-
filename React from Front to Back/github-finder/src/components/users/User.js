import React, { Component } from "react"
import Spinner from "../layout/Spinner"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Repos from "../repos/Repos"

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
    this.props.getRepos(this.props.match.params.login)
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  }

  render() {
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
    } = this.props.user
    const { loading, repos } = this.props
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
}
