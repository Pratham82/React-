import React from "react";
import ProductData from "./ProductData";

/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

export default function Product(props) {
	const productStyle = {
		color: "black",
		border: "1px solid",
		margin: "5px",
		padding: " 0 10px",
		width: "200px",
		borderRadius: "10px",
		backgroundColor: "#9fcdf0",
	};

	console.log(props);
	return (
		<div style={productStyle}>
			<p>
				<h2>{props.name}</h2>
			</p>
			<p>
				<b>Price:</b> ${props.price}
			</p>
			<p>
				<b>Description:</b> {props.description}
			</p>
		</div>
	);
}
