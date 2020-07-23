import React from "react";

/*
 * Instead of having the state of our form live inside of a React component, we’ll have it live inside of the DOM.
 * For this we are using createRef method and pass that ref to our input By doing this, we’ll be able to reference the input DOM node directly to grab its value.*/
export default class UnControlled extends React.Component {
	constructor(props) {
		super(props);

		this.input = React.createRef("");
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		alert(`This is the email you entered: ${this.input.current.value}`);
	}

	render() {
		return (
			<React.Fragment>
				<input type="text" placeholder="Enter email" ref={this.input} />
				<button onClick={this.handleSubmit}>Submit</button>
			</React.Fragment>
		);
	}
}

/*
 * We create a new ref, then pass that as a ref prop to our input field. Then, anytime when we need to access the value of our input field (like in handleSubmit), we can grab it with this.input.current.value.
 */
