import React from "react";
import ReactDOM from "react-dom";
import ContactCard from "./ContactCard";

export default function ContactLis() {
	return (
		<div
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "center",
				// flexDirection: "row",
			}}
		>
			<ContactCard
				contact={{
					name: "Mr. Whiskerson",
					img: "http://placekitten.com/300/200",
					phone: "(212) 555-1234",
					email: "mr.whiskaz@catnap.meow",
				}}
			/>
			<ContactCard
				contact={{
					name: "Fluffykins",
					img: "http://placekitten.com/400/200",
					phone: "(212) 555-2345",
					email: "Email: fluff@me.com",
				}}
			/>
			<ContactCard
				contact={{
					name: "Destroyer",
					img: "http://placekitten.com/400/400",
					phone: "(212) 555-3456",
					email: "fworlds@yahoo.com",
				}}
			/>
			<ContactCard
				contact={{
					name: "Felix",
					img: "http://placekitten.com/200/200",
					phone: "(212) 555-4567",
					email: "thecat@hotmail.com",
				}}
			/>
		</div>
	);
}

/*
// Using JS and template Strings
	let op = "";
	data.map((user) => {
		op += `
		<div className="contact" style="display:flex; justify-content: center;
		 ">
		<div className="contact-card" style="color: white; text-align:center; border: white 1px solid; width: 300px; margin:10px 0">
				<img src=${user.img} alt=${user.name} style="margin:10px; border:1px solid white" width="250px" height="150px"/>
				<h3>Name: ${user.name} </h3>
				<p>Phone: ${user.phone} </p>
				<p>Email: ${user.email} </p>
			</div>
			</div>`;
	});
	// document.querySelector(".contact").innerHTML = op;
	// console.log(op);

	// return <div dangerouslySetInnerHTML={{ __html: op }}></div>;
	const data = [
			{
				name: "Mr. Whiskerson",
				img: "http://placekitten.com/300/200",
				phone: "(212) 555-1234",
				email: "mr.whiskaz@catnap.meow",
			},
			{
				name: "Fluffykins",
				img: "http://placekitten.com/400/200",
				phone: "(212) 555-2345",
				email: "Email: fluff@me.com",
			},
			{
				name: "Destroyer",
				img: "http://placekitten.com/400/400",
				phone: "(212) 555-3456",
				email: "fworlds@yahoo.com",
			},
			{
				name: "Felix",
				img: "http://placekitten.com/200/200",
				phone: "(212) 555-4567",
				email: "thecat@hotmail.com",
			},
		];
*/
