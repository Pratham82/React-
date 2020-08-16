import React from "react";

const Header = () => {
	return (
		<header
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				// margin: "0  auto",
			}}
		>
			<img
				src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
				alt="Problem?"
			/>
			<p>Memes</p>
		</header>
	);
};

export default Header;
