// React: Use Array.filter() to Dynamically Filter an Array

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
				{
					username: "Jeff",
					online: true,
				},
				{
					username: "Alan",
					online: false,
				},
				{
					username: "Mary",
					online: true,
				},
				{
					username: "Jim",
					online: false,
				},
				{
					username: "Sara",
					online: true,
				},
				{
					username: "Laura",
					online: true,
				},
			],
		};
	}
	render() {
		const usersOnline = this.state.users.filter((i) => i.online == true);
		//console.log(this.state.users[0].online)
		const renderOnline = usersOnline.map((i) => (
			<li key={i.username + 1}>{i.username}</li>
		)); // change code here
		return (
			<div>
				<h1>Current Online Users:</h1>
				<ul>{renderOnline}</ul>
			</div>
		);
	}
}
