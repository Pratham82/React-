class Hello extends React.Component {
	//* Default Props (If the props is not passed down from the parent, so we can use default props)
	static defaultProps = {
		bangs: 1,
		arr: [1, 1, 1],
	};

	render() {
		console.log(this.props);
		return (
			<div
				style={{
					border: "1px solid",
					padding: "1rem",
					margin: "0.5em",
				}}
			>
				<h1>
					Hi 👋 {this.props.to} from {this.props.from}
				</h1>
				<h2>Data:</h2>
				<p>Array: {this.props.arr}</p>
				<p>
					Humor Meter:{" "}
					{this.props.isFunny ? "Very Funny" : "Not Funny"}
				</p>
				<p>Bangs: {"⭐️".repeat(this.props.bangs)}</p>
				<p>Random Image:</p>
				<img
					src={this.props.imgSrc}
					alt="Random image"
					heigh="100px"
					width="500px"
					border="1px solid red"
				/>
			</div>
		);
	}
}
