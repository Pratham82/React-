class Hello extends React.Component {
	render() {
		const details = {
			firstName: "Prathamesh",
			lastName: "Mali",
			// email: "mali.prathamesh82@gmail.com",
		};
		return (
			<div
				style={{
					padding: "10px",
					border: "1px solid",
					backgroundColor: "#0ac0f7",
				}}
			>
				<h3 style={{ border: "1px solid", padding: "5px" }}>
					Hello Component
				</h3>
				<h1>
					Hello there I am {details.firstName} {details.lastName}
				</h1>
			</div>
		);
	}
}

// ReactDOM.render(<Hello />, document.getElementById("root"));
