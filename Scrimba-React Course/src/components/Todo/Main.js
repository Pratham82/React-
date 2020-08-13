import React from "react";
import TodoItem from "./TodoItem";
import "../../App.css";

import toDoData from "./To-doData";
import todosData from "./To-doData";

/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments
 * in the code for some help on accomplishing this one
 *
 * Challenge:
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

class Main extends React.Component {
	constructor() {
		super();

		this.state = {
			stateData: toDoData,
		};

		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(id) {
		// Update state so that the item with the given id flips `completed` from false to true (or vise versa)s
		// console.log(`This id was clicked ${todo.id}`);

		// Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
		this.setState((prevState) => {
			const updatedState = prevState.stateData.map((todo) => {
				if (todo.id === id) {
					// Old way
					// todo.completed = !todo.completed;

					//* Instead of modifying the previous state we will return an object that will replace todo in new array and modifying the completed property rather than modifying the old object directly

					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			});

			return {
				stateData: updatedState,
			};
		});
	}
	render() {
		const ToDos = this.state.stateData.map((todo) => (
			<TodoItem
				key={todo.id}
				taskID={todo.id}
				task={todo.text}
				progress={todo.completed}
				handleChange={this.handleChange}
			/>
		));

		return (
			<div className="App">
				<div className="todo-list App">
					<h1>To do list</h1>
					{ToDos}
				</div>
			</div>
		);
	}
}

export default Main;
