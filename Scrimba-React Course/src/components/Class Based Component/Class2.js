/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/
import React from "react";
import ReactDOM from "react-dom";

// #1
// function App2() {
// 	return (
// 		<div>
// 			<Header />
// 			<Greeting />
// 		</div>
// 	);
// }

export default class App2 extends React.Component {
	render() {
		return (
			<div>
				<Header2 username="Prathamesh" />
				<Greeting2 />
			</div>
		);
	}
}

// #2
// function Header(props) {
// 	return (
// 		<header>
// 			<p>Welcome, {props.username}!</p>
// 		</header>
// 	);
// }

export class Header2 extends React.Component {
	render() {
		return (
			<header style={{ textAlign: "center", color: "white" }}>
				<p>Welcome, {this.props.username}!</p>
			</header>
		);
	}
}

// #3
// function Greeting() {
// 	const date = new Date();
// 	const hours = date.getHours();
// 	let timeOfDay;

// 	if (hours < 12) {
// 		timeOfDay = "morning";
// 	} else if (hours >= 12 && hours < 17) {
// 		timeOfDay = "afternoon";
// 	} else {
// 		timeOfDay = "night";
// 	}
// 	return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
// }

export class Greeting2 extends React.Component {
	render() {
		const date = new Date();
		const hours = date.getHours();
		let timeOfDay;

		hours < 12
			? (timeOfDay = "morning")
			: hours >= 12 && hours < 17
			? (timeOfDay = "afternoon")
			: (timeOfDay = "night");

		return (
			<div style={{ textAlign: "center", color: "white" }}>
				<h1>Good {timeOfDay} to you, sir or madam!</h1>
			</div>
		);
	}
}

ReactDOM.render(<App2 />, document.getElementById("root"));
