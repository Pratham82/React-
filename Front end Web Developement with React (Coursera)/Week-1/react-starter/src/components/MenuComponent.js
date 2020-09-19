import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

// * Class based component
export default class Menu extends Component {
	render() {
		const menu = this.props.dishes.map((item) => (
			<div key={item.id} className="col-12 col-md-5 m-1">
				<Card onClick={() => this.props.onClick(item.id)}>
					<CardImg
						object
						src={item.image}
						alt={item.name}
						width="100%"
					/>
					<CardImgOverlay>
						<CardBody>
							<CardTitle>{item.name}</CardTitle>
						</CardBody>
					</CardImgOverlay>
				</Card>
			</div>
		));

		return (
			<div className="container">
				<div className="row">{menu}</div>
			</div>
		);
	}
}
