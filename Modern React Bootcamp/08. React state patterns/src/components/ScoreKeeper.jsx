import React, { Component } from "react";

class ScoreKeeper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			score: 0,
		};
	}

	// addThree = () => {
	// 	//*  We should update our state like this.
	// 	//* Because when our state is updating it should update on the basis of the previous state , here we are directly replacing the state.
	// 	this.setState({
	// 		score: this.state.score + 1,
	// 	});

	// };

	// addThree = () => {
	// 	//* if we call setState method multiple times, react will batch those methods as one task and executed only once.
	// 	this.setState({
	// 		score: this.state.score + 1,
	// 	});
	// 	this.setState({
	// 		score: this.state.score + 1,
	// 	});
	// 	this.setState({
	// 		score: this.state.score + 1,
	// 	});
	// };

	//* Instead of above two setState() methods we should use the setState() with the callback method now they will be all 3 times and does not batched together
	// addThree = () => {
	// 	this.setState((prevState) => ({
	// 		score: prevState.score + 1,
	// 	}));
	// 	this.setState((prevState) => ({
	// 		score: prevState.score + 1,
	// 	}));
	// 	this.setState((prevState) => ({
	// 		score: prevState.score + 1,
	// 	}));
	// };

	//* We can go further and clean up the above code, by abstracting the state updates

	incrementScore = (curState) => {
		return {
			score: curState.score + 1,
		};
	};

	addThree = () => {
		this.setState(this.incrementScore);
		this.setState(this.incrementScore);
		this.setState(this.incrementScore);
	};

	render() {
		const funYou = () => console.log("I am function 😃");
		funYou();
		return (
			<div>
				<h1>Current Score: {this.state.score}</h1>
				<button onClick={this.addThree}>Add One</button>
			</div>
		);
	}
}

export default ScoreKeeper;
