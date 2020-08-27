class Friend extends React.Component {
	render() {
		//* Destructuring the props

		const { name, occupation, hobbies } = this.props;
		// console.log(name);
		// console.log(occupation);
		// console.log(hobbies);

		const cardStyle = {
			display: "flex",
			border: "1px solid",
			width: "300px",
			padding: "5px 10px",
			margin: "5px 10px",
			borderRadius: "8px",
			flexDirection: "column",
		};
		return (
			<div style={cardStyle}>
				<p>
					<b>Name: </b>
					{name}
				</p>
				<p>
					<b>Occupation: </b>
					{occupation}
				</p>

				<b>Hobbies: </b>
				<ul>
					{hobbies.map((hobby) => (
						<li style={{ listStyle: "numbers inside" }}>{hobby}</li>
					))}
				</ul>
			</div>
		);
	}
}
