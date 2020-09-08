import React, { Component } from "react";
import ChildBox from "./ChildBox";

class ParentBox extends Component {
	static defaultProps = {
		colors: [
			"#CCE07A",
			"#4EF757",
			"#D71602",
			"#C159FB",
			"#A092E5",
			"#FDA391",
			"#D9AE47",
			"#929994",
			"#14C1C3",
			"#6E281E",
			"#B4DF91",
			"#506FFF",
			"#6B875A",
			"#C8F215",
			"#8F79E1",
			"#351A53",
		],
	};

	constructor(props) {
		super(props);
	}

	render() {
		const colArr = this.props.colors;
		const ParentStyling = {
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
		};
		return (
			<div>
				<h1>Colors Game</h1>
				<div style={ParentStyling}>
					{colArr.map((val, i) => (
						<ChildBox
							bg={val.split(" ")[0]}
							key={i}
							index={val.split(" ")[1]}
							allColors={this.props.colors}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default ParentBox;
