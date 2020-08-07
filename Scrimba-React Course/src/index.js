import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Basic from "./Basic";
import ContactList from "./components/Contact list/ContactList";
import JokesMain from "./components/Jokes/JokesMain";
ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		<JokesMain />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
