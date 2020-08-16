<div
	style={{
		display: "flex",
		// placeItems: "center"
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		// padding: "10px",
	}}
>
	<Header />
	{/* <h1>Meme generator Section</h1> */}

	{/* <img src={this.state.randomImage} alt="" /> */}
	<div>
		<form
			action=""
			className="meme-form"
			style={{
				display: "grid",
				placeItems: "center",
				// flexDirection: "column",
				// justifyContent: "center",
				// alignItems: "center",
				// padding: "10px",
			}}
		>
			<label htmlFor="top">
				<input
					type="text"
					name="topText"
					id="top"
					value={this.state.topText}
					placeholder="Top text"
					style={{
						margin: "10px",
						padding: "5px",
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
						padding: "5px",
					}}
					onChange={this.handleChange}
				/>{" "}
			</label>
			<button>Gen</button>

			<h2>Top text : {this.state.topText}</h2>
			<h2>Bttom text: {this.state.bottomText} </h2>
		</form>
	</div>
</div>;
