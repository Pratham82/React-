import React from "react"

const Alert = ({ alert }) =>
  alert !== null && (
    <div className={`alert ${alert.type}`}>
      <i className="fas fa-info-circle" /> &nbsp;
      {alert.message}
    </div>
  )

export default Alert
