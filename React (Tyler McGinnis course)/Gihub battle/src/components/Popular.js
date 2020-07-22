import React from "react";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";
// Functional component for Navbar

// This function is taking two different props from the parent
//{ selected, onUpdateLanguage }
function LanguagesNav(props) {
	const Languages = [
		"All",
		"JavaScript",
		"Java",
		"Python",
		"C++",
		"Ruby",
		"CSS",
	];
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
			repos: null,
			error: null,
		};

		//* whenever you make a method, bind the method to correct "this" keyword
		this.updateLanguage = this.updateLanguage.bind(this);
		this.isLoading = this.isLoading.bind(this);
	}

	// When the component first getting updated instead of loading pass in "all" languages in updateLanguage method and render the data on the DOM
	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage);
	}

	updateLanguage(selectedLanguage) {
		this.setState(
			{
				// this will set the selected language to the selected language inside the state
				// We are setting the repos and error to null until the repos are fetching
				selectedLanguage,
				repos: null,
				error: null,
			},

			// For checking if the selected language is correct
			() => console.log(this.state.selectedLanguage)
		);

		//When we got the repositories then we can add them to the state
		fetchPopularRepos(selectedLanguage)
			.then((repos) =>
				this.setState({
					repos,
					error: null,
				})
			)
			.catch(() => {
				console.warn(`Error fetching repos `);

				this.setState({
					error: "There was an error fetching repositories",
				});
			});
	}

	isLoading() {
		return this.state.repos === null && this.state.error === null;
	}

	render() {
		// This will take the current selected language from the state
		const { selectedLanguage, repos, error } = this.state;

		//* Here we are passing the current state and updateLanguage function inside our LanguagesNav Component as a function

		//* We can either pass them as props or we can pass them as the variables inside the expressions

		return (
			<React.Fragment>
				<LanguagesNav
					selected={selectedLanguage}
					// onUpdateLanguages will refer to the updateLanguage function
					onUpdateLanguage={this.updateLanguage}
				/>

				{/* If isLoading is truthy then LOADING will evaluate true */}
				{this.isLoading() && <p>LOADING</p>}

				{error && <p></p>}

				{repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
			</React.Fragment>
		);
	}
}
