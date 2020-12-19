import { createElement } from 'react'

const Pet = ({ name, animal, breed }) => {
  return createElement('div', {}, [
    createElement('h1', {}, 'Name: ', name),
    createElement('h2', {}, 'Animal: ', animal),
    createElement('h2', {}, 'Breed: ', breed),
  ])
}

export default Pet
