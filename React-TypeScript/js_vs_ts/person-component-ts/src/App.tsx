import { randomFillSync } from 'crypto'
import React from 'react'
import './App.css'
import Person from './components/Person'

export default function App() {
  return (
    <div className="App">
      <Person
        name="Prathamesh Mali"
        birthDate={new Date('1997-09-08')}
        birthLocation={{
          longitude: '20W',
          latitude: '80N',
          height: 200,
        }}
      />
    </div>
  )
}
