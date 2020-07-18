import React from "react";

export default class Hello extends React.Component {
	render() {
		//*1. This is example of accessing the attribute or prop

		console.log(typeof Hello); //function

		// props is an object inside our class
		console.log(typeof this.props); //object

		//* If we didn't passed in any attributes inside the component then the props object will be an empty object or else the object with all the properties
		// If object is empty
		console.log(this.props); //{}
		//{firstName: "Prathamesh", lastName: "Mali"}
		//{firstName: "John", lastName: "Snow", location: "The North"}

		//* Just like JS object we can check if thee Component has any properties inside, if their is an key we will return props object
		console.log(
			Object.keys(this.props).length === 0
				? "Object is empty"
				: this.props
		);

		//* Passing the attribute inside the component
		/*
         * Just like any class component in hte child class we can get access to "props" from "props key" on the "components instance"
        
         * Instead of hardCoding the firstName lastName and location we can pass this values as a prop
        
         * So we can change the props data any time, and if data is changed it will be rendered agin with new data
        
		 * We are using an expression that's why we have to wrap it in curly braces
		 */

		return (
			<div className="text-2xl my-5">
				{/* Hello I'm Prathamesh Mali, and I am form Mumbai 📍 */}
				{this.props.header}
				Hello 👋 I'm {this.props.firstName} {this.props.lastName}, and I
				am form {this.props.location} 📍 isTrue
				<br />
				{this.props.auth === true ? (
					// I have tailwind css for styling
					<button
						onClick={this.props.logOut}
						className="bg-blue-500 px-2 mx-2 rounded hover:bg-blue-400 duration-200"
					>
						Logout
					</button>
				) : null}
				{/* {this.props.auth === true? <button onClick={this.props.logOut}>Logout</button>} */}
				{this.props.footer}
			</div>
		);
	}
}
