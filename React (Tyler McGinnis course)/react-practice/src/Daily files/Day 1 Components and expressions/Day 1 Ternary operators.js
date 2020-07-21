import React from "react";

export default class App extends React.Component {
	render() {
		//* If we don't return anything in the DOM we can do the following
		// if (isLoading() === true) {
		// 	return null;
		// }
		function isAuth() {
			return true;
		}

		function showWarning() {
			return true;
		}

		const auth = isAuth();

		//* We can combine both functions

		return (
			<div>
				{/* {auth === true ? (
					<h2 className="p-5 text-xl">
						Welcome back you passed the auth test 😄
					</h2>
				) : (
					<h2 className="p-5 text-xl">
						Oops !! 😟, something wrong, please check the password
					</h2>
				)} */}

				{showWarning() === true && <h3> 🔴 </h3>}

				{showWarning() === true ? <h3> 🔴 </h3> : null}
			</div>
		);
	}
}
