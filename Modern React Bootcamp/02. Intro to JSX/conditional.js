class ConditionalSeven extends React.Component {
	render() {
		const getRandomNum = () => parseInt(Math.random() * 10 + 1);
		let val = getRandomNum();

		return (
			<div>
				<h1>Get Random Number game</h1>
				{val == 7 ? (
					<div>
						<h2>Yayyy! 😄 the number is 7 you won</h2>
						<img
							src="https://media.giphy.com/media/xDpB3lRInUYla/giphy.gif"
							alt=""
						/>
					</div>
				) : (
					<h2>Your entered number is {val}</h2>
				)}
			</div>
		);
	}
}

ReactDOM.render(<ConditionalSeven />, document.getElementById("root"));
