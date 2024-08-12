import { useContext, useEffect, useState } from "react";
import { IPosts } from "../Interface/IPosts";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import BlogBanner from "../components/BlogBanner";

const Profile = () => {
	const [myBlogs, setMyBlogs] = useState<IPosts[]>();

	const { currentUser } = useContext(AuthContext);
	const userID = currentUser && currentUser.userID;

	const fetchPosts = async () => {
		try {
			const response = await axios.get(
				`http://localhost:3000/posts/myposts/${userID}`
			);
			setMyBlogs(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, [userID]);

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

				<div className="h-1 w-full bg-red-400 my-2">
					<>
						{myBlogs?.map((post) => (
							<BlogBanner
								key={post.postID}
								title={post.title}
								subtitle={post.content}
								image={`http://localhost:3000/images/${post.coverImage}`}
								author={post.author}
								created_at={post.created_at}
							/>
						))}
					</>
				</div>
			</div>
		</section>
	);
};

export default Profile;
