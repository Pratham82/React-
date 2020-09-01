import React, { Component } from "react";

//* Challenge: Create a component which has a button and a heading, when the button is clicked  random number should be generated and if we get number 7, we should display "You Win?" and disable button

export default class RandomGen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0,
		};
	}

	handleClick = (e) =>
		this.setState({ num: Math.floor(Math.random() * this.props.maxNum) });

	resetState = (e) => this.setState({ num: 0 });

	render() {
		return (
			<div style={{ textAlign: "center" }}>
				<h1>Number is {this.state.num}</h1>
				{this.state.num === 7 ? (
					<h2>
						You win 🥳 <br />
						<button onClick={this.resetState}>Reset</button>
					</h2>
				) : (
					<button onClick={this.handleClick}>Random Number</button>
				)}
			</div>
		);
	}
}
