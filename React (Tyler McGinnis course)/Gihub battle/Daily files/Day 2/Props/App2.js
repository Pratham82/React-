import React from "react";
import Hello from "./Hello";

export default class App2 extends React.Component {
	render() {
		//*1. This is example of passing data into a component

		//* Passing the prop is similar to how we add attribute to and image
		//* We can pass the property to the component

		//* Here the firstName, lastName and location are attributes which will get stored inside the props and  will be sent to hello component

		// return <Hello firstName="Joe" lastName="Jonas" location="New York" />;
		// return <Hello firstName="John" lastName="Snow" location="The North" />;

		//* We can pass in anything as props strings, expressions, methods, even JSX elements etc.
		return (
			<Hello
				firstName="John"
				lastName="Snow"
				location="The North"
				auth={true}
				logOut={() => alert("Logged out 💻")}
				header={<h1>"Yeah🔥" </h1>}
				footer={
					<footer>
						<a href="www.google.com">Google</a>
					</footer>
				}
			/>
		);

		// return <Hello />;
	}
}
