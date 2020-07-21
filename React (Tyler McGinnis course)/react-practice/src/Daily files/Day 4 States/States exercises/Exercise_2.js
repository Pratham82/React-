import React from "react";
import ReactDOM from "react-dom";

export default class Count extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	//* When you are updating the current state based on the previous state then you should use functional setState
	increment() {
		// Increment count by 1
		this.setState(({ count }) => ({
			count: count + 1,
		}));
	}
	decrement() {
		// Decrement count by 1
		this.setState(({ count }) => ({
			count: count - 1,
		}));
	}
	render() {
		return (
			<div>
				{/* Without bind keyword */}
				{/* <button onClick={() => this.decrement()}>-</button>
				<span>{this.state.count}</span>
				<button onClick={() => this.increment()}>+</button> */}
				<button onClick={this.decrement}>-</button>
				<span>{this.state.count}</span>
				<button onClick={this.increment}>+</button>
			</div>
		);
	}
}

ReactDOM.render(<Count />, document.getElementById("root"));
