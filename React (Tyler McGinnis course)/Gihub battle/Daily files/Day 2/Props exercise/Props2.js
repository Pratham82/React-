import React from "react";
import ReactDOM from "react-dom";

var USER_DATA = {
	name: "Tyler McGinnis",
	img: "https://avatars0.githubusercontent.com/u/2933430?v=3&s=460",
	username: "tylermcginnis",
};

export default class Badge extends React.Component {
	render() {
		return (
			<div>
				<img src={USER_DATA.img} />
				<h1>Name: {USER_DATA.name} </h1>
				<h3>username: {USER_DATA.username}</h3>
			</div>
		);
	}
}

ReactDOM.render(<Badge user={USER_DATA} />, document.getElementById("root"));
