const Profile = () => {
	return (
		<section className="my-20 flex gap-5 h-screen">
			<div>
				<img src="http://picsum.photos/200" alt="photo" />
			</div>
			<div className="">
				<div className="h-full w-1 bg-red-400"></div>
			</div>
			<div className="flex-1">
				<ul className="flex items-center gap-4">
					<li className="bg-green-300 p-2 rounded-md hover:bg-green-200 cursor-pointer transition-all ease-in-out ">
						My Blogs
					</li>
					<li className="bg-green-300 p-2 rounded-md hover:bg-green-200 cursor-pointer transition-allease-in-out">
						Add new blog
					</li>
				</ul>

				<div className="h-1 w-full bg-red-400 my-2"></div>
			</div>
		</section>
	);
};

export default Profile;
