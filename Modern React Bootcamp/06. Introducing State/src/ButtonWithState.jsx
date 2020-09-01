import React, { Component } from "react";

export default class ButtonWithState extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
		};
		this.handleClickOld = this.handleClickOld.bind(this);
	}

	//* Old way of writing method
	//* We have to bind this method to the constructor
	handleClickOld(e) {
		this.setState({ clicked: !this.state.clicked });
	}

	//* Using arrow functions
	//* We don't have to bind this method to the constructor, it will automatically binds the method to the current constructor
	handleClick = (e) => this.setState({ clicked: !this.state.clicked });

	render() {
		return (
			<div style={{ textAlign: "center" }}>
				<h2>User {this.state.clicked ? "Logged in" : "Logged out"}</h2>

				<button onClick={this.handleClick}>
					{this.state.clicked ? "Logout" : "Login"}
				</button>
			</div>
		);
	}
}
