import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./components/Todo/Main";
import Form1 from './components/Forms/Form1'


//* For strict mode
// ReactDOM.render(
// 	<React.StrictMode>
// 		{/* <ChangeState /> */}
// 		<ConditionalRender />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

ReactDOM.render(
	<Form1 />,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
