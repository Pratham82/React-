import React, { Component } from "react";
import WisDom from "./Components/Wisdom";
import AnnoyingForm from "./Components/AnnoyingForm";
import CopyDemo from "./Components/CopyDemo";
import ButtonList from "./Components/ButtonList";
import NumberList from "./Components/Bindings/NumberList";
import BetterNumberList from "./Components/Bindings/BetterNumberList";

class App extends Component {
	render() {
		return (
			<div>
				<WisDom />
				<AnnoyingForm />
				<CopyDemo />
				<ButtonList />
				<NumberList />
				<BetterNumberList />
			</div>
		);
	}
}

export default App;
