import React from "react";

/**
 * Challenge: Get rid of our warning about not having an onChange on our input. For now, the function that runs onChange can simply console.log something.
 */

export default function TodoItem(props) {
	console.log(props);
	return (
		<div className="todo-item">
			<input
				type="checkbox"
				checked={props.progress}
				onChange={() => console.log("checked")}
			/>
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
