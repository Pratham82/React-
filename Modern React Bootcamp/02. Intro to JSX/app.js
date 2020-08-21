class JSXDemo extends React.Component {
	render() {
		const getMood = () => {
			let moods = ["😄", "😢", "😠", "😱", "😆"];
			return moods[parseInt(Math.random() * moods.length)];
		};
		return (
			<div>
				<h1>My number is {parseInt(Math.random() * 50)}</h1>
				<h2>My current mood is {getMood()}</h2>
				<img
					src="https://source.unsplash.com/random"
					alt="random image"
					height="450px"
					width="700px"
				/>
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
