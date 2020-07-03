import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// All HTML elements should be wrapped in parent elements or else two contiguous divs will cause error if there is no parent element wrapping them around
// const JSX = (
// 	<body>
// 		<div>
// 			<h1>Hello World</h1>
// 			<p>Lets render this to the DOM</p>
// 		</div>
// 		<div>This is testing string</div>
// 	</body>
// );
//<App />

// This component can be added ad <ChildComponent/ inside render methfo>
const ChildComponent = (props) => <h3>This is child component</h3>;
const InfoComp = (props) => (
	<h3>
		Hi my name is {props.name} a.k.a {props.username}
	</h3>
);
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Joe Jonas",
			bandName: "21 Pilots",
			book: "Deep work",
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// change code below this line
		this.setState({
			name: "React Rocks!",
			book: "Think and Grow Rich",
		});
		// change code above this line
	}

	render() {
		const newVal = this.state.name;
		const bandName = this.state.bandName;

		return (
			<div>
				<h1>Hello React!</h1>
				<ChildComponent />
				<InfoComp name="Prathamesh" username="Pratham82" />
				<h3>m1: My favorite band is {this.state.bandName}</h3>
				<h3>m2: My favorite band is {bandName}</h3>
				<button onClick={this.handleClick}>Change book Name</button>
				<h2>My favourite book is: {this.state.book}</h2>
			</div>
		);
	}
}
//Using this component: <MyComponent />
const root = document.getElementById("root");
ReactDOM.render(<MyComponent />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
