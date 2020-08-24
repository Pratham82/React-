class App extends React.Component {
	render() {
		const m1 = ["🍒", "🍑", "🍓"];
		return (
			<div>
				<Machine ingredients={m1} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
