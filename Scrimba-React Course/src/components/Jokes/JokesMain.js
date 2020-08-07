import React from "react";
import Joke from "./Joke";
// One LAST time in this course, set up a React app from scratch
// Render an <App /> component
// App should be in its own file
// App should render 5 <Joke /> components
// Each Joke should receive a "question" prop and a "punchLine" prop
// and render those however you'd like

// EXTRA CREDIT:
// Some jokes are only a punch line with no question:
// E.g.: "It’s hard to explain puns to kleptomaniacs because they always take things literally."
// If you don't pass in a "question" prop, how might you make it only show the punchline instead?

// Spend time practicing the style of your Joke component

export default function JokesMain() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				margin: "20px 10px",
			}}
		>
			<h1 style={{ color: "white", textAlign: "center" }}>
				Jokes page 😆
			</h1>

			<Joke
				jokesInfo={{
					question: "My wife told me to stop acting like a flamingo.",
					punchLine: "I had to put my foot down.",
				}}
			/>
			<Joke
				jokesInfo={{
					question:
						"What is Whitney Houston’s favorite type of coordination? ",
				}}
			/>
			<Joke
				jokesInfo={{
					question: "Why are gay people always smiling?",
					punchLine: "Because they can’t keep a straight face.",
				}}
			/>
			<Joke
				jokesInfo={{
					// question: "Why does Waldo wear stripes?",
					punchLine: "Because he doesn’t want to be spotted.",
				}}
			/>
			<Joke
				jokesInfo={{
					question:
						"What do you do when your hot pants catch on fire?",
					punchLine: "Put them out with your pantyhose.",
				}}
			/>
			<Joke jokesInfo={{}} />
		</div>
	);
}
