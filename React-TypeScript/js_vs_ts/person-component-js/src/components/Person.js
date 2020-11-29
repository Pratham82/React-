import React from 'react'

const Person = ({ name, birthDate, birthLoaction }) => (
  <div>
    <h1>
      <b>Name</b>: {name}{' '}
    </h1>
    <h3>
      <b>Birthdate</b>: {birthDate.toISOString()}
    </h3>
    <h4>
      <b>Birth Location:</b>
    </h4>
    <h4>
      {' '}
      <b>Location Longitude</b> {birthLoaction.longitude}
    </h4>
    <h4>
      {' '}
      <b>Location Latitude</b> {birthLoaction.latitude}
    </h4>
    <h4>
      {' '}
      <b>Location Height</b> {birthLoaction.height + 'M'}
    </h4>
  </div>
)

export default Person
