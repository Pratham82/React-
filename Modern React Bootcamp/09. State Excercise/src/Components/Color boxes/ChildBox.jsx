import React, { Component } from "react";
import { choice } from "./helpers";
import "./ColorBox.css";

class ChildBox extends Component {
	state = {
		color: choice(this.props.allColors),
	};
	handleClick = () => {
		let newColor;
		do {
			newColor = choice(this.props.allColors);
			this.setState({ color: newColor });
		} while (newColor === this.state.allColors);
	};
	render() {
		return (
			<div
				className="childBox"
				style={{ backgroundColor: this.state.color }}
				onClick={this.handleClick}
			></div>
		);
	}
}

export default ChildBox;
