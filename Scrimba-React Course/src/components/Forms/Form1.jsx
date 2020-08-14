import React, { Component } from "react";

export default class Form1 extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			emailID: "",
		};
	}

	handleChange = (event) => {
		//* event will have all the information that we needed
		//* If we want to target specific fields in the input we can add name property to the input
		//* We will make an array of the name property and assign update the stated accordingly

		//* in order to make it work we have to set the name in jsx same as it appears in the state
		this.setState({
			[event.target.name]: event.target.value,
		});

		// console.log([event.target.name]);
		event.preventDefault();
	};

	handleClick = () => {};

	render() {
		//* For making controlled forms we will add the "value" property in the HTML tags and assign values which are updated in the state.

		return (
			<form action="" style={{ margin: "10px" }}>
				<input
					type="text"
					name="firstName"
					placeholder="Enter your FirstName"
					value={this.state.firstName}
					onChange={this.handleChange}
				/>
				<br />
				<br />

				<input
					type="text"
					name="lastName"
					placeholder="Enter your LastName"
					value={this.state.lastName}
					onChange={this.handleChange}
				/>

				<br />
				<br />

				<input
					type="text"
					name="emailID"
					placeholder="Enter your email ID"
					value={this.state.emailID}
					onChange={this.handleChange}
				/>
				{/* <input type="submit" onClick={} /> */}
				<p>
					Current state:
					<br />
					FirstName: {this.state.firstName}
					<br />
					LastName:{this.state.lastName}
					<br />
					Email: {this.state.emailID}
				</p>
			</form>
		);
	}
}
