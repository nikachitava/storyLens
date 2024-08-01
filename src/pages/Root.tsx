import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Root = () => {
	return (
		<div className="container px-2 lg:px-0">
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Root;
