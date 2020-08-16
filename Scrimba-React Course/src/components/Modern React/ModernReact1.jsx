import React, { Component } from "react";

export default class ModernReact extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		firstName: "",
	// 	};
	// }

	// Use state as the class property so we don't have to use the constructor
	state = {
		firstName: "",
	};

	// Using arrow functions instead of normal functions so we don't have to bind our methods to the class

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<div style={{ padding: "20px" }}>
				<form action="">
					<input
						type="text"
						name="firstName"
						value={this.state.firstName}
						onChange={this.handleChange}
						style={{ padding: "5px 10px", fontSize: "20px" }}
						placeHolder="Enter your first name"
					/>
					<h3>{this.state.firstName && this.state.firstName}</h3>
				</form>
			</div>
		);
	}
}
