import React, { Component } from "react";

export default class Form1 extends Component {
	constructor() {
		super();
		this.state = {
			firstName: "",
			lastName: "",
			emailID: "",
			isFriendly: false,
			gender: "",
			favColor: "",
		};
	}

	handleChange = (event) => {
		//* event will have all the information that we needed
		//* If we want to target specific fields in the input we can add name property to the input
		//* We will make an array of the name property and assign update the stated accordingly

		//* in order to make it work we have to set the name in jsx same as it appears in the state

		const { name, value, type, checked } = event.target;
		type === "checkbox"
			? this.setState({ [name]: checked })
			: this.setState({
					[name]: value,
			  });

		// console.log([event.target.name]);
		// event.preventDefault();
	};

	handleSubmit = () => {};

	render() {
		//* For making controlled forms we will add the "value" property in the HTML tags and assign values which are updated in the state.

		return (
			<form onSubmit={this.handleSubmit} style={{ margin: "10px" }}>
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
				<textarea
					name=""
					id=""
					cols="30"
					rows="5"
					value="This is default value of checkbox"
					onChange={this.handleChange}
				/>
				<br />
				<br />
				<input
					type="checkbox"
					name="isFriendly"
					checked={this.state.isFriendly}
					onChange={this.handleChange}
				/>{" "}
				Is friendly
				<br />
				<label htmlFor="">
					<input
						type="radio"
						name="gender"
						value="male"
						checked={this.state.gender === "male"}
						onChange={this.handleChange}
					/>
					Male
				</label>
				<br />
				<label htmlFor="">
					<input
						type="radio"
						name="gender"
						value="female"
						checked={this.state.gender === "female"}
						onChange={this.handleChange}
					/>{" "}
					Female
				</label>
				<br />
				<h4>
					{this.state.gender && `So you are a ${this.state.gender}`}
				</h4>
				<br />
				<p> Choose your favourite color: </p>
				<select
					name="favColor"
					value={this.state.favColor}
					onChange={this.handleChange}
					id=""
				>
					<option value="blue">Blue</option>
					<option value="red">Red</option>
					<option value="black">Black</option>
					<option value="orange">Orange</option>
					<option value="green">Green</option>
				</select>
				<p></p>
				<h3>
					{this.state.favColor &&
						`Your favourite color is ${this.state.favColor}`}
				</h3>
				<br />
				<button>Submit</button>
			</form>
		);
	}
}
