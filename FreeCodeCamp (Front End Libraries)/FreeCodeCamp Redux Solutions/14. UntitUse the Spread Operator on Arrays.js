// Use the Spread Operator on Arrays

// Use the spread operator to return a new copy of state when a to-do is added.

const immutableReducer = (state = ["Do not mutate state!"], action) => {
	switch (action.type) {
		case "ADD_TO_DO":
			// don't mutate state here or the tests will fail
			let newTodo = [...state];
			newTodo.push(action.todo);
			return newTodo;
		default:
			return state;
	}
};

const addToDo = (todo) => {
	return {
		type: "ADD_TO_DO",
		todo,
	};
};

const store = Redux.createStore(immutableReducer);
