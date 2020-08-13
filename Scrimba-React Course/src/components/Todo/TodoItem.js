import React from "react";

/**
 * Challenge: Get rid of our warning about not having an onChange on our input. For now, the function that runs onChange can simply console.log something.
 */

export default function TodoItem(props) {
	// console.log(props.task.id);
	return (
		<div className="todo-item">
			<input
				type="checkbox"
				checked={props.progress}
				onChange={() => props.handleChange(props.taskID)}
			/>
			<p>{props.task}</p>
		</div>
	);
}
