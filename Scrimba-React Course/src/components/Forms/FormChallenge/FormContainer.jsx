import React, { Component } from "react";
import FormComponent from "./FormComponent";

export default class FormContainer extends Component {
	constructor() {
		super();

		this.state = {
			firstName: "",
			lastName: "",
			age: "",
			gender: "",
			country: "India",

			dietaryRestrictions: {
				veg: false,
				non_veg: false,
				vegan: false,
				lactose_f: false,
				kosh: false,
			},
		};
	}

	handleChange = (event) => {
		// Take the required fields from event.target
		const { name, value, type, checked } = event.target;
		type === "checkbox"
			? this.setState((prevState) => {
					return {
						dietaryRestrictions: {
							...prevState.dietaryRestrictions,
							[name]: checked,
						},
					};
			  })
			: this.setState({
					[name]: value,
			  });
	};

	render() {
		return (
			<FormComponent handleChange={this.handleChange} data={this.state} />
		);
	}
}
