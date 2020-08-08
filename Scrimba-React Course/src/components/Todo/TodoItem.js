import React from "react";

export default function TodoItem(props) {
	console.log(props);
	return (
		<div className="todo-item">
			<input type="checkbox" checked={props.progress} />
			{/* {props.progress ? (
				<p>
					<s>{props.task}</s>
				</p>
			) : (
				<p>{props.task}</p>
			)} */}
			<p>{props.task}</p>
		</div>
	);
}
