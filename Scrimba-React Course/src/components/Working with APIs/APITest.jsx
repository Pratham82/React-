import React, { Component } from "react";

export default class APITest extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
			characterData: {},
			charList: {},
		};
	}

	componentDidMount() {
		this.setState({ isLoading: true });
		fetch("https://swapi.dev/api/people/1")
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					characterData: data,
					isLoading: false,
				});
			});
	}

	render() {
		// console.log(this.state.characterData.films[1]);
		const containerStyle = {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			padding: "20px",
			lineHeight: "0.8",
		};
		const innerContainer = {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			border: "1px solid",
			borderRadius: "15px",
			backgroundColor: "#e3f9ff",
			flexDirection: "column",
			padding: "5px 20px",
		};
		return (
			<div style={containerStyle}>
				<h1>Star wars characters </h1>
				{this.state.isLoading ? (
					"Loading..."
				) : (
					<div style={innerContainer}>
						<h3>Name: {this.state.characterData.name} </h3>
						<p>Gender: {this.state.characterData.gender}</p>
						<p>Height: {this.state.characterData.height}</p>
						<p>Hair Color: {this.state.characterData.hair_color}</p>
						<p>Mass: {this.state.characterData.mass}</p>
						{/* <p>Starships: {this.state.characterData.starships}</p> */}
					</div>
				)}
			</div>
		);
	}
}
