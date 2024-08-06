import { useEffect, useState } from "react";
import BlogBanner from "../components/BlogBanner";
import axios from "axios";

interface IPosts {
	postID: number;
	userID: number;
	title: string;
	content: string;
	created_at: string;
	updated_at: string;
	coverImage: string;
	author: string;
}

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
		console.log(posts);
	}, []);

	return (
		<>
			{posts?.map((post) => (
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
	);
};

export default PostsSection;
