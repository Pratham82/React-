import React from "react";
import ReactDOM from "react-dom";

export default class States2 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
		console.log(this.state);
	}

	//* object setState method

	//******** setSate with 1 parameter ***************
	incrementCount() {
		// console.log(this.state.count++);
		this.setState({
			count: this.state.count + 1,
		});
		// This will be executed before the current state is set
		// That's why when  we click on increment first time, log value will be alway 1 lesser than the UI value
		//* That is because calls to setState are async
		console.log(this.state.count);
	}

	decrementCount() {
		this.setState({
			count: this.state.count - 1,
		});
		console.log(this.state.count);
	}

	//******** setSate with 2 parameters *****************
	//* When you want to execute your code when the state has been updated, to handle such a situation, you can pass in a callback function as the second parameter to the setState method

	//* setSate method has two parameters 1st one is the object and 2nd is the callback function,

	//* In this way we wont loose the sync with the UI and get the same value will updated in the log as it is updated in the UI

	//* So if anytime we want to set the data after the UI has been updated we should add the code inside the setState method and not outside the setState method

	incrementCountUpdated() {
		this.setState(
			{
				count: this.state.count + 1,
			},
			() => console.log(`state value in callback: ${this.state.count}`)
		);

		console.log(`state value outside function: ${this.state.count}`);
	}

	decrementCountUpdated() {
		this.setState(
			{
				count: this.state.count - 1,
			},
			() => console.log(`state value in callback: ${this.state.count}`)
		);

		console.log(`state value outside function: ${this.state.count}`);
	}

	render() {
		return (
			<React.Fragment>
				<h1>Current cunt = {this.state.count}</h1>
				<button onClick={() => this.incrementCountUpdated()}>
					Increase count
				</button>
				<button onClick={() => this.decrementCountUpdated()}>
					Decrease count
				</button>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<States2 />, document.getElementById("root"));
