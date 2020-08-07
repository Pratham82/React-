import React from "react";
import Greeting from "./Greeting";
let firstName = "Prathamesh";
let lastName = "Mali";

// Using JS in JSX
const MainContent = () => (
	<main className="main">
		This is main section
		<p>{`My name is ${firstName} ${lastName}`}</p>
		<Greeting />
	</main>
);

export default MainContent;
