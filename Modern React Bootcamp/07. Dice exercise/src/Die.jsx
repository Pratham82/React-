import React, { Component } from "react";
import RollDice from "./RollDice";

export default class Die extends Component {
	// <i class="fas fa-dice-one">dd</i>
	render() {
		const dieStyle = {
			margin: "10px 20px",
			fontSize: "100px",
			// backgroundImage: "linear-gradient(to right,#ED4264,#FFEDBC)",
			color: "rgba(251, 135, 81, 1.5)",
		};

		return (
			<i
				className={`dieNormal fas fa-dice-${this.props.face}
				${this.props.rolling && "dieShaking"}`}
			></i>
		);
	}
}
