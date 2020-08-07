import React from "react";

export default function ContactCard(props) {
	console.log(props);
	const divStyles = {
		color: "white",
		textAlign: "center",
		// border: " solid",
		width: "250px",
		margin: "10px",
		padding: "10px",
		borderRadius: "15px",
		background: "linear-gradient(to right, #7F7FD5, #86A8E7,#91EAE4)",
	};

	const imgStyles = {
		margin: "10px",
		border: "1px solid white",
		borderRadius: "50%",
		width: "220px",
		height: "220px",
	};
	console.log(props.contact);
	return (
		<div className="contact-card" style={divStyles}>
			<img
				src={props.contact.img}
				alt={props.contact.name}
				style={imgStyles}
			/>
			<h3>Name: {props.contact.name} </h3>
			<p>Phone: {props.contact.phone} </p>
			<p>Email: {props.contact.email} </p>
		</div>
	);
}
