import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./componants/Navbar/Navbar";
import Footer from "./componants/Footer/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
