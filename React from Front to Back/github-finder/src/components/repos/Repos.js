import React, { Fragment } from "react"
import RepoItem from "./RepoItem"
import PropTypes from "prop-types"

const Repos = ({ repos }) => (
  <Fragment>
    {" "}
    {repos.map((repo) => (
      <RepoItem
        key={repo.id}
        id={repo.id}
        name={repo.name}
        language={repo.language}
        stars={repo.stargazers_count}
        description={repo.description}
        link={repo.html_url}
      />
    ))}{" "}
  </Fragment>
)

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default Repos
