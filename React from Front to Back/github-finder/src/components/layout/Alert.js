import React, { useContext } from "react"
import AlertContext from "../../contexts/alert/alertContext"

const Alert = () => {
  const alertContext = useContext(AlertContext)
  const { alert } = alertContext

  return (
    alert !== null && (
      <div className={`alert ${alert.type}`}>
        <i className="fas fa-info-circle" /> &nbsp;
        {alert.message}
      </div>
    )
  )
}

export default Alert
