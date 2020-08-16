import React, { Component, useState } from "react";

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

// export default class Hooks2ClassBased extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			count: 0,
// 		};
// 	}

// 	handleClick = () => {
// 		this.setState((prevState) => {
// 			return {
// 				count: prevState.count + 1,
// 			};
// 		});
// 	};

// 	render() {
// 		return (
// 			<div style={{ textAlign: "center" }}>
// 				<h1>{this.state.count}</h1>
// 				<p></p>
// 				<button
// 					style={{
// 						padding: "8px 10px",
// 						backgroundColor: "white",
// 						border: "1px solid grey",
// 						borderRadius: "5px",
// 					}}
// 					onClick={this.handleClick}
// 				>
// 					Change!
// 				</button>
// 			</div>
// 		);
// 	}
// }

//* Converting to hooks */
export const UseState2 = () => {
	//* For changing state we have the second parameter inside the useSate hook function
	//* Here we will use setCount as 2nd parameter which will be our function
	const [count, setCount] = useState(0);

	//* Unlike the state in the class based components which are stored in one big object we should store the states in the useSate individually
	const [answer, setAnswer] = useState("Yes");

	function increment() {
		setCount((prevCount) => prevCount + 1);
	}

	const decrement = () => {
		setCount((prevCount) => prevCount - 1);
	};

	const square = () => {
		setCount((prevCount) => prevCount ** 2);
	};

	//* Replacing the state to the new value
	const clear = () => setCount((prevCount) => (prevCount = 0));

	//* Double
	const double = () => setCount((prevCount) => prevCount * 2);

	//* Half
	const half = () => setCount((prevCount) => Math.round(prevCount / 2));

	return (
		<div style={{ textAlign: "center" }}>
			<h1>{count}</h1>
			<p></p>
			<button
				style={{
					padding: "8px 10px",
					backgroundColor: "white",
					border: "1px solid grey",
					borderRadius: "5px",
				}}
				//* Changing value of count so in setCount we can replace the value of count or provide the function which increments the value of the count (Very similar to the setState() method)

				//*  We can either handle our logic in here or we can declare a bew function above and use that here
				// onClick={() => setCount((prevCount) => prevCount + 1)}

				//* Alt way
				onClick={increment}
			>
				Increment +
			</button>
			<p></p>
			<button
				style={{
					padding: "8px 10px",
					backgroundColor: "white",
					border: "1px solid grey",
					borderRadius: "5px",
				}}
				// Method1
				// onClick={() => setCount((prevCount) => prevCount - 1)}
				//Method2
				onClick={decrement}
			>
				Decrement -
			</button>
			<p></p>
			<button
				style={{
					padding: "8px 10px",
					backgroundColor: "white",
					border: "1px solid grey",
					borderRadius: "5px",
				}}
				// Method1
				// onClick={() => setCount((prevCount) => prevCount - 1)}
				//Method2
				onClick={square}
			>
				Square ^2
			</button>
			<p></p>

			<button
				style={{
					padding: "8px 10px",
					backgroundColor: "white",
					border: "1px solid grey",
					borderRadius: "5px",
				}}
				// Method1
				// onClick={() => setCount((prevCount) => prevCount - 1)}
				//Method2
				onClick={double}
			>
				Double
			</button>
			<p></p>
			<button
				style={{
					padding: "8px 10px",
					backgroundColor: "white",
					border: "1px solid grey",
					borderRadius: "5px",
				}}
				// Method1
				// onClick={() => setCount((prevCount) => prevCount - 1)}
				//Method2
				onClick={half}
			>
				Half
			</button>
			<p></p>
			<button
				style={{
					padding: "8px 10px",
					backgroundColor: "white",
					border: "1px solid grey",
					borderRadius: "5px",
				}}
				// Method1
				// onClick={() => setCount((prevCount) => prevCount - 1)}
				//Method2
				onClick={clear}
			>
				Clear
			</button>
		</div>
	);
};
