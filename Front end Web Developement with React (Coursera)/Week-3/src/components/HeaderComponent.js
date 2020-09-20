import React, { Component } from "react";
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	FormGroup,
	Form,
	Label,
	Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false,
		};
	}
	toggleNav = () => this.setState({ isNavOpen: !this.state.isNavOpen });

	toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

	handleLogin = (event) => {
		this.toggleModal();
		alert(
			"Username: " +
				this.username.value +
				" Password: " +
				this.password.value +
				" Remember: " +
				this.remember.checked
		);
		event.preventDefault();
	};

	render() {
		return (
			<>
				<Navbar dark expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand href="/" className="mr-auto">
							<img
								src="assets/images/logo.png"
								alt="Ristorante ConFusion"
								height="30"
								width="41"
							/>
						</NavbarBrand>
						<Collapse navbar isOpen={this.state.isNavOpen}>
							<Nav navbar>
								<NavItem>
									<NavLink className="nav-link" to="/home">
										<span className="fa fa-home fa-lg">
											&nbsp; Home
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/menu">
										<span className="fa fa-list fa-lg">
											&nbsp; Menu
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/about">
										<span className="fa fa-info fa-lg">
											&nbsp; About Us
										</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/contact">
										<span className="fa fa-address-card fa-lg">
											&nbsp; Contact
										</span>
									</NavLink>
								</NavItem>
							</Nav>
							<Nav className="ml-auto">
								<NavItem>
									<Button
										color="primary"
										onClick={this.toggleModal}
									>
										<span className="fa fa-sign-in  fa-lg"></span>{" "}
										&nbsp; Log In
									</Button>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<Jumbotron>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6">
								<h1>Ristorante ConFusion</h1>{" "}
								<p>
									We take inspiration from the World's best
									cuisines, and create a unique fusion
									experience. Our lipsmacking creations will
									tickle your culinary senses!
								</p>
							</div>
						</div>
					</div>
				</Jumbotron>
				<Modal
					isOpen={this.state.isModalOpen}
					toggle={this.toggleModal}
				>
					<ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleLogin}>
							<FormGroup>
								<Label htmlFor="username">Username</Label>
								<Input
									type="text"
									id="username"
									name="username"
									innerRef={(input) =>
										(this.username = input)
									}
								></Input>
							</FormGroup>
							<FormGroup>
								<Label htmlFor="password">Password</Label>
								<Input
									type="password"
									id="password"
									name="password"
									innerRef={(input) =>
										(this.password = input)
									}
								></Input>
							</FormGroup>
							<FormGroup check className="m-2">
								<Label check>
									<Input
										type="checkbox"
										name="remember"
										innerRef={(input) =>
											(this.remember = input)
										}
									></Input>
									Remember Me
								</Label>
							</FormGroup>
							<Button
								type="submit"
								value="submit"
								color="primary"
							>
								Login
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</>
		);
	}
}

export default Header;
