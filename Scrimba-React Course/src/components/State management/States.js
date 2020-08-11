import React from "react";

// This is default export
import States2 from "./States2";

// This is named export
import { Functional } from "./States3";
import { ClassBased } from "./States3";

export default class States extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Prathamesh",
		};
	}

	render() {
		const styles = {
			backgroundColor: "#61dafb",
			color: "black",
		};
		return (
			<React.Fragment>
				<h1>State Management</h1>
				<h3>This is passed into state name: </h3>
				<h3>
					My name is <mark style={styles}>{this.state.name} </mark>
				</h3>
				<States2 />
				<Functional status={false} />
				<ClassBased />
			</React.Fragment>
		);
	}
}

/*
 * States:
 * 1. We cannot change props they are immutable
 * 2. With state component can change its data and maintain the data when it need to
 * 3.  The component needs to be class based component for using states
 */
