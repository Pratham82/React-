import React from "react";

// Challenge:
// Given an incomplete class-based component without a constructor,
// add a constructor and initialize state to fix the broken component.

export default class States2 extends React.Component {
	constructor() {
		super();

		this.state = {
			name: "Prathamesh",
			age: "23",
		};
	}
	render() {
		return (
			<div>
				<h1>This is States2 Component</h1>
				<h1>{this.state.name}</h1>
				<h3>{this.state.age} years old</h3>
			</div>
		);
	}
}
