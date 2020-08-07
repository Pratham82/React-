import React from "react";
import TodoItem from "./TodoItem";

function Main() {
	return (
		<div className="todo-list">
			<h1>To do list</h1>
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</div>
	);
}

export default Main;
