import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
	return (
		<div className="container px-2 lg:px-0">
			<NavBar />
			<Outlet />
		</div>
	);
};

export default Root;
