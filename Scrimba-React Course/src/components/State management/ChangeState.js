import React from "react";
import randomcolor from "randomcolor";

export default class ChangeStateCounter extends React.Component {
	constructor() {
		super();

		this.state = {
			count: 0,
			color: "",
		};

		// Method 1 with normal functions and bind keyword
		// this.handleClickIncrement = this.handleClickIncrement.bind(this);
	}

	// Method 1 with normal functions and bind keyword
	// handleClickIncrement() {
	// 	// Using 1st setState method
	// 	// //* Here we are replacing state every time
	// 	// this.setState({
	// 	// 	count: this.state.count + 1,
	// 	// });

	// 	//Using 2nd setState method
	// 	//* This will give us access to the previous version of state
	// 	this.setState((previousState) => {
	// 		return {
	// 			count: previousState.count + 1,
	// 		};
	// 	});
	// }

	//* Method 2 Using arrow function
	//* By using this method we don't have to bind our method to the class
	handleClickIncrement = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count++,
			};
		});
	};

	// handleClickDecrement() {
	// 	this.setState({
	// 		count: this.state.count - 1,
	// 	});
	// }

	handleClickDecrement = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count--,
			};
		});
	};

	Double = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count * 2,
			};
		});
	};

	Square = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count ** 2,
			};
		});
	};

	ClearState = () => {
		this.setState({
			count: 0,
		});
	};

	//* LifeCycle methods
	componentDidMount() {
		//*  This will be only called for the first time when component is mounted tot DOM
		console.log("Component mounted");
	}
	componentDidUpdate(prevProps, prevState) {
		const newColor = randomcolor();
		if (prevState.count != this.state.count) {
			this.setState({
				color: newColor,
			});
		}
	}

	render() {
		console.log("render");
		const buttonStyle = {
			border: "none",
			padding: "6px 15px",
			borderRadius: "15px",
			margin: "5px 0",
		};
		return (
			<div
				style={{
					display: "grid",
					placeItems: "center",
				}}
			>
				<h1 style={{ color: this.state.color }}>
					Current state: {this.state.count}
				</h1>
				<button onClick={this.handleClickIncrement} style={buttonStyle}>
					Increment
				</button>
				<button onClick={this.Double} style={buttonStyle}>
					Double
				</button>
				<button onClick={this.handleClickDecrement} style={buttonStyle}>
					Decrement
				</button>
				<button onClick={this.Square} style={buttonStyle}>
					Square
				</button>
				<button onClick={this.ClearState} style={buttonStyle}>
					Clear State
				</button>
			</div>
		);
	}
}
