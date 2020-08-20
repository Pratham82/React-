// Class based component
class FirstComponent extends React.Component {
	render() {
		return (
			<div>
				<h2>This is done with component</h2>
				<h2>This is done with class based component</h2>
			</div>
		);
	}
}

//Functional Component
const FunctionalComp = () => (
	<React.Fragment>
		<h2> This is rendered by a functional component</h2>
		<h2> This is rendered by a functional component</h2>
		<h2> This is rendered by a functional component</h2>
	</React.Fragment>
);

// ReactDOM.render(<FirstComponent />, document.getElementById("root"));
ReactDOM.render(<FunctionalComp />, document.getElementById("root"));
