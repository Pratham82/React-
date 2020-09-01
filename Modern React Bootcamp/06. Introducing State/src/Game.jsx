import React, { Component } from "react";
import Button from "./Button";
import ButtonWithState from "./ButtonWithState";
import RandomGen from "./RandomGen";

export default class Game extends Component {
	//* Traditional syntax
	constructor(props) {
		//* For accessing props passed down by the parent component we have to pass props inside super
		super(props);

		this.state = {
			score: 0,
			gameOver: false,
		};
	}

	//* Alternative ways of state using proposal class property plugin(in babel)
	// state = {
	// 	score: 0,
	// 	gameOver: false,
	// };

	render() {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h2>Your current score is {this.state.score}</h2>
				<Button />
				<br />
				<ButtonWithState />
				<RandomGen maxNum={10} />
			</div>
		);
	}
}

//* Content in super(props)
// Object { props: {}, context: undefined, refs: {}, updater: {…} }

// { … }​

// _reactInternalFiber: Object { tag: 1, key: null, index: 0, … }
// ​
// _reactInternalInstance: Object { … }
// ​
// context: Object {  }
// ​
// props: Object {  }
// ​
// refs: Object {  }
// ​
// state: Object { score: 0, gameOver: false }
// ​
// updater: Object { isMounted: isMounted(component), enqueueSetState: enqueueSetState(inst, payload, callback), enqueueReplaceState: enqueueReplaceState(inst, payload, callback), … }
// ​
// <prototype>: Object { … }
// Game.jsx:9
