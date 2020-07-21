import React from "react";
import ReactDOM from "react-dom";

export default class List extends React.Component {
	render() {
		// let friends = this.props.friends;
		// console.log(friends);
		// Render a list using the "friends" being passed in.
		return (
			<ul id="friends">
				{this.props.friends.map((friend) => (
					<li key={friend.id}>{friend.name}</li>
				))}
			</ul>
		);
	}
}

///Add this to render method

ReactDOM.render(
	<List
		friends={[
			{ id: "893", name: "Mikenzi" },
			{ id: "871", name: "Cash" },
			{ id: "982", name: "Steven" },
			{ id: "061", name: "Kimmy" },
			{ id: "117", name: "Doug" },
		]}
	/>,
	document.getElementById("root")
);
