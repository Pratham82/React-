class App extends React.Component {
	render() {
		return (
			<div>
				{/* Adding various data types into props */}
				<Hello
					from="Joe"
					to="Sam"
					num={4}
					arr={[1, 2, 3, 4, 5]}
					isFunny={true}
					bangs={5}
					imgSrc="https://source.unsplash.com/random"
				/>
				<Hello from="Bob" to="Alice" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
