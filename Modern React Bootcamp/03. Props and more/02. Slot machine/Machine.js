class Machine extends React.Component {
	render() {
		let ingredientsLength = this.props.ingredients.length;
		let random1 = parseInt(Math.random() * ingredientsLength);
		let random2 = parseInt(Math.random() * ingredientsLength);
		let random3 = parseInt(Math.random() * ingredientsLength);
		let arr = this.props.ingredients;
		let res = [arr[random1], arr[random2], arr[random3]];
		const childStyle = {
			display: "flex",
			color: "black",
			justifyContent: "center",
			alignItems: "center",
			marginTop: "50px",
			border: "1px solid",
			borderRadius: "5px",
			width: "400px",
			margin: "0 auto",
			backgroundColor: "#ffa30f",
		};
		const innerChild = {
			display: "flex",
			padding: "10px 20px",
			border: "1px solid",
			borderRadius: "5px",
			margin: "10px",
			color: "black",
			fontSize: "55px",
			backgroundColor: "#fff",
		};
		return (
			<div>
				{/* <h1>{res}</h1> */}
				<div style={childStyle}>
					<div style={innerChild}>{res[0]}</div>
					<div style={innerChild}>{res[1]}</div>
					<div style={innerChild}>{res[2]}</div>
				</div>
				{res.every((val, index, arr) => arr[0] == val) ? (
					<div
						style={{
							textAlign: "center",
							backgroundColor: " #19fc00 ",
							margin: "30px auto",
							padding: "5px 10px",
							borderRadius: "5px",
							width: "450px",
							color: "white",
						}}
					>
						<h2>Jackpot 🤑 💸💰 You won ❗️❗️</h2>
					</div>
				) : (
					<div
						style={{
							textAlign: "center",
							backgroundColor: "#f45f24",
							width: "340px",
							margin: "30px auto",
							padding: "5px 10px",
							borderRadius: "5px",
							width: "400px",
							color: "white",
						}}
					>
						<h2>Tough Luck 😿 Try again</h2>
					</div>
				)}
			</div>
		);
	}
}
