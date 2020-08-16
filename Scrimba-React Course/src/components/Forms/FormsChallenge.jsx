import React, { Component } from "react";

export default class FormsChallenge extends Component {
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
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					padding: "20px",
				}}
			>
				<h1>Flight From</h1>
				<form
					onSubmit={this.handleSubmit}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						padding: "20px",
					}}
				>
					<div
						className="input"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							padding: "10px 20px",
							margin: "10px",
							border: "1px solid",
							borderRadius: "15px",
							lineHeight: "1",
						}}
					>
						<h3>Input</h3>
						<label htmlFor="">
							First Name:
							<input
								type="text"
								name="firstName"
								value={this.state.firstName}
								onChange={this.handleChange}
								style={{ margin: "10px" }}
							/>
						</label>
						<label htmlFor="">
							Last Name:
							<input
								type="text"
								name="lastName"
								value={this.state.lastName}
								onChange={this.handleChange}
								style={{ margin: "10px" }}
							/>
						</label>
						<label htmlFor="">
							Age:{" "}
							<input
								type="text"
								name="age"
								value={this.state.age}
								onChange={this.handleChange}
							/>
						</label>

						<p></p>
						<label htmlFor="">Choose Gender:</label>
						<label htmlFor="">
							<input
								type="radio"
								name="gender"
								value="male"
								checked={this.state.gender === "male"}
								onChange={this.handleChange}
							/>{" "}
							Male
						</label>
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
						<p></p>
						<label htmlFor="">
							Choose your location: &nbsp;
							<select
								name="country"
								value={this.state.country}
								onChange={this.handleChange}
							>
								<option value="India">India</option>
								<option value="America">America</option>
								<option value="Japan">Japan</option>
								<option value="Bali">Bali</option>
								<option value="France">France</option>
							</select>
						</label>
						<p></p>

						<label htmlFor="">
							Dietary Restrictions: &nbsp;
							<br />
							<br />
							<input
								type="checkbox"
								name="veg"
								checked={this.state.dietaryRestrictions.veg}
								onChange={this.handleChange}
							/>{" "}
							Vegetarian
							<br />
							<input
								type="checkbox"
								name="vegan"
								checked={this.state.dietaryRestrictions.vegan}
								onChange={this.handleChange}
							/>{" "}
							Vegan
							<br />
							<input
								type="checkbox"
								name="non_veg"
								checked={this.state.dietaryRestrictions.non_veg}
								onChange={this.handleChange}
							/>{" "}
							Non-Vegetarian
							<br />
							<input
								type="checkbox"
								name="lactose_f"
								checked={
									this.state.dietaryRestrictions.lactose_f
								}
								onChange={this.handleChange}
							/>{" "}
							Lactose Feee
							<br />
							<input
								type="checkbox"
								name="kosh"
								checked={this.state.dietaryRestrictions.kosh}
								onChange={this.handleChange}
							/>{" "}
							Kosher
						</label>
					</div>

					{/* Output: */}

					<div
						className="output"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							padding: "10px 20px",
							margin: "10px",
							borderRadius: "15px",

							border: "1px solid",
							lineHeight: "1",
						}}
					>
						<h3>Output</h3>
						<label htmlFor="">
							{this.state.firstName &&
								`First Name : ${this.state.firstName}`}
						</label>
						<label htmlFor="">
							{this.state.lastName &&
								`Last Name : ${this.state.lastName}`}
						</label>
						<label htmlFor="">
							{this.state.age && `Age : ${this.state.age}`}
						</label>
						<label htmlFor="">
							{this.state.gender &&
								`Gender: ${this.state.gender}`}
						</label>
						<label htmlFor="">
							{this.state.country &&
								`Travelling to: ${this.state.country}`}
						</label>
						{/* <label htmlFor="">
							Dietary Restrictions:{" "}
							{this.state.dietaryRestrictions.veg && "Veg Food"}
						</label> */}
						<label htmlFor="">
							{this.state.dietaryRestrictions &&
								`Dietary Restrictions: `}
							{this.state.dietaryRestrictions.veg && " Veg "}
							{this.state.dietaryRestrictions.non_veg &&
								" Non-Veg "}
							{this.state.dietaryRestrictions.vegan && " Vegan "}
							{this.state.dietaryRestrictions.kosh && " Kosher "}
							{this.state.dietaryRestrictions.lactose_f &&
								" Lactose free "}
						</label>
					</div>
					<button
						style={{
							padding: "5px 15px",
							border: "none",
							fontSize: "18px",
							borderRadius: "15px",
							backgroundColor: "#61dafb",
						}}
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}
