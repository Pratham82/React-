import React, { Component } from "react";
import {
	Media,
	Card,
	CardImg,
	CardImgOverlay,
	CardBody,
	CardTitle,
	CardText,
} from "reactstrap";
import dishes from "../shared/dishes";
import DishDetail from "./DishDetailComponent";

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = { dishes, selectedDish: null };
	}

	onDishSelect = (dish) => {
		this.setState({
			selectedDish: dish,
		});
	};

	render() {
		const menu = this.state.dishes.map((item) => (
			<div key={item.id} className="col-12 col-md-5 m-1">
				<Card onClick={() => this.onDishSelect(item)}>
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
				<DishDetail dish={this.state.selectedDish} />
			</div>
		);
	}
}
