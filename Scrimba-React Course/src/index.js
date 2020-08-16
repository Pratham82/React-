import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import Main from "./components/Todo/Main";
import FormsChallenge from './components/Forms/FormsChallenge'
import FormMain from './components/Forms/FormChallenge/FormMain'
import MemeGenerator from './components/MemeGenerator/MemeGenerator'
import './Memes.css'

//* For strict mode
// ReactDOM.render(
// 	<React.StrictMode>
// 		{/* <ChangeState /> */}
// 		<ConditionalRender />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

ReactDOM.render(
	<MemeGenerator />,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
