import React from "react";
import ReactDOM from "react-dom";

export default class FormControlled extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			email: e.target.value,
		});
	}

	handleSubmit() {
		alert(`Your entered email is: ${this.state.email}`);
	}

	render() {
		return (
			<React.Fragment>
				<input
					type="text"
					placeholder="enter your email"
					value={this.state.email}
					onChange={this.handleChange}
				/>

				<button onClick={this.handleSubmit}>Submit</button>
				<pre>The email you entering is {this.state.email}</pre>
			</React.Fragment>
		);
	}
}

/*
 * 1. The take away here is the value prop on the input field. Notice we’re saying that the value of input is always going to be whatever this.state.email is.

 * 2. That means, in order to change the text inside of the input field, we need to update this.state.email. This is the essence of a Controlled Component.

 * 3. React is in control of the email state. When we need to access whatever the email is (like in handleSubmit), we access it just like we would any other property on our component’s state, by using this.state.email.

 * If you want to update the UI based on a piece of form state, you need to use Controlled components or else the UI won’t update.
 */
