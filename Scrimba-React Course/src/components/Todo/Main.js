import React from "react";
import TodoItem from "./TodoItem";
import "../../App.css";

import toDoData from "./To-doData";

/*

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/

function Main() {
	console.log(toDoData);

	const ToDos = toDoData.map((todo) => (
		<TodoItem key={todo.id} task={todo.text} progress={todo.completed} />
	));

	return (
		<div className="App">
			<div className="todo-list  App">
				<h1>To do list</h1>
				{ToDos}
			</div>
		</div>
	);
}

export default Main;
