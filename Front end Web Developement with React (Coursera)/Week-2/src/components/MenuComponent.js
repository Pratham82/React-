import React from "react";
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

//* Functional component
const RenderMenuItem = ({ dish }) => (
	<Card>
		<Link to={`/menu/${dish.id}`}>
			<CardImg object src={dish.image} alt={dish.name} width="100%" />
			<CardImgOverlay>
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
				</CardBody>
			</CardImgOverlay>
		</Link>
	</Card>
);
const Menu = (props) => {
	const menu = props.dishes.map((item) => (
		<div key={item.id} className="col-12 col-md-5 m-1">
			<RenderMenuItem dish={item} />
		</div>
	));
	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/home">Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<Link to="/menu">Menu</Link>
					</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div className="row p-3">{menu}</div>
		</div>
	);
};

export default Menu;
