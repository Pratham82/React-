import React, { Component } from "react";
import ScoreKeeper from "./components/ScoreKeeper.jsx";

export default class App extends Component {
	render() {
		return (
			<div className="outerContainer">
				<div className="innerContainer">
					<ScoreKeeper />
				</div>
			</div>
		);
	}
}
