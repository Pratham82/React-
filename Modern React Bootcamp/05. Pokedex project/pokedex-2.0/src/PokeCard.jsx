import React from "react";

export const PokeCard = (props) => {
	const pokeData = props.pokeData;
	console.log(pokeData);
	const cardStyle = {
		border: "1px solid",
		padding: "5px 10px",
		borderRadius: "8px",
		fontSize: "18px",
		fontFamily: "Fira code",
		fontWeight: "400",
		lineHeight: "0.5",
		width: "200px",
		height: "300px",
		textAlign: "center",
		margin: "10px",
	};

	const padImg = (imgID) =>
		imgID < 10 ? `00${imgID}` : imgID < 100 ? `0${imgID}` : `${imgID}`;
	return (
		<div style={cardStyle}>
			<p>#{pokeData.id}</p>
			<img
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
