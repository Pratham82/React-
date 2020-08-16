import React, { Component, useState } from "react";

//*************** Using class based component *************************/
// export default class Hooks1 extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			answer: "Yes",
// 		};
// 	}

// 	render() {
// 		return (
// 			<div style={{ textAlign: "center" }}>
// 				<h1>Hooks </h1>
// 				<h2>useState - part 1</h2>

// 				<br />

// 				<h3>Is state important to know ? {this.state.answer}</h3>
// 			</div>
// 		);
// 	}
// }

//*************** Using functional component **************************/

//* We cannot access class based state for using the state we will use useState() method

//*  For using useState we have to first import it

export const useState1 = () => {
	//*Using hooks */
	//* We can fetch the value from useState and set it to new variable */
	const value = useState("Yes");
	const [answer] = useState("Yes");
	// Here we are using array destructuring for fetching the value of
	// We can use anything while destructuring an array

	// value will return an array with the state and a function
	console.log(value); // [ "Yes", dispatchAction() ]
	console.log(answer); // "Yes"

	return (
		<div style={{ textAlign: "center" }}>
			<h1>Hooks </h1>
			<h2>useState - part 1</h2>
			<br />
			<h3>Is state important to know ? {answer}</h3>{" "}
		</div>
	);
};
