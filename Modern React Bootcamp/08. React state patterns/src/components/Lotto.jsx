import React, { Component } from "react";
import Ball from "./Ball";

class Lotto extends Component {
	static defaultProps = {
		title: "Small Lottery",
		maxBalls: 6,
		maxNum: 40,
	};

	constructor(props) {
		super(props);
		this.state = {
			numbers: Array.from({ length: this.props.maxBalls }),
		};
	}

	generateNums = () => {
		this.setState((curState) => ({
			numbers: curState.numbers.map(
				(n) => Math.floor(Math.random() * this.props.maxNum) + 1
			),
		}));
	};

	handleClick = (e) => {
		this.generateNums();
	};

	render() {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					fontFamily: "fira code",
				}}
			>
				<h2>{this.props.title}</h2>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "row",
						padding: "30px 10px",
					}}
				>
					{this.state.numbers.map((val) => (
						<Ball numbers={val} key={this.id} />
					))}
				</div>
				<button onClick={this.handleClick}>Generate Balls</button>
			</div>
		);
	}
}

export default Lotto;
