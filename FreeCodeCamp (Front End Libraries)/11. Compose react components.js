// React: Compose React Components

/*
 * 1. Rendering ES6 style class components within other components is no different than rendering the simple components
 * 2. You can render JSX elements, stateless functional components, and ES6 class components within other components.
 */

class Fruits extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h2>Fruits:</h2>
				{/* change code below this line */}
				<NonCitrus />
				<Citrus />
				{/* change code above this line */}
			</div>
		);
	}
}

class TypesOfFood extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Types of Food:</h1>
				{/* change code below this line */}
				<Fruits />
				{/* change code above this line */}
				<Vegetables />
			</div>
		);
	}
}
