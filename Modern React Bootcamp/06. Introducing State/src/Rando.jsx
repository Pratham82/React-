import React, { Component } from "react";

export default class Rando extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0,
		};
		this.fun();
	}

	// numChange() {
	// 	setInterval(() => this.setState({ num: (this.state.num += 1) }), 1000);
	// }

	fun() {
		setInterval(() => {
			// console.log("ddd");
			let randomNum = Math.floor(Math.random() * this.props.maxNum);
			// console.log(randomNum);
			this.setState({
				num: randomNum,
			});
		}, 5000);
	}

	render() {
		// this.fun(); //* This will cause an infinite loop
		return <h1>Current num: {this.state.num}</h1>;
	}
}
