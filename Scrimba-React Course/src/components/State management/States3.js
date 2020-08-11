import React from "react";

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

// Using function component
export const Functional = (props) => {
	return (
		<div
			style={{
				border: "solid 1px",
				padding: "0 20px",
				marginBottom: "10px",
				backgroundColor: "#42e0f5",
			}}
		>
			<h1>Functional Component</h1>
			<h2>You are currently logged {props.status ? "in" : "out"}</h2>
		</div>
	);
};

export class ClassBased extends React.Component {
	constructor() {
		super();

		this.state = {
			status: true,
		};
	}
	render() {
		return (
			<div
				style={{
					border: "solid 1px",
					padding: "0 20px",
					backgroundColor: "#42f5ad",
				}}
			>
				<h1>ClassBased Component</h1>
				<h2>
					You are currently logged {this.state.status ? "in" : "out"}
				</h2>
			</div>
		);
	}
}
