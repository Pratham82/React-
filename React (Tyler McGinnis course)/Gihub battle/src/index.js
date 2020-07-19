import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Popular from "./components/Popular";

class App extends React.Component {
	render() {
		// let friends = this.props.friends;
		// console.log(friends);
		// Render a list using the "friends" being passed in.
		return (
			<div className="container">
				<Popular />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
