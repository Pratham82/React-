import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

const App = () => {
  return React.createElement('div', { id: 'Some info' }, [
    React.createElement('h1', {}, 'Adopt Me'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Pomeranian',
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'Bird',
      breed: 'Cocktatiel',
    }),
    React.createElement(Pet, {
      name: 'Doink',
      animal: 'Cat',
      breed: 'Mixed',
    }),
  ])
}
render(React.createElement(App), document.getElementById('root'))
