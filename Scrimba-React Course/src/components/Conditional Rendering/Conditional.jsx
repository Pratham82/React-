import React from "react";

const Conditional = (props) => {
	console.log(props);
	return (
		//* This is example of conditional rendering
		//* Here we are changing the component being rendered on the screen based on the props thats been passed to the child component
		//* In our case if isLoading is true then we show Loading... else we show page completely loaded

		//* We can also to the same inside the parent component itself and the part we want to render will be written in here
		<div>
			{/* {props.isLoading ? (
				<h2>Loading...</h2>
			) : (
				<h2>Page loaded completely</h2>
			)}{" "} */}
			<h2>Page loaded completely</h2>
		</div>
	);
};

export default Conditional;
