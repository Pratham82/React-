// React: Create a React Component
/*
The other way to define a React component is with the ES6 class syntax.
Eg. 
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
* 1. ES6 class Kitten which extends the React.Component class
* 2. So the Kitten class now has access to many useful React features, such as local state and lifecycle hooks.
* 3. Kitten class has a constructor defined within it that calls super()
* 4. It uses super() to call the constructor of the parent class, in this case React.Component
* 5. It is best practice to call a component's constructor with super, and pass props to both. 
* 6. This makes sure the component is initialized properly.

*/

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Hello React!</h1>
			</div>
		);
	}
}
