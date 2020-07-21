import React from "react";
import ReactDOM from "react-dom";

export default class List extends React.Component {
	render() {
		// Render a list using the "friends" being passed in.
		// const data = this.props.friends;
		// // const li = data.map((d, i) => <li key={i}>{d}</li>);
		// console.log(data);
		console.log(typeof this.props.friends);
		return (
			<ul>
				{this.props.friends.map((d, i) => (
					<li key={i}>{d}</li>
				))}
			</ul>
		);
	}
}

//Add this to main render method
ReactDOM.render(
	<List friends={["Mikenzi", "Cash", "Steven", "Kimmy", "Doug"]} />,
	document.getElementById("root")
);
