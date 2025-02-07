// import React from "react";
import "./HeaderHome.css";

const HeaderHome = () => {
	return (
		<header className="headerHome-container">
			<div className="headerHome-content">
				<h2>
					Vous cherchez
					<br />
					un travail ?
				</h2>
				{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a href="#" className="cta-button">
					Voir nos offres
				</a>
			</div>
			<div className="HeaderHome-image">
				<img
					src="https://images.piclumen.com/normal/20250207/07/7592641b3cfe4a6b95d5959aa93c61ee.webp"
					alt=""
				/>
			</div>
		</header>
	);
};

export default HeaderHome;
