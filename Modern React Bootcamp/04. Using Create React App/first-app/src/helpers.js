const choice = (arr) => parseInt(Math.random() * arr.length);

// const remove = (item, arr) => arr.filter((val) => item !== val);

function remove(item, items) {
	for (let i = 0; i < items.length; i++) {
		if (items[i] === item) {
			return [...items.slice(0, i), ...items.slice(i + 1)];
		}
	}
}

export { choice, remove };
