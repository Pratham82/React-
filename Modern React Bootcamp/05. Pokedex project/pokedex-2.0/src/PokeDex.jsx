import React from "react";
import { PokeCard } from "./PokeCard.jsx";

export default class PokeDex extends React.Component {
	render() {
		const data = [
			{
				id: 4,
				name: "Charmander",
				type: "fire",
				base_experience: 62,
			},
			{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
			{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
			{
				id: 12,
				name: "Butterfree",
				type: "flying",
				base_experience: 178,
			},
			{
				id: 25,
				name: "Pikachu",
				type: "electric",
				base_experience: 112,
			},
			{
				id: 39,
				name: "Jigglypuff",
				type: "normal",
				base_experience: 95,
			},
			{
				id: 94,
				name: "Gengar",
				type: "poison",
				base_experience: 225,
			},
			{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
		];
		// console.log("Data", data);
		const pokeData = this.props.pokemons;

		const pokeDexStyle = {
			display: "flex",
			flexWrap: "wrap",
			padding: "10px 20px",
			borderRadius: "8px",
		};

		const colorCheck = this.props.isWinner ? "green" : "red";

		const headingStyle = {
			fontFamily: "Fira Code",
			textAlign: "center",
			lineHeight: "0",
			color: colorCheck,
		};

		return (
			<div>
				{this.props.isWinner ? (
					<p style={headingStyle}>
						Winner Total score: {this.props.TotalXP}
					</p>
				) : (
					<p style={headingStyle}>
						Looser Total score: {this.props.TotalXP}
					</p>
				)}
				<div style={pokeDexStyle}>
					{pokeData.map((val) => (
						<PokeCard pokeData={val} key={val.id} />
					))}
				</div>
			</div>
		);
	}
}
