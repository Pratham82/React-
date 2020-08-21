//** This is our main file which will render all the components */

class App extends React.Component {
	render() {
		return (
			<div
				style={{
					border: "1px solid",
					padding: "10px",
					backgroundColor: "#0af7a8",
				}}
			>
				<h3 style={{ border: "1px solid", padding: "5px" }}>
					App Component
				</h3>

				<Hello />
				<ConditionalSeven />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
