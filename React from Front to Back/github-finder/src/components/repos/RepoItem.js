import React from "react"

const RepoItem = ({ name, language, stars, description, link }) => (
  <div>
    <div className="card my-4 mx-2">
      <h3>
        <a href={link} className="text-dark">
          {name}
        </a>
        &nbsp;
        {language && <div className="badge badge-danger">{language} </div>}
      </h3>
      {description}
    </div>
  </div>
)
export default RepoItem
