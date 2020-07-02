// React: Pass Props to a Stateless Functional Component

/*
 * In React, you can pass props, or properties, to child components.
 * Say you have an App component which renders a child component called Welcome which is a stateless functional component. 
 * You can pass Welcome a user property by writing:

<App>
  <Welcome user='Mark' />
</App>

* It is standard to call this value props and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. 
 */

/*
 There are Calendar and CurrentDate components in the code editor. When rendering CurrentDate from the Calendar component, pass in a property of date assigned to the current date from JavaScript's Date object. Then access this prop in the CurrentDate component, showing its value within the p tags. Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}.
 */

const CurrentDate = (props) => {
	return (
		<div>
			{/* change code below this line */}
			<p>The current date is: props.date </p>
			{/* change code above this line */}
		</div>
	);
};
let date1 = new Date();
class Calendar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>What date is it?</h3>
				{/* date={Date()} wil give current date  */}
				<CurrentDate date={Date()} />
				{/* change code above this line */}
			</div>
		);
	}
}
