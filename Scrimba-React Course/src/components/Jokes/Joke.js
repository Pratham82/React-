import React from "react";

export default function Joke(props) {
	const jokeStyle = {
		color: "white",
		border: "1px solid",
		margin: "10px",
		padding: "10px",
		width: "500px",
		borderRadius: "10px",
		backgroundColor: "grey",
	};
	console.log(props);
	return (
		<div style={jokeStyle}>
			<p
				style={{
					display: !props.question ? "none" : "block",
				}}
			>
				<strong>Joke:</strong> {props.question}
			</p>
			<p
				style={{
					display: !props.punchLine ? "none" : "block",
				}}
			>
				<strong>PunchLine:</strong> {props.punchLine}
			</p>
			{!props.question && !props.punchLine ? (
				<p>Nothing was provided from the db</p>
			) : null}
		</div>
	);
}
