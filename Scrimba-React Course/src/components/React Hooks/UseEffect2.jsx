import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";

function UseEffect2() {
	const [count, setCount] = useState(0);
	const [color, setColor] = useState("");

	function increment() {
		setCount((prevCount) => prevCount + 1);
	}

	function decrement() {
		setCount((prevCount) => prevCount - 1);
	}

	//**************** Using setInterval with useEffect ******************
	//* In class we used component will unmount to clean up the component for us

	//* instead of increasing the count manually we will automatically change the count of numbers

	//* inside of our useEffect we are calling setCount and effect will run every time when the count changes and also we are setting up a brand new interval that will cause a our browser to freeze by calling intervals multiple times

	//* For solving this issue we can call another useEffect. whionly runs a setInterval and we can set the updating variable to empty array in that way setInterval will only run once and setCount will run continuously
	// useEffect(() => {
	// 	setInterval(() => {
	// 		// setCount((prev) => prev + 1);
	// 	}, 500);
	// }, []);

	//************************ Clean up ****************/
	//* For clearing the interval we will use clearinterval method
	//* setInterval will return some kind of interval ID then we will use clearInterval, and clearInterval we will pass  the interValId to it and it will end that interval
	//*The way we can use useEffect as componentWillUnmount is by returning something from its body,we will return a function, this function is going to be our clean up function
	//* under the hood when react calls useEffect, and that useEffect call returns a function and right when the component is about to unmount it runs that function, so that it can do any kind of clean up when it runs that function.
	//* In our case the function that we will give react to run will be clearInterval function, and we will pass it a intervalID
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCount((prev) => prev + 1);
		}, 1000);
		return () => clearInterval(intervalId);
	}, []);
	useEffect(() => {
		setColor(randomcolor());
	}, [count]);

	return (
		<div style={{ textAlign: "center" }}>
			<h1 style={{ color: color, fontSize: "45px" }}>{count}</h1>

			{/* <button
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
			</button> */}
		</div>
	);
}

export default UseEffect2;
