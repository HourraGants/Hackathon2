import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const location = useLocation();

	return (
		<>
			<div className="navbar-container">
				<div className="navbar">
          <div className="logos">
            <h2>Guild'</h2>
            <Link to="/">
              <img src="../src/assets/logo.png" alt="Logo" title="Logo de la page" />
            </Link>
            <h2>Emploi</h2>
          </div>
					<div>
						<ul>
							<li className={location.pathname === '/' ? 'active' : 'inactive'}>
							<Link to="/">Home</Link>
							</li>
							<li className={location.pathname === '/galery' ? 'active' : 'inactive'}>
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
