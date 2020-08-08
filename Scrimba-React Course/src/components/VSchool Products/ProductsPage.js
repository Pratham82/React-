import React from "react";
import ProductData from "./ProductData";
import Product from "./Product";
/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

export default function ProductsPage() {
	const Products = ProductData.map((prod) => (
		<Product
			key={prod.id}
			name={prod.name}
			price={prod.price}
			description={prod.description}
		/>
	));
	return (
		<React.Fragment>
			<h1 style={{ textAlign: "center" }}>Products Page</h1>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					flexWrap: "wrap",
					margin: "20px 10px",
				}}
			>
				{Products}
			</div>
		</React.Fragment>
	);
	// console.log(ProductData);
	// return <div className="product">{Products}</div>;
}
