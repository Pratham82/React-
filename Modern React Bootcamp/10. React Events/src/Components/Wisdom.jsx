import React, { Component } from "react";

class WisDom extends Component {
	static defaultProps = {
		messages: [
			{
				text: "You can observe a lot just by watching.",
				author: "Yogi Berra",
			},
			{
				text: "A house divided against itself cannot stand.",
				author: "Abraham Lincoln",
			},
			{
				text: "Difficulties increase the nearer we get to the goal.",
				author: "Johann Wolfgang von Goethe",
			},
			{
				text: "Fate is in your hands and no one elses",
				author: "Byron Pulsifer",
			},
		],
	};

	//
	/*
	* Bindings
		* 1. Using inline binding
		* 2. Using arrow functions
		* 3. Binding function in constructor
	   
	* Alternate binding:
		* 1. Using public class field syntax
	
	*/

	dispenseWisdom = () => {
		let { messages } = this.props;

		let randomMsg = Math.floor(Math.random() * messages.length);

		console.log(
			`${messages[randomMsg].text} \n \t\t  - ${messages[randomMsg].author}`
		);
	};
	render() {
		return (
			<div
				onMouseEnter={this.dispenseWisdom}
				style={{
					padding: "10px",
					border: "1px solid",
					width: "100px",
				}}
			>
				{" "}
				Log quotes
			</div>
		);
	}
}

export default WisDom;
