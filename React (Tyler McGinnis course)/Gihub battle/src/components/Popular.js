import React from "react";

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
		const Languages = [
			"All",
			"JavaScript",
			"Ruby",
			"Java",
			"Python",
			"CSS",
		];
		return (
			<ul className="flex-center">
				{Languages.map((Language) => (
					<li key={Language}>
						<button
							className="btn-clear nav-link"
							onClick={() => this.updateLanguage(Language)}
							// Change the color of the button when that button is selected
							style={
								Language === this.state.selectedLanguage
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
}
