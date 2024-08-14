import { useEffect, useState } from "react";
import BlogBanner from "../components/BlogBanner";
import axios from "axios";
import { IPosts } from "../Interface/IPosts";

const PostsSection = () => {
	const [posts, setPost] = useState<IPosts[]>();

	const fetchPosts = async () => {
		await axios
			.get("http://localhost:3000/posts")
			.then((response) => {
				setPost(response.data);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<>
			{posts ? (
				posts.map((post) => (
					<BlogBanner
						key={post.postID}
						title={post.title}
						subtitle={post.content}
						image={`http://localhost:3000/images/${post.coverImage}`}
						author={post.author}
						created_at={post.created_at}
					/>
				))
			) : (
				<h1 className="text-2xl text-white font-bold">
					There is no blogs founded
				</h1>
			)}
		</>
	);
};

export default PostsSection;
