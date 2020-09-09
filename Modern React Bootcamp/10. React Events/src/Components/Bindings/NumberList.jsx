import React, { Component } from "react";
import NumberItem from "./NumberItem";

class NumberList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numbers: [1, 2, 3, 4, 5],
		};
	}

	removeNum = (num) =>
		this.setState((prevState) => ({
			numbers: prevState.numbers.filter((val) => val !== num),
		}));

	render() {
		const numList = this.state.numbers.map((val) => (
			<NumberItem key={val} value={val} rem={() => this.removeNum(val)} />
		));

		return (
			<div>
				<h1>NumberList</h1>
				<ul>{numList}</ul>
			</div>
		);
	}
}

export default NumberList;
