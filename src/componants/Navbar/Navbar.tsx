import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const location = useLocation();

	return (
		<>
			<div className="navbar-container">
				<div className="navbar">
					<Link to="/"><img src="../src/assets/logo.png" alt="Logo" title="Logo de la page" /></Link>
					<div>
						<ul>
							<li className={location.pathname === '/' ? 'active' : ''}>
							<Link to="/">Home</Link>
							</li>
							<li className={location.pathname === '/galery' ? 'active' : ''}>
							<Link to="/galery">Jobs</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
export default Navbar;
