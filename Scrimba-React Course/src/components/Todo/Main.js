import React from "react";
import TodoItem from "./TodoItem";
import "../../App.css";

import toDoData from "./To-doData";

/*

Challenge: Using the array map method, render a child component for each todo item in the todosData array and pass the relevant data to it.
*/

/*
In the previous iteration of this todo list app, we pulled in todos data from a JSON file and mapped over it to display the todo items.

Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the component's state

Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
*/

class Main extends React.Component {
	constructor() {
		super();

		this.state = {
			stateData: toDoData,
		};
	}
	render() {
		const ToDos = this.state.stateData.map((todo) => (
			<TodoItem
				key={todo.id}
				task={todo.text}
				progress={todo.completed}
			/>
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
}

export default Main;
