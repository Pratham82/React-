import React, { Component } from "react";

export default class Conditional2 extends Component {
	constructor() {
		super();
		this.state = {
			inbox: ["facebook", "twitter"],
			// inbox: [],
		};
	}

	//* Conditional rendering using && operator
	//* This will check if the first condition is truthy if its truthy then after &&  pass the operation to perform(Component to render)
	//* If the value is falsy then then it will not perform the operation(it will not render the given component)
	//* This wil remove the use of "null". The component wll render only if the value before the && operator is true
	//* In our example div will only render if the inbox have any messages.
	render() {
		return (
			<div>
				{this.state.inbox.length > 0 && (
					<h2>
						You have {this.state.inbox.length} messages from{" "}
						{this.state.inbox.map((val) => val + ", ")}
					</h2>
				)}
			</div>
		);
	}
}
