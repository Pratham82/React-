import React from "react";
import ReactDOM from "react-dom";
import { choice, remove } from "./helpers";
import Foods from "./foods";

class App extends React.Component {
	render() {
		const foodsArr = Foods;
		console.log(foodsArr);
		const randomFruit = foodsArr[choice(foodsArr)];
		return (
			<div>
				<h1>Food Game</h1>
				<h2>{randomFruit}</h2>
				<h2>{`I'd like ${randomFruit}, please`}</h2>
				<h2>{`Here you go ${randomFruit}`}</h2>
				{remove(randomFruit, foodsArr)}
				<h3>{`Delicious May I have another one ?`}</h3>
				<h3>{`I'm sorry, we're all out. We have ${foodsArr.length} left.`}</h3>

				<h3></h3>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
