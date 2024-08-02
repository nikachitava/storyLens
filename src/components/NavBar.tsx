import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
	return (
		<header className="flex justify-between items-center py-4">
			<div>
				<Link to={"/"}>
					<h1 className="text-2xl font-bold text-white">
						story<span className="text-primary">L</span>
						ens
					</h1>
				</Link>
			</div>
			<div className="hidden lg:block">
				<SearchBar />
			</div>
			<div className="flex gap-4 items-center text-white">
				<Link to={"/login"}>
					<p>Log in</p>
				</Link>
				<Link to={"/login"}>
					<p>Register</p>
				</Link>
			</div>
		</header>
	);
};

export default NavBar;
