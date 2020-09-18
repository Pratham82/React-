//  Write a Counter with Redux

// In this lesson, you'll implement a simple counter with Redux from scratch. The basics are provided in the code editor, but you'll have to fill in the details! Use the names that are provided and define incAction and decAction action creators, the counterReducer(), INCREMENT and DECREMENT action types, and finally the Redux store. Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to increment or decrement the state held in the store. Good luck building your first Redux app!

const ADD_TO_DO = "ADD_TO_DO";

// A list of strings representing tasks to do:
const todos = [
	"Go to the store",
	"Clean the house",
	"Cook dinner",
	"Learn to code",
];

const immutableReducer = (state = todos, action) => {
	switch (action.type) {
		case ADD_TO_DO:
			let newTodo = [...todos];
			newTodo.push(action.todo);
			return newTodo;
		default:
			return state;
	}
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
	return {
		type: ADD_TO_DO,
		todo,
	};
};

const store = Redux.createStore(immutableReducer);
