import { useState } from "react";

import MyBlogsSection from "../sections/MyBlogsSection";
import CreateBlogSection from "../sections/CreateBlogSection";

const Profile = () => {
	const [activeTab, setActiveTab] = useState(0);
	const tabLists = ["My Blogs", "Add new blog"];

	const checkActiveTab = (activeTab: number) => {
		switch (activeTab) {
			case 0:
				return <MyBlogsSection />;
			case 1:
				return <CreateBlogSection />;
		}
	};

	return (
		<section className="my-20 flex flex-col lg:flex-row gap-5">
			<div className="hidden lg:block">
				<img src="http://picsum.photos/200" alt="photo" />
			</div>
			<div className="hidden lg:block">
				<div className="h-full w-1 bg-primary"></div>
			</div>
			<div className="flex-1">
				<ul className="flex items-center gap-4">
					{tabLists.map((tab, index) => (
						<li
							key={index}
							onClick={() => setActiveTab(index)}
							className={`${
								activeTab == index
									? "bg-secondary"
									: "bg-green-300"
							} p-2 rounded-md focus:bg-green-200 cursor-pointer `}
						>
							{tab}
						</li>
					))}
				</ul>

				<div className="h-1 w-full bg-primary my-2"></div>
				<>{checkActiveTab(activeTab)}</>
			</div>
		</section>
	);
};

export default Profile;
