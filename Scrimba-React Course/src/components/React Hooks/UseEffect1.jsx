//******************** useEffect *******************/
//* THis is used to hook into components lifecycle method for a functional method

//* It considers a replacement for three main lifecycle methods:
//* componentDidMount, componentDidUpdate, componentWillUnmount */

//* It allows us to produce side effects inside out component

//* side effects ?
//* anything that reaches outside of the component to do something
/*
 * Eg.
 * 1. Network request
 * 2. Manual DOM manipulation
 * 3. Event listeners and timeouts and intervals
 * All of these are considered as side effects because their main jobs doesn't  specifically have to do with managing state or displaying content on the screen
 */
import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function UseEffect1() {
	const [count, setCount] = useState(0);
	const [color, setColor] = useState("");

	function increment() {
		setCount((prevCount) => prevCount + 1);
	}

	function decrement() {
		setCount((prevCount) => prevCount - 1);
	}

	//* Inside the useEffect's callback function we can set up our color

	//* This will cause an infinite loop because every time the color changes the component will be re-rendered */

	// useEffect(() => {
	// 	setColor(randomcolor());
	// });
	//* Previously we have used componentDidUpdate to decide whether or not to update the component based on the states and props */

	//* In useEffect method there is a 2nd parameter which is an array, inside this variable we can specify what variables to watch for changes,If that variable changes it will run the effect event

	//* So in our example we have to pass in the count variable which is updating
	useEffect(() => {
		setColor(randomcolor());
	}, [count]); // If we don't pass count in the array then the color will not change even after state is changed

	return (
		<div style={{ textAlign: "center" }}>
			<h1 style={{ color: color }}>{count}</h1>
			<button
				onClick={increment}
				style={{
					padding: "8px 10px",
					backgroundColor: "white",
					border: "1px solid grey",
					borderRadius: "5px",
				}}
			>
				Increment
			</button>

			<p></p>
			<button
				onClick={decrement}
				style={{
					padding: "8px 10px",
					backgroundColor: "white",
					border: "1px solid grey",
					borderRadius: "5px",
				}}
			>
				Decrement
			</button>
		</div>
	);
}

export default UseEffect1;
