import React, { Component } from "react";
import Conditional from "./Conditional";

export default class ConditionalRender extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
		};
	}

	//* This will run when the component mounts on the screen for the very first time

	//* In setTimeOut we are waiting for 1.5ms and then changing the state value from "true" to "false"

	//* When the state changed from true to false we are also passing down the updated state to the child element
	//* When the state changes the render method will run again
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false,
			});
		}, 1500);
	}

	render() {
		return (
			<div>
				<h2>Nav</h2>
				{this.state.isLoading ? <h2>Loading...</h2> : <Conditional />}
				{/* <Conditional isLoading={this.state.isLoading} /> */}
				<h2>Footer</h2>
			</div>
		);
	}
}
