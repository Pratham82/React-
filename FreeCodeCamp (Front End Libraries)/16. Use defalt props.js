//React: Use Default Props

/*
* React also has an option to set default props. 
* You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary
* This allows you to specify what a prop value should be if no value is explicitly provided.

*/

/*
The code editor shows a ShoppingCart component. Define default props on this component which specify a prop items with a value of 0
*/

const ShoppingCart = (props) => {
	return (
		<div>
			<h1>Shopping Cart Component</h1>
		</div>
	);
};
// change code below this line

ShoppingCart.defaultProps = { items: 0 };
