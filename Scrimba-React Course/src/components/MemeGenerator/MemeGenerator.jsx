import React, { Component } from "react";
import Header from "./Header";

/**
 * We'll be using an API that provides a bunch of meme images.
 *
 * Your task:
 * make an API call to "https://api.imgflip.com/get_memes" and save the
 * data that comes back (`response.data.memes`) to a new state property
 * called `allMemeImgs`. (The data that comes back is an array)
 */

export default class MemeGenerator extends Component {
	constructor() {
		super();

		this.state = {
			topText: "",
			bottomText: "",
			randomImage: "http://i.imgflip.com/1bij.jpg",
			allMemeImgs: [],
		};
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
			.then((response) => response.json())
			.then((memesData) => {
				const { memes } = memesData.data;
				this.setState({
					allMemeImgs: memes,
				});
			});
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	getRandom() {
		return Math.floor(Math.random() * 100 + 1);
	}
	handleSubmit = (event) => {
		const newRandomImg = this.state.allMemeImgs[this.getRandom()].url;
		console.log(newRandomImg);
		this.setState({
			randomImage: newRandomImg,
		});

		event.preventDefault();
	};

	render() {
		return (
			<div>
				<Header />
				{/* <img src={this.state.randomImage} alt="" /> */}
				<div>
					<form
						action=""
						className="meme-form"
						onSubmit={this.handleSubmit}
						style={{
							// display: "grid",
							display: "flex",
							placeItems: "center",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							padding: "10px",
						}}
					>
						<h1>Meme generator Section</h1>
						<label htmlFor="top">
							<input
								type="text"
								name="topText"
								id="top"
								value={this.state.topText}
								placeholder="Top text"
								style={{
									margin: "10px",
									padding: "10px",
									border: "1px solid purple",
									textAlign: "center",
									borderRadius: "20px",
									fontSize: "16px",
									width: "200px",
									backgroundColor: "transparent",
								}}
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="bottom">
							<input
								type="text"
								name="bottomText"
								id="bottom"
								value={this.state.bottomText}
								placeholder="Bottom text"
								style={{
									margin: "10px",
									padding: "10px",
									border: "1px solid purple",
									textAlign: "center",
									borderRadius: "20px",
									fontSize: "16px",
									width: "200px",
									backgroundColor: "transparent",
								}}
								onChange={this.handleChange}
							/>{" "}
						</label>
						<button>Gen</button>

						{/* <h2>Top text : {this.state.topText}</h2>
						<h2>Bttom text: {this.state.bottomText} </h2> */}
					</form>
					<div className="meme">
						<h2 className="top">{this.state.topText}</h2>
						<img src={this.state.randomImage} alt="" />
						<h2 className="bottom">{this.state.bottomText}</h2>
					</div>
				</div>
			</div>
		);
	}
}
