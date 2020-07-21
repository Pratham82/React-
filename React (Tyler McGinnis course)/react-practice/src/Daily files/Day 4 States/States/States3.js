import React from "react";
import ReactDOM from "react-dom";

export default class States3 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	// passing object
	increment() {
		this.setState(
			{
				count: this.state.count + 1,
			},
			() => console.log(`Current count: ${this.state.count}`)
		);
	}

	//* Here we are calling increment method 5 times

	//* We would think that value should be increased by 5 but only increment to 1

	//* the Current value will be logged 5 times

	//* this happens because react may group multiple set state calls into a single update for better performance, in this scenario all the  5 setState calls are done in one go, and the updated value doesn't carry over between the different calls

	//* So whenever you have to update a state based on the previous state, we have to pass function as am argument  to the setState method, instead of an object

	//* The second parameter in this function is props, so if we want ot work with props we can pass the 2nd parameter

	//passing function as an argument
	incrementUpdate() {
		// In the parameter we are not passing the current state but we are passing the previous state on
		this.setState((oldState, p1) => ({
			count: oldState.count + 1,
		}));
	}

	increment5() {
		this.incrementUpdate();
		this.incrementUpdate();
		this.incrementUpdate();
		this.incrementUpdate();
		this.incrementUpdate();
	}

	render() {
		return (
			<React.Fragment>
				<h1> Sates 3</h1>
				<h2> Current count: {this.state.count}</h2>
				<button onClick={() => this.increment5()}>
					Increase Count ++
				</button>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<States3 n1="props 1" />, document.getElementById("root"));
