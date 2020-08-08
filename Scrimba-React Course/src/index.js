import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProductsPage from "./components/VSchool Products/ProductsPage";
import Main from "./components/Todo/Main";
// import App from './App'
import Class1 from "./components/Class Based Component/Class1";
import App2 from "./components/Class Based Component/Class2";

ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		<App2 />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
