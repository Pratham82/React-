import React, { Component } from "react";
import Die from "./Die";
import RollDice from "./RollDice";

import "./App.css";

export default class App extends Component {
	render() {
		return (
			<div className="outerContainer">
				<div className="innerContainer">
					<RollDice />
				</div>
			</div>
		);
	}
}

//* Styles
// const outerContainer = {
// 	display: "flex",
// 	justifyContent: "center",
// 	flexDirection: "column",
// 	alignItems: "center",
// };
// const innerContainer = {
// 	display: "flex",
// 	justifyContent: "center",
// 	alignItems: "center",
// };

// const btnStyle = {
// 	textAlign: "center",
// 	color: "white",
// 	marginTop: "50px",
// 	border: "none",
// 	padding: "10px 25px",
// 	backgroundImage: "linear-gradient(to right,#ED4264,#FFEDBC)",
// 	fontSize: "20px",
// 	borderRadius: "7px",
// };

// <div style={outerContainer}>
// 	<div style={innerContainer}>
// 		<Die dieVal={randomFace1} />
// 		<Die dieVal={randomFace2} />
// 		<br />
// 	</div>
// 	<button style={btnStyle}>Roll Dice</button>

// </div>
