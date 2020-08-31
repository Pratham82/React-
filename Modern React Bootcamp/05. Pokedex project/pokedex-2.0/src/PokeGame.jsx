import React, { Component } from "react";
import PokeDex from "./PokeDex";
export default class PokeGame extends Component {
	static defaultProps = {
		pokemon: [
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
		],
	};

	render() {
		//* Styles
		const containerStyle = {
			display: "flex",
			flexDirection: "Column",
			justifyContent: "center",
			alignItems: "center",
		};

		const scoreStyle = {
			lineHeight: "0",
			fontFamily: "Fira Code",
			fontSize: "25px",
		};

		let hand1 = [];
		let hand2 = [...this.props.pokemon];

		while (hand1.length < hand2.length) {
			let randomInd = Math.floor(Math.random() * hand2.length);
			let randomPokemon = hand2.splice(randomInd, 1)[0];
			hand1.push(randomPokemon);
		}
		const hand1Val = hand1.reduce(
			(sum, val) => val.base_experience + sum,
			0
		);
		const hand2Val = hand2.reduce(
			(sum, val) => val.base_experience + sum,
			0
		);

		return (
			<div style={containerStyle}>
				<a href="https://fontmeme.com/pokemon-font/">
					<img
						src="https://fontmeme.com/permalink/200831/9a3478ef8a4eb003671fe29c5270216f.png"
						alt="PokeDex 2.0"
						style={{ margin: "10px", height: "80px" }}
					/>
				</a>
				{/* <p style={scoreStyle}>TotalXP: {hand1Val}</p> */}
				<PokeDex
					pokemons={hand1}
					isWinner={hand1Val > hand2Val}
					TotalXP={hand1Val}
				/>
				{/* <p style={scoreStyle}>TotalXP: {hand2Val}</p> */}

				<PokeDex
					pokemons={hand2}
					isWinner={hand2Val > hand1Val}
					TotalXP={hand2Val}
				/>
			</div>
		);
	}
}
