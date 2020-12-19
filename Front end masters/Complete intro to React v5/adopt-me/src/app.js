const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Name: ', name),
    React.createElement('h2', {}, 'Animal: ', animal),
    React.createElement('h2', {}, 'Breed: ', breed),
  ])
}

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
ReactDOM.render(React.createElement(App), document.getElementById('root'))
