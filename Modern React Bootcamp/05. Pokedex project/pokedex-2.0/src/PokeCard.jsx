import React from "react";
import "./PokeCard.css";

export const PokeCard = (props) => {
	const pokeData = props.pokeData;
	// console.log(pokeData);

	const padImg = (imgID) =>
		imgID < 10 ? `00${imgID}` : imgID < 100 ? `0${imgID}` : `${imgID}`;

	const colors = {
		fire: "#FDDFDF",
		grass: "#DEFDE0",
		electric: "#FCF7DE",
		water: "#DEF3FD",
		ground: "#f4e7da",
		rock: "#d5d5d4",
		fairy: "#fceaff",
		poison: "#98d7a5",
		bug: "#f8d5a3",
		dragon: "#97b3e6",
		psychic: "#eaeda1",
		flying: "#F5F5F5",
		fighting: "#E6E0D4",
		normal: "#F5F5F5",
	};

	const main_types = Object.keys(colors);

	return (
		<div
			key={pokeData.id}
			className="cardStyle"
			style={{ backgroundColor: colors[pokeData.type] }}
		>
			<p>#{pokeData.id}</p>
			<img
				className="cardImg"
				src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padImg(
					pokeData.id
				)}.png`}
				alt="name-img"
				width="150px"
			/>
			<p>
				<b>{pokeData.name}</b>
			</p>
			<p>
				<b>{pokeData.type[0].toUpperCase() + pokeData.type.slice(1)}</b>{" "}
				type
			</p>
			<p>
				<b>Exp:</b> {pokeData.base_experience}
			</p>
		</div>
	);
};
