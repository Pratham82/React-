// React: Review Using Props with Stateless Functional Components

/*
 * A stateless functional component is any function you write which accepts props and returns JSX.

 * A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state.
 
 * A stateful component is a class component that does maintain its own internal state.

 * You may see stateful components referred to simply as components or React components.

 * A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.
 */

/*
The code editor has a CampSite component that renders a Camper component as a child. Define the Camper component and assign it default props of { name: 'CamperBot' }. Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.
*/

class CampSite extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Camper prop="Hulk" />
			</div>
		);
	}
}
// change code below this line
let Camper = (props) => {
	return (
		<div>
			<p>My name is {props.name}</p>
		</div>
	);
};
Camper.defaultProps = { name: "CamperBot" };
Camper.propTypes = { name: PropType.string.isRequired };
