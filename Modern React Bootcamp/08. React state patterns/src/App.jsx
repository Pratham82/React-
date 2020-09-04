import React, { Component } from "react";
import Lotto from "./components/Lotto";

export default class App extends Component {
	render() {
		return (
			<div>
				<Lotto title="New Lottery" maxBalls="5" maxNum="10" />
			</div>
		);
	}
}
