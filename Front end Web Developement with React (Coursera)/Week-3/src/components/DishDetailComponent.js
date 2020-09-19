import React from "react";
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardText,
	Breadcrumb,
	BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

//* Functional components
const RenderDish = ({ dish }) =>
	dish !== undefined ? (
		<React.Fragment>
			<div className="col-12 col-md-5 m-1">
				<Card>
					<CardImg
						object
						src={dish.image}
						alt={dish.name}
						width="100%"
					/>
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			</div>
		</React.Fragment>
	) : (
		<div></div>
	);

const RenderComments = ({ comment }) =>
	comment !== null ? (
		<div className="col-12 col-md-5 m-1">
			<h4>Comments</h4>
			<ul className="list-unstyled">
				{comment.map((c) => (
					<React.Fragment key={c.id}>
						<li>{c.comment}</li>
						<br />
						<li>{`-- ${c.author}, ${dateFormatter(c.date)}`}</li>
						<br />
					</React.Fragment>
				))}
			</ul>
		</div>
	) : (
		<div></div>
	);

const dateFormate = {
	year: "numeric",
	month: "short",
	day: "numeric",
};
const dateFormatter = (date) =>
	new Date(date).toLocaleDateString("en-US", dateFormate);

const DishDetail = (props) => (
	<div className="container">
		<div className="row">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/menu">Menu</Link>
					</BreadcrumbItem>
					<BreadcrumbItem>{props.dish.name}</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>{props.dish.name}</h3>
					<hr />
				</div>
				<div className="row">
					<RenderDish dish={props.dish} />
					<RenderComments comment={props.comments} />
				</div>
			</div>
		</div>
	</div>
);

export default DishDetail;
