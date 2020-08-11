import React from "react";

const increment = (num) => {
	return num + 1;
};

const Events = (props) => {
	return (
		<React.Fragment>
			<img
				src="https://www.fillmurray.com/200/100"
				onMouseOver={() => console.log("cursor was moved on image")}
			/>
			<br />
			<br />
			<button onClick={() => console.log("Button clicked")}>
				Click Me !!!
			</button>
			<br />
			<br />
			<input
				id="input1"
				type="text"
				onKeyDown={() =>
					console.log(document.getElementById("input1").value)
				}
			/>
			<button
				onClick={() => {
					document.getElementById("input1").value = null;
					console.clear();
				}}
			>
				Clear
			</button>
		</React.Fragment>
	);
};

export default Events;
