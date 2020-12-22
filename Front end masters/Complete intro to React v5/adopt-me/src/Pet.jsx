import React from 'react'

export default function Pet({ data: { name, animal, breed } }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Animal: {animal} </h2>
      <h3>Breed: {breed}</h3>
    </div>
  )
}
