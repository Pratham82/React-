import React from "react";
import ReactDOM from "react-dom";

function FunComponent(props) {
	return (
		<React.Fragment>
			<h2>This is functional component {props.name}</h2>
			{`This is props which is taken from the parent: `}
			<FunComponent2 />
		</React.Fragment>
	);
}

// Using arrow function
const FunComponent2 = (props) => <h3>Functional component (Arrow function)</h3>;

// This is how we can export multiple components
export { FunComponent, FunComponent2 };

//If we use "default export" then even if the name of the component is changed it will compile

//I we used named export i.e only export then the name of the component should always be the same

// Add this line to the index.js
ReactDOM.render(<FunComponent name="prop1" />, document.getElementById("root"));
