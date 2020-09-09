import React, { Component } from "react";

class BetterNumberItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleRemove = this.handleRemove.bind(this);
	}

	//* We will use the remove method inside the handleRemove method and pass in the value which was passed down as props
	handleRemove(e) {
		this.props.rem(this.props.value);
	}

	render() {
		return (
			<li>
				{this.props.value}{" "}
				<button onClick={this.handleRemove}>{"Remove ⚔️"}</button>
			</li>
		);
	}
}

export default BetterNumberItem;
