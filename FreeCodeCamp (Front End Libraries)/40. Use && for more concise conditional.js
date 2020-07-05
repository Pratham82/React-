// React: Use && for a More Concise Conditional

/*
f you write a lot of else if statements to return slightly different UIs, you may repeat code which leaves room for error. Instead, you can use the && logical operator to perform conditional logic in a more concise way. This is possible because you want to check if a condition is true, and if it is, return some markup. Here's an example:

{condition && <p>markup</p>}

*/

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true,
		};
		this.toggleDisplay = this.toggleDisplay.bind(this);
	}
	toggleDisplay() {
		this.setState((state) => ({
			display: !state.display,
		}));
	}
	render() {
		// change code below this line

		return (
			<div>
				<button onClick={this.toggleDisplay}>Toggle Display</button>
				{this.state.display && <h1>Displayed!</h1>}
			</div>
		);
	}
}
