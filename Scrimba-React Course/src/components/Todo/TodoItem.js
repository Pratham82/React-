import React from "react";



 /**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */


 const TodoItem= (props) => {
	// console.log(props.task.id);
	 const completedStyles = {
		 fontStyle: 'italic',
		 color: 'grey',
		 textDecoration : 'line-through'
	 }
	return (
		<div className="todo-item">
			<input
				type="checkbox"
				checked={props.progress}
				onChange={() => props.handleChange(props.taskID)}
			/>
			{/* Method -1*/}
			{/* <p>{!props.progress ? props.task : <span style={{color:'grey'}}><strike><i>{props.task}</i></strike></span> }</p> */}

			{/* Method - 2 */}
			<p style= {props.progress ? completedStyles: null }> {props.task}</p>
		</div>
	);
}


export default TodoItem;