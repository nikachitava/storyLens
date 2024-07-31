import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
	return (
		<div className="w-[500px] relative">
			<div className="relative">
				<input
					type="text"
					placeholder="search something"
					className="w-full py-1 px-4 bg-[#232325] focus:outline-none focus:border-slate-800 rounded-xl text-white"
				/>
				<button className="absolute right-1 top-1/2 -translate-y-1/2 px-4">
					<FaSearch color="white" />
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
