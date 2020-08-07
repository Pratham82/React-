import React from "react";

const date = new Date();

const exTime = date.getHours();
let finTime;
let greetMsg;

// Inline styles

const styles = {
	fontSize: 35,
	fontWeight: 500,
	color: "black",
	backgroundColor: "",
};

if (exTime < 12) {
	finTime = (exTime % 12) + "AM";
	greetMsg = "Good Morning !";
	styles.color = "yellow";
} else if (exTime >= 12 && exTime <= 17) {
	finTime = (exTime % 12) + " PM";
	greetMsg = "Good Afternoon !";
	styles.color = "orange";
} else {
	finTime = (exTime % 12) + " PM";
	greetMsg = "Good Evening !";
	if (exTime >= 21) {
		greetMsg = "Good Night !";
	}
	styles.color = "blue";
}
export default function Greeting() {
	return (
		<div>
			{/* <p>{`Current time : ${date.getHours() % 12} o' clock`}</p> */}
			<p>Time: {finTime}</p>
			<p style={styles}>{greetMsg}</p>
		</div>
	);
}
