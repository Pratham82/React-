import React, { Component } from "react";

class AnnoyingForm extends Component {
	state = {};
	handleClick = (e) => {
		// alert("You pressed something");
		if (e.keyCode === 56) {
			alert(`I ❤️ ******'s`);
		} else {
			alert(`BOO 😠`);
		}
	};
	render() {
		return (
			<div
				style={{
					padding: "10px 20px",
					border: "1px solid",
					width: "300px",
					margin: "10px 0",
				}}
			>
				<h3>Type here</h3>
				<textarea onKeyUp={this.handleClick} />
			</div>
		);
	}
}

export default AnnoyingForm;
