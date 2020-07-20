import React from "react";
import ReactDOM from "react-dom";

export default class Container extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mode: "light",
		};

		//* Doing this with bind keyword
		this.handleDarkMode = this.handleDarkMode.bind(this);
		this.handleLightMode = this.handleLightMode.bind(this);
	}
	handleLightMode() {
		// Change 'mode' on the component's state to 'light'
		this.setState({
			mode: "light",
		});
	}
	handleDarkMode() {
		// Change 'mode' on the component's state to 'dark'
		this.setState({
			mode: "dark",
		});
	}
	render() {
		const { mode } = this.state;

		return (
			<div
				style={{
					height: "100vh",
					background: mode === "light" ? "#fff" : "#000",
				}}
			>
				{/* Without bind keyword */}

				{/* {mode === "light" ? (
					<button onClick={() => this.handleDarkMode()}>
						Dark Mode
					</button>
				) : (
					<button onClick={() => this.handleLightMode()}>
						Light Mode
					</button>
				)} */}

				{/* With bind keyword */}
				{mode === "light" ? (
					<button onClick={this.handleDarkMode}>Dark Mode</button>
				) : (
					<button onClick={this.handleLightMode}>Light Mode</button>
				)}
			</div>
		);
	}
}

ReactDOM.render(<Container />, document.getElementById("root"));
