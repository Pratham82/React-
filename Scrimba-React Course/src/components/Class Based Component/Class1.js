import React from "react";

export default class Class1 extends React.Component {
	// Class based methods
	classMethod() {
		return <p>this is done with class method</p>;
	}

	render() {
		// Styling object
		const styles = { color: "#42cbf5", textAlign: "center" };

		return (
			<div style={styles}>
				<h1>This is done with class</h1>
				{this.classMethod()}
			</div>
		);
	}
}
