import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IPosts } from "../Interface/IPosts.ts";
import SearchCard from "./SearchCard.tsx";
import { makeRequest } from "../utils/axios.ts";

const SearchBar = () => {
	const [blogs, setBlogs] = useState<IPosts[]>();
	const [search, setSearch] = useState("");

	const handleSearch = (e: any) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		try {
			makeRequest
				.get("posts")
				.then((response) => setBlogs(response.data))
				.catch((e) => console.log(e));
		} catch (error) {
			console.log(error);
		}
	}, []);

	const clearSearch = () => {
		setSearch("");
	};

	return (
		<div className="w-[500px] relative">
			<div className="relative">
				<input
					type="text"
					placeholder="search something"
					className="w-full py-1 px-4 bg-[#232325] focus:outline-none focus:border-slate-800 rounded-xl text-white"
					onChange={handleSearch}
				/>
				<button className="absolute right-1 top-1/2 -translate-y-1/2 px-4">
					<FaSearch color="white" />
				</button>
			</div>
			{search && (
				<div className="absolute top-20 left-0 w-full p-4 bg-secondary overflow-scroll overflow-x-hidden h-[500px] shadow-lg">
					<div className="flex flex-col gap-6">
						{blogs &&
							blogs
								.filter((item) => {
									return search.toLowerCase() === ""
										? item
										: item.title
												.toLowerCase()
												.includes(search);
								})
								.map((item) => (
									<SearchCard
										postID={item.postID}
										title={item.title}
										subtitle={item.content}
										image={item.coverImage}
										author={item.author}
										created_at={item.created_at}
										onClick={clearSearch}
									/>
								))}
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchBar;
