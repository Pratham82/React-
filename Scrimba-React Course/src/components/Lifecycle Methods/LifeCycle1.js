import React from "react";

export default class LifeCycle1 extends React.Component {
	constructor() {
		super();
	}

	//* Deprecated method
	componentWillMount() {}

	//* Deprecated method
	componentWillReceiveProps(nextProps) {
		if (nextProps.whatever !== this.props.whatever) {
			// do something important here
			// is invoked as soon as the props are updated before another render is called. We triggered it from setNewNumber when we updated the state.
		}
	}

	//* Deprecated method
	componentWillUpdate() {}

	//* Updated method
	static getDerivedStateFromProps() {
		// return the new, updated state based upon the props
		// snapshot will be saved in an object
	}

	getSnapshotBeforeUpdate() {
		// create a backup of the current way things are
	}

	componentDidMount() {
		// Birth of the component
		//  is executed before rendering, on both the server and the client side.
		// Runs for the first time when component is mounted
		// GET the data I need to correctly display
	}

	shouldComponentUpdate(nextProps, nextState) {
		// return true if want it to update
		// return false if not
		// should return true or false value. This will determine if the component will be updated or not. This is set to true by default. If you are sure that the component doesn't need to render after state or props are updated, you can return false value.
	}

	componentWillUnmount() {
		// teardown or cleanup your code before your component disappears
		// (E.g. remove event listeners)
		// is called after the component is unmounted from the dom. We are unmounting our component in main.js.
	}

	componentDidUpdate() {
		// componentDidUpdate is called just after rendering.
	}

	render() {
		return (
			<div>
				<h1 style={{ textAlign: "center" }}>LifeCycle Methods</h1>
			</div>
		);
	}
}

/*

*/
