import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardText,
	CardTitle,
	CardBody,
	Breadcrumb,
	BreadcrumbItem,
	Modal,
	ModalBody,
	ModalHeader,
	Button,
	Row,
	Col,
	Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import Loading from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false,
		};
	}

	handleToggle = () => this.setState({ modalOpen: !this.state.modalOpen });

	submitHandle = (values) => {
		this.handleToggle(values);
		// alert(`Current state is: ${JSON.stringify(values)}`);
		this.props.addComments(
			this.props.dishId,
			values.rating,
			values.author,
			values.comment
		);
	};

	render() {
		return (
			<>
				<Button
					className="bg-white text-dark"
					onClick={this.handleToggle}
				>
					<i className="fa fa-pencil fa-lg"></i> Submit Comment
				</Button>
				<Modal isOpen={this.state.modalOpen} toggle={this.handleToggle}>
					<ModalHeader toggle={this.handleToggle}>
						Submit Comment
					</ModalHeader>
					<ModalBody>
						<LocalForm
							onSubmit={(value) => this.submitHandle(value)}
						>
							<Row className="form-group">
								<Label htmlFor="rating" md={4}>
									Rating
								</Label>
								<Col md={12}>
									<Control.select
										model=".rating"
										id="rating"
										name="rating"
										className="form-control"
									>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="author" md={4}>
									Your Name
								</Label>
								<Col md={12}>
									<Control.text
										model=".author"
										id="author"
										name="author"
										placeholder="Your Name"
										className="form-control"
										validators={{
											minLength: minLength(3),
											maxLength: maxLength(15),
										}}
									/>
									<Errors
										className="text-danger"
										model=".author"
										show="touched"
										messages={{
											minLength:
												"Must be greater than 2 characters",
											maxLength:
												"Must be 15 characters or less",
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="comment" md={4}>
									Comment
								</Label>
								<Col md={12}>
									<Control.textarea
										model=".comment"
										id="comment"
										name="comment"
										className="form-control"
										validators={{
											required,
										}}
										rows="6"
									/>
									<Errors
										className="text-danger"
										model=".comment"
										show="touched"
										messages={{
											required: "Comment Required",
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<Button
										type="submit"
										color="primary"
										onSubmit={this.showReview}
									>
										Submit
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</>
		);
	}
}

//* Functional components
const RenderDish = ({ dish, isLoading, errMess }) => {
	if (isLoading) {
		return (
			<div className="container">
				<div className="row">
					<Loading />
				</div>
			</div>
		);
	} else if (errMess) {
		return (
			<div className="container">
				<div className="row">
					<h4>{errMess}</h4>
				</div>
			</div>
		);
	} else if (dish !== undefined) {
		return (
			<React.Fragment>
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg
							object
							src={baseUrl + dish.image}
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
		);
	} else {
		return <div></div>;
	}
};

const RenderComments = ({ comment, addComments, dishId }) =>
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
				<CommentForm dishId={dishId} addComments={addComments} />
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

const DishDetail = (props) => {
	if (props.isLoading) {
		return <Loading />;
	} else if (props.errMess) {
		return <h4>{props.errMess}</h4>;
	} else
		return (
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
							<RenderDish
								dish={props.dish}
								isLoading={props.isLoading}
								errMess={props.errMess}
							/>
							<RenderComments
								comment={props.comments}
								addComments={props.addComments}
								dishId={props.dish.id}
							/>
						</div>
					</div>
				</div>
			</div>
		);
};

export default DishDetail;
