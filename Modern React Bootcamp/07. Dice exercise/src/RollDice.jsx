import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			die1: "five",
			die2: "one",
			rolling: false,
		};
	}

	randomFaces = () => {
		const randomNum1 = Math.floor(Math.random() * 6) + 1;
		const randomNum2 = Math.floor(Math.random() * 6) + 1;
		const numObj = {
			1: "one",
			2: "two",
			3: "three",
			4: "four",
			5: "five",
			6: "six",
		};

		let randomFace1 = numObj[randomNum1];
		let randomFace2 = numObj[randomNum2];

		// setTimeout(() => {
		// 	this.setState({
		// 		die1: randomFace1,
		// 		die2: randomFace2,
		// 		rolling: true,
		// 	});
		// }, 800);

		this.setState({
			die1: randomFace1,
			die2: randomFace2,
			rolling: true,
		});

		setTimeout(() => {
			this.setState({ rolling: false });
		}, 1000);

		// return { r1: randomFace1, r2: randomFace2 };
	};

	render() {
		return (
			<div className="outerContainer">
				<div className="innerContainer">
					<Die face={this.state.die1} rolling={this.state.rolling} />
					<Die face={this.state.die2} rolling={this.state.rolling} />
				</div>
				<button
					className="btnStyle"
					onClick={this.randomFaces}
					disabled={this.state.rolling}
				>
					{this.state.rolling ? "Rolling" : "Roll the dice"}
				</button>
			</div>
		);
	}
}

export default RollDice;
