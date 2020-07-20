import React from "react";
import ReactDOM from "react-dom";

export default class States extends React.Component {
	//* To add state to a class component, you’ll use the constructor method.
	constructor(props) {
		//* We have to use super because we extend rects Component class and a call has to be made to base class constructor
		super(props);

		//* Defining state
		//* unlike props which are passed down to the class are immutable,state can be changed within the class
		this.state = {
			name: "Prathamesh",
		};
		console.log(props); //"prop 101"
		console.log(this.state); //"Prathamesh"
		console.log(typeof this.state); // object
		console.log(typeof States); //function

		// Binding the changeName2 function to the class
		//* We use .bind inside of the constructor to say “whenever updateName is invoked, always make sure it’s invoked in the context of the current component.”
		this.changeName2 = this.changeName2.bind(this);
	}

	// When the Change Name button is called this function will be called
	// For handling the state we can use setState method which will update the state of our component
	changeName() {
		this.setState({
			name: "Jonas",
		});
	}

	// Update state using bind and taking obj as parameter
	changeName2() {
		this.setState({
			name: "Joe",
		});
	}

	//Toggle names
	toggleName() {
		if (this.state.name == "Prathamesh") {
			this.setState({
				name: "Jonas",
			});
		} else {
			this.setState({
				name: "Prathamesh",
			});
		}
	}

	render() {
		//Using state inside the render method
		return (
			<React.Fragment>
				{/* This is the basic way of how we can use the state */}
				<h1>Hi my name is {this.state.name}</h1>;
				{/* this is the way we can add the onclick event on the button */}
				<button onClick={() => this.changeName()}>Change Name</button>
				<br />
				<button onClick={this.changeName2}>
					Change Name Using bind
				</button>
				<br />
				<button onClick={() => this.toggleName()}>Toggle</button>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<States test="prop 101" />, document.getElementById("root"));
