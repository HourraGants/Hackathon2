import type React from "react";
import "./searchBar.css";

const SearchBarHome: React.FC = () => {
	return (
		<div className="searchBar-container">
			<div className="searchBar-box">
				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
				<label> Que recherchez-vous ?</label>
				<input type="text" placeholder="Métier, Compétences, Offres..." />
			</div>
			<div className="searchBar-box">
				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
				<label> Où recherchez-vous ?</label>
				<input type="text" placeholder="Quel pays, Quelle ville..." />
			</div>

			<div className="searchBar-menuicon">
				<img src="" alt="Menu" />

				<div className="searchBar-icon">
					<img
						src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
						alt="loupe"
					/>
				</div>
			</div>
		</div>
	);
};
export default SearchBarHome;
