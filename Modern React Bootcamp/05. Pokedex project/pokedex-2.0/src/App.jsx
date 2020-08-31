import React from "react";
import PokeDex from "./PokeDex.jsx";
import PokeGame from "./PokeGame.jsx";
export default class App extends React.Component {
	render() {
		return (
			<h1>
				<PokeGame />
			</h1>
		);
	}
}
