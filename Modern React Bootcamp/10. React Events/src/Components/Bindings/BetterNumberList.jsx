import React, { Component } from "react";
import BetterNumberItem from "./BetterNumberItem";

class BetterNumberList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numbers: [1, 2, 3, 4, 5],
		};
		//* This is better way of binding method to  the child component
		this.removeNum = this.removeNum.bind(this);
	}

	/*
	 * Data Flow
	 * A parent component defines a function
	 * The function is passed as a prop to a child component
	 * The child component invokes the prop
	 * The parent function is called, usually setting new state
	 * The parent component is re-rendered along with its children
	 */

	removeNum = (num) =>
		this.setState((prevState) => ({
			numbers: prevState.numbers.filter((val) => val !== num),
		}));

	render() {
		const numList = this.state.numbers.map((val, index) => (
			<BetterNumberItem key={index} value={val} rem={this.removeNum} />
		));

		return (
			<div>
				<h1>Better Number list </h1>
				<ul>{numList}</ul>
			</div>
		);
	}
}

export default BetterNumberList;
