import React from "react";

// First react component

//* React.Component is the body for our component
/*
 * Component have following properties:
 * 1. State
 * 1. LifeCycle
 * 1. LifeCycle

 */
//* React component should always start with an uppercase letter, thats how react differentiate between html and react component
export default class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello world in react 🚀</h1>
			</div>
		);
	}
}

/*
 * Render the component to the DOM
 * It has two parameters:
 * 1. React Element
 * 2. Where to put this element in markup

 */
