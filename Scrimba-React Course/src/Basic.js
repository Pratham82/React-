import React from "react";
import "./App.css";
import Header from "./components/Basic_Layouts/Header";
import MainContent from "./components/Basic_Layouts/MainContent";
import Footer from "./components/Basic_Layouts/Footer";

function Basic() {
	return (
		<div className="App">
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

export default Basic;
