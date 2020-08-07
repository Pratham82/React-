import React from "react";
import "./App.css";
import Header from "./components/Basic_Layouts/Header";
import MainContent from "./components/Basic_Layouts/MainContent";
import Footer from "./components/Basic_Layouts/Footer";
import Main from "./components/Todo/Main";
function App() {
	return (
		<div className="App">
			<Main />
		</div>
	);
}

export default App;
