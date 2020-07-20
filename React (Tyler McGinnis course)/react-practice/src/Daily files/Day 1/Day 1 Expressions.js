import React from "react";

export default class App extends React.Component {
	render() {
		const name = "Prathamesh";
		return (
			<div>
				<h2>Hi my name is {name} 👋 </h2>
				<h2>45 * 5= {45 * 5}</h2>
				<h2>Today's date is {new Date().toLocaleDateString()}</h2>
			</div>
		);
	}
}
// Button in tailwind
{
	/* <button
	className="bg-blue-500 hover:bg-blue-400 duration-200 px-5 py-2 m-5 rounded"
	onClick="{changeAuthSate}"
>
	Toggle Auth
</button>; */
}
