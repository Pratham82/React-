import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
} from "reactstrap";
const RenderCard = ({ item }) => (
	<Card>
		<CardImg src={item.image} alt={item.name} />
		<CardBody>
			<CardTitle>
				<b>{item.name}</b>
			</CardTitle>
			{item.designation && (
				<CardSubtitle>{item.designation}</CardSubtitle>
			)}
			<CardText>{item.description}</CardText>
		</CardBody>
	</Card>
);
const Home = (props) => {
	return (
		<div className="container">
			<div className="row align-item-start">
				<div className="col-12 col-md m-1">
					<RenderCard item={props.dish} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.promotion} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.leader} />
				</div>
			</div>
		</div>
	);
};

export default Home;
