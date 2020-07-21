import React from "react";
import PropTypes from "prop-types";

// Functional component for Navbar

// This function is taking two different props from the parent
//{ selected, onUpdateLanguage }
function LanguagesNav(props) {
	const Languages = ["All", "JavaScript", "Ruby", "Java", "Python", "CSS"];
	return (
		<ul className="flex-center">
			{Languages.map((Language) => (
				<li key={Language}>
					<button
						className="btn-clear nav-link"
						onClick={() => props.onUpdateLanguage(Language)}
						// Change the color of the button when that button is selected
						style={
							Language === props.selected
								? {
										color: "red",
								  }
								: null
						}
					>
						{Language}
					</button>
				</li>
			))}
		</ul>
	);
}

// Now we will add propTypes to the Language, propTypes provides type safety for our component be it functional or class components

// So anytime when the props which are mentioned here does not follows the rules we will get a warning

LanguagesNav.propTypes = {
	// isRequired states to that this property is required, "func" is used instead of "function" because "function" is a reserved keyword in JS
	selected: PropTypes.string.isRequired,
	onUpdateLanguage: PropTypes.func.isRequired,
};

export default class Popular extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedLanguage: "All",
		};

		//* whenever you make a method, bind the method to correct "this" keyword
		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(newLanguage) {
		this.setState(
			{
				// this will set the selected language to the selected language inside the state
				selectedLanguage: newLanguage,
			},
			// For checking if the selected language is correct
			() => console.log(this.state.selectedLanguage)
		);
	}

	render() {
		// This will take the current selected language from the state
		const { selectedLanguage } = this.state;

		//* Here we are passing the current state and updateLanguage function inside our LanguagesNav Component as a function

		//* We can either pass them as props or we can pass them as the variables inside the expressions

		return (
			<React.Fragment>
				<LanguagesNav
					selected={selectedLanguage}
					// onUpdateLanguages will refer to the updateLanguage function
					onUpdateLanguage={this.updateLanguage}
				/>
			</React.Fragment>
		);
	}
}
