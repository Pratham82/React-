import React, { Component } from "react";

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

export default class ConditionalChallenge extends Component {
	constructor() {
		super();

		this.state = {
			isLoggedIn: false,
		};
	}

	handleChange = () => {
		this.setState((prevState) => {
			return {
				isLoggedIn: !prevState.isLoggedIn,
			};
		});
	};

	render() {
		const btnStyle = {
			backgroundColor: "#61dafb",
			padding: "5px 20px",
			border: "none",
			borderRadius: "15px",
			color: "white",
			fontSize: "17px",
			cursor: "pointer",
		};

		const divStyle = {
			display: "grid",
			placeItems: "center",
		};
		return (
			<div style={divStyle}>
				<h1>
					Current user state:{" "}
					{this.state.isLoggedIn
						? "User logged in"
						: "User logged out"}{" "}
				</h1>
				<button style={btnStyle} onClick={this.handleChange}>
					{this.state.isLoggedIn ? "Log out" : "Log in"}
				</button>
			</div>
		);
	}
}
