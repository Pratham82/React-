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
const ChildComponent = () => <h3>This is child component</h3>;

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Hello React!</h1>
				<ChildComponent />
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
