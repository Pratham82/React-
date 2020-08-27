class App extends React.Component {
	render() {
		const containerStyle = {
			display: "flex",
		};
		return (
			<div style={containerStyle}>
				<Friend
					name="Joey"
					occupation="Actor"
					hobbies={["Acting", "freestyle rapping", "swimming"]}
				/>
				<Friend
					name="Ross"
					occupation="Scientist"
					hobbies={["Writing", "Singing", "Coding"]}
				/>
				<Friend
					name="Jessica"
					occupation="Cook"
					hobbies={["Cleaning", "Dancing", "Cooking"]}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
