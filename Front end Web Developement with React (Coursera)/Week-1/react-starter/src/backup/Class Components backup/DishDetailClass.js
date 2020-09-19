//* Class bases components
// export default class DishDetail extends Component {
// 	renderDish = (dish) => {
// 		return dish !== undefined ? (
// 			<React.Fragment>
// 				<div className="col-12 col-md-5 m-1">
// 					<Card>
// 						<CardImg
// 							object
// 							src={dish.image}
// 							alt={dish.name}
// 							width="100%"
// 						/>
// 						<CardBody>
// 							<CardTitle>{dish.name}</CardTitle>
// 							<CardText>{dish.description}</CardText>
// 						</CardBody>
// 					</Card>
// 				</div>
// 				<div className="col-12 col-md-5 m-1">
// 					<h4>Comments</h4>
// 					{this.renderComments(dish.comments)}
// 				</div>
// 			</React.Fragment>
// 		) : (
// 			<div></div>
// 		);
// 	};

// 	renderComments = (comment) => {
// 		return comment !== null ? (
// 			<ul className="list-unstyled">
// 				{comment.map((c) => (
// 					<React.Fragment key={c.id}>
// 						<li>{c.comment}</li>
// 						<br />
// 						<li>
// 							{`-- ${c.author}, ${this.dateFormatter(c.date)}`}
// 						</li>
// 						<br />
// 					</React.Fragment>
// 				))}
// 			</ul>
// 		) : (
// 			<div></div>
// 		);
// 	};

// 	dateFormatter = (date) => {
// 		const dateFormate = { year: "numeric", month: "short", day: "numeric" };
// 		const modDate = new Date(date);
// 		const finalDate = modDate.toLocaleDateString("en-US", dateFormate);
// 		return finalDate;
// 	};

// 	render() {
// 		return (
// 			<div className="container">
// 				<div className="row">{this.renderDish(this.props.dish)} </div>
// 			</div>
// 		);
// 	}
// }
