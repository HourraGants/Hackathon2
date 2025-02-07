// import React from "react";
import "./HeaderHome.css";
import { Link } from "react-router-dom";

const HeaderHome = () => {
	return (
		<header className="headerHome-container">
			<div className="headerHome-content">
				<h2>
					Vous cherchez
					<br />
					un travail ?
				</h2>

				<Link className="LinkBouton" to="/galery">
				<button type="button" className="cta-button">
					Voir nos offres
				</button>
				</Link>
			</div>
			<div className="HeaderHome-image">
				<img src="../src/assets/icons8-medieval-100.webp" alt="#" />
			</div>
		</header>
	);
};
export default HeaderHome;



