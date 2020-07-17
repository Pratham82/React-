import React from "react";

export default class App extends React.Component {
	// We cna use React.fragment instead of div, it allows you to return json elements without a div so it solved our semantic problem
	render() {
		const name = "Prathamesh";
		return (
			<React.Fragment>
				<h1>All elements on this page are wrapped in fragments</h1>
				<h2>Hi my name is {name} 👋 </h2>
				<h2>45 * 5= {45 * 5}</h2>
				<h2>Today's date is {new Date().toLocaleDateString()}</h2>
			</React.Fragment>
		);
	}
}
