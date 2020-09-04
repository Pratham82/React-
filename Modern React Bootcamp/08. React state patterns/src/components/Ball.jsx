import React from "react";

const Ball = (props) => {
	return (
		<div
			style={{
				backgroundColor: "blue",
				color: "white",
				fontSize: "25px",
				borderRadius: "50%",
				width: "100px",
				height: "100px",
				display: "grid",
				margin: "10px",
				placeItems: "center",
				backgroundColor: "#8efb95",
			}}
		>
			<div>{props.numbers}</div>
		</div>
	);
};

export default Ball;
