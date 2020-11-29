import React from 'react'

// Abstracting away the big objects in main interface and declaring it individually
interface Location {
  longitude: string
  latitude: string
  /**
   * Pass your height in meters
   * */
  height?: number
}

// Creating interface for props
interface PersonProps {
  // We can use multiple types for our one property using pipe, pipe is similar to OR
  //name: string | { firstName: string; lastName: string }
  // JSDoc comments( This will show to the consumers of our app, we should add the explanation of the properties which are not obvious and much complex )
  name: string
  /**
   * Use this date format:  YYYY-DD--MM
   **/
  birthDate: Date
  birthLocation: Location
}

const Person = ({ name, birthDate, birthLocation }: PersonProps) => (
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
