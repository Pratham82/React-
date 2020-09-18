// Remove an Item from an Array

// The reducer and action creator were modified to remove an item from an array based on the index of the item. Finish writing the reducer so a new state array is returned with the item at the specific index removed.

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
	switch (action.type) {
		case "REMOVE_ITEM":
			let newTodo = [...state];
			newTodo.splice(action.index, 1);
			return newTodo;
		default:
			return state;
	}
};

const removeItem = (index) => {
	return {
		type: "REMOVE_ITEM",
		index,
	};
};

const store = Redux.createStore(immutableReducer);
