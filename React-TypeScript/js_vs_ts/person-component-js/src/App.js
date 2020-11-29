import './App.css'
import Person from './components/Person'

export default function App() {
  return (
    <div className="App">
      <Person
        name="Prathamesh Mali"
        birthDate={new Date('1997-08-09')}
        birthLoaction={{
          longitude: '20W',
          latitude: '80N',
          height: 200,
        }}
      />
    </div>
  )
}
