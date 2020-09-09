import React, { Component } from "react";

class ButtonList extends Component {
	static defaultProps = {
		colors: ["red", "yellow", "green", "skyblue"],
	};
	constructor(props) {
		super(props);
		this.state = {
			backgroundColor: "grey",
		};
	}
	handleClick = (col) => {
		this.setState({ backgroundColor: col });
		console.log(`${col} button was clicked`);
	};
	render() {
		return (
			<div style={{ backgroundColor: this.state.backgroundColor }}>
				{this.props.colors.map((val) => (
					<button
						key={val}
						style={{
							backgroundColor: val,
							padding: "10px 20px",
							margin: "20px ",
							color: "black",
							fontSize: "18px",
							border: "none",
							borderRadius: "7px",
						}}
						//* Passing the button property to the function
						onClick={this.handleClick.bind(this, val)}
					>
						{val}
					</button>
				))}
			</div>
		);
	}
}

export default ButtonList;
