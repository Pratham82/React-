import React, { Component } from "react";

const NumberItem = (props) => (
	<li>
		{props.value} <button onClick={props.rem}>Remove ⚔️</button>
	</li>
);

export default NumberItem;
