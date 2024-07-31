import SearchBar from "./SearchBar";

const NavBar = () => {
	return (
		<header className="flex justify-between items-center py-4">
			<div>
				<h1 className="text-2xl font-bold text-white">
					story<span className="text-primary">L</span>
					ens
				</h1>
			</div>
			<div className="hidden lg:block">
				<SearchBar />
			</div>
			<div className="flex gap-4 items-center text-white">
				<p>Log in</p>
				<p>Register</p>
			</div>
		</header>
	);
};

export default NavBar;
