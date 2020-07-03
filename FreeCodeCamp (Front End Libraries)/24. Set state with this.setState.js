// React: Set State with this.setState
/*
* There is also a way to change the component's state. React provides a method for updating component state called setState

* You call the setState method within your component class like so: this.setState(), passing in an object with key-value pairs.

* The keys are your state properties and the values are the updated state data. 

* React expects you to never modify state directly, instead always use this.setState() when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance.

* What this means is that state updates through the setState method can be asynchronous. There is an alternative syntax for the setState method which provides a way around this problem.

*/

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Initial State",
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		// change code below this line
		this.setState({
			username: "React Rocks!",
		});
		// change code above this line
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Click Me</button>
				<h1>{this.state.name}</h1>
			</div>
		);
	}
}
