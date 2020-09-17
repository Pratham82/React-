// React: Render a Class Component to the DOM

/*
 * syntax: ReactDOM.render(componentToRender, targetNode)
 
 * The first argument is the React component that you want to render. The second argument is the DOM node that you want to render that component within.
 
 * React components are passed into ReactDOM.render() a little differently than JSX elements.
 
 * For JSX elements, you pass in the name of the element that you want to render. You use this syntax for both ES6 class components and functional components.
 */

// Both the Fruits and Vegetables components are defined for you behind the scenes. Render both components as children of the TypesOfFood component, then render TypesOfFood to the DOM. There is a div with id='challenge-node' available for you to use.

class TypesOfFood extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Types of Food:</h1>
				{/* change code below this line */}
				<div id="challenge-node">
					<Fruits />
					<Vegetables />
				</div>
				{/* change code above this line */}
			</div>
		);
	}
}

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));
