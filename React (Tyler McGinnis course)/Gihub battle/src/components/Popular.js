import React from "react";

export default class Popular extends React.Component {
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
						<button className="btn-clear nav-link">
							{Language}
						</button>
					</li>
				))}
			</ul>
		);
	}
}
