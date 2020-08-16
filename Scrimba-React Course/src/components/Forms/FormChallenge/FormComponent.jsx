import React from "react";

export default function FormComponent(props) {
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
				onSubmit={props.data.handleSubmit}
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
							value={props.data.firstName}
							onChange={props.handleChange}
							style={{ margin: "10px" }}
						/>
					</label>
					<label htmlFor="">
						Last Name:
						<input
							type="text"
							name="lastName"
							value={props.data.lastName}
							onChange={props.handleChange}
							style={{ margin: "10px" }}
						/>
					</label>
					<label htmlFor="">
						Age:{" "}
						<input
							type="text"
							name="age"
							value={props.data.age}
							onChange={props.handleChange}
						/>
					</label>

					<p></p>
					<label htmlFor="">Choose Gender:</label>
					<label htmlFor="">
						<input
							type="radio"
							name="gender"
							value="male"
							checked={props.data.gender === "male"}
							onChange={props.handleChange}
						/>{" "}
						Male
					</label>
					<label htmlFor="">
						<input
							type="radio"
							name="gender"
							value="female"
							checked={props.data.gender === "female"}
							onChange={props.handleChange}
						/>{" "}
						Female
					</label>
					<p></p>
					<label htmlFor="">
						Choose your location: &nbsp;
						<select
							name="country"
							value={props.data.country}
							onChange={props.handleChange}
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
							checked={props.data.dietaryRestrictions.veg}
							onChange={props.handleChange}
						/>{" "}
						Vegetarian
						<br />
						<input
							type="checkbox"
							name="vegan"
							checked={props.data.dietaryRestrictions.vegan}
							onChange={props.handleChange}
						/>{" "}
						Vegan
						<br />
						<input
							type="checkbox"
							name="non_veg"
							checked={props.data.dietaryRestrictions.non_veg}
							onChange={props.handleChange}
						/>{" "}
						Non-Vegetarian
						<br />
						<input
							type="checkbox"
							name="lactose_f"
							checked={props.data.dietaryRestrictions.lactose_f}
							onChange={props.handleChange}
						/>{" "}
						Lactose Feee
						<br />
						<input
							type="checkbox"
							name="kosh"
							checked={props.data.dietaryRestrictions.kosh}
							onChange={props.data.handleChange}
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
						{props.data.firstName &&
							`First Name : ${props.data.firstName}`}
					</label>
					<label htmlFor="">
						{props.data.lastName &&
							`Last Name : ${props.data.lastName}`}
					</label>
					<label htmlFor="">
						{props.data.age && `Age : ${props.data.age}`}
					</label>
					<label htmlFor="">
						{props.data.gender && `Gender: ${props.data.gender}`}
					</label>
					<label htmlFor="">
						{props.data.country &&
							`Travelling to: ${props.data.country}`}
					</label>
					{/* <label htmlFor="">
							Dietary Restrictions:{" "}
							{props.data.dietaryRestrictions.veg && "Veg Food"}
						</label> */}
					<label htmlFor="">
						{props.data.dietaryRestrictions &&
							`Dietary Restrictions: `}
						{props.data.dietaryRestrictions.veg && " Veg "}
						{props.data.dietaryRestrictions.non_veg && " Non-Veg "}
						{props.data.dietaryRestrictions.vegan && " Vegan "}
						{props.data.dietaryRestrictions.kosh && " Kosher "}
						{props.data.dietaryRestrictions.lactose_f &&
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
