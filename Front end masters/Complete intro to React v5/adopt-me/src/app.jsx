import React from 'react'
import { render } from 'react-dom'
//import Pet from './Pet.jsx'
//import data from './data.json'
import SearchParams from './SearchParams.jsx'

const App = () => (
  <div id="Some info">
    <h1>Adopt Me</h1>
    <SearchParams />

    {/*

    {data.map(el => (
      <Pet data={el} key={el.name} />
    ))}
      */}
  </div>
)

render(React.createElement(App), document.getElementById('root'))
