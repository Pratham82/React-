import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import States from "./components/State management/States";
import ChangeState from "./components/State management/ChangeState";
import Events from "./components/Handling Events/Events";
import Main from "./components/Todo/Main";
import ConditionalChallenge from './components/Conditional Rendering/ConditionalChallenge'
//* For strict mode
// ReactDOM.render(
// 	<React.StrictMode>
// 		{/* <ChangeState /> */}
// 		<ConditionalRender />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

ReactDOM.render(
	<ConditionalChallenge />,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
