// React: Use PropTypes to Define the Props You Expect

/*
 * React provides useful type-checking features to verify that components receive props of the correct type.
 * It's considered a best practice to set propTypes when you know the type of a prop ahead of time. You can define a propTypes property for a component in the same way you defined defaultProps.
 * Doing this will check that props of a given key are present with a given type.
 */

/*
 Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.
 */

const Items = (props) => {
	return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

// change code below this line
Items.propTypes = { quantity: PropTypes.number.isRequired };
// change code above this line

Items.defaultProps = {
	quantity: 0,
};

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Items />;
	}
}
