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
					display: !props.jokesInfo.question ? "none" : "block",
				}}
			>
				<strong>Joke:</strong> {props.jokesInfo.question}
			</p>
			<p
				style={{
					display: !props.jokesInfo.punchLine ? "none" : "block",
				}}
			>
				<strong>PunchLine:</strong> {props.jokesInfo.punchLine}
			</p>
			{!props.jokesInfo.question && !props.jokesInfo.punchLine ? (
				<p>Nothing was provided from the db</p>
			) : null}
		</div>
	);
}

/*
{props.jokesInfo.question && props.jokesInfo.punchLine ? (
				<React.Fragment>
					<p>
						<strong>Joke:</strong> {props.jokesInfo.question}
					</p>
					<p>
						<strong>PunchLine:</strong> {props.jokesInfo.punchLine}
					</p>
				</React.Fragment>
			) : !props.jokesInfo.question && !props.jokesInfo.punchLine ? (
				<p>Nothing was provided from the db</p>
			) : !props.jokesInfo.question ? (
				<p>
					<strong>PunchLine:</strong> {props.jokesInfo.punchLine}
				</p>
			) : !props.jokesInfo.punchLine ? (
				<p>
					<strong>Joke:</strong> {props.jokesInfo.question}
				</p>
			) : null}
*/
